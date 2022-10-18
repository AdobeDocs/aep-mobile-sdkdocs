#### Objective-C

**Syntax**

```objc
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary*) contextData;
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```objc
 [ACPCore trackAction:@"action name" data:@{@"key":@"value"}];
```

#### Swift

**Syntax**

```swift
@objc(trackAction:data:)
static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```swift
ACPCore.track(action: "action name", data: ["key": "value"])
```