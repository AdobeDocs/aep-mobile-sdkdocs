---
noIndex: true
---

<Variant platform="android" function="enum" repeat="3"/>

<InlineNestedAlert variant="warning" header="true" iconPosition="left">

This enum has been changed in v3.0.0 of Adobe Journey Optimizer extension.

Please use newly added `DISMISS`, `INTERACT`, `TRIGGER`, `DISPLAY` values in place of `IN_APP_DISMISS`, `IN_APP_INTERACT`, `IN_APP_TRIGGER`, `IN_APP_DISPLAY` from earlier versions.

</InlineNestedAlert>

#### Java

```java
public enum MessagingEdgeEventType {
    PUSH_APPLICATION_OPENED(4),
    PUSH_CUSTOM_ACTION(5),
    DISMISS(6),
    INTERACT(7),
    TRIGGER(8),
    DISPLAY(9),
    DISQUALIFY(10),
    SUPPRESS_DISPLAY(11);

    MessagingEdgeEventType(final int value) {
        this.value = value;
    }

    /**
     * @deprecated This method will be removed in future versions.
     */
    @Deprecated
    public int getValue() {
        return value;
    }

    public String getPropositionEventType() {
        switch (this) {
            case DISMISS:
                return PROPOSITION_EVENT_TYPE_DISMISS;
            case INTERACT:
                return PROPOSITION_EVENT_TYPE_INTERACT;
            case TRIGGER:
                return PROPOSITION_EVENT_TYPE_TRIGGER;
            case DISPLAY:
                return PROPOSITION_EVENT_TYPE_DISPLAY;
            case DISQUALIFY:
                return PROPOSITION_EVENT_TYPE_DISQUALIFY;
            case SUPPRESS_DISPLAY:
                return PROPOSITION_EVENT_TYPE_SUPPRESS_DISPLAY;
            default:
                return "";
        }
    }

    @NonNull @Override
    public String toString() {
        switch (this) {
            case DISMISS:
                return PROPOSITION_EVENT_TYPE_DISMISS_STRING;
            case INTERACT:
                return PROPOSITION_EVENT_TYPE_INTERACT_STRING;
            case TRIGGER:
                return PROPOSITION_EVENT_TYPE_TRIGGER_STRING;
            case DISPLAY:
                return PROPOSITION_EVENT_TYPE_DISPLAY_STRING;
            case DISQUALIFY:
                return PROPOSITION_EVENT_TYPE_DISQUALIFY_STRING;
            case SUPPRESS_DISPLAY:
                return PROPOSITION_EVENT_TYPE_SUPPRESS_DISPLAY_STRING;
            case PUSH_APPLICATION_OPENED:
                return PUSH_NOTIFICATION_EVENT_TYPE_STRING_OPENED;
            case PUSH_CUSTOM_ACTION:
                return PUSH_NOTIFICATION_EVENT_TYPE_STRING_CUSTOM_ACTION;
            default:
                return super.toString();
        }
    }
}
```

<Variant platform="ios" function="enum" repeat="3"/>

<InlineNestedAlert variant="warning" header="true" iconPosition="left">

This enum has been changed in v5.0.0 of Adobe Journey Optimizer extension.

Please use newly added  values `dismiss`, `interact`, `trigger`, `display` in place of `inappDismiss`, `inappInteract`, `inappTrigger`, `inappDisplay` from earlier versions.

</InlineNestedAlert>

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
    case disqualify = 10
    case suppressDisplay = 11

    public func toString() -> String {
        switch self {
        case .dismiss:
            return MessagingConstants.XDM.Inbound.EventType.DISMISS
        case .trigger:
            return MessagingConstants.XDM.Inbound.EventType.TRIGGER
        case .interact:
            return MessagingConstants.XDM.Inbound.EventType.INTERACT
        case .display:
            return MessagingConstants.XDM.Inbound.EventType.DISPLAY
        case .disqualify:
            return MessagingConstants.XDM.Inbound.EventType.DISQUALIFY
        case .suppressDisplay:
            return MessagingConstants.XDM.Inbound.EventType.SUPPRESSED_DISPLAY
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
| DISMISS | `decisioning.propositionDismiss` |
| INTERACT | `decisioning.propositionInteract` |
| TRIGGER | `decisioning.propositionTrigger` |
| DISPLAY | `decisioning.propositionDisplay` |
| DISQUALIFY | `decisioning.propositionDisqualify` |
| SUPPRESS_DISPLAY | `decisioning.propositionSuppressDisplay` |
| PUSH_APPLICATION_OPENED | `pushTracking.applicationOpened` |
| PUSH_CUSTOM_ACTION | `pushTracking.customAction` |

<Variant platform="ios" function="string-values" repeat="1"/>

| Case | String value |
| ---- | ------------ |
| dismiss | `decisioning.propositionDismiss` |
| interact | `decisioning.propositionInteract` |
| trigger | `decisioning.propositionTrigger` |
| display | `decisioning.propositionDisplay` |
| disqualify | `decisioning.propositionDisqualify` |
| suppressDisplay | `decisioning.propositionSuppressDisplay` |
| pushApplicationOpened | `pushTracking.applicationOpened` |
| pushCustomAction | `pushTracking.customAction` |
