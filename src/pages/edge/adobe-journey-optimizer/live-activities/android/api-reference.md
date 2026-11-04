---
title: Live Updates API reference
description: API reference for integrating Live Updates in an Android application with the Adobe Journey Optimizer extension.
keywords:
- Adobe Journey Optimizer
- API reference
- Live Updates
- Android
- LiveUpdates
---

# Live Updates API reference

The APIs on this page are available on the `LiveUpdates` class, in the `com.adobe.marketing.mobile.messaging.liveupdate` package.

To add the Live Updates plugin to your app, use the Mobile Core [addPlugins](../../../../home/base/mobile-core/api-reference.md#addplugins) API, as shown in [Register the plugin](index.md#register-the-plugin). For the classes and interfaces used by these APIs, see [Public classes and interfaces](public-classes/live-update-plugin.md).

## extensionVersion

The `extensionVersion` API returns the version of the Live Updates library.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion()
```

#### Example

```java
String version = LiveUpdates.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val version = LiveUpdates.extensionVersion()
```

## setLiveUpdateListener

The `setLiveUpdateListener` API sets an [ILiveUpdateListener](public-classes/live-update-listener.md) that receives Live Update lifecycle and interaction callbacks. Only one listener is active at a time. Pass `null` to remove the current listener.

Set the listener in the `onCreate` method of your `Application` class. The `onClick` and `onDismissed` callbacks can arrive after the app process was stopped, when Android starts the app only to handle the interaction, so a listener set from an `Activity` may miss them.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setLiveUpdateListener(@Nullable ILiveUpdateListener listener)
```

* _listener_ - The listener to set, or `null` to remove the current listener.

#### Example

```java
LiveUpdates.setLiveUpdateListener(new ILiveUpdateListener() {
    @Override
    public void onLiveUpdateReceived(@NonNull LiveUpdatePayload payload) {}

    @Override
    public void onStart(@NonNull LiveUpdatePayload payload) {
        // The Live Update has started.
    }

    @Override
    public void onUpdate(@NonNull LiveUpdatePayload payload) {}

    @Override
    public void onEnd(@NonNull LiveUpdatePayload payload) {}

    @Override
    public void onClick(@NonNull LiveUpdatePayload payload) {}

    @Override
    public void onDismissed(@NonNull LiveUpdatePayload payload) {}
});
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
LiveUpdates.setLiveUpdateListener(object : ILiveUpdateListener {
    override fun onStart(payload: LiveUpdatePayload) {
        // The Live Update has started.
    }
})
```

## getLiveUpdateListener

The `getLiveUpdateListener` API returns the listener set with [setLiveUpdateListener](#setliveupdatelistener), or `null` when no listener is set.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
@Nullable
public static ILiveUpdateListener getLiveUpdateListener()
```

#### Example

```java
ILiveUpdateListener listener = LiveUpdates.getLiveUpdateListener();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val listener = LiveUpdates.getLiveUpdateListener()
```

## setLiveUpdateInterceptor

The `setLiveUpdateInterceptor` API sets an [ILiveUpdateInterceptor](public-classes/live-update-interceptor.md) that decides whether an incoming Live Update is shown. The interceptor is called before the Live Update is displayed or tracked, and before any listener callback. Only one interceptor is active at a time. Pass `null` to remove the current interceptor.

The interceptor is called for Live Updates displayed by the plugin, including those raised with [triggerLocalLiveUpdate](#triggerlocalliveupdate). It is not called in [manual mode](tutorial.md#manual-mode). For typical uses, see [Suppress updates with an interceptor](tutorial.md#suppress-updates-with-an-interceptor).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setLiveUpdateInterceptor(@Nullable ILiveUpdateInterceptor interceptor)
```

* _interceptor_ - The interceptor to set, or `null` to remove the current interceptor.

#### Example

```java
LiveUpdates.setLiveUpdateInterceptor(payload -> {
    // Return false to drop this Live Update, or true to show it.
    return shouldShowLiveUpdate(payload);
});
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
LiveUpdates.setLiveUpdateInterceptor(object : ILiveUpdateInterceptor {
    override fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean {
        // Return false to drop this Live Update, or true to show it.
        return shouldShowLiveUpdate(payload)
    }
})
```

## getLiveUpdateInterceptor

The `getLiveUpdateInterceptor` API returns the interceptor set with [setLiveUpdateInterceptor](#setliveupdateinterceptor), or `null` when no interceptor is set.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
@Nullable
public static ILiveUpdateInterceptor getLiveUpdateInterceptor()
```

#### Example

```java
ILiveUpdateInterceptor interceptor = LiveUpdates.getLiveUpdateInterceptor();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val interceptor = LiveUpdates.getLiveUpdateInterceptor()
```

## triggerLocalLiveUpdate

The `triggerLocalLiveUpdate` API displays a Live Update from your app, without a push. The Live Update is processed the same way as a received push: the interceptor is called, the payload is validated, the style provider supplies the style, the notification is posted, and the listener's `onStart` callback is called.

Build the payload with [LiveUpdatePayload.create](public-classes/live-update-payload.md#create), using `EVENT_TYPE_LOCAL_START` as the event type and the current time, in epoch seconds, as the timestamp. Later pushes for the same Live Update must have a newer timestamp, or they are dropped.

A local start is not tracked when it is displayed. It is reported when the first push from Adobe Journey Optimizer for the same Live Update arrives. See [Local start is reported only after a push](troubleshooting.md#local-start-is-reported-only-after-a-push).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static boolean triggerLocalLiveUpdate(@NonNull Context context, @NonNull LiveUpdatePayload payload)
```

* _context_ - The application `Context`.
* _payload_ - The Live Update to display.

Returns `true` when the Live Updates plugin processed the payload, even if the interceptor or the validation then dropped it. Returns `false` when `LiveUpdatePlugin` is not added to Mobile Core.

#### Example

```java
LiveUpdatePayload payload = LiveUpdatePayload.create(
    "order_1234",
    "live_updates_channel",
    LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    "Order on the way",
    System.currentTimeMillis() / 1000
);
LiveUpdates.triggerLocalLiveUpdate(context, payload);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val payload = LiveUpdatePayload.create(
    notificationId = "order_1234",
    channelId = "live_updates_channel",
    eventType = LiveUpdatePayload.EVENT_TYPE_LOCAL_START,
    title = "Order on the way",
    timestamp = System.currentTimeMillis() / 1000
)
LiveUpdates.triggerLocalLiveUpdate(context, payload)
```

## trackTopicSubscribed

The `trackTopicSubscribed` API sends a tracking event to Adobe Journey Optimizer when your app subscribes the device to the Firebase Cloud Messaging (FCM) topic of a Live Update. The SDK does not subscribe the device to topics. Your app subscribes with `FirebaseMessaging.subscribeToTopic`, and calls this API after the subscription succeeds. See [Broadcast Live Updates](tutorial.md#broadcast-live-updates).

The topic is read from the payload's `topicName`. No event is sent when the payload has no topic name or no Adobe Journey Optimizer tracking data.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void trackTopicSubscribed(@NonNull LiveUpdatePayload payload)
```

* _payload_ - The Live Update whose topic the device subscribed to.

#### Example

```java
FirebaseMessaging.getInstance().subscribeToTopic(topic)
    .addOnCompleteListener(task -> {
        if (task.isSuccessful()) {
            LiveUpdates.trackTopicSubscribed(payload);
        }
    });
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
FirebaseMessaging.getInstance().subscribeToTopic(topic)
    .addOnCompleteListener { task ->
        if (task.isSuccessful) {
            LiveUpdates.trackTopicSubscribed(payload)
        }
    }
```

## trackTopicUnsubscribed

The `trackTopicUnsubscribed` API sends a tracking event to Adobe Journey Optimizer when your app unsubscribes the device from the FCM topic of a Live Update. Call it after `FirebaseMessaging.unsubscribeFromTopic` succeeds.

The topic is read from the payload's `topicName`. No event is sent when the payload has no topic name or no Adobe Journey Optimizer tracking data.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void trackTopicUnsubscribed(@NonNull LiveUpdatePayload payload)
```

* _payload_ - The Live Update whose topic the device unsubscribed from.

#### Example

```java
FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
    .addOnCompleteListener(task -> {
        if (task.isSuccessful()) {
            LiveUpdates.trackTopicUnsubscribed(payload);
        }
    });
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
FirebaseMessaging.getInstance().unsubscribeFromTopic(topic)
    .addOnCompleteListener { task ->
        if (task.isSuccessful) {
            LiveUpdates.trackTopicUnsubscribed(payload)
        }
    }
```

## addPushTrackingDetails

<InlineAlert variant="info" slots="text"/>

Use this API only in [manual mode](tutorial.md#manual-mode), when your app builds and posts the Live Update notification itself.

The `addPushTrackingDetails` API adds the Live Update tracking details to an `Intent` that your app uses for the notification's `PendingIntent`. When the user interacts with the notification, pass the received `Intent` to [handleNotificationResponse](#handlenotificationresponse) to send the interaction tracking event.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static boolean addPushTrackingDetails(@Nullable Intent intent, @Nullable RemoteMessage message)
```

* _intent_ - The `Intent` to add the tracking details to.
* _message_ - The received Live Update `RemoteMessage`.

Returns `true` when the tracking details were added. Returns `false` when `intent` is `null` or the message is not a Live Update.

#### Example

```java
Intent intent = new Intent(context, MainActivity.class);
LiveUpdates.addPushTrackingDetails(intent, remoteMessage);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val intent = Intent(context, MainActivity::class.java)
LiveUpdates.addPushTrackingDetails(intent, remoteMessage)
```

## trackLiveUpdateEvent

<InlineAlert variant="info" slots="text"/>

Use this API only in [manual mode](tutorial.md#manual-mode), when your app builds and posts the Live Update notification itself.

The `trackLiveUpdateEvent` API sends the tracking event for a received Live Update and calls the registered [ILiveUpdateListener](public-classes/live-update-listener.md). Call it after your app posts the notification. When the push has no Adobe Journey Optimizer tracking data, no tracking event is sent, but the listener is still called.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void trackLiveUpdateEvent(@NonNull Context context, @NonNull RemoteMessage message)
```

* _context_ - The application `Context`.
* _message_ - The received Live Update `RemoteMessage`.

#### Example

```java
LiveUpdates.trackLiveUpdateEvent(context, remoteMessage);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
LiveUpdates.trackLiveUpdateEvent(context, remoteMessage)
```

## handleNotificationResponse

<InlineAlert variant="info" slots="text"/>

Use this API only in [manual mode](tutorial.md#manual-mode), when your app builds and posts the Live Update notification itself.

The `handleNotificationResponse` API sends the tracking event for a user interaction with a Live Update notification: a tap, an action button click, or a dismissal. Call it with the `Intent` your app receives from the notification. The `Intent` must have been prepared with [addPushTrackingDetails](#addpushtrackingdetails).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static boolean handleNotificationResponse(@Nullable Intent intent, boolean applicationOpened)

public static boolean handleNotificationResponse(@Nullable Intent intent, boolean applicationOpened, @Nullable String customActionId)
```

* _intent_ - The `Intent` received from the notification.
* _applicationOpened_ - `true` when the user tapped the notification. `false` for an action button click or a dismissal.
* _customActionId_ - The ID of the action button the user clicked. For a dismissal, use `LiveUpdates.ACTION_ID_DISMISS`. Use `null` for a tap.

Returns `true` when the `Intent` is a Live Update interaction, even if no tracking event is sent because the push had no Adobe Journey Optimizer tracking data. Returns `false` otherwise.

#### Example

```java
// The user tapped the notification.
LiveUpdates.handleNotificationResponse(intent, true);

// The user dismissed the notification.
LiveUpdates.handleNotificationResponse(intent, false, LiveUpdates.ACTION_ID_DISMISS);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
// The user tapped the notification.
LiveUpdates.handleNotificationResponse(intent, applicationOpened = true)

// The user dismissed the notification.
LiveUpdates.handleNotificationResponse(
    intent,
    applicationOpened = false,
    customActionId = LiveUpdates.ACTION_ID_DISMISS
)
```
