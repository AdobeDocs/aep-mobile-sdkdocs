<Variant platform="obj-c" repeat="1"/>

```objc
@import AEPCore;
@import AEPSignal;
@import AEPLifecycle;
@import AEPIdentity;
@import AEPUserProfile;
@import AEPServices;
@import AEPAssurance;
...

// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
      [AEPMobileCore setLogLevel: AEPLogLevelDebug];
      [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, AEPMobileLifecycle.class, AEPMobileUserProfile.class, AEPMobileIdentity.class, AEPMobileAssurance.class] completion:^{
        [AEPMobileCore configureWithAppId: @"yourAppId"];
        [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
        }];
    ...
}
```

<Variant platform="swift" repeat="1"/>

```swift
// AppDelegate.swift
import AEPAssurance
import AEPCore
import AEPIdentity
import AEPLifecycle
import AEPSignal
import AEPUserProfile

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Signal.self, Lifecycle.self, UserProfile.self, Identity.self, Assurance.self], {
        MobileCore.configureWith(appId: "yourAppId")
        MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
    })
  ...
}
```