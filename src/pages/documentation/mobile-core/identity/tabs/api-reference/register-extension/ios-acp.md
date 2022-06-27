Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Objective-C

**Example**

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPIdentity registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

#### Swift

**Example**

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPIdentity.registerExtension()
  // Override point for customization after application launch.
  return true;
}
```