#### Swift

**Syntax**

```swift
static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

**Example**

```swift
 MobileCore.getSdkIdentities { (content, error) in
     // handle completion
 }
```

#### Objective-C

**Syntax**

```objectivec
 @objc(getSdkIdentities:)
 static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

**Example**

```objectivec
 [AEPMobileCore getSdkIdentities:^(NSString * _Nullable content, NSError * _Nullable error) {
     if (error) {
       // handle error here
     } else {
       // handle the retrieved identities
     }
 }];
```