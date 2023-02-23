import Alerts from '../../resources/alerts.md'

<Variant platform="android" task="download" repeat="5"/>

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:edge:2.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:2.+'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

2. Import the Mobile Core and Edge extensions in your application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
```

<Variant platform="ios" task="download" repeat="7"/>

1. Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore'
    pod 'AEPIdentity'
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
end
```

2. Import the Mobile Core and Edge libraries:

**Swift**

```swift
// AppDelegate.swift
import AEPCore
import AEPIdentity
import AEPEdge
import AEPEdgeIdentity
```

**Objective-C**

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPIdentity;
@import AEPEdge;
@import AEPEdgeIdentity;
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

```java
public class MobileApp extends Application {
    // Set up the preferred Environment File ID from your mobile property configured in Data Collection UI
    private final String ENVIRONMENT_FILE_ID = "";

    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);
      MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

      // Register Adobe Experience Platform SDK extensions
      MobileCore.registerExtensions(
         Arrays.asList(Edge.EXTENSION, Identity.EXTENSION),
         o -> Log.debug("MobileApp", "MobileApp", "Adobe Experience Platform Mobile SDK initialized.")
       );
    }
}
```

#### Kotlin

```java
class MobileApp : Application() {
    // Set up the preferred Environment File ID from your mobile property configured in Data Collection UI
    private var ENVIRONMENT_FILE_ID: String = ""
    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)
        // Register Adobe Experience Platform SDK extensions
        MobileCore.registerExtensions(
            listOf(Edge.EXTENSION, Identity.EXTENSION)
        ) {
            Log.debug("MobileApp", "MobileApp", "Adobe Experience Platform Mobile SDK initialized.")
        }
    }
}
```

<Variant platform="ios" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([AEPEdgeIdentity.Identity.self, AEPIdentity.Identity.self, Edge.self], {
    MobileCore.configureWith(appId: "yourAppId")
  })
  ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileIdentity.class, AEPMobileEdge.class] completion:^{
    ...
  }];
  [AEPMobileCore configureWithAppId: @"yourAppId"];
  ...
}
```

<Variant platform="android" task="link" repeat="2"/>

**Java**

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
MobileCore.resetIdentities();
com.adobe.marketing.mobile.edge.identity.Identity.getExperienceCloudId(new AdobeCallback<String>() {
    @Override
    public void call(String s) {
        // ignore
    }
});
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
```

<Variant platform="ios" task="link" repeat="4"/>

**Swift**

```swift
MobileCore.setPrivacyStatus(.optedOut)
MobileCore.resetIdentities()
AEPEdgeIdentity.Identity.getExperienceCloudId { _, _ in }
MobileCore.setPrivacyStatus(.optedIn)
```

**Objective-C**

```objectivec
[AEPMobileCore setPrivacyStatus:AEPPrivacyStatusOptedOut];
[AEPMobileCore resetIdentities];
[AEPMobileEdgeIdentity getExperienceCloudId:^(NSString *ecid, NSError *error) {
    // ignore
}];
[AEPMobileCore setPrivacyStatus:AEPPrivacyStatusOptedIn];
```