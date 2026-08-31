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

App-supplied policy that turns a parsed payload into a notification style. Returning `null` tells the SDK to drop the push (for example, an unknown template type).

```kotlin
fun interface ILiveUpdateStyleProvider {
    fun provideStyle(payload: LiveUpdatePayload): NotificationCompat.Style?
}
```

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

**Invocation order for a received push:** `onLiveUpdateReceived` fires first, then exactly one of `onStart` / `onUpdate` / `onEnd` based on `event_type`. `onClick` and `onDismissed` fire later, on the corresponding user interaction. The SDK does not open a screen on `onClick`; the app decides what to open.

## setLiveUpdateInterceptor / getLiveUpdateInterceptor

Registers an [`ILiveUpdateInterceptor`](#iliveupdateinterceptor) that the SDK consults, after parsing and before any rendering / tracking / listener dispatch, to decide whether to proceed with an incoming Live Update. Only one interceptor is active at a time; pass `null` to clear.

```kotlin
LiveUpdates.setLiveUpdateInterceptor(myInterceptor)
val current: ILiveUpdateInterceptor? = LiveUpdates.getLiveUpdateInterceptor()
```

### ILiveUpdateInterceptor

```kotlin
fun interface ILiveUpdateInterceptor {
    // Return true to let the SDK proceed; false to drop the Live Update entirely
    // (no chip, no tracking, no listener callback).
    fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean
}
```

When no interceptor is registered, the SDK always proceeds. A common use is to suppress a duplicate or late push for a chip the user already dismissed. See the [tutorial](tutorial.md#suppress-updates-with-an-interceptor).

## Topic tracking

The Live Updates SDK does not subscribe or unsubscribe the device from Firebase Cloud Messaging topics - your app owns that with `FirebaseMessaging.subscribeToTopic(...)` / `unsubscribeFromTopic(...)`. The SDK exposes the matching tracking dispatch so subscribe / unsubscribe counts land in Adobe Journey Optimizer reporting. Call these only after the Firebase call succeeds.

```kotlin
// Standalone (not tied to a specific Live Update).
LiveUpdates.trackTopicSubscribed(topic: String, notificationId: String? = null)
LiveUpdates.trackTopicUnsubscribed(topic: String, notificationId: String? = null)

// Live-Update-triggered: pass the payload so the topic event correlates to the
// originating campaign / journey.
LiveUpdates.trackTopicSubscribed(topic: String, payload: LiveUpdatePayload)
LiveUpdates.trackTopicUnsubscribed(topic: String, payload: LiveUpdatePayload)
```

## Manual mode APIs

Use these when your app builds and posts the Live Update notification itself instead of letting the plugin render it (for example, from your own `FirebaseMessagingService`). In manual mode the plugin flow does not run - the interceptor and style provider are not consulted - so you parse the payload, build the notification, and call the tracking APIs yourself. See [Manual mode](tutorial.md#manual-mode) in the tutorial for the end-to-end flow.

### LiveUpdatePayload.parse

Parses an incoming FCM message into a `LiveUpdatePayload`. Returns `null` when the message is not a Live Update (no `adb_liveupdate_data` key) or a required field is missing.

```kotlin
val payload: LiveUpdatePayload? = LiveUpdatePayload.parse(message: RemoteMessage)
```

### addPushTrackingDetails

Attaches Live Update tracking extras to the `Intent` behind a `PendingIntent` you build for the chip, so a later [`handleNotificationResponse`](#handlenotificationresponse) call can dispatch interaction tracking. Returns `false` if the message is not a Live Update.

```kotlin
val added: Boolean = LiveUpdates.addPushTrackingDetails(intent: Intent?, message: RemoteMessage?)
```

### trackLiveUpdateEvent

Fires the receive lifecycle tracking event and invokes the registered listener, without rendering. Call it after you have built and posted the notification.

```kotlin
LiveUpdates.trackLiveUpdateEvent(context: Context, message: RemoteMessage)
```

### handleNotificationResponse

Dispatches interaction tracking (tap, action-button click, or dismissal) from your target `Activity`. Reads the extras placed on the `Intent` by [`addPushTrackingDetails`](#addpushtrackingdetails). Pass `LiveUpdates.ACTION_ID_DISMISS` as `customActionId` for a dismissal. Returns `false` when the intent carries no Live Update extras.

```kotlin
val tracked: Boolean = LiveUpdates.handleNotificationResponse(
    intent: Intent?,
    applicationOpened: Boolean,   // true for a chip-body tap; false for an action button or dismiss
    customActionId: String? = null
)
```

## triggerLocalLiveUpdate

Raises a Live Update from local app state (no server push), running the same render and tracking path. Returns `true` when the canonical plugin is registered and rendering ran.

```kotlin
val payload = LiveUpdatePayload.create(
    notificationId = "order_1234",
    channelId = "live_updates_channel",
    eventType = LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    title = "Order on the way"
)
val handled: Boolean = LiveUpdates.triggerLocalLiveUpdate(context, payload)
```

## extensionVersion

```kotlin
val version: String = LiveUpdates.extensionVersion()
```

## LiveUpdatePayload

The parsed Live Update envelope (`adb_liveupdate_data`). Construct one with `LiveUpdatePayload.create(...)` for a local trigger; the SDK parses it for you on the push path.

| Property | Envelope key | Required | Description |
| --- | --- | --- | --- |
| `notificationId` | `notification_id` | yes | Stable id for this Live Update; the same id updates the chip in place. |
| `channelId` | `notification_channel_id` | yes | Android notification channel id. |
| `eventType` | `event_type` | yes | `start`, `update`, or `end`. |
| `title` | `title` | yes | Chip title. |
| `priority` | `priority` | no | Notification priority hint used when building the chip. |
| `body` | `body` | no | Chip body text. |
| `criticalText` | `critical_text` | no | Short critical text shown on the chip. |
| `whenMillis` | `when` | no | Timestamp (ms) for the notification. |
| `dismissAfterSeconds` | `dismiss_after` | no | On the `end` push, auto-dismiss the chip after this many seconds. |
| `contentState` | `content_state` | no | App-defined state the `ILiveUpdateStyleProvider` reads to build the style. |
| `topicName` | `topic_name` | no | FCM topic associated with this Live Update. |
| `smallIcon` | `small_icon` | no | Drawable resource name for the small icon. |

Canonical `event_type` values are available as constants: `EVENT_TYPE_START`, `EVENT_TYPE_UPDATE`, `EVENT_TYPE_END`, and `EVENT_TYPE_LOCAL_START` (for [`triggerLocalLiveUpdate`](#triggerlocalliveupdate)).

## Automatic tracking

Once the plugin is registered, the SDK dispatches Live Update tracking events to Adobe Journey Optimizer automatically - no tracking calls are required for the lifecycle or the tap / dismiss interactions. See [Automatic tracking](tutorial.md#automatic-tracking) in the tutorial.
