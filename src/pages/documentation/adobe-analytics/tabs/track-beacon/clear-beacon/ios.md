---
noIndex: true
---

Currently, `CLBeacon` is only available on iOS. The sample code contains the necessary checks to ensure OS compatibility.

This example uses `static` constant strings that were provided in the `trackBeacon` code sample above.

#### Swift

```swift
#if os(iOS)
class func clearCurrentBeacon() {
    UserProfile.removeUserAttributes(attributeNames: [BEACON_MAJOR, BEACON_MINOR, BEACON_UUID, BEACON_PROXIMITY])
}
#endif
```

#### Objective-C

```objectivec
#if TARGET_OS_IOS
+ (void) clearCurrentBeacon {
    [AEPMobileUserProfile removeUserAttributesWithAttributeNames: @[BEACON_MAJOR, BEACON_MINOR, BEACON_UUID, BEACON_PROXIMITY]];
}
#endif
```
