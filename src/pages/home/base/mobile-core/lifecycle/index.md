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

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `LifecycleStart` API. Session data is persisted, so it is available across application launches.

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

### iOS

#### Start Lifecycle data collection on launch

Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `MobileCore.registerExtensions` method in your app's `application(_:didFinishLaunchingWithOptions:)` delegate method.

If your iOS application supports background capabilities, your `application(_:didFinishLaunchingWithOptions:)` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&task=start-lifecycle-didfinishlaunch"/>

#### Start Lifecycle data collection when application enters foreground

When your app is resuming from the background state, call `lifecycleStart:` from the appropriate delegate object's "will enter foreground" method.

For a scene-based UI, call `lifecycleStart:` from the `UISceneDelegate`'s `sceneWillEnterForeground(_:)` method.

For all other apps, call `lifecycleStart:` from the `UIApplicationDelegate`'s `applicationWillEnterForeground(_:)` method.

If your application supports both a scene delegate and an app delegate, call `lifecycleStart:` from both delegate objects.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&task=willenterforeground"/>

<InlineAlert variant="info" slots="text"/>

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground)

#### Pause Lifecycle data collection when application enters background

When your app enters the background state, call `lifecyclePause:` from the appropriate delegate object's "did enter background" method.

For a scene-based UI, call `lifecyclePause:` from the `UISceneDelegate`'s `sceneDidEnterBackground(_:)` method.

For all other apps, call `lifecyclePause:` from the `UIApplicationDelegate`'s `applicationDidEnterBackground(_:)` method.

If your application supports both a scene delegate and an app delegate, call `lifecycleStart:` from both delegate objects.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&task=didenterbackground"/>

<InlineAlert variant="info" slots="text"/>

For more information on handling applications in the background state with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

### Android

To ensure accurate session and crash reporting, the Lifecycle APIs must be implemented in every Activity of the Android Application. 

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication`in each of your activities.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&task=activity-start-pause"/>

TBD - Add section for adding to global lifecycle callbacks.
