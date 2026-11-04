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

#### Syntax

```swift
static func registerLiveActivities(_ activityTypes: [any LiveActivityAttributes.Type])
```

#### Example

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

## clearLiveActivities

The `clearLiveActivities` API clears all Live Activity tokens tracked by the Messaging extension and tears down all Live Activity listeners. Calling this API:

* Sends an empty push-to-start token to Adobe Experience Platform for every stored push-to-start token, which clears those tokens on the current profile
* Clears the SDK's locally stored push-to-start tokens, Live Activity update tokens, and broadcast channel activities
* Cancels all active Live Activity listener tasks

<InlineAlert variant="info" slots="text"/>

Only push-to-start tokens are sent to Adobe Experience Platform. Update tokens and channel activities are only cleared locally. If the ECID is not available, the empty push-to-start tokens are not sent, but the local stores are still cleared.

This is a full teardown, not a one-time revocation. To resume token collection, call [registerLiveActivities](#registerliveactivities) again.

<InlineAlert variant="info" slots="text"/>

This API is available starting with iOS Messaging version 5.17.0.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func clearLiveActivities()
```

#### Example

```swift
if #available(iOS 16.1, *) {
    Messaging.clearLiveActivities()
}
```

### iOS Objective-C

<InlineAlert variant="info" slots="text"/>

The `clearLiveActivities` API is only available in Swift.

### Clearing tokens before resetting identities

<InlineAlert variant="warning" slots="text"/>

`clearLiveActivities` dispatches its Edge event asynchronously. If your app also calls `MobileCore.resetIdentities()` (for example, when a user signs out), call `clearLiveActivities` first and allow time for the clear to reach Edge before resetting identities. If `resetIdentities()` runs first, the clear request may be sent with the new ECID and applied to the wrong profile.

To clear the standard push token at the same time, call `MobileCore.setPushIdentifier(nil)` alongside `clearLiveActivities`. After the identities are reset, call `MobileCore.setPushIdentifier` with the current device token and `registerLiveActivities` again so that both tokens are collected and synced to the new profile.

```swift
// 1. Clear tokens so that the empty values are synced to the current profile.
MobileCore.setPushIdentifier(nil)
if #available(iOS 16.1, *) {
    Messaging.clearLiveActivities()
}

// 2. Wait for the clear events to be sent before resetting identities.
DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
    MobileCore.resetIdentities()

    // 3. Sync both tokens to the new profile.
    MobileCore.setPushIdentifier(currentDeviceToken)
    if #available(iOS 16.1, *) {
        Messaging.registerLiveActivities([FoodDeliveryLiveActivityAttributes.self])
    }
}
```
