#### Objective-C

**Syntax**

```objectivec
+ (void) setPushIdentifier: (nullable NSData*) deviceToken;
```

**Example**

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[ACPCore setPushIdentifier:deviceToken];
```

#### Swift

**Syntax**

```swift
static func setPushIdentifier(deviceToken: NSData?)
```

* _deviceToken_  is a string that contains the device token for push notifications.

**Example**

```swift
// Set the deviceToken that the APNs has assigned to the device
ACPCore.setPushIdentifier(deviceToken)
```
