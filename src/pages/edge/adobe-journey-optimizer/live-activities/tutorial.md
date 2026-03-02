---
title: Live Activities implementation tutorial
description: This document describes how to register and manage Live Activities using the Adobe Journey Optimizer extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Activities
- iOS
- ActivityKit
- Tutorial
---

# Live Activities implementation tutorial

This document describes how to register and manage Live Activities using the Adobe Journey Optimizer extension.

## Pre-requisites

1. [Integrate and register Messaging extension](../../index.md#implement-extension-in-mobile-app) in your app.
2. Ensure your app targets iOS 16.1 or newer.
3. For push-to-start token support, ensure your app targets iOS 17.2 or newer.
4. Configure your app to support Live Activities by following [Apple's Live Activities documentation](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities).

## Step 1: Define your LiveActivityAttributes

Define an attribute type that conforms to the [`LiveActivityAttributes`](./public-classes/live-activity-attributes.md) protocol. This protocol extends Apple's `ActivityAttributes` and adds a required [`liveActivityData`](./public-classes/live-activity-data.md) property for Adobe Experience Platform integration.

* Use `LiveActivityData(liveActivityID:)` for individual Live Activities
* Use `LiveActivityData(channelID:)` for broadcast Live Activities (iOS 18+)

<InlineAlert variant="info" slots="text"/>

The `liveActivityData` property is mandatory - it is required by the [`LiveActivityAttributes`](./public-classes/live-activity-attributes.md) protocol. It must include a `liveActivityID` (or `channelID` for broadcast) and is used by the SDK to track and manage the Live Activity through Adobe Experience Platform.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import ActivityKit
import AEPMessagingLiveActivity

@available(iOS 16.1, *)
struct FoodDeliveryLiveActivityAttributes: LiveActivityAttributes {
    var liveActivityData: LiveActivityData
    
    var restaurantName: String
    var orderNumber: String
    
    struct ContentState: Codable, Hashable {
        var driverName: String
        var deliveryTime: String
        var orderStatus: String
    }
}
```

## Step 2: Register Live Activity types

Register your attribute types with the Messaging extension using the [registerLiveActivities](./api-reference.md#registerliveactivities) API. Call this after the Messaging extension has been registered with `MobileCore`, typically in your `AppDelegate`.

Once registered, the extension automatically collects push-to-start tokens (iOS 17.2+) and activity update tokens, and forwards them to Adobe Experience Platform.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import AEPMessaging
import AEPMessagingLiveActivity
import ActivityKit

if #available(iOS 16.1, *) {
    Messaging.registerLiveActivities([
        FoodDeliveryLiveActivityAttributes.self
    ])
}
```

## Step 3: Start a Live Activity

Start a Live Activity using Apple's ActivityKit APIs. Once started, the Messaging extension automatically collects the activity update token and sends it to Adobe Experience Platform.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import ActivityKit

if #available(iOS 16.1, *) {
    let attributes = FoodDeliveryLiveActivityAttributes(
        liveActivityData: LiveActivityData(liveActivityID: "order-12345"),
        restaurantName: "Pizza Palace",
        orderNumber: "12345"
    )
    
    let initialContentState = FoodDeliveryLiveActivityAttributes.ContentState(
        driverName: "John Doe",
        deliveryTime: "15 minutes",
        orderStatus: "Preparing"
    )
    
    do {
        let activity = try Activity<FoodDeliveryLiveActivityAttributes>.request(
            attributes: attributes,
            contentState: initialContentState,
            pushType: .token
        )
        
        print("Live Activity started with ID: \(activity.id)")
    } catch {
        print("Error starting Live Activity: \(error.localizedDescription)")
    }
}
```

## Step 4: Update and end Live Activities via push

Once a Live Activity is started and its activity update token has been forwarded to Adobe Experience Platform, Adobe Journey Optimizer can remotely update or end the Live Activity by sending push notifications.

<InlineAlert variant="warning" slots="text"/>

The `timestamp` field in the payload must always be greater than the timestamp of the previous start or update. If the timestamp is equal to or older than the last known value, the system ignores the payload and the Live Activity will not be updated.

### Update payload

Use `"event": "update"` to update the Live Activity content. The `content-state` must match your `ContentState` struct. An optional `alert` triggers a visible notification on the Lock Screen.

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "update",
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "5 minutes",
      "orderStatus": "Out for delivery"
    },
    "alert": {
      "title": "Delivery Update",
      "body": "Your order is out for delivery!"
    }
  },
  "liveActivityData": {
    "liveActivityID": "order-12345",
    "origin": "remote"
  }
}
```

### End payload

Use `"event": "end"` to end the Live Activity. The activity is dismissed from the Lock Screen according to the system default.

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  },
  "liveActivityData": {
    "liveActivityID": "order-12345",
    "origin": "remote"
  }
}
```

### End payload with dismissal date

Include `"dismissal-date"` (a Unix timestamp) to control exactly when the ended activity is removed from the Lock Screen. This is useful when you want the final state to remain visible for a specific duration after the activity ends.

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "dismissal-date": 1234575490,
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  },
  "liveActivityData": {
    "liveActivityID": "order-12345",
    "origin": "remote"
  }
}
```

## Best practices

* **Register early**: Call `registerLiveActivities` during app initialization, after the Messaging extension has been registered with `MobileCore`. This ensures tokens are collected as soon as possible.
* **Register all types**: If your app has multiple Live Activity types (e.g., delivery tracking, game scores, flight status), each type must be passed to `registerLiveActivities`. The SDK only collects and forwards tokens for registered types - any unregistered type will be ignored.
* **Use unique identifiers**: Ensure each Live Activity uses a unique `liveActivityID`. This allows Adobe Journey Optimizer to target the correct activity when sending updates or end events.
* **Configure channelID for the correct environment**: When using `channelID` for broadcast Live Activities (iOS 18+), ensure the channel ID matches your Apple Push Notification service (APNs) environment (Production or Sandbox). Using the wrong environment's channel ID will result in updates not being delivered.
* **Keep timestamps increasing**: Each push payload's `timestamp` must be strictly greater than the previous one. The system silently drops payloads with stale or equal timestamps.
* **Test on device or simulator**: Live Activities can be tested on a physical device or in the iOS Simulator. Push-to-start token support requires iOS 17.2+.
* **Token lifecycle**: Push-to-start tokens are available before a Live Activity begins and enable starting activities remotely via push notification (iOS 17.2+). Activity update tokens are generated when a Live Activity starts and become invalid when the activity ends. The Messaging extension handles token collection and forwarding automatically - no additional code is required.
* **Handle activity expiration**: Live Activities have a maximum duration of 8 hours. Plan your update and end flows accordingly to avoid stale activities on the user's device.
