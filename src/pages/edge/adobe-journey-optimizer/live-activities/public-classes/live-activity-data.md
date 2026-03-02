---
title: LiveActivityData
description: Encapsulates data for Adobe Experience Platform integration with iOS Live Activities.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Activities
- LiveActivityData
- Class
- iOS
---

# LiveActivityData

Encapsulates data for Adobe Experience Platform integration with iOS Live Activities.

This struct provides the necessary identifiers and data for both managing and tracking Live Activities through Adobe Experience Platform. Use this struct when implementing the `LiveActivityAttributes` protocol.

## iOS Struct - LiveActivityData

Available in iOS 16.1 and later.

## Properties

### channelID

Unique identifier for managing and tracking a broadcast Live Activity channel in Adobe Experience Platform.

```swift
public let channelID: String?
```

Use this when creating Live Activities that are broadcast to multiple subscribers of a channel (available on iOS 18+).

### liveActivityID

Unique identifier for managing and tracking an individual Live Activity in Adobe Experience Platform.

```swift
public let liveActivityID: String?
```

Use this when creating Live Activities targeted at a specific user.

### origin

Defines whether the Live Activity was started locally by the app or remotely via a push-to-start notification.

```swift
public let origin: LiveActivityOrigin?
```

See `LiveActivityOrigin` for available values.

## Initializers

### init(channelID:)

Initializes a `LiveActivityData` instance for broadcast Live Activities.

```swift
public init(channelID: String)
```

Use this initializer for Live Activities that are broadcast to subscribers of a channel.

**Example**

```swift
let data = LiveActivityData(channelID: "sports-game-channel")
```

### init(liveActivityID:)

Initializes a `LiveActivityData` instance for individual Live Activities.

```swift
public init(liveActivityID: String)
```

Use this initializer for Live Activities targeted at an individual user.

**Example**

```swift
let data = LiveActivityData(liveActivityID: "order-12345")
```

## Usage examples

### Individual Live Activity

```swift
let attributes = FoodDeliveryLiveActivityAttributes(
    liveActivityData: LiveActivityData(liveActivityID: "order123"),
    restaurantName: "Pizza Palace"
)
```

### Broadcast Live Activity

```swift
let attributes = GameScoreLiveActivityAttributes(
    liveActivityData: LiveActivityData(channelID: "nfl-game-001"),
    homeTeam: "Chiefs",
    awayTeam: "Eagles"
)
```

## Related classes and protocols

* [LiveActivityAttributes](./live-activity-attributes.md)
* [LiveActivityOrigin](./live-activity-origin.md)
