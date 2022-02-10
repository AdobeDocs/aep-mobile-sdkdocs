<InlineAlert variant="warning" slots="text"/>

iOS simulators do not support push messaging.

After following Apple's [configure remote notification document](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1), to get your app ready to handle push notifications, set the push token by using the [`setPushIdentifier`](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/mobile-core/identity/identity-api-reference#setpushidentifier) API:

#### Swift

**Syntax**

```swift
@objc(setPushIdentifier:)
public static func setPushIdentifier(_ deviceToken: Data?)
```

**Example**

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

**Example**

```objc
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