---
title: Content Analytics Crash Recovery Architecture
description: Learn how to use experience tracking in Content Analytics.
keywords:
- Adobe Analytics
- Product overview
---

import Tabs from './tabs/crash-recovery.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Crash recovery architecture

## Overview

Content Analytics uses `PersistentHitQueue` to protect against data loss during the batching window (0-5 seconds). Events are written to disk immediately when tracked. On next app launch, any persisted events are recovered from disk into memory for processing, then cleared from disk (no data loss - events are safely in memory before disk cleanup).

## How It Works

```00% hone
User tracks event
  └─> Event added to memory + disk (crash-safe)
      │
      └─> Batching (0-5 seconds)
          │
          └─> Flush triggered
              │
              ├─> Process accumulated events
              ├─> Calculate aggregated metrics
              └─> Dispatch to Edge Network (Edge guarantees delivery)
```

## Architecture Components

### BatchCoordinator

**Responsibilities:**

- Manages batching logic (count threshold + time-based flush)
- Writes incoming events to disk immediately via `PersistentHitQueue`
- Maintains in-memory event counters
- Triggers flush when threshold reached (10 events or 5 seconds)
- Coordinates between `DirectHitProcessor` and `ContentAnalyticsOrchestrator`

**Key Methods:**

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=batch-coordinator"/>

iOS

<Tabs query="platform=ios&task=batch-coordinator"/>

### DirectHitProcessor

**Responsibilities:**

- Implements `HitProcessing` protocol for `PersistentHitQueue` integration
- Accumulates events in memory for fast batching
- On recovery: loads events from disk into memory, then clears disk (no data loss)

**Event Lifecycle:**

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=direct-hit-processor"/>

iOS

<Tabs query="platform=ios&task=direct-hit-processor"/>

### PersistentHitQueue (AEPServices)

**Provides:**

- Two separate queues: `asset.events` and `experience.events`
- SQLite-backed persistence (survives crashes, force-quit, background termination)
- Automatic processing via `beginProcessing()`
- Thread-safe operations

**Storage:**

- Events encoded as JSON via `Event: Codable`
- Each event wrapped with type metadata (`asset` or `experience`)
- Unique identifier: `event.id.uuidString`

## Detailed Timeline Example

```
Time   │ Event                                │ Memory │ Disk │ Safe?
───────┼──────────────────────────────────────┼────────┼──────┼───────
00.00s │ User views Asset A                   │ ✓      │ ✓    │ ✅ YES
00.01s │ Event written to disk                │ ✓      │ ✓    │ ✅ YES
00.50s │ User clicks Asset B                  │ ✓      │ ✓    │ ✅ YES
01.00s │ User clicks Asset B                  │ ✓      │ ✓    │ ✅ YES
       │ [Batching window - events on disk]   │        │      │
02.00s │ Timer fires → Flush triggered        │ ✓      │ ✓    │ ✅ YES
02.01s │ Process accumulated events           │ ✓      │ ✓    │ ✅ YES
02.02s │ Calculate metrics (1 view, 2 clicks) │ ✓      │ ✓    │ ✅ YES
02.03s │ Dispatch to Edge Network             │ ✗      │ ✗    │ ✅ YES*
       │ (*Edge guarantees delivery)          │        │      │

Legend:
✓ = Present
✗ = Not present
```

Events stay on disk during the entire batching window. Once we hand off to Edge, their persistence takes over.

## Crash Scenarios

### Scenario 1: Crash During Batching (0-5s window)

```
Status: Events in memory + disk
Crash:  ⚡ App terminated
        └─> Memory lost ✗
        └─> Disk persists ✓

Recovery on Next Launch:
1. PersistentHitQueue.beginProcessing() starts
2. DirectHitProcessor.processHit() called for each persisted event
3. Events accumulated in memory, cleared from disk
4. Normal batch processing resumes

Result: ✅ ZERO DATA LOSS
```

### Scenario 2: Crash During Flush

```
Status: Events being processed
Crash:  ⚡ App terminated mid-dispatch
        └─> Memory lost ✗
        └─> Events may still be on disk if not yet processed

Recovery on Next Launch:
1. Any remaining events on disk are recovered
2. Re-accumulated and dispatched on next flush

Result: ✅ ZERO DATA LOSS (possible duplicate if crash after Edge dispatch)
```

