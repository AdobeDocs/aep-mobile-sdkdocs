---
title: Android push templates troubleshooting
description: How Android apps display push template campaigns on earlier Messaging versions or without the UI plugin, and the diagnostic event Messaging reports.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- Troubleshooting
- UI plugin
- Android
---

# Push templates troubleshooting

A push template is rendered only when the app uses Messaging `<MESSAGING_VERSION>` or later and has the [UI plugin](../../../../../home/base/mobile-core/plugins/built-in-plugins/ui-plugin/index.md) registered. In every other case the push still displays, as a plain notification built from the standard payload keys.

| **Messaging version** | **UI plugin registered** | **Result** |
| :-------------------- | :----------------------- | :--------- |
| `<MESSAGING_VERSION>` or later | Yes | The push template is rendered. |
| `<MESSAGING_VERSION>` or later | No | Plain notification. Messaging also reports a `no_plugin` [diagnostic event](#diagnostic-event). |
| Earlier than `<MESSAGING_VERSION>` | Yes or no | Plain notification. Earlier versions do not use the plugin. |

## Push template campaigns on earlier Messaging versions

A campaign that sends a push template keeps working on apps with a Messaging version earlier than `<MESSAGING_VERSION>`, including a new campaign that uses the default `ajo_basic` template. The push displays as a rich media push did before push templates: when it carries an image (`adb_image`), the image is shown with Android's [`BigPictureStyle`](https://developer.android.com/reference/androidx/core/app/NotificationCompat.BigPictureStyle) notification style; without an image, the notification shows the title and body.

This works because a push template payload still carries the standard payload keys, such as `adb_title`, `adb_body`, and `adb_image`. Earlier Messaging versions read those keys as they always have, and ignore `adb_template_type` and `adb_template_properties`. Fields that only a template uses, such as the big text template's collapsed text and large icon, are not shown.

## UI plugin not added

With any Messaging version, earlier or later than `<MESSAGING_VERSION>`, an app that does not register the UI plugin displays a push template as a plain notification, as described above, even when the payload comes from a new campaign. To render the templates, add the plugin and register it with `MobileCore.addPlugins(NotificationBuilderPlugin())`. See [Add the plugin](../../../../../home/base/mobile-core/plugins/built-in-plugins/ui-plugin/index.md#add-the-plugin).

With Messaging `<MESSAGING_VERSION>` or later, Messaging also logs a warning and reports a `no_plugin` [diagnostic event](#diagnostic-event).

## Template not rendered with the UI plugin registered

* **The plugin could not build the template.** The plugin builds only `ajo_basic` and `ajo_bigtext`. For any other template type, or when the notification cannot be built, it returns no notification, and Messaging logs a warning and falls back to a plain notification. No diagnostic event is reported for this case.
* **The app displays pushes itself.** Building the notification yourself from `MessagingPushPayload` skips the plugin, so the push displays as a plain notification. Use [automatic display and tracking](../../android/automatic-display-and-tracking.md) instead of [manual display and tracking](../../android/manual-display-and-tracking.md).

## Diagnostic event

When a push template arrives and no UI plugin is registered, Messaging `<MESSAGING_VERSION>` or later dispatches this event on the Mobile Core event hub. It is not sent to the Edge Network, so it is not written to the Adobe Journey Optimizer tracking dataset. Inspect it with [Adobe Experience Platform Assurance](../../../../../home/base/assurance/index.md), or process it on the device with a [rule](../../../../../home/base/mobile-core/rules-engine/index.md).

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

See also: [Basic template](basic.md), [Big text template](big-text.md), [Rich Media Push Notifications](../../rich-media-notifications-overview.md).
