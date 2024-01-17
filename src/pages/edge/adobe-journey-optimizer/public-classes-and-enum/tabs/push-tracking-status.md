---
noIndex: true
---

<Variant platform="android" function="enum" repeat="1"/>

```java
public enum PushTrackingStatus {
    TRACKING_INITIATED,
    NO_DATASET_CONFIGURED,
    NO_TRACKING_DATA,
    INVALID_INTENT,
    INVALID_MESSAGE_ID,
    UNKNOWN_ERROR;
}
```

<Variant platform="ios" function="enum" repeat="1"/>

```swift
@objc(AEPPushTrackingStatus)
public enum PushTrackingStatus: Int {
    case trackingInitiated
    case noDatasetConfigured
    case noTrackingData
    case invalidMessageId
    case unknownError
}
```

<Variant platform="android" function="string-values" repeat="1"/>

| Enum                    | Description                       |
| ----------------------- | --------------------------------- |
| TRACKING_INITIATED          | This status is returned when all the required data for tracking is available and tracking is initiated.  |
| NO_DATASET_CONFIGURED         | This status is returned when tracking is not initiated because no tracking dataset is configured. |
| NO_TRACKING_DATA          | This status is returned when tracking is not initiated because the intent does not contain tracking data.|
| INVALID_INTENT          | This status is returned when tracking is not initiated because the intent is invalid.  |
| INVALID_MESSAGE_ID | This status is returned when tracking is not initiated because the message ID is invalid.  |
| UNKNOWN_ERROR      | This status is returned when tracking is not initiated because of an unknown error.      |

<Variant platform="ios" function="string-values" repeat="1"/>

| Enum                    | Description                       |
| ----------------------- | --------------------------------- |
| trackingInitiated          | This status is returned when all the required data for tracking is available and tracking is initiated.  |
| noDatasetConfigured         | This status is returned when tracking is not initiated because no tracking dataset is configured. |
| noTrackingData          | This status is returned when tracking is not initiated because the intent does not contain tracking data.|
| invalidMessageId | This status is returned when tracking is not initiated because the message ID is invalid.  |
| unknownError      | This status is returned when tracking is not initiated because of an unknown error.      |
