<Variant platform="android" task="download" repeat="6"/>

**Java**

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:edge:1.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:1.+'
implementation 'com.adobe.marketing.mobile:edgeconsent:1.+'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

2. Import the Mobile Core and Edge extensions in your Application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.edge.consent.Consent;
```

<Variant platform="ios" task="download" repeat="7"/>

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

<Variant platform="ios" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Edge.self, Consent.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
  ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileEdgeConsent.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```