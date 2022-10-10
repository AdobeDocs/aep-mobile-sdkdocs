<Variant platform="android" task="add" repeat="2"/>

Import the library:

```java
   import com.adobe.marketing.mobile.*;
```

<Variant platform="ios-aep" task="add" repeat="8"/>

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

<Variant platform="ios-acp" task="add" repeat="9"/>

The Lifecycle extension is included in the Mobile Core extension. Add the [Mobile Core](../index.md) extension to your project using Cocoapods.

Add the following pod in your `Podfile`:

```pod
pod 'ACPCore','~>2.0'
```

Import the Lifecycle library:

#### Swift

In Swift, importing `ACPCore` also imports the necessary Lifecycle APIs:

```swift
import ACPCore
```

#### Objective-C

```objectivec
 #import "ACPLifecycle.h"
 #import "ACPCore.h"
```

<Variant platform="react-native" task="add" repeat="3"/>

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
```

<Variant platform="cordova" task="add" repeat="3"/>

#### Cordova

After creating your Cordova app and adding the Android and iOS platforms, the Lifecycle extension for Cordova can be added with this command:

```cordova
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

<Variant platform="unity" task="add" repeat="3"/>

#### C#

After importing the [ACPCore.unitypackage](https://github.com/adobe/unity-acpcore/blob/master/bin/ACPCore-0.0.1-Unity.zip), the Lifecycle extension for Unity can be added with following code in the MainScript

```csharp
using com.adobe.marketing.mobile;
```

<Variant platform="xamarin" task="add" repeat="3"/>

#### C#

After adding the iOS ACPCore NuGet package or the Android ACPLifecycle NuGet package, the Lifecycle extension can be added by this import statement

```csharp
using Com.Adobe.Marketing.Mobile;
```

<Variant platform="android" task="register" repeat="8"/>

1. Register the Lifecycle extension:

```java
public class TargetApp extends Application {

@Override
public void onCreate() {
    super.onCreate();
    MobileCore.setApplication(this);

    try {
        Lifecycle.registerExtension();
        // register other extensions
        MobileCore.start(new AdobeCallback () {
            @Override
            public void call(Object o) {
                MobileCore.configureWithAppID("yourAppId");
            }
        });    
    } catch (Exception e) {
        //Log the exception
    }
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

<Variant platform="ios-aep" task="register" repeat="32"/>

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

<Variant platform="ios-acp" task="register" repeat="32"/>

#### Swift

1. Register the Lifecycle extension with the SDK Core by adding the following to your app's `application:didFinishLaunchingWithOptions:` delegate method:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // register the lifecycle extension
    ACPLifecycle.registerExtension();
}
```

2. Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // register the lifecycle extension
    ACPLifecycle.registerExtension();

    let appState = application.applicationState;            
    ACPCore.start {
        // only start lifecycle if the application is not in the background    
        if appState != .background {
            ACPCore.lifecycleStart(nil)
        }    
    }    
}
```

3. When launched, if your app is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {    
    ACPCore.lifecycleStart(nil)
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground` method as follows:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    ACPCore.lifecycleStart(nil)
}
```

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground)

4. When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {    
    ACPCore.lifecyclePause()
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground` method as follows:

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    ACPCore.lifecyclePause()
}
```

For more information on handling backgrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background)

#### Objective-C

1. Register the Lifecycle extension with the SDK Core by adding the following to your app's `application:didFinishLaunchingWithOptions:` delegate method:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension
[ACPLifecycle registerExtension];
    return YES;
}
```

2. Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension
    [ACPLifecycle registerExtension];

    const UIApplicationState appState = application.applicationState;
    [ACPCore start:^{
        // only start lifecycle if the application is not in the background
        if (appState != UIApplicationStateBackground) {
            [ACPCore lifecycleStart:nil];
        }
    }];
}
```

3. When launched, if your app is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [ACPCore lifecycleStart:nil];
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground` method as follows:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [ACPCore lifecycleStart:nil];
}
```

For more information on handling foregrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_foreground?language=objc)

4. When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
    [ACPCore lifecyclePause];
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground` method as follows:

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [ACPCore lifecyclePause];
}
```

For more information on handling backgrounding applications with Scenes, refer to Apple's documentation [here](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/preparing_your_ui_to_run_in_the_background?language=objc)

<Variant platform="react-native" task="register" repeat="2"/>

**Registering the extension with Core**

When using React Native, registering Lifecycle with Mobile Core should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs.

<Variant platform="cordova" task="register" repeat="1"/>

When using Cordova, registering Lifecycle with Mobile Core must be done in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" task="register" repeat="3"/>

**Starting and Pausing a lifecycle event** 

Add the OnApplicationPause in the MainScript with the following code:

```csharp
private void OnApplicationPause(bool pauseStatus)
{
  if (pauseStatus)
  {
    ACPCore.LifecyclePause();
  }
  else
  {
    var cdata = new Dictionary<string, string>();
    cdata.Add("launch.data", "added");
    ACPCore.LifecycleStart(cdata);
  }
}
```

<Variant platform="xamarin" task="register" repeat="19"/>

**iOS**

1. Register the Lifecycle extension with the SDK Core by adding the following to your app's `FinishedLaunching:` delegate method:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
    ACPLifecycle.RegisterExtension();
    return base.FinishedLaunching(app, options);
}
```

2. Start Lifecycle data collection by calling `LifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `FinishedLaunching:` delegate method.

If your iOS application supports background capabilities, your `FinishedLaunching:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `LifecycleStart:` should only be called when the application state is not equal to `UIApplicationState.Background`.

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
    ACPLifecycle.RegisterExtension();

    // only start lifecycle if the application is not in the background
    var appstate = app.ApplicationState;
    if(appstate != UIApplicationState.Background)
    {
    ACPCore.LifecycleStart(null);
    }
    return base.FinishedLaunching(app, options);
}
```

3. When launched, if your app is resuming from a backgrounded state, iOS might call your `WillEnterForeground:` delegate method. You also need to call `LifecycleStart:`, but this time you do not need all of the supporting code that you used in `FinishedLaunching:`:

```csharp
public override void WillEnterForeground(UIApplication uiApplication)
{
    base.WillEnterForeground(uiApplication);
    ACPCore.LifecycleStart(null);
}
```

4. When the app enters the background, pause Lifecycle data collection from your app's `DidEnterBackground:` delegate method:

```csharp
public override void DidEnterBackground(UIApplication uiApplication)
{
    base.DidEnterBackground(uiApplication);
    ACPCore.LifecyclePause();
}
```

**Android**

1. Register the Lifecycle extension:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
    base.OnCreate(savedInstanceState);
LoadApplication(new App());
    ACPCore.Application = this.Application;
    ACPLifecycle.RegisterExtension();
}
```

2. In the `onResume` function, start the lifecycle data collection:

```csharp
protected override void OnResume()
{
    base.OnResume();
    ACPCore.LifecycleStart(null);
}
```

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. You should set the application (`ACPCore.Application = this.Application;`) in each of your activities.

3. In the `onPause` function, pause the lifecycle data collection:

```csharp
protected override void OnPause()
{
    base.OnPause();
    ACPCore.LifecyclePause();
}
```

To ensure accurate session and crash reporting, this call must be added to every activity.