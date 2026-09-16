---
title: Big text push template (ajo_bigtext)
description: Configuration, properties, and a sample payload for the Adobe Journey Optimizer Big text push template (ajo_bigtext), rendered by the push templates plugin on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- Android
- ajo_bigtext
- NotificationBuilderPlugin
---

# Big text template (`ajo_bigtext`)

A title, a short collapsed body, a longer expanded body, and an optional large side icon. There is no hero image.

See the [push templates plugin](index.md) for the mechanism, prerequisites, and how to add the plugin.

<InlineAlert variant="info" slots="text"/>

Body text is split across two keys: the flat `adb_body` key holds the full text shown when the notification is expanded, and `adb_template_properties.adb_collapsed_text` holds the short text shown when it is collapsed. When `adb_collapsed_text` is absent, the collapsed state falls back to `adb_body`.

## Configuration

No additional `AndroidManifest.xml` configuration is required.

## Properties

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :--------------- |
| Payload Version | ⛔️ | `adb_version` | string | Version of the payload assigned by the authoring UI. Defaults to `"1"` when absent. Must be a top level key, not nested inside `adb_template_properties`. |
| Template Type | ✅ | `adb_template_type` | string | Identifies the template to render. The big text template uses a value of `"ajo_bigtext"`. |
| Title | ✅ | `adb_title` | string | Text shown in the notification's title, in both the collapsed and expanded state. |
| Body (expanded) | ✅ | `adb_body` | string | Full text shown when the notification is expanded. |
| Collapsed Text | ⛔️ | `adb_template_properties.adb_collapsed_text` | string | Short text shown when the notification is collapsed. Falls back to `adb_body` when absent. |
| Large Icon | ⛔️ | `adb_template_properties.adb_large_icon` | string | URL of the large side icon, shown in both the collapsed and expanded state. Always rendered center-cropped; there is no scale type option. Lives inside `adb_template_properties`, not as a flat, top level `adb_large_icon` key. |
| Sound | ⛔️ | `adb_sound` | string | Sound played when the notification is delivered. |
| Small Icon | ⛔️ | `adb_small_icon` | string | Name of a small icon to use in the notification. Falls back to the legacy `adb_icon` key. The notification is not displayed without a small icon. |
| Link URI | ⛔️ | `adb_uri` | string | URI handled when the user clicks the notification. |
| Link Type | ⛔️ | `adb_a_type` | string | Type of link represented in `adb_uri`. Required if `adb_uri` is specified. |
| Button(s) | ⛔️ | `adb_act` | string | An encoded JSON string of one to three action button objects (`label`, `uri`, `type`). |
| Channel ID | ⛔️ | `adb_channel_id` | string | The notification's channel ID. Falls back to a default "General Notifications" channel when absent. |
| Badge Count | ⛔️ | `adb_n_count` | string | Value to show on the app's badge. |
| Priority | ⛔️ | `adb_n_priority` | string | Notification priority (API < 26) or channel importance (API >= 26). |
| Visibility | ⛔️ | `adb_n_visibility` | string | Notification visibility on the lock screen. |
| Tag | ⛔️ | `adb_tag` | string | Replaces an existing notification with the same tag, instead of creating a new one. |
| Sticky | ⛔️ | `adb_sticky` | boolean | When `true`, the notification persists after the user clicks it, instead of auto-dismissing. |
| Ticker | ⛔️ | `adb_ticker` | string | Ticker text sent to accessibility services. |

Not supported by this template: the `adb_clr_*` color keys and the "remind later" keys (`adb_rem_txt`, `adb_rem_ts`).

## Example

```json
{
   "message":{
      "android":{
         "data":{
            "adb_version": "1",
            "adb_template_type": "ajo_bigtext",
            "adb_title": "Your order shipped",
            "adb_body": "Your order #4471 has shipped and is on its way. Track your package for real-time delivery updates and an estimated arrival date.",
            "adb_template_properties": "{\"adb_collapsed_text\":\"Your order has shipped\",\"adb_large_icon\":\"https://example.com/box.png\"}",
            "adb_small_icon": "ic_notification",
            "adb_channel_id": "orders"
         }
      }
   }
}
```
