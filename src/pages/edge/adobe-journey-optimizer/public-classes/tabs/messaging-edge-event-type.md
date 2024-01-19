---
noIndex: true
---

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
