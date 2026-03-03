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

Live Activities support two delivery models:

* **Transactional** - Targets a single Live Activity on a specific device. Use `LiveActivityData(liveActivityID:)` to assign a unique identifier.
* **Broadcast** (iOS 18+) - Targets all Live Activities subscribed to a channel with a single push. Use `LiveActivityData(channelID:)` to assign a shared channel identifier.

<InlineAlert variant="info" slots="text"/>

The `liveActivityData` property is mandatory - it is required by the [`LiveActivityAttributes`](./public-classes/live-activity-attributes.md) protocol. For transactional activities, provide a `liveActivityID`. For broadcast activities, provide a `channelID`. The SDK uses this data to track and manage the Live Activity through Adobe Experience Platform.

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

There are two ways to start a Live Activity:

* **Locally** (iOS 16.1+) - The app calls `Activity.request()` while in the foreground.
* **Remotely via push-to-start** (iOS 17.2+) - A server sends a push notification to a push-to-start token, which starts the activity even when the app is in the background or terminated.

Regardless of how the activity is started, the Messaging extension automatically collects the activity update token and forwards it to Adobe Experience Platform.

### Local start vs. remote start

| | Local start | Remote start via push-to-start |
| --- | --- | --- |
| **Minimum iOS** | iOS 16.1+ | iOS 17.2+ |
| **How it starts** | App calls `Activity.request()` directly | Server sends a push notification with `"event": "start"` to a push-to-start token |
| **App state** | App must be in the foreground | App can be in the background or terminated |
| **Attributes** | Passed directly in Swift code | Included in the push payload under `attributes` |
| **Initial content** | Passed as `contentState` parameter | Included in the push payload under `content-state` |
| **Token used** | Activity update token (generated after start) | Push-to-start token (available before any activity starts) |
| **Use case** | User-initiated actions | Server-initiated events |

### Local start

Start a Live Activity from your app using Apple's ActivityKit APIs.

#### Transactional

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

#### Broadcast (iOS 18+)

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import ActivityKit

if #available(iOS 18.0, *) {
    let channelID = "34zeQRIvEfEAAArq/RXKSw=="
    
    let attributes = GameScoreLiveActivityAttributes(
        liveActivityData: LiveActivityData(channelID: channelID),
        homeTeam: "Chiefs",
        awayTeam: "Eagles"
    )
    
    let initialContentState = GameScoreLiveActivityAttributes.ContentState(
        homeScore: 0,
        awayScore: 0,
        quarter: "1st"
    )
    
    do {
        let activity = try Activity<GameScoreLiveActivityAttributes>.request(
            attributes: attributes,
            contentState: initialContentState,
            pushType: .channel(channelID)
        )
        
        print("Broadcast Live Activity started with ID: \(activity.id)")
    } catch {
        print("Error starting Live Activity: \(error.localizedDescription)")
    }
}
```

### Remote start via push-to-start (iOS 17.2+)

Use `"event": "start"` with a push-to-start token to remotely start a Live Activity without any app interaction. The payload must include `attributes-type` (the fully qualified name of your `ActivityAttributes` struct), all static `attributes`, and the initial `content-state`.

#### Transactional

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "start",
    "attributes-type": "FoodDeliveryLiveActivityAttributes",
    "attributes": {
      "liveActivityData": {
        "liveActivityID": "order-12345",
        "origin": "remote"
      },
      "restaurantName": "Pizza Palace",
      "orderNumber": "12345"
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "15 minutes",
      "orderStatus": "Preparing"
    },
    "alert": {
      "title": "Order Started",
      "body": "Your order from Pizza Palace is being prepared!"
    }
  }
}
```

#### Broadcast (iOS 18+)

