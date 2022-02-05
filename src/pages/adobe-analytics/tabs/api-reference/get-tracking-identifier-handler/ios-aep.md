### getTrackingIdentifier

Retrieves the Analytics tracking identifier.

**Syntax**

```swift
static func getTrackingIdentifier(completion: @escaping (String?, Error?) -> Void)
```

**Example**

**Swift**

```swift
Analytics.getTrackingIdentifier { (trackingId, error) in
   // Handle the error (if non-nil) or use the trackingIdentifier value
}
```

**Objective-C**

```text
AEPMobileAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error) {
   // Handle the error (if non-nil) or use the trackingIdentifier value
}];
```