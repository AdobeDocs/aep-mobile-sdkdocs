---
title: Live Updates
description: Integrate Live Updates in your Android application using the Adobe Journey Optimizer extension.
keywords:
- Adobe Journey Optimizer
- Guide
- Live Updates
- Live Activities
- Android
- Promoted ongoing notifications
- Firebase Cloud Messaging
---

# Live Updates

This document guides you through integrating **Live Updates** in your Android application using the Adobe Journey Optimizer extension. Live Updates are the Android counterpart to iOS [Live Activities](../ios/index.md): a single ongoing notification, shown prominently in the status bar and on the lock screen, that Adobe Journey Optimizer starts, updates in place, and ends through Firebase Cloud Messaging (FCM) push notifications.

<InlineAlert variant="info" slots="text"/>

Live Updates are built on Android 16 (API 36) promoted ongoing notifications. On devices below API 36, the notification is posted as a standard ongoing notification. Live Updates are delivered as the [Live Updates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md), a Mobile Core [plugin](../../../../home/base/mobile-core/plugins/index.md), so apps that do not integrate it are unaffected.

## Prerequisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so your app must already have push notifications working before you add Live Updates.

* Latest version of [Android Studio](https://developer.android.com/studio).
* `compileSdk` 36 or later. The Live Updates library supports `minSdk` 21, but promoted Live Updates are shown only on devices running Android 16 (API 36) or later.
* An app configured for [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client).
* Adobe Journey Optimizer **push notifications set up for your app**: the push token synced with `MobileCore.setPushIdentifier(...)` and the Adobe Journey Optimizer `FirebaseMessagingService` registered. Complete [Automatically display and track push notification](../../push-notification/android/automatic-display-and-tracking.md) first; the same push token sync and service registration deliver Live Updates.
* On Android 13 (API 33) and later, the `POST_NOTIFICATIONS` permission granted by the user. The Live Updates library declares `POST_NOTIFICATIONS` and `POST_PROMOTED_NOTIFICATIONS` in its manifest, so both merge into your app automatically, but your app must still [request `POST_NOTIFICATIONS` at runtime](https://developer.android.com/develop/ui/compose/notifications/notification-permission).

<InlineAlert variant="warning" slots="text"/>

Live Updates are delivered as Adobe Journey Optimizer push notifications. If push notifications are not configured for your app (the push token is not synced with [`setPushIdentifier`](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) and the [Adobe Journey Optimizer `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) is not registered), the device will not receive Live Updates.

## Dependencies

Add the Live Updates library to your app, along with Mobile Core, Edge Network, Identity for Edge Network, and the Adobe Journey Optimizer extension. The Adobe Journey Optimizer extension routes Live Update pushes to the plugin, and the plugin sends its tracking events through Edge Network.

#### Android Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:messaging")
implementation("com.adobe.marketing.mobile:liveupdates")
```

#### Android Groovy

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:liveupdates'
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../../resources/manage-gradle-dependencies.md) for more information.

Live Updates requires minimum versions of Mobile Core and the Adobe Journey Optimizer extension. For the minimum versions, see the [Live Updates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md).

<InlineAlert variant="info" slots="text"/>

The Live Updates plugin requires your app to compile against Android API level 36 or later (`compileSdk` 36).

## Register the plugin

Live Updates are added to your app as a Mobile Core plugin. In the `onCreate` method of your `Application` class, add a `LiveUpdatePlugin` with an [ILiveUpdateStyleProvider](public-classes/live-update-style-provider.md) that your app implements to choose the notification style for each Live Update. Add the plugin before you initialize the SDK, so that it is available when extensions start processing.

#### Android Kotlin

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
MobileCore.initialize(this, "ENVIRONMENT_ID")
```

#### Android Java

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
MobileCore.initialize(this, "ENVIRONMENT_ID");
```

When a Live Update push arrives (identified by the `adb_liveupdate_data` key), the Adobe Journey Optimizer extension passes it to the plugin. The plugin posts the notification and reports lifecycle and interaction events to Adobe Journey Optimizer. If the plugin is not added, the Adobe Journey Optimizer extension drops the push and logs a warning. See [Mobile Core plugins](../../../../home/base/mobile-core/plugins/index.md).

## Using your own FirebaseMessagingService

If your app has its own `FirebaseMessagingService`, forward each message to `MessagingService.handleRemoteMessage`, as described in [Using your own FirebaseMessagingService](../../push-notification/android/automatic-display-and-tracking.md#using-your-own-firebasemessagingservice). The same call routes Live Update pushes to the plugin, and returns `true` for any Adobe Journey Optimizer push it handled, including Live Updates.

## Notification channel

Each Live Update push names its channel in the `notification_channel_id` key. If no channel with that ID exists on the device, the plugin creates one named "Live Updates" with `IMPORTANCE_HIGH`. If your app creates the channel itself, the plugin leaves its settings unchanged, so create it with `IMPORTANCE_HIGH`: a channel with lower importance prevents promotion.

## Configuring small icon

The plugin uses the icon set with `MobileCore.setSmallIconResourceID(...)`. See [Configuring small icon](../../push-notification/android/automatic-display-and-tracking.md#configuring-small-icon).

## Promotion to a Live Update

The plugin always requests promotion and always posts the notification. Android promotes it to a Live Update only when all of the following are true:

* The device runs Android 16 (API 36) or later.
* Android considers the notification promotable (`Notification.hasPromotableCharacteristics()`). Among other requirements, the notification needs a title (the push's `title` key) and a style that Android allows for Live Updates, such as `NotificationCompat.ProgressStyle`. See the Android [Live Updates](https://developer.android.com/develop/ui/views/notifications/live-update) documentation for the full requirements.
* The notification channel has `IMPORTANCE_HIGH`.
* The app is allowed to post promoted notifications (`NotificationManager.canPostPromotedNotifications()`). Users can turn this off in system settings.

When a condition is not met, the plugin logs a warning, reports a diagnostic event (see [Live Updates troubleshooting](troubleshooting.md#incompatibility-issues)), and posts a standard ongoing notification instead.

## Broadcast Live Updates

A single push sent to a Firebase Cloud Messaging topic reaches every device subscribed to that topic, for example everyone following the same live sports match. The SDK does not subscribe devices to topics: your app subscribes to the topic named in the Live Update's `topic_name` key, and reports the subscription to Adobe Journey Optimizer. See [Broadcast Live Updates](tutorial.md#broadcast-live-updates) in the tutorial.

## Next steps

* [Live Update payload](payload.md)
* [API reference](api-reference.md)
* [Live Updates implementation tutorial](tutorial.md)
* [Live Updates troubleshooting](troubleshooting.md)
* [Public classes and interfaces](public-classes/live-update-plugin.md)
