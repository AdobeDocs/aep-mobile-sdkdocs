#### Swift

**Syntax**

```swift
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```swift
 MobileCore.track(action: "action name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```objc
 @objc(trackAction:data:)
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```objectivec
  [AEPMobileCore trackAction:@"action name" data:@{@"key":@"value"}];
```