### Objective-C

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

### Swift

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