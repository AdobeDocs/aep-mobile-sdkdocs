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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

## Register Lifecycle with Mobile Core

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=register"/>

Java<br/>(Android)

<Tabs query="platform=android-java&task=register"/>

Swift<br/>(iOS)

<Tabs query="platform=ios-swift&task=register"/>

Objective-C<br/>(iOS)

<Tabs query="platform=ios-objc&task=register"/>

## Add Lifecycle start and pause calls

You can start collecting Lifecycle information at any time in your app, but we recommend that you start as soon as your app enters the foreground. This allows Lifecycle metrics to be correctly attributed to all of your users' activities for their current session.

You should pause Lifecycle collection when the user stops using your app. The best time to do this is usually when your app has entered the background.

### Lifecycle on iOS

#### Start Lifecycle data collection on launch

Start Lifecycle data collection by calling `lifecycleStart(_:)` from within the callback of the `MobileCore.registerExtensions(_:)` method in your app's `application(_:didFinishLaunchingWithOptions:)` delegate method.

If your iOS application supports background capabilities, your `application(_:didFinishLaunchingWithOptions:)` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart(_:)` should only be called when the application state is not equal to `UIApplicationStateBackground`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=start-lifecycle-didfinishlaunch"/>

Objective-C

<Tabs query="platform=ios-objc&task=start-lifecycle-didfinishlaunch"/>

#### Start and Pause Lifecycle data collection from iOS lifecycle delegate

When your app is resuming from the background state, call `lifecycleStart(_:)` from the appropriate delegate object's "will enter foreground" method. When your app enters the background state, call `lifecyclePause()` from the appropriate delegate object's "did enter background" method.

* For a scene-based UI, call the Lifecycle APIs from the _UISceneDelegate_'s `sceneWillEnterForeground(_:)` and `sceneDidEnterBackground(_:)` methods.

* For all other apps, call the Lifecycle APIs from the _UIApplicationDelegate_'s `applicationWillEnterForeground(_:)` and `applicationDidEnterBackground(_:)` methods.

* If your application supports both a scene delegate and an app delegate, implement the Lifecycle APIs in both delegate objects.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=start-pause"/>

Objective-C

<Tabs query="platform=ios-objc&task=start-pause"/>

<InlineAlert variant="info" slots="text"/>

For more information on handling foreground and background states in applications with Scenes, refer to Apple's documentation on preparing your UI to run in the [foreground](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground) and [background](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

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

#### Include additional context data

To include additional data with lifecycle tracking calls, pass an additional parameter to `lifecycleStart(additionalContextData:)` that contains context data:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="platform=ios-swift&task=context-data"/>

Objective-C

<Tabs query="platform=ios-objc&task=context-data"/>

### Lifecycle on Android

#### Start and Pause Lifecycle data collection from Android Activity

To ensure accurate session and crash reporting, the Lifecycle APIs must be implemented in every Activity of the Android Application. Do not start or stop Lifecycle in a Fragment.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Kotlin

<Tabs query="platform=android-kotlin&task=activity-start-pause"/>

Java

<Tabs query="platform=android-java&task=activity-start-pause"/>

<InlineAlert variant="info" slots="text"/>

Calling `setApplication(Application)` is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication(Application)` in each of your activities.

#### Implementing global lifecycle callbacks

Starting with API Level 14, Android allows global lifecycle callbacks for activities. For more information, please read the [Android developer guide](https://developer.android.com/reference/android/app/Application#registerActivityLifecycleCallbacks(android.app.Application.ActivityLifecycleCallbacks)).

You can use these callbacks to ensure that all of your activities correctly call the Lifecycle APIs without needing to update each individual Activity class. Add code to register an instance of [ActivityLifecycleCallbacks](https://developer.android.com/reference/android/app/Application.ActivityLifecycleCallbacks) in your Application class, just before [registering your extensions](#register-lifecycle-with-mobile-core) with MobileCore.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Kotlin

<Tabs query="platform=android-kotlin&task=global-lifecycle"/>

Java

<Tabs query="platform=android-java&task=global-lifecycle"/>

#### Include additional context data

To include additional data with lifecycle tracking calls, pass an additional parameter to `lifecycleStart(Map)` that contains context data:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Kotlin

<Tabs query="platform=android-kotlin&task=context-data"/>

Java

<Tabs query="platform=android-java&task=context-data"/>

<InlineAlert variant="info" slots="text"/>

You only need to add this code in your main Activity and any other Activity in which your app may be launched.
