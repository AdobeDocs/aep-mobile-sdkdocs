---
title: NotificationBuilderPlugin
description: The UI plugin class that renders Adobe Journey Optimizer push templates on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- UI plugin
- NotificationBuilderPlugin
- Class
- Android
---

# NotificationBuilderPlugin

The [UI plugin](../../../home/base/mobile-core/plugins/built-in-plugins/ui-plugin/index.md) class. Register it with Mobile Core so the Messaging extension can render push templates: [Basic](../push-notification/push-templates/android/basic.md) (`ajo_basic`) and [Big text](../push-notification/push-templates/android/big-text.md) (`ajo_bigtext`).

`NotificationBuilderPlugin` is available on Android only.

## Class Definition

Package `com.adobe.marketing.mobile.notificationbuilder`, in the `notificationbuilder` add-on. Implements the Mobile Core `IUiTemplatePlugin` contract.

```kotlin
class NotificationBuilderPlugin : IUiTemplatePlugin
```

## Constructor

### NotificationBuilderPlugin()

Creates the plugin. It takes no parameters.

**Example**

Add the `notificationbuilder` dependency, then register the plugin once, in `Application.onCreate`, after `MobileCore.registerExtensions(...)`:

```groovy
implementation "com.adobe.marketing.mobile:notificationbuilder:<NOTIFICATIONBUILDER_VERSION>"
```

```kotlin
MobileCore.addPlugins(NotificationBuilderPlugin())
```

```java
MobileCore.addPlugins(new NotificationBuilderPlugin());
```

## Methods

### buildPushTemplateNotification

Builds the notification for a push template. The Messaging extension calls this method when a push carries the `adb_template_type` key; your app does not call it.

```kotlin
override fun buildPushTemplateNotification(
    messageData: Map<String, String>,
    trackingProvider: IPushTemplateTrackingProvider
): Notification?
```

#### Parameters

* _messageData_: The push data, plus the `messageId` and `notificationId` keys added by the Messaging extension.
* _trackingProvider_: The Messaging extension's `IPushTemplateTrackingProvider`, which supplies the `PendingIntent` for each interaction on the notification.

#### Returns

The built `Notification`, which the Messaging extension posts and tracks. Returns `null` for a template type other than `ajo_basic` and `ajo_bigtext`, or when the notification cannot be built; the Messaging extension then falls back to a plain notification.

## Related pages

* [UI plugin](../../../home/base/mobile-core/plugins/built-in-plugins/ui-plugin/index.md)
* [Push templates troubleshooting](../push-notification/push-templates/android/troubleshooting.md)
