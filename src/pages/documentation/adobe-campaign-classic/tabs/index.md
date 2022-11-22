<Variant platform="android" task="add" repeat="6"/>

#### Java

1. Add the Campaign Classic extension to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:campaignclassic:1.+'
```

or you can manually include the binaries found in the [acp-sdks](https://github.com/Adobe-Marketing-Cloud/acp-sdks/) repo on GitHub.

2. Import the Campaign Classic and Lifecycle extensions in your application's main activity.

```java
import com.adobe.marketing.mobile.CampaignClassic;
import com.adobe.marketing.mobile.Lifecycle;
```

<Variant platform="ios-aep" task="add" repeat="9"/>

1. Add the Campaign Classic and [Mobile Core](../mobile-core/index.md) libraries to your project.

   You can add the following pods to your `Podfile`:

   ```text
   pod 'AEPCore'
   pod 'AEPCampaignClassic'
   ```

   or you can manually include the XCFrameworks by following this GitHub [documentation](https://github.com/adobe/aepsdk-campaignclassic-ios/#binaries).

2. In the Xcode project, import the Mobile Core and Campaign Classic extensions:

#### Swift

```swift
	import AEPCore
	import AEPCampaignClassic
```

#### Objective-C

```objectivec
	@import AEPCore;
	@import AEPCampaignClassic;
```

<Variant platform="ios-acp" task="add" repeat="8"/>

1. Add the Campaign Classic and [Mobile Core](../mobile-core/index.md) libraries to your project.

You can manually include the [Mobile Core](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.1-ACPCore) and [Campaign Classic](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.0-ACPCampaignClassic) libraries found in Github or add the following pods to your `Podfile`:

```pod
pod 'ACPCampaignClassic'
pod 'ACPLifecycle'
pod 'ACPCore'
```

2. In the Xcode project, import the Mobile Core and Campaign Classic extensions:

#### Swift

```swift
   import ACPCore
   import ACPCampaignClassic
   import ACPLifecycle
```

#### Objective-C

```objectivec
   #import "ACPCore.h"
   #import "ACPCampaignClassic.h"
   #import "ACPLifecycle.h"
```


<Variant platform="android" task="register" repeat="2"/>

In your app's `OnCreate` method, register the Campaign Classic and Lifecycle extensions:

```java
public class CampaignClassicTestApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        MobileCore.setLogLevel(LoggingMode.VERBOSE);

        try {
            CampaignClassic.registerExtension();
            Lifecycle.registerExtension();
            MobileCore.start(new AdobeCallback () {
              @Override
              public void call(Object o) {
                  MobileCore.configureWithAppID("<YOUR_ENVIRONMENT_FILE_ID>");
                }
              });
        } catch (Exception e) {
            Log.e("CampaignClassicTestApp", e.getMessage());
        }

    }
}
```

<Variant platform="ios-aep" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign Classic extension:

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  MobileCore.registerExtensions([CampaignClassic.self], {
    MobileCore.configureWith(appId: "<YOUR_ENVIRONMENT_FILE_ID>")
  })
  return true;
}
```

#### Objective-C

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileCampaignClassic.class] completion:^{
    [AEPMobileCore configureWithAppId: @"<YOUR_ENVIRONMENT_FILE_ID>"];
  }];
  return YES;
}
```

<Variant platform="ios-acp" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign Classic and Lifecycle extensions:

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   ACPCampaignClassic.registerExtension();
   ACPLifecycle.registerExtension();
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCampaignClassic registerExtension];
    [ACPLifecycle registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```
