In your app's `application:didFinishLaunchingWithOptions` function, register the Mobile Services extension with the Mobile Core:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Lifecycle.self, Analytics.self,  AEPMobileServices.self], {
        MobileCore.configureWith(appId: "yourLaunchEnvironmentID")
        MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
    })
  ...
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSArray *extensionsToRegister = @[AEPMobileIdentity.class, AEPMobileLifecycle.class, AEPMobileAnalytics.class, AEPMobileServices.class];
    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
        // Use the App id assigned to this application via Adobe Launch
        [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];
        [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
    }];
    ....
}
```