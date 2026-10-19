---
title: Android push templates troubleshooting
description: How push template campaigns are displayed without the UI Builder plugin or on earlier Messaging versions, and the diagnostic event reported.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- Troubleshooting
- UI Builder plugin
- Android
---

# Push templates troubleshooting

A push template is rendered only when the app uses Messaging 3.13.0 or later and has the [UI Builder plugin](../../../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md) added. In every other case, the push is still displayed, as a standard notification built from the standard payload keys.

| **Messaging version** | **UI Builder plugin added** | **Result** |
| :-------------------- | :-------------------------- | :--------- |
| 3.13.0 or later | Yes | The push template is rendered. |
| 3.13.0 or later | No | Standard notification. The Adobe Journey Optimizer extension also reports a `no_plugin` [diagnostic event](#diagnostic-event). |
| Earlier than 3.13.0 | Yes or no | Standard notification. Earlier versions do not use the plugin. |

## Push template campaigns on earlier Messaging versions

A campaign that sends a push template keeps working on apps with a Messaging version earlier than 3.13.0, including a new campaign that uses the `ajo_basic` template. The push is displayed as a rich media push was displayed before push templates: when it has an image (`adb_image`), the image is shown with the Android [`BigPictureStyle`](https://developer.android.com/reference/androidx/core/app/NotificationCompat.BigPictureStyle) notification style; without an image, the notification shows the title and body.

This works because a push template payload still includes the standard payload keys, such as `adb_title`, `adb_body`, and `adb_image`. Earlier Messaging versions read those keys and ignore `adb_template_type` and `adb_template_properties`. Fields that only a template uses, such as the big text template's collapsed text and large icon, are not shown.

## UI Builder plugin not added

With any Messaging version, an app that does not add the UI Builder plugin displays a push template as a standard notification, as described above. To render the templates, add the plugin with `MobileCore.addPlugins(NotificationBuilderPlugin())`. See [Add the UI Builder plugin to your app](../../../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md#add-the-ui-builder-plugin-to-your-app).

With Messaging 3.13.0 or later, the Adobe Journey Optimizer extension also logs a warning and reports a `no_plugin` [diagnostic event](#diagnostic-event).

## Template not rendered with the UI Builder plugin added

* **The plugin could not build the template.** The plugin builds only `ajo_basic` and `ajo_bigtext`. For any other template type, or when the notification cannot be built, the Adobe Journey Optimizer extension logs a warning and displays a standard notification. No diagnostic event is reported for this case.
* **The app displays push notifications itself.** Building the notification yourself from `MessagingPushPayload` does not use the plugin, so the push is displayed as a standard notification. Use [automatic display and tracking](../../android/automatic-display-and-tracking.md) instead of [manual display and tracking](../../android/manual-display-and-tracking.md).

## Diagnostic event

When a push template arrives and the UI Builder plugin is not added, the Adobe Journey Optimizer extension (Messaging 3.13.0 or later) dispatches this event on the Mobile Core event hub. The event is not sent to the Edge Network, so it is not written to the Adobe Journey Optimizer tracking dataset. Inspect it with [Adobe Experience Platform Assurance](../../../../../home/base/assurance/index.md), or process it on the device with a [rule](../../../../../home/base/mobile-core/rules-engine/index.md).

| **Event name** | **Event type** | **Event source** |
| :------------- | :------------- | :--------------- |
| `Push Template Render Error` | `com.adobe.eventType.messaging` | `com.adobe.eventSource.errorResponseContent` |

Event data:

| **Key** | **Value** |
| :------ | :-------- |
| `category` | `pushTracking.renderError` |
| `subcategory` | `no_plugin` |
| `xdm` | The push's `_xdm`, unchanged. Absent when the push has no `_xdm`. |

To match the event in a rule, use `~type` equal to `com.adobe.eventType.messaging`, `~source` equal to `com.adobe.eventSource.errorResponseContent`, and `category` equal to `pushTracking.renderError`. Match on `category`, because the Live Updates `no_plugin` event uses the same `subcategory`.

See also: [Basic template](basic.md), [Big text template](big-text.md), [Push templates overview](../index.md).
