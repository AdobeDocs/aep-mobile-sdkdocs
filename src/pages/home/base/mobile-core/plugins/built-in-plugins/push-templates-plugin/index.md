---
title: Push templates plugin
description: How the push templates plugin integrates with Mobile Core and the Adobe Journey Optimizer Messaging extension to render rich push template notifications (basic, big text) on Android.
keywords:
- Mobile Core
- Plugin
- Built-in plugins
- Push templates
- NotificationBuilderPlugin
- IUiTemplatePlugin
- ajo_basic
- ajo_bigtext
- Android
---

# Push templates plugin

The push templates plugin (`NotificationBuilderPlugin`, in the `notificationbuilder` add-on) is a [Mobile Core plugin](../../index.md) that builds a rich push template notification from an Adobe Journey Optimizer push. For the plugin mechanism itself - contracts, registration, and resolution - see [Mobile Core plugins](../../index.md).

This page documents the two templates currently supported: [Basic](basic.md) (`ajo_basic`) and [Big text](big-text.md) (`ajo_bigtext`).

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

This is the SDK-rendered path, and it is the only path that renders a push template: it runs inside `MessagingService.handleRemoteMessage`, so a push template only renders when the push reaches the Messaging extension through the standard automatic display and tracking integration.

## Prerequisites

Complete the [automatic display and tracking](../../../../../../edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking.md) setup first: sync the push token and register the Messaging `FirebaseMessagingService` (or forward to `MessagingService.handleRemoteMessage` from your own service).

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

If your app does not add this dependency, or does not register the plugin, a push carrying `adb_template_type` falls back to a basic notification. This is a non-event: no crash, just a log warning.

## Supported templates

* [Basic](basic.md) (`ajo_basic`) - a title, a body, and an expanded hero image.
* [Big text](big-text.md) (`ajo_bigtext`) - a title, a short collapsed body, a longer expanded body, and an optional large side icon.
