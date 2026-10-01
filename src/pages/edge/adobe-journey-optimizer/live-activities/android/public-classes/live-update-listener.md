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

Interface your app implements to receive Live Update lifecycle and interaction callbacks. Register it with [setLiveUpdateListener](../api-reference.md#setliveupdatelistener--getliveupdatelistener), in `Application.onCreate`, so it is present when an interaction cold-starts the app. Only one listener is active at a time.

## Interface Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`. Every method has a default empty body; implement only the ones you need.

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

For a posted Live Update, `onLiveUpdateReceived` fires first, then exactly one of `onStart`, `onUpdate`, or `onEnd`. These receive callbacks run on the thread that processes the push, typically the FCM background thread. An exception thrown by any callback is caught and logged.

## Methods

### onLiveUpdateReceived

Fires once for every posted Live Update, before the specific lifecycle callback.

### onStart

Fires when `event_type` is `start`, and for a [local start](../api-reference.md#triggerlocalliveupdate).

### onUpdate

Fires when `event_type` is `update`.

### onEnd

Fires when `event_type` is `end`.

### onClick

Fires when the user taps the notification body. The SDK does not open a screen; your app decides what to open.

### onDismissed

Fires when the user dismisses the notification. It does not fire for a notification posted by an `end` push.

#### Parameters

Every method takes the same parameter:

* _payload_: The [LiveUpdatePayload](live-update-payload.md). For `onClick` and `onDismissed`, it is the most recently posted version of the Live Update, restored after the app process may have been killed; use `payload.notificationId` as the stable key.

**Example**

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

## Related classes and interfaces

* [LiveUpdatePayload](live-update-payload.md)
* [ILiveUpdateInterceptor](live-update-interceptor.md)
