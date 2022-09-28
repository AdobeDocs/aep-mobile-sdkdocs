<Variant platform="android" task="download" repeat="5"/>

**Java**

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:edge:1.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:1.+'
implementation 'com.adobe.marketing.mobile:edgeconsent:1.+'
```

2. Import the Mobile Core and Edge extensions in your Application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.edge.consent.Consent;
```

<Variant platform="ios-aep" task="download" repeat="7"/>

1. Add the Mobile Core and Edge extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore'
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
    pod 'AEPEdgeConsent'
end
```

2. Import the Mobile Core and Edge libraries:

**Swift**

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import AEPEdgeConsent
```

**Objective-C**

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPEdgeConsent;
```

<Variant platform="ios-acp" task="download" repeat="1"/>

This extension is built on the AEPCore (3.x) and it is not compatible with ACPCore (2.x). Please follow [the guide for migrating to the Swift AEPCore](../../migrate-to-swift.md).

<Variant platform="android" task="register" repeat="2"/>

**Java**

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);
      try {
        Edge.registerExtension();
        Consent.registerExtension(); // register Consent
        Identity.registerExtension();
        // register other extensions
        MobileCore.start(new AdobeCallback() {
          @Override
          public void call(final Object o) {
            MobileCore.configureWithAppID("yourAppId");
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
    MobileCore.registerExtensions([Identity.self, Edge.self, Consent.self], {
        MobileCore.configureWith(appId: "yourLaunchEnvironmentID")
    })
  ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileEdgeConsent.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];
  }];
  ...
}
```