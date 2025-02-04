---
title: Mobile Core Lifecycle extension overview
description: An overview for the Mobile Core Lifecycle extension.
keywords:
- Lifecycle
- Lifecycle for Mobile Core
- Mobile Core
- Product overview
---

import Tabs from './tabs/index.md'

# Lifecycle

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `lifecycleStart` API. Session data is persisted, so it is available across application launches.

## Add Lifecycle to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

<!--- React Native

<Tabs query="platform=react-native&task=add"/>

Flutter

<Tabs query="platform=flutter&task=add"/> --->

## Register Lifecycle with Mobile Core

(TBD fix link "and add appropriate Start/Pause calls")

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

## Add Lifecycle start and pause calls

### Lifecycle in iOS

#### Start Lifecycle data collection on launch

Start Lifecycle data collection by calling `lifecycleStart(_:)` from within the callback of the `MobileCore.registerExtensions(_:)` method in your app's `application(_:didFinishLaunchingWithOptions:)` delegate method.

If your iOS application supports background capabilities, your `application(_:didFinishLaunchingWithOptions:)` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart(_:)` should only be called when the application state is not equal to `UIApplicationStateBackground`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=start-lifecycle-didfinishlaunch"/>

Objective-C

<Tabs query="platform=ios-objc&task=start-lifecycle-didfinishlaunch"/>


#### Start Lifecycle data collection when application enters foreground

When your app is resuming from the background state, call `lifecycleStart(_:)` from the appropriate delegate object's "will enter foreground" method.

* For a scene-based UI, call `lifecycleStart(_:)` from the _UISceneDelegate_'s `sceneWillEnterForeground(_:)` method.

* For all other apps, call `lifecycleStart(_:)` from the _UIApplicationDelegate_'s `applicationWillEnterForeground(_:)` method.

* If your application supports both a scene delegate and an app delegate, call `lifecycleStart(_:)` from both delegate objects.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=willenterforeground"/>

Objective-C

<Tabs query="platform=ios-objc&task=willenterforeground"/>

<InlineAlert variant="info" slots="text"/>

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground)

#### Pause Lifecycle data collection when application enters background

When your app enters the background state, call `lifecyclePause()` from the appropriate delegate object's "did enter background" method.

* For a scene-based UI, call `lifecyclePause()` from the _UISceneDelegate_'s `sceneDidEnterBackground(_:)` method.

* For all other apps, call `lifecyclePause()` from the _UIApplicationDelegate_'s `applicationDidEnterBackground(_:)` method.

* If your application supports both a scene delegate and an app delegate, call `lifecycleStart(_:)` from both delegate objects.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=didenterbackground"/>

Objective-C

<Tabs query="platform=ios-objc&task=didenterbackground"/>

<InlineAlert variant="info" slots="text"/>

For more information on handling applications in the background state with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

#### Start and Pause Lifecycle data collection in SwiftUI

If your pure SwiftUI application does not use an app delegate or scene delegate, you may still use the Lifecycle extension by listening for _scenePhase_ changes.

1. Register the Lifecycle extension and configure the Mobile SDK from the _App_ class's _init()_ function.

2. Set the _@Environment_ property wrapper to observe the _scenePhase_ variable to read the application's current phase.

3. Use the _scenePhase_ property in conjunction with `.onChange(of:)` to trigger the Lifecycle APIs when the phase changes between _active_ and _background_.

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


### Lifecycle in Android

#### Start and Pause Lifecycle data collection from Android Activity

To ensure accurate session and crash reporting, the Lifecycle APIs must be implemented in every Activity of the Android Application. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&task=activity-start-pause"/>

<InlineAlert variant="info" slots="text"/>

Calling `setApplication(Application)` is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication(Application)` in each of your activities.

#### Implementing global lifecycle callbacks

Starting with API Level 14, Android allows global lifecycle callbacks for activities. For more information, please read the [Android developer guide](https://developer.android.com/reference/android/app/Application#registerActivityLifecycleCallbacks(android.app.Application.ActivityLifecycleCallbacks)).

You can use these callbacks to ensure that all of your activities correctly call the Lifecycle APIs without needing to update each individual Activity class. Add code to register an instance of [ActivityLifecycleCallbacks](https://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks) in your Application class, just before [registering your extensions](#register-lifecycle-with-mobile-core) with MobileCore.

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
}
 ...
}
```

#### Include additional context data

To include additional data with lifecycle metric calls, pass an additional parameter to `lifecycleStart(Map)` that contains context data:

```java
HashMap<String, Object> additionalContextData = new HashMap<String, Object>();
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

<InlineAlert variant="info" slots="text"/>

You only need to add this code in your main Activity and any other Activity in which your app may be launched.