### Scenario 3: Crash After Edge Dispatch

```
Status: Events dispatched to Edge
Crash:  ⚡ App terminated
        └─> Disk already cleared during processHit()
        └─> Edge has the events

Result: ✅ ZERO DATA LOSS - Edge guarantees delivery
```

## Edge Network Handoff

Once we dispatch to Edge extension:

```
ContentAnalytics → runtime.dispatch(event) → Event Hub → Edge Extension
                                                           └─> Edge.PersistentHitQueue
                                                               └─> Network retries
                                                               └─> Exponential backoff
```

**Handoff Point:** After `eventDispatcher.dispatch()` completes, Edge extension owns persistence.

**Edge Guarantees:** Once Edge receives the event, it handles persistence, retries, and delivery confirmation.

## Metrics Calculation

Metrics are **derived from events**, not stored separately:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=metrics-calculation"/>

iOS

<Tabs query="platform=ios&task=metrics-calculation"/>

This avoids state sync issues - we just count events on flush. If the app crashes, the restored events give us the same metrics.

## Configuration

```json
{
  "contentanalytics.batchingEnabled": true,
  "contentanalytics.maxBatchSize": 10,
  "contentanalytics.batchFlushInterval": 2000
}
```

**Parameters:**

- `maxBatchSize`: Event count threshold (default: 10)
- `batchFlushInterval`: Timer interval for periodic flush in milliseconds (default: 2000 ms = 2s). Max wait time is derived from this (2.5× = 5000 ms).
- `batchingEnabled`: Set to `false` for immediate dispatch (no batching)

## Performance Characteristics

| Operation | Time | Notes |
|-----------|------|-------|
| Event persistence | ~1-2ms | SQLite write |
| Event recovery | ~5-10ms | SQLite read on launch |
| Batch flush | ~10-20ms | Metrics calculation + Edge dispatch |
| Memory per event | ~2KB | Event object + metadata |
| Disk per event | ~1-2KB | JSON encoding |

**Memory Usage:** With default batch size (10), worst-case memory is ~20-40KB (negligible).

**Network Efficiency:** Batching reduces Edge Network calls by 10x for high-volume tracking.

## Thread Safety

All operations use Kotlin coroutines with `Mutex` for thread-safe access:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&task=thread-safety"/>


## Testing Crash Recovery

### Test 1: Crash During Batching

1. Track 5 asset events
2. DO NOT wait for flush timer
3. Force-quit app (⌘+Q or kill process)
4. Relaunch app
5. Track 5 more asset events
6. Wait 2 seconds for flush
7. Verify: 1 Edge event with 10 aggregated interactions


### Test 2: Crash During Flush


1. Track 10 asset events (triggers immediate flush)
2. Set breakpoint in `sendToEdge()`
3. Force-quit app at breakpoint
4. Relaunch app
5. Wait 5 seconds
6. Verify: Events re-dispatched (possible duplicate)

### Test 3: Background Termination

1. Track events
2. Background app
3. OS terminates app (memory pressure)
4. Relaunch app
5. Verify: Events recovered and dispatched

## Implementation Details

### Key Files

- `BatchCoordinator.swift` - Batching logic and persistence coordination
- `DirectHitProcessor.swift` - Crash recovery and event accumulation
- `ContentAnalyticsOrchestrator.swift` - Metrics calculation and Edge dispatch
- `PersistentHitQueue` (AEPServices) - SQLite-backed queue

### Thread Safety

- All operations use serial dispatch queues
- `batchQueue` (BatchCoordinator) - batch operations
- `queue` (DirectHitProcessor) - hit processing

### Data Flow

```
Event tracked
  └─> BatchCoordinator.addAssetEvent()
      ├─> DirectHitProcessor.accumulateEvent()  [memory]
      ├─> PersistentHitQueue.queue()            [disk]
      └─> checkAndFlushIfNeeded()
          └─> performFlush()
              └─> DirectHitProcessor.processAccumulatedEvents()
                  └─> Orchestrator.processAssetEvents()
                      └─> EventDispatcher.dispatch()  [→ Edge]
```

### Callback Chain Architecture

The SDK uses a callback chain to decouple components while maintaining type safety:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           INITIALIZATION PHASE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ContentAnalyticsFactory.createOrchestrator()                               │
│    │                                                                        │
│    ├─> Creates BatchCoordinator(assetQueue, experienceQueue, state)         │
│    │     └─> DirectHitProcessor initialized with no-op callbacks            │
│    │                                                                        │
│    ├─> Creates ContentAnalyticsOrchestrator(batchCoordinator, ...)          │
│    │                                                                        │
│    └─> Wires callbacks: batchCoordinator.setCallbacks(                      │
│          assetCallback: orchestrator.processAssetEvents,                    │
│          experienceCallback: orchestrator.processExperienceEvents           │
│        )                                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                            RUNTIME DATA FLOW                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  User calls ContentAnalytics.trackAssetInteraction()                        │
│    │                                                                        │
│    v                                                                        │
│  ┌──────────────────┐                                                       │
│  │ BatchCoordinator │                                                       │
│  │  addAssetEvent() │──────────────────────────────────────────┐            │
│  └────────┬─────────┘                                          │            │
│           │                                                    │            │
│           v                                                    v            │
│  ┌────────────────────┐                           ┌─────────────────────┐   │
│  │ DirectHitProcessor │                           │ PersistentHitQueue  │   │
│  │ accumulateEvent()  │                           │ queue() [disk]      │   │
│  │ [memory buffer]    │                           └─────────────────────┘   │
│  └────────┬───────────┘                                                     │
│           │                                                                 │
│           │ (on flush trigger: count >= 10 or timer >= 2s)                  │
│           v                                                                 │
│  ┌────────────────────────────┐                                             │
│  │ DirectHitProcessor         │                                             │
│  │ processAccumulatedEvents() │                                             │
│  └────────┬───────────────────┘                                             │
│           │                                                                 │
│           │ invokes processingCallback([events])                            │
│           v                                                                 │
│  ┌─────────────────────────────────┐                                        │
│  │ ContentAnalyticsOrchestrator    │                                        │
│  │ processAssetEvents([events])    │                                        │
│  │   ├─> Group by asset key        │                                        │
│  │   ├─> Calculate metrics         │                                        │
│  │   └─> Build XDM payload         │                                        │
│  └────────┬────────────────────────┘                                        │
│           │                                                                 │
│           v                                                                 │
│  ┌───────────────────┐                                                      │
│  │ EdgeEventDispatcher│                                                     │
│  │ dispatch()         │──────────────> Edge Network                         │
│  └───────────────────┘                                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

Callbacks avoid circular dependencies - BatchCoordinator doesn't need to import Orchestrator. Also makes testing easier since we can inject mocks.

### Logging

Enable verbose logging to debug crash recovery:

```swift
Log.setLogLevel(.trace)
```

Look for:

```
[BATCH_PROCESSOR] Accumulated ASSET event | ID: <uuid>
[BATCH_PROCESSOR] Recovered event from disk | Type: asset | ID: <uuid>
[BATCH_PROCESSOR] Processing 5 asset events
```

## Comparison with Edge Extension

| Feature | Content Analytics | Edge Extension |
|---------|------------------|----------------|
| Pre-dispatch persistence | ✅ YES (0-5s) | ❌ NO |
| Batching | ✅ YES | ❌ NO |
| Post-dispatch persistence | ✅ Edge's queue | ✅ PersistentHitQueue |
| Network retries | ✅ Edge handles | ✅ Exponential backoff |
| Crash recovery during batch | ✅ FULL | N/A |

Content Analytics batches events for 0-5 seconds before dispatch. Without disk persistence during that window, crashes would lose data. Edge dispatches immediately so it doesn't need this.

## Known Limitations

1. **No dispatch confirmation:** Extensions cannot receive callbacks from Edge to confirm receipt
2. **Possible duplicates:** Crash during Edge dispatch may cause duplicate events (Edge deduplication handles this)
3. **Memory overhead:** Events held in memory + disk during batching (minimal: ~40KB)

