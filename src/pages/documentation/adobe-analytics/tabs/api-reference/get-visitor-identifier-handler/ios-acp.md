#### Objective-C

**Syntax**

```objc
+ (void) getVisitorIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable visitorIdentifier, NSError* __nullable error)) completionHandler;
```

* _completionHandler_ is invoked with the visitor identifier value or an NSError if an unexpected error occurs or the request times out.

**Example**

```objc
[ACPAnalytics getVisitorIdentifierWithCompletionHandler:^(NSString * _Nullable visitorIdentifier, NSError * _Nullable error) {
    // Handle the error (if non-nil) or use the visitorIdentifier value
}];
```

#### Swift

**Example**

```swift
ACPAnalytics.getVisitorIdentifierWithCompletionHandler { (visitorIdentifier, error) in
    // Handle the error (if non-nil) or use the visitorIdentifier value
}
```