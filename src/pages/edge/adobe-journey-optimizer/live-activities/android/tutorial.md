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

This tutorial walks through a complete Live Updates integration: registering the plugin, providing a notification style, reacting to lifecycle and interaction callbacks, understanding automatic tracking, tracking FCM topic subscribe / unsubscribe, and suppressing unwanted updates with an interceptor.

For the full API surface, see the [API reference](api-reference.md). For setup (dependencies and plugin registration), see the [overview](index.md).

## Pre-requisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so **push notifications must already be configured for your app** before any of the steps below will work. This tutorial does not repeat the push setup; complete it first:

* [Sync the push token](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) with `MobileCore.setPushIdentifier(...)` so Adobe Journey Optimizer can target the device.
* [Register the Messaging `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) (or forward messages from your own service) so incoming pushes reach the SDK.
* [Create a notification channel](../../push-notification/android/automatic-display-and-tracking.md#notification-channel) whose id you set in the Live Update payload's `notification_channel_id`.
* [Configure the small icon](../../push-notification/android/automatic-display-and-tracking.md#configuring-small-icon) used by the notification.

With push working, register the Live Updates plugin as shown in the [overview](index.md), then follow the steps below.

## 1. Provide a notification style

The plugin renders the chip, but your app decides how it looks. Implement [`ILiveUpdateStyleProvider`](api-reference.md#iliveupdatestyleprovider), reading `payload.contentState` to build a `NotificationCompat.Style`. Return `null` to drop a payload you do not recognize.

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
            else -> null // unknown template -> SDK drops the push
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

`onClick` and `onDismissed` can arrive after the app process was killed and cold-started just to deliver the interaction. Register the listener in `Application.onCreate` (not from an `Activity`) so it is present when these fire. The re-hydrated `payload` reflects the most recently posted version of the chip - treat `payload.notificationId` as the stable key.

## Automatic tracking

Once the plugin is registered, the SDK automatically dispatches Experience Events to Adobe Journey Optimizer for the Live Update lifecycle and the user's interactions - no additional API call is required. It tracks:

* when a `start`, `update`, or `end` push is received and rendered;
* when the user taps the chip;
* when the user dismisses (swipes away) the chip.

These events are dispatched through Mobile Core and the Edge Network to Adobe Journey Optimizer for reporting.

## Track topic subscribe and unsubscribe

The Live Updates SDK does not subscribe the device to Firebase Cloud Messaging topics - your app owns that. The SDK exposes the matching tracking dispatch so subscribe / unsubscribe counts land in reporting. Perform the Firebase call, then, on success, dispatch the tracking event:

```kotlin
val topic = payload.topicName ?: return
FirebaseMessaging.getInstance().subscribeToTopic(topic)
    .addOnCompleteListener { task ->
        if (task.isSuccessful) {
            // Pass the payload so the topic event correlates to the originating campaign.
            LiveUpdates.trackTopicSubscribed(topic, payload)
        }
    }
```

Unsubscribe mirrors it:

```kotlin
FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
    .addOnCompleteListener { task ->
        if (task.isSuccessful) {
            LiveUpdates.trackTopicUnsubscribed(topic, payload)
        }
    }
```

For a standalone subscribe / unsubscribe not tied to a specific Live Update (for example, a topics screen), use the overloads without a payload:

```kotlin
LiveUpdates.trackTopicSubscribed(topic)
LiveUpdates.trackTopicUnsubscribed(topic)
```

The subscribe and unsubscribe events are dispatched to Adobe Journey Optimizer so the counts appear in reporting alongside the Live Update lifecycle events.

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

`shouldDisplayLiveUpdate` runs on the FCM background thread. Keep the decision fast and side-effect-light. When no interceptor is registered, every Live Update proceeds.

## Trigger a Live Update locally

To raise a Live Update from local app state instead of a server push, build a payload and call `triggerLocalLiveUpdate`. It runs the same render and tracking path as a received push.

```kotlin
val payload = LiveUpdatePayload.create(
    notificationId = "order_1234",
    channelId = "live_updates_channel",
    eventType = LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    title = "Order on the way",
    contentState = JSONObject().put("custom_key_template_type", "progress")
)
LiveUpdates.triggerLocalLiveUpdate(context, payload)
```

## Manual mode

Everything above uses the **SDK-rendered** path: the plugin parses the push, consults your interceptor and style provider, and builds, posts, and tracks the chip for you. In **manual mode** your app builds and posts the Live Update notification itself - the plugin flow does **not** run, so the interceptor and style provider are not consulted. Use manual mode only when you need full control over how the notification is built.

Manual mode for Live Updates is the Live Update counterpart of [Manual display and tracking of push notification](../../push-notification/android/manual-display-and-tracking.md). The push prerequisites (token sync, service registration) are the same; that document covers them.

A Live Update push carries the envelope under the `adb_liveupdate_data` key. In your own `FirebaseMessagingService`, detect it by parsing the message: `LiveUpdatePayload.parse` returns `null` for a non-Live-Update push, so you can fall through to your standard push handling.

```kotlin
class YourFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        val payload = LiveUpdatePayload.parse(remoteMessage)
        if (payload == null) {
            // Not a Live Update - handle it as a standard push (see Manual display and tracking).
            return
        }

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
