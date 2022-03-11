#### Objective-C

**Syntax**

```objc
+ (void) getQueueSizeWithCompletionHandler: (nonnull void (^) (NSUInteger queueSize, NSError* __nullable error)) completionHandler;
```

* _completionHandler_ is invoked with the queue size value or an NSError if an unexpected error occurs or the request times out.

**Example**

The following examples are shown in both Swift and Objective-C.

**Swift**

```swift
ACPAnalytics.getQueueSizeWithCompletionHandler { (queueSize, error) in    
    // Handle error (if non-nil) or use queueSize.  
}
```

**Objective-C**

```objc
[ACPAnalytics getQueueSizeWithCompletionHandler: ^(NSUInteger queueSize, NSError * _Nullable error) {    
    // Handle error (if non-nil) or use queueSize.
}];
```