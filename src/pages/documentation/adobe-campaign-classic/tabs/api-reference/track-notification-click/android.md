<InlineAlert variant="info" slots="text"/>

If `trackInfo` is null, or does not contain the necessary tracking identifiers, `messageId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

#### Java

**Syntax**

```java
public static void trackNotificationClick(final Map<String, String> trackInfo)
```

**Example**

```java
@Override
public void onResume() {
    super.onResume();
    // Perform any other app related tasks 
    // The messageId (_mId) and deliveryId (_dId) can be passed in the intent extras.
    // This is assuming you extract the messageId and deliveryId from the
    // received push message and are including it in the intent (intent.putExtra())
    // of the displayed notification.

    Bundle extras = getIntent().getExtras();
    if (extras != null) {
        String deliveryId = extras.getString("_dId");
        String messageId = extras.getString("_mId");
        if (deliveryId != null && messageId != null) {
            Map<String,String> trackInfo = new HashMap<>();
            trackInfo.put("_mId", messageId);
            trackInfo.put("_dId", deliveryId);

            // Send the tracking information for message opening
            CampaignClassic.trackNotificationClick(trackInfo);
        }
    }
}
```