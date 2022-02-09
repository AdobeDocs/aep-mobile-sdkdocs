```objc
+ (void) getQueueSize: (nonnull void (^) (NSUInteger queueSize)) callback;

+ (void) getQueueSizeWithCompletionHandler: (nonnull void (^) (NSUInteger queueSize, NSError* __nullable error)) completionHandler;
```