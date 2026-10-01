---
title: LiveUpdatePayload
description: The parsed Android Live Update envelope that the SDK passes to your style provider, listener, and interceptor.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- LiveUpdatePayload
- Class
- Android
---

# LiveUpdatePayload

The parsed Live Update envelope (`adb_liveupdate_data`). The SDK creates it when it parses a push and passes it to your [ILiveUpdateStyleProvider](live-update-style-provider.md), [ILiveUpdateListener](live-update-listener.md), and [ILiveUpdateInterceptor](live-update-interceptor.md). For what each envelope key means, see [Live Update payload](../payload.md#properties).

## Class Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`. The constructor is private: get an instance from [parse](#parse), or build one with [create](#create) for a local trigger.

## Properties

| **Property** | **Type** | **Envelope key** | **Description** |
| :----------- | :------- | :--------------- | :-------------- |
| `notificationId` | `String` | `notification_id` | Identifies the Live Update. |
| `channelId` | `String` | `notification_channel_id` | Android notification channel the notification is posted on. |
| `eventType` | `String` | `event_type` | `start`, `update`, or `end`; `localstart` for a [local start](../api-reference.md#triggerlocalliveupdate). |
| `timestamp` | `Long` | `timestamp` | Time this state was produced, in epoch seconds. |
| `title` | `String?` | `title` | Notification title. |
| `body` | `String?` | `body` | Notification text. |
| `criticalText` | `String?` | `critical_text` | Short text shown in the status bar chip. |
| `whenSeconds` | `Long?` | `when` | Time shown on the notification, in epoch seconds. |
| `dismissAfterSeconds` | `Long?` | `dismiss_after` | Seconds after an `end` push before the notification is removed. |
| `priority` | `String?` | `priority` | Notification priority, such as `PRIORITY_HIGH`. |
| `topicName` | `String?` | `topic_name` | FCM topic associated with the Live Update. |
| `contentState` | `JSONObject?` | `content_state` | App-defined state. The SDK does not read it. |
| `xdm` | `JSONObject?` | `_xdm` | The push's tracking data. This is an FCM data key outside the envelope. The SDK copies it into tracking events. |

## Constants

Values of `eventType`, defined on the companion object:

| **Constant** | **Value** |
| :----------- | :-------- |
| `EVENT_TYPE_START` | `"start"` |
| `EVENT_TYPE_UPDATE` | `"update"` |
| `EVENT_TYPE_END` | `"end"` |
| `EVENT_TYPE_LOCAL_START` | `"localstart"` |

## Methods

### parse

Parses an FCM message into a `LiveUpdatePayload`. Use it in [manual mode](../tutorial.md#manual-mode).

```kotlin
fun parse(message: RemoteMessage): LiveUpdatePayload?
```

#### Returns

The parsed payload, or `null` when the message has no `adb_liveupdate_data` key, the envelope is not valid JSON, or a required field (`notification_id`, `notification_channel_id`, `event_type`, `timestamp`) is missing.

### isLiveUpdate

Returns `true` when the FCM message carries the `adb_liveupdate_data` key.

```kotlin
fun isLiveUpdate(message: RemoteMessage): Boolean
```

### create

Builds a payload in your app, for [triggerLocalLiveUpdate](../api-reference.md#triggerlocalliveupdate).

#### Parameters

* _notificationId_: Required. Identifies the Live Update.
* _channelId_: Required. Android notification channel to post on.
* _eventType_: Required. Use `EVENT_TYPE_LOCAL_START` for a local start.
* _title_: Required, nullable. A notification without a title is not promoted to a chip.
* _timestamp_: Required. The current time in epoch seconds. A value in epoch milliseconds is converted to seconds.
* _priority_, _body_, _criticalText_, _whenSeconds_, _dismissAfterSeconds_, _contentState_, _topicName_, _xdm_: Optional. Each defaults to `null`.

**Example**

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

## Related classes and interfaces

* [ILiveUpdateStyleProvider](live-update-style-provider.md)
* [ILiveUpdateListener](live-update-listener.md)
* [ILiveUpdateInterceptor](live-update-interceptor.md)
