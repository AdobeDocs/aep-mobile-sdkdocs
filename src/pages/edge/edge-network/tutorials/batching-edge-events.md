---
title: Batching Experience Events
description: This guide provides instructions on combining multiple Experience Events into a single Edge Network request using event batching.
keywords:
- Edge Network
- Event batching
- Batching
- Guide
---

# Batching Experience Events

By default, the **Adobe Experience Platform Edge Network** extension sends each Experience event to the Edge Network in its own request. Event batching combines multiple queued Experience events into a single Edge Network request, which reduces the number of network calls made by your app and can lower the overall response time when several events are queued. Batching is disabled by default and applies only to the event types you explicitly allow. This tutorial explains how to enable batching, select which events are combined, and verify the result.

## Prerequisites

Before continuing with this tutorial, please ensure that the Edge extension version meets the minimum requirements:

* [Edge](../../index.md) extension version >= **TBD** (Android) and >= **TBD** (iOS).

## How batching works

When batching is enabled, the Edge Network extension combines the Experience events at the front of its send queue into a single request, up to a configurable maximum. Events are combined only when they are consecutive in the queue, share the same datastream configuration, and have an `xdm.eventType` that is present on the allow-list. Consent and identity reset requests are never batched.

Batching does not change how you send events with the `sendEvent` API, and it does not change how responses are handled. Each event in a batch is tracked individually, so response handles, errors, and completion handlers are still delivered per event.

## Configure batching

