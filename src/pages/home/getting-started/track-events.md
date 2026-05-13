---
title: Track events
description: A guide that explains how to track events using the Adobe Experience Platform Mobile SDK.
keywords:
- Guide
- Edge Network
- Tutorial
---

# Track events

The SDK provides three event tracking APIs to log events for reporting, segmentation, and various other data collection use cases:

1. [Send events to Edge Network](#send-events-to-edge-network) (requires Edge Network extension)
2. [Track user actions](#track-user-actions-for-adobe-analytics) (requires Adobe Analytics extension)
3. [Track app states and screens](#track-app-states-and-screens-for-adobe-analytics) (requires Adobe Analytics extension)

## Send events to Edge Network

<InlineAlert variant="info" slots="text"/>

This step requires knowledge of Experience Data Model (XDM) in Adobe Experience Platform. For more information about XDM, please read the [XDM documentation](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html).

The Edge Network extension provides an API to send an `ExperienceEvent` to Edge Network. An Experience Event is an object that contains data conforming to the XDM `ExperienceEvent` schema definition in Adobe Experience Platform.

In the following reference examples, you'll create an `ExperienceEvent` and then send it using the `sendEvent` API.

Additionally, you'll need to add the `Environment Details` field group and create a custom field group for product reviews that contain the following fields:

* productSku
* rating
* ratingText
* reviewerId

### Create an Experience Event

#### Android Java

```java
Map<String, Object> reviewXdmData = new HashMap<>();
reviewXdmData.put("productSku", "demo123");
reviewXdmData.put("rating", 5);
reviewXdmData.put("reviewText", "I love this demo!");
reviewXdmData.put("reviewerId", "Anonymous user");

Map<String, Object> xdmData = new HashMap<>();
xdmData.put("eventType", "MyFirstXDMExperienceEvent");
xdmData.put(_yourTenantId, reviewXdmData);

ExperienceEvent experienceEvent = new ExperienceEvent.Builder()
                .setXdmSchema(xdmData)
                .build();
```

#### iOS Swift

```swift
var xdmData : [String: Any] = [:]
xdmData["eventType"] = "MyFirstXDMExperienceEvent"
xdmData[_yourTenantId] = ["productSku": "demo123",
                          "rating": 5,
                          "reviewText": "I love this demo!",
                          "reviewerId": "Anonymous user"]
let experienceEvent = ExperienceEvent(xdm: xdmData)
```

#### iOS Objective-C

```objc
NSDictionary<NSString*, NSObject*>* xdmData;
[xdmData setValue:@"MyFirstXDMExperienceEvent" forKey:@"eventType"];
[xdmData setValue:@{@"productSku": @"demo123",
                    @"rating": @5,
                    @"reviewText": @"I love this demo!",
                    @"reviewerId": @"Anonymous user"}
                      forKey:_yourTenantId];
AEPExperienceEvent *experienceEvent = [[AEPExperienceEvent alloc] initWithXdm:xdmData data:nil datasetIdentifier:nil];
```

### Send the Experience Event to Edge Network

Use the Adobe Experience Platform Edge Mobile Extension to send the Experience Event created in the previous step.

#### Android Java

```java
Edge.sendEvent(experienceEvent, null);
```

#### iOS Swift

```swift
Edge.sendEvent(experienceEvent: experienceEvent)
```

#### iOS Objective-C

```objc
[AEPMobileEdge sendExperienceEvent:event completion:nil];
```

## Track user actions (for Adobe Analytics)

This section shows you how to start track user actions in your mobile app. To view and report on this data in those respective solutions, set up [Adobe Analytics](../../solution/adobe-analytics/index.md) or another Experience Cloud solution extensions.

Actions are events that occur in your app. Use this API to track and measure an action, where each action has one or more corresponding metrics that increment each time the event occurs. For example, you might call this API for every new subscription, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You must call this API when an event that you want to track occurs. In addition to the action name, you can send additional context data with each track action call.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void trackAction(final String action, final Map<String, String> contextData)
```

### Example

```java
Map<String, String> additionalContextData = new HashMap<String, String>();
additionalContextData.put("customKey", "value");
MobileCore.trackAction("loginClicked", additionalContextData);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func track(action: String?, data: [String: Any]?)
```

### Example

```swift
MobileCore.track(action: "actionName", data: ["key": "value"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(trackAction:data:)
static func track(action: String?, data: [String: Any]?)
```

### Example

```objectivec
[AEPMobileCore trackAction:@"action name" data:@{@"key": @"value"}];
```

## Track app states and screens (for Adobe Analytics)

States represent screens or views in your app. The `trackState` method is called every time a new state is displayed in your application. For example, this method would be called when a user navigates from the home page to the news feed. This method also sends an Adobe Analytics state-tracking hit with optional context data.

On Android, `trackState` is typically called each time a new activity is loaded.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void trackState(final String state, final Map<String, String> contextData)
```

### Example

```java
Map<String, String> additionalContextData = new HashMap<String, String>();         
additionalContextData.put("customKey", "value");         
MobileCore.trackState("homePage", additionalContextData);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func track(state: String?, data: [String: Any]?) 
```

### Example

```swift
MobileCore.track(state: "state name", data: ["key": "value"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(trackState:data:)
static func track(state: String?, data: [String: Any]?) 
```

### Example

```objectivec
[AEPMobileCore trackState:@"state name" data:@{@"key": @"value"}];
```

For more information, see the [Mobile Core API Reference](../base/mobile-core/api-reference.md).

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance
