<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="aep-swift" api="register-extension" repeat="2"/>

Registration occurs by passing `Campaign` to the `MobileCore.registerExtensions` API.

```swift
MobileCore.registerExtensions([Campaign.self])
```

<Variant platform="aep-objc" api="register-extension" repeat="2"/>

Registration occurs by passing `AEPMobileCampaign` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objc
[AEPMobileCore registerExtensions:@[AEPMobileCampaign.class] completion:nil];
```

<Variant platform="acp-objc" api="register-extension" repeat="1"/>

```objc
+ (void) registerExtension;
```

<Variant platform="aep-swift" api="reset-linkage-fields" repeat="1"/>

```swift
static func resetLinkageFields()
```

<Variant platform="aep-objc" api="reset-linkage-fields" repeat="1"/>

```objc
+ (void) resetLinkageFields;
```

<Variant platform="acp-objc" api="reset-linkage-fields" repeat="1"/>

```objc
+ (void) resetLinkageFields;
```

<Variant platform="aep-swift" api="set-linkage-fields" repeat="1"/>

```swift
static func setLinkageFields(_ linkageFields: [String: String])
```

<Variant platform="aep-objc" api="set-linkage-fields" repeat="1"/>

```objc
+ (void) setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*)
```

<Variant platform="acp-objc" api="set-linkage-fields" repeat="1"/>

```objc
+ (void) setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*) linkageFields;
```