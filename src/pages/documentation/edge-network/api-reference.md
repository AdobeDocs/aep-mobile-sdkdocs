import Tabs from './tabs/api-reference.md'

# Edge Network API reference

## extensionVersion

Returns the version of the client-side Edge extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getLocationHint

Gets the Edge Network location hint used in requests to the Adobe Experience Platform Edge Network. The Edge Network location hint may be used when building the URL for Adobe Experience Platform Edge Network requests to hint at the server cluster to use.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-location-hint"/>

iOS

<Tabs query="platform=ios&api=get-location-hint"/>

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## resetIdentities

Resets current state of the AEP Edge extension and clears previously cached content related to current identity, if any.

See [MobileCore.resetIdentities](../mobile-core/api-reference.md#resetidentities) for more details.

## sendEvent

Sends an Experience event to Adobe Experience Platform Edge Network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=send-event"/>

iOS

<Tabs query="platform=ios&api=send-event"/>

## setLocationHint

Sets the Edge Network location hint used in requests to the Adobe Experience Platform Edge Network. Passing nil or an empty string clears the existing location hint. Edge Network responses may overwrite the location hint to a new value when necessary to manage network traffic.

<InlineAlert variant="warning" slots="text"/>

Use caution when setting the location hint. Only use location hints for the "EdgeNetwork" scope. An incorrect location hint value will cause all Edge Network requests to fail with 404 response code.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-location-hint"/>

iOS

<Tabs query="platform=ios&api=set-location-hint"/>

## Public classes

### XDM Schema

The AEP Edge extension provides the Schema and Property interfaces (Android) / XDMSchema protocol (iOS) that can be used to define the classes associated with your XDM schema in Adobe Experience Platform.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=xdm-schema"/>

iOS

<Tabs query="platform=ios&api=xdm-schema"/>

### EdgeEventHandle

The `EdgeEventHandle` is a response fragment from Adobe Experience Platform Edge Network for a sent XDM Experience Event.
One event can receive none, one or multiple `EdgeEventHandle`(s) as response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=edge-event-handle"/>

iOS

<Tabs query="platform=ios&api=edge-event-handle"/>

Use this class when calling the [sendEvent](#sendevent) API with EdgeCallback.

### ExperienceEvent

Experience Event is the event to be sent to Adobe Experience Platform Edge Network.
The XDM data is required for any Experience Event being sent using the Edge extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=experience-event"/>

iOS

<Tabs query="platform=ios&api=experience-event"/>

See [Edge Extension Usage](https://github.com/adobe/aepsdk-edge-ios/blob/main/Documentation/extension-usage.md) for more examples.
