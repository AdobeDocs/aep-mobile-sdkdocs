#### Objective-C

In your app's `didFinishLaunchingWithOptions` function, register the Target extension with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPCore configureWithAppId:@"yourAppId"];
  [ACPTarget registerExtension];
  [ACPIdentity registerExtension];
  [ACPCore start:nil];
  // Override point for customization after application launch.
  return YES;
}
```

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPCore.configure(withAppId: "yourAppId")   
  ACPTarget.registerExtension()
  ACPIdentity.registerExtension()
  ACPCore.start(nil)
  // Override point for customization after application launch.
  return true
}
```