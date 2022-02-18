<InlineAlert variant="info" slots="text"/>

To get your app ready to handle push notifications, see the tutorial on [configuring remote notification support](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/HandlingRemoteNotifications.html#//apple_ref/doc/uid/TP40008194-CH6-SW1). After you receive the Apple Push Notification service (APNs) token, send this token and the device information to Campaign Classic using the `registerDevice` API.

The `registerDevice` API registers a device with your Campaign Classic registration server. It takes the APNS token as a parameter with a user key that identifies a user, such as an email address or a login name. You can also provide a map of the custom key-value pairs that you want to associate with the registration. A boolean value is returned in the callback, which signals whether the registration was successful.

#### Swift

**Syntax**

```swift
func registerDevice(_ token: Data, userKey: String?, additionalParams: [String: Any]?, callback: ((Bool) -> Void)?)
```

**Example**

```swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        let params: [String: Any] = [
            "name": "John",
            "serial": 12345,
            "premium": true
        ]
        ACPCampaignClassic.registerDevice(deviceToken, userKey: "john@example.com", additionalParams: params) { result in
            print("Registration status: \(result)")
        }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) registerDevice: (nonnull NSData*) token userKey: (nullable NSString*) userKey additionalParams: (nullable NSDictionary*) additionalParams callback: (nullable void (^) (BOOL success)) callback;
```

**Example**

```objectivec
- (void) application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  // Set the deviceToken that the APNS has assigned to the device
  NSMutableDictionary *params = [[NSMutableDictionary alloc] initWithObjectsAndKeys:          @"John", @"name", nil];
  [params setObject: [NSNumber numberWithInt:12345] forKey: @"serial"];
  [params setObject: [NSNumber numberWithBool:YES]  forKey: @"premium"];

[ACPCampaignClassic registerDevice:deviceToken userKey:@"john@example.com" additionalParams:params callback:^(BOOL success) {
    NSLog(@"Registration Status: %d", success);
}
```