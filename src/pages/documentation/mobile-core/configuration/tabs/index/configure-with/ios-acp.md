#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithAppId: (NSString* __nullable) appid;
```

**Example**

```objectivec
[ACPCore configureWithAppId:@"1423ae38-8385-8963-8693-28375403491d"];
```

#### Swift

**Syntax**

```swift
static func configure(withAppId: String)
```

**Example**

```swift
ACPCore.configure(withAppId: "1423ae38-8385-8963-8693-28375403491d")
```

<InlineAlert variant="info" slots="text"/>

Alternatively, you can also place the environment ID in your iOS project's _Info.plist_ with the `ADBMobileAppID` key. When the SDK is initialized, the environment ID is automatically read from the _Info.plist_ file and the associated configuration.