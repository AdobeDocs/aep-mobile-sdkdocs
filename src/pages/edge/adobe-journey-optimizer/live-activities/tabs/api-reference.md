---
noIndex: true
---

<Variant platform="ios" api="register-live-activities" repeat="5"/>

#### Swift

**Syntax**

```swift
static func registerLiveActivities(_ activityTypes: [any LiveActivityAttributes.Type])
```

* _activityTypes_ is an array of types conforming to the `LiveActivityAttributes` protocol. Each type represents a Live Activity that will be monitored for push-to-start tokens (iOS 17.2+), activity update tokens, and lifecycle events.

**Example**

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

#### Objective-C

<InlineAlert variant="info" slots="text"/>

The `registerLiveActivities` API is only available in Swift. ActivityKit and its `ActivityAttributes` protocol are Swift-only APIs and cannot be called from Objective-C.
