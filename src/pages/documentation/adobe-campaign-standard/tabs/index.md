<Variant platform="android" task="add" repeat="5"/>

1. Add the Campaign Standard, [Mobile Core](../mobile-core/index.md) and [Profile](../profile/index.md) extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:campaign:1.+'
implementation 'com.adobe.marketing.mobile:userprofile:1.+'
implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
```

2. Import the Campaign Standard, [Mobile Core](../mobile-core/index.md), [Profile](../profile/index.md), [Lifecycle](../mobile-core/lifecycle/index.md), and [Signal](../mobile-core/signals/index.md) extensions in your application's main activity.

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Campaign;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
```

To complete a manual installation, go to the [Adobe Experience Platform SDKs for Android GitHub](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) repo, fetch the Mobile Core, Campaign Standard, Profile, Lifecycle, and Signal artifacts, and complete the steps in the [manual installation](https://github.com/Adobe-Marketing-Cloud/acp-sdks/blob/master/README.md#manual-installation) section.

<Variant platform="ios-aep" task="add" repeat="7"/>

1. Add the Campaign Standard, [Mobile Core](../mobile-core/index.md), and [Profile](../profile/index.md) extensions to your project using Cocoapods.

![](../../assets/index/aep-cocoapods.png)

2. In Xcode, import the Mobile Core, Campaign Standard, Profile, Lifecycle, Identity, Signal, and Services extensions:

**Swift**

```swift
import AEPCore
import AEPCampaign
import AEPUserProfile
import AEPIdentity
import AEPLifecycle
import AEPSignal
import AEPServices
```

**Objective-C**

```objective-c
@import AEPCore;
@import AEPCampaign;
@import AEPUserProfile;
@import AEPIdentity;
@import AEPLifecycle;
@import AEPSignal;
@import AEPServices;
```

<Variant platform="ios-acp" task="add" repeat="8"/>

1. Add the Campaign Standard, [Mobile Core](../mobile-core/index.md) and [Profile](../profile/index.md) extensions to your project using Cocoapods.

![](../../assets/index/cocoapods.png)

To complete a manual installation, go to the [Adobe Experience Platform SDKs for iOS GitHub](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS) repo, fetch the Mobile Core, Campaign Standard, Profile, Lifecycle, and Signal artifacts, and complete the steps in the [manual installation](https://github.com/Adobe-Marketing-Cloud/acp-sdks/blob/master/README.md#manual-installation-1) section.

2. In Xcode, import the Mobile Core, Campaign Standard, Profile, Lifecycle, and Signal extensions:

**Objective-C**

```objectivec
#import "ACPCore.h"
#import "ACPCampaign.h"
#import "ACPUserProfile.h"
#import "ACPIdentity.h"
#import "ACPLifecycle.h"
#import "ACPSignal.h"
```

**Swift**

```swift
import ACPCore
import ACPCampaign
import ACPUserProfile
```

<Variant platform="react-native" task="add" repeat="7"/>

You'll need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Campaign Standard extension, you'll need to install the [Core extension](../mobile-core/indexs.md). Follow these steps to get started:

1. Create a React Native project.

```bash
react-native init MyReactApp
```

2. Install and link the `@adobe/react-native-acpcampaign` package.

```bash
npm install @adobe/react-native-acpcampaign
react-native link @adobe/react-native-acpcampaign
```

3. Import the extension from `@adobe/react-native-acpcampaign`.

```bash
import {ACPCampaign} from '@adobe/react-native-acpcampaign';
```

<Variant platform="android" task="register" repeat="4"/>

**Java**

In your app's `OnCreate` method, register the Campaign, Identity, Signal, and Lifecycle extensions:

```java
    public class CampaignTestApp extends Application {

        @Override
        public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        MobileCore.setLogLevel(LoggingMode.DEBUG);

        try {
            Campaign.registerExtension();
            UserProfile.registerExtension();
            Identity.registerExtension();
            Lifecycle.registerExtension();
            Signal.registerExtension();
            MobileCore.start(new AdobeCallback () {
            @Override
            public void call(Object o) {
                MobileCore.configureWithAppID("launch-EN2c0ccd3a457a4c47b65a6b085e269c91-staging");
            }
            });
        } catch (InvalidInitException e) {
            Log.e("CampaignTestApp", e.getMessage());
        }

        }
    }
```

For more information about starting Lifecycle, see the [Lifecycle extension in Android guide](../mobile-core/lifecycle/android.md).

<Variant platform="ios-aep" task="register" repeat="6"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign, Identity, Signal, and Lifecycle extensions:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  MobileCore.setLogLevel(.debug)
  let appState = application.applicationState
  let extensions = [
    Campaign.self,
    UserProfile.self,
    Identity.self,
    Lifecycle.self,
    Signal.self
  ]
  MobileCore.registerExtensions(extensions, {
    MobileCore.configureWith(appId: "APP-ID")
    if appState != .background {
      MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
    }
  })

  return true;
}
```

#### Objective-C

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];
  NSArray *extensionsToRegister = @[
    AEPMobileCampaign.class,
    AEPMobileUserProfile.class,
    AEPMobileIdentity.class,
    AEPMobileLifecycle.class,
    AEPMobileSignal.class
  ];
  [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
  [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
  }];
  [AEPMobileCore configureWithAppId: @"APP-ID"];
  // Override point for customization after application launch.
  return YES;
}
```

For more information about starting Lifecycle, see the [Lifecycle extension in iOS guide](../mobile-core/lifecycle/ios.md).

<Variant platform="ios-acp" task="register" repeat="6"/>

In your app's `application:didFinishLaunchingWithOptions:` method, register the Campaign, Identity, Signal, and Lifecycle extensions:

**Swift**

```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
           ACPCore.setLogLevel(.debug)
        ACPCore.configure(withAppId: "launch-EN2c0ccd3a457a4c47b65a6b085e269c91-staging")

        ACPCampaign.registerExtension()
        ACPUserProfile.registerExtension()
        ACPIdentity.registerExtension()
        ACPLifecycle.registerExtension()
        ACPSignal.registerExtension()
        ACPCore.start {
        ACPCore.lifecycleStart(nil)
        }

      return true;
    }
```

**Objective-C**

```objectivec
    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        [ACPCore setLogLevel:ACPMobileLogLevelDebug];
        [ACPCore configureWithAppId:@"launch-EN2c0ccd3a457a4c47b65a6b085e269c91-staging"];

        [ACPCampaign registerExtension];
        [ACPUserProfile registerExtension];
        [ACPIdentity registerExtension];
        [ACPLifecycle registerExtension];
        [ACPSignal registerExtension];
        [ACPCore start:^{
        [ACPCore lifecycleStart:nil];
        }];
      // Override point for customization after application launch.
      return YES;
    }
```

For more information about starting Lifecycle, see the [Lifecycle extension in iOS guide](../mobile-core/lifecycle/ios.md).

<Variant platform="react-native" task="register" repeat="3"/>

To register the Campaign Standard with Core, use the following API:

**JavaScript**

```javascript
ACPCampaign.registerExtension();
```

<Variant platform="android" task="initialize" repeat="7"/>

#### Set up in-app messaging

To learn how to create an in-app message using Adobe Campaign, see the [tutorial on preparing and sending an in-app message](https://experienceleague.adobe.com/docs/campaign-standard/using/communication-channels/in-app-messaging/preparing-and-sending-an-in-app-message.html).

If you are developing an Android application, to correctly display fullscreen in-app messages, add the Campaign Standard extension's `FullscreenMessageActivity` to your AndroidManifest.xml file:

```markup
<activity android:name="com.adobe.marketing.mobile.FullscreenMessageActivity" />
```

In addition to adding the `FullscreenMessageActivity`, a global lifecycle callback must be defined in your app's MainActivity to ensure the proper display of fullscreen in-app messages. To define the global lifecycle callback, see the [implementing global lifecycle callbacks section](../mobile-core/lifecycle/android.md#implementing-global-lifecycle-callbacks) within the Lifecycle documentation.

#### Set up local notifications

To set up local notifications in Android, update the AndroidManifest.xml file with `<receiver android:name="com.adobe.marketing.mobile.LocalNotificationHandler"/>`. To configure the notification icons that the local notification will use, see the [configuring notification icons section](../adobe-analytics-mobile-services/index.md#configuring-notification-icons) within the Adobe Analytics - Mobile Services documentation.

<Variant platform="ios-aep" task="initialize" repeat="1"/>

No additional setup is needed for iOS in-app messaging and local notifications.

<Variant platform="ios-acp" task="initialize" repeat="1"/>

No additional setup is needed for iOS in-app messaging and local notifications.

<Variant platform="android" task="push-messaging" repeat="3"/>

#### Java

**Example**

```java
FirebaseInstanceId.getInstance().getInstanceId()
        .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
            @Override
            public void onComplete(@NonNull Task<InstanceIdResult> task) {
                if (!task.isSuccessful()) {
                    return;
                }
                // Get new Instance ID token
                String registrationID = task.getResult().getToken();
                // Log and toast
                System.out.println("Received new registration token: " + registrationID);
                // invoke the API to send the push identifier to the Identity Service
                MobileCore.setPushIdentifier(registrationID);
            }
});
```

<Variant platform="ios-aep" task="push-messaging" repeat="7"/>

iOS simulators do **not** support push messaging.

#### Swift

**Example**

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  // Set the deviceToken that the APNS has assigned to the device
  MobileCore.setPushIdentifier(deviceToken: deviceToken)
  //...
}
```

#### Objective-C

**Example**

```objective-c
- (void) application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  // Set the deviceToken that the APNS has assigned to the device
  [AEPMobileCore setPushIdentifier:deviceToken];
  //...
}
```

<Variant platform="ios-acp" task="push-messaging" repeat="7"/>

iOS simulators do **not** support push messaging.

#### Swift

**Example**

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
  // Set the deviceToken that the APNS has assigned to the device
  ACPCore.setPushIdentifier(deviceToken)
  //...
}
```

#### Objective-C

**Example**

```objective-c
- (void) application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  // Set the deviceToken that the APNS has assigned to the device
  [ACPCore setPushIdentifier:deviceToken];
  //...
}
```


<Variant platform="react-native" task="push-messaging" repeat="3"/>

Before you use the following API in your React Native project, complete the steps in the **Android** and **iOS** tabs to set up platform-specific push configuration.

#### Example

```javascript
ACPCore.setPushIdentifier("pushID");
```

<Variant platform="android" task="track" repeat="1"/>

<Variant platform="ios-aep" task="track" repeat="1"/>

<Variant platform="ios-acp" task="track" repeat="1"/>

<Variant platform="android" task="handling" repeat="1"/>

<Variant platform="ios-aep" task="handling" repeat="1"/>

<Variant platform="ios-acp" task="handling" repeat="1"/>

<Variant platform="android" task="customize" repeat="1"/>

<Variant platform="ios-aep" task="customize" repeat="1"/>

<Variant platform="ios-acp" task="customize" repeat="1"/>