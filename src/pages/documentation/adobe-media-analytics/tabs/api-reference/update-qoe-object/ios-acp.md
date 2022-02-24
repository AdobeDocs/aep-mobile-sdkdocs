#### Objective-C

**Syntax**

```objc
- (void) updateQoEObject: (NSDictionary* _Nonnull) qoeObject;
```

**Example**

```objc
NSDictionary* qoeObject = [ACPMedia createQoEObjectWithBitrate:1000000 startupTime:2 fps:25 droppedFrames:10];
[_tracker updateQoEObject:qoeObject];
```

#### Swift

**Example**

```swift
let qoeObject = ACPMedia.createQoEObject(withBitrate: 1000000, startupTime: 2, fps: 25, droppedFrames: 10)
_tracker.updateQoEObject(qoeObject)
```