#### Objective-C

**Syntax**

```objectivec
(void) getSdkIdentities: (nullable void (^) (NSString* __nullable content)) callback;
(void) getSdkIdentitiesWithCompletionHandler: (nullable void (^) (NSString* __nullable content, NSError* _Nullable error)) completionHandler;
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

**Example**

```objectivec
[ACPCore getSdkIdentities:^(NSString * _Nullable content){
    NSLog(content);

[ACPCore getSdkIdentitiesWithCompletionHandler:^(NSString * _Nullable content, NSError * _Nullable error) {
        if (error) {
            // handle error here
        } else {
            // handle the retrieved identities
            NSLog(content);
        }
    }];
```

#### Swift

**Example**

```swift
MobileCore.getSdkIdentities { (content, error) in
    // handle completion
}
```