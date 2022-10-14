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

<Variant platform="aep-swift" api="get-visitor-profile" repeat="1"/>

```swift
static func getVisitorProfile(completion: @escaping ([String: String]?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-visitor-profile" repeat="1"/>

```objc
+ (void) getVisitorProfile:^(NSDictionary<NSString *,NSString *> * _Nullable visitorProfile, NSError * _Nullable error)completion
```

<Variant platform="acp-objc" api="get-visitor-profile" repeat="1"/>

```objc
+ (void) getVisitorProfile:^(NSDictionary * _Nullable visitorProfile) callback;

+ (void) getVisitorProfileWithCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError * _Nullable error) completionHandler;
```

<Variant platform="aep-swift" api="reset" repeat="1"/>

```swift
static func reset()
```

<Variant platform="aep-objc" api="reset" repeat="1"/>

```objc
+ (void) reset;
```

<Variant platform="acp-objc" api="reset" repeat="1"/>

```objc
+ (void) reset;
```

<Variant platform="aep-swift" api="signal-with-data" repeat="1"/>

```swift
static func signalWithData(data: [String: String], completion: @escaping ([String: String]?, Error?) -> Void)
```

<Variant platform="aep-objc" api="signal-with-data" repeat="1"/>

```objc
+ (void) signalWithData:(NSDictionary<NSString *,NSString *> * _Nonnull data) completion:^(NSDictionary<NSString *,NSString *> * _Nullable vistorProfile, NSError * _Nullable error)completion
```

<Variant platform="acp-objc" api="signal-with-data" repeat="1"/>

```objc
+ (void) signalWithData: (NSDictionary<NSString *, NSString *> * _Nullable) data
                       callback:^(NSDictionary* _Nullable visitorProfile) callback;

+ (void) signalWithData: (NSDictionary<NSString *, NSString *> * _Nonnull) data
                        withCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError *         _Nullable error) completionHandler;
```