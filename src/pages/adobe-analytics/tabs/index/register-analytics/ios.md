In your app's `application:didFinishLaunchingWithOptions`, register Analytics with Mobile Core:

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore configureWithAppId:@"yourAppId"];
    [ACPAnalytics registerExtension];
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
     ACPAnalytics.registerExtension()
     ACPIdentity.registerExtension()
     ACPCore.start(nil)
     // Override point for customization after application launch.
     return true;
}
```

<InlineAlert variant="info" slots="text"/>

Analytics depends on the Identity extension and is automatically included in the Core pod. When installing the Analytics extension manually, ensure that you added the `libACPIdentity_iOS.a` library to your project.