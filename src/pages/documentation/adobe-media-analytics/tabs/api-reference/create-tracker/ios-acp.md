#### Objective-C

**Syntax**

```objc
+(ACPMediaTracker* _Nullable) createTracker;


// Deprecated
+(void) createTracker: (void (^ _Nonnull) (ACPMediaTracker* _Nullable)) callback;
```

**Example**

```objc
ACPMediaTracker *mediaTracker = [ACPMedia createTracker];  // Use the instance for tracking media.


// Deprecated
[ACPMedia createTracker:^(ACPMediaTracker * _Nullable mediaTracker) {
    // Use the instance for tracking media.
}];
```

#### Swift

**Example**

```swift
let mediaTracker = ACPMedia.createTracker()  // Use the instance for tracking media.

// Deprecated
ACPMedia.createTracker({mediaTracker in
    // Use the instance for tracking media.
})
```