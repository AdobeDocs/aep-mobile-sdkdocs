### getVisitorIdentifier

**Syntax**

```text
+ (void) getVisitorIdentifier: (nonnull void (^) (NSString* __nullable visitorIdentifier)) callback;
```

* _callback_ is invoked with the visitor identifier value.

**Example**

**Objective-C**

```text
[ACPAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier) {
    // check the visitorIdentifier value   
}];
```

**Swift**

```swift
ACPAnalytics.getVisitorIdentifier { (visitorIdentifier) in
    // check the visitorIdentifier value  
}
```