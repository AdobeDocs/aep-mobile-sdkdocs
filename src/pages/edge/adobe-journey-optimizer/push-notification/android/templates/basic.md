---
title: Basic push template (ajo_basic) - Android
description: Payload keys and a sample payload for the Adobe Journey Optimizer Basic push template (ajo_basic) on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Rich Media
- Push Templates
- Android
- ajo_basic
---

# Basic template (`ajo_basic`)

A title, a body, and an expanded hero image. There is no large side icon. The same `adb_body` text is shown in both the collapsed and expanded state; `adb_body_ex` has no effect on this template.

<InlineAlert variant="info" slots="text"/>

This template renders only when the [push templates plugin](../../../../../home/base/mobile-core/plugins/built-in-plugins/push-templates-plugin/index.md) (`notificationbuilder`) is added to the app and registered with `MobileCore.addPlugins(...)`. Without it, this push falls back to a plain notification.

## Configuration

No additional `AndroidManifest.xml` configuration is required.

## Properties

In addition to the top level keys documented on [Push notification payload keys](../../push-payload.md) (`adb_title`, `adb_body`, `adb_icon`, `adb_sound`, `adb_channel_id`, `adb_n_count`, `adb_n_priority`, `adb_n_visibility`, `adb_a_type`, `adb_uri`, `adb_act`), this template reads:

| **Field** | **Required** | **Key** | **Type** | **Description** |
| :-------- | :----------- | :------ | :------- | :--------------- |
| Template Type | ✅ | `adb_template_type` | string | Identifies the template to render. The basic template uses a value of `"ajo_basic"`. |
| Payload Version | ⛔️ | `adb_version` | string | Version of the payload assigned by the authoring UI. Defaults to `"1"` when absent. |
| Image | ⛔️ | `adb_image` | string | URL of the hero image shown when the notification is expanded. |
| Image Scale Type | ⛔️ | `adb_template_properties.adb_image_scale_type` | enum | How the hero image scales inside its frame. One of `center_crop` (default) or `fit_center`. |

Not supported by this template: the `adb_clr_*` color keys, `adb_body_ex`, and the "remind later" keys (`adb_rem_txt`, `adb_rem_ts`).

## Example

```json
{
   "message":{
      "android":{
         "data":{
            "adb_template_type": "ajo_basic",
            "adb_version": "1",
            "adb_title": "AJO Basic - Center Crop",
            "adb_body": "This image is scaled using CENTER_CROP.",
            "adb_image": "https://example.com/hero.png",
            "adb_icon": "ic_launcher_background",
            "adb_sound": "bells",
            "adb_channel_id": "ajo_basic_channel",
            "adb_n_count": "1",
            "adb_n_priority": "PRIORITY_HIGH",
            "adb_n_visibility": "PUBLIC",
            "adb_a_type": "WEBURL",
            "adb_uri": "https://www.adobe.com",
            "adb_act": "[{\"label\":\"Learn More\",\"uri\":\"https://www.adobe.com\",\"type\":\"WEBURL\"}]",
            "adb_template_properties": "{\"adb_image_scale_type\":\"center_crop\"}"
         }
      }
   }
}
```

<InlineAlert variant="info" slots="text"/>

`adb_template_properties` is a JSON-encoded string, like `adb_act` above - FCM data messages only allow string values. The object shown inside it (`{"adb_image_scale_type": "center_crop"}`) is the decoded shape.

See also: [Big text template](big-text.md).
