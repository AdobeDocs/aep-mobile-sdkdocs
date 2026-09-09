---
title: Push templates plugin
description: How the push templates plugin integrates with Mobile Core and the Adobe Journey Optimizer Messaging extension to render rich push template notifications on Android.
keywords:
- Mobile Core
- Plugin
- Built-in plugins
- Push templates
- NotificationBuilderPlugin
- IUiTemplatePlugin
- Android
---

# Push templates plugin

The push templates plugin (`NotificationBuilderPlugin`, in the `notificationbuilder` add-on) is a [Mobile Core plugin](../index.md) that builds a rich push template notification from an Adobe Journey Optimizer push. For the plugin mechanism itself - contracts, registration, and resolution - see [Mobile Core plugins](../index.md).

<InlineAlert variant="info" slots="text"/>

This page documents the plugin mechanism and routing only. For the app-facing integration (adding the dependency, registering the plugin) and the supported templates and their payload keys, see [Push templates (Android)](../../../../../edge/adobe-journey-optimizer/push-notification/android/push-templates.md).

## Contract

`NotificationBuilderPlugin` implements `IUiTemplatePlugin`:

```kotlin
interface IUiTemplatePlugin : IAepPlugin {
    fun buildPushTemplateNotification(
        context: Context,
        messageData: Map<String, String>,
        trackerActivityClass: Class<out Activity>?,
        broadcastReceiverClass: Class<out BroadcastReceiver>?
    ): Notification?
}
```

The plugin **builds and returns the notification**; it does not post or track it. Because of this, the `notificationbuilder` add-on depends only on Mobile Core, with no dependency on the Adobe Journey Optimizer Messaging extension. The Messaging extension posts the returned `Notification` and reports its tracking events, exactly as it does for a non-templated push.

## How a push template is processed

When a push carries the `adb_template_type` key, the Messaging extension resolves the plugin with `MobileCore.getPlugin(IUiTemplatePlugin::class.java)` and calls `buildPushTemplateNotification`:

```
Push (adb_template_type)
        │
        ▼
   Messaging resolves IUiTemplatePlugin
        │
        ├── no plugin registered ──▶ log a warning, fall back to a basic notification
        │
        ▼
   Plugin builds the Notification for the requested template
        │
        ├── build fails / returns null ──▶ Messaging drops the push
        │
        ▼
   Messaging posts the Notification and tracks it
```

1. **Detect.** Messaging reads the `adb_template_type` key from the incoming push data.
2. **Resolve.** Messaging calls `MobileCore.getPlugin(IUiTemplatePlugin::class.java)`. If no plugin is registered, Messaging logs a warning and falls back to a basic (non-templated) notification.
3. **Build.** The plugin parses the push data for the requested template and returns a `Notification`, or `null` if it could not build one (for example, an unrecognized template type or missing required field). The plugin catches its own errors so a build failure never crashes the host's FCM callback.
4. **Post and track.** Messaging posts the `Notification` it gets back and dispatches the same tracking events it would for any other push - the app does not do anything different for a templated push.

This is the SDK-rendered path, and it is the only path that renders a push template: it runs inside `MessagingService.handleRemoteMessage`, so a push template only renders when the push reaches the Messaging extension through the standard automatic display and tracking integration. See [Push templates (Android)](../../../../../edge/adobe-journey-optimizer/push-notification/android/push-templates.md) for which templates are documented, their payload keys, and the plugin registration code.
