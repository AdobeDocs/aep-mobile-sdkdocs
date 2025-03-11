---
title: Display an in-message on push notification interaction
description: This document describes the steps that allow a designated in-app message to be shown to an end user when they interact with a push notification to open the app.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- In-App Messaging
- Android
- API
- Push to In-App
---

# Display an in-message on push notification interaction

## Overview

This document describes the steps that allow a designated in-app message to be shown to an end user when they interact with a push notification to open the app.

## Pre-requisites

[Integrate and register Messaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Add a trigger in the in-app message campaign

1. In the Journey Optimizer UI, select the Campaign for the in-app message that needs to be shown when a push notification is interacted with.
2. Under the **Triggers** section, click on the **Edit triggers** button. Click on **Add Condition** and select the **Manual trigger** from the event dropdown. Click on **Add Condition** again and select **Custom trait** from the trait menu. Enter `adb_iam_id` as the key for the custom trait and an ID that uniquely identifies the in-app message as the value. Make a note of this ID as it will be used in the next section.

<InlineAlert variant="info" slots="text"/>

The above rule to show the in-app message when the app is opened from a push notification interaction can be combined with existing trigger rules based on other events using an **OR** operator.

![In-app campaign trigger for Push-to-inapp](./../../assets/push-notification/iam-trigger-p2i.png)

3. Click on **Done** to save the rule and review the changes by clicking on **Review to activate**.

4. Click on **Request approval** to activate the campaign.

## Add the in-app message ID to the push notification data

1. In the Journey Optimizer UI, select the Campaign for the Push notification which opens the app and shows the in-app message from the previous step.
2. Click **Edit content** to modify the push notification payload. Under **Custom data** section, click on **Add Key/Value Pair**. Enter `adb_iam_id` in the key field and the unique in-app message ID from the previous section in the value field.

![Push campaign custom data for Push-to-inapp](./../../assets/push-notification/push-custom-data-p2i.png)

3. Click on **Review to activate** to save the changes.

4. Click on **Request approval** to activate the campaign.

## Add the data from `MessagingPushPayload` to the notification intent extras

<InlineAlert variant="info" slots="text"/>

This step can be skipped if your app is [automatically displaying and tracking push notification using AEPMessaging extension](./automatic-display-and-tracking.md).

Call the [MessagingPushPayload.putDataInExtras(intent)](./../../public-classes/messaging-push-payload.md#public-apis) method to add the push notification data to the intent sent when the notification is clicked or cleared, depending on which action leads to the app to open and display of the in-app message. The following example shows how to add the `MessagingPushPayload` data to the push notification open and delete intents in a custom implementation of `FirebaseMessagingService`.

```java
public class CustomNotificationService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage message) {
        super.onMessageReceived(message);

        // code to create channelId

        MessagingPushPayload payload = new MessagingPushPayload(message);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, channelId);

        // code to build the notification UI

        Intent contentIntent = new Intent(this, MainActivity.class);
        if (message.getMessageId() != null) {
            Messaging.addPushTrackingDetails(contentIntent, message.getMessageId(), message.getData());
        }
        // add MessagingPushPayload data to the intent sent when the notification is clicked
        payload.putDataInExtras(contentIntent);
        builder.setContentIntent(PendingIntent.getActivity(this, 0, contentIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0));

        Intent deleteIntent = new Intent(this, MainActivity.class);
        if (message.getMessageId() != null) {
            Messaging.addPushTrackingDetails(deleteIntent, message.getMessageId(), message.getData());
        }
        // add MessagingPushPayload data to the intent sent when the notification is cleared from the notification panel 
        payload.putDataInExtras(deleteIntent);
        builder.setDeleteIntent(PendingIntent.getBroadcast(this, 0, deleteIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0));

        // code to display the notification
    }
}
```

## Track push notification interaction

<InlineAlert variant="info" slots="text"/>

This step can be skipped if your app is [automatically displaying and tracking push notification using AEPMessaging extension](./automatic-display-and-tracking.md).

After the application is opened by the user by clicking on the push notification, verify push notification interaction is being tracked using [handleNotificationResponse](./manual-display-and-tracking.md#tracking-push-notification-interactions) API.
