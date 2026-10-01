---
title: Live Updates
description: Integrate Live Updates in your Android application using the Adobe Journey Optimizer Messaging extension.
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

This document guides you through integrating **Live Updates** in your Android application using the Adobe Journey Optimizer Messaging extension. Live Updates are the Android counterpart to iOS [Live Activities](../ios/index.md): a single ongoing notification, promoted to a status bar chip, that the server starts, updates in place, and ends through Firebase Cloud Messaging (FCM) push notifications.

<InlineAlert variant="info" slots="text"/>

Live Updates are built on Android 16 (API 36) promoted ongoing notifications. On devices below API 36 the notification is posted as a standard ongoing notification and is not promoted to a chip. The capability is delivered as the [Live Updates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md), a Mobile Core [plugin](../../../../home/base/mobile-core/plugins/index.md), so apps that do not integrate it are unaffected.

## Prerequisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so your app must already have push notifications working before you add Live Updates.

* Latest version of [Android Studio](https://developer.android.com/studio).
* `compileSdk` 36 or later. The `liveupdates` add-on supports `minSdk` 21; the chip itself requires a device running API 36 or later.
* An app configured for [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client).
* Adobe Journey Optimizer **push notifications set up for your app**: the push token synced with `MobileCore.setPushIdentifier(...)` and the Messaging `FirebaseMessagingService` registered. Complete [Automatically display and track push notification](../../push-notification/android/automatic-display-and-tracking.md) first; the same push token sync and service registration deliver Live Updates.
* On Android 13 (API 33) and later, the `POST_NOTIFICATIONS` permission granted by the user. The `liveupdates` add-on declares `POST_NOTIFICATIONS` and `POST_PROMOTED_NOTIFICATIONS` in its manifest, so both merge into your app automatically, but your app must still [request `POST_NOTIFICATIONS` at runtime](https://developer.android.com/develop/ui/compose/notifications/notification-permission).

<InlineAlert variant="warning" slots="text"/>

Live Updates ride on the Adobe Journey Optimizer push channel. If push notifications are not configured for your app (the push token is not synced with [`setPushIdentifier`](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) and the [Messaging `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) is not registered), the device will not receive Live Updates.

## Dependencies

Add the `liveupdates` add-on alongside Mobile Core, Messaging, and Edge Network in your app-level `build.gradle` file. Messaging routes Live Update pushes to the plugin, and the add-on sends its tracking events through Edge Network.

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:<SDK_BOM_VERSION>')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:liveupdates:<LIVEUPDATES_VERSION>'
implementation 'com.google.firebase:firebase-messaging:<latest-version>'
```

Live Updates requires Mobile Core `<MOBILE_CORE_VERSION>` and Messaging `<MESSAGING_VERSION>` or later.

## Register the plugin

Live Updates are registered as a Mobile Core plugin. After you register your extensions, register a `LiveUpdatePlugin` with an app-supplied [`ILiveUpdateStyleProvider`](api-reference.md#iliveupdatestyleprovider) that maps an incoming payload to a notification style:

```kotlin
MobileCore.registerExtensions(
    listOf(Messaging.EXTENSION, Identity.EXTENSION, Edge.EXTENSION)
) {
    MobileCore.configureWithAppID("<YOUR_ENVIRONMENT_FILE_ID>")
}

// Register the Live Updates plugin. The Messaging extension routes incoming Live Update
// pushes to it automatically.
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

When an FCM push carrying the Live Update envelope (`adb_liveupdate_data`) arrives, the Messaging extension resolves the registered plugin and hands the message to it. The plugin renders the notification and reports lifecycle and interaction events to Adobe Journey Optimizer. If no plugin is registered, the Messaging extension drops the push with a warning. See [Mobile Core plugins](../../../../home/base/mobile-core/plugins/index.md).

## Using your own FirebaseMessagingService

If your app has its own `FirebaseMessagingService`, forward each message to `MessagingService.handleRemoteMessage`, as described in [Using your own FirebaseMessagingService](../../push-notification/android/automatic-display-and-tracking.md#using-your-own-firebasemessagingservice). The same call routes Live Update pushes to the plugin, and returns `true` for any Adobe Journey Optimizer push it handled, including Live Updates.

## Notification channel

Each Live Update push names its channel in the `notification_channel_id` key. If no channel with that ID exists on the device, the plugin creates one named "Live Updates" with `IMPORTANCE_HIGH`. If your app creates the channel itself, the plugin leaves its settings unchanged, so create it with `IMPORTANCE_HIGH`: a channel with lower importance prevents promotion to a chip.

## Configuring small icon

The plugin uses the icon set with `MobileCore.setSmallIconResourceID(...)`. See [Configuring small icon](../../push-notification/android/automatic-display-and-tracking.md#configuring-small-icon).

## Promotion to a Live Update chip

The plugin always requests promotion and always posts the notification. Android promotes it to a chip only when all of the following are true:

* The device runs Android 16 (API 36) or later.
* Android considers the notification promotable (`Notification.hasPromotableCharacteristics()`). Among other requirements, the notification needs a title (the push's `title` key) and a style that Android allows for Live Updates, such as `NotificationCompat.ProgressStyle`. See the Android [Live Updates](https://developer.android.com/develop/ui/views/notifications/live-update) documentation for the full requirements.
* The notification channel has `IMPORTANCE_HIGH`.
* The app is allowed to post promoted notifications (`NotificationManager.canPostPromotedNotifications()`). Users can turn this off in system settings.

When a condition is not met, the plugin logs a warning, reports a diagnostic event (see [Live Updates troubleshooting](troubleshooting.md#incompatibility-issues)), and posts a standard ongoing notification instead.

## Next steps

* [Live Update payload](payload.md)
* [API reference](api-reference.md)
* [Live Updates implementation tutorial](tutorial.md)
* [Live Updates troubleshooting](troubleshooting.md)
* [Public classes and interfaces](public-classes/live-update-plugin.md)
