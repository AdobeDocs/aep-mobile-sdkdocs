#### Swift

**Syntax**

```swift
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```swift
 MobileCore.track(state: "state name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```objc
 @objc(trackState:data:)
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```objectivec
  [AEPMobileCore trackState:@"state name" data:@{@"key":@"value"}];
```