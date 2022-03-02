#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {    
  MobileCore.registerExtensions([Target.self, Identity.self]) {
       //Completion callback
       // Use the App id assigned to this application via Adobe Data Collection UI
       MobileCore.configureWith(appId: "yourAppId")
  }
  return true
}
```

#### Objective-C

In your app's `didFinishLaunchingWithOptions` function, register the Target extension with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions: @[AEPMobileIdentity.class, AEPMobileTarget.class] completion:^{
        //Completion callback
        // Use the app ID assigned to this application via Data Collection UI
        [AEPMobileCore configureWithAppId: @"yourAppId"];
    }];

    return YES;
}
```