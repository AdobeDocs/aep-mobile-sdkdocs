---
title: Batching Experience Events
description: Learn how to coalesce multiple Experience Events into a single Edge Network request using the Edge event batching configuration.
keywords:
- Edge Network
- Batching
- edge.batching
- maxBatchSize
- Guide
- Tutorial
---

# Batching Experience Events

By default, the Adobe Experience Platform Edge Network extension sends each Experience Event to the Edge Network in its own network request. **Event batching** lets you coalesce multiple queued Experience Events into a single Edge Network request, which can reduce the number of network calls, save battery, and lower data usage — especially for apps that emit many events in quick succession.

Batching is **opt-in** and **allow-list based**: it is disabled by default, and once enabled only the event types you explicitly allow are combined. Enabling batching does not change how you call `sendEvent`, and it does not change how per-event responses, completion handlers, or errors are delivered — each event in a batch is still tracked and answered individually.

## Prerequisites

Before continuing with this tutorial, please ensure that the Edge extension version meets the minimum requirements:

* [Edge](../index.md) extension version >= **TBD** (Android) and >= **TBD** (iOS).

<InlineAlert variant="info" slots="text"/>

Batching only applies to Experience Events sent through the `sendEvent` API. Consent and identity-reset requests are never batched and are always sent individually.

## How batching works

When batching is enabled, the Edge extension processes a **window** of queued events per cycle instead of one:

