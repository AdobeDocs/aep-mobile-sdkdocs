```objc
+ (void) getTrackingIdentifier: (nonnull void (^) (NSString* __nullable trackingIdentifier)) callback;

+ (void) getTrackingIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable trackingIdentifier, NSError* __nullable error)) completionHandler;
```