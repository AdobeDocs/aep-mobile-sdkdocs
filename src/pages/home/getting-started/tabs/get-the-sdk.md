---
noIndex: true
---

<Variant platform="android" task="get" repeat="1"/>

Latest version of the Adobe Experience Platform SDKs for Android supports Android 5.0 (API 21) or later.

<Variant platform="ios" task="get" repeat="2"/>

Adobe Experience Platform SDKs for iOS support **iOS 12 or later**; **requires** Swift 5.1 or newer; **and** Xcode 15.0 or newer.

In order to support the new Apple M1 architecture while maintaining support for existing Intel architecture, the Adobe Experience Platform SDKs are now distributed using XCFrameworks. Please see the [current SDK versions](../current-sdk-versions.md) for more information on the latest extension versions.

<!-- <Variant platform="react-native" task="get" repeat="7"/>

#### React Native

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native **version 0.60.0 or later**. For the latest installation instructions, see the `README` file in the [`react-native-acpcore`](https://github.com/adobe/react-native-acpcore) repository.

For React Native, you should install [Node.js](https://nodejs.org) to download packages from [npm](https://npmjs.com). For additional instructions, see this [tutorial on getting started with React Native applications](https://facebook.github.io/react-native/docs/getting-started).

v2.0.0 and above of the AEP Mobile SDK React Native plugins use [autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md), which links plugins' native dependencies automatically. For iOS development, after installing the plugins from npm, download the pod dependencies by running the following command:

`cd ios && pod install && cd ..`

To update native dependencies to latest available versions, run the following command:

`cd ios && pod update && cd ..` -->

<!-- <Variant platform="flutter" task="get" repeat="3"/>

#### Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 1.10.0 or later**.

For the latest Flutter installation instructions, see the package [install tab](https://pub.dev/packages/flutter_acpcore#-installing-tab-). -->

<Variant platform="android" task="add-dependencies" repeat="3"/>

Add the dependencies to `build.gradle` for each extension.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:userprofile'
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:identity'
implementation 'com.adobe.marketing.mobile:signal'
implementation 'com.adobe.marketing.mobile:lifecycle'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

</InlineNestedAlert>

<Variant platform="ios" task="add-dependencies" repeat="8"/>

Create a `Podfile` if you do not already have one:

```pod
pod init
```

Add the dependencies to your `Podfile` for each extension.

```pod
use_frameworks!
pod 'AEPEdgeConsent', '~> 5.0'
pod 'AEPAssurance', '~> 5.0'
pod 'AEPEdgeIdentity', '~> 5.0'
pod 'AEPEdge', '~> 5.0'
pod 'AEPUserProfile', '~> 5.0'
pod 'AEPCore', '~> 5.0'
pod 'AEPIdentity', '~> 5.0'
pod 'AEPSignal', '~> 5.0'
pod 'AEPLifecycle', '~> 5.0'
```

If Cocoapods cannot not find the dependencies, you may need to run this command:

```pod
pod repo update
```

Save the `Podfile` and run install:

```pod
pod install
```

<Variant platform="android-java" task="add-simplified-initialization" repeat="1"/>

```java
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
...
import android.app.Application;
...
public class MainApp extends Application {
  @Override
  public void onCreate(){
    super.onCreate();
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    MobileCore.initialize(this, "<your_environment_file_id>");
  }
}
```

<Variant platform="android-kotlin" task="add-simplified-initialization" repeat="1"/>

```kotlin
import com.adobe.marketing.mobile.LoggingMode
import com.adobe.marketing.mobile.MobileCore
...
import android.app.Application
...

class MainApp : Application() {
  override fun onCreate() {
    super.onCreate()
    MobileCore.setLogLevel(LoggingMode.DEBUG)
    MobileCore.initialize(this, "<your_environment_file_id>")
  }
}
```

<Variant platform="ios-swift" task="add-simplified-initialization" repeat="1"/>

```swift
// AppDelegate.swift
import AEPCore
import AEPServices
...

final class AppDelegate: NSObject, UIApplicationDelegate {
  func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    MobileCore.setLogLevel(.debug)
    MobileCore.initialize(appId: "ENVIRONMENT_ID")
    ...
  }
}
```

<Variant platform="ios-objc" task="add-simplified-initialization" repeat="1"/>

```objectivec
// AppDelegate.m
#import "AppDelegate.h"
@import AEPCore;
@import AEPServices;
...
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];  
  [AEPMobileCore initializeWithAppId:@"ENVIRONMENT_ID" completion:^{
      NSLog(@"AEP Mobile SDK is initialized");
  }];
  ...
  return YES;
}
@end
```

<Variant platform="android-java" task="add-initialization" repeat="1"/>

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Assurance;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
import com.adobe.marketing.mobile.edge.consent.Consent;
import com.adobe.marketing.mobile.edge.identity.Identity;
import java.util.Arrays;
import java.util.List;
...
import android.app.Application;
...
public class MainApp extends Application {
  @Override
  public void onCreate(){
    super.onCreate();
    MobileCore.setApplication(this);
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    List<Class<? extends Extension>> extensions = Arrays.asList(
      Consent.EXTENSION,
      Assurance.EXTENSION,
      com.adobe.marketing.mobile.edge.identity.Identity.EXTENSION,
      com.adobe.marketing.mobile.Identity.EXTENSION,
      Edge.EXTENSION,
      UserProfile.EXTENSION,
      Lifecycle.EXTENSION,
      Signal.EXTENSION
    );

    MobileCore.registerExtensions(extensions, new AdobeCallback () {
        @Override
        public void call(Object o) {
            MobileCore.configureWithAppID("<your_environment_file_id>");
        }
    });
  }
}
```

<Variant platform="android-kotlin" task="add-initialization" repeat="1"/>

```kotlin
import com.adobe.marketing.mobile.AdobeCallback
import com.adobe.marketing.mobile.Assurance
import com.adobe.marketing.mobile.Edge
import com.adobe.marketing.mobile.Extension
import com.adobe.marketing.mobile.Identity
import com.adobe.marketing.mobile.Lifecycle
import com.adobe.marketing.mobile.LoggingMode
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Signal
import com.adobe.marketing.mobile.UserProfile
import com.adobe.marketing.mobile.edge.consent.Consent
import com.adobe.marketing.mobile.edge.identity.Identity as EdgeIdentity
...
import android.app.Application
...

class MainApp : Application() {
  override fun onCreate() {
    super.onCreate()
    MobileCore.setApplication(this)
    MobileCore.setLogLevel(LoggingMode.DEBUG)
    val extensions: List<Class<out Extension>> = listOf(
      Consent.EXTENSION,
      Assurance.EXTENSION,
      EdgeIdentity.EXTENSION,
      Identity.EXTENSION,
      Edge.EXTENSION,
      UserProfile.EXTENSION,
      Lifecycle.EXTENSION,
      Signal.EXTENSION
    )
    MobileCore.registerExtensions(extensions) { 
      MobileCore.configureWithAppID("<your_environment_file_id>")
    }
  }
}
```

<Variant platform="ios-swift" task="add-initialization" repeat="1"/>

```swift
// AppDelegate.swift
import AEPCore
import AEPEdgeConsent
import AEPAssurance
import AEPEdgeIdentity
import AEPEdge
import AEPUserProfile
import AEPIdentity
import AEPLifecycle
import AEPSignal
import AEPServices

final class AppDelegate: NSObject, UIApplicationDelegate {
  func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    MobileCore.setLogLevel(.debug)
    let appState = application.applicationState
    let extensions = [
                  Consent.self,
                  Assurance.self,
                  AEPEdgeIdentity.Identity.self,
                  AEPIdentity.Identity.self,
                  Edge.self,
                  UserProfile.self,
                  Lifecycle.self,
                  Signal.self
                ]
    MobileCore.registerExtensions(extensions, {
        MobileCore.configureWith(appId: "<your_environment_file_id>")
        if appState != .background {
            MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
        }
    })
    ...
  }
}
```

<Variant platform="ios-objc" task="add-initialization" repeat="1"/>

```objectivec
// AppDelegate.m
#import "AppDelegate.h"
@import AEPCore;
@import AEPEdgeConsent;
@import AEPAssurance;
@import AEPEdgeIdentity;
@import AEPEdge;
@import AEPUserProfile;
@import AEPIdentity;
@import AEPLifecycle;
@import AEPSignal;
@import AEPServices;
...
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];
  const UIApplicationState appState = application.applicationState;
  NSArray *extensionsToRegister = @[
                                AEPMobileEdgeConsent.class,
                                AEPMobileAssurance.class,
                                AEPMobileEdgeIdentity.class,
                                AEPMobileEdge.class,
                                AEPMobileUserProfile.class,
                                AEPMobileIdentity.class,
                                AEPMobileLifecycle.class,
                                AEPMobileSignal.class
                              ];
  [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
      // only start lifecycle if the application is not in the background
      if (appState != UIApplicationStateBackground) {
          [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
      }
  }];
  [AEPMobileCore configureWithAppId: @"<your_environment_file_id>"];
  ...
  return YES;
}
@end
```

<Variant platform="react-native" task="add-initialization" repeat="5"/>

For React Native apps, initialize the SDK using native code in your `AppDelegate` (iOS) and `MainApplication` (Android).

#### iOS

```objectivec
#import "ACPCore.h"
#import "ACPUserProfile.h"
#import "ACPIdentity.h"
#import "ACPLifecycle.h"
#import "ACPSignal.h"
...
@implementation AppDelegate
-(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore setLogLevel:ACPMobileLogLevelDebug];
    [ACPCore configureWithAppId:@"<your_environment_file_id>"];
    [ACPUserProfile registerExtension];
    [ACPIdentity registerExtension];
    [ACPLifecycle registerExtension];
    [ACPSignal registerExtension];

    const UIApplicationState appState = application.applicationState;
    [ACPCore start:^{
      // only start lifecycle if the application is not in the background
      if (appState != UIApplicationStateBackground) {
        [ACPCore lifecycleStart:nil];
      }
    }];
    ...
  return YES;
}

