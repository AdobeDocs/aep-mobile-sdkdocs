---
title: UI plugin
description: How the UI plugin works with Mobile Core and the Messaging extension to render push template notifications (basic, big text) on Android.
keywords:
- Mobile Core
- Plugin
- Built-in plugins
- UI plugin
- Push templates
- NotificationBuilderPlugin
- IUiTemplatePlugin
- IPushTemplateTrackingProvider
- ajo_basic
- ajo_bigtext
- Android
---

# UI plugin

The UI plugin ([`NotificationBuilderPlugin`](../../../../../../edge/adobe-journey-optimizer/public-classes/notification-builder-plugin.md), in the `notificationbuilder` add-on) is a [Mobile Core plugin](../../index.md) that builds a push template notification from an Adobe Journey Optimizer push. For the plugin mechanism itself (contracts, registration, and resolution), see [Mobile Core plugins](../../index.md).

This page documents the two templates currently supported: [Basic](basic-push-template.md) (`ajo_basic`) and [Big text](big-text-push-template.md) (`ajo_bigtext`).

## Contract

`NotificationBuilderPlugin` implements `IUiTemplatePlugin`. The host extension passes it an `IPushTemplateTrackingProvider`, which supplies every `PendingIntent` on the notification. All three types below are in the Mobile Core `com.adobe.marketing.mobile.plugin` package.

```kotlin
interface IUiTemplatePlugin : IAepPlugin {
    fun buildPushTemplateNotification(
        messageData: Map<String, String>,
        trackingProvider: IPushTemplateTrackingProvider
    ): Notification?
}

// Implemented by the host extension.
interface IPushTemplateTrackingProvider {
    fun getPendingIntent(interaction: PushInteraction): PendingIntent?
}

class PushInteraction(
    val type: String,
    val actionUri: String? = null,
    val actionId: String? = null,
    val templateExtras: Map<String, String>? = null,
    val mutablePendingIntent: Boolean = false
)
```

* `buildPushTemplateNotification` receives the push data plus two keys the host adds: `messageId`, the push message ID, and `notificationId`, the ID the host posts the notification with. The plugin gets the application `Context` from Mobile Core, so the method does not take one.
* `getPendingIntent` is how the plugin asks the host for the `PendingIntent` behind each interaction. The basic and big text templates request `content_click` (a tap on the notification body), `button_click` (a tap on an action button), and `dismiss`. The host returns an intent that targets its own tracking components, or `null` for an interaction it does not handle; the plugin then leaves that action unwired.

The plugin **builds and returns the notification**; it does not post or track it. The Messaging extension posts the returned `Notification`, and taps and dismissals are tracked through Messaging's own components. Because of this, the `notificationbuilder` add-on depends only on Mobile Core, and the Messaging extension does not depend on the add-on.

## How a push template is processed

When a push carries the `adb_template_type` key, the Messaging extension resolves the plugin with `MobileCore.getPlugin(IUiTemplatePlugin::class.java)` and calls `buildPushTemplateNotification`:

```
Push (adb_template_type)
        │
        ▼
   Messaging resolves IUiTemplatePlugin
        │
        ├── no plugin registered ──▶ log a warning, report a diagnostic event, fall back to a basic notification
        │
        ▼
   Plugin builds the Notification for the requested template
        │
        ├── returns null ──▶ log a warning, fall back to a basic notification
        │
        ▼
   Messaging posts the Notification and tracks it
```

1. **Detect.** Messaging reads the `adb_template_type` key from the incoming push data.
2. **Resolve.** Messaging calls `MobileCore.getPlugin(IUiTemplatePlugin::class.java)`. If no plugin is registered, Messaging logs a warning, reports a `no_plugin` diagnostic event, and falls back to a basic notification. See [Push templates troubleshooting](../../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/troubleshooting.md).
3. **Build.** Messaging adds the `messageId` and `notificationId` keys, uses its default notification channel when the push has no `adb_channel_id`, and calls `buildPushTemplateNotification` with its tracking provider. The plugin returns `null` for a template type other than `ajo_basic` and `ajo_bigtext`, or when the notification cannot be built. The plugin catches its own errors, so a build failure never crashes the host's FCM callback.
4. **Post and track.** Messaging posts the `Notification` and records delivery, as it does for any other push. When the plugin returns `null`, Messaging logs a warning and posts a basic notification instead.

A basic notification is the notification Messaging builds from the standard payload keys, the same one it builds for a push without `adb_template_type`.

This is the SDK-rendered path, and it is the only path that renders a push template: it runs inside `MessagingService.handleRemoteMessage`, so a push template only renders when the push reaches the Messaging extension through the standard automatic display and tracking integration.

## Prerequisites

* Mobile Core `<MOBILE_CORE_VERSION>` and Messaging `<MESSAGING_VERSION>` or later. Earlier Messaging versions do not use the plugin, even when it is registered.
* The [automatic display and tracking](../../../../../../edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking.md) setup: sync the push token and register the Messaging `FirebaseMessagingService` (or forward to `MessagingService.handleRemoteMessage` from your own service).

<InlineAlert variant="warning" slots="text"/>

A push template is not rendered by [manual display and tracking](../../../../../../edge/adobe-journey-optimizer/push-notification/android/manual-display-and-tracking.md). Building the notification yourself from `MessagingPushPayload` skips the plugin entirely, so a push carrying `adb_template_type` renders as a plain notification instead of the requested template.

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

If your app does not add this dependency, or does not register the plugin, a push carrying `adb_template_type` falls back to a basic notification and Messaging logs a warning. The app does not crash. See [Push templates troubleshooting](../../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/troubleshooting.md).

## Supported templates

* [Basic](basic-push-template.md) (`ajo_basic`): a title, a body, and an expanded hero image.
* [Big text](big-text-push-template.md) (`ajo_bigtext`): a title, a short collapsed body, a longer expanded body, and an optional large side icon.
