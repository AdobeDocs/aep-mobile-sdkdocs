---
title: Live Updates API reference
description: API reference for integrating Live Updates in an Android application with the Adobe Journey Optimizer Messaging extension.
keywords:
- Adobe Journey Optimizer
- API reference
- Live Updates
- Android
- LiveUpdatePlugin
- ILiveUpdateListener
- ILiveUpdateInterceptor
- ILiveUpdateStyleProvider
---

# Live Updates API reference

All Live Updates APIs live in the `com.adobe.marketing.mobile.messaging.liveupdate` package, except plugin registration, which is a Mobile Core API. For the plugin mechanism itself, see [Mobile Core plugins](../../../../home/base/mobile-core/plugins/index.md).

## addPlugins (register the plugin)

Registers the Live Updates plugin so the Messaging extension can route incoming Live Update pushes to it. Provide an [`ILiveUpdateStyleProvider`](#iliveupdatestyleprovider) that maps a payload to a notification style.

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

## ILiveUpdateStyleProvider

App-supplied policy that turns a parsed payload into a notification style, for example `NotificationCompat.ProgressStyle`. Read your app-defined keys from `payload.contentState`; the SDK does not interpret them.

```kotlin
fun interface ILiveUpdateStyleProvider {
    fun provideStyle(payload: LiveUpdatePayload): NotificationCompat.Style?
}
```

Returning `null` does not drop the push: the plugin posts the notification without a style and reports a `style_null` diagnostic event (see [Troubleshooting](tutorial.md#troubleshooting)). `provideStyle` runs on the FCM background thread, so do not perform long-running work in it.

## setLiveUpdateListener / getLiveUpdateListener

Registers an [`ILiveUpdateListener`](#iliveupdatelistener) to receive Live Update lifecycle and interaction callbacks. Only one listener is active at a time; pass `null` to clear.

```kotlin
LiveUpdates.setLiveUpdateListener(myListener)
val current: ILiveUpdateListener? = LiveUpdates.getLiveUpdateListener()
```

<InlineAlert variant="info" slots="text"/>

Register the listener in `Application.onCreate`. Some callbacks (`onDismissed`, `onClick`) can arrive after the app process was killed and cold-started just to handle the interaction, so a listener registered only from an `Activity` may miss them.

### ILiveUpdateListener

Every method has a default empty body; implement only the ones you need.

```kotlin
interface ILiveUpdateListener {
    // Fires once per received Live Update push, regardless of event_type.
    fun onLiveUpdateReceived(payload: LiveUpdatePayload) {}

    // Lifecycle callbacks, chosen by the push's event_type.
    fun onStart(payload: LiveUpdatePayload) {}
    fun onUpdate(payload: LiveUpdatePayload) {}
    fun onEnd(payload: LiveUpdatePayload) {}

    // Interaction callbacks.
    fun onClick(payload: LiveUpdatePayload) {}      // user tapped the chip body
    fun onDismissed(payload: LiveUpdatePayload) {}  // user swiped the chip away
}
```

**Invocation order for a received push:** `onLiveUpdateReceived` fires first, then exactly one of `onStart` / `onUpdate` / `onEnd` based on `event_type`. A Live Update raised with [`triggerLocalLiveUpdate`](#triggerlocalliveupdate) calls `onStart`. `onClick` and `onDismissed` fire later, on the corresponding user interaction. The SDK does not open a screen on `onClick`; the app decides what to open.

`onDismissed` fires only for a notification posted by a `start` or `update` push. A notification posted by an `end` push carries no dismiss tracking, so dismissing it does not call `onDismissed`.

The receive callbacks (`onLiveUpdateReceived`, `onStart`, `onUpdate`, `onEnd`) run on the thread that processes the push, typically the FCM background thread, so do not perform long-running work in them. An exception thrown by any callback is caught and logged.

## setLiveUpdateInterceptor / getLiveUpdateInterceptor

Registers an [`ILiveUpdateInterceptor`](#iliveupdateinterceptor) that the SDK consults, after parsing and before any rendering / tracking / listener dispatch, to decide whether to proceed with an incoming Live Update. Only one interceptor is active at a time; pass `null` to clear.

```kotlin
LiveUpdates.setLiveUpdateInterceptor(myInterceptor)
val current: ILiveUpdateInterceptor? = LiveUpdates.getLiveUpdateInterceptor()
```

### ILiveUpdateInterceptor

```kotlin
interface ILiveUpdateInterceptor {
    // Return true to let the SDK proceed; false to drop the Live Update entirely
    // (no chip, no tracking, no listener callback).
    fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean
}
```

When no interceptor is registered, the SDK always proceeds. If the interceptor throws an exception, the SDK logs it and proceeds. The interceptor is consulted for pushes the plugin renders and for [`triggerLocalLiveUpdate`](#triggerlocalliveupdate), not in [manual mode](#manual-mode-apis). A common use is to suppress a duplicate or late push for a chip the user already dismissed. See the [tutorial](tutorial.md#suppress-updates-with-an-interceptor).

## Topic tracking

The Live Updates SDK does not subscribe or unsubscribe the device from Firebase Cloud Messaging topics; your app owns that with `FirebaseMessaging.subscribeToTopic(...)` / `unsubscribeFromTopic(...)`. The SDK exposes the matching tracking dispatch so subscribe and unsubscribe counts land in Adobe Journey Optimizer reporting. Call these only after the Firebase call succeeds.

```kotlin
LiveUpdates.trackTopicSubscribed(payload: LiveUpdatePayload)
LiveUpdates.trackTopicUnsubscribed(payload: LiveUpdatePayload)
```

Pass the Live Update that triggered the subscription, for example from `onStart` or `onEnd`. The topic is read from the payload's `topic_name`, and the payload's `_xdm` correlates the event to the originating campaign or journey. No event is sent when the payload has no `topic_name` or no `_xdm`.

## Manual mode APIs

Use these when your app builds and posts the Live Update notification itself instead of letting the plugin render it (for example, from your own `FirebaseMessagingService`). In manual mode the plugin flow does not run: the interceptor, the `event_type` and `timestamp` validation, and the style provider are skipped. You parse the payload, build the notification, and call the tracking APIs yourself. See [Manual mode](tutorial.md#manual-mode) in the tutorial for the end-to-end flow.

### LiveUpdatePayload.isLiveUpdate

Returns `true` when the FCM message carries the `adb_liveupdate_data` key.

```kotlin
val isLiveUpdate: Boolean = LiveUpdatePayload.isLiveUpdate(message: RemoteMessage)
```

### LiveUpdatePayload.parse

Parses an incoming FCM message into a `LiveUpdatePayload`. Returns `null` when the message is not a Live Update (no `adb_liveupdate_data` key), the envelope is not valid JSON, or a required field is missing.

```kotlin
val payload: LiveUpdatePayload? = LiveUpdatePayload.parse(message: RemoteMessage)
```

### addPushTrackingDetails

Attaches Live Update tracking extras to the `Intent` behind a `PendingIntent` you build for the chip, so a later [`handleNotificationResponse`](#handlenotificationresponse) call can dispatch interaction tracking. Returns `false` if the message is not a Live Update.

```kotlin
val added: Boolean = LiveUpdates.addPushTrackingDetails(intent: Intent?, message: RemoteMessage?)
```

### trackLiveUpdateEvent

Fires the receive lifecycle tracking event and invokes the registered listener, without rendering. Call it after you have built and posted the notification. No tracking event is sent when the push has no `_xdm`; the listener is still invoked.

```kotlin
LiveUpdates.trackLiveUpdateEvent(context: Context, message: RemoteMessage)
```

### handleNotificationResponse

Dispatches interaction tracking (tap, action-button click, or dismissal) from your target `Activity`. Reads the extras placed on the `Intent` by [`addPushTrackingDetails`](#addpushtrackingdetails). Pass `LiveUpdates.ACTION_ID_DISMISS` as `customActionId` for a dismissal. Returns `true` when the intent carries Live Update extras, even if no event is sent because the push had no `_xdm`; returns `false` otherwise.

```kotlin
val tracked: Boolean = LiveUpdates.handleNotificationResponse(
    intent: Intent?,
    applicationOpened: Boolean,   // true for a chip-body tap; false for an action button or dismiss
    customActionId: String? = null
)
```

## triggerLocalLiveUpdate

Raises a Live Update from local app state, with no server push. It runs the same path as a received push (interceptor, validation, style provider, posting, and listener callbacks) through the registered `LiveUpdatePlugin`. Returns `true` when the payload was handed to `LiveUpdatePlugin`, even if the interceptor or validation then drops it; returns `false` when `LiveUpdatePlugin` is not the registered Live Updates plugin.

```kotlin
val payload = LiveUpdatePayload.create(
    notificationId = "order_1234",
    channelId = "live_updates_channel",
    eventType = LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    title = "Order on the way",
    timestamp = System.currentTimeMillis() / 1000
)
val handled: Boolean = LiveUpdates.triggerLocalLiveUpdate(context, payload)
```

A local start has no `_xdm`, so no tracking event is sent when it is posted. When a later `update` or `end` push from Adobe Journey Optimizer arrives for the same `notification_id` and `notification_channel_id`, the SDK reports the local start retroactively, with its original time, using that push's `_xdm`.

Set `timestamp` to the current time in epoch seconds. Later pushes for the same Live Update must carry a newer `timestamp`, or they are dropped.

## extensionVersion

```kotlin
val version: String = LiveUpdates.extensionVersion()
```

## LiveUpdatePayload

The parsed Live Update envelope (`adb_liveupdate_data`). The SDK parses it for you on the push path; construct one with `LiveUpdatePayload.create(...)` for a local trigger. For what each key means and how the plugin uses it, see [Live Update payload](payload.md#properties).

| Property | Type | Envelope key |
| --- | --- | --- |
| `notificationId` | `String` | `notification_id` |
| `channelId` | `String` | `notification_channel_id` |
| `eventType` | `String` | `event_type` |
| `timestamp` | `Long` (epoch seconds) | `timestamp` |
| `title` | `String?` | `title` |
| `body` | `String?` | `body` |
| `criticalText` | `String?` | `critical_text` |
| `whenSeconds` | `Long?` (epoch seconds) | `when` |
| `dismissAfterSeconds` | `Long?` | `dismiss_after` |
| `priority` | `String?` | `priority` |
| `topicName` | `String?` | `topic_name` |
| `contentState` | `JSONObject?` | `content_state` |
| `xdm` | `JSONObject?` | `_xdm` (FCM data key, outside the envelope) |

`LiveUpdatePayload.create(...)` requires `notificationId`, `channelId`, `eventType`, `title` (nullable), and `timestamp`; every other parameter is optional. A `timestamp` passed in epoch milliseconds is converted to seconds.

Canonical `event_type` values are available as constants: `EVENT_TYPE_START`, `EVENT_TYPE_UPDATE`, `EVENT_TYPE_END`, and `EVENT_TYPE_LOCAL_START` (for [`triggerLocalLiveUpdate`](#triggerlocalliveupdate)).

## Automatic tracking

Once the plugin is registered, the SDK dispatches Live Update tracking events to Adobe Journey Optimizer automatically. No tracking calls are required for the lifecycle or for the tap and dismiss interactions. See [Automatic tracking](tutorial.md#automatic-tracking) in the tutorial.
