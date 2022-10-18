<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objective-c
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objective-c
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="aep-swift" api="register-extension" repeat="2"/>

Registration occurs by passing `CampaignClassic` to the `MobileCore.registerExtensions` API.

```swift
MobileCore.registerExtensions([CampaignClassic.self])
```

<Variant platform="aep-objc" api="register-extension" repeat="2"/>

Registration occurs by passing `AEPMobileCampaignClassic` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objective-c
[AEPMobileCore registerExtensions:@[AEPMobileCampaignClassic.class] completion:nil];
```

<Variant platform="acp-objc" api="register-extension" repeat="1"/>

```objective-c
[ACPCampaignClassic registerExtension];
[ACPCore start:^{
}];
```

<Variant platform="aep-swift" api="register-device" repeat="1"/>

```swift
static func registerDevice(token: Data, userKey: String?, additionalParameters: [String: Any]?)
```

<Variant platform="aep-objc" api="register-device" repeat="1"/>

```objective-c
+ (void) registerDeviceWithToken: (nonnull NSData*) token userKey: (nullable NSString*) userKey additionalParams: (nullable NSDictionary*) additionalParams;
```

<Variant platform="acp-objc" api="register-device" repeat="1"/>

```objective-c
+ (void) registerDevice: (nonnull NSData*) token userKey: (nullable NSString*) userKey additionalParams: (nullable NSDictionary*) additionalParams callback: (nullable void (^) (BOOL success)) callback;
```

<Variant platform="aep-swift" api="track-notification-click" repeat="1"/>

```swift
static func trackNotificationClick(withUserInfo userInfo: [AnyHashable: Any])
```

<Variant platform="aep-objc" api="track-notification-click" repeat="1"/>

```objective-c
+ (void) trackNotificationClickWithUserInfo:(nonnull NSDictionary*) userInfo;
```

<Variant platform="acp-objc" api="track-notification-click" repeat="1"/>

```objective-c
+ (void) trackNotificationClick:(nonnull NSDictionary<NSString*, NSString*>*) trackInfo;
```

<Variant platform="aep-swift" api="track-notification-receive" repeat="1"/>

```swift
static func trackNotificationReceive(withUserInfo userInfo: [AnyHashable: Any])
```

<Variant platform="aep-objc" api="track-notification-receive" repeat="1"/>

```objective-c
+ (void) trackNotificationReceiveWithUserInfo:(nonnull NSDictionary*) userInfo;
```

<Variant platform="acp-objc" api="track-notification-receive" repeat="1"/>

```objective-c
+ (void) trackNotificationReceive:(nonnull NSDictionary<NSString*, NSString*>*) trackInfo;
```
