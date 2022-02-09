```objc
+ (void) getVisitorIdentifier: (nonnull void (^) (NSString* __nullable visitorIdentifier)) callback;

+ (void) getVisitorIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable visitorIdentifier, NSError* __nullable error)) completionHandler;
```