#### Swift

**Syntax**

```swift
public static func collectPii(_ data: [String: Any])
```

**Example**

```objectivec
MobileCore.collectPii(["key1" : "value1","key2" : "value2"]);
```

#### Objective-C

**Syntax**

```swift
 @objc(collectPii:)
 public static func collectPii(_ data: [String: Any])
```

**Example**

```objectivec
 [AEPMobileCore collectPii:data:@{@"key1" : @"value1",
                            @"key2" : @"value2"
                            }];
```