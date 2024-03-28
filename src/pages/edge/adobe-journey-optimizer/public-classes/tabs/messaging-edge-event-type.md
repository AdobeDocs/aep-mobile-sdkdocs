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
    case pushApplicationOpened = 4
    case pushCustomAction = 5
    case dismiss = 6
    case interact = 7
    case trigger = 8
    case display = 9

    public func toString() -> String {
        switch self {
        case .dismiss:
            return MessagingConstants.XDM.IAM.EventType.DISMISS
        case .trigger:
            return MessagingConstants.XDM.IAM.EventType.TRIGGER
        case .interact:
            return MessagingConstants.XDM.IAM.EventType.INTERACT
        case .display:
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
| dismiss | `decisioning.propositionDismiss` |
| interact | `decisioning.propositionInteract` |
| trigger | `decisioning.propositionTrigger` |
| display | `decisioning.propositionDisplay` |
| pushApplicationOpened | `pushTracking.applicationOpened` |
| pushCustomAction | `pushTracking.customAction` |
