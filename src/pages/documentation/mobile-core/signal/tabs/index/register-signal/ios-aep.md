In your app's `application:didFinishLaunchingWithOptions`, register the Signal extension with Mobile Core:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     MobileCore.registerExtensions([Signal.self, ...]) {
       MobileCore.configureWith(appId: "yourAppId")
       // Any other post registration processing
     }
     return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, ...] completion:^{
        [AEPMobileCore configureWithAppId: @"yourAppId"];
        // Any other post registration processing
    }];
    return YES;
 }
```