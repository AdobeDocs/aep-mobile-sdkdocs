import Tabs from './tabs/dispatching-events.md'

# Dispatching events from your extension

Events can be used by extensions in the following scenarios:

* Triggering actions in the Experience Platform SDKs. Events are used by the extensions to signal when certain actions should take place, for example, to send an Adobe Analytics hit. Extensions can send the same types of events that the Experience Platform SDKs would send internally to trigger these actions.
* Triggering actions in another extension. You may have multiple extensions in your application, and some of these extensions might have their own events defined that trigger actions.

## Create an event for dispatching

The `ACPExtensionEvent` (iOS) / `Event` (Android) class contains the event that is used by the internal Event Hub. You can construct an event after the Experience Platform SDKs has been initialized.

<InlineAlert variant="info" slots="text"/>

This event construction is usually completed in an event listener.

When constructing an event, errors can be returned for the following reasons:

* The data that was passed cannot be converted to a JSON representation.
* The type or source has been deprecated by Adobe.
* The type or source is not known. For example, the `com.adobe.eventType` prefix is used, but the type is not known.

In the example below, a custom event called `MyCustomEvent` is created with custom types and sources. The internal modules respond to custom events because they are not listening for it. You can add an event listener for this type and source to verify that it is working.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=create"/>

iOS

<Tabs query="platform=ios&task=create"/>

### Dispatch your event

After creating your event, dispatch it by using the `ACPCore` (iOS) / `MobileCore` (Android) `dispatchEvent` method.

You may need to dispatch an event from one of your APIs or application methods to trigger an internal flow in your extension or another Adobe extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=dispatch"/>

iOS

<Tabs query="platform=ios&task=dispatch"/>

### Dispatch paired events

In order to be notified when an event is being dispatched in the response of an `ACPExtensionEvent` (iOS) / `Event` (Android), use the `dispatchEventWithResponseCallback` API from `ACPCore` (iOS) / `MobileCore` (Android) with a non-null callback. The paired response event is sent by using the `dispatchResponseEvent` API.

<InlineAlert variant="info" slots="text"/>

Paired events are usually used for set/get operations where you need to be notified about a response event outside your extension code.

The following example shows how to implement paired events:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=dispatch-paired"/>

iOS

<Tabs query="platform=ios&task=dispatch-paired"/>
