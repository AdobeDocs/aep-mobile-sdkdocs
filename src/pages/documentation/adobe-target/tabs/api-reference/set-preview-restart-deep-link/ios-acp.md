#### Objective-C

**Syntax**

```objc
+ (void) setPreviewRestartDeeplink: (nonnull NSURL*) deeplink;
```

* _deeplink_ is an NSURL that contains the preview restart deeplink.

**Example**

```objc
[ACPTarget setPreviewRestartDeepLink:@"myapp://HomePage"];
```

#### Swift

**Example**

```swift
ACPTarget.setPreviewRestartDeepLink("myapp://HomePage")
```