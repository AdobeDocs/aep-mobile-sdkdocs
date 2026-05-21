---
title: Adobe Campaign Classic API reference
description: An API reference for the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- API reference
---

# Adobe Campaign Classic API reference

## extensionVersion

The `extensionVersion` API returns the version of the Campaign Classic extension that is registered with the Mobile Core extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
@NonNull 
public static String extensionVersion();
```

#### Example

```java
String campaignClassicExtensionVersion = CampaignClassic.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let campaignClassicVersion = CampaignClassic.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objective-c
+ (nonnull NSString *)extensionVersion
```

#### Example

```objective-c
NSString *campaignClassicVersion = [AEPMobileCampaignClassic extensionVersion];
```

## registerDevice

The `registerDevice` API lets you register a user device with Campaign Classic.

To prepare your app to handle push notifications, see the tutorial on [setting up a Firebase Cloud Messaging client app on Android](https://firebase.google.com/docs/cloud-messaging/android/client). After you receive the Firebase Cloud Messaging (FCM) SDK registration token, send this token and the device information to Campaign Classic by using the `registerDevice` API.

The `registerDevice` API registers a device with your Campaign Classic registration server. It takes the FCM registration token as a parameter with a user key that identifies a user, such as an email address or a login name. You can also provide a map of the custom key-value pairs that you want to associate with the registration.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerDevice(@NonNull final String token, final String userKey, final Map<String, Object> additionalParams)
```

#### Example

```java
@Override
public void onNewToken(String token) {
    Log.d("TestApp", "Refreshed token: " + token);

    // If you want to send messages to this application instance or
    // manage this app's subscriptions on the server side, send the
    // Instance ID token to your app server.
    if (token != null) {
        Log.d("TestApp", "FCM SDK registration token received : " + token);
        
        // Create a map of additional parameters
        Map<String, Object> additionalParams = new HashMap<String, Object>();
        additionalParams.put("name", "John");
        additionalParams.put("serial", 12345);
        additionalParams.put("premium", true);
    
        // Send the registration info
        CampaignClassic.registerDevice(token, "john@example.com", additionalParams);
    }
}
```

To get your app ready to handle push notifications, see the tutorial on [configuring remote notification support](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1). After you receive the Apple Push Notification service (APNs) token, send this token and the device information to Campaign Classic using the `registerDevice` API.

The `registerDevice` API registers a device with your Campaign Classic registration server. It takes the APNS token as a parameter with a user key that identifies a user, such as an email address or a login name. You can also provide a map of the custom key-value pairs that you want to associate with the registration.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func registerDevice(token: Data, userKey: String?, additionalParameters: [String: Any]?)
```

#### Example

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    let params: [String: Any] = [
        "name": "John",
        "serial": 12345,
        "premium": true
    ]

    CampaignClassic.registerDevice(token: deviceToken, userKey: "johnDoe@example.com", additionalParameters: params)
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) registerDeviceWithToken:(nonnull NSData*)token userKey:(nullable NSString*)userKey additionalParams:(nullable NSDictionary<NSString *, id> *)additionalParams;
```

#### Example

```objectivec
- (void) application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    NSMutableDictionary *params = [[NSMutableDictionary alloc] initWithObjectsAndKeys:  @"John", @"name", nil];
    [params setObject: [NSNumber numberWithInt:12345] forKey: @"serial"];
    [params setObject: [NSNumber numberWithBool:YES]  forKey: @"premium"];

    [AEPMobileCampaignClassic registerDeviceWithToken:deviceToken userKey:@"john@example.com" additionalParameters:params];
}
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
CampaignClassic.registerExtension();
```

## trackNotificationReceive

The `trackNotificationReceive` API sends the received push notification's tracking information to the configured Adobe Campaign Classic server.

<InlineAlert variant="success" slots="text"/>

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

### Android Java

If `trackInfo` is null or does not contain the necessary tracking identifiers, `messageId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

<CodeBlock slots="heading, code" repeat="2" />


#### Syntax

```java
public static void trackNotificationReceive(@NonNull final Map<String, String> trackInfo)
```

#### Example

```java
public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d("TestApp", "Receive message from: " + remoteMessage.getFrom());
        Map<String,String> payloadData = message.getData();

        // Check if message contains data payload.
        if (payloadData.size() > 0) {
            Map<String,String> trackInfo = new HashMap<>();
            trackInfo.put("_mId", payloadData.get("_mId"));
            trackInfo.put("_dId", payloadData.get("_dId"));

            // Send the tracking information for message received
            CampaignClassic.trackNotificationReceive(trackInfo);
        }
    }
}
```


### iOS Swift

You can pass the `launchOptions` that were received upon opening the application or `userInfo`, which contains the received push payload in `userInfo`. If `userInfo` is null or does not contain the necessary tracking identifiers, `broadlogId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func trackNotificationReceive(withUserInfo userInfo: [AnyHashable: Any])
```

#### Example

```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    guard let aps = userInfo["aps"] as? [String: Any] else {
        completionHandler(.failed)
        return
    }
    if aps["content-available"] as? Int == 1 {
        // Track silent push notification receive
        CampaignClassic.trackNotificationReceive(withUserInfo: userInfo)
        completionHandler(.noData)
    }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) trackNotificationReceiveWithUserInfo:(nonnull NSDictionary*) userInfo;
