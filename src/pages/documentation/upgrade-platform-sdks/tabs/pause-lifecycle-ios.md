#### iOS

**Objective-C**

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```
 - (void) applicationDidEnterBackground:(UIApplication *)application {
    [ACPCore lifecyclePause];
 }
```

If your app is a SceneDelegate based iOS application, then use:

```
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [ACPCore lifecyclePause];
}
```

**Swift**

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```
func applicationDidEnterBackground(_ application: UIApplication) {    
    ACPCore.lifecyclePause()
}
```

If your app is a SceneDelegate based iOS application, then use:

```
func sceneDidEnterBackground(_ scene: UIScene) {
     ACPCore.lifecyclePause()
 }
```
