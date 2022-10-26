<Variant platform="aep-swift" api="clear-prefetch-cache" repeat="1"/>

```swift
static func clearPrefetchCache()
```

<Variant platform="aep-objc" api="clear-prefetch-cache" repeat="1"/>

```objc
+ (void) clearPrefetchCache;
```

<Variant platform="acp-objc" api="clear-prefetch-cache" repeat="1"/>

```objc
+ (void) clearPrefetchCache;
```

<Variant platform="aep-swift" api="clicked-location" repeat="1"/>

```swift
static func clickedLocation(_ name: String, targetParameters: TargetParameters? = nil)
```

<Variant platform="aep-objc" api="clicked-location" repeat="1"/>

```objc
+ (void) clickedLocation: (NSString* _NonNull) name
    withTargetParameters: (AEPTargetParameters* _Nullable) targetParameters;
```

<Variant platform="acp-objc" api="clicked-location" repeat="1"/>

```objc
+ (void) locationClickedWithName: (nonnull NSString*) name
                targetParameters: (nullable ACPTargetParameters*) parameters;
```

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

<Variant platform="aep-swift" api="get-third-party-id" repeat="1"/>

```swift
static func getThirdPartyId(_ completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-third-party-id" repeat="1"/>

```objc
+ (void) getThirdPartyId: (nonnull void (^) (NSString* _Nullable thirdPartyId,  NSError* _Nullable error)) completion;
```

<Variant platform="acp-objc" api="get-third-party-id" repeat="1"/>

```objc
+ (void) getThirdPartyId: (nonnull void (^) (NSString* __nullable thirdPartyId)) callback;
```

<Variant platform="aep-swift" api="get-tnt-id" repeat="1"/>

```swift
static func getTntId(_ completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-tnt-id" repeat="1"/>

```objc
+ (void) getTntId: (nonnull void (^) (NSString* _Nullable tntId,  NSError* _Nullable error)) completion;
```

<Variant platform="acp-objc" api="get-tnt-id" repeat="1"/>

```objc
+ (void) getTntId: (nonnull void (^) (NSString* __nullable tntId)) callback;
```

<Variant platform="aep-swift" api="prefetch-content" repeat="1"/>

```swift
static func prefetchContent(_ prefetchArray: [TargetPrefetch], with targetParameters: TargetParameters? = nil, _ completion: ((Error?) -> Void)?)
```

<Variant platform="aep-objc" api="prefetch-content" repeat="1"/>

```objc
+ (void) prefetchContent: (NSArray<AEPTargetPrefetchObject*>* _NonNull) prefetchArray
          withParameters: (AEPTargetParameters* _Nullable) targetParameters
                callback: (nullable void (^) (NSError* _Nullable error)) completion;
```

<Variant platform="acp-objc" api="prefetch-content" repeat="1"/>

```objc
+ (void) prefetchContent: (nonnull NSArray<ACPTargetPrefetchObject*>*) prefetchObjectArray
          withParameters: (nullable ACPTargetParameters*) parameters
                callback: (nullable void (^) (NSError* _Nullable error)) callback;
```

<Variant platform="aep-swift" api="register-extension" repeat="2"/>

Registration occurs by passing `Target` to the `MobileCore.registerExtensions` API.


```swift
MobileCore.registerExtensions([Target.self])
```

<Variant platform="aep-objc" api="register-extension" repeat="2"/>

Registration occurs by passing `AEPMobileTarget` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objc
[AEPMobileCore registerExtensions:@[AEPMobileTarget.class] completion:nil];
```

<Variant platform="acp-objc" api="register-extension" repeat="1"/>

```objc
[ACPTarget registerExtension];
```

<Variant platform="aep-swift" api="retrieve-location-content" repeat="1"/>

```swift
static func retrieveLocationContent(_ requestArray: [TargetRequest], with targetParameters: TargetParameters? = nil)
```

<Variant platform="aep-objc" api="retrieve-location-content" repeat="1"/>

```objc
(void) retrieveLocationContent: (NSArray<AEPTargetRequestObject*>* _NonNull) requestsArray
                withParameters: (AEPTargetParameters* _Nullable) targetParameters;
```

<Variant platform="acp-objc" api="retrieve-location-content" repeat="1"/>

```objc
+ (void) retrieveLocationContent: (nonnull NSArray<ACPTargetRequestObject*>*) requests
                  withParameters: (nullable ACPTargetParameters*) parameters;
```

<Variant platform="aep-swift" api="set-preview-restart-deep-link" repeat="1"/>

```swift
static func setPreviewRestartDeepLink(_ deeplink: URL)
```

<Variant platform="aep-objc" api="set-preview-restart-deep-link" repeat="1"/>

```objc
+ (void) setPreviewRestartDeeplink: (NSURL* _NonNull) deeplink;
```

<Variant platform="acp-objc" api="set-preview-restart-deep-link" repeat="1"/>

```objc
+ (void) setPreviewRestartDeeplink: (nonnull NSURL*) deeplink;
```

<Variant platform="aep-swift" api="set-third-party-id" repeat="1"/>

```swift
static func setThirdPartyId(_ id: String?)
```

<Variant platform="aep-objc" api="set-third-party-id" repeat="1"/>

```objc
+ (void) setThirdPartyId: (NSString* _Nullable) thirdPartyId;
```

<Variant platform="acp-objc" api="set-third-party-id" repeat="1"/>

```objc
+ (void) setThirdPartyId: (nullable NSString*) thirdPartyId;
```