For broadcast, use `channelID` in `liveActivityData` and include the matching `input-push-channel` key inside `aps`.

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "start",
    "input-push-channel": "34zeQRIvEfEAAArq/RXKSw==",
    "attributes-type": "FoodDeliveryLiveActivityAttributes",
    "attributes": {
      "liveActivityData": {
        "channelID": "34zeQRIvEfEAAArq/RXKSw==",
        "origin": "remote"
      },
      "restaurantName": "Pizza Palace",
      "orderNumber": "12345"
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "15 minutes",
      "orderStatus": "Preparing"
    },
    "alert": {
      "title": "Order Started",
      "body": "Your order from Pizza Palace is being prepared!"
    }
  }
}
```

<InlineAlert variant="info" slots="text"/>

After a Live Activity is started remotely via push-to-start, it behaves identically to a locally started activity. You can update or end it using the same payloads shown in Step 4.

## Step 4: Update and end Live Activities via push

Once a Live Activity is running (whether started locally or remotely), Adobe Journey Optimizer can update or end it by sending push notifications to the activity update token.

<InlineAlert variant="info" slots="text"/>

The `liveActivityData` object must be included inside `attributes` in every update and end payload. Use `liveActivityID` for transactional payloads or `channelID` (with a matching `input-push-channel` in `aps`) for broadcast payloads. This is required for the SDK to identify and route the payload to the correct Live Activity.

<InlineAlert variant="warning" slots="text"/>

The `timestamp` field in the payload must always be greater than the timestamp of the previous start or update. If the timestamp is equal to or older than the last known value, the system ignores the payload and the Live Activity will not be updated.

### Update payload

Use `"event": "update"` to update the Live Activity content. The `content-state` must match your `ContentState` struct. An optional `alert` triggers a visible notification on the Lock Screen.

#### Transactional

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "update",
    "attributes": {
      "liveActivityData": {
        "liveActivityID": "order-12345",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "5 minutes",
      "orderStatus": "Out for delivery"
    },
    "alert": {
      "title": "Delivery Update",
      "body": "Your order is out for delivery!"
    }
  }
}
```

#### Broadcast (iOS 18+)

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "update",
    "input-push-channel": "34zeQRIvEfEAAArq/RXKSw==",
    "attributes": {
      "liveActivityData": {
        "channelID": "34zeQRIvEfEAAArq/RXKSw==",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "5 minutes",
      "orderStatus": "Out for delivery"
    },
    "alert": {
      "title": "Delivery Update",
      "body": "Your order is out for delivery!"
    }
  }
}
```

### End payload

Use `"event": "end"` to end the Live Activity. The activity is dismissed from the Lock Screen according to the system default (up to 4 hours).

#### Transactional

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "attributes": {
      "liveActivityData": {
        "liveActivityID": "order-12345",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  }
}
```

#### Broadcast (iOS 18+)

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "input-push-channel": "34zeQRIvEfEAAArq/RXKSw==",
    "attributes": {
      "liveActivityData": {
        "channelID": "34zeQRIvEfEAAArq/RXKSw==",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  }
}
```

### End payload with dismissal date

Include `"dismissal-date"` (a Unix timestamp) to control exactly when the ended activity is removed from the Lock Screen. This is useful when you want the final state to remain visible for a specific duration after the activity ends.

#### Transactional

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "dismissal-date": 1234575490,
    "attributes": {
      "liveActivityData": {
        "liveActivityID": "order-12345",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  }
}
```

#### Broadcast (iOS 18+)

<CodeBlock slots="heading, code" repeat="1" languages="JSON" />

#### JSON

```json
{
  "aps": {
    "timestamp": 1234567890,
    "event": "end",
    "dismissal-date": 1234575490,
    "input-push-channel": "34zeQRIvEfEAAArq/RXKSw==",
    "attributes": {
      "liveActivityData": {
        "channelID": "34zeQRIvEfEAAArq/RXKSw==",
        "origin": "remote"
      }
    },
    "content-state": {
      "driverName": "John Doe",
      "deliveryTime": "Delivered",
      "orderStatus": "Completed"
    }
  }
}
```

## Best practices

* **Register early**: Call `registerLiveActivities` during app initialization, after the Messaging extension has been registered with `MobileCore`. This ensures tokens are collected as soon as possible.
* **Register all types**: If your app has multiple Live Activity types (e.g., delivery tracking, game scores, flight status), each type must be passed to `registerLiveActivities`. The SDK only collects and forwards tokens for registered types - any unregistered type will be ignored.
* **Use unique identifiers**: For transactional Live Activities, ensure each activity uses a unique `liveActivityID`. This allows Adobe Journey Optimizer to target the correct activity when sending updates or end events.
* **Configure channelID for the correct environment**: For broadcast Live Activities (iOS 18+), the `channelID` in `liveActivityData` and `input-push-channel` in `aps` must use the same value and must match your Apple Push Notification service (APNs) environment (Production or Sandbox). Using the wrong environment's channel ID will result in updates not being delivered.
* **Keep timestamps increasing**: Each push payload's `timestamp` must be strictly greater than the previous one. The system silently drops payloads with stale or equal timestamps.
* **Test on device or simulator**: Live Activities can be tested on a physical device or in the iOS Simulator. Push-to-start token support requires iOS 17.2+.
* **Token lifecycle**: Push-to-start tokens are available before a Live Activity begins and enable starting activities remotely via push notification (iOS 17.2+). Activity update tokens are generated when a Live Activity starts and become invalid when the activity ends. The Messaging extension handles token collection and forwarding automatically - no additional code is required.
* **Handle activity expiration**: Live Activities have a maximum duration of 8 hours. Plan your update and end flows accordingly to avoid stale activities on the user's device.
