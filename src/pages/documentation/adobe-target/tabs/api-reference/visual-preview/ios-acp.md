To enter the visual preview mode, use the `collectLaunchInfo` API to enable the mode, and select the red floating button that appears on the app screen.

#### Objective-C

**Syntax**

```objc
+ (void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```

* _userInfo_ : NSDictionary of data relevant to the expected use case.

**Example**

```objc
[ACPCore collectLaunchInfo: @{@"adb_deeplink":@"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];`
```

#### Swift

**Example**

```swift
ACPCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```