---
title: <title>
description: <description>
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- iOS
---
import Tabs from './tabs/message.md'

# Message

The `Message` class contains the definition of an in-app message and controls its tracking via Experience Edge events.

## iOS Interface - Message

`Message` objects are only created by the AEPMessaging extension, and passed as the `message` parameter in `MessagingDelegate` protocol methods.

## Public variables

### id

Identifier of the `Message`. This value matches the Message Execution ID assigned by Adobe Journey Optimizer (AJO) Campaign.

```swift
public var id: String
```

### autoTrack

If set to `true` (default), Experience Edge events will automatically be generated when this `Message` is triggered, displayed, and dismissed.

```swift
public var autoTrack: Bool = true
```

### view

Holds a reference to the message's `WKWebView` (iOS) or `WebView` (Android) instance, if it exists.

```swift
public var view: UIView? {
    fullscreenMessage?.webView
}
```

## Public functions

### show

Signals to the UIService (in `AEPServices`) that the message should be shown.

If `autoTrack` is true, calling this method will result in an `decisioning.propositionTrigger` Edge Event being dispatched.

```swift
public func show()
```

### dismiss(suppressAutoTrack:)

Signals to the UIService that the message should be removed from the UI.

If `autoTrack` is true, calling this method will result in an `decisioning.propositionDismiss` Edge Event being dispatched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="0"/>

iOS

<Tabs query="platform=ios&function=dismiss"/>

### track(_:withEdgeEventType:)

Generates and dispatches an Edge Event for the provided `interaction` and `eventType`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=track"/>

### handleJavascriptMessage(_:withHandler:)

Adds a handler for named JavaScript messages sent from the message's `WKWebView`.

The parameter passed to `handler` will contain the body of the message passed from the `WKWebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read [Call native code from the Javascript of an in-app message](./tutorials/native-from-javascript.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=handle-javascript-message"/>

## Android Interface - Message

`InternalMessage` objects implementing this interface are created by the AEPMessaging extension, and passed as the `message` parameter in `MessagingDelegate` interface methods.

## Public functions

### show

Signals to the UIService that the message should be shown.

If `autoTrack` is true, calling this method will result in an "decisioning.propositionDisplay" Edge Event being dispatched.

```java
void show()
```

### dismiss

Signals to the UIService that the message should be removed from the UI.

If `autoTrack` is true, calling this method will result in an "decisioning.propositionDismiss" Edge Event being dispatched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=dismiss"/>

### track

Generates and dispatches an Edge Event for the provided `interaction` and `eventType`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=track"/>

### setAutoTrack

Sets the `Message's` auto tracking preference.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=auto-track"/>

### evaluateJavascript

Evaluates the passed in `String` content containing javascript code using the `Message's` webview. `handleJavascriptMessage` must be called with a valid callback before calling `evaluateJavascript` as the body of the message passed from the javascript code execution will be returned in the `AdobeCallback` .

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=evaluate-javascript"/>

### handleJavascriptMessage

Adds a handler for named JavaScript messages sent from the message's `WebView`.

The  `AdobeCallback` will contain the body of the message passed from the `WebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read [Call native code from the Javascript of an in-app message](./how-to-call-native-from-javascript.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=handle-javascript-message"/>

### getId

Returns the message's id.

```java
String getId()
```

### getParent

Returns the `Object` which created this `Message`.

```java
Object getParent()
```

### getWebView

Returns a reference to the message's  `WebView`  instance, if it exists.

```java
WebView getWebView()
```
