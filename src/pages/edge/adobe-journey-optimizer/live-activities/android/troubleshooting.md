---
title: Live Updates troubleshooting
description: Diagnostic events the Android Live Updates SDK and the Adobe Journey Optimizer extension report when a Live Update is dropped or not promoted.
keywords:
- Adobe Journey Optimizer
- Troubleshooting
- Live Updates
- Android
- Diagnostic events
- Rules Engine
---

# Live Updates troubleshooting

The SDK reports each dropped Live Update, and each notification that cannot be promoted to a Live Update, as a diagnostic event on the Mobile Core event hub. Inspect these events with [Adobe Experience Platform Assurance](../../../../home/base/assurance/index.md), together with the verbose logs (`MobileCore.setLogLevel(LoggingMode.VERBOSE)`).

<InlineAlert variant="info" slots="text"/>

Diagnostic events are not sent to the Edge Network, so they are not written to the Adobe Journey Optimizer tracking dataset. They stay on the event hub, where you can process them on the device, for example with a [rule](../../../../home/base/mobile-core/rules-engine/index.md). See [Use the events in a rule](#use-the-events-in-a-rule).

## Diagnostic events

| **Event name** | **Dispatched by** | **Event type** | **Event source** | **Reported when** |
| :------------- | :---------------- | :------------- | :--------------- | :---------------- |
| `Live Update Render Error` | Live Updates SDK, or the Adobe Journey Optimizer extension for `no_plugin` | `com.adobe.eventType.messaging` | `com.adobe.eventSource.errorResponseContent` | A Live Update is dropped, or is posted but cannot be displayed as expected. See [Render errors](#render-errors). |
| `Live Update Incompatible` | Live Updates SDK | `com.adobe.eventType.messaging` | `com.adobe.eventSource.errorResponseContent` | A Live Update is posted but cannot be promoted. See [Incompatibility issues](#incompatibility-issues). |

## Event data

The two dispatchers place the reason code in different keys.

### Events from the Live Updates SDK

Every reason except `no_plugin` comes from the Live Updates SDK. The event data holds an `xdm` object with the same shape as the Live Update [tracking events](tutorial.md#automatic-tracking):

```json
{
   "xdm": {
      "eventType": "liveUpdateTracking.renderError",
      "pushNotificationTracking": {
         "pushProvider": "fcm",
         "pushProviderMessageID": "order_1234"
      },
      "_experience": {
         "customerJourneyManagement": {
            "messageProfile": {
               "channel": {
                  "_id": "https://ns.adobe.com/xdm/channels/liveactivity"
               }
            },
            "pushChannelContext": {
               "platform": "fcm",
               "liveActivity": {
                  "liveActivityID": "order_1234",
                  "channelID": "order_1234",
                  "event": "outdated_timestamp"
               }
            }
         }
      }
   }
}
```

| **Key** | **Value** |
| :------ | :-------- |
| `xdm.eventType` | `liveUpdateTracking.renderError` for a render error, or `liveUpdateTracking.incompatible` for an incompatibility issue. |
| `xdm._experience.customerJourneyManagement.pushChannelContext.liveActivity.event` | The reason code. |
| `xdm._experience.customerJourneyManagement.pushChannelContext.liveActivity.liveActivityID` | The payload's `notification_id`. Also set in `xdm.pushNotificationTracking.pushProviderMessageID`. |
| `xdm._experience.customerJourneyManagement.pushChannelContext.liveActivity.channelID` | The payload's `topic_name`, or an empty string when it is absent. |

When the push carries `_xdm`, its contents (such as `_experience.customerJourneyManagement.messageExecution`) are also copied into `xdm`, so the event identifies the originating campaign or journey. The event is reported even when the push has no `_xdm`.

### Event from the Adobe Journey Optimizer extension

The Adobe Journey Optimizer extension reports `no_plugin`, because the Live Updates SDK never receives the push. Its event data is:

| **Key** | **Value** |
| :------ | :-------- |
| `category` | `liveUpdateTracking.renderError` |
| `subcategory` | `no_plugin` |
| `xdm` | The push's `_xdm`, unchanged. Absent when the push has no `_xdm`. |

## Render errors

Reported as `Live Update Render Error`. **Dropped** means no notification is posted, no tracking event is sent, and no listener callback is called.

| **Reason** | **Dropped** | **Meaning** |
| :--------- | :---------- | :---------- |
| `no_plugin` | Yes | No Live Updates plugin is registered, so the Adobe Journey Optimizer extension dropped the push. Register `LiveUpdatePlugin` with `MobileCore.addPlugins(...)`. |
| `app_discarded` | Yes | Your [interceptor](tutorial.md#suppress-updates-with-an-interceptor) returned `false`. |
| `invalid_event_type` | Yes | `event_type` is not `start`, `update`, `end`, or `localstart`. |
| `invalid_timestamp` | Yes | `timestamp` is more than 28 days old. |
| `outdated_timestamp` | Yes | `timestamp` is not newer than the last push accepted for the same `notification_id` and `notification_channel_id`. |
| `style_null` | No | Your style provider returned `null`. The notification is posted without a style. |
| `notification_permission_missing` | No | Notifications are turned off for the app, for example because `POST_NOTIFICATIONS` was not granted. The notification is posted, but Android does not display it. |

A push whose `adb_liveupdate_data` value is not valid JSON, or is missing a required field, is dropped with a warning log and no diagnostic event.

## Incompatibility issues

Reported as `Live Update Incompatible`. None of these drop the Live Update: the notification is posted as a standard ongoing notification instead of a promoted Live Update. See [Promotion to a Live Update](index.md#promotion-to-a-live-update).

| **Reason** | **Dropped** | **Meaning** |
| :--------- | :---------- | :---------- |
| `device_api_below_36` | No | The device runs an Android version below 16 (API 36). |
| `not_promotable` | No | `Notification.hasPromotableCharacteristics()` is `false`, for example because the notification has no title or its style is not allowed for Live Updates. |
| `channel_not_registered` | No | The notification channel does not exist. |
| `channel_importance_low` | No | The notification channel's importance is below `IMPORTANCE_HIGH`. |
| `promotion_not_permitted` | No | The app is not allowed to post promoted notifications; the user may have turned this off in system settings. |
| `notification_manager_unavailable` | No | The system `NotificationManager` was not available. |

## Use the events in a rule

Because the events are dispatched on the event hub, a [rule](../../../../home/base/mobile-core/rules-engine/index.md) can match them for processing on the device:

* Match the event with `~type` equal to `com.adobe.eventType.messaging` and `~source` equal to `com.adobe.eventSource.errorResponseContent`.
* Read the reason from `xdm._experience.customerJourneyManagement.pushChannelContext.liveActivity.event` for events from the Live Updates SDK, or from `subcategory` for `no_plugin`.

Nested keys are matched by their flattened, dot-separated path. See [Event data key flattening](../../../../home/base/mobile-core/rules-engine/technical-details.md#event-data-key-flattening) in the Rules Engine technical details.

## Local start is reported only after a push

A Live Update raised with [`triggerLocalLiveUpdate`](api-reference.md#triggerlocalliveupdate) and `EVENT_TYPE_LOCAL_START` is posted and calls `onStart`, but no tracking event is sent at that point, because a local start has no `_xdm` to tie it to a campaign or journey. The SDK records the local start and reports it later, when a push from Adobe Journey Optimizer arrives that:

* has the same `notification_id` and `notification_channel_id` as the local start,
* has an `event_type` of `start`, `update`, or `end`,
* has a newer `timestamp` (epoch seconds) than the local start,
* passes your [interceptor](tutorial.md#suppress-updates-with-an-interceptor), and
* carries `_xdm`.

The SDK then sends two `liveUpdateTracking.received` events back to back, both carrying that push's `_xdm`:

1. `liveupdate_localstart`, stamped with the time of the local start.
2. The push's own event: `liveupdate_start`, `liveupdate_update`, or `liveupdate_end`.

The local start is reported once. Until then:

* A push whose `timestamp` is not newer than the local start is dropped (`outdated_timestamp`), and the local start stays unreported.
* A push without `_xdm` sends no tracking event, so the local start stays pending for a later push.
* A local start that is never reported is discarded after 28 days.
