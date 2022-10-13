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

<Variant platform="ios-aep" task="add" repeat="1"/>

Adobe Campaign Classic has not yet been released as an AEP 3.x Swift extension. Please reach out to your Adobe customer account manager if you have any questions or would like to express interest in the AEP 3.x Campaign Classic extension.

<Variant platform="ios-acp" task="add" repeat="8"/>

1. Add the Campaign Classic and [Mobile Core](../mobile-core/index.md) libraries to your project.

You can manually include the [Mobile Core](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.1-ACPCore) and [Campaign Classic](https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases/tag/v1.0.0-ACPCampaignClassic) libraries found in Github or add the following pods to your `Podfile`:

```pod
pod 'ACPCampaignClassic'
pod 'ACPLifecycle'
pod 'ACPCore'
```

2. In the Xcode project, import the Mobile Core and Campaign Classic extensions:

**Objective-C**

```objectivec
   #import "ACPCore.h"
   #import "ACPCampaignClassic.h"
   #import "ACPLifecycle.h"
```

**Swift**

```swift
   import ACPCore
   import ACPCampaignClassic
   import ACPLifecycle
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
            MobileCore.start(null);
        } catch (Exception e) {
            Log.e("CampaignClassicTestApp", e.getMessage());
        }

    }
}
```

<Variant platform="ios-aep" task="register" repeat="1"/>

Adobe Campaign Classic has not yet been released as an AEP 3.x Swift extension. Please reach out to your Adobe customer account manager if you have any questions or would like to express interest in the AEP 3.x Campaign Classic extension.

<Variant platform="ios-acp" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign Classic and Lifecycle extensions:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   ACPCampaignClassic.registerExtension();
   ACPLifecycle.registerExtension();
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCampaignClassic registerExtension];
    [ACPLifecycle registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```
