#### Objective-C

**Syntax**

```objc
+ (void) getTrackingIdentifier: (nonnull void (^) (NSString* __nullable trackingIdentifier)) callback;
```

* _callback_ is invoked with the tracking Identifier string value.

**Example**

Here are examples in Objective-C and Swift:

**Objective-C**

```objc
[ACPAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier) {
    // check the trackingIdentifier value  
}];
```

**Swift**

```swift
ACPAnalytics.getTrackingIdentifier { (trackingIdentifier) in
    // check the trackingIdentifier value  
}
```