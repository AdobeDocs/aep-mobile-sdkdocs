---
title: Manual display and tracking of push notification
description: This document describes how to manually build, display and track push notifications from Adobe Journey Optimizer using the AEPMessaging extension. We highly recommend to use the automatic display and tracking method unless you have a specific requirement to manually build, display, and track push notifications.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Android
- API
---

# Manual display and tracking of push notification

This document describes how to manually build, display and track push notifications from Adobe Journey Optimizer using the AEPMessaging extension. You should use the [automatic display and tracking](automatic-display-and-tracking.md) method unless you have a specific requirement to manually build, display, and track push notifications.

## Pre-requisites

[Integrate and register the Messaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Sync the push token

To retrieve the push token from Firebase Messaging Service, please follow the tutorial within the [Firebase documentation](https://firebase.google.com/docs/cloud-messaging/android/client#retrieve-the-current-registration-token). Then use `setPushIdentifier` API to sync the device's push token with profile in Adobe Experience Platform.

<InlineAlert variant="info" slots="text"/>

Although this API is provided in Mobile Core, the use of this API is required and leveraged by the Adobe Journey Optimizer extension to sync provided push tokens with Adobe Experience Platform services.

```java
public class YourApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        FirebaseMessaging.getInstance().getToken().addOnCompleteListener(new OnCompleteListener<String>() {

            @Override
            public void onComplete(@NonNull Task<String> task) {
                if (task.isSuccessful()) {
                    String token = task.getResult();
                    MobileCore.setPushIdentifier(token);
                }       
            }
        });
    }
}
```

<InlineAlert variant="info" slots="text"/>

Calling [resetIdentities](../../api-reference.md#resetidentities) will clear the push token from the Mobile SDK. After calling resetIdentities, the push token must be re-synced using [setPushIdentifier](../../../../home/base/mobile-core/api-reference.md#setpushidentifier).

## Building and displaying notification

1. In `onMessageReceived` method of `YourAppFirebaseMessagingService` class, create a `MessagingPushPayload` object from the remoteMessage. `MessagingPushPayload` will unpack the remoteMessage and provide APIs for getting attributes used for creating the push notification.

    ```java
    MessagingPushPayload payload = new MessagingPushPayload(remoteMessage);
    ```

2. Use the [Public APIs](../../public-classes/messaging-push-payload.md) of MessagingPushPayload to get the attributes required for creating the push notification.

    ```java
    // Following are a few examples of using the public APIs of MessagingPushPayload
    String title = payload.getTitle();
    String body = payload.getBody();
    int badgeCount = payload.getBadgeCount();
    int notificationPriority = payload.getNotificationPriority();
    String channelId = payload.getChannelId();
    String icon = payload.getIcon();
    String imageUrl = payload.getImageUrl();
    ```

3. The intent which is created while building the notification needs to be updated with necessary Adobe information to track push notification interactions.

    ```java
    Messaging.addPushTrackingDetails(
        final Intent intent, // intent which will be used when user interacts with the notification.
        final String messageId, // message.id which represents the id of the push notification
        final Map<String, String> data) // message.data which represents the data part of the remoteMessage.
    ```

4. Use NotificationManager to create and display the built notification.

Here is a sample code for creating a notification channel and building the notification.

```java
public class YourAppFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        // Create a MessagingPushPayload object from the remoteMessage
        MessagingPushPayload payload = new MessagingPushPayload(remoteMessage);

        // Write your code for creating or using an existing notification channel.

        // Creating an intent and attaching tracking details to it.
        Intent intent = new Intent(this, MainActivity.class);
        Messaging.addPushTrackingDetails(intent, remoteMessage.getMessageId(), remoteMessage.getData());
        
        // Write your code to create a pending intent
        
        // Create a notification builder 
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this, CHANNEL_ID)
                        .setSmallIcon(R.drawable.ic_launcher_foreground)
                        .setContentTitle(payload.getTitle())
                        .setContentText(payload.getBody())
                        .setAutoCancel(true)
                        .setContentIntent(pendingIntent);

        // Write your code to add custom buttons to notification, if neccessary.

        // Write your code to download and attach media to notification, if neccessary.

        notificationManager.notify(notificationId, notificationBuilder.build());
    }
}
```

## Tracking push notification received

After your `FirebaseMessagingService` receives a push notification from Adobe Journey Optimizer, call the `trackPushReceived` API to send a `pushTracking.receive` Experience Event to Adobe Experience Platform. This event records that the push was delivered to the device — independent of whether the user later opens or interacts with the notification.

`trackPushReceived` enables AJO to measure the full delivery funnel (sent → received → opened) and surfaces the cohort of pushes that are delivered but never engaged with, which is invisible to `applicationOpened` and `customAction` tracking alone.

<InlineAlert variant="info" slots="text"/>

The Messaging extension must be initialized and registered before calling `trackPushReceived`. If you initialize the SDK in `Application.onCreate`, this is already handled. If your application initializes the SDK later (for example, in `MainActivity.onCreate`) and a push arrives while the app is killed, the receive event may be dispatched into the SDK's pre-init event queue and lost. Initialize the SDK in `Application.onCreate` to guarantee receive tracking on cold-start pushes.

```java
public static void trackPushReceived(
    @NonNull final RemoteMessage remoteMessage); // the Firebase remote message received in onMessageReceived
```

The SDK maintains a bounded in-memory deduplication cache keyed on `messageId`, so it is safe to invoke `trackPushReceived` more than once for the same `RemoteMessage` within a process lifetime — only the first call dispatches an event.

**Sample code**

Add the `trackPushReceived` call in your `FirebaseMessagingService` after you have built and displayed the notification:

```java
public class YourAppFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        // Build and display the notification (see "Building and displaying notification" above).
        // ...

        // Record that the push was delivered to the device.
        Messaging.trackPushReceived(remoteMessage);
    }
}
```

In Kotlin:

```kotlin
class YourAppFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        // Build and display the notification (see "Building and displaying notification" above).
        // ...

        // Record that the push was delivered to the device.
        Messaging.trackPushReceived(remoteMessage)
    }
}
```

## Tracking push notification interactions

After the application is opened by the user by clicking on the push notification, use the `handleNotificationResponse` API to send the push notification interactions feedback to Platform.

```java
    Messaging.handleNotificationResponse(
        final Intent intent, // Intent which contains information related to messageId and data
        final boolean applicationOpened, //  whether application was opened or not
        final String actionId) // actionId of the element which performed the custom action.
```

**Sending push notification interaction feedback when application is opened without any custom action**

Add the following code where you have access to `intent` after the user has interacted with the push notification:

```java
Messaging.handleNotificationResponse(intent, true, null);
```

**Sending feedback when application is opened with a custom action**

Similar to the example above, call the `handleNotificationResponse` API but this time with a custom action:

```java
Messaging.handleNotificationResponse(intent, true, <actionId>);
```

**Sending feedback when application is not opened but a custom action is performed by the user**

Add the following code where you have access to `intent` after the user has interacted with the push notification:

```java
Messaging.handleNotificationResponse(intent, false, <actionId>);
```

Here is a sample code for sending push notification interactions feedback to Platform.

```java

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Intent intent = getIntent();

        // use your unique way to determine isAppOpenFromPushInteraction
        if (isAppOpenFromPushInteraction) {
            // tracking application opened with no custom action
            Messaging.handleNotificationResponse(intent, true, null);
        }
    }
}
```
