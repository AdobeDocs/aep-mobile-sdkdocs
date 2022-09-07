#### Swift

**Syntax**

```swift
static func track(action: String?, data: [String: Any]?)
```

**Example**

```swift
MobileCore.track(action: "actionName", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```swift
@objc(trackAction:data:)
static func track(action: String?, data: [String: Any]?)
```

**Example**

```objectivec
[AEPMobileCore trackAction:@"action name" data:@{@"key": @"value"}];
```