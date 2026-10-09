---
title: Live Updates implementation tutorial
description: Step-by-step tutorial for integrating Live Updates in an Android application with the Adobe Journey Optimizer extension.
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

This tutorial walks through a complete Live Updates integration: registering the plugin, providing a notification style, reacting to lifecycle and interaction callbacks, understanding automatic tracking, broadcasting Live Updates to an FCM topic, suppressing unwanted updates with an interceptor, triggering a Live Update locally, and manual mode.

For the full API surface, see the [API reference](api-reference.md). For the payload keys and sample pushes, see [Live Update payload](payload.md). For setup (dependencies and plugin registration), see the [overview](index.md). For diagnostic events, see [Live Updates troubleshooting](troubleshooting.md).

## Prerequisites

A Live Update is delivered as an Adobe Journey Optimizer push notification, so **push notifications must already be configured for your app** before any of the steps below will work. This tutorial does not repeat the push setup; complete it first:

* [Sync the push token](../../push-notification/android/automatic-display-and-tracking.md#sync-the-push-token) with `MobileCore.setPushIdentifier(...)` so Adobe Journey Optimizer can target the device.
* [Register the Adobe Journey Optimizer `FirebaseMessagingService`](../../push-notification/android/automatic-display-and-tracking.md#register-messaging-extensions-firebasemessagingservice) (or forward messages from your own service) so incoming pushes reach the SDK.
* Request the notification permission at runtime. See [Notification runtime permission](https://developer.android.com/develop/ui/compose/notifications/notification-permission) in the Android documentation.
* Optionally, [create the notification channel](index.md#notification-channel) yourself. When the channel named in the payload's `notification_channel_id` does not exist, the plugin creates it with `IMPORTANCE_HIGH`.

With push working, register the Live Updates plugin as shown in the [overview](index.md), then follow the steps below.

## 1. Provide a notification style

The plugin posts the notification, but your app decides how it looks. Implement [ILiveUpdateStyleProvider](public-classes/live-update-style-provider.md), reading `payload.contentState` to build a `NotificationCompat.Style`. The keys inside `content_state` are yours to define; the ones below match the [sample payloads](payload.md#example). If you return `null`, the plugin still posts the notification, without a style.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
class MyLiveUpdateStyleProvider : ILiveUpdateStyleProvider {
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

#### Java

```java
public class MyLiveUpdateStyleProvider implements ILiveUpdateStyleProvider {
    @Override
    public NotificationCompat.Style provideStyle(LiveUpdatePayload payload) {
        JSONObject contentState = payload.getContentState();
        if (contentState != null
                && "progress".equals(contentState.optString("custom_key_template_type"))) {
            int progress = contentState.optInt("custom_key_progress", 0);
            return new NotificationCompat.ProgressStyle().setProgress(progress);
        }
        return null; // unknown template: posted without a style
    }
}
```

Add the plugin with your style provider once, in `Application.onCreate`, before you initialize the SDK:

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
```

#### Java

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
```

## 2. React to lifecycle callbacks (start, update, end)

Register an [ILiveUpdateListener](public-classes/live-update-listener.md) to be notified as a Live Update is received and progresses through its lifecycle. Register it in `Application.onCreate` so it is available when the app process is started to handle a push. In Kotlin, override only the callbacks you need. In Java, implement all six methods of the interface, including the interaction callbacks described in the next step.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
LiveUpdates.setLiveUpdateListener(object : ILiveUpdateListener {
    override fun onLiveUpdateReceived(payload: LiveUpdatePayload) {
        // Called once for every received Live Update, before the specific lifecycle callback.
    }

    override fun onStart(payload: LiveUpdatePayload) {
        // event_type == "start": the Live Update has begun.
    }

    override fun onUpdate(payload: LiveUpdatePayload) {
        // event_type == "update": the Live Update has progressed.
    }

    override fun onEnd(payload: LiveUpdatePayload) {
        // event_type == "end": the Live Update is ending.
    }
})
```

#### Java

```java
LiveUpdates.setLiveUpdateListener(new ILiveUpdateListener() {
    @Override
    public void onLiveUpdateReceived(LiveUpdatePayload payload) {
        // Called once for every received Live Update, before the specific lifecycle callback.
    }

    @Override
    public void onStart(LiveUpdatePayload payload) {
        // event_type == "start": the Live Update has begun.
    }

    @Override
    public void onUpdate(LiveUpdatePayload payload) {
        // event_type == "update": the Live Update has progressed.
    }

    @Override
    public void onEnd(LiveUpdatePayload payload) {
        // event_type == "end": the Live Update is ending.
    }

    @Override
    public void onClick(LiveUpdatePayload payload) { }

    @Override
    public void onDismissed(LiveUpdatePayload payload) { }
});
```

## 3. React to interaction callbacks (click, dismiss)

The same listener receives the user's interactions with the Live Update notification.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
override fun onClick(payload: LiveUpdatePayload) {
    // The user tapped the notification. The SDK sends the tap tracking event and
    // calls this method; opening a screen is your app's responsibility.
    val intent = Intent(applicationContext, MainActivity::class.java)
        .apply { flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP }
    startActivity(intent)
}

override fun onDismissed(payload: LiveUpdatePayload) {
    // The user dismissed the notification. Use payload.notificationId as the stable key.
}
```

#### Java

```java
@Override
public void onClick(LiveUpdatePayload payload) {
    // The user tapped the notification. The SDK sends the tap tracking event and
    // calls this method; opening a screen is your app's responsibility.
    Intent intent = new Intent(getApplicationContext(), MainActivity.class);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
    startActivity(intent);
}

@Override
public void onDismissed(LiveUpdatePayload payload) {
    // The user dismissed the notification. Use payload.getNotificationId() as the stable key.
}
```

<InlineAlert variant="info" slots="text"/>

`onClick` and `onDismissed` can be called after the app process was stopped and then started again only to deliver the interaction. Register the listener in `Application.onCreate` (not from an `Activity`) so it is available when these are called. In that case, the `payload` is restored from the most recently posted version of the notification, so treat `payload.notificationId` as the stable key. After a Live Update has ended, `onDismissed` is not called, whether the notification is removed automatically by `dismiss_after` or swiped away by the user.

## Automatic tracking

Once the plugin is registered, the SDK automatically dispatches Experience Events to Adobe Journey Optimizer for the Live Update lifecycle and the user's interactions. No additional API call is required.

| **Interaction** | **XDM `eventType`** | **Details** |
| :-------------- | :------------------ | :---------- |
| A `start`, `update`, or `end` push is posted | `liveUpdateTracking.received` | `liveActivity.event` is `liveupdate_start`, `liveupdate_update`, or `liveupdate_end`. A pending [local start](troubleshooting.md#local-start-is-reported-only-after-a-push) is reported just before it, as `liveupdate_localstart`. |
| The user taps the notification | `liveUpdateTracking.applicationOpened` | |
| The user dismisses the notification | `liveUpdateTracking.customAction` | `pushNotificationTracking.customAction.actionID` is `Dismiss`. |
| Your app calls a [topic tracking API](#broadcast-live-updates) | `liveUpdateTracking.topic` | `liveActivity.event` is `topic_subscribed` or `topic_unsubscribed`. |

`liveActivity.event` is the `_experience.customerJourneyManagement.pushChannelContext.liveActivity.event` field.

The events are dispatched through Mobile Core and the Edge Network. When the `messaging.eventDataset` configuration is set (the dataset the Adobe Journey Optimizer extension uses for push tracking events), they are sent to that dataset. Each event carries the push's `_xdm` tracking data to correlate it with the originating campaign or journey; when a push has no `_xdm`, no tracking event is sent for it.

## Broadcast Live Updates

A Live Update can be shared by many users, for example the score of a live sports match or the status of a flight. Instead of sending a push to each device individually, a Live Update push can be sent once to a [Firebase Cloud Messaging topic](https://firebase.google.com/docs/cloud-messaging/android/topic-messaging), and FCM delivers it to every device subscribed to that topic.

The Live Updates SDK does not subscribe the device to FCM topics; your app does. The flow is:

1. The Live Update includes the topic in its [`topic_name`](payload.md#properties) key.
2. In `onStart`, your app subscribes the device to `payload.topicName` with the Firebase SDK. When the subscription succeeds, it calls [trackTopicSubscribed](api-reference.md#tracktopicsubscribed), so Adobe Journey Optimizer can count subscribed devices.
3. Later pushes sent to the topic reach every subscribed device, and the plugin updates the notification in place, matching it by `notification_id`.
4. In `onEnd`, your app unsubscribes the device from the topic and calls [trackTopicUnsubscribed](api-reference.md#tracktopicunsubscribed). Do the same in `onDismissed`, so a device whose user dismissed the Live Update stops receiving its broadcast updates.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
override fun onStart(payload: LiveUpdatePayload) {
    val topic = payload.topicName ?: return
    FirebaseMessaging.getInstance().subscribeToTopic(topic)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                // The payload supplies the topic and links the event to the originating campaign.
                LiveUpdates.trackTopicSubscribed(payload)
            }
        }
}

override fun onEnd(payload: LiveUpdatePayload) {
    unsubscribeFromTopic(payload)
}

override fun onDismissed(payload: LiveUpdatePayload) {
    // The user dismissed the Live Update: stop receiving its broadcast updates.
    unsubscribeFromTopic(payload)
}

private fun unsubscribeFromTopic(payload: LiveUpdatePayload) {
    val topic = payload.topicName ?: return
    FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                LiveUpdates.trackTopicUnsubscribed(payload)
            }
        }
}
```

#### Java

```java
@Override
public void onStart(LiveUpdatePayload payload) {
    String topic = payload.getTopicName();
    if (topic == null) {
        return;
    }
    FirebaseMessaging.getInstance().subscribeToTopic(topic)
        .addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                // The payload supplies the topic and links the event to the originating campaign.
                LiveUpdates.trackTopicSubscribed(payload);
            }
        });
}

@Override
public void onEnd(LiveUpdatePayload payload) {
    unsubscribeFromTopic(payload);
}

@Override
public void onDismissed(LiveUpdatePayload payload) {
    // The user dismissed the Live Update: stop receiving its broadcast updates.
    unsubscribeFromTopic(payload);
}

private void unsubscribeFromTopic(LiveUpdatePayload payload) {
    String topic = payload.getTopicName();
    if (topic == null) {
        return;
    }
    FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
        .addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                LiveUpdates.trackTopicUnsubscribed(payload);
            }
        });
}
```

The subscribe and unsubscribe events are sent to Adobe Journey Optimizer, so the counts appear in reporting alongside the Live Update lifecycle events. No event is sent when the payload has no `topic_name` or no `_xdm`.

## Suppress updates with an interceptor

The interceptor lets your app decide, from its own state, whether an incoming Live Update should be shown at all. Register an [ILiveUpdateInterceptor](public-classes/live-update-interceptor.md) to reject a Live Update before the SDK renders, tracks, or dispatches it. The interceptor is consulted after parsing and before any other processing; returning `false` drops the Live Update entirely.

Typical reasons to drop a Live Update:

* This device was not supposed to receive it, for example it belongs to a user who is no longer signed in.
* Your app already knows the Live Update is no longer relevant, for example the order was delivered or cancelled.
* The user dismissed the Live Update, and a later `update` or `end` push for the same Live Update arrives.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
LiveUpdates.setLiveUpdateInterceptor(object : ILiveUpdateInterceptor {
    override fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean {
        // Custom logic to discard any Live Update that this device was not supposed to receive,
        // using fields such as payload.notificationId, payload.topicName, or your own keys in
        // payload.contentState.
        // Return false to drop this Live Update, or true to let the SDK proceed.
        return shouldShowLiveUpdate(payload)
    }
})
```

#### Java

```java
LiveUpdates.setLiveUpdateInterceptor(payload -> {
    // Return false to drop this Live Update, or true to let the SDK proceed.
    return shouldShowLiveUpdate(payload);
});
```

`shouldShowLiveUpdate` stands for your app's own check. Keep any state it depends on persisted, because a push can arrive after the app process was killed.

<InlineAlert variant="info" slots="text"/>

`shouldDisplayLiveUpdate` runs on the FCM background thread. Keep the decision fast and free of side effects. When no interceptor is registered, or the interceptor throws an exception, the Live Update proceeds.

## Trigger a Live Update locally

To raise a Live Update from local app state instead of a server push, build a payload and call `triggerLocalLiveUpdate`. It runs the same path as a received push: interceptor, validation, style provider, posting, and listener callbacks (`onStart` for a local start). In Java, `create` takes its arguments in order; pass `null` for optional values you do not set.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

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

#### Java

```java
JSONObject contentState = new JSONObject();
try {
    contentState.put("custom_key_template_type", "progress");
} catch (JSONException e) {
    // handle the error
}

LiveUpdatePayload payload = LiveUpdatePayload.create(
    "order_1234",                              // notificationId
    "live_updates_channel",                    // channelId
    LiveUpdatePayload.EVENT_TYPE_LOCAL_START,  // eventType
    "Order on the way",                        // title
    System.currentTimeMillis() / 1000,         // timestamp
    null,                                      // priority
    null,                                      // body
    null,                                      // criticalText
    null,                                      // whenSeconds
    null,                                      // dismissAfterSeconds
    contentState                               // contentState
);
LiveUpdates.triggerLocalLiveUpdate(context, payload);
```

A local start has no `_xdm`, so no tracking event is sent when it is posted. When a later `start`, `update`, or `end` push from Adobe Journey Optimizer arrives for the same `notification_id` and `notification_channel_id`, the SDK reports the local start retroactively, with its original time. That push must carry a newer `timestamp` than the local start, or it is dropped. See [Local start is reported only after a push](troubleshooting.md#local-start-is-reported-only-after-a-push).

## Use your own FirebaseMessagingService

If your app registers the Adobe Journey Optimizer `FirebaseMessagingService`, Live Updates are handled for you, and nothing else is needed.

If your app has its own `FirebaseMessagingService`, pass each message to `MessagingService.handleRemoteMessage`, as described in [Using your own FirebaseMessagingService](../../push-notification/android/automatic-display-and-tracking.md#using-your-own-firebasemessagingservice). The same call handles both Adobe Journey Optimizer push notifications and Live Updates: it passes Live Updates to the plugin, so your interceptor, style provider, listener, and automatic tracking all work as described above.

## Manual mode

In **manual mode**, your app builds and posts the Live Update notification itself, without the plugin. Use manual mode only when you need full control over how the notification is built.

<InlineAlert variant="warning" slots="text"/>

In manual mode, the plugin flow does not run. The interceptor, the `event_type` and `timestamp` validation, and the style provider are skipped. The lifecycle callbacks of your listener (`onLiveUpdateReceived`, `onStart`, `onUpdate`, and `onEnd`) are called only when you call `trackLiveUpdateEvent`, and `onClick` and `onDismissed` are not called.

Manual mode for Live Updates is the Live Update counterpart of [Manual display and tracking of push notification](../../push-notification/android/manual-display-and-tracking.md). The push prerequisites (token sync, service registration) are the same; that document covers them.

A Live Update push carries its properties under the `adb_liveupdate_data` key. In your own `FirebaseMessagingService`, detect it with `LiveUpdatePayload.isLiveUpdate`, then parse it with `LiveUpdatePayload.parse`, which returns `null` when the data is malformed or a required field is missing.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

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
            .setContentTitle(payload.title)
            .setContentText(payload.body)
            .setOngoing(true)
            .setRequestPromotedOngoing(true) // request promotion to a Live Update
            .setContentIntent(pendingIntent)
            .build()

        NotificationManagerCompat.from(this)
            .notify(payload.notificationId.hashCode(), notification)

        // 2. Send the lifecycle tracking event and call your ILiveUpdateListener.
        LiveUpdates.trackLiveUpdateEvent(this, remoteMessage)
    }
}
```

#### Java

```java
public class YourFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(@NonNull RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        if (!LiveUpdatePayload.isLiveUpdate(remoteMessage)) {
            // Not a Live Update: handle it as a standard push (see Manual display and tracking).
            return;
        }
        LiveUpdatePayload payload = LiveUpdatePayload.parse(remoteMessage);
        if (payload == null) {
            return;
        }

        // 1. Build the notification yourself from the payload fields.
        Intent tapIntent = new Intent(this, MainActivity.class);
        // Attach Live Update tracking extras so interactions can be tracked from your Activity.
        LiveUpdates.addPushTrackingDetails(tapIntent, remoteMessage);
        PendingIntent pendingIntent = PendingIntent.getActivity(
            this, 0, tapIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        Notification notification = new NotificationCompat.Builder(this, payload.getChannelId())
            .setContentTitle(payload.getTitle())
            .setContentText(payload.getBody())
            .setOngoing(true)
            .setRequestPromotedOngoing(true) // request promotion to a Live Update
            .setContentIntent(pendingIntent)
            .build();

        NotificationManagerCompat.from(this)
            .notify(payload.getNotificationId().hashCode(), notification);

        // 2. Send the lifecycle tracking event and call your ILiveUpdateListener.
        LiveUpdates.trackLiveUpdateEvent(this, remoteMessage);
    }
}
```

Then track interactions from the target `Activity`:

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // A tap on the notification.
        LiveUpdates.handleNotificationResponse(intent, applicationOpened = true)
    }
}
```

#### Java

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // A tap on the notification.
        LiveUpdates.handleNotificationResponse(getIntent(), true);
    }
}
```

For a dismissal, set your own delete intent with `setDeleteIntent`, and when it is received, call `handleNotificationResponse` with `applicationOpened` set to `false` and `customActionId` set to `LiveUpdates.ACTION_ID_DISMISS`. See [addPushTrackingDetails](api-reference.md#addpushtrackingdetails), [trackLiveUpdateEvent](api-reference.md#trackliveupdateevent), and [handleNotificationResponse](api-reference.md#handlenotificationresponse) for the full signatures.

## Next steps

* [Live Updates troubleshooting](troubleshooting.md)
