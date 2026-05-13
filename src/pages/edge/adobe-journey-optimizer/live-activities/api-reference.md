---
title: Live Activities - API Reference
description: This document lists the public APIs available in the Messaging extension for implementing Live Activities with Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- Live Activities
- iOS
- ActivityKit
---

# Live Activities - API reference

This document lists the public APIs available in the Messaging extension for implementing Live Activities with Adobe Journey Optimizer.

## registerLiveActivities

The `registerLiveActivities` API registers one or more Live Activity attribute types with the Messaging extension. Once registered, the extension automatically:

* Collects push-to-start tokens (iOS 17.2+)
* Collects Live Activity update tokens
* Manages lifecycle events and tracking
* Forwards tokens to Adobe Experience Platform

This enables Adobe Journey Optimizer to remotely start and update Live Activities via push notifications.

This API must be called after the Messaging extension has been registered with `MobileCore`. You should register all of your app's `LiveActivityAttributes` types that you want to be managed by Adobe Journey Optimizer.

<InlineAlert variant="info" slots="text"/>

When registering multiple types, their push-to-start tokens are automatically batched together and dispatched in a single event, improving efficiency.

### iOS Swift

* _activityTypes_ is an array of types conforming to the `LiveActivityAttributes` protocol. Each type represents a Live Activity that will be monitored for push-to-start tokens (iOS 17.2+), activity update tokens, and lifecycle events.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func registerLiveActivities(_ activityTypes: [any LiveActivityAttributes.Type])
```

### Example

```swift
import AEPMessaging
import AEPMessagingLiveActivity
import ActivityKit

// Register a single Live Activity type
if #available(iOS 16.1, *) {
    Messaging.registerLiveActivities([FoodDeliveryLiveActivityAttributes.self])
}

// Register multiple Live Activity types
if #available(iOS 16.1, *) {
    Messaging.registerLiveActivities([
        AirplaneTrackingAttributes.self,
        FoodDeliveryLiveActivityAttributes.self,
        GameScoreLiveActivityAttributes.self
    ])
}
```

### iOS Objective-C

<InlineAlert variant="info" slots="text"/>

The `registerLiveActivities` API is only available in Swift. ActivityKit and its `ActivityAttributes` protocol are Swift-only APIs and cannot be called from Objective-C.
