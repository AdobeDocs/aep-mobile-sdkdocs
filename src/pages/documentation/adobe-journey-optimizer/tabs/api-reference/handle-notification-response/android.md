#### Java

**Syntax**

```java
public static void handleNotificationResponse(final Intent intent, final boolean applicationOpened, final String customActionId);
```

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `intent` | Intent | The intent contains information related to the messageId and the data. |
| `applicationOpened` | Boolean | Shows whether the application has been opened or not. |
| `actionId` | String | The ID of the custom action. |

**Example**

```java
// Intent can be retrieved from the Activity/BroadcastReceiver using the getIntent() method. 
Intent intent = getIntent();
Messaging.handleNotificationResponse(intent, true, "customActionId");
```