---
title: Live Updates implementation tutorial
description: Step-by-step tutorial for integrating Live Updates in an Android application with the Adobe Journey Optimizer Messaging extension.
keywords:
- Adobe Journey Optimizer
- Tutorial
- Live Updates
- Android
- Callbacks
- Tracking
- Topics
- Interceptor
---

# Live Updates implementation tutorial

This tutorial walks through a complete Live Updates integration: registering the plugin, providing a notification style, reacting to lifecycle and interaction callbacks, understanding automatic tracking, tracking FCM topic subscribe and unsubscribe, suppressing unwanted updates with an interceptor, and troubleshooting.

For the full API surface, see the [API reference](api-reference.md). For the payload keys and sample pushes, see [Live Update payload](payload.md). For setup (dependencies and plugin registration), see the [overview](index.md).

## Pre-requisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so **push notifications must already be configured for your app** before any of the steps below will work. This tutorial does not repeat the push setup; complete it first:

* [Sync the push token](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) with `MobileCore.setPushIdentifier(...)` so Adobe Journey Optimizer can target the device.
* [Register the Messaging `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) (or forward messages from your own service) so incoming pushes reach the SDK.
* On Android 13 (API 33) and later, [request the `POST_NOTIFICATIONS` permission](https://developer.android.com/develop/ui/views/notifications/notification-permission) at runtime.
* Optionally, [configure the small icon](index.md#configuring-small-icon) and [create the notification channel](index.md#notification-channel) yourself. When the channel named in the payload's `notification_channel_id` does not exist, the plugin creates it with `IMPORTANCE_HIGH`.

With push working, register the Live Updates plugin as shown in the [overview](index.md), then follow the steps below.

## 1. Provide a notification style

The plugin renders the chip, but your app decides how it looks. Implement [`ILiveUpdateStyleProvider`](api-reference.md#iliveupdatestyleprovider), reading `payload.contentState` to build a `NotificationCompat.Style`. The keys inside `content_state` are yours to define; the ones below match the [sample payloads](payload.md#example). If you return `null`, the plugin still posts the notification, without a style.

```kotlin
class MyLiveUpdateStyleProvider(
    private val context: Context
) : ILiveUpdateStyleProvider {
    override fun provideStyle(payload: LiveUpdatePayload): NotificationCompat.Style? {
        val templateType = payload.contentState?.optString("custom_key_template_type")
        return when (templateType) {
            "progress" -> {
                val progress = payload.contentState?.optInt("custom_key_progress", 0) ?: 0
                NotificationCompat.ProgressStyle().setProgress(progress)
            }
            else -> null // unknown template: posted without a style
        }
    }
}
```

Register the plugin with your style provider once, in `Application.onCreate`:

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider(applicationContext)))
```

## 2. React to lifecycle callbacks (start, update, end)

Register an [`ILiveUpdateListener`](api-reference.md#iliveupdatelistener) to be notified as a Live Update is received and progresses through its lifecycle. Register it in `Application.onCreate` so it survives process death.

```kotlin
LiveUpdates.setLiveUpdateListener(object : ILiveUpdateListener {
    override fun onLiveUpdateReceived(payload: LiveUpdatePayload) {
        // Fires once for every received Live Update, before the specific lifecycle callback.
    }

    override fun onStart(payload: LiveUpdatePayload) {
        // event_type == "start": the activity has begun.
    }

    override fun onUpdate(payload: LiveUpdatePayload) {
        // event_type == "update": the activity advanced.
    }

    override fun onEnd(payload: LiveUpdatePayload) {
        // event_type == "end": the activity is finishing.
    }
})
```

## 3. React to interaction callbacks (click, dismiss)

The same listener receives the user's interactions with the chip.

```kotlin
override fun onClick(payload: LiveUpdatePayload) {
    // The user tapped the chip body. The SDK fires the tap tracking event and
    // hands the tap here; opening a screen is your app's responsibility.
    val intent = Intent(applicationContext, MainActivity::class.java)
        .apply { flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP }
    startActivity(intent)
}

override fun onDismissed(payload: LiveUpdatePayload) {
    // The user swiped the chip away. Use payload.notificationId as the reliable key.
}
```

<InlineAlert variant="info" slots="text"/>

`onClick` and `onDismissed` can arrive after the app process was killed and cold-started just to deliver the interaction. Register the listener in `Application.onCreate` (not from an `Activity`) so it is present when these fire. The re-hydrated `payload` reflects the most recently posted version of the chip, so treat `payload.notificationId` as the stable key. A notification posted by an `end` push does not call `onDismissed` when it is dismissed.

## Automatic tracking

Once the plugin is registered, the SDK automatically dispatches Experience Events to Adobe Journey Optimizer for the Live Update lifecycle and the user's interactions. No additional API call is required.

| **Interaction** | **XDM `eventType`** | **Details** |
| :-------------- | :------------------ | :---------- |
| A `start`, `update`, or `end` push is posted | `liveUpdateTracking.received` | `liveActivity.event` is `liveupdate_start`, `liveupdate_update`, or `liveupdate_end`. |
| The user taps the chip | `liveUpdateTracking.applicationOpened` | |
| The user dismisses the chip | `liveUpdateTracking.customAction` | `pushNotificationTracking.customAction.actionID` is `Dismiss`. |
| Your app calls a [topic tracking API](#track-topic-subscribe-and-unsubscribe) | `liveUpdateTracking.topic` | `liveActivity.event` is `topic_subscribed` or `topic_unsubscribed`. |

`liveActivity.event` is the `_experience.customerJourneyManagement.pushChannelContext.liveActivity.event` field.

The events are dispatched through Mobile Core and the Edge Network. When the `messaging.eventDataset` configuration is set (the dataset the Messaging extension uses for push tracking events), they are sent to that dataset. Each event carries the push's `_xdm` tracking data to correlate it with the originating campaign or journey; when a push has no `_xdm`, no tracking event is sent for it.

## Track topic subscribe and unsubscribe

The Live Updates SDK does not subscribe the device to Firebase Cloud Messaging topics; your app owns that. The SDK exposes the matching tracking dispatch so subscribe and unsubscribe counts land in reporting. A common pattern is to subscribe to the Live Update's `topic_name` in `onStart` and unsubscribe in `onEnd`. Perform the Firebase call, then, on success, dispatch the tracking event with the Live Update's payload:

```kotlin
override fun onStart(payload: LiveUpdatePayload) {
    val topic = payload.topicName ?: return
    FirebaseMessaging.getInstance().subscribeToTopic(topic)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                // The payload supplies the topic and correlates the event to the originating campaign.
                LiveUpdates.trackTopicSubscribed(payload)
            }
        }
}
```

Unsubscribe mirrors it:

```kotlin
override fun onEnd(payload: LiveUpdatePayload) {
    val topic = payload.topicName ?: return
    FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                LiveUpdates.trackTopicUnsubscribed(payload)
            }
        }
}
```

The subscribe and unsubscribe events are dispatched to Adobe Journey Optimizer so the counts appear in reporting alongside the Live Update lifecycle events. No event is sent when the payload has no `topic_name` or no `_xdm`.

## Suppress updates with an interceptor

A Live Update the user already dismissed can arrive again (a later `update` or `end` push for the same activity). Register an [`ILiveUpdateInterceptor`](api-reference.md#iliveupdateinterceptor) to veto such pushes before the SDK renders, tracks, or dispatches them. The interceptor is consulted after parsing and before any other processing; returning `false` drops the Live Update entirely.

```kotlin
LiveUpdates.setLiveUpdateInterceptor(object : ILiveUpdateInterceptor {
    override fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean {
        // Keep a record of dismissed ids (persist it so it survives process death),
        // then veto any push for an id the user already dismissed.
        return !dismissedStore.isDismissed(payload.notificationId)
    }
})
```

<InlineAlert variant="info" slots="text"/>

`shouldDisplayLiveUpdate` runs on the FCM background thread. Keep the decision fast and free of side effects. When no interceptor is registered, or the interceptor throws an exception, the Live Update proceeds.

## Trigger a Live Update locally

To raise a Live Update from local app state instead of a server push, build a payload and call `triggerLocalLiveUpdate`. It runs the same path as a received push: interceptor, validation, style provider, posting, and listener callbacks (`onStart` for a local start).

```kotlin
val payload = LiveUpdatePayload.create(
    notificationId = "order_1234",
    channelId = "live_updates_channel",
    eventType = LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    title = "Order on the way",
    timestamp = System.currentTimeMillis() / 1000,
    contentState = JSONObject().put("custom_key_template_type", "progress")
)
LiveUpdates.triggerLocalLiveUpdate(context, payload)
```

A local start has no `_xdm`, so no tracking event is sent when it is posted. When a later `update` or `end` push from Adobe Journey Optimizer arrives for the same `notification_id` and `notification_channel_id`, the SDK reports the local start retroactively, with its original time. That push must carry a newer `timestamp` than the local start, or it is dropped.

## Manual mode

Everything above uses the **SDK-rendered** path: the plugin parses the push, consults your interceptor and style provider, and builds, posts, and tracks the chip for you. In **manual mode** your app builds and posts the Live Update notification itself. The plugin flow does **not** run, so the interceptor, the `event_type` and `timestamp` validation, and the style provider are skipped. Use manual mode only when you need full control over how the notification is built.

Manual mode for Live Updates is the Live Update counterpart of [Manual display and tracking of push notification](../../push-notification/android/manual-display-and-tracking.md). The push prerequisites (token sync, service registration) are the same; that document covers them.

A Live Update push carries the envelope under the `adb_liveupdate_data` key. In your own `FirebaseMessagingService`, detect it with `LiveUpdatePayload.isLiveUpdate`, then parse it with `LiveUpdatePayload.parse`, which returns `null` when the envelope is malformed or a required field is missing.

```kotlin
class YourFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        if (!LiveUpdatePayload.isLiveUpdate(remoteMessage)) {
            // Not a Live Update: handle it as a standard push (see Manual display and tracking).
            return
        }
        val payload = LiveUpdatePayload.parse(remoteMessage) ?: return

        // 1. Build the notification yourself from the payload fields.
        val tapIntent = Intent(this, MainActivity::class.java)
        // Attach Live Update tracking extras so interactions can be tracked from your Activity.
        LiveUpdates.addPushTrackingDetails(tapIntent, remoteMessage)
        val pendingIntent = PendingIntent.getActivity(
            this, 0, tapIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(this, payload.channelId)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(payload.title)
            .setContentText(payload.body)
            .setOngoing(true)
            .setRequestPromotedOngoing(true) // request promotion to a Live Update chip
            .setContentIntent(pendingIntent)
            .build()

        NotificationManagerCompat.from(this)
            .notify(payload.notificationId.hashCode(), notification)

        // 2. Fire the lifecycle tracking event and invoke your ILiveUpdateListener.
        LiveUpdates.trackLiveUpdateEvent(this, remoteMessage)
    }
}
```

Then track interactions from the target `Activity`, exactly as the SDK-rendered path does internally:

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // A chip-body tap.
        LiveUpdates.handleNotificationResponse(intent, applicationOpened = true)
    }
}
```

For a dismissal, wire your own delete intent (`setDeleteIntent`) and call `handleNotificationResponse(intent, applicationOpened = false, customActionId = LiveUpdates.ACTION_ID_DISMISS)`. See the [Manual mode APIs](api-reference.md#manual-mode-apis) for the full signatures.

## Troubleshooting

The SDK reports each dropped Live Update, and each notification that cannot be promoted to a chip, as a diagnostic event on the Mobile Core event hub. These events are not sent to Adobe Journey Optimizer. Inspect them with [Adobe Experience Platform Assurance](../../../../home/base/assurance/index.md), together with the verbose logs (`MobileCore.setLogLevel(LoggingMode.VERBOSE)`).

### Live Update not displayed as expected

The event is named `Live Update Render Error` and carries one of these reason codes:

| **Reason** | **Meaning** |
| :--------- | :---------- |
| `no_plugin` | No Live Updates plugin is registered, so the Messaging extension dropped the push. Register `LiveUpdatePlugin` with `MobileCore.addPlugins(...)`. |
| `app_discarded` | Your [interceptor](#suppress-updates-with-an-interceptor) returned `false`. |
| `invalid_event_type` | `event_type` is not `start`, `update`, or `end`. |
| `invalid_timestamp` | `timestamp` is more than 28 days old. |
| `outdated_timestamp` | `timestamp` is not newer than the last push accepted for the same `notification_id` and `notification_channel_id`. |
| `style_null` | Your style provider returned `null`. The notification is posted without a style. |
| `notification_permission_missing` | Notifications are turned off for the app, for example because `POST_NOTIFICATIONS` was not granted. Android does not display the notification. |

A push whose envelope is not valid JSON, or is missing a required field, is dropped with a warning log and no diagnostic event.

### Live Update displayed but not promoted to a chip

The notification is posted as a standard ongoing notification. The event is named `Live Update Incompatible` and carries one of these reason codes (see [Promotion to a Live Update chip](index.md#promotion-to-a-live-update-chip)):

| **Reason** | **Meaning** |
| :--------- | :---------- |
| `device_api_below_36` | The device runs an Android version below 16 (API 36). |
| `not_promotable` | `Notification.hasPromotableCharacteristics()` is `false`, for example because the notification has no title or its style is not allowed for Live Updates. |
| `channel_not_registered` | The notification channel does not exist. |
| `channel_importance_low` | The notification channel's importance is below `IMPORTANCE_HIGH`. |
| `promotion_not_permitted` | The app is not allowed to post promoted notifications; the user may have turned this off in system settings. |
| `notification_manager_unavailable` | The system `NotificationManager` was not available. |
