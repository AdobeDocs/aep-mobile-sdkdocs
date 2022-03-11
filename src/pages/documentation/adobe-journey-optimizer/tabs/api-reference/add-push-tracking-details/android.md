#### Java

**Syntax**

```java
public static boolean addPushTrackingDetails(final Intent intent, final String messageId, final Map<String, String> data)
```

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `intent` | `Intent` | The pending intent that needs to be updated so it can be used when the user interacts with the notification. |
| `messageId` | `String` | The message ID for the push notification. |
| `data` | `Map<String, String>` | The data of the remoteMessage. |

This API returns a boolean, indicating whether the intent was updated with necessary information (messageId and Customer Journey data).

**Example**

```java
boolean success = addPushTrackingDetails(intent, messageId, data)
```