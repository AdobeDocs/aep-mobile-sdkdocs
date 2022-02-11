In your app's `application:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   [ACPIdentity registerExtension];
   [ACPAudience registerExtension];
   [ACPCore start:nil]

   // Override point for customization after application launch.
   return YES;
}
```

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
 ACPIdentity.registerExtension()
 ACPAudience.registerExtension()
 ACPCore.start(nil)

 // Override point for customization after application launch.
 return true;
}
```