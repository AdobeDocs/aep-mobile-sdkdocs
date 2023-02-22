<Variant platform="android" task="add" repeat="6"/>

#### Java

Add the Lifecycle extension and its dependency, the [Mobile Core](../index.md) extension to your project using the app's Gradle file.

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:lifecycle:2.+'
```

Import the Lifecycle and MobileCore extensions in your application's main activity.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;
```

<Variant platform="ios" task="add" repeat="8"/>

Add the AEPLifecycle extension and its dependency, the [Mobile Core](../index.md) extension, to your project using Cocoapods.

Add the following pods in your `Podfile`:

```pod
pod 'AEPCore','~>3.0'
pod 'AEPLifecycle','~>3.0'
```

Import the Lifecycle library:

#### Swift

```swift
import AEPCore
import AEPLifecycle
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPLifecycle;
```

<!--- <Variant platform="react-native" task="add" repeat="3"/>

#### JavaScript

Import the Lifecycle extension

```jsx
import {ACPLifecycle} from '@adobe/react-native-acpcore';
```

<Variant platform="flutter" task="add" repeat="3"/>

#### Dart

Import the Lifecycle extension

```dart
import 'package:flutter_acpcore/flutter_acplifecycle.dart';
``` --->

<Variant platform="android" task="register" repeat="9"/>

#### Java

1. Register the Lifecycle extension:

```java
public class MobileApp extends Application {
@Override
public void onCreate() {
super.onCreate();
     MobileCore.setApplication(this);
     List<Class<? extends Extension>> extensions = Arrays.asList(Lifecycle.EXTENSION, ...);
     MobileCore.registerExtensions(extensions, o -> {
        // Any other post registration processing
    });
  }
}

```

2. In the `onResume` function, start the lifecycle data collection:

```java
    @Override  
    public void onResume() {  
        MobileCore.setApplication(getApplication());
        MobileCore.lifecycleStart(null);
    }
```

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication`in each of your activities.

3. In the `onPause` function, pause the lifecycle data collection:

```java
    @Override
    public void onPause() {
        MobileCore.lifecyclePause();
    }
```

To ensure accurate session and crash reporting, this call must be added to every activity.

<Variant platform="ios" task="register" repeat="32"/>

#### Swift

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


#### Objective-C

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

<!--- <Variant platform="react-native" task="register" repeat="2"/>

**Registering the extension with Core**

When using React Native, registering Lifecycle with Mobile Core should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs. --->