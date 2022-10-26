import Tabs from './tabs/listening-for-events.md'

# Listening for events

A common use case is to add an event listener to get notifications for events. The main location to add an event listener is in the `init` method, although you can add listeners by using other callbacks later. You can add the logic that you want executed when an event occurs, and for which you have a listener, in the `hear` method of your listener class.

When handling an event in the event listener, note that the `hear` method should take a maximum of 100ms to execute. This means that potentially long-running operations should be pushed to another thread (for example, network or file operations), as in the following examples.

Here are some additional rules to note for event listeners:

* You can listen to an event by registering your listener class with an event source and an event type.  The Adobe Experience Platform SDKs create an instance of your listener class and retain it as long as your extension is registered.
* When an event that you are listening for occurs, the `hear` method on the appropriate instance of your listener class is called.
* You can register multiple listeners, but each listener instance only listens for one source/type pair.
* One listener class might be used to listen for multiple events, but you need to check the details of the event you are passed on each call to the `hear` method.
* All registered listeners are released when the extension is unregistered.

The event type and event source that are associated with the received event can be in lower case because the Mobile SDK compares the type and the source as case insensitive values. When you check the event type and event source of the event, we recommend that you use the ignore case string comparison.

## Creating your event listener

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=create"/>

iOS

<Tabs query="platform=ios&task=create"/>

### What can you do in your event handler?

Your listener has a reference to the parent extension that registered it. You can use this to centralize logic into your extension class and call into it from your listener. This also means you have access to the extension services API (`ACPExtensionApi` on iOS and `ExtensionApi` on Android) provided to the extension. This allows you to manage your shared states or register additional listeners. You also have access to the core SDK (`ACPCore` (iOS) or `MobileCore` (Android)). This reference allows you to dispatch events and receive responses.

## Registering your event listener

You can register your listener class by using the `init` method as in the example below. In the `hear` method, you can access the registered extensions instance by using the extension property. This step can be useful to maintain state in your extension, or when you need to access to the `ACPExtensionApi` interface that the extension can also access.

The following example calls the listeners `hear` method when a change to the Adobe Experience Platform SDKs configuration occurs.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register-event"/>

iOS

<Tabs query="platform=ios&task=register-event"/>

## Registering a wildcard listener

To listen for all events that are received and broadcasted by the Event Hub, register a wildcard listener by using the `registerWildcardListener` API.

<InlineAlert variant="warning" slots="text"/>

The `hear` method of this listener can be called often, and you should not do intensive processing on the same thread. You should use your own thread executor for the processing that you do in this listener. In doing so, the Event Hub is not blocked, and the listener is not unregistered if it takes too long.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register-wildcard"/>

iOS

<Tabs query="platform=ios&task=register-wildcard"/>
