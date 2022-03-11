#### Swift

You can use the MobileCore API to register the Messaging extension.

**Syntax**

```swift
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```swift
MobileCore.registerExtensions([Messaging.self, ...], {
  // processing after registration
})
```

#### Objective-C

You can use the AEPMobileCore API to register the Messaging extension.

**Syntax**

```objc
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```objc
[AEPMobileCore registerExtensions:@[AEPMobileMessaging.class, ...] completion:^{
  // processing after registration
}];
```