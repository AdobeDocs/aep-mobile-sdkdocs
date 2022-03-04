#### Swift

**Syntax**

```swift
static func getThirdPartyId(_ completion: @escaping (String?, Error?) -> Void)
```

* _completion_ : invoked with the `thirdPartyId` value. If no `third-party` ID was set, this value will be `nil`.

**Example**

```swift
Target.getThirdPartyId { (id, err) in
    // read Target thirdPartyId
}
```

#### Objective-C

**Example**

```objc
[AEPMobileTarget getThirdPartyId:^(NSString *thirdPartyID, NSError *error){
    // read Target thirdPartyId
}];
```