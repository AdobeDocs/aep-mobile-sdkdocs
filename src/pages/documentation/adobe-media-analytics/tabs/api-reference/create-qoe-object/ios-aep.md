Returns a map that contains information about the quality of experience.

#### Swift

**Syntax**

```swift
static func createQoEObjectWith(bitrate: Double, 
                            startupTime: Double, 
                                    fps: Double, 
                          droppedFrames: Double) -> [String: Any]?
```

**Example**

```swift
let qoeObject = Media.createQoEObjectWith(bitrate: 500000, 
                                      startupTime: 2, 
                                              fps: 24, 
                                    droppedFrames: 10)
```

#### Objective-C

```objc
NSDictionary *qoeObject = [AEPMobileMedia createQoEObjectWith:50000 
                                                    startTime:2 
                                                          fps:24 
                                                droppedFrames:10];
```