Batching is configured through a single `edge.batching` object. The same format applies whether you provide the object at runtime using the `updateConfiguration` API or bundle it with your app.

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
| `enabled` | Boolean | Enables or disables batching. When `false` (the default), each event is sent in its own request. |
| `maxBatchSize` | Number | The maximum number of events combined into one request. Defaults to `10`, must be a positive value, and is capped at `20`. |
| `wildcards` | Array | Allow-list entries whose `xdmEventType` is matched as a pattern. See [Select which events to batch](#select-which-events-to-batch). |
| _any other key_ | Array | An extension group — an array of allow-list entries. The key (for example, `commerce`) is used only for readability; all groups are combined into a single allow-list. |
| `_meta` | Object | Reserved for metadata and ignored by the Mobile SDK. |

Each allow-list entry is an object with an `xdmEventType` value and an `enabled` flag. An event is batched only when its `xdm.eventType` matches an entry whose `enabled` value is `true`; an event type that is not listed, or is listed only with `enabled` set to `false`, is always sent in its own request.

### Override the configuration at runtime

Provide the `edge.batching` object at runtime using the `updateConfiguration` API. This overrides the current configuration and takes effect immediately:

<CodeBlock slots="heading, code" repeat="2" />

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

A batching configuration provided through the `updateConfiguration` API takes precedence, as a whole, over the bundled file described below.

### Bundle the configuration in your app

If you are not providing the configuration through the `updateConfiguration` API, you can bundle it with your app. Create a file named `ADBMobileEdgeBatchingConfig.json` that contains the batching object directly, without the `edge.batching` key:

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

The Edge Network extension loads this file automatically at startup; no additional code is required. The bundled file is used only when an `edge.batching` object is not present in your configuration.

#### Android

Place `ADBMobileEdgeBatchingConfig.json` in your app module's `src/main/assets` directory. If the `assets` directory does not already exist, create it, then perform a clean build so the file is packaged with the app.

#### iOS

Add `ADBMobileEdgeBatchingConfig.json` to your Xcode project (for example, by dragging it into the Project navigator). In the file inspector, add it to your app target, and confirm the file appears under the target's **Build Phases** > **Copy Bundle Resources**.

## Select which events to batch

An event is added to the allow-list by its `xdm.eventType`. List the exact event types under any extension group, or use the `wildcards` array to match a family of event types with a single `*`.

| Pattern | Matches |
| --- | --- |
| `prefix.*` | Any event type that starts with `prefix.`, for example `commerce.*` matches `commerce.purchases`. |
| `*.suffix` | Any event type that ends with `.suffix`, for example `*.purchases` matches `commerce.purchases`. |
| `*` | Any event type. |

### Batch custom event types

Batching matches an event by its `xdm.eventType`, so any value can be batched — including custom event types your app defines. Add the custom type to the allow-list under any group, or match a family of them with a wildcard such as `myapp.*`:

```json
{
  "enabled": true,
  "maxBatchSize": 10,
  "myApp": [
    { "xdmEventType": "myapp.levelComplete", "enabled": true },
    { "xdmEventType": "myapp.itemPurchased", "enabled": true }
  ]
}
```

Send the event as usual, setting `eventType` in the XDM data to your custom value:

<CodeBlock slots="heading, code" repeat="2" />

#### iOS Swift

```swift
// Create Experience event from dictionary
let xdmData: [String: Any] = [
  "eventType": "myapp.levelComplete"
]
let experienceEvent = ExperienceEvent(xdm: xdmData)

Edge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in
  // Handle the Edge Network response
}
```

#### Android Kotlin

```kotlin
// Create experience event from Map
val xdmData = mutableMapOf<String, Any>()
xdmData["eventType"] = "myapp.levelComplete"

val experienceEvent = ExperienceEvent.Builder()
    .setXdmSchema(xdmData)
    .build()

Edge.sendEvent(experienceEvent) {
    // Handle the Edge Network response
}
```

## Complete configuration reference

The following is a complete `edge.batching` configuration for the standard Adobe extensions, including the `_meta` block, an example wildcard, and every event type these extensions send. Use it as a starting point and set `enabled` to `true` only for the event types you want to batch. Copy it from the section below, or [download ADBMobileEdgeBatchingConfig.json](../assets/tutorial/batching/ADBMobileEdgeBatchingConfig.json).

<AccordionItem slots="heading, code"/>

#### Complete edge.batching configuration

```json
{
  "_meta": {
    "schemaVersion": 1,
    "description": "Edge event batching configuration. Extension keys map to arrays of event objects. The Edge SDK parses only `xdmEventType` and `enabled`, ORs duplicates across extensions, and builds a flat allow-list of enabled xdm.eventType values. At send time, an outgoing edge/requestContent Experience Event is batched iff its xdm.eventType matches an enabled exact entry or an enabled wildcard. `purpose` and this `_meta` are ignored at parse time.",
    "matchKey": "xdm.eventType"
  },
  "wildcards": [
    {
      "xdmEventType": "media.*",
      "enabled": false,
      "purpose": "EXAMPLE wildcard: set enabled to true to batch every media.* event in one line instead of listing them individually. Disabled here — the explicit edgeMedia entries below govern batching."
    }
  ],
  "edgeBridge": [
    { "xdmEventType": "analytics.track", "enabled": true, "purpose": "Analytics trackAction/trackState forwarded to Edge via Edge Bridge." }
  ],
  "edgeMedia": [
    { "xdmEventType": "media.sessionStart", "enabled": true, "purpose": "Streaming session begins." },
    { "xdmEventType": "media.sessionComplete", "enabled": true, "purpose": "Media reached its natural end." },
    { "xdmEventType": "media.sessionEnd", "enabled": true, "purpose": "Session terminated without completing." },
    { "xdmEventType": "media.play", "enabled": true, "purpose": "Player entered or resumed active playback." },
    { "xdmEventType": "media.pauseStart", "enabled": true, "purpose": "Player paused or seeking." },
    { "xdmEventType": "media.ping", "enabled": true, "purpose": "Periodic playhead heartbeat — highest-frequency event." },
    { "xdmEventType": "media.error", "enabled": true, "purpose": "Playback error." },
    { "xdmEventType": "media.bufferStart", "enabled": true, "purpose": "Player entered buffering." },
    { "xdmEventType": "media.bitrateChange", "enabled": true, "purpose": "Streaming bitrate changed." },
    { "xdmEventType": "media.adBreakStart", "enabled": true, "purpose": "Ad break (pod) started." },
    { "xdmEventType": "media.adBreakComplete", "enabled": true, "purpose": "Ad break finished." },
    { "xdmEventType": "media.adStart", "enabled": true, "purpose": "Individual ad started." },
    { "xdmEventType": "media.adSkip", "enabled": true, "purpose": "Ad skipped." },
    { "xdmEventType": "media.adComplete", "enabled": true, "purpose": "Ad finished." },
    { "xdmEventType": "media.chapterStart", "enabled": true, "purpose": "Chapter/segment started." },
    { "xdmEventType": "media.chapterSkip", "enabled": true, "purpose": "Chapter skipped." },
    { "xdmEventType": "media.chapterComplete", "enabled": true, "purpose": "Chapter finished." },
    { "xdmEventType": "media.statesUpdate", "enabled": true, "purpose": "Custom player state (for example, fullscreen or mute) start or end." }
  ],
  "messaging": [
    { "xdmEventType": "pushTracking.applicationOpened", "enabled": true, "purpose": "Push notification opened (application launch from push)." },
    { "xdmEventType": "pushTracking.customAction", "enabled": true, "purpose": "Push notification custom-action button interaction." },
    { "xdmEventType": "decisioning.propositionFetch", "enabled": true, "purpose": "Personalization query for in-app, content-card, and code-based propositions." },
    { "xdmEventType": "decisioning.propositionDisplay", "enabled": true, "purpose": "Proposition displayed (impression) tracking." },
    { "xdmEventType": "decisioning.propositionInteract", "enabled": true, "purpose": "Proposition interaction (tap) tracking." },
    { "xdmEventType": "decisioning.propositionDismiss", "enabled": true, "purpose": "Proposition dismissed tracking." },
    { "xdmEventType": "decisioning.propositionTrigger", "enabled": true, "purpose": "Proposition trigger tracking." },
    { "xdmEventType": "decisioning.propositionDisqualify", "enabled": true, "purpose": "Proposition disqualify tracking." },
    { "xdmEventType": "decisioning.propositionSuppressDisplay", "enabled": true, "purpose": "Proposition suppressed-display tracking." },
    { "xdmEventType": "liveActivity.pushToStart", "enabled": true, "purpose": "Live Activity push-to-start token sync." },
    { "xdmEventType": "liveActivity.start", "enabled": true, "purpose": "Live Activity start tracking." },
    { "xdmEventType": "liveActivity.updateToken", "enabled": true, "purpose": "Live Activity per-activity update token sync." }
  ],
  "optimize": [
    { "xdmEventType": "decisioning.propositionFetch", "enabled": true, "purpose": "Personalization decisions query for decision scopes. (Same xdm.eventType is also produced by messaging.)" },
    { "xdmEventType": "decisioning.propositionDisplay", "enabled": true, "purpose": "Proposition display tracking. (Also produced by messaging.)" },
    { "xdmEventType": "decisioning.propositionInteract", "enabled": true, "purpose": "Proposition interaction tracking. (Also produced by messaging.)" }
  ],
  "edgeIdentity": [
    { "xdmEventType": "profile.updateAttributes", "enabled": true, "purpose": "Profile attribute updates (for example, timezone) sent to Edge." }
  ],
  "places": [
    { "xdmEventType": "location.entry", "enabled": true, "purpose": "Geofence POI entry." },
    { "xdmEventType": "location.exit", "enabled": true, "purpose": "Geofence POI exit." }
  ],
  "lifecycle": [
    { "xdmEventType": "application.launch", "enabled": true, "purpose": "App foreground/launch — reaches Edge only via a 'Forward to Edge Network' rule; the forwarded event carries this xdm.eventType." },
    { "xdmEventType": "application.close", "enabled": true, "purpose": "App background/close — reaches Edge only via a 'Forward to Edge Network' rule; the forwarded event carries this xdm.eventType." }
  ],
  "offerDecisioning": [
    { "xdmEventType": "personalization.request", "enabled": true, "purpose": "Offer prefetch personalization query." }
  ],
  "analyticsEdge": [
    { "xdmEventType": "legacy.analytics", "enabled": true, "purpose": "Legacy Analytics track event forwarded to Edge." }
  ]
}
```

## Send events

Batching is applied to the Experience events you send with the `sendEvent` API — you do not change how you send them. When batching is enabled and their event types are on the allow-list, events sent in succession are combined into a single request.

<CodeBlock slots="heading, code" repeat="2" />

### iOS Swift

```swift
// Create Experience event from dictionary
let xdmData: [String: Any] = [
  "eventType": "commerce.purchases"
]
let experienceEvent = ExperienceEvent(xdm: xdmData)

Edge.sendEvent(experienceEvent: experienceEvent) { (handles: [EdgeEventHandle]) in
  // Handle the Edge Network response
}
```

### Android Kotlin

```kotlin
// Create experience event from Map
val xdmData = mutableMapOf<String, Any>()
xdmData["eventType"] = "commerce.purchases"

val experienceEvent = ExperienceEvent.Builder()
    .setXdmSchema(xdmData)
    .build()

Edge.sendEvent(experienceEvent) {
    // Handle the Edge Network response
}
```

## Response outcomes

The response for a batch is applied per event, matching the behavior of events sent individually:

| Server response | Behavior |
| --- | --- |
| `2xx` / `207` | The per-event handles and errors are routed to the originating events. |
| `429`, recoverable `5xx`, or timeout | The batch is retried, honoring `Retry-After`. Events are not lost. |
| `400` | Nothing was ingested, so each event in the batch is re-sent in its own request. |
| Other non-recoverable errors (`403`, `404`, `422`, and so on) | The batch is dropped and each event receives the error. |

## Verify batching

Set the SDK log level to `verbose` and confirm that events are combined. When a batch is formed, a log entry similar to the following is printed:

```text
Edge/EdgeHitProcessor - Processing batch of 4 ExperienceEvent(s).
```

You can also use a network debugging tool to confirm that the combined events were delivered in a single request to the Edge Network.
