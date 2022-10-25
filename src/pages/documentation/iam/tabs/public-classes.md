<Variant platform="android" function="id" repeat="2"/>

#### Java

```java
public String id;
```

<Variant platform="ios" function="id" repeat="2"/>

#### Swift

```swift
public var id: String
```

<Variant platform="android" function="auto-track" repeat="2"/>

#### Java

```java
public boolean autoTrack = true;
```

<Variant platform="ios" function="auto-track" repeat="2"/>

#### Swift

```swift
public var autoTrack: Bool = true
```

<Variant platform="android" function="view" repeat="2"/>

#### Java

```java
public WebView view;
```

<Variant platform="ios" function="view" repeat="2"/>

#### Swift

```swift
public var view: UIView? {
    fullscreenMessage?.webView
}
```

<Variant platform="android" function="show" repeat="2"/>

#### Java

```java
public void show()
```

<Variant platform="ios" function="show" repeat="2"/>

#### Swift

```swift
public func show()
```

<Variant platform="android" function="dismiss" repeat="4"/>

#### Java

```java
public void dismiss(final boolean suppressAutoTrack)
```

##### Parameters

* *suppressAutoTrack* - if set to `true`, the "inapp.dismiss" Edge Event will not be sent regardless of the `autoTrack` setting.

<Variant platform="ios" function="dismiss" repeat="4"/>

#### Swift

```swift
public func dismiss(suppressAutoTrack: Bool? = false)
```

###### Parameters

* *suppressAutoTrack* - if set to `true`, the "inapp.dismiss" Edge Event will not be sent regardless of the `autoTrack` setting.

<Variant platform="android" function="track" repeat="4"/>

#### Java

```java
public void track(final String interaction, final MessagingEdgeEventType eventType)
```

##### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

<Variant platform="ios" function="track" repeat="4"/>

#### Swift

```swift
public func track(_ interaction: String?, withEdgeEventType eventType: MessagingEdgeEventType)
```

###### Parameters

* *interaction* - a custom `String` value to be recorded in the interaction
* *eventType* - the [`MessagingEdgeEventType`](#enum-messagingedgeeventtype) to be used for the ensuing Edge Event

<Variant platform="android" function="handle-javascript-message" repeat="4"/>

#### Java

```java
public void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)
```

##### Parameters

* *name* - the name of the message that should be handled by the `callback`
* *callback* - a callback which will be called with the body of the message created in the Message's JavaScript

<Variant platform="ios" function="handle-javascript-message" repeat="4"/>

#### Swift

```swift
public func handleJavascriptMessage(_ name: String, withHandler handler: @escaping (Any?) -> Void)
```

##### Parameters

* *name* - the name of the message that should be handled by `handler`
* *handler* - the method or closure to be called with the body of the message created in the Message's JavaScript

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
| IN_APP_DISMISS | `inapp.dismiss` |
| IN_APP_INTERACT | `inapp.interact` |
| IN_APP_TRIGGER | `inapp.trigger` |
| IN_APP_DISPLAY | `inapp.display` |
| PUSH_APPLICATION_OPENED | `pushTracking.applicationOpened` |
| PUSH_CUSTOM_ACTION | `pushTracking.customAction` |

<Variant platform="ios" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| inappDismiss | `inapp.dismiss` |
| inappInteract | `inapp.interact` |
| inappTrigger | `inapp.trigger` |
| inappDisplay | `inapp.display` |
| pushApplicationOpened | `pushTracking.applicationOpened` |
| pushCustomAction | `pushTracking.customAction` |