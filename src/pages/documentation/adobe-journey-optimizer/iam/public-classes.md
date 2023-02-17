import Tabs from './tabs/public-classes.md'

# Public classes and Interfaces

## iOS Class - Message

The `Message` class contains the definition of an in-app message and controls its tracking via Experience Edge events.

`Message` objects are only created by the AEPMessaging extension, and passed as the `message` parameter in `MessagingDelegate` protocol methods.

## Public variables

### id

Identifier of the `Message`. This value matches the Message Execution ID assigned by Adobe Journey Optimizer (AJO) Campaign.

#### iOS

#### Swift

```swift
public var id: String
```

### autoTrack

If set to `true` (default), Experience Edge events will automatically be generated when this `Message` is triggered, displayed, and dismissed.

#### iOS

#### Swift

```swift
public var autoTrack: Bool = true
```

### view

Holds a reference to the message's `WKWebView` (iOS) or `WebView` (Android) instance, if it exists.

#### iOS

#### Swift

```swift
public var view: UIView? {
    fullscreenMessage?.webView
}
```

## Public functions

### show

Signals to the UIService (in `AEPServices`) that the message should be shown.

If `autoTrack` is true, calling this method will result in an `decisioning.propositionTrigger` Edge Event being dispatched.

#### iOS

#### Swift

```swift
public func show()
```

### dismiss(suppressAutoTrack:)

Signals to the UIService that the message should be removed from the UI.

If `autoTrack` is true, calling this method will result in an `decisioning.propositionDismiss` Edge Event being dispatched.

#### iOS

#### Swift

```swift
public func dismiss(suppressAutoTrack: Bool? = false)
```

###### Parameters

* *suppressAutoTrack* - if set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

### track(_:withEdgeEventType:)

Generates and dispatches an Edge Event for the provided `interaction` and `eventType`.

#### iOS

#### Swift

```swift
public func track(_ interaction: String?, withEdgeEventType eventType: MessagingEdgeEventType)
```

###### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

### handleJavascriptMessage(_:withHandler:)

Adds a handler for named JavaScript messages sent from the message's `WKWebView`.

The parameter passed to `handler` will contain the body of the message passed from the `WKWebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read [Call native code from the Javascript of an in-app message](./tutorials/native-from-javascript.md).

#### iOS

#### Swift

```swift
public func handleJavascriptMessage(_ name: String, withHandler handler: @escaping (Any?) -> Void)
```

##### Parameters

* *name* - the name of the message that should be handled by `handler`
* *handler* - the method or closure to be called with the body of the message created in the Message's JavaScript

## Android Interface - Message

The `Message` interface contains the definition of an in-app message and provides a framework to track message interactions via Experience Edge events.

`InternalMessage` objects implementing this interface are created by the AEPMessaging extension, and passed as the `message` parameter in `MessagingDelegate` protocol methods.

## Public functions

### show

Signals to the UIService that the message should be shown.

If `autoTrack` is true, calling this method will result in an "decisioning.propositionDisplay" Edge Event being dispatched.

#### Android

#### Java

```java
void show()
```

### dismiss

Signals to the UIService that the message should be removed from the UI.

If `autoTrack` is true, calling this method will result in an "decisioning.propositionDismiss" Edge Event being dispatched.

#### Android

#### Java

```java
void dismiss(final boolean suppressAutoTrack)
```

##### Parameters

* *suppressAutoTrack* - if set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

### track

Generates and dispatches an Edge Event for the provided `interaction` and `eventType`.

#### Android

#### Java

```java
void track(final String interaction, final MessagingEdgeEventType eventType)
```

##### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

### setAutoTrack

Sets the `Message's` auto tracking preference.

#### Android

#### Java

```java
void setAutoTrack(boolean enabled)
```

##### Parameters

- *enabled* - if true, Experience Edge events will automatically be generated when this `Message` is triggered, displayed, or dismissed.

### evaluateJavascript

Evaluates the passed in `String` content containing javascript code using the `Message's ` webview. `handleJavascriptMessage` must be called with a valid callback before calling `evaluateJavascript` as the body of the message passed from the javascript code execution will be returned in the `AdobeCallback` .

#### Android

#### Java

```java
void evaluateJavascript(final String content)
```

##### Parameters

* *content* - a string containing the javascript code to be executed

### handleJavascriptMessage

Adds a handler for named JavaScript messages sent from the message's `WebView`.

The  `AdobeCallback` will contain the body of the message passed from the `WebView`'s JavaScript.

For a full guide on how to use `handleJavascriptMessage`, read [Call native code from the Javascript of an in-app message](./how-to-call-native-from-javascript.md).

#### Android

#### Java

```java
void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)
```

##### Parameters

* *name* - the name of the message that should be handled by the `callback`
* *callback* - a callback which will be called with the body of the message created in the Message's JavaScript

### getId

Returns the message's id.

#### Android

#### Java

```java
String getId()
```

### getParent

Returns the `Object` which created this `Message`.

#### Android

#### Java

```java
Object getParent()
```

### getWebView

Returns a reference to the message's  `WebView`  instance, if it exists.

#### Android

#### Java

```java
WebView getWebView()
```

# Enum - MessagingEdgeEventType

Provides mapping to XDM EventType strings needed for Experience Event requests.

This enum is used in conjunction with the [`track(_:withEdgeEventType:)`](#track_withedgeeventtype) method of a `Message` object.

### Definition

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<Tabs query="platform=android&function=enum"/>

#### iOS

<Tabs query="platform=ios&function=enum"/>

### String values

Below is the table of values returned by calling the `toString` method for each case, which are used as the XDM `eventType` in outgoing experience events:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<Tabs query="platform=android&function=string-values"/>

#### iOS

<Tabs query="platform=ios&function=string-values"/>