### getQueueSize

**Syntax**

```text
+ (void) getQueueSize: (nonnull void (^) (NSUInteger queueSize)) callback;
```

* _callback_ is invoked with the queue size value.

**Example**

Here are examples in Objective-C and Swift:

**Objective-C**

```text
[ACPAnalytics getQueueSize: ^(NSUInteger queueSize) {    
    // handle queue size
}];
```

**Swift**

```swift
ACPAnalytics.getQueueSize { (queueSize) in    
     // handle queue size   
}
```