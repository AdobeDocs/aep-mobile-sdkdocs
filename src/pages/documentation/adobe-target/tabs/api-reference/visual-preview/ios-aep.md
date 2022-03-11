To enter the visual preview mode, use the `collectLaunchInfo` API to enable the mode, and select the red floating button that appears on the app screen.

#### Swift

**Syntax**

```swift
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

* _userInfo_ : Dictionary of data relevant to the expected use case.

**Example**

```swift
MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])
```

#### Objective-C

**Example**

```objc
[AEPMobileCore collectLaunchInfo: @{@"adb_deeplink":@"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];
```