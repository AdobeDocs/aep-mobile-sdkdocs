Use the following API to track a push messaging click in Adobe Analytics.

#### Objective-C

**Syntax**

```objectivec
+ (void) collectLaunchInfo:(NSDictionary *)userInfo;
```

**Example**

```objectivec
[ACPCore collectLaunchInfo:userInfo];
```

#### Swift

**Example**

```swift
ACPCore.collectLaunchInfo(userInfo)
```