* **Window size** is `min(queued events, maxBatchSize)`.
* Only **consecutive events at the front of the queue** that all of the following are true are combined into one request:
  1. they are Experience Events (sent with `sendEvent`),
  2. their `xdm.eventType` is on the allow-list (see [Select which events to batch](#select-which-events-to-batch)), and
  3. they share the same datastream configuration (datastream ID, any per-event datastream overrides) and request path.
* The run stops at the first event that fails any of these checks. That event becomes the head of a later cycle.
* The batching "window" is the network round-trip itself — there is no debounce timer. While one request is in flight, newly queued events accumulate and are combined on the next cycle.

Each event in a batch keeps its own identity in the response: response handles and errors are routed back to the originating event, and any completion handler you registered for that event is invoked exactly once.

## Configure batching

Batching is configured through a single `edge.batching` object. The same format is used whether the object is delivered through your mobile property configuration (remote) or through a configuration file bundled in your app.

```json
{
  "enabled": true,
  "maxBatchSize": 10,
  "wildcards": [
    { "xdmEventType": "media.*", "enabled": false }
  ],
  "commerce": [
    { "xdmEventType": "commerce.productListAdds", "enabled": true },
    { "xdmEventType": "commerce.purchases", "enabled": true }
  ]
}
```

| Key | Type | Description |
| --- | --- | --- |
| `enabled` | Boolean | Master switch. When `false` (default), every event is sent individually. |
| `maxBatchSize` | Number | Maximum number of events per request. Defaults to `10`, must be positive, and is clamped to an upper bound of `20`. |
| `wildcards` | Array | Allow-list entries whose `xdmEventType` is treated as a pattern (see [Wildcards](#wildcards)). |
| _any other key_ | Array | An **extension group** — an array of allow-list entries. The key name (for example `commerce`) is only for readability; all groups are flattened into a single allow-list. |
| `_meta` | Object | Reserved for metadata. Ignored by the SDK. |

Each allow-list entry is an object with an `xdmEventType` (String) and an `enabled` (Boolean) flag. An entry with `"enabled": false` is ignored — use it to keep an example or a temporarily disabled type in the file without batching it.

<InlineAlert variant="warning" slots="text"/>

Batching is strictly an allow-list. An event is batched only when its `xdm.eventType` matches an **enabled** entry (exact or wildcard). An event type that is absent, or matched only by disabled entries, is always sent individually.

### Set the configuration remotely

Add the `edge.batching` object to your mobile property configuration so it is delivered with the rest of your SDK configuration. You can also set or override it at runtime with `updateConfiguration`:

<CodeBlock slots="heading, code" repeat="4" />

#### Android Kotlin

```kotlin
val batching = mapOf(
    "enabled" to true,
    "maxBatchSize" to 10,
    "commerce" to listOf(
        mapOf("xdmEventType" to "commerce.purchases", "enabled" to true)
    )
)
MobileCore.updateConfiguration(mapOf("edge.batching" to batching))
```

#### Android Java

```java
Map<String, Object> entry = new HashMap<>();
entry.put("xdmEventType", "commerce.purchases");
entry.put("enabled", true);

Map<String, Object> batching = new HashMap<>();
batching.put("enabled", true);
batching.put("maxBatchSize", 10);
batching.put("commerce", Collections.singletonList(entry));

Map<String, Object> config = new HashMap<>();
config.put("edge.batching", batching);
MobileCore.updateConfiguration(config);
```

#### iOS Swift

```swift
let batching: [String: Any] = [
    "enabled": true,
    "maxBatchSize": 10,
    "commerce": [
        ["xdmEventType": "commerce.purchases", "enabled": true]
    ]
]
MobileCore.updateConfigurationWith(configDict: ["edge.batching": batching])
```

#### iOS Objective-C

```objectivec
NSDictionary *batching = @{
    @"enabled": @YES,
    @"maxBatchSize": @10,
    @"commerce": @[ @{ @"xdmEventType": @"commerce.purchases", @"enabled": @YES } ]
};
[AEPMobileCore updateConfiguration:@{ @"edge.batching": batching }];
```

A batching configuration present in your mobile property configuration (or set with `updateConfiguration`) always takes precedence, as a whole, over the bundled file described below.

### Bundle the configuration in your app

If you cannot yet deliver the configuration remotely, you can bundle it with your app. Create a file named `ADBMobileEdgeBatchingConfig.json` and add it to your app bundle. The file contains the batching object directly, **without** the `edge.batching` wrapper key:

```json
{
  "_meta": { "schemaVersion": 1 },
  "enabled": true,
  "maxBatchSize": 10,
  "wildcards": [
    { "xdmEventType": "media.*", "enabled": false }
  ],
  "commerce": [
    { "xdmEventType": "commerce.purchases", "enabled": true }
  ]
}
```

* **Android** — place `ADBMobileEdgeBatchingConfig.json` in the app's `assets` folder (`app/src/main/assets/`).
* **iOS** — add `ADBMobileEdgeBatchingConfig.json` to your app target so it is copied into the app bundle.

The bundled file is used only when the `edge.batching` object is not present in the Configuration. It is a wholesale fallback, not a per-key merge.

## Select which events to batch

An event is batched by its `xdm.eventType`. List the exact event types you want to combine under any extension group, or use the `wildcards` array for patterns.

### Wildcards

Wildcard patterns are matched case-sensitively and support a single `*`:

| Pattern | Matches | Example |
| --- | --- | --- |
| `prefix.*` | Any type that starts with `prefix.` | `commerce.*` matches `commerce.purchases` |
| `*.suffix` | Any type that ends with `.suffix` | `*.purchases` matches `commerce.purchases` |
| `*` | Any event type | Batches everything (use with care) |

## Send events

You do not change how you send events — batching is applied transparently to the Experience Events you already send with `sendEvent`. Send several allow-listed events in succession and the extension combines the queued ones into a single request:

<CodeBlock slots="heading, code" repeat="4" />

### Android Kotlin

```kotlin
val xdmData = mapOf("eventType" to "commerce.purchases", "commerce" to mapOf("order" to mapOf("priceTotal" to 19.99)))
val event = ExperienceEvent.Builder().setXdmSchema(xdmData).build()
Edge.sendEvent(event) { handles ->
    // Invoked for this event once its response is received
}
```

### Android Java

```java
Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "commerce.purchases");

ExperienceEvent event = new ExperienceEvent.Builder().setXdmSchema(xdmData).build();
Edge.sendEvent(event, handles -> {
    // Invoked for this event once its response is received
});
```

### iOS Swift

```swift
let xdmData: [String: Any] = ["eventType": "commerce.purchases"]
let event = ExperienceEvent(xdm: xdmData)
Edge.sendEvent(experienceEvent: event) { (handles: [EdgeEventHandle]) in
    // Invoked for this event once its response is received
}
```

### iOS Objective-C

```objectivec
NSDictionary *xdmData = @{ @"eventType": @"commerce.purchases" };
AEPExperienceEvent *event = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil];
[AEPMobileEdge sendExperienceEvent:event completion:^(NSArray<AEPEdgeEventHandle *> * _Nonnull handles) {
    // Invoked for this event once its response is received
}];
```

## Response outcomes

The response for a batch is applied per event, and mirrors the behavior of individually sent events:

| Server response | Behavior |
| --- | --- |
| `2xx` / `207` | Success — per-event handles and errors are routed to the originating events. |
| `429` / recoverable `5xx` / timeout | The whole batch is retried in place, honoring `Retry-After`. Events are never lost. |
| `400` | Nothing was ingested — each event in the batch is re-sent individually so a single problematic event cannot block the others. |
| Other non-recoverable (`403`, `404`, `422`, …) | The batch is dropped and each event receives the error. |

## Verify batching

You can confirm that events are being combined by inspecting the SDK logs at `verbose` level. When a batch is formed you will see a log line similar to:

```text
Edge/EdgeHitProcessor - Processing batch of 4 ExperienceEvent(s).
```

You can also confirm in a network debugging tool that the queued events were delivered in a single request to the Edge Network `/v1/interact` endpoint.
