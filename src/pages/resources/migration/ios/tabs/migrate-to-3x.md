<Variant lang="obj-c" repeat="1"/>

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
      const UIApplicationState appState = application.applicationState;
      [AEPMobileCore setLogLevel: AEPLogLevelDebug];
      [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, AEPMobileLifecycle.class, AEPMobileUserProfile.class, AEPMobileIdentity.class, AEPMobileAssurance.class] completion:^{
        [AEPMobileCore configureWithAppId: @""];
        if (appState != UIApplicationStateBackground) {
          // only start lifecycle if the application is not in the background
          [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
        }
       }];
    ...
}
```

<Variant lang="swift" repeat="1"/>

```swift
// AppDelegate.swift
import AEPAssurance
import AEPCore
import AEPIdentity
import AEPLifecycle
import AEPSignal
import AEPUserProfile

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let appState = application.applicationState
    MobileCore.registerExtensions([Signal.self, Lifecycle.self, UserProfile.self, Identity.self, Assurance.self], {
        MobileCore.configureWith(appId: "")
        if appState != .background {
          // only start lifecycle if the application is not in the background
          MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
        }
    })
  ...
}
```
