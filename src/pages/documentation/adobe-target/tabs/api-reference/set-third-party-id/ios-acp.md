#### Objective-C

**Syntax**

```objc
+ (void) setThirdPartyId: (nullable NSString*) thirdPartyId;
```

* _thirdPartyId_ is a NSString that contains the custom visitor ID to be set in Target.

**Example**

```objc
[ACPTarget setThirdPartyId:@"third-party-id"];
```

#### Swift

**Example**

```swift
ACPTarget.setThirdPartyId("third-party-id")
```