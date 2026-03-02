---
noIndex: true
---

<Variant platform="ios" function="define-activity-attributes" repeat="2"/>

#### Swift

```swift
import ActivityKit
import AEPMessagingLiveActivity

// Define attributes for a food delivery Live Activity
@available(iOS 16.1, *)
struct FoodDeliveryLiveActivityAttributes: LiveActivityAttributes {
    // Required: AEP Integration Data
    var liveActivityData: LiveActivityData
    
    // Static attributes: Custom properties that do not change
    var restaurantName: String
    var orderNumber: String
    
    // Dynamic content state: Data that can be updated
    struct ContentState: Codable, Hashable {
        var driverName: String
        var deliveryTime: String
        var orderStatus: String
    }
}

// Define attributes for a game score Live Activity
@available(iOS 16.1, *)
struct GameScoreLiveActivityAttributes: LiveActivityAttributes {
    // Required: AEP Integration Data
    var liveActivityData: LiveActivityData
    
    // Static attributes
    var homeTeam: String
    var awayTeam: String
    
    // Dynamic content state
    struct ContentState: Codable, Hashable {
        var homeScore: Int
        var awayScore: Int
        var quarter: String
    }
}

// Define attributes for an airplane tracking Live Activity
@available(iOS 16.1, *)
struct AirplaneTrackingAttributes: LiveActivityAttributes {
    // Required: AEP Integration Data
    var liveActivityData: LiveActivityData
    
    // Static attributes
    var flightNumber: String
    var destination: String
    
    // Dynamic content state
    struct ContentState: Codable, Hashable {
        var flightStatus: String
        var gate: String
        var departureTime: String
    }
}
```

<Variant platform="ios" function="register-live-activities" repeat="2"/>

#### Swift

```swift
import AEPMessaging
import AEPMessagingLiveActivity
import ActivityKit

// Register Live Activity types with the Messaging extension
// Call this in your AppDelegate after SDK initialization
if #available(iOS 16.1, *) {
    Messaging.registerLiveActivities([
        AirplaneTrackingAttributes.self,
        FoodDeliveryLiveActivityAttributes.self,
        GameScoreLiveActivityAttributes.self
    ])
}
```

<Variant platform="ios" function="start-live-activity" repeat="2"/>

#### Swift

```swift
import ActivityKit

// Start a food delivery Live Activity
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
        // The push token is automatically collected and sent to Adobe Experience Platform
    } catch {
        print("Error starting Live Activity: \(error.localizedDescription)")
    }
}
```

<Variant platform="ios" function="push-payload" repeat="2"/>

#### Swift

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
  }
}
```

To end a Live Activity via push notification, use `"event": "end"` in the payload:

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
  }
}
```

<Variant platform="ios" function="end-live-activity" repeat="2"/>

#### Swift

```swift
import ActivityKit

// End a Live Activity programmatically
Task {
    let finalContentState = FoodDeliveryLiveActivityAttributes.ContentState(
        driverName: "John Doe",
        deliveryTime: "Delivered",
        orderStatus: "Completed"
    )
    
    await activity.end(using: finalContentState, dismissalPolicy: .immediate)
}
```

Alternatively, you can end the Live Activity by sending a push notification with `"event": "end"` as shown in the previous section.
