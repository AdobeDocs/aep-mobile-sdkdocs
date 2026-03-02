---
title: LiveActivityAssuranceDebuggable
description: A protocol for debugging Live Activity schemas in Adobe Assurance.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Activities
- LiveActivityAssuranceDebuggable
- Protocol
- iOS
- Assurance
- Debugging
---

# LiveActivityAssuranceDebuggable

A protocol for debugging Live Activity schemas in Adobe Assurance.

Conforming to this protocol allows you to provide sample data for your Live Activity attributes and content state, which can be used to validate your Live Activity schema in Adobe Assurance during development and testing.

## iOS Protocol - LiveActivityAssuranceDebuggable

Available in iOS 16.1 and later.

## Requirements

### getDebugInfo()

Returns sample attributes and content state for debugging purposes.

```swift
static func getDebugInfo() -> (attributes: Self, state: Self.ContentState)
```

This method should return a tuple containing:
* **attributes**: A sample instance of your `LiveActivityAttributes` type
* **state**: A sample instance of your `ContentState` type

## Usage

### Basic implementation

```swift
@available(iOS 16.1, *)
extension FoodDeliveryLiveActivityAttributes: LiveActivityAssuranceDebuggable {
    static func getDebugInfo() -> (attributes: FoodDeliveryLiveActivityAttributes, state: ContentState) {
        return (
            FoodDeliveryLiveActivityAttributes(
                liveActivityData: LiveActivityData(liveActivityID: "debug-order-123"),
                restaurantName: "Debug Restaurant"
            ),
            ContentState(
                driverName: "Debug Driver",
                deliveryTime: "15 minutes",
                orderStatus: "Preparing"
            )
        )
    }
}
```

### Multiple Live Activity types

You can implement this protocol for all your Live Activity types:

```swift
@available(iOS 16.1, *)
extension GameScoreLiveActivityAttributes: LiveActivityAssuranceDebuggable {
    static func getDebugInfo() -> (attributes: GameScoreLiveActivityAttributes, state: ContentState) {
        return (
            GameScoreLiveActivityAttributes(
                liveActivityData: LiveActivityData(channelID: "debug-game-channel"),
                homeTeam: "Debug Home Team",
                awayTeam: "Debug Away Team"
            ),
            ContentState(
                homeScore: 0,
                awayScore: 0,
                quarter: "1st"
            )
        )
    }
}

@available(iOS 16.1, *)
extension AirplaneTrackingAttributes: LiveActivityAssuranceDebuggable {
    static func getDebugInfo() -> (attributes: AirplaneTrackingAttributes, state: ContentState) {
        return (
            AirplaneTrackingAttributes(
                liveActivityData: LiveActivityData(liveActivityID: "debug-flight-123"),
                flightNumber: "AA123",
                destination: "SFO"
            ),
            ContentState(
                flightStatus: "On Time",
                gate: "A12",
                departureTime: "10:00 AM"
            )
        )
    }
}
```

## Benefits

Implementing this protocol provides the following benefits:

* **Schema validation**: Verify that your Live Activity schema is correctly configured in Adobe Assurance
* **Testing**: Test your Live Activity UI with sample data before deploying to production
* **Debugging**: Quickly identify issues with your Live Activity implementation during development

## Related classes and protocols

* [LiveActivityAttributes](./live-activity-attributes.md)
* [LiveActivityData](./live-activity-data.md)
