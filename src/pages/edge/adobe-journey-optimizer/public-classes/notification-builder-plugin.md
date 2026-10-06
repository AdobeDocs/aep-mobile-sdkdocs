---
title: NotificationBuilderPlugin
description: The UI Builder plugin class that renders Adobe Journey Optimizer push templates on Android.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- Push Templates
- UI Builder plugin
- NotificationBuilderPlugin
- Class
- Android
---

# NotificationBuilderPlugin

The [UI Builder plugin](../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md) class. Add it to Mobile Core so the Adobe Journey Optimizer extension can render push templates: [Basic](../push-notification/push-templates/android/basic.md) (`ajo_basic`) and [Big text](../push-notification/push-templates/android/big-text.md) (`ajo_bigtext`).

`NotificationBuilderPlugin` is available on Android only.

## Class Definition

Implements the Mobile Core `IUiTemplatePlugin` contract. Package `com.adobe.marketing.mobile.notificationbuilder`, in the `notificationbuilder` artifact.

```kotlin
class NotificationBuilderPlugin : IUiTemplatePlugin
```

## Constructor

### NotificationBuilderPlugin()

Creates the plugin. It takes no parameters.

**Example**

Add the plugin once, in `Application.onCreate`, before you initialize the SDK:

#### Android Kotlin

```kotlin
MobileCore.addPlugins(NotificationBuilderPlugin())
```

#### Android Java

```java
MobileCore.addPlugins(new NotificationBuilderPlugin());
```

For the dependencies, see [Add the UI Builder plugin to your app](../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md#add-the-ui-builder-plugin-to-your-app).

## Methods

### buildPushTemplateNotification

Builds the notification for a push template. The Adobe Journey Optimizer extension calls this method when a push carries the `adb_template_type` key; your app does not call it.

```kotlin
override fun buildPushTemplateNotification(
    messageData: Map<String, String>,
    trackingProvider: IPushTemplateTrackingProvider
): Notification?
```

#### Parameters

* _messageData_: The push data.
* _trackingProvider_: Supplies the actions for taps and dismissals on the notification, so the Adobe Journey Optimizer extension can track them.

#### Returns

The built `Notification`, which the Adobe Journey Optimizer extension displays and tracks. Returns `null` for a template type other than `ajo_basic` and `ajo_bigtext`, or when the notification cannot be built. The Adobe Journey Optimizer extension then displays a standard notification.

## Related pages

* [UI Builder plugin](../../../home/base/mobile-core/plugins/built-in-plugins/ui-builder-plugin.md)
* [Push templates troubleshooting](../push-notification/push-templates/android/troubleshooting.md)
