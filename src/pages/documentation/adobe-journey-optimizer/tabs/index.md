<Variant platform="android" task="import" repeat="5"/>

#### Java

1. Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:edge:1.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:1.+'
implementation 'com.adobe.marketing.mobile:messaging:1.+'
```

2. Import the Mobile Core, Edge, Edge Identity, and Messaging extensions in your application class.

```java
import com.adobe.marketing.mobile.*;
import com.adobe.marketing.mobile.edge.identity.Identity;
```

<Variant platform="ios-aep" task="import" repeat="7"/>

1. Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using Cocoapods. Add the following pods to your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore'
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
    pod 'AEPMessaging'
end
```

2. Import the Mobile Core, Edge, Edge Identity, and Messaging libraries:

#### Swift

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import AEPMessaging
```

#### Objective-C

```objc
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPMessaging;
```

<Variant platform="ios-acp" task="import" repeat="1"/>

This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the [guide for migrating to the Swift AEPCore](../migrate-to-swift.md).

<Variant platform="android" task="register" repeat="2"/>

#### Java

```java
public class MobileApp extends Application {
    @Override
    public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);
      MobileCore.configureWithAppID("yourAppId");
      try {
        Edge.registerExtension();
        Identity.registerExtension();
        Messaging.registerExtension(); // register Messaging
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

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Edge.self, Messaging.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
  ...
}
```

#### Objective-C

```objc
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileMessaging.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```

<Variant platform="ios-acp" task="register" repeat="1"/>

This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the [guide for migrating to the Swift AEPCore](../migrate-to-swift.md).

<Variant platform="android" task="sync" repeat="7"/>

To retrieve the push token from Firebase Messaging Service, please read the tutorial on [retrieving the registration token](https://firebase.google.com/docs/cloud-messaging/android/client#retrieve-the-current-registration-token) within the Firebase documentation. After retrieving the push token, you can use the following API to sync it with Profile in Platform.

#### Java

**Syntax**

```java
public static void setPushIdentifier(final String pushIdentifier);
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `pushIdentifier` | String | The push token value. |

**Example**

```java
FirebaseMessaging.getInstance().getToken()
        .addOnCompleteListener(new OnCompleteListener<String>() {
            @Override
            public void onComplete(@NonNull Task<String> task) {
                if (task.isSuccessful()) {
                    String token = task.getResult();
                    MobileCore.setPushIdentifier(token);
                }
            }
        });
```

<Variant platform="ios-aep" task="sync" repeat="13"/>

#### Swift

To retrieve the push token in iOS, please read the tutorial on [registering your application](https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns) within Apple's documentation. After retrieving the push token, you can use the following API to sync it with Profile in Platform.

**Syntax**

```swift
public static func setPushIdentifier(_ deviceToken: Data?)
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `deviceToken` | Data | The push token value. |

**Example**

```swift
func application(_: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    MobileCore.setPushIdentifier(deviceToken)
}
```

#### Objective-C

**Syntax**

```objc
public static func setPushIdentifier(_ deviceToken: Data?)
```

| **Parameter** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| `deviceToken` | Data | The push token value. |

**Example**

```objc
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken { 
    [AEPMobileCore setPushIdentifier:deviceToken];
}
```

<Variant platform="ios-acp" task="sync" repeat="1"/>

This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the [guide for migrating to the Swift AEPCore](../migrate-to-swift.md).