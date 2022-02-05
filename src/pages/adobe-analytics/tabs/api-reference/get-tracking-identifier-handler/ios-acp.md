### getTrackingIdentifierWithCompletionHandler

**Syntax**

```text
+ (void) getTrackingIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable trackingIdentifier, NSError* __nullable error)) completionHandler;
```

* _completionHandler_ is invoked with the tracking Identifier string value. or an NSError if an unexpected error occurs or the request times out.

**Example**

Here are examples in Objective-C and Swift:

**Objective-C**

```objectivec
[ACPAnalytics getTrackingIdentifierWithCompletionHandler:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error) {
    // Handle the error (if non-nil) or use the trackingIdentifier value.
}];
```

**Swift**

```swift
ACPAnalytics.getTrackingIdentifierWithCompletionHandler { (trackingIdentifier, error) in    
     // Handle the error (if non-nil) or use the trackingIdentifier value.
}
```