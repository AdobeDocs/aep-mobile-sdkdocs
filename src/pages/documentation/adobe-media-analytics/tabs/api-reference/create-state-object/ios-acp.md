Returns an NSDictionary instance that contains information about the player state.

#### Objective-C

**Syntax**

```objc
+ (NSDictionary* _Nonnull) createStateObjectWithName: (NSString* _Nonnull) stateName;
```

**Example**

```objc
NSDictionary *playerStateObject = [ACPMedia createStateObjectWithName: @"fullscreen"];
```

#### Swift

**Example**

```swift
let playerStateObject = ACPMedia.createStateObject(withName: "fullscreen")
```