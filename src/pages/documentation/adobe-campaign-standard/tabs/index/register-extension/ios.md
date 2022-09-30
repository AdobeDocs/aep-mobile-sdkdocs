In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign, Identity, Signal, and Lifecycle extensions:

**Objective-C**

```objectivec
    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        [ACPCore setLogLevel:ACPMobileLogLevelDebug];
        [ACPCore configureWithAppId:@"launch-EN2c0ccd3a457a4c47b65a6b085e269c91-staging"];

        [ACPCampaign registerExtension];
        [ACPUserProfile registerExtension];
        [ACPIdentity registerExtension];
        [ACPLifecycle registerExtension];
        [ACPSignal registerExtension];
        [ACPCore start:^{
        [ACPCore lifecycleStart:nil];
        }];
      // Override point for customization after application launch.
      return YES;
    }
```

**Swift**

```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
           ACPCore.setLogLevel(.debug)
        ACPCore.configure(withAppId: "launch-EN2c0ccd3a457a4c47b65a6b085e269c91-staging")

        ACPCampaign.registerExtension()
        ACPUserProfile.registerExtension()
        ACPIdentity.registerExtension()
        ACPLifecycle.registerExtension()
        ACPSignal.registerExtension()
        ACPCore.start {
        ACPCore.lifecycleStart(nil)
        }

      return true;
    }
```

For more information about starting Lifecycle, see the [Lifecycle extension in iOS guide](../mobile-core/lifecycle/ios.md).