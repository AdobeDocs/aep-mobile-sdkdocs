#### Swift

**Syntax**

```swift
@objc(getExperienceCloudId:)
static func getExperienceCloudId(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ after the ECID is available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../../api-reference.md#public-classes) code of the specific error.

**Example**

```swift
Identity.getExperienceCloudId { ecid, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getExperienceCloudId: ^(NSString * _Nullable ecid, NSError * _Nullable error) completion;
```

**Example**

```objectivec
[AEPMobileIdentity getExperienceCloudId:^(NSString * _Nullable ecid, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}];
```