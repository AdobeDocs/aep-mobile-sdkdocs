<InlineAlert variant="info" slots="text"/>

For iOS AEP libraries, registration is changed to a single API call. Calling the MobileCore.start API is no longer required. See [MobileCore.registerExtensions()](../api-reference.md#registerextension-s) for more information.

#### Swift

**Example**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([AEPIdentity.Identity.self, Lifecycle.self, Analytics.self], {
        MobileCore.configureWith(appId: "mobilePropertyEnvironmentID")
    })
  ...
}
```

#### Objective-C

**Example**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, AEPMobileLifecycle.class, AEPMobileAnalytics.class] completion:^{
    [AEPMobileCore configureWithAppId: @"mobilePropertyEnvironmentID"];
  }];
  ...
}
```