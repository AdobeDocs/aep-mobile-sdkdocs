#### Objective-C

**Syntax**

```objc
+ (void) getQueueSize: (nonnull void (^) (NSUInteger queueSize)) callback;
```

* _callback_ is invoked with the queue size value.

**Example**

```objc
[ACPAnalytics getQueueSize: ^(NSUInteger queueSize) {    
    // handle queue size
}];
```

#### Swift

**Example**

```swift
ACPAnalytics.getQueueSize { (queueSize) in    
     // handle queue size   
}
```