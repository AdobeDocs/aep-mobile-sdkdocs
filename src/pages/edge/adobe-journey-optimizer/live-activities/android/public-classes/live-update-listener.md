---
title: ILiveUpdateListener
description: The interface your app implements to receive Android Live Update lifecycle and interaction callbacks.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- ILiveUpdateListener
- Interface
- Android
---

# ILiveUpdateListener

Interface your app implements to receive Live Update lifecycle and interaction callbacks. Register it with [setLiveUpdateListener](../api-reference.md#setliveupdatelistener), in `Application.onCreate`, so it is available when the app process is started to deliver an interaction. Only one listener is active at a time.

## Interface Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`. In Kotlin, every method has a default empty body, so you override only the ones you need. In Java, implement all six methods.

```kotlin
interface ILiveUpdateListener {
    fun onLiveUpdateReceived(payload: LiveUpdatePayload) {}
    fun onStart(payload: LiveUpdatePayload) {}
    fun onUpdate(payload: LiveUpdatePayload) {}
    fun onEnd(payload: LiveUpdatePayload) {}
    fun onClick(payload: LiveUpdatePayload) {}
    fun onDismissed(payload: LiveUpdatePayload) {}
}
```

For a posted Live Update, `onLiveUpdateReceived` is called first, then exactly one of `onStart`, `onUpdate`, or `onEnd`. These receive callbacks run on the thread that processes the push, typically the FCM background thread. An exception thrown by any callback is caught and logged.

## Methods

### onLiveUpdateReceived

Called once for every posted Live Update, before the specific lifecycle callback.

### onStart

Called when `event_type` is `start`, and for a [local start](../api-reference.md#triggerlocalliveupdate).

### onUpdate

Called when `event_type` is `update`.

### onEnd

Called when `event_type` is `end`.

### onClick

Called when the user taps the notification. The SDK does not open a screen; your app decides what to open.

### onDismissed

Called when the user dismisses the notification. It is not called for a notification posted by an `end` push.

#### Parameters

Every method takes the same parameter:

* _payload_: The [LiveUpdatePayload](live-update-payload.md). For `onClick` and `onDismissed`, it is the most recently posted version of the Live Update, restored if the app process was stopped and started again; use `payload.notificationId` as the stable key.

**Example**

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
LiveUpdates.setLiveUpdateListener(object : ILiveUpdateListener {
    override fun onStart(payload: LiveUpdatePayload) {
        // The Live Update has begun.
    }

    override fun onClick(payload: LiveUpdatePayload) {
        val intent = Intent(applicationContext, MainActivity::class.java)
            .apply { flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP }
        startActivity(intent)
    }
})
```

#### Java

```java
LiveUpdates.setLiveUpdateListener(new ILiveUpdateListener() {
    @Override
    public void onLiveUpdateReceived(LiveUpdatePayload payload) { }

    @Override
    public void onStart(LiveUpdatePayload payload) {
        // The Live Update has begun.
    }

    @Override
    public void onUpdate(LiveUpdatePayload payload) { }

    @Override
    public void onEnd(LiveUpdatePayload payload) { }

    @Override
    public void onClick(LiveUpdatePayload payload) {
        Intent intent = new Intent(getApplicationContext(), MainActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(intent);
    }

    @Override
    public void onDismissed(LiveUpdatePayload payload) { }
});
```

## Related classes and interfaces

* [LiveUpdatePayload](live-update-payload.md)
* [ILiveUpdateInterceptor](live-update-interceptor.md)
