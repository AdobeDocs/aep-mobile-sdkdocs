---
title: Android Live Update payload
description: Payload keys and sample pushes to start, update, and end an Android Live Update with Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Live Updates
- Android
- adb_liveupdate_data
---

# Live Update payload

A Live Update is sent as a Firebase Cloud Messaging (FCM) data message. The Live Update properties are sent as a JSON-encoded string under the `adb_liveupdate_data` key. Each push carries one state of the Live Update: `start`, `update`, or `end`.

## Configuration

This payload is rendered by the [Live Updates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/live-updates-plugin.md). Add the plugin to your app and register it with `MobileCore.addPlugins(...)`, as shown in [Register the plugin](index.md#register-the-plugin). When the plugin is not registered, the push is dropped.

## Data keys

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :--------------- |
| Live Update Data | Yes | `adb_liveupdate_data` | string | JSON-encoded object containing the [properties](#properties) below. Its presence identifies the push as a Live Update. |
| Tracking Data | Yes | `_xdm` | string | Tracking data added by Adobe Journey Optimizer. The SDK copies it into every Live Update tracking event. Without it, no tracking events are sent, and the Adobe Journey Optimizer extension ignores the push unless it also has an `adb_title` key. |

The standard Android push keys documented on [Push notification payload keys](../../push-notification/push-payload.md), such as `adb_title` and `adb_body`, are not used to render a Live Update. The plugin builds the notification from the `adb_liveupdate_data` properties only.

## Properties

Keys inside the `adb_liveupdate_data` object:

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :--------------- |
| Notification ID | Yes | `notification_id` | string | Identifies the Live Update. Every push for the same Live Update uses the same value, so the notification is updated in place. |
| Notification Channel ID | Yes | `notification_channel_id` | string | Android notification channel to post on. See [Notification channel](index.md#notification-channel). |
| Event Type | Yes | `event_type` | string | `start`, `update`, or `end`. A push with any other value is dropped. |
| Timestamp | Yes | `timestamp` | number | Time this state was produced, in epoch seconds. The plugin drops a push whose timestamp is more than 28 days old, or not newer than the last push it accepted for the same `notification_id` and `notification_channel_id`. |
| Title | No | `title` | string | Notification title. Required for promotion to a Live Update. |
| Body | No | `body` | string | Notification text. |
| Critical Text | No | `critical_text` | string | Short text shown in the status bar for a promoted Live Update. |
| When | No | `when` | number | Time shown on the notification, in epoch seconds. |
| Dismiss After | No | `dismiss_after` | number | Read only on an `end` push. When positive, the notification is removed this many seconds after the push arrives. When absent, the notification stays on the device as an ongoing notification until the user or your app removes it. |
| Priority | No | `priority` | string | One of `PRIORITY_MAX`, `PRIORITY_HIGH`, `PRIORITY_LOW`, or `PRIORITY_MIN`. Any other value, or no value, uses the default priority. |
| Topic Name | No | `topic_name` | string | FCM topic associated with this Live Update. Reported in tracking events and used for [broadcast Live Updates](tutorial.md#broadcast-live-updates). |
| Content State | No | `content_state` | object | App-defined state. The SDK does not read it; your [ILiveUpdateStyleProvider](public-classes/live-update-style-provider.md) reads it from `payload.contentState` to build the style. |

## Example

A `start` push, as sent through FCM:

```json
{
   "message":{
      "android":{
         "data":{
            "_xdm": "<AJO_TRACKING_DATA>",
            "adb_liveupdate_data": "{\"notification_id\":\"order_1234\",\"notification_channel_id\":\"live_updates_channel\",\"event_type\":\"start\",\"timestamp\":1790000000,\"title\":\"Order on the way\",\"body\":\"Your order has left the store.\",\"critical_text\":\"20 min\",\"topic_name\":\"order_1234\",\"content_state\":{\"custom_key_template_type\":\"progress\",\"custom_key_progress\":10}}"
         }
      }
   }
}
```

<InlineAlert variant="info" slots="text"/>

`adb_liveupdate_data` is a JSON-encoded string, because FCM data messages only allow string values. The examples below show its decoded value. Set `timestamp` to the current time in epoch seconds when you send a push; the plugin drops pushes more than 28 days old.

### Start

```json
{
   "notification_id": "order_1234",
   "notification_channel_id": "live_updates_channel",
   "event_type": "start",
   "timestamp": 1790000000,
   "title": "Order on the way",
   "body": "Your order has left the store.",
   "critical_text": "20 min",
   "topic_name": "order_1234",
   "content_state": {
      "custom_key_template_type": "progress",
      "custom_key_progress": 10
   }
}
```

### Update

Same `notification_id` and `notification_channel_id`, with a newer `timestamp`. The notification is updated in place.

```json
{
   "notification_id": "order_1234",
   "notification_channel_id": "live_updates_channel",
   "event_type": "update",
   "timestamp": 1790000600,
   "title": "Order on the way",
   "body": "Your order is 5 minutes away.",
   "critical_text": "5 min",
   "topic_name": "order_1234",
   "content_state": {
      "custom_key_template_type": "progress",
      "custom_key_progress": 80
   }
}
```

### End

`dismiss_after` removes the notification 300 seconds after this push arrives. Without `dismiss_after`, the notification stays on the device after the `end` push, as an ongoing notification, until the user or your app removes it.

```json
{
   "notification_id": "order_1234",
   "notification_channel_id": "live_updates_channel",
   "event_type": "end",
   "timestamp": 1790001200,
   "title": "Order delivered",
   "body": "Enjoy your meal.",
   "critical_text": "Delivered",
   "dismiss_after": 300,
   "topic_name": "order_1234",
   "content_state": {
      "custom_key_template_type": "progress",
      "custom_key_progress": 100
   }
}
```

The `content_state` keys in these examples are app-defined. They match the style provider in the [tutorial](tutorial.md#1-provide-a-notification-style).

## Delivery rules

* **Updates in place.** Pushes with the same `notification_id` replace the same notification.
* **Ordering.** Each push must have a newer `timestamp` than the last push the plugin accepted for the same `notification_id` and `notification_channel_id`. Older and duplicate pushes are dropped.
* **Removal after `end`.** The SDK removes the notification only when the `end` push has a positive `dismiss_after` value. Otherwise, it stays until the user or your app removes it.
* **After `end`.** A push that arrives after `end` with the same `notification_id` and a newer `timestamp` posts the notification again. To block it, use an [interceptor](tutorial.md#suppress-updates-with-an-interceptor).

See also: [Push notification payload keys](../../push-notification/push-payload.md).
