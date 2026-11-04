---
title: UI Builder plugin
description: An overview of the UI Builder plugin, which builds user interface elements for the Adobe Journey Optimizer extension, starting with Android push templates.
keywords:
- Mobile Core
- Plugins
- UI Builder plugin
- NotificationBuilderPlugin
- Push templates
- Adobe Journey Optimizer
- Android
---

# UI Builder plugin

<InlineAlert variant="info" slots="text"/>

The UI Builder plugin is available for **Android only**, starting with Notification Builder **3.1.0**, Messaging **3.13.0**, and Mobile Core **3.10.0** (BOM **3.23.0**).

The UI Builder plugin is a [Mobile Core plugin](../index.md) that builds user interface elements for content sent from Adobe Journey Optimizer. The Adobe Journey Optimizer extension passes the content to the plugin, which builds the user interface element. The extension then displays the element and tracks interactions with it.

The plugin is published in the `notificationbuilder` artifact, and you add it to Mobile Core as a `NotificationBuilderPlugin`.

## Supported features

The UI Builder plugin supports the following features.

| Feature | Description |
| --- | --- |
| [Push templates](#push-templates) | Displays Adobe Journey Optimizer push notifications with pre-built layouts. |

## Add the UI Builder plugin to your app

### Include the plugin as an app dependency

Add the `notificationbuilder` dependency to your app, along with Mobile Core, Edge Network, Identity for Edge Network, and the Adobe Journey Optimizer extension.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Groovy" />

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:<bom-version>"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:messaging")
implementation("com.adobe.marketing.mobile:notificationbuilder")
```

#### Groovy

```groovy
implementation platform('com.adobe.marketing.mobile:sdk-bom:<bom-version>')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:notificationbuilder'
```

Replace `<bom-version>` with the latest BOM version, listed on [Current SDK versions](../../../../current-sdk-versions.md#android-bom).

For the minimum versions, see [Available plugins](../index.md#available-plugins).

### Add the plugin to Mobile Core

Add the plugin with the `MobileCore.addPlugins` API in the `onCreate` method of your `Application` class, before you initialize the SDK.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
MobileCore.addPlugins(NotificationBuilderPlugin())
MobileCore.initialize(this, "ENVIRONMENT_ID")
```

#### Java

```java
MobileCore.addPlugins(new NotificationBuilderPlugin());
MobileCore.initialize(this, "ENVIRONMENT_ID");
```

For more information about adding plugins, see [Add plugins to your app](../index.md#add-plugins-to-your-app).

## Push templates

[Push templates](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/index.md) are push notifications that Adobe Journey Optimizer sends with a pre-built layout. A push template is identified by the `adb_template_type` key in the push payload. The following templates are supported:

* [Basic](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/basic.md) (`ajo_basic`): a title, a body, and an expanded hero image.
* [Big text](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/big-text.md) (`ajo_bigtext`): a title, a short collapsed body, a longer expanded body, and an optional large side icon.

When your app receives a push template, the Adobe Journey Optimizer extension passes it to the plugin, which builds the notification. The Adobe Journey Optimizer extension then displays the notification and tracks interactions with it, as it does for any other push notification.

<InlineAlert variant="warning" slots="text"/>

Push templates are displayed only with [automatic display and tracking](../../../../../edge/adobe-journey-optimizer/push-notification/android/automatic-display-and-tracking.md). If your app builds notifications itself with [manual display and tracking](../../../../../edge/adobe-journey-optimizer/push-notification/android/manual-display-and-tracking.md), push templates are displayed as standard notifications.

### Behavior when the plugin is not added

If your app receives a push template and the UI Builder plugin is not added, the Adobe Journey Optimizer extension logs a warning and displays the push as a standard notification, built from the title, body, and image in the payload. Your app does not crash, and other push notifications are not affected.

The same happens when the plugin cannot build the notification, for example, for a template type that it does not support. For more information, see [Push templates troubleshooting](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/troubleshooting.md).

## Next steps

* [Push templates overview](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/index.md)
* [Basic push template](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/basic.md)
* [Big text push template](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/big-text.md)
* [Push templates troubleshooting](../../../../../edge/adobe-journey-optimizer/push-notification/push-templates/android/troubleshooting.md)
* [NotificationBuilderPlugin class reference](../../../../../edge/adobe-journey-optimizer/public-classes/notification-builder-plugin.md)
