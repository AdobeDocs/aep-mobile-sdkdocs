Use the following API to track a push messaging click in Adobe Analytics.

#### Swift

**Syntax**

```swift
@objc(collectLaunchInfo:)
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```swift
AEPCore.collectLaunchInfo(userInfo)
```

#### Objective-C

```objectivec
[AEPMobileCore collectLaunchInfo:userInfo];
```