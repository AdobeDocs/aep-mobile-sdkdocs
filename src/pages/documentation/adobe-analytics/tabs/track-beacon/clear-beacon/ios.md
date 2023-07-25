Currently, `CLBeacon` is only available on iOS. The sample code contains the necessary checks to ensure OS compatibility.

This example uses `static` constant strings that were provided in the `trackBeacon` code sample above.

#### Objective-C

```objectivec
#if TARGET_OS_IOS
+ (void) clearCurrentBeacon {
    [ACPUserProfile removeUserAttribute:BEACON_MAJOR];
    [ACPUserProfile removeUserAttribute:BEACON_MINOR];
    [ACPUserProfile removeUserAttribute:BEACON_UUID];
    [ACPUserProfile removeUserAttribute:BEACON_PROXIMITY];
}
#endif
```

#### Swift

```swift
#if TARGET_OS_IOS
+clearCurrentBeacon
do {
    ACPUserProfile.removeUserAttribute(BEACON_MAJOR)
    ACPUserProfile.removeUserAttribute(BEACON_MINOR)
    ACPUserProfile.removeUserAttribute(BEACON_UUID)
    ACPUserProfile.removeUserAttribute(BEACON_PROXIMITY)
}
#endif
```