```

#### Example

```objectivec
- (void) application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)launchOptions fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
    if ( launchOptions) NSLog(@"launchOptions: %@", [launchOptions description]);
    // Tracking silent push notification receive
    if ( [launchOptions[@"aps"][@"content-available"] intValue] == 1 ) {
        NSLog(@"Silent Push Notification");
        [AEPMobileCampaignClassic trackNotificationReceiveWithUserInfo:userInfo];
        completionHandler(UIBackgroundFetchResultNoData);
    }
}
```

## trackNotificationClick

The `trackNotificationClick` API sends the clicked push notification's tracking information to the configured Adobe Campaign Classic server. This API can be used to send tracking information when the notification is clicked, which may result in the application being opened.

<InlineAlert variant="success" slots="text"/>

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

### Android Java

If `trackInfo` is null, or does not contain the necessary tracking identifiers, `messageId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

<CodeBlock slots="heading, code" repeat="2" />


#### Syntax

```java
public static void trackNotificationClick(@NonNull final Map<String, String> trackInfo)
```

#### Example

```java
@Override
public void onResume() {
    super.onResume();
    
    // The messageId (_mId) and deliveryId (_dId) can be passed in the intent extras.
    // This is assuming you extract the messageId and deliveryId from the
    // received push message and are including it in the intent (intent.putExtra())
    // of the displayed notification.

    Bundle extras = getIntent().getExtras();
    if (extras != null) {
        String deliveryId = extras.getString("_dId");
        String messageId = extras.getString("_mId");
        if (deliveryId != null && messageId != null) {
            Map<String,String> trackInfo = new HashMap<>();
            trackInfo.put("_mId", messageId);
            trackInfo.put("_dId", deliveryId);

            // Send the tracking information for message opening
            CampaignClassic.trackNotificationClick(trackInfo);
        }
    }
}
```

### iOS Swift

You can pass the `launchOptions` that were received upon opening the application or `userInfo`, which contains the received push payload in `userInfo`. If `userInfo` is null or does not contain the necessary tracking identifiers, `broadlogId` (`_mId`) and `deliveryId` (`_dId`), a track request is **not** sent.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func trackNotificationClick(withUserInfo userInfo: [AnyHashable: Any])
```

#### Example

```swift
func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
    CampaignClassic.trackNotificationClick(withUserInfo: response.notification.request.content.userInfo)
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) trackNotificationClickWithUserInfo: (nonnull NSDictionary*) userInfo;
```

#### Example

```objectivec
- (void) userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler{
    NSDictionary *userInfo = response.notification.request.content.userInfo;
    [AEPMobileCampaignClassic trackNotificationClickWithUserInfo:userInfo];
    completionHandler();
}
```

## Other public classes

<InlineAlert variant="warning" slots="text"/>

Push template functionality and the following public classes are only available in Adobe Campaign Classic Android SDK version from 2.1.0 through the next major version release.

### AEPMessagingService

#### handleRemoteMessage

Allows the Adobe Campaign Classic extension to automatically create and dispatch a `Notification` based on the template included in the provided `RemoteMessage` object.

<InlineAlert variant="success" slots="text" />

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

## _**Requires extension version v2.1.0 through the next major version release **_

Builds an `AEPPushPayload` with data extracted from a `RemoteMessage`'s payload. The built `AEPPushPayload` is then used to construct a `Notification`.

##### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
@NonNull 
public static boolean handleRemoteMessage(@NonNull final Context context, @NonNull final RemoteMessage remoteMessage);
```

#### Example

```java
@Override
public void onMessageReceived(RemoteMessage remoteMessage) {
    Log.d(LOG_TAG, "From: " + remoteMessage.getFrom());
		if (AEPMessagingService.handleRemoteMessage(this, remoteMessage)) {
			// Campaign extension has handled the notification
		} else {
			// Handle notification from other sources
		}
}
```

### AEPPushTemplateBroadcastReceiver

This class is required to be public, but has no APIs that need to be called by the app developer.

### CampaignPushTrackerActivity

This class is required to be public, but has no APIs that need to be called by the app developer.
