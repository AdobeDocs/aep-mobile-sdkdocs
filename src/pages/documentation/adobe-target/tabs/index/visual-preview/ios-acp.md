#### Swift

**Syntax**

```swift
open class func collectLaunchInfo(_ userinfo: [AnyHashable: Any])
```

**Example**

```swift
ACPCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

#### Objective-C

**Syntax**
```objectivec
+ (void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```

**Example**

```objectivec
[ACPCore collectLaunchInfo: @{@"adb_deeplink":@"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];`
```