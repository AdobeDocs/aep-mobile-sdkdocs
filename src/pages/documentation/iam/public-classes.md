import Tabs from './tabs/public-classes.md'

# Class - Message

The `Message` class contains the definition of an in-app message and controls its tracking via Experience Edge events.

`Message` objects are only created by the AEPMessaging extension, and passed as the `message` parameter in `MessagingDelegate` protocol methods.

## Public variables

### id

Identifier of the `Message`. This value matches the Message Execution ID assigned by Adobe Journey Optimizer (AJO) Campaign.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=id"/>

iOS

<Tabs query="platform=ios&function=id"/>

### autoTrack

If set to `true` (default), Experience Edge events will automatically be generated when this `Message` is triggered, displayed, and dismissed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=auto-track"/>

iOS

<Tabs query="platform=ios&function=auto-track"/>

### view

Holds a reference to the message's `WKWebView` (iOS) or `WebView` (Android) instance, if it exists.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=view"/>

iOS

<Tabs query="platform=ios&function=view"/>

## Public functions

### show

Signals to the UIService (in `AEPServices`) that the message should be shown.

If `autoTrack` is true, calling this method will result in an "inapp.trigger" Edge Event being dispatched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=show"/>

iOS

<Tabs query="platform=ios&function=show"/>

### dismiss(suppressAutoTrack:)

Signals to the UIService that the message should be removed from the UI.

If `autoTrack` is true, calling this method will result in an "inapp.dismiss" Edge Event being dispatched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=dismiss"/>

iOS

<Tabs query="platform=ios&function=dismiss"/>

### track(_:withEdgeEventType:)

Generates and dispatches an Edge Event for the provided `interaction` and `eventType`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=track"/>

iOS

<Tabs query="platform=ios&function=track"/>

### handleJavascriptMessage(_:withHandler:)

Adds a handler for named JavaScript messages sent from the message's `WKWebView`.

The parameter passed to `handler` will contain the body of the message passed from the `WKWebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read [Call native code from the Javascript of an in-app message](./tutorials/native-from-javascript.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=handle-javascript-message"/>

iOS

<Tabs query="platform=ios&function=handle-javascript-message"/>

# Enum - MessagingEdgeEventType

Provides mapping to XDM EventType strings needed for Experience Event requests.

This enum is used in conjunction with the [`track(_:withEdgeEventType:)`](#track_withedgeeventtype) method of a `Message` object.

### Definition

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=enum"/>

iOS

<Tabs query="platform=ios&function=enum"/>

### String values

Below is the table of values returned by calling the `toString` method for each case, which are used as the XDM `eventType` in outgoing experience events:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=string-values"/>

iOS

<Tabs query="platform=ios&function=string-values"/>