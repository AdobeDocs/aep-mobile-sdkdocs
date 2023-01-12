<Variant platform="android" task="add" repeat="5"/>

#### Java

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:edge:1.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:1.+'
```

2. Import the Mobile Core and Edge extensions in your application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
```

<Variant platform="ios-aep" task="add" repeat="7"/>

1. Add the Mobile Core and Edge extensions to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
pod 'AEPCore'
pod 'AEPEdge'
pod 'AEPEdgeIdentity'
end
```

2. Import the Mobile Core and Edge libraries:

#### Swift

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
```

#### Objective-C

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
```

<Variant platform="react-native" task="add" repeat="4"/>

1. Install the `@adobe/react-native-aepedge` package:

```bash
cd MyReactApp
npm install @adobe/react-native-aepedge
```

2. Import the Edge library:
   
```typescript
import {Edge, ExperienceEvent} from '@adobe/react-native-aepedge';
```

<Variant platform="android" task="register" repeat="2"/>

#### Java

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);

      try {
        Edge.registerExtension();
        com.adobe.marketing.mobile.edge.identity.Identity.registerExtension();
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

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Edge.self, AEPEdgeIdentity.Identity.self], {
    MobileCore.configureWith(appId: "yourAppId")
  })
  ...
}
```

#### Objective-C

```objective-c
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdge.class, AEPMobileEdgeIdentity.class] completion:^{
    ...
  }];
  [AEPMobileCore configureWithAppId: @"yourAppId"];
  ...
}
```

<Variant platform="react-native" task="register" repeat="1"/>

Please refer to the native code tabs to learn how to register the Edge extension.