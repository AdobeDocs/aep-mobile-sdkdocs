---
title: Live Updates plugin
description: How the Live Updates plugin works with Mobile Core and the Messaging extension to render, post, and track Android Live Update notifications.
keywords:
- Mobile Core
- Plugin
- Built-in plugins
- Live Updates
- LiveUpdatePlugin
- ILiveupdatePlugin
- Android
---

# Live Updates plugin

The Live Updates plugin (`LiveUpdatePlugin`, in the `liveupdates` add-on) is a [Mobile Core plugin](../index.md) that renders an ongoing Live Update notification from an Adobe Journey Optimizer push, posts it, and reports its lifecycle and interaction events. For the plugin mechanism itself (contracts, registration, and resolution), see [Mobile Core plugins](../index.md).

For the app-facing integration, see [Live Updates (Android)](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md). For the payload keys and sample pushes, see [Live Update payload](../../../../../edge/adobe-journey-optimizer/live-activities/android/payload.md).

## Contract

`LiveUpdatePlugin` implements `ILiveupdatePlugin`:

```kotlin
interface ILiveupdatePlugin : IAepPlugin {
    fun handleLiveUpdatePush(context: Context, message: Any)
}
```

`message` is the Firebase `RemoteMessage`. Mobile Core passes it through as `Any` so that Mobile Core does not depend on Firebase; the plugin casts it back.

The plugin **builds, posts, and tracks the notification itself**. It sends its tracking events through Mobile Core to the Edge Network, so the `liveupdates` add-on depends on Mobile Core and Edge Network only, with no dependency on the Adobe Journey Optimizer Messaging extension. The Messaging extension is the host: it detects a Live Update push and hands it to the plugin. The app supplies an [`ILiveUpdateStyleProvider`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatestyleprovider) when it registers the plugin.

## How a Live Update is processed

When a push carries the `adb_liveupdate_data` key, the Messaging extension resolves the plugin with `MobileCore.getPlugin(ILiveupdatePlugin::class.java)` and calls `handleLiveUpdatePush`:

```
Push (adb_liveupdate_data)
        │
        ▼
   Messaging resolves ILiveupdatePlugin
        │
        ├── no plugin registered ──▶ log a warning, drop the push
        │
        ▼
   Parse the payload ──▶ required field missing ──▶ drop
        │
        ▼
   Interceptor (app, optional) ──▶ shouldDisplayLiveUpdate() == false ──▶ drop
        │
        ▼
   Validate event_type and timestamp ──▶ unknown, expired, or out of order ──▶ drop
        │
        ▼
   Style provider (app, mandatory) ──▶ provideStyle() == null ──▶ continue without a style
        │
        ▼
   Plugin builds and posts the ongoing notification
        │
        ▼
   Plugin dispatches tracking and invokes the listener
```

1. **Detect.** Messaging's `handleRemoteMessage` checks that the push came from Adobe Journey Optimizer and carries the `adb_liveupdate_data` key. A Live Update push never takes the standard push path.
2. **Resolve.** Messaging calls `MobileCore.getPlugin(ILiveupdatePlugin::class.java)`. If no plugin is registered, Messaging logs a warning and drops the push, because it cannot render the Live Update content itself. There is no fallback to a basic notification.
3. **Parse.** The plugin parses the envelope into a [`LiveUpdatePayload`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#liveupdatepayload). If a required field is missing (`notification_id`, `notification_channel_id`, `event_type`, `timestamp`), the push is dropped.
4. **Interceptor (optional, app decision).** The plugin consults the registered [`ILiveUpdateInterceptor`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdateinterceptor). Returning `false` drops the Live Update: no notification, no tracking, no listener callback. When no interceptor is registered, the plugin proceeds.
5. **Validate.** The plugin drops the push when `event_type` is not `start`, `update`, or `end`; when `timestamp` is more than 28 days old; or when `timestamp` is not newer than the last push it accepted for the same `notification_id` and `notification_channel_id` (an out of order or duplicate push).
6. **Style provider (mandatory).** The plugin calls the app-supplied [`ILiveUpdateStyleProvider.provideStyle(payload)`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatestyleprovider) to get the `NotificationCompat.Style`. When it returns `null`, the plugin still posts the notification, without a style.
7. **Build and post.** The plugin builds the ongoing notification from the envelope fields only and requests promotion to a Live Update chip. It creates the notification channel if it does not exist, attaches tap and dismiss tracking, and applies `dismiss_after` on an `end` push. If the notification cannot be promoted (for example, the device runs an Android version below API 36), the plugin posts it as a standard ongoing notification. See [Promotion to a Live Update chip](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md#promotion-to-a-live-update-chip).
8. **Track and notify.** The plugin dispatches the lifecycle tracking event to Adobe Journey Optimizer and invokes the registered [`ILiveUpdateListener`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatelistener).

The app owns only two of these steps: the **optional** interceptor and the **mandatory** style provider. The plugin handles everything else. Each dropped push, and each notification that cannot be promoted, is also reported as a diagnostic event. See [Live Updates troubleshooting](../../../../../edge/adobe-journey-optimizer/live-activities/android/troubleshooting.md).

## Prerequisites

Complete the [automatic display and tracking](../../../../../edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking.md) setup first: sync the push token and register the Messaging `FirebaseMessagingService` (or forward to `MessagingService.handleRemoteMessage` from your own service). The `liveupdates` add-on is built against Android API 36, so your app must compile with `compileSdk` 36 or later.

<InlineAlert variant="warning" slots="text"/>

A Live Update is not rendered by [manual display and tracking](../../../../../edge/adobe-journey-optimizer/push-notification/android/manual-display-and-tracking.md) of a standard push. Building the notification yourself from `MessagingPushPayload` skips the plugin. To build a Live Update notification yourself, use [manual mode](../../../../../edge/adobe-journey-optimizer/live-activities/android/tutorial.md#manual-mode) instead.

## Add the plugin

Add the `liveupdates` dependency (see [Dependencies](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md#dependencies) for the full set) and register `LiveUpdatePlugin` once, in your `Application.onCreate`, after `MobileCore.registerExtensions(...)`:

```groovy
implementation 'com.adobe.marketing.mobile:liveupdates:<LIVEUPDATES_VERSION>'
```

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
```

<InlineAlert variant="info" slots="text"/>

If your app does not register the plugin, the Messaging extension drops every Live Update push with a warning log. Standard pushes are not affected.

## SDK-rendered and manual mode

The flow above is the **SDK-rendered** path. It runs when the Messaging `FirebaseMessagingService`, or your own service forwarding to `MessagingService.handleRemoteMessage`, hands the push to the plugin.

If your app builds and posts the Live Update notification itself (**manual mode**), the plugin flow does **not** run: the interceptor, the validation, and the style provider are skipped, and the SDK does not render anything. In manual mode you parse the payload with `LiveUpdatePayload.parse(message)`, build and post the notification yourself, and call the Live Updates tracking APIs directly. See [Manual mode](../../../../../edge/adobe-journey-optimizer/live-activities/android/tutorial.md#manual-mode) in the Live Updates tutorial.
