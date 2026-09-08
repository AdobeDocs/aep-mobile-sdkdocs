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

This document guides you through integrating **Live Updates** in your Android application using the Adobe Journey Optimizer Messaging extension. Live Updates are the Android counterpart to iOS [Live Activities](../ios/index.md): a single, ongoing notification (a promoted "live" status-bar chip) that the server starts, updates in place, and ends through Firebase Cloud Messaging (FCM) push notifications.

<InlineAlert variant="info" slots="text"/>

Live Updates are built on Android 16 (API 36) promoted ongoing notifications. On devices below API 36 the notification is posted as a standard ongoing notification (it is not promoted to a live chip). The capability is delivered as a Mobile Core [plugin](../../../../home/base/mobile-core/plugins/index.md), so apps that do not integrate it are unaffected.

## Prerequisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so your app must already have push notifications working before you add Live Updates.

* Latest version of [Android Studio](https://developer.android.com/studio).
* Android API 36 (or newer) to render the promoted live chip; API 21+ to build.
* An app configured for [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client).
* Adobe Journey Optimizer **push notifications set up for your app** - specifically, the push token synced with `MobileCore.setPushIdentifier(...)` and the Messaging `FirebaseMessagingService` registered. Complete [Automatically display and track push notification](../../push-notification/android/automatic-display-and-tracking.md) first; the same push token sync and service registration deliver Live Updates.

<InlineAlert variant="warning" slots="text"/>

Live Updates ride on the Adobe Journey Optimizer push channel. If push notifications are not configured for your app - the push token is not synced with [`setPushIdentifier`](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) and the [Messaging `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) is not registered - the device will not receive Live Updates.

## Dependencies

Add the `AEPLiveUpdates` add-on alongside Mobile Core, Messaging, and Edge in your app-level `build.gradle` file:

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:<SDK_BOM_VERSION>')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:liveupdates'
implementation 'com.google.firebase:firebase-messaging:<latest-version>'
```

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

When an FCM push carrying the Live Update envelope (`adb_liveupdate_data`) arrives, the Messaging extension resolves the registered plugin and hands the message to it; the plugin renders the chip and reports lifecycle and interaction events to Adobe Journey Optimizer. If no plugin is registered, the push is dropped with a warning - see [Mobile Core plugins](../../../../home/base/mobile-core/plugins/index.md).

## Next steps

* [API reference](api-reference.md)
* [Live Updates implementation tutorial](tutorial.md)
