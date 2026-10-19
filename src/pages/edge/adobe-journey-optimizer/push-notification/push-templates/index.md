---
title: Push templates
description: An overview of Adobe Journey Optimizer push templates, which display push notifications with pre-built layouts.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- UI Builder plugin
---

# Push templates

Push templates let you send richer push notifications from Adobe Journey Optimizer without building custom notification layouts in your app. Marketers choose a template, such as a notification with an expanded hero image or with longer expandable text, and author its content in Adobe Journey Optimizer. The Adobe Journey Optimizer extension then displays the notification with the template's pre-built layout and tracks interactions with it, as it does for any other push notification.

Because the layout is built into the SDK, you can change a notification's content in Adobe Journey Optimizer without releasing a new version of your app.

## Supported platforms

| Platform | Support |
| --- | --- |
| Android | Supported with the [UI Builder plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md). |
| iOS | Not supported. |

## Android

### Requirements

To render push templates, your app needs the following:

* Messaging 3.13.0 or later.
* The [UI Builder plugin](../../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md), added to Mobile Core. To add it, see [Add the UI Builder plugin to your app](../../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md#add-the-ui-builder-plugin-to-your-app).
* [Automatic display and tracking](../android/automatic-display-and-tracking.md) of push notifications. With [manual display and tracking](../android/manual-display-and-tracking.md), push templates are displayed as standard notifications.

When these requirements are not met, a push template is displayed as a standard notification, built from the title, body, and image in the payload. For more information, see [Push templates troubleshooting](android/troubleshooting.md).

### Supported templates

| Template | Template type | Description |
| --- | --- | --- |
| [Basic](android/basic.md) | `ajo_basic` | A title, a body, and an expanded hero image. |
| [Big text](android/big-text.md) | `ajo_bigtext` | A title, a short collapsed body, a longer expanded body, and an optional large side icon. |

## Related pages

* [Push notification payload keys](../push-payload.md)
* [Rich Media Push Notifications](../rich-media-notifications-overview.md)
* [NotificationBuilderPlugin class reference](../../public-classes/notification-builder-plugin.md)
