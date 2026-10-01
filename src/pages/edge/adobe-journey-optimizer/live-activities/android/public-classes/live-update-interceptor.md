---
title: ILiveUpdateInterceptor
description: The interface your app implements to decide whether an incoming Android Live Update is shown.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- ILiveUpdateInterceptor
- Interface
- Android
---

# ILiveUpdateInterceptor

Interface your app implements to decide, from its own state, whether an incoming Live Update is shown. Register it with [setLiveUpdateInterceptor](../api-reference.md#setliveupdateinterceptor--getliveupdateinterceptor). Only one interceptor is active at a time.

## Interface Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`.

```kotlin
interface ILiveUpdateInterceptor {
    fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean
}
```

## Methods

### shouldDisplayLiveUpdate

Called after the push is parsed and before any other processing, for pushes the plugin renders and for [triggerLocalLiveUpdate](../api-reference.md#triggerlocalliveupdate). It is not called in [manual mode](../tutorial.md#manual-mode).

#### Parameters

* _payload_: The parsed [LiveUpdatePayload](live-update-payload.md).

#### Returns

`true` to let the SDK proceed; `false` to drop the Live Update. A dropped Live Update is not posted, sends no tracking event, fires no listener callback, and is reported as an `app_discarded` [diagnostic event](../troubleshooting.md#render-errors).

When no interceptor is registered, or the interceptor throws an exception, the Live Update proceeds. `shouldDisplayLiveUpdate` runs on the FCM background thread, so keep the decision fast.

**Example**

```kotlin
LiveUpdates.setLiveUpdateInterceptor(object : ILiveUpdateInterceptor {
    override fun shouldDisplayLiveUpdate(payload: LiveUpdatePayload): Boolean {
        // Custom logic to discard any Live Update that this device was not supposed to receive.
        // Return false to drop this Live Update, or true to let the SDK proceed.
        return shouldShowLiveUpdate(payload)
    }
})
```

For typical reasons to drop a Live Update, see [Suppress updates with an interceptor](../tutorial.md#suppress-updates-with-an-interceptor).

## Related classes and interfaces

* [LiveUpdatePayload](live-update-payload.md)
* [ILiveUpdateListener](live-update-listener.md)
