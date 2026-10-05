---
title: LiveUpdatePayload
description: The parsed Android Live Update data that the SDK passes to your style provider, listener, and interceptor.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Updates
- LiveUpdatePayload
- Class
- Android
---

# LiveUpdatePayload

The parsed Live Update data (`adb_liveupdate_data`). The SDK creates it when it parses a push and passes it to your [ILiveUpdateStyleProvider](live-update-style-provider.md), [ILiveUpdateListener](live-update-listener.md), and [ILiveUpdateInterceptor](live-update-interceptor.md). For what each key means, see [Live Update payload](../payload.md#properties).

## Class Definition

Package `com.adobe.marketing.mobile.messaging.liveupdate`. The constructor is private: get an instance from [parse](#parse), or build one with [create](#create) for a local trigger.

## Properties

| **Property** | **Type** | **Payload key** | **Description** |
| :----------- | :------- | :--------------- | :-------------- |
| `notificationId` | `String` | `notification_id` | Identifies the Live Update. |
| `channelId` | `String` | `notification_channel_id` | Android notification channel the notification is posted on. |
| `eventType` | `String` | `event_type` | `start`, `update`, or `end`; `localstart` for a [local start](../api-reference.md#triggerlocalliveupdate). |
| `timestamp` | `Long` | `timestamp` | Time this state was produced, in epoch seconds. |
| `title` | `String?` | `title` | Notification title. |
| `body` | `String?` | `body` | Notification text. |
| `criticalText` | `String?` | `critical_text` | Short text shown in the status bar for a promoted Live Update. |
| `whenSeconds` | `Long?` | `when` | Time shown on the notification, in epoch seconds. |
| `dismissAfterSeconds` | `Long?` | `dismiss_after` | Seconds after an `end` push before the notification is removed. |
| `priority` | `String?` | `priority` | Notification priority, such as `PRIORITY_HIGH`. |
| `topicName` | `String?` | `topic_name` | FCM topic associated with the Live Update. |
| `contentState` | `JSONObject?` | `content_state` | App-defined state. The SDK does not read it. |
| `xdm` | `JSONObject?` | `_xdm` | The push's tracking data. It is sent as a separate FCM data key, outside `adb_liveupdate_data`. The SDK copies it into tracking events. |

In Java, read each property with its getter, for example `getNotificationId()` or `getContentState()`.

## Constants

Values of `eventType`, available as static fields of `LiveUpdatePayload`:

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

```java
public static LiveUpdatePayload parse(RemoteMessage message)
```

#### Returns

The parsed payload, or `null` when the message has no `adb_liveupdate_data` key, the `adb_liveupdate_data` value is not valid JSON, or a required field (`notification_id`, `notification_channel_id`, `event_type`, `timestamp`) is missing.

### isLiveUpdate

Returns `true` when the FCM message carries the `adb_liveupdate_data` key.

```kotlin
fun isLiveUpdate(message: RemoteMessage): Boolean
```

```java
public static boolean isLiveUpdate(RemoteMessage message)
```

### create

Builds a payload in your app, for [triggerLocalLiveUpdate](../api-reference.md#triggerlocalliveupdate).

#### Parameters

* _notificationId_: Required. Identifies the Live Update.
* _channelId_: Required. Android notification channel to post on.
* _eventType_: Required. Use `EVENT_TYPE_LOCAL_START` for a local start.
* _title_: Required, nullable. A notification without a title is not promoted to a Live Update.
* _timestamp_: Required. The current time in epoch seconds. A value in epoch milliseconds is converted to seconds.
* _priority_, _body_, _criticalText_, _whenSeconds_, _dismissAfterSeconds_, _contentState_, _topicName_, _xdm_: Optional. Each defaults to `null`. In Java, pass the arguments in this order, and pass `null` for optional values you do not set.

**Example**

#### Android Kotlin

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

#### Android Java

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

## Related classes and interfaces

* [ILiveUpdateStyleProvider](live-update-style-provider.md)
* [ILiveUpdateListener](live-update-listener.md)
* [ILiveUpdateInterceptor](live-update-interceptor.md)
