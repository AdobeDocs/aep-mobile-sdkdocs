#### Swift

**Syntax**

```swift
static func track(state: String?, data: [String: Any]?) 
```
**Example**

```swift
MobileCore.track(state: "state name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```swift
@objc(trackState:data:)
static func track(state: String?, data: [String: Any]?) 
```
**Example**

```objectivec
[AEPMobileCore trackState:@"state name" data:@{@"key": @"value"}];
```