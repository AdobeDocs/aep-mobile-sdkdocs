---
title: Basic push template (ajo_basic)
description: Configuration, properties, and a sample payload for the Adobe Journey Optimizer Basic push template (ajo_basic), rendered by the push templates plugin on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- Android
- ajo_basic
- NotificationBuilderPlugin
---

# Basic template (`ajo_basic`)

A title, a body, and an expanded hero image. There is no large side icon. The same `adb_body` text is shown in both the collapsed and expanded state; `adb_body_ex` has no effect on this template.

See the [push templates plugin](index.md) for the mechanism, prerequisites, and how to add the plugin.

## Configuration

No additional `AndroidManifest.xml` configuration is required. Unlike the Campaign Classic basic template, the AJO basic template does not support "remind later", so `USE_EXACT_ALARM` is not needed.

## Properties

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :--------------- |
| Payload Version | ⛔️ | `adb_version` | string | Version of the payload assigned by the authoring UI. Defaults to `"1"` when absent. Must be a top level key, not nested inside `adb_template_properties`. |
| Template Type | ✅ | `adb_template_type` | string | Identifies the template to render. The basic template uses a value of `"ajo_basic"`. |
| Title | ✅ | `adb_title` | string | Text shown in the notification's title, in both the collapsed and expanded state. |
| Body | ✅ | `adb_body` | string | Text shown in the notification's body, in both the collapsed and expanded state. |
| Image | ⛔️ | `adb_image` | string | URL of the hero image shown when the notification is expanded. |
| Image Scale Type | ⛔️ | `adb_template_properties.adb_image_scale_type` | string | How the hero image scales inside its frame. One of `center_crop` (default) or `fit_center`. |
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

Not supported by this template: the `adb_clr_*` color keys, `adb_body_ex`, and the "remind later" keys (`adb_rem_txt`, `adb_rem_ts`).

## Example

```json
{
   "message":{
      "android":{
         "data":{
            "adb_version": "1",
            "adb_template_type": "ajo_basic",
            "adb_title": "Flash sale",
            "adb_body": "50% off today only",
            "adb_image": "https://example.com/hero.png",
            "adb_template_properties": "{\"adb_image_scale_type\":\"fit_center\"}",
            "adb_small_icon": "ic_notification",
            "adb_channel_id": "promotions",
            "adb_act": "[{\"label\":\"Shop now\",\"uri\":\"myapp://shop\",\"type\":\"DEEPLINK\"}]"
         }
      }
   }
}
```