@end
```

#### Android

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.InvalidInitException;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
...
import android.app.Application;
...
public class MainApplication extends Application implements ReactApplication {
  ...
  @Override
  public void onCreate(){
    super.onCreate();
    ...
    MobileCore.setApplication(this);
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    MobileCore.setWrapperType(WrapperType.REACT_NATIVE);

    try {
      UserProfile.registerExtension();
      Identity.registerExtension();
      Lifecycle.registerExtension();
      Signal.registerExtension();
      MobileCore.start(new AdobeCallback () {
          @Override
          public void call(Object o) {
            MobileCore.configureWithAppID("<your_environment_file_id>");
         }
      });
    } catch (InvalidInitException e) {
      ...
    }
  }
}
```

<Variant platform="flutter" task="add-initialization" repeat="3"/>

#### Dart

For Flutter apps, initialize the SDK using native code in your `AppDelegate` and `MainApplication` in iOS and Android, respectively.

The initialization code is located in the [Flutter ACPCore Github README](https://github.com/adobe/flutter_acpcore).

<Variant platform="cordova" task="add-initialization" repeat="5"/>

For Cordova apps, initialize the SDK using native code in your `AppDelegate` and `MainApplication` in iOS and Android, respectively.

**iOS**

```text
// Import the SDK
#import "ACPCore.h"
#import "ACPLifecycle.h"
#import "ACPIdentity.h"
#import "ACPSignal.h"
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {  
  // make sure to set the wrapper type at the beginning of initialization
  [ACPCore setWrapperType:ACPMobileWrapperTypeCordova];

  //...
  [ACPCore configureWithAppId:@"<your_environment_file_id>"];
  [ACPIdentity registerExtension];
  [ACPLifecycle registerExtension];
  [ACPSignal registerExtension];
  // Register any additional extensions

  [ACPCore start:nil];
}
```

**Android**

```java
// Import the SDK
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.WrapperType;

@Override
public void onCreate() {
  //...
  MobileCore.setApplication(this);
  MobileCore.configureWithAppID("<your_environment_file_id>");

  // make sure to set the wrapper type at the beginning of initialization
  MobileCore.setWrapperType(WrapperType.CORDOVA);

  try {
    Identity.registerExtension();
    Lifecycle.registerExtension();
    Signal.registerExtension();

    // Register any additional extensions
  } catch (Exception e) {
    // handle exception
  }

  MobileCore.start(null);
}
```
