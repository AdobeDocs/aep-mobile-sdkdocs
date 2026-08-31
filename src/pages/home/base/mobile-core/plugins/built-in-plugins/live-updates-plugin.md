---
title: Live Updates plugin
description: How the Live Updates plugin integrates with Mobile Core and the Adobe Journey Optimizer Messaging extension to render and track Live Update push notifications on Android.
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

The Live Updates plugin (`LiveUpdatePlugin`, in the AEPLiveUpdates add-on) is a [Mobile Core plugin](../index.md) that renders an ongoing "Live Update" notification from an Adobe Journey Optimizer push and reports its lifecycle and interaction events. For the plugin mechanism itself - contracts, registration, and resolution - see [Mobile Core plugins](../index.md).

For the app-facing integration (dependencies, registering the plugin, the style provider, listeners, the interceptor, and tracking APIs), see [Live Updates (Android)](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md).

## Contract

`LiveUpdatePlugin` implements `ILiveupdatePlugin`:

```kotlin
interface ILiveupdatePlugin : IAepPlugin {
    fun handleLiveUpdatePush(context: Context, message: Any)
}
```

The plugin **posts and tracks the notification itself**, so the AEPLiveUpdates add-on depends on the Adobe Journey Optimizer Messaging extension (for tracking) and Edge. The host (Messaging) routes a push to it when the push carries the `adb_liveupdate_data` key. The app supplies an [`ILiveUpdateStyleProvider`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatestyleprovider) when it registers the plugin.

## How a Live Update is processed

When a push carrying `adb_liveupdate_data` arrives, the Messaging extension resolves the plugin with `MobileCore.getPlugin(ILiveupdatePlugin::class.java)` and calls `handleLiveUpdatePush`. The plugin then runs this flow:

```
Push (adb_liveupdate_data)
        │
        ▼
   Parse payload ──▶ (drop if required fields missing)
        │
        ▼
   Interceptor (app, optional) ──▶ shouldDisplayLiveUpdate() == false ──▶ drop
        │
        ▼
   Style provider (app, mandatory) ──▶ provideStyle() == null ──▶ drop
        │
        ▼
   SDK builds and posts the ongoing notification
        │
        ▼
   SDK dispatches tracking + invokes the listener
```

1. **Parse** the envelope into a `LiveUpdatePayload`. If a required field is missing (`notification_id`, `notification_channel_id`, `event_type`, `title`), the push is dropped.
2. **Interceptor (optional, app decision).** The SDK consults the registered [`ILiveUpdateInterceptor.shouldDisplayLiveUpdate(payload)`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdateinterceptor). Returning `false` drops the Live Update - no chip, no tracking, no listener callback. When no interceptor is registered, the SDK proceeds.
3. **Style provider (mandatory).** The SDK calls the app-supplied [`ILiveUpdateStyleProvider.provideStyle(payload)`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatestyleprovider) to obtain the `NotificationCompat.Style`. Returning `null` drops the payload - for example, an unrecognized template type.
4. **Build and post.** The SDK builds the ongoing notification (channel, small icon, tap and dismiss `PendingIntent`s with tracking extras) and posts it.
5. **Track and notify.** The SDK dispatches the lifecycle tracking event to Adobe Journey Optimizer and invokes the registered [`ILiveUpdateListener`](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md#iliveupdatelistener).

The app owns only two of these steps: the **optional** interceptor and the **mandatory** style provider. Everything else is handled by the SDK.

## SDK-rendered vs. manual mode

The flow above is the **SDK-rendered** path. It runs when the Messaging `FirebaseMessagingService` (or your own service forwarding to it) hands the push to the plugin.

If instead your app builds and posts the Live Update notification itself (**manual mode**), the plugin flow does **not** run - the interceptor and style provider are not consulted, and the SDK does not render anything. In manual mode you parse the payload with `LiveUpdatePayload.parse(message)`, build and post the notification yourself, and call the Live Updates tracking APIs directly. See [Manual mode](../../../../../edge/adobe-journey-optimizer/live-activities/android/tutorial.md#manual-mode) in the Live Updates tutorial.
