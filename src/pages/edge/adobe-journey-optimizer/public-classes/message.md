---
title: Message
description: The `Message` class contains the definition of an in-app message and controls its tracking via Experience Edge events.
keywords:
- Adobe Journey Optimizer
- Messaging
- Message
- Interface
- Android
- iOS
- Javascript
- In-app message
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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

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

The `Message` class has the business logic related to the in-app message to perform actions like sending tracking events on interactions and suppress tracking. If your app implements `PresentationDelegate`, it will receive a `Presentable` object, which is the Mobile Core class containing in-app message view. You will need to get the `Message` object associated with `Presentable` object using  the `MessagingUtils.getMessageForPresentable(Presentable)` API. Refer to this [tutorial](../in-app-message/tutorials/messaging-delegate.md) for more details.

## Public functions

### show

Signals to the UIService that the message should be shown.

If `autoTrack` is true, calling this method will result in an "decisioning.propositionDisplay" Edge Event being dispatched.

```java
void show()
```

### dismiss

<InlineAlert variant="warning" slots="header, text"/>

This API has been changed in v3.0.0 of Adobe Journey Optimizer extension.

In earlier versions, this API accepted a parameter `suppressAutoTrack`: If set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

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

Sets the `Message`'s auto tracking preference.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=set-auto-track"/>

### getAutoTrack

Returns the `Message`'s auto tracking preference.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-auto-track"/>

### evaluateJavascript

<InlineAlert variant="warning" slots="header, text"/>

This API has been removed in v3.0.0 of Adobe Journey Optimizer extension.

Migrate to  use `PresentationDelegate` and use the `InAppMessageEventHandler.evaluateJavascript(String, AdobeCallback)` API instead. Refer to this [tutorial](../in-app-message/tutorials/javascript-from-native/) for more details.

Evaluates the passed in `String` content containing JavaScript code using the `Message`'s webview. `handleJavascriptMessage` must be called with a valid callback before calling `evaluateJavascript` as the body of the message passed from the JavaScript code execution will be returned in the `AdobeCallback` .

For a full guide on how to use `handleJavascriptMessage`, read the guide on [executing JavaScript methods from native code](../in-app-message/tutorials/javascript-from-native.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=evaluate-javascript"/>

### handleJavascriptMessage

<InlineAlert variant="warning" slots="header, text"/>

This API has been removed in v3.0.0 of Adobe Journey Optimizer extension.

Migrate to  use `PresentationDelegate` and use the `InAppMessageEventHandler.handleJavascriptMessage(String, AdobeCallback)` API instead. Refer to this [tutorial](../in-app-message/tutorials/native-from-javascript/) for more details.

Adds a handler for named JavaScript messages sent from the message's `WebView`.

The `AdobeCallback` will contain the body of the message passed from the `WebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read the guide on [calling native code from the Javascript of an in-app message](../in-app-message/tutorials/native-from-javascript/).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=handle-javascript-message"/>

### getId

Returns the message's id.

```java
String getId()
```

### getParent

<InlineAlert variant="warning" slots="header, text"/>

This API has been removed in v3.0.0 of Adobe Journey Optimizer extension.

Please use the `MessagingUtils.getMessageForPresentable(Presentable)` API instead. Refer to this [tutorial](../in-app-message/tutorials/messaging-delegate.md) for more details.

Returns the `Object` which created this `Message`.

```java
Object getParent()
```

### getWebView

<InlineAlert variant="warning" slots="header, text"/>

This API has been removed in v3.0.0 of Adobe Journey Optimizer extension.

Functionality is no longer supported.

Returns a reference to the message's `WebView` instance, if it exists.

```java
WebView getWebView()
```
