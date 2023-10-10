---
title: Automatically display and track push notification
description: This document describes how to automatically display and track push notifications using the AEPMessaging extension. We highly recommend to use this method unless you have a specific requirement to manually display and track push notifications.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Android
- API
- Auto track
- Display push notification
- auto track push notification
---

# Automatically display and track push notification

This document describes how to automatically display and track push notifications using the AEPMessaging extension. We highly recommend to use this method unless you have a specific requirement to manually display and track push notifications.

## Pre-requisites

[Integrate and register Messaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

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

## Display and track push notification

### Register Messaging extension's FirebaseMessagingService

<InlineAlert variant="info" slots="text"/>

If your application already registered a `FirebaseMessagingService` class, then you can skip this step and move to the [Using your own FirebaseMessagingService](#using-your-own-firebasemessagingservice) section.

Messaging extension uses `MessagingService` to receive, display and track push notifications. To register the `MessagingService` add the following code to the `AndroidManifest.xml` file:

```java
        <service
            android:name="com.adobe.marketing.mobile.messaging.MessagingService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
```

### Using your own FirebaseMessagingService

If your application already registered a `FirebaseMessagingService` class, then you can use the following API to display and track push notifications originated from Adobe Journey Optimizer.

```java
public class YourAppFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        if (MessagingService.handleRemoteMessage(this, message)) {
            // Push notification originated from Adobe Journey Optimizer is handled by the Messaging extension.
        } else {
            // Handle push notification originated from other sources.
        }       
    }
}
```

## Notification Channel

Notification channel was introduced in Android Oreo (API level 26). It allows you to group notifications and allows users to customize the notification preferences for each channel. 

You must create at least one notification channel to display push notifications on devices running Android Oreo or higher. Follow the [android documentation](https://developer.android.com/develop/ui/views/notifications/channels) to create and manage notification channels. Once a notification channel is created, you can use the channel id while [designing the push notification](https://experienceleague.adobe.com/docs/journey-optimizer/using/push/design-push.html) in Adobe Journey Optimizer.


**Default Channel**: If you do not create a notification channel, or if the notification channel specified while designing the push notification does not match with any of the created channels, the Messaging extension will present the push notification through its predefined fallback notification channel, which is named "General Notifications."

## Configuring Small Icon

Use MobileCore's API to set the small icon resource id. This icon will be used as the small icon for all the incoming push notification from Adobe Journey Optimizer.

```java
MobileCore.setSmallIconResourceId(R.drawable.ic_notification);
```

When no custom small icon is specified, the Messaging extension will automatically utilize the application's launcher icon as the default small icon.

## Notification Actions
Messaging extension will automatically handle any click behaviour that is configured while [designing the push notification in Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/push/design-push.html) or Assurance.
