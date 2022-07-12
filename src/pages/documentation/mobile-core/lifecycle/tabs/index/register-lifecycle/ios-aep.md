### Swift

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

### Objective-C

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