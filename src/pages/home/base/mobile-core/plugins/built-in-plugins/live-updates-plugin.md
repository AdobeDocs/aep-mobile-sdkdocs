---
title: Live Updates plugin
description: An overview of the Live Updates plugin, which lets the Adobe Journey Optimizer extension display and track Android Live Updates.
keywords:
- Mobile Core
- Plugins
- Live Updates
- LiveUpdatePlugin
- Adobe Journey Optimizer
- Android
---

# Live Updates plugin

<InlineAlert variant="info" slots="text"/>

The Live Updates plugin is available for **Android only**, starting with Live Updates **3.0.0**, Messaging **3.13.0**, and Mobile Core **3.10.0** (BOM **3.24.0**).

The Live Updates plugin (`LiveUpdatePlugin`) is a [Mobile Core plugin](../index.md) that lets the Adobe Journey Optimizer extension display Android Live Updates. Live Updates are ongoing notifications that show the progress of an activity, such as a delivery or a ride, and that you start, update, and end with push notifications sent from Adobe Journey Optimizer.

When your app receives a Live Update push notification, the Adobe Journey Optimizer extension passes it to the Live Updates plugin. The plugin displays the notification and tracks its lifecycle and interaction events in Adobe Journey Optimizer.

When Android promotes the notification, it is displayed as a Live Update. Otherwise, it is displayed as a standard ongoing notification. See [Promotion to a Live Update](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md#promotion-to-a-live-update).

## Add the Live Updates plugin to your app

### Include the plugin as an app dependency

Add the `liveupdates` dependency to your app, along with Mobile Core, Edge Network, and the Adobe Journey Optimizer extension. For the complete list of dependencies, see [Live Updates dependencies](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md#dependencies).

<InlineAlert variant="info" slots="text"/>

The Live Updates plugin requires your app to compile against Android API level 36.1 or later.

### Add the plugin to Mobile Core

Add the plugin with the `MobileCore.addPlugins` API in the `onCreate` method of your `Application` class, before you initialize the SDK. Create the plugin with an `ILiveUpdateStyleProvider` that defines how Live Update notifications are styled in your app.

<CodeBlock slots="heading, code" repeat="2" languages="Kotlin, Java" />

#### Kotlin

```kotlin
MobileCore.addPlugins(LiveUpdatePlugin(MyLiveUpdateStyleProvider()))
MobileCore.initialize(this, "ENVIRONMENT_ID")
```

#### Java

```java
MobileCore.addPlugins(new LiveUpdatePlugin(new MyLiveUpdateStyleProvider()));
MobileCore.initialize(this, "ENVIRONMENT_ID");
```

For more information about adding plugins, see [Add plugins to your app](../index.md#add-plugins-to-your-app).

## Behavior when the plugin is not added

If your app receives a Live Update push notification and the Live Updates plugin is not added, the Adobe Journey Optimizer extension logs a warning and does not display the notification. Other push notifications are not affected.

## Next steps

* [Live Updates overview](../../../../../edge/adobe-journey-optimizer/live-activities/android/index.md)
* [Live Updates implementation tutorial](../../../../../edge/adobe-journey-optimizer/live-activities/android/tutorial.md)
* [Live Updates API reference](../../../../../edge/adobe-journey-optimizer/live-activities/android/api-reference.md)
* [LiveUpdatePlugin class reference](../../../../../edge/adobe-journey-optimizer/live-activities/android/public-classes/live-update-plugin.md)
