---
title: ILiveUpdateStyleProvider
description: The interface your app implements to choose the notification style for each Android Live Update.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- ILiveUpdateStyleProvider
- Interface
- Android
---

# ILiveUpdateStyleProvider

Interface your app implements to choose the notification style for each Live Update, for example `NotificationCompat.ProgressStyle`. Pass it to the [LiveUpdatePlugin](live-update-plugin.md) constructor.

## Interface Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`.

```kotlin
fun interface ILiveUpdateStyleProvider {
    fun provideStyle(payload: LiveUpdatePayload): NotificationCompat.Style?
}
```

## Methods

### provideStyle

Called once for each Live Update the plugin posts, after your [interceptor](live-update-interceptor.md) and the SDK's validation.

#### Parameters

* _payload_: The [LiveUpdatePayload](live-update-payload.md) being posted. Read your app-defined keys from `payload.contentState`.

#### Returns

The `NotificationCompat.Style` to apply. When it returns `null`, the plugin posts the notification without a style and reports a `style_null` [diagnostic event](../troubleshooting.md#render-errors).

`provideStyle` runs on the FCM background thread, so do not perform long-running work in it.

**Example**

```kotlin
class MyLiveUpdateStyleProvider : ILiveUpdateStyleProvider {
    override fun provideStyle(payload: LiveUpdatePayload): NotificationCompat.Style? {
        return when (payload.contentState?.optString("custom_key_template_type")) {
            "progress" -> NotificationCompat.ProgressStyle()
                .setProgress(payload.contentState?.optInt("custom_key_progress", 0) ?: 0)
            else -> null
        }
    }
}
```

## Related classes and interfaces

* [LiveUpdatePlugin](live-update-plugin.md)
* [LiveUpdatePayload](live-update-payload.md)
