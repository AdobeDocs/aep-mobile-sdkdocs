---
title: Debugging and Lifecycle Metrics
description: A guide that explains how to enable and use debug logging in your application.
keywords:
- Debug
- Guide
- Logging
- Tutorial
---

# Debugging and lifecycle metrics

## Debug logging

Debug logging is an optional, but a recommended and critical SDK feature.

By enabling logging, you can ensure that the SDK is working as intended. The following table explains levels of logging available and the purpose they serve:

| Log Level | Description |
| :-------- | :---------- |
| Error | This is the default log level used by SDK. This log level provides the details about unrecoverable errors that occurred during SDK implementation. |
| Warning | In addition to the details from _Error_ log level, _Warning_ provides error information during SDK integration. This log level might indicate that a request has been made to the SDK, but the SDK might be unable to perform the requested task. For example, this log level might be used when catching an unexpected, but recoverable, exception and printing its message. |
| Debug | In addition to the details from the _Warning_ log level, _Debug_ also provides high-level information about how the SDK processes network requests/responses data. |
| Verbose | In addition to the details from the _Debug_ level, _Verbose_ provides detailed, low-level information about how the SDK processes database interactions and SDK events. |

<InlineAlert variant="warning" slots="text"/>

Using `Debug` or `Verbose` log levels may cause performance or security concerns. As a result, it is recommended that you use only `Error` or `Warning` log levels in production applications.

To enable debug logging, use the following methods:

### Android Java

```java
MobileCore.setLogLevel(LoggingMode.DEBUG);
// MobileCore.setLogLevel(LoggingMode.VERBOSE);
// MobileCore.setLogLevel(LoggingMode.WARNING);
// MobileCore.setLogLevel(LoggingMode.ERROR);
```

### iOS Swift

```swift
MobileCore.setLogLevel(.debug)
// MobileCore.setLogLevel(.trace)
// MobileCore.setLogLevel(.warning)
// MobileCore.setLogLevel(.error)
```

### iOS Objective-C

```objectivec
[AEPMobileCore setLogLevel:AEPLogLevelDebug];
// [AEPMobileCore setLogLevel:AEPLogLevelTrace];
// [AEPMobileCore setLogLevel:AEPLogLevelWarning];
// [AEPMobileCore setLogLevel:AEPLogLevelError];
```

## Lifecycle metrics

Lifecycle metrics are an optional, but valuable feature provided by the Adobe Experience Platform SDK. It provides out-of-the-box, application lifecycle information about your app user. A complete list of available metrics is provided in the [lifecycle documentation](../base/mobile-core/lifecycle/index.md).

These metrics contain information on the app user's engagement lifecycle such as device information, install or upgrade information, and session start and pause times. You may also set additional lifecycle metrics.

<InlineAlert variant="warning" slots="text"/>

This section shows you how to collect lifecycle metrics. To view, and report on this data in those respective solutions, you need to set up [Adobe Analytics](../../solution/adobe-analytics/index.md) or other Experience Cloud solution extensions.

<InlineAlert variant="success" slots="text"/>

Lifecycle metrics are now available for Edge Network implementations. For more details about the XDM-based lifecycle metrics, see [Lifecycle for Edge Network](../../edge/lifecycle-for-edge-network/index.md).

### Android Java

With the `onResume` function, start Lifecycle data collection:

```java
@Override  
   public void onResume() {  
      MobileCore.setApplication(getApplication());
      MobileCore.lifecycleStart(null);
   }
```

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each `Activity` has no negative impact and ensures that the SDK always has the necessary reference to your application. As a result, you should call `setApplication` on each of your activities.

You can use the `onPause` function to pause the lifecycle data collection:

To ensure accurate session and crash reporting, this call must be added to every `Activity`.

```java
@Override
   public void onPause() {
      MobileCore.lifecyclePause();
   }
```

### iOS Swift

1. Register the Lifecycle extension with the SDK Core by adding the following to your app's `application:didFinishLaunchingWithOptions:` delegate method. This will register the extension with Core and begin Lifecycle event processing:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Lifecycle.self, ...], {
        ...
    }
}
```

2. Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `MobileCore.registerExtensions` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    let appState = application.applicationState
    MobileCore.registerExtensions([Lifecycle.self, ...], {
        if appState != .background {
        // only start lifecycle if the application is not in the background
        MobileCore.lifecycleStart(additionalContextData: nil)
        }
    }
}
```

3. When launched, if your app is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground` method as follows:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground)

4. When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    MobileCore.lifecyclePause()
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground` method as follows:

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    MobileCore.lifecyclePause()
}
```

For more information on handling backgrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

### iOS Objective-C

1. Register the Lifecycle extension with the SDK Core by adding the following to your app's `application:didFinishLaunchingWithOptions:` delegate method. This will register the extension with Core and begin Lifecycle event processing:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension
[AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
    ...
}];
return YES;
}
```

2. Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `AEPMobileCore::registerExtensions:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension, and begin event processing with Core
    const UIApplicationState appState = application.applicationState;
    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
    // only start lifecycle if the application is not in the background
    if (appState != UIApplicationStateBackground) {
        [AEPMobileCore lifecycleStart:nil];
    }
    }];
}
```

3. When launched, if your app is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [AEPMobileCore lifecycleStart:nil];
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground` method as follows:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [AEPMobileCore lifecycleStart:nil];
}
```

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground)

4. When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
    [AEPMobileCore lifecyclePause];
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground` method as follows:

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [AEPMobileCore lifecyclePause];
}
```

For more information on handling backgrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

For more information, see the documentation on [Lifecycle metrics](../base/mobile-core/lifecycle/index.md).
