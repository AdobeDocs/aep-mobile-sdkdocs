### Objective-C

**Syntax**

```objc
+ (void) lifecycleStart: (nullable NSDictionary<NSString*, NSString*>*) additionalContextData;
```

**Example**

```objc
[ACPCore lifecycleStart:nil];
```

If you need to collect additional lifecycle data:

```objc
[ACPCore lifecycleStart:@{@"state": @"appResume"}];
```

### Swift

**Example**

```swift
ACPCore.lifecycleStart(["state": "appResume"])
```