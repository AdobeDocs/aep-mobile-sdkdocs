---
title: Get the Adobe Experience Platform Mobile SDK
description: A guide that explains how to install the Adobe Experience Platform Mobile SDK in your application.
keywords: 
- Guide
- Installation
- Tutorial
---

# Get the Adobe Experience Platform Mobile SDK

The Adobe Experience Platform SDK is available for Apple iOS (includes iOS, iPadOS, and tvOS) via [Cocoapods](https://cocoapods.org/) and [Swift Package Manager](https://www.swift.org/package-manager/), and for Google Android via [Gradle](https://gradle.org).

Follow the directions below to include the SDK into your mobile application.

<InlineAlert variant="info" slots="text"/>

For iOS and Android projects, the recommended approach for integrating the SDK is to use supported dependency and package managers as listed for each platform such as Maven (Android), and Cocoapods or Swift Package Manager (iOS).

<InlineAlert variant="info" slots="text1, text2"/>

The SDK can also be downloaded for iOS and Android projects following the listed methods:

1. For iOS, XCFramework for different SDK extensions are also available for download from corresponding GitHub repositories. For example, Mobile Core and related extensions XCFramework zip file can be found on the GitHub by selecting [Releases](https://github.com/adobe/aepsdk-core-ios/releases).
2. For Android, the aar is already available for download from Maven central. For example, Mobile Core extension aar file can be found under the corresponding [package](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/core/2.3.1/versions) by selecting [Browse](https://repo1.maven.org/maven2/com/adobe/marketing/mobile/core/2.3.1/).

### From the Data Collection UI

1. Select the tag property you created earlier in the Data Collection UI.
2. In your tag property's details page, Select the **Environments** tab on the left nav. The **Environments** tab lists the different environments where you can publish, e.g. **Development**, **Staging**, and **Production**.
3. Select the install package icon (under **INSTALL** column) for the appropriate environment row. You should see a dialog box titled **Mobile Install Instructions**.
4. On the open dialog box, select the appropriate platform tab **Android** or **iOS**.
5. Copy the necessary dependencies and initialization code from the dialog box to your mobile application project.

### Android

``` text
Latest version of the Adobe Experience Platform SDKs for Android supports Android 5.0 (API 21) or later.
```

### iOS

``` text
Adobe Experience Platform SDKs for iOS support **iOS 12 or later**; **requires** Swift 5.1 or newer; **and** Xcode 15.0 or newer. 
In order to support the new Apple M1 architecture while maintaining support for existing Intel architecture, the Adobe Experience Platform SDKs are now distributed using XCFrameworks. Please see the [current SDK versions](../current-sdk-versions.md) for more information on the latest extension versions.
```

## Installation instructions

If you cannot access the **Mobile Install Instructions** dialog box in the Data Collection UI, complete the following sections to get the Adobe Experience Platform SDK. If you already completed the steps in the Mobile Install Instructions dialog box, no need to complete these steps.

### 1. Add dependencies to your project

Each extension needs to be added as a dependency to the mobile application project. The following examples will add the Mobile Core and Profile extensions.

#### Android

Add the dependencies to `build.gradle` for each extension.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:userprofile'
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:identity'
implementation 'com.adobe.marketing.mobile:signal'
implementation 'com.adobe.marketing.mobile:lifecycle'
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

#### iOS

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

### 2. Add initialization code

Next, you'll need to initialize the SDK by registering all the solution extensions added as dependencies to your project with Mobile Core.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

<InlineAlert variant="warning" slots="text"/>

Currently, the Adobe Experience Platform SDKs do not support running under [Direct Boot](https://developer.android.com/training/articles/direct-boot) mode on Android devices. For Android applications configured to be run during Direct Boot mode, verify if the user has unlocked the devices by calling [UserManager.isUserUnlocked()](https://developer.android.com/reference/android/os/UserManager#isUserUnlocked()) before initializing the SDK.

There are two ways to achieve this:

#### a) Using MobileCore.initialize API (Recommended)

The `MobileCore.initialize` API provides a simple way to initialize AEP SDK. It automatically registers solution extensions and enables lifecycle tracking, eliminating the need for manual setup. Refer to the [API documentation](../base/mobile-core/api-reference.md#initialize) for additional configuration options.

##### Android Kotlin

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

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
    MobileCore.initialize(this, "ENVIRONMENT_ID")
  }
}
```

##### Android Java

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

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
    MobileCore.initialize(this, "ENVIRONMENT_ID");
  }
}
```

##### iOS Swift

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

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

##### iOS Objective-C

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

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

#### b) Manual Extension Registration using MobileCore.registerExtensions API

In older SDK versions, solution extensions must be manually imported and registered with MobileCore using the `MobileCore.registerExtensions` API.

The following code snippets show how to import and register the Mobile Core and Profile extensions, along with Identity, Lifecycle, Signal, and other extensions for reference.

##### Android Kotlin

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

##### Android Java

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

##### iOS Swift

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

##### iOS Objective-C

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

### 3. Ensure app permissions (Android only)

For Android, the SDK requires standard [network connection](https://developer.android.com/training/basics/network-ops/connecting) permissions in your manifest to send data, collect cellular provider, and record offline tracking calls.

To enable these permissions, add the following lines to your `AndroidManifest.xml` file, located in your app's application project directory:

```markup
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Additional information

* [How to use Gradle for Android](https://docs.gradle.org/current/userguide/userguide.html)
* [How to use CocoaPods for iOS](https://guides.cocoapods.org/using/using-cocoapods)
* [How to use Swift Package Manager for iOS](https://www.swift.org/package-manager/#example-usage)
* [Current SDK Versions](../current-sdk-versions.md)

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance
