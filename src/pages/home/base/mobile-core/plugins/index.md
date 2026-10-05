---
title: Mobile Core plugins
description: An overview of Mobile Core plugins, how they differ from extensions, and how to add plugins such as Live Updates and push templates to your app.
keywords:
- Mobile Core
- Plugins
- Product overview
- Live Updates
- Push templates
- Android
---

# Plugins

<InlineAlert variant="info" slots="text"/>

Plugins are available for **Android only**, starting with Mobile Core **3.10.0** (BOM **3.23.0**).

Plugins are optional modules that add a specific capability to an Adobe Experience Platform Mobile SDK extension. For example, the Adobe Journey Optimizer extension uses the Live Updates plugin to display Android Live Updates, and the push templates plugin to display Adobe Journey Optimizer push templates.

You add plugins to Mobile Core when your app starts, before you register extensions. When an extension needs a capability, it uses the matching plugin that your app registered. If your app does not use a capability, you do not need to include or register its plugin.

## Plugins and extensions

Extensions and plugins are both modules that you add to your app, but they serve different purposes.

|  | Extensions | Plugins |
| --- | --- | --- |
| **Purpose** | Provide the features of an Adobe solution or service, such as Analytics, Edge Network, or Adobe Journey Optimizer. | Provide a specific capability to an extension, such as rendering push templates. |
| **Registration** | Registered with the `MobileCore.initialize` or `MobileCore.registerExtensions` API. | Registered with the [`MobileCore.addPlugins`](../api-reference.md#addplugins) API. |
| **How they work** | First-class components of the SDK. Each extension supports a set of related features and provides public APIs that your app uses to interact with the extension. | Additional, optional features that are developed separately from extensions, so your app can include them only if needed. |
| **Requirements** | Depend only on their core dependencies and must be registered with Mobile Core. | Used by extensions, so they must be added before the extensions that use them are registered. |
| **When not added** | The features of the extension are not available. | The features of the plugin are not available. |

## Benefits

* **Include only what you use**: A capability that lives in a plugin is not part of the extension. Apps that do not use the capability do not need the plugin or its dependencies.
* **Adopt new platform features independently**: A plugin can use newer Android APIs and libraries than the extension that uses it. For example, the Live Updates plugin is built on Android 16 (API 36) notification APIs, while the Adobe Journey Optimizer extension does not require them.
* **Fall back safely**: If a plugin is not registered, the extension that uses it logs a warning and continues to work.

## Available plugins

The following plugins are available for the Adobe Journey Optimizer extension.

| Plugin | Capability | Artifact | Minimum versions | Minimum BOM version |
| --- | --- | --- | --- | --- |
| Live Updates (`LiveUpdatePlugin`) | Displays and tracks Android Live Updates sent from Adobe Journey Optimizer. Live Updates are ongoing notifications that show the progress of an activity, such as a delivery or a ride. | `com.adobe.marketing.mobile:liveupdates` | Live Updates 3.0.0, Messaging 3.13.0, Mobile Core 3.10.0 | 3.24.0 |
| Push templates (`NotificationBuilderPlugin`) | Renders Adobe Journey Optimizer push templates. The Adobe Journey Optimizer extension displays and tracks the resulting notification. | `com.adobe.marketing.mobile:notificationbuilder` | Notification Builder 3.1.0, Messaging 3.13.0, Mobile Core 3.10.0 | 3.23.0 |

<InlineAlert variant="warning" slots="text"/>

Starting with Messaging **3.13.0** (BOM **3.23.0**), the Adobe Journey Optimizer extension no longer includes the Notification Builder library. To continue displaying Adobe Journey Optimizer push templates, add the `notificationbuilder` dependency to your app and register the `NotificationBuilderPlugin`.

## Add plugins to your app

### Include plugins as app dependencies

Add the plugins that you want to use, along with Mobile Core and the Adobe Journey Optimizer extension, as dependencies to your project.

#### Android Kotlin

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:edge")
implementation("com.adobe.marketing.mobile:edgeidentity")
implementation("com.adobe.marketing.mobile:messaging")
implementation("com.adobe.marketing.mobile:liveupdates")
implementation("com.adobe.marketing.mobile:notificationbuilder")
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../../resources/manage-gradle-dependencies.md) for more information.

#### Android Groovy

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:edge'
implementation 'com.adobe.marketing.mobile:edgeidentity'
implementation 'com.adobe.marketing.mobile:messaging'
implementation 'com.adobe.marketing.mobile:liveupdates'
implementation 'com.adobe.marketing.mobile:notificationbuilder'
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../../resources/manage-gradle-dependencies.md) for more information.

### Register plugins with Mobile Core

Register your plugins with the `MobileCore.addPlugins` API in the `onCreate` method of your `Application` class, before you initialize the SDK. This ensures that plugins are available when extensions start processing, including when your app is started by a push notification.

You can register one or more plugins in a single call. Registering the same plugin instance more than once has no effect.

#### Android Kotlin

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.messaging.liveupdate.LiveUpdatePlugin
import com.adobe.marketing.mobile.notificationbuilder.NotificationBuilderPlugin
...
import android.app.Application
...

class MainApp : Application() {
  override fun onCreate() {
    super.onCreate()
    MobileCore.addPlugins(
      NotificationBuilderPlugin(),
      LiveUpdatePlugin(MyLiveUpdateStyleProvider())
    )

    MobileCore.initialize(this, "ENVIRONMENT_ID")
  }
}
```

#### Android Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.messaging.liveupdate.LiveUpdatePlugin;
import com.adobe.marketing.mobile.notificationbuilder.NotificationBuilderPlugin;
...
import android.app.Application;
...
public class MainApp extends Application {
  @Override
  public void onCreate(){
    super.onCreate();
    MobileCore.addPlugins(
      new NotificationBuilderPlugin(),
      new LiveUpdatePlugin(new MyLiveUpdateStyleProvider())
    );

    MobileCore.initialize(this, "ENVIRONMENT_ID");
  }
}
```

In the examples above, `MyLiveUpdateStyleProvider` is a class in your app that implements `ILiveUpdateStyleProvider` and defines how Live Update notifications are styled.

## Behavior when a plugin is not registered

If your app receives a push notification that requires a plugin that is not registered, the Adobe Journey Optimizer extension logs a warning and handles the notification as follows:

| Push notification | Behavior without the plugin |
| --- | --- |
| Live Update | The notification is not displayed. |
| Push template | A basic notification is displayed instead of the push template. |

## API reference

| API | Description |
| --- | --- |
| [addPlugins](../api-reference.md#addplugins) | Registers one or more plugins with Mobile Core. |
| [getPlugin](../api-reference.md#getplugin) | Returns the registered plugin for a given plugin type. This API is used by extensions. |
