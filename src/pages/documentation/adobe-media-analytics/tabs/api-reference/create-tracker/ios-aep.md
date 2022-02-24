<InlineAlert variant="warning" slots="text"/>

If MobileCore.resetIdentities() is called in the implementation, the existing tracker will stop sending pings. You will need to create a new tracker to generate a new media session.

#### Swift

**Syntax**

```swift
static func createTracker()
```

**Example**

```swift
let tracker = Media.createTracker()  // Use the instance for tracking media.
```

#### Objective-C

**Example**

```objc
id<AEPMediaTracker> tracker; 
_tracker = [AEPMobileMedia createTracker];  // Use the instance for tracking media.
```