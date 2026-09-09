---
title: Push Notification Payload
description: This document outlines the various push notification payload keys used by the Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
---

# Push Notification Payload Keys

This document outlines the various push notification payload keys used by the Adobe Journey Optimizer.

## Android

* Adobe Journey Optimizer uses [data messages](https://firebase.google.com/docs/cloud-messaging/concept-options#data_messages) with custom key-value pairs to send push notifications to client apps.
* When using [manual display and tracking](android/manual-display-and-tracking.md), use the [MessagingPushPayload](../public-classes/messaging-push-payload.md) class to extract the payload values.

```json
{
   "message":{
      "android":{
         "collapse_key": "new_message",
         "priority": "HIGH",
         "data":{
            "adb_title":"Game Request",
            "adb_body":"Bob wants to play chess",
            "adb_sound" : "somesound_res",
            "adb_n_count" : "3",
            "adb_n_priority" : "PRIORITY_LOW",
            "adb_channel_id": "cid",
            "adb_icon" : "notification_icon",
            "adb_image": "www.imageUrl.com",           
            "adb_a_type": "DEEPLINK/WEBURL/OPENAPP",
            "adb_uri" : "deeplinkurl/weburl",
            "adb_act": "[{\"label\":\"deeplink\",\"uri\":\"notificationapp://\",\"type\":\"DEEPLINK\"},{\"label\":\"weburl\",\"uri\":\"https://www.yahoo.com\",\"type\":\"WEBURL\"}]",          
            "some_custom_data_key": "some data"
         }
      }
   }
}
```

| **Key** | **Type** | **Description** |
| :------ | :------- | :-------------- |
| `adb_title` | String | The push notification's title. |
| `adb_body` | String | The push notification's body. |
| `adb_sound` | String | The push notification's sound. |
| `adb_n_count` | String | The push notification badge count. |
| `adb_n_priority` | String | The push notification's priority. For more information, please read the [Firebase documentation](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#notificationpriority) |
| `adb_n_visibility` | String | The push notification's visibility on the lock screen. |
| `adb_channel_id` | String | The push notification's channel ID. |
| `adb_icon` | String | The push notification's icon resource name. |
| `adb_image` | String | The URL of the image to be displayed on the notification. |
| `adb_tag` | String | If present and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer. |
| `adb_sticky` | Boolean | When set to `false` or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to `true`, the notification persists even when the user clicks it. |
| `adb_ticker` | String | If present, sets the notification's "ticker" text, which is sent to accessibility services. |
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is clicked. It can be one of the following values: `DEEPLINK`, `WEBURL`, or `OPENAPP`. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open the appropriate webpage or app screen when the notification is clicked. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.label` | String | The label for custom action button. |
| `adb_act.uri` | String | The URI for custom action button. |
| `adb_act.type` | enum | The action type for custom action button. It can be one of the following values: `DEEPLINK`, `WEBURL`, `OPENAPP`. |
| `adb_version` | String | Optional. The payload version assigned by the authoring UI. Applies to a [push template](android/push-templates.md) push; defaults to `"1"` when absent. Must be a top level key, not nested inside `adb_template_properties`. |
| `adb_template_type` | String | Present when the push carries a [push template](android/push-templates.md). Identifies which template to render, for example `ajo_basic` or `ajo_bigtext`. |
| `adb_template_properties` | String (JSON) | Present when the push carries a [push template](android/push-templates.md). A JSON-encoded string carrying the fields specific to the template named in `adb_template_type`. |
| `adb_template_properties.adb_image_scale_type` | String | `ajo_basic` template only. How the hero image (`adb_image`) scales inside its frame. One of `center_crop` (default) or `fit_center`. |
| `adb_template_properties.adb_collapsed_text` | String | `ajo_bigtext` template only. Short text shown when the notification is collapsed. Falls back to `adb_body` when absent. |
| `adb_template_properties.adb_large_icon` | String | `ajo_bigtext` template only. URL of the large side icon, shown in both the collapsed and expanded state and always rendered center-cropped (no scale type option). Note that this key lives inside `adb_template_properties`, not as a flat, top level `adb_large_icon` key. |

<InlineAlert variant="info" slots="text"/>

A push template push is identified by the `adb_template_type` key, currently `ajo_basic` (basic template) or `ajo_bigtext` (big text template). Both templates also use `adb_title`, `adb_body`, `adb_sound`, `adb_n_count`, `adb_n_priority`, `adb_n_visibility`, `adb_channel_id`, `adb_icon`, `adb_tag`, `adb_sticky`, `adb_ticker`, `adb_a_type`, `adb_uri`, and `adb_act` from the table above; neither supports the `adb_clr_*` color keys. See [Push templates](android/push-templates.md) for the plugin setup, a full walkthrough, and a sample payload per template.

## iOS

```json
{
   "aps":{
      "alert":{
         "title": "Hello from CJM",
         "body": "Stay safe, wear a mask"
      },
      "sound": "dingDong",
      "badge":2,
      "mutable-content":1,
      "category": "iosCategory",
      "thread-id": "myGroup",
      "content-available":1
   },
   "some_custom_data_key": "some data",
   "adb_media": "www.imageUrl.com",
   "adb_a_type": "DEEPLINK/WEBURL/OPENAPP",
   "adb_uri": "deeplinkUrl/weburl",
}
```

| **Key** | **Type** | **Description** |
| :------ | :------- | :-------------- |
| `adb_media` | String | The URL of the media. In this situation, media refers to either an image or a video. This URL can be used to download the rich media before showing the push notification. |
| `adb_uri` | String | The URI used for deeplinking. The deeplink is used to open appropriate webpage or app screen when the notification is clicked. |
| `adb_a_type` | enum | An enum that determines what type of action will be performed when the notification is selected. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `OPENAPP`. |
| `adb_act` | Array | An array that contains the action object(s). |
| `adb_act.aid` | String | The ID for the action object. |
| `adb_act.label` | String | The name for the action object. |
| `adb_act.type` | String | The type for the action object. It can be one of the following string values: `DEEPLINK`, `WEBURL`, `OPENAPP`. |

