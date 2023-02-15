import Tabs from './tabs/track-events.md'

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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=create"/>

iOS

<Tabs query="platform=ios&task=create"/>

### Send the Experience Event to Edge Network

Use the Adobe Experience Platform Edge Mobile Extension to send the Experience Event created in the previous step.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=send"/>

iOS

<Tabs query="platform=ios&task=send"/>

## Track user actions (for Adobe Analytics)

This section shows you how to start track user actions in your mobile app. To view and report on this data in those respective solutions, set up [Adobe Analytics](../adobe-analytics/index.md) or another Experience Cloud solution extensions.

Actions are events that occur in your app. Use this API to track and measure an action, where each action has one or more corresponding metrics that increment each time the event occurs. For example, you might call this API for every new subscription, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You must call this API when an event that you want to track occurs. In addition to the action name, you can send additional context data with each track action call.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=track-action"/>

iOS

<Tabs query="platform=ios&task=track-action"/>

<!-- React Native

<Tabs query="platform=react-native&task=track-action"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=track-action"/> -->

<!-- Cordova

<Tabs query="platform=cordova&task=track-action"/>

Unity

<Tabs query="platform=unity&task=track-action"/>

Xamarin

<Tabs query="platform=xamarin&task=track-action"/> -->

## Track app states and screens (for Adobe Analytics)

States represent screens or views in your app. The `trackState` method is called every time a new state is displayed in your application. For example, this method would be called when a user navigates from the home page to the news feed. This method also sends an Adobe Analytics state-tracking hit with optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=track-state"/>

iOS

<Tabs query="platform=ios&task=track-state"/>

<!-- React Native

<Tabs query="platform=react-native&task=track-state"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=track-state"/> -->

<!-- Cordova

<Tabs query="platform=cordova&task=track-state"/>

Unity

<Tabs query="platform=unity&task=track-state"/>

Xamarin

<Tabs query="platform=xamarin&task=track-state"/> -->

For more information, see the [Mobile Core API Reference](../mobile-core/api-reference.md).

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance

