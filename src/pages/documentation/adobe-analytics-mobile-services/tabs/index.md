<Variant platform="android" task="add" repeat="4"/>

Add the Mobile Services extension to your project using the app's Gradle file.

#### Java

Import the Mobile Services extension in your application's main activity.

```java
import com.adobe.marketing.mobileservices.*;
```

<Variant platform="ios" task="add" repeat="6"/>

You can add the library to your project through your `Podfile` by adding the `AEPMobileServices` pod.

Import the library into your project:

#### Swift

```swift
import AEPCore
import AEPServices
import AEPIdentity
import AEPLifecycle
import AEPAnalytics
import AEPMobileServices
```

#### Objective-C

```objectivec
@import AEPCore
@import AEPServices;
@import AEPIdentity
@import AEPLifecycle
@import AEPAnalytics
@import AEPMobileServices
```

<Variant platform="android" task="register" repeat="3"/>

#### Java

Call the `setApplication()` method once in the `onCreate()` method of your main activity. For example, your code might look like the following:

```java
public class MobileServicesApp extends Application {

@Override
public void onCreate() {
     super.onCreate();
     MobileCore.setApplication(this);

     try {
             Analytics.registerExtension();
             MobileServices.registerExtension(); //Register Mobile Services with Mobile Core
             Lifecycle.registerExtension();
             Identity.registerExtension();
             MobileCore.start(null);
     } catch (Exception e) {
     //Log the exception
     }
  }
}
```

<Variant platform="ios" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions` function, register the Mobile Services extension with the Mobile Core:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Lifecycle.self, Analytics.self,  AEPMobileServices.self], {
        MobileCore.configureWith(appId: "yourAppId")
        MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
    })
  ...
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSArray *extensionsToRegister = @[AEPMobileIdentity.class, AEPMobileLifecycle.class, AEPMobileAnalytics.class, AEPMobileServices.class];
    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
        // Use the App id assigned to this application via Adobe Launch
        [AEPMobileCore configureWithAppId: @"yourAppId"];
        [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
    }];
    ....
}
```

<Variant platform="android" task="set-push-messaging" repeat="6"/>

Obtain the registration ID/token by using the [Firebase Cloud Messaging (FCM) APIs](https://firebase.google.com/docs/cloud-messaging/android/client).

#### Java

**Syntax**

```java
void setPushIdentifier(final String registrationID)
```

**Example**

```java
MobileCore.setPushIdentifier(registrationID);
```

<Variant platform="ios" task="set-push-messaging" repeat="9"/>

iOS simulators do not support push messaging.

After following Apple's [configure remote notification document](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1), to get your app ready to handle push notifications, set the push token by using the [`setPushIdentifier`](../mobile-core/identity/api-reference.md#setpushidentifier) API:

**Syntax**

```swift
@objc(setPushIdentifier:)
public static func setPushIdentifier(_ deviceToken: Data?)
```

**Example**

#### Swift

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    let tokenParts = deviceToken.map { data in String(format: "%02.2hhx", data) }
    let token = tokenParts.joined()
    print("Device Token: (token)")

    // Send push token to experience platform
    MobileCore.setPushIdentifier(deviceToken)
}
```

#### Objective-C

```objective-c
- (void)application:(UIApplication *)app
        didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)devToken {
    // Forward the token to your provider, using a custom method.
    NSUInteger len = devToken.length;
    if (len == 0) {
        return;
    }
    const unsigned char *buffer = devToken.bytes;
    NSMutableString *hexString  = [NSMutableString stringWithCapacity:(len * 2)];
    for (int i = 0; i < len; ++i) {
        [hexString appendFormat:@"%02x", buffer[i]];
    }
    NSString *token = [hexString copy];
    [AEPMobileCore setPushIdentifier:token];
}
```

<Variant platform="android" task="set-push-tracking" repeat="1"/>

On Android, the SDK handles push tracking to analytics without any additional set up. If the application has implemented the `FirebaseMessaginService` class and will handle the push notifications when the application is in foreground, read the push data from the received Intent and add it to the intent extras of the Activity to be launched. An example can be found in [the Mobile Services implement push messaging tutorial](https://experienceleague.adobe.com/docs/mobile-services_en/android/messaging-android/push-messaging/t-mob-impl-push-deeplinking-android-4x.html?lang=en).

<Variant platform="ios" task="set-push-tracking" repeat="8"/>

Use the following API to track a push messaging click in Adobe Analytics.

**Syntax**

```swift
@objc(collectLaunchInfo:)
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

#### Swift

```swift
AEPCore.collectLaunchInfo(userInfo)
```

#### Objective-C

```objectivec
[AEPMobileCore collectLaunchInfo:userInfo];
```

<Variant platform="android" task="set-in-app-messaging" repeat="8"/>

Update the `AndroidManifest.xml` file to declare the full screen activity and enable the Message Notification Handler.

#### Java

If you are using either fullscreen message or local notification functionality, update the `AndroidManifest.xml` with the following:

```xml
<activity
    android:name="com.adobe.marketing.mobile.MessageFullScreenActivity"
    android:windowSoftInputMode="adjustUnspecified|stateHidden" >
</activity>
<receiver android:name="com.adobe.marketing.mobile.MessageNotificationHandler" />
```

If you selected a modal layout, select one of the following themes for the message:

* `Theme.Translucent.NoTitleBar.Fullscreen`
* `Theme.Translucent.NoTitleBar`
* `Theme.Translucent`

**Example**

```xml
<activity
android:name="com.adobe.marketing.mobile.MessageFullScreenActivity"
android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
android:windowSoftInputMode="adjustUnspecified|stateHidden" >
</activity>
<receiver android:name="com.adobe.marketing.mobile.MessageNotificationHandler" />
```

<Variant platform="ios" task="set-in-app-messaging" repeat="1"/>

No setup is required for iOS, since Mobile SDK automatically handles in-app message support.

<Variant platform="android" task="set-icon" repeat="12"/>

#### setSmallIconResourceId

This API sets the small icon that is used for notifications that are created by the SDK. This icon appears in the status bar and is the secondary image that is displayed shown when the user sees the complete notification in the notification center.

**Syntax**

```java
public static void setSmallIconResourceId(final int resourceId);
```

**Example**

```java
MobileCore.setSmallIconResourceID(R.drawable.appIcon);
```

#### setLargeIconResourceId

This API sets the large icon that is used for notifications that are created by the SDK. This icon is the primary image that is displayed when the user sees the complete notification in the notification center.

**Syntax**

```java
public static void setLargeIconResourceId(final int resourceId);
```

**Example**

```java
MobileCore.setLargeIconResourceId(R.drawable.appIcon);
```

<Variant platform="ios" task="set-icon" repeat="1"/>

No setup is required, since icons are automatically handled by the SDK for iOS.

<Variant platform="android" task="track-deep-link" repeat="5"/>

#### Java

**Syntax**

```java
public static void trackAdobeDeepLink(final Uri uri)
```

**Example**

```java
MobileServices.trackAdobeDeepLink
```

<Variant platform="ios" task="track-deep-link" repeat="15"/>

#### Swift

**Syntax**

```swift
public static func trackAdobeDeepLink(url: String)
```

**Example**

```swift
func application(_ application: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    AEPMobileServices.trackAdobeDeepLink(url)
    /*
     Handle deep link
     */
    return true
}
```

#### Objective-C

**Syntax**

```objective-c
+ (void) trackAdobeDeepLink: (NSURL* _Nonnull) deeplink;
```

**Example**

```objective-c
-(BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation{
    [AEPMobileServices trackAdobeDeepLink:url];
    ....
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

**Swift**

```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let urlContexts = URLContexts.first else { return }
    AEPMobileServices.trackAdobeDeepLink(urlContexts.url)
    /*
     Handle deep link
     */
}
```

**Objective-C**

```objective-c
- (void)scene:(UIScene *)scene openURLContexts:(nonnull NSSet<UIOpenURLContext *> *)URLContexts {
    NSURL *url = [[URLContexts allObjects] firstObject].URL;
    [AEPMobileServices trackAdobeDeepLink:url];
}
```
