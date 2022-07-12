### Swift

**Example**

```swift
 MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
```

### Objective-C

**Syntax**

```objc
 @objc(lifecycleStart:)
 static func lifecycleStart(additionalContextData: [String: Any]?)
```

**Example**

```objc
 [AEPMobileCore lifecycleStart:nil];
```

If you need to collect additional lifecycle data:

```objc
 [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
```