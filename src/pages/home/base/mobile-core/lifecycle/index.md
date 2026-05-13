---
title: Mobile Core Lifecycle extension overview
description: An overview for the Mobile Core Lifecycle extension.
keywords:
- Lifecycle
- Lifecycle for Mobile Core
- Mobile Core
- Product overview
---

# Lifecycle

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `lifecycleStart` API. Session data is persisted, so it is available across application launches.

## Add the Lifecycle extension to your app

### Include Lifecycle extension as an app dependency

Add MobileCore and Lifecycle extensions as dependencies to your project.

#### Android Kotlin

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:lifecycle")
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../../resources/manage-gradle-dependencies.md) for more information.

#### Android Groovy

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:lifecycle'
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../../resources/manage-gradle-dependencies.md) for more information.

#### iOS CocoaPods

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore', '~> 5.0'
  pod 'AEPLifecycle', '~> 5.0'
end
```

### Initialize Adobe Experience Platform SDK with Lifecycle Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](../../../getting-started/get-the-sdk.md#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

#### Android Kotlin

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

```kotlin
import com.adobe.marketing.mobile.LoggingMode
import com.adobe.marketing.mobile.MobileCore
...
import android.app.Application
...

class MainApp : Application() {
  override fun onCreate() {
    super.onCreate()
    MobileCore.setLogLevel(LoggingMode.DEBUG)
    MobileCore.initialize(this, "ENVIRONMENT_ID")
  }
}
```

#### Android Java

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

```java
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
...
import android.app.Application;
...
public class MainApp extends Application {
  @Override
  public void onCreate(){
    super.onCreate();
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    MobileCore.initialize(this, "ENVIRONMENT_ID");
  }
}
```

#### iOS Swift

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

```swift
// AppDelegate.swift
import AEPCore
import AEPServices
...

final class AppDelegate: NSObject, UIApplicationDelegate {
  func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    MobileCore.setLogLevel(.debug)
    MobileCore.initialize(appId: "ENVIRONMENT_ID")
    ...
  }
}
```

#### iOS Objective-C

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

```objectivec
// AppDelegate.m
#import "AppDelegate.h"
@import AEPCore;
@import AEPServices;
...
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];  
  [AEPMobileCore initializeWithAppId:@"ENVIRONMENT_ID" completion:^{
      NSLog(@"AEP Mobile SDK is initialized");
  }];
  ...
  return YES;
}
@end
```

## Add Lifecycle start and pause calls

<InlineAlert variant="info" slots="text"/>

Lifecycle tracking is enabled by default when the `MobileCore.initialize` API is used and Lifecycle extension is included as an app dependency. The following instructions only apply if [lifecycleAutomaticTrackingEnabled](../api-reference.md#initoptions) is false or when using [manual extension registration](../../../getting-started/get-the-sdk.md#b-manual-extension-registration-using-mobilecoreregisterextensions-api) to register Lifecycle extension.

You can start collecting Lifecycle information at any time in your app, but you should start as soon as your app enters the foreground. This allows Lifecycle metrics to be correctly attributed to all of your users' activities for their current session.

You should pause Lifecycle collection when the user stops using your app. The best time to do this is usually when your app has entered the background.

### Lifecycle on iOS

#### Start Lifecycle data collection on launch

Start Lifecycle data collection by calling `lifecycleStart(_:)` from within the callback of the `MobileCore.registerExtensions(_:)` method in your app's `application(_:didFinishLaunchingWithOptions:)` delegate method.

If your iOS application supports background capabilities, your `application(_:didFinishLaunchingWithOptions:)` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart(_:)` should only be called when the application state is not equal to `UIApplicationStateBackground`.

#### iOS Swift

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

#### iOS Objective-C

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    const UIApplicationState appState = application.applicationState;
    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
    // only start lifecycle if the application is not in the background
    if (appState != UIApplicationStateBackground) {
        [AEPMobileCore lifecycleStart:nil];
    }
    }];
}
```

#### Start and Pause Lifecycle data collection from iOS lifecycle delegate

When your app is resuming from the background state, call `lifecycleStart(_:)` from the appropriate delegate object's "will enter foreground" method. When your app enters the background state, call `lifecyclePause()` from the appropriate delegate object's "did enter background" method.

* For a scene-based UI, call the Lifecycle APIs from the _UISceneDelegate_'s `sceneWillEnterForeground(_:)` and `sceneDidEnterBackground(_:)` methods.

* For all other apps, call the Lifecycle APIs from the _UIApplicationDelegate_'s `applicationWillEnterForeground(_:)` and `applicationDidEnterBackground(_:)` methods.

* If your application supports both a scene delegate and an app delegate, implement the Lifecycle APIs in both delegate objects.

#### iOS Swift

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate` as follows:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    MobileCore.lifecyclePause()
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate` as follows:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    MobileCore.lifecyclePause()
}
```

#### iOS Objective-C

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate` as follows:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [AEPMobileCore lifecycleStart:nil];
}
```

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [AEPMobileCore lifecyclePause];
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate` as follows:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [AEPMobileCore lifecycleStart:nil];
}
```

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
    [AEPMobileCore lifecyclePause];
}
```

<InlineAlert variant="info" slots="text"/>

For more information on handling foreground and background states in applications with Scenes, refer to Apple's documentation on preparing your UI to run in the [foreground](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground) and [background](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

#### Start and Pause Lifecycle data collection in SwiftUI

If your pure SwiftUI application does not use an app delegate or scene delegate, you may still use the Lifecycle extension by listening for `scenePhase` changes.

1. Register the Lifecycle extension and configure the Mobile SDK from the `App` class's `init()` function.

2. Set the `@Environment` property wrapper to observe the `scenePhase` variable to read the application's current phase.

3. Use the `scenePhase` property in conjunction with `.onChange(of:)` to trigger the Lifecycle APIs when the phase changes between `.active` and `.background`.

```swift
import SwiftUI
import AEPCore
import AEPLifecycle

