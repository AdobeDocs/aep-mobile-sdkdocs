#### iOS

**Objective-C**

Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the ACPCore::start: method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

<InlineAlert variant="info" slots="text"/>

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```
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

When your app is launched, if it is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [ACPCore lifecycleStart:nil];
}
```

If your app is a SceneDelegate based iOS application, then use:

```
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [ACPCore lifecycleStart:nil];
}
```

**Swift**

Start Lifecycle data collection by calling `lifecycleStart:` from the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

<InlineAlert variant="info" slots="text"/>

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```
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

When your app is launched, if it is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```
func applicationWillEnterForeground(_ application: UIApplication) {    
    ACPCore.lifecycleStart(nil)
}
```

If your app is a SceneDelegate based iOS application, then use:

```
 func sceneWillEnterForeground(_ scene: UIScene) {
      ACPCore.lifecycleStart(nil)
 }
 ```
 