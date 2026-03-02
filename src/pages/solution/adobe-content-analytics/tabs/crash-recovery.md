---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android" task="batch-coordinator" repeat="1"/>

```java
fun addAssetEvent(event: Event)
  ├─> assetHitProcessor.accumulateEvent(event)      // Add to memory
  ├─> persistEventImmediately(event, queue)         // Write to disk
  └─> checkAndFlushIfNeeded()                       // Check thresholds

suspend fun performFlush()
  ├─> val events = assetHitProcessor.processAccumulatedEvents()
  └─> [Orchestrator processes events → dispatches to Edge]
      └─> Edge guarantees delivery from here
```

<Variant platform="ios" task="batch-coordinator" repeat="1"/>

```swift
func addAssetEvent(_ event: Event)
  ├─> assetHitProcessor.accumulateEvent(event)      // Add to memory
  ├─> persistEventImmediately(event, to: queue)    // Write to disk
  └─> checkAndFlushIfNeeded()                       // Check thresholds

func performFlush()
  ├─> let events = assetHitProcessor.processAccumulatedEvents()
  └─> [Orchestrator processes events → dispatches to Edge]
      └─> Edge guarantees delivery from here
```


<Variant platform="android" task="direct-hit-processor" repeat="1"/>

```java
override suspend fun processHit(entity: DataEntity): Boolean
  ├─> Decode event from disk
  ├─> Accumulate in memory (if not already present)
  └─> return true → clear from disk (event now in memory)
```

<Variant platform="ios" task="direct-hit-processor" repeat="1"/>

```swift
func processHit(entity: DataEntity, completion: (Bool) -> Void)
  ├─> Decode event from disk
  ├─> Accumulate in memory (if not already present)
  └─> completion(true) → clear from disk (event now in memory)
```


<Variant platform="android" task="metrics-calculation" repeat="1"/>

```java
// On flush (ContentAnalyticsOrchestrator.kt)
private fun buildAssetMetricsCollection(events: List<Event>): AssetMetricsCollection {
    val groupedEvents = events.groupBy { it.assetKey ?: "" }
    val metricsMap = mutableMapOf<String, AssetMetrics>()
    
    for ((key, events) in groupedEvents) {
        val views = events.count { it.interactionType == InteractionType.VIEW }
        val clicks = events.count { it.interactionType == InteractionType.CLICK }
        metricsMap[key] = AssetMetrics(viewCount = views, clickCount = clicks, ...)
    }
    
    return AssetMetricsCollection(metricsMap)
}
```

<Variant platform="ios" task="metrics-calculation" repeat="1"/>

```swift
// On flush (ContentAnalyticsOrchestrator.swift)
func buildAssetMetricsCollection(from events: [Event]) -> AssetMetricsCollection {
    let groupedEvents = Dictionary(grouping: events) { $0.assetKey ?? "" }
    var metricsMap: [String: AssetMetrics] = [:]
    
    for (key, events) in groupedEvents {
        let views = events.filter { $0.interactionType == .view }.count
        let clicks = events.filter { $0.interactionType == .click }.count
        metricsMap[key] = AssetMetrics(viewCount: views, clickCount: clicks, ...)
    }
    
    return AssetMetricsCollection(metrics: metricsMap)
}
```

<Variant platform="android" task="thread-safety" repeat="1"/>

```java
// BatchCoordinator
private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
private val stateMutex = kotlinx.coroutines.sync.Mutex()

// DirectHitProcessor
private val mutex = Mutex()

// All state mutations wrapped in mutex.withLock { }
```