@main
struct TestSwiftUIApp: App {

    @Environment(\.scenePhase) private var scenePhase

    init() {
        MobileCore.registerExtensions([Lifecycle.self]) {
            // Post registration tasks, such as configureWith(appId:)
        }
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }.onChange(of: scenePhase) { phase in
            switch phase {
                case .active:
                    MobileCore.lifecycleStart(additionalContextData: nil)
                case .background:
                    MobileCore.lifecyclePause()
                case .inactive:
                    print("Inactive scene phase")
                @unknown default:
                    print("unknown scene phase has been added to scenePhase enum")
            }
        }
    }
}
```

For more information, read the full blog post [Implement Adobe Experience Cloud Mobile Lifecycle Tracking in SwiftUI](https://blog.developer.adobe.com/implement-adobe-experience-cloud-mobile-lifecycle-tracking-in-swiftui-41a8373a55fb).

#### Include additional context data

To include additional data with lifecycle tracking calls, pass an additional parameter to `lifecycleStart(additionalContextData:)` that contains context data:

#### iOS Swift

```swift
MobileCore.lifecycleStart(additionalContextData: ["myapp.category": "Game"])
```

#### iOS Objective-C

```objectivec
[AEPMobileCore lifecycleStart:@{@"myapp.category": @"Game"}];      
```

### Lifecycle on Android

#### Start and Pause Lifecycle data collection from Android Activity

To ensure accurate session and crash reporting, the Lifecycle APIs must be implemented in every Activity of the Android Application. Do not start or stop Lifecycle in a Fragment.

#### Android Kotlin

Add the following to each Android Activity class.

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Lifecycle
...
```

```kotlin
    override fun onResume() {
        MobileCore.setApplication(this.application)
        MobileCore.lifecycleStart(null)
    }
```

```kotlin
    override fun onPause() {
        MobileCore.lifecyclePause()
    }
```

#### Android Java

Add the following to each Android Activity class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;
...
```

```java
    @Override
    public void onResume() {
        MobileCore.setApplication(getApplication());
        MobileCore.lifecycleStart(null);
    }
```

```java
    @Override
    public void onPause() {
        MobileCore.lifecyclePause();
    }
```

<InlineAlert variant="info" slots="text"/>

Calling `setApplication(Application)` is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. You should call `setApplication(Application)` in each of your activities.

#### Implementing global lifecycle callbacks

Starting with API Level 14, Android allows global lifecycle callbacks for activities. For more information, please read the [Android developer guide](https://developer.android.com/reference/android/app/Application#registerActivityLifecycleCallbacks(android.app.Application.ActivityLifecycleCallbacks)).

You can use these callbacks to ensure that all of your activities correctly call the Lifecycle APIs without needing to update each individual Activity class. Add code to register an instance of [ActivityLifecycleCallbacks](https://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks) in your Application class, just before [registering your extensions](#register-lifecycle-with-mobile-core) with MobileCore.

#### Android Kotlin

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Lifecycle

class MobileApp : Application() {

override fun onCreate() {
    super.onCreate()

    registerActivityLifecycleCallbacks(object: ActivityLifecycleCallbacks {
        override fun onActivityResumed(activity: Activity) {
            MobileCore.setApplication(activity.application)
            MobileCore.lifecycleStart(null)
        }

        override fun onActivityPaused(activity: Activity) {
            MobileCore.lifecyclePause()
        }

        // the following methods aren't needed for our lifecycle purposes, but are
        // required to be implemented by the ActivityLifecycleCallbacks object
        override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {}
        override fun onActivityStarted(activity: Activity) {}
        override fun onActivityStopped(activity: Activity) {}
        override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {}
        override fun onActivityDestroyed(activity: Activity) {}
    })

    ...
}
 ...
}
```

#### Android Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;

public class MobileApp extends Application {

@Override
protected void onCreate() {
    super.onCreate();

    registerActivityLifecycleCallbacks(new ActivityLifecycleCallbacks() {
        @Override
        public void onActivityResumed(Activity activity) {
            MobileCore.setApplication(activity.getApplication());
            MobileCore.lifecycleStart(null);
        }

        @Override
        public void onActivityPaused(Activity activity) {
            MobileCore.lifecyclePause();
        }

        // the following methods aren't needed for our lifecycle purposes, but are
        // required to be implemented by the ActivityLifecycleCallbacks object
        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {}
        @Override
        public void onActivityStarted(Activity activity) {}
        @Override
        public void onActivityStopped(Activity activity) {}
        @Override
        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {}
        @Override
        public void onActivityDestroyed(Activity activity) {}
    });

    ...
}
 ...
}
```

#### Include additional context data

To include additional data with lifecycle tracking calls, pass an additional parameter to `lifecycleStart(Map)` that contains context data:

#### Android Kotlin

```kotlin
MobileCore.lifecycleStart(mapOf("myapp.category" to "Game"))
```

#### Android Java

```java
HashMap<String, Object> additionalContextData = new HashMap<String, Object>();
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

<InlineAlert variant="info" slots="text"/>

You only need to add this code in your main Activity and any other Activity in which your app may be launched.
