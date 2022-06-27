<InlineAlert variant="info" slots="text"/>

Method `getExperienceCloudIdWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Objective-C

**Syntax**

```objectivec
+ (void) getExperienceCloudId: (nonnull void (^) (NSString* __nullable experienceCloudId)) callback;
+ (void) getExperienceCloudIdWithCompletionHandler: (nonnull void (^) (NSString* __nullable experienceCloudId, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPIdentity getExperienceCloudId:^(NSString * _Nullable retrievedCloudId) {    
    // handle the retrieved ID here    
}];

[ACPIdentity getExperienceCloudIdWithCompletionHandler:^(NSString * _Nullable experienceCloudId, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}];
```

#### Swift

**Syntax**

```swift
static func getExperienceCloudId(_ callback: @escaping (String?) -> Void)
static func getExperienceCloudId(completionHandler: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked after the ECID is available.
* _completionHandler_ is invoked with _experienceCloudId_ after the ECID is available, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```swift
ACPIdentity.getExperienceCloudId { (retrievedCloudId) in    
    // handle the retrieved ID here    
}

ACPIdentity.getExperienceCloudId { (retrievedCloudId, error) in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}
```