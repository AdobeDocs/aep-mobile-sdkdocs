<Variant platform="android" task="import" repeat="5"/>

#### Java

Import the Lifecycle library:

```java
import com.adobe.marketing.mobile.*;
```

Register the Lifecycle extension along with other extensions used with Mobile Core:

```java
public class MyApp extends Application {​

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);

        MobileCore.registerExtensions(Arrays.asList(
						Lifecycle.EXTENSION,
            ...
				), value -> {
    			// registration completion handler
    		});
    }
}
```

<Variant platform="ios" task="import" repeat="8"/>

#### Swift

```swift
import AEPCore
import AEPLifecycle
```

Register the Lifecycle extension along with the other extensions you use with the Mobile Core by adding the following in your app's `application:didFinishLaunchingWithOptions:` delegate method:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  MobileCore.registerExtensions([Lifecycle.self, ...], {
      // Use the environment file id assigned to this application in Data Collection UI
      MobileCore.configureWith(appId: "your-environment-file-id")
  })

  return true
}
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPLifecycle;
```

Register the Lifecycle extension along with the other extensions you use with the Mobile Core by adding the following to your app's `application:didFinishLaunchingWithOptions:` delegate method:

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
      // Use the environment file id assigned to this application in Data Collection UI
      [AEPMobileCore configureWithAppId: @"your-environment-file-id"];
  }];

  return YES;
}
```

<Variant platform="android" task="collect" repeat="6"/>

#### Java

Do not start or stop Lifecycle in a Fragment.

In the `onResume` function of each of your Activities, start Lifecycle data collection:

```java
@Override  
public void onResume() {  
    MobileCore.setApplication(getApplication());
    MobileCore.lifecycleStart(null);
}
```

To ensure accurate session and crash reporting, this call must be added to every Activity.

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your application. We recommend that you call `setApplication` in each of your Activities.

<Variant platform="ios" task="collect" repeat="16"/>

#### Swift

Start Lifecycle data collection by calling `lifecycleStart` from the registration completion handler in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  let appState = application.applicationState
  MobileCore.registerExtensions([Lifecycle.self, ...], {
      // Use the environment file id assigned to this application in Data Collection UI
      MobileCore.configureWith(appId: "your-environment-file-id")

      // only start lifecycle if the application is not in the background
      if appState != .background {
          MobileCore.lifecycleStart(additionalContextData: nil)
      }
  })
}
```

When your app is launched, if it is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

If your app is a SceneDelegate based iOS application, then use:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

#### Objective-C

Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    const UIApplicationState appState = application.applicationState;
    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
        // Use the environment file id assigned to this application in Data Collection UI
        [AEPMobileCore configureWithAppId: @"your-environment-file-id"];
        // only start lifecycle if the application is not in the background
        if (appState != UIApplicationStateBackground) {
            [AEPMobileCore lifecycleStart:nil];
        }
    }];

    return YES;
}
```

When your app is launched, if it is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [AEPMobileCore lifecycleStart:nil];
}
```

If your app is a SceneDelegate based iOS application, then use:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [AEPMobileCore lifecycleStart:nil];
}
```

<Variant platform="android" task="pause" repeat="5"/>

#### Java

Do not start or stop Lifecycle in a Fragment.

We recommend pausing Lifecycle from the `onPause` function in your Activities:

```java
@Override
public void onPause() {
    MobileCore.lifecyclePause();
}
```

To ensure accurate session and crash reporting, this call must be added to every Activity.

<Variant platform="ios" task="pause" repeat="10"/>

#### Swift

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    MobileCore.lifecyclePause()
}
```

If your app is a SceneDelegate based iOS application, then use:

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    MobileCore.lifecyclePause()
}
```

#### Objective-C

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
   [AEPMobileCore lifecyclePause];
}
```

If your app is a SceneDelegate based iOS application, then use:

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [AEPMobileCore lifecyclePause];
}
```
