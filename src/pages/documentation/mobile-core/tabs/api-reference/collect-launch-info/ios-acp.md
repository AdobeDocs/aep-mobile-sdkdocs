#### Objective-C

The `collectLaunchInfo` method should be used in the following use cases:

* Tracking a deep link clickthrough
  * From `application:didFinishLaunchingWithOptions`
  * Extract `userInfo` from `UIApplicationLaunchOptionsURLKey`
* Tracking a push message clickthrough
  * From `application:didReceiveRemoteNotification:fetchCompletionHandler:`

**Syntax**

```objectivec
(void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```

**Example**

```objc
 [ACPCore collectLaunchInfo:launchOptions];
```

#### Swift

The `collectLaunchInfo` method should be used in the following use cases:

* Tracking a deep link clickthrough
  * From `application(_:didFinishLaunchingWithOptions:)`
  * Extract `userInfo` from `url: UIApplication.LaunchOptionsKey`
* Tracking a push message clickthrough
  * From `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`

**Syntax**

```swift
(void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```

**Example**

```swift
ACPCore.collectLaunchInfo(userInfo)
```