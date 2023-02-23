<Variant platform="android" task="add" repeat="4"/>

#### Java

Add the Mobile Core, Lifecycle and Campaign Classic dependencies in your app's Gradle file.

```gradle
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:lifecycle:2.+'
implementation 'com.adobe.marketing.mobile:campaignclassic:2.+'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

<Variant platform="ios" task="add" repeat="4"/>

Add the Campaign Classic and [Mobile Core](../mobile-core/index.md) libraries to your project.

You can add the following pods to your `Podfile`:

```ruby
pod 'AEPCore'
pod 'AEPCampaignClassic'
```

or you can manually include the XCFrameworks by following this GitHub [documentation](https://github.com/adobe/aepsdk-campaignclassic-ios/#binaries).

<Variant platform="android" task="register" repeat="5"/>

In your app's `OnCreate` method, register the Campaign Classic and Lifecycle extensions:

#### Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.CampaignClassic;
import com.adobe.marketing.mobile.Lifecycle;

public class MainApp extends Application {

    private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);
        
        MobileCore.registerExtensions(
            Arrays.asList(CampaignClassic.EXTENSION, Lifecycle.EXTENSION),
            o -> Log.d("MainApp", "Adobe Experience Platform Campaign Classic Mobile SDK was initialized.")
        );
    }
}
```

#### Kotlin

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.CampaignClassic;
import com.adobe.marketing.mobile.Lifecycle;

class MainApp : Application() {

  private var ENVIRONMENT_FILE_ID: String = "YOUR_APP_ENVIRONMENT_ID"

    override fun onCreate() {
        super.onCreate()

        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)

        MobileCore.registerExtensions(
          listOf(CampaignClassic.EXTENSION, Lifecycle.EXTENSION)
        ) {
          Log.d("MainApp", "Adobe Experience Platform Campaign Classic Mobile SDK was initialized")
        }
    }

}
```

<Variant platform="ios" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign Classic extension:

#### Swift

```swift
// AppDelegate.swift

import AEPCore
import AEPCampaignClassic

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

@import AEPCore;
@import AEPCampaignClassic;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileCampaignClassic.class] completion:^{
    [AEPMobileCore configureWithAppId: @"<YOUR_ENVIRONMENT_FILE_ID>"];
  }];
  return YES;
}
```
