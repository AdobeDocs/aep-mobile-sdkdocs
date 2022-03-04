#### Objective-C

**Syntax**

```objc
+ (void) getThirdPartyId: (nonnull void (^) (NSString* __nullable thirdPartyId)) callback;
```

* _callback_ is invoked with the `thirdPartyId` value. If no third-party ID was set, this value will be `nil`.

**Example**

```objc
[ACPTarget getThirdPartyId:^(NSString *thirdPartyId){
       // read Target thirdPartyId
}];
```

#### Swift

**Example**

```swift
ACPTarget.getThirdPartyId({thirdPartyID in
       // read Target thirdPartyId
})
```