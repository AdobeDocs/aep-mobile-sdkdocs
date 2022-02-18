#### Java

**Syntax**

```java
public MessagingPushPayload(RemoteMessage message)
```

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `message` | `RemoteMessage` | A message that contains the necessary attributes for creating a push notification. |

```java
public MessagingPushPayload(Map<String, String> data)
```

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `data` | `Map<String, String>` | A data payload that contains the necessary attributes for creating a push notification. |

**Examples**

```java
// Using the remote message
@Override
public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
    MessagingPushPayload payload = new MessagingPushPayload(remoteMessage);
}

// Using the data map
@Override
public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
    MessagingPushPayload payload = new MessagingPushPayload(remoteMessage.getData());
}
```