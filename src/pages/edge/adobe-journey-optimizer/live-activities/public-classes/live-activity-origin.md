---
title: LiveActivityOrigin
description: Defines whether a Live Activity was started locally or remotely.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Activities
- LiveActivityOrigin
- Enum
- iOS
---

# LiveActivityOrigin

An enumeration that defines whether a Live Activity was started locally by the app or remotely via a push-to-start notification.

## iOS Enum - LiveActivityOrigin

Available in iOS 16.1 and later.

```swift
@available(iOS 16.1, *)
public enum LiveActivityOrigin: String, Codable {
    case local
    case remote
}
```

## Cases

### local

Indicates that the Live Activity was started locally by the app using ActivityKit APIs.

```swift
case local
```

This value is set when the app calls `Activity.request()` to start a Live Activity.

### remote

Indicates that the Live Activity was started remotely via a push-to-start notification from Adobe Journey Optimizer.

```swift
case remote
```

This value is set when Adobe Journey Optimizer sends a push-to-start notification that creates the Live Activity.

## Usage

The `origin` property is automatically set by the SDK and is included in the `LiveActivityData` struct. You typically don't need to set this value manually.

```swift
// The origin is automatically determined when the Live Activity is created
let attributes = FoodDeliveryLiveActivityAttributes(
    liveActivityData: LiveActivityData(liveActivityID: "order123"),
    restaurantName: "Pizza Palace"
)

// After the Live Activity is started, you can check its origin
if let origin = attributes.liveActivityData.origin {
    switch origin {
    case .local:
        print("Live Activity was started locally")
    case .remote:
        print("Live Activity was started remotely")
    }
}
```

## Related classes and protocols

* [LiveActivityData](./live-activity-data.md)
* [LiveActivityAttributes](./live-activity-attributes.md)
