---
noIndex: true
---

<Variant platform="ios" function="dismiss" repeat="3"/>

```swift
public func dismiss(suppressAutoTrack: Bool? = false)
```

###### Parameters

* *suppressAutoTrack*: If set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

<Variant platform="ios" function="track" repeat="4"/>

#### Swift

```swift
public func track(_ interaction: String?, withEdgeEventType eventType: MessagingEdgeEventType)
```

###### Parameters

* *interaction*: A custom `String` value to be recorded in the interaction
* *eventType*: The [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

<Variant platform="ios" function="handle-javascript-message" repeat="4"/>

#### Swift

```swift
public func handleJavascriptMessage(_ name: String, withHandler handler: @escaping (Any?) -> Void)
```

##### Parameters

* *name*: The name of the message that should be handled by `handler`
* *handler*: The method or closure to be called with the body of the message created in the Message's JavaScript

<Variant platform="android" function="dismiss" repeat="2"/>

#### Java

```java
void dismiss()
```

<Variant platform="android" function="track" repeat="4"/>

#### Java

```java
void track(final String interaction, final MessagingEdgeEventType eventType)
```

##### Parameters

* *interaction*: A custom `String` value to be recorded in the interaction
* *eventType*: The [`MessagingEdgeEventType`](../messaging-edge-event-type.md) to be used for the ensuing Edge Event

<Variant platform="android" function="handle-javascript-message" repeat="4"/>

#### Java

```java
void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)
```

##### Parameters

* *name*: The name of the message that should be handled by the `callback`
* *callback*: A callback which will be called with the body of the message created in the Message's JavaScript

<Variant platform="android" function="set-auto-track" repeat="4"/>

#### Java

```java
void setAutoTrack(boolean enabled)
```

##### Parameters

* *enabled*: If true, Experience Edge events will automatically be generated when this `Message` is triggered, displayed, or dismissed.

<Variant platform="android" function="get-auto-track" repeat="2"/>

#### Java

```java
boolean getAutoTrack()
```

<Variant platform="android" function="evaluate-javascript" repeat="4"/>

#### Java

```java
void evaluateJavascript(final String content)
```

##### Parameters

* *content*: A string containing the JavaScript code to be executed
