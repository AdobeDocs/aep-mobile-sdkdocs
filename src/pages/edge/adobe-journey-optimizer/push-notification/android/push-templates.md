---
title: Push templates (Android)
description: Add the notificationbuilder plugin to render Adobe Journey Optimizer rich push templates (basic and big text) on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- Android
- ajo_basic
- ajo_bigtext
- NotificationBuilderPlugin
---

# Push templates (Android)

Adobe Journey Optimizer can send a push that renders as a richer, pre-built layout instead of a standard notification. On Android, this rendering is delivered through the [Mobile Core plugin mechanism](../../../../home/base/mobile-core/plugins/index.md): the `notificationbuilder` add-on module registers a [push templates plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/push-templates-plugin.md) that builds the notification, and the Messaging extension posts and tracks it exactly as it does for any other push.

This page documents the two templates currently supported: **basic** (`ajo_basic`) and **big text** (`ajo_bigtext`).

## Prerequisites

Push templates render only on the automatic display and tracking path. Complete the [automatic display and tracking](automatic-display-and-tracking.md) setup first: sync the push token and register the Messaging `FirebaseMessagingService` (or forward to `MessagingService.handleRemoteMessage` from your own service).

<InlineAlert variant="warning" slots="text"/>

A push template is not rendered by [manual display and tracking](manual-display-and-tracking.md). Building the notification yourself from `MessagingPushPayload` skips the plugin entirely, so a push carrying `adb_template_type` renders as a plain notification instead of the requested template.

## Add the plugin

Add the `notificationbuilder` dependency and register `NotificationBuilderPlugin` once, in your `Application.onCreate`, after `MobileCore.registerExtensions(...)`:

```groovy
implementation "com.adobe.marketing.mobile:notificationbuilder:<NOTIFICATIONBUILDER_VERSION>"
```

```kotlin
MobileCore.addPlugins(NotificationBuilderPlugin())
```

```java
MobileCore.addPlugins(new NotificationBuilderPlugin());
```

<InlineAlert variant="info" slots="text"/>

If your app does not add this dependency, or does not register the plugin, a push carrying `adb_template_type` falls back to a basic notification. This is a non-event: no crash, just a log warning.

## Payload keys

Every push template push carries the top level `adb_template_type` key, and optionally `adb_version`, both described in [Push notification payload keys](../push-payload.md). The template-specific fields below live inside the `adb_template_properties` key, a JSON-encoded string.

<InlineAlert variant="warning" slots="text"/>

`adb_version` is optional and defaults to `"1"` when absent. If you do set it, it must be a top level key in the push data, not nested inside `adb_template_properties` - nesting it there means it is not read, and the default is used instead.

Both templates also use the shared keys already documented in [Push notification payload keys](../push-payload.md): `adb_title`, `adb_body`, `adb_sound`, `adb_n_count`, `adb_n_priority`, `adb_n_visibility`, `adb_channel_id`, `adb_small_icon` (or the legacy `adb_icon`), `adb_a_type`, `adb_uri`, `adb_act`, `adb_tag`, `adb_sticky`, and `adb_ticker`. Neither template supports the `adb_clr_*` color keys or the "remind later" keys (`adb_rem_txt`, `adb_rem_ts`).

## Basic template (`ajo_basic`)

A title, a body, and an expanded hero image. There is no large side icon.

| **Key** | **Type** | **Description** |
| :------ | :------- | :--------------- |
| `adb_image` | String | URL of the hero image shown when the notification is expanded. |
| `adb_template_properties.adb_image_scale_type` | String | How the hero image scales inside its frame. One of `center_crop` (default) or `fit_center`. |

Sample payload:

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

## Big text template (`ajo_bigtext`)

A title, a short collapsed body, a longer expanded body, and an optional large side icon. There is no hero image.

<InlineAlert variant="info" slots="text"/>

Body text is split across two keys: the flat `adb_body` key holds the full text shown when the notification is expanded, and `adb_template_properties.adb_collapsed_text` holds the short text shown when it is collapsed. When `adb_collapsed_text` is absent, the collapsed state falls back to `adb_body`.

| **Key** | **Type** | **Description** |
| :------ | :------- | :--------------- |
| `adb_template_properties.adb_collapsed_text` | String | Short text shown in the collapsed state. Falls back to `adb_body` when absent. |
| `adb_template_properties.adb_large_icon` | String | URL of the large side icon, shown in both the collapsed and expanded state. Always rendered center-cropped; there is no scale type option. |

<InlineAlert variant="warning" slots="text"/>

The large icon for this template is the `adb_large_icon` key **inside** `adb_template_properties`. The flat, top level `adb_large_icon` key (used by other push notification types) is not read by this template.

Sample payload:

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
