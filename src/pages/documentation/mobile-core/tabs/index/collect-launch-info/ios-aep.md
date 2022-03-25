#### Swift

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application(_:didFinishLaunchingWithOptions:)`
  * Extract `userInfo` from `url: UIApplication.LaunchOptionsKey`
* Tracking push message clickthrough
  * From `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`

**Syntax**

```swift
 public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```swift
 MobileCore.collectLaunchInfo(userInfo)
```

#### Objective-C

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application:didFinishLaunchingWithOptions`
  * Extract `userInfo` from `UIApplicationLaunchOptionsURLKey`
    * Tracking push message clickthrough
  * From `application:didReceiveRemoteNotification:fetchCompletionHandler:`

**Syntax**

```objc
@objc(collectLaunchInfo:)
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```objc
 [AEPMobileCore collectLaunchInfo:launchOptions];
```