<Variant platform="ios" function="id" repeat="2"/>

#### Swift

```swift
public var id: String
```

<Variant platform="ios" function="auto-track" repeat="2"/>

#### Swift

```swift
public var autoTrack: Bool = true
```

<Variant platform="ios" function="view" repeat="2"/>

#### Swift

```swift
public var view: UIView? {
    fullscreenMessage?.webView
}
```

<Variant platform="ios" function="show" repeat="2"/>

#### Swift

```swift
public func show()
```

<Variant platform="ios" function="dismiss" repeat="4"/>

#### Swift

```swift
public func dismiss(suppressAutoTrack: Bool? = false)
```

###### Parameters

* *suppressAutoTrack* - if set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

<Variant platform="ios" function="track" repeat="4"/>

#### Swift

```swift
public func track(_ interaction: String?, withEdgeEventType eventType: MessagingEdgeEventType)
```

###### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

<Variant platform="ios" function="handle-javascript-message" repeat="4"/>

#### Swift

```swift
public func handleJavascriptMessage(_ name: String, withHandler handler: @escaping (Any?) -> Void)
```

##### Parameters

* *name* - the name of the message that should be handled by `handler`
* *handler* - the method or closure to be called with the body of the message created in the Message's JavaScript

<Variant platform="android" function="dismiss" repeat="4"/>

#### Java

```java
void dismiss(final boolean suppressAutoTrack)
```

##### Parameters

* *suppressAutoTrack* - if set to `true`, the `decisioning.propositionDismiss` Edge Event will not be sent regardless of the `autoTrack` setting.

<Variant platform="android" function="track" repeat="4"/>

#### Java

```java
void track(final String interaction, final MessagingEdgeEventType eventType)
```

##### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

<Variant platform="android" function="show" repeat="2"/>

#### Java

```java
void show()
```

<Variant platform="android" function="view" repeat="2"/>

#### Java

```java
WebView getWebView()
```

<Variant platform="android" function="handle-javascript-message" repeat="4"/>

#### Java

```java
void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)
```

##### Parameters

* *name* - the name of the message that should be handled by the `callback`
* *callback* - a callback which will be called with the body of the message created in the Message's JavaScript

<Variant platform="android" function="auto-track" repeat="4"/>

#### Java

```java
void setAutoTrack(boolean enabled)
```

##### Parameters

- *enabled* - if true, Experience Edge events will automatically be generated when this `Message` is triggered, displayed, or dismissed.

<Variant platform="android" function="evaluate-javascript" repeat="4"/>

#### Java

```java
void evaluateJavascript(final String content)
```

##### Parameters

* *content* - a string containing the javascript code to be executed

<Variant platform="android" function="id" repeat="2"/>

#### Java

```java
String getId()
```

<Variant platform="android" function="parent" repeat="2"/>

#### Java

```java
Object getParent()
```

<Variant platform="android" function="enum" repeat="2"/>

#### Java

```java
public enum MessagingEdgeEventType {
    IN_APP_DISMISS(0),
    IN_APP_INTERACT(1),
    IN_APP_TRIGGER(2),
    IN_APP_DISPLAY(3),
    PUSH_APPLICATION_OPENED(4),
    PUSH_CUSTOM_ACTION(5);

    final int value;

    MessagingEdgeEventType(final int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    @Override
    public String toString() {
        switch (this) {
            case IN_APP_DISMISS:
                return MessagingConstants.EventDataKeys.Messaging.IAMDetailsDataKeys.EventType.DISMISS;
            case IN_APP_INTERACT:
                return MessagingConstants.EventDataKeys.Messaging.IAMDetailsDataKeys.EventType.INTERACT;
            case IN_APP_TRIGGER:
                return MessagingConstants.EventDataKeys.Messaging.IAMDetailsDataKeys.EventType.TRIGGER;
            case IN_APP_DISPLAY:
                return MessagingConstants.EventDataKeys.Messaging.IAMDetailsDataKeys.EventType.DISPLAY;
            case PUSH_APPLICATION_OPENED:
                return MessagingConstants.EventDataKeys.Messaging.PushNotificationDetailsDataKeys.EventType.OPENED;
            case PUSH_CUSTOM_ACTION:
                return MessagingConstants.EventDataKeys.Messaging.PushNotificationDetailsDataKeys.EventType.CUSTOM_ACTION;
            default:
                return super.toString();
        }
    }
```

<Variant platform="ios" function="enum" repeat="2"/>

#### Swift

```swift
@objc(AEPMessagingEdgeEventType)
public enum MessagingEdgeEventType: Int {
    case inappDismiss = 0
    case inappInteract = 1
    case inappTrigger = 2
    case inappDisplay = 3
    case pushApplicationOpened = 4
    case pushCustomAction = 5

    public func toString() -> String {
        switch self {
        case .inappDismiss:
            return MessagingConstants.XDM.IAM.EventType.DISMISS
        case .inappTrigger:
            return MessagingConstants.XDM.IAM.EventType.TRIGGER
        case .inappInteract:
            return MessagingConstants.XDM.IAM.EventType.INTERACT
        case .inappDisplay:
            return MessagingConstants.XDM.IAM.EventType.DISPLAY
        case .pushCustomAction:
            return MessagingConstants.XDM.Push.EventType.CUSTOM_ACTION
        case .pushApplicationOpened:
            return MessagingConstants.XDM.Push.EventType.APPLICATION_OPENED
        }
    }
}
```

<Variant platform="android" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| IN_APP_DISMISS | `decisioning.propositionDismiss` |
| IN_APP_INTERACT | `decisioning.propositionInteract` |
| IN_APP_TRIGGER | `decisioning.propositionTrigger` |
| IN_APP_DISPLAY | `decisioning.propositionDisplay` |
| PUSH_APPLICATION_OPENED | `pushTracking.applicationOpened` |
| PUSH_CUSTOM_ACTION | `pushTracking.customAction` |

<Variant platform="ios" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| inappDismiss | `decisioning.propositionDismiss` |
| inappInteract | `decisioning.propositionInteract` |
| inappTrigger | `decisioning.propositionTrigger` |
| inappDisplay | `decisioning.propositionDisplay` |
| pushApplicationOpened | `pushTracking.applicationOpened` |
| pushCustomAction | `pushTracking.customAction` |