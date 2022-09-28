<Variant platform="android" task="download" repeat="5"/>

**Java**

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:identity:1.+'
implementation 'com.adobe.marketing.mobile:edge:1.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:1.+'
```

2. Import the Mobile Core and Edge extensions in your application class.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios-aep" task="download" repeat="7"/>

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

<Variant platform="android" task="register" repeat="2"/>

**Java**

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);
      MobileCore.configureWithAppID("yourLaunchEnvironmentID");

      try {
        Edge.registerExtension();
        com.adobe.marketing.mobile.edge.identity.Identity.registerExtension(); // Register Identity for Edge Network with Mobile Core
        com.adobe.marketing.mobile.Identity.registerExtension(); // Register Identity with Mobile Core
        MobileCore.start(new AdobeCallback() {
          @Override
          public void call(final Object o) {
            // processing after start
          }});
      } catch (Exception e) {
         //Log the exception
     }
    }
}
```

<Variant platform="ios-aep" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([AEPEdgeIdentity.Identity.self, AEPIdentity.Identity.self, Edge.self], {
    MobileCore.configureWith(appId: "yourLaunchEnvironmentID")
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
  [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];
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

<Variant platform="ios-aep" task="link" repeat="4"/>

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