In your app's`application:didFinishLaunchingWithOptions`, register the Signal extension with Mobile Core:

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore configureWithAppId:@"yourAppId"];
    [ACPSignal registerExtension];
    [ACPCore start:nil];
    // Override point for customization after application launch.
    return YES;
 }
```

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     ACPCore.configure(withAppId: "yourAppId")   
     ACPSignal.registerExtension()
     ACPCore.start(nil)
     // Override point for customization after application launch.
     return true;
}
```

<InlineAlert variant="info" slots="text"/>

The Signal extension is automatically included in the Mobile Core pod. When you manually install the Signal extension, ensure that you add the `libACPSignal_iOS.a` library to your project.