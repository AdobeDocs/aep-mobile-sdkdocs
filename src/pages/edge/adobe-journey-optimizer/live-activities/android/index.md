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

Live Updates are built on Android's [Live Updates](https://developer.android.com/develop/ui/views/notifications/live-update) (promoted ongoing notifications). When Android does not promote the notification, it is posted as a standard ongoing notification. Live Updates are delivered as the [Live Updates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md), a Mobile Core [plugin](../../../../home/base/mobile-core/plugins/index.md), so apps that do not integrate it are unaffected.

## Prerequisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so your app must already have push notifications working before you add Live Updates.

* Your app compiled against Android API level 36.1 or later. For the device requirements, see the Android [Live Updates](https://developer.android.com/develop/ui/views/notifications/live-update) documentation.
* An app configured for [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client).
* Adobe Journey Optimizer **push notifications set up for your app**: the push token synced with `MobileCore.setPushIdentifier(...)` and the Adobe Journey Optimizer `FirebaseMessagingService` registered. Complete [Automatically display and track push notification](../../push-notification/android/automatic-display-and-tracking.md) first; the same push token sync and service registration deliver Live Updates.
* Notification permission granted by the user. The Live Updates library declares the required permissions in its manifest, but your app must request the notification permission at runtime. See [Notification runtime permission](https://developer.android.com/develop/ui/compose/notifications/notification-permission) in the Android documentation.

<InlineAlert variant="warning" slots="text"/>

Live Updates are delivered as Adobe Journey Optimizer push notifications. If push notifications are not configured for your app (the push token is not synced with [`setPushIdentifier`](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) and the [Adobe Journey Optimizer `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) is not registered), the device will not receive Live Updates.

## Dependencies

Add the Live Updates library to your app, along with Mobile Core, Edge Network, Identity for Edge Network, and the Adobe Journey Optimizer extension. The Adobe Journey Optimizer extension routes Live Update pushes to the plugin, and the plugin sends its tracking events through Edge Network.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Groovy" />

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:<bom-version>"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:messaging")
implementation("com.adobe.marketing.mobile:liveupdates")
```

#### Groovy

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:<bom-version>')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:liveupdates'
```

Replace `<bom-version>` with the latest BOM version, listed on [Current SDK versions](../../../../home/current-sdk-versions.md#android-bom).

Live Updates requires the following minimum SDK versions. BOM 3.24.0 or later includes all of them.

| SDK | Minimum version |
| --- | --- |
| BOM (`sdk-bom`) | 3.24.0 |
| Live Updates (`liveupdates`) | 3.0.0 |
| Adobe Journey Optimizer (`messaging`) | 3.13.0 |
| Mobile Core (`core`) | 3.10.0 |

## Register the plugin

Live Updates are added to your app as a Mobile Core plugin. In the `onCreate` method of your `Application` class, add a `LiveUpdatePlugin` with an [ILiveUpdateStyleProvider](public-classes/live-update-style-provider.md) that your app implements to choose the notification style for each Live Update. Add the plugin before you initialize the SDK, so that it is available when extensions start processing.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
MobileCore.initialize(this, "ENVIRONMENT_ID")
```

#### Java

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
MobileCore.initialize(this, "ENVIRONMENT_ID");
```

When a Live Update push arrives (identified by the `adb_liveupdate_data` key), the Adobe Journey Optimizer extension passes it to the plugin. The plugin posts the notification and reports lifecycle and interaction events to Adobe Journey Optimizer. If the plugin is not added, the Adobe Journey Optimizer extension drops the push and logs a warning. See [Mobile Core plugins](../../../../home/base/mobile-core/plugins/index.md).

## Using your own FirebaseMessagingService

If your app has its own `FirebaseMessagingService`, forward each message to `MessagingService.handleRemoteMessage`, as described in [Using your own FirebaseMessagingService](../../push-notification/android/automatic-display-and-tracking.md#using-your-own-firebasemessagingservice). The same call routes Live Update pushes to the plugin, and returns `true` for any Adobe Journey Optimizer push it handled, including Live Updates.

## Notification channel

Each Live Update push names its channel in the `notification_channel_id` key. If no channel with that ID exists on the device, the plugin creates one named "Live Updates" with `IMPORTANCE_HIGH`. If your app creates the channel itself, the plugin leaves its settings unchanged, so create it with `IMPORTANCE_HIGH`, otherwise Android does not promote the notification. See [Create and manage notification channels](https://developer.android.com/develop/ui/compose/notifications/channels) in the Android documentation.

## Promotion to a Live Update

The plugin requests promotion for every Live Update and always posts the notification. Android decides whether to promote it, based on the device, the notification, the channel, and the user's settings. For the requirements, see [Live Updates](https://developer.android.com/develop/ui/views/notifications/live-update) in the Android documentation.

When Android cannot promote the notification, the plugin logs a warning, reports a diagnostic event (see [Live Updates troubleshooting](troubleshooting.md#incompatibility-issues)), and posts a standard ongoing notification instead.

## Broadcast Live Updates

A single push sent to a Firebase Cloud Messaging topic reaches every device subscribed to that topic, for example everyone following the same live sports match. The SDK does not subscribe devices to topics: your app subscribes to the topic named in the Live Update's `topic_name` key, and reports the subscription to Adobe Journey Optimizer. See [Broadcast Live Updates](tutorial.md#broadcast-live-updates) in the tutorial.

## Next steps

* [Live Update payload](payload.md)
* [API reference](api-reference.md)
* [Live Updates implementation tutorial](tutorial.md)
* [Live Updates troubleshooting](troubleshooting.md)
* [Public classes and interfaces](public-classes/live-update-plugin.md)
