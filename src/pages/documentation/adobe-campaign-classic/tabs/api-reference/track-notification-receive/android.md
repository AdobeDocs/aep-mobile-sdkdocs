#### Java

If `trackInfo` is null or does not contain the necessary tracking identifiers, `messageId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

**Syntax**

```java
public static void trackNotificationReceive(final Map<String, String> trackInfo)
```

**Example**

```java
public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d("TestApp", "Receive message from: " + remoteMessage.getFrom());
        Map<String,String> payloadData = message.getData();

        // Check if message contains data payload.
        if (payloadData.size() > 0) {
            Map<String,String> trackInfo = new HashMap<>();
            trackInfo.put("_mId", payloadData.get("_mId"));
            trackInfo.put("_dId", payloadData.get("_dId"));

            // Send the tracking information for message received
            CampaignClassic.trackNotificationReceive(trackInfo);
        }
    }
}
```