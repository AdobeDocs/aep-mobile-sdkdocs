<Variant platform="aep-swift" api="track-action" repeat="1"/>

```swift
static func track(action: String?, data: [String: Any]?)
```

<Variant platform="aep-objc" api="track-action" repeat="1"/>

```objc
+ (void)trackAction:(NSString * _Nullable)action data:(NSDictionary<NSString *, id> * _Nullable)data;
```

<Variant platform="acp-objc" api="track-action" repeat="1"/>

```objc
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary*) contextData;
```

<Variant platform="aep-swift" api="track-state" repeat="1"/>

```swift
static func track(state: String?, data: [String: Any]?)
```

<Variant platform="aep-objc" api="track-state" repeat="1"/>

```objc
+ (void)trackState:(NSString * _Nullable)state data:(NSDictionary<NSString *, id> * _Nullable)data;
```

<Variant platform="acp-objc" api="track-state" repeat="1"/>

```objc
+ (void) trackState: (nullable NSString*) state data: (nullable NSDictionary*) contextData;
```

<Variant platform="aep-swift" api="collect-pii" repeat="1"/>

```swift
public static func collectPii(_ data: [String: Any])
```

<Variant platform="aep-objc" api="collect-pii" repeat="1"/>

```objc
+ (void)collectPii:(NSDictionary<NSString *, id> * _Nonnull)data;
```

<Variant platform="acp-objc" api="collect-pii" repeat="1"/>

```objc
+ (void) collectPii: (nonnull NSDictionary<NSString*, NSString*>*) data;
```

<Variant platform="aep-swift" api="collect-launch-info" repeat="1"/>

```swift
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

<Variant platform="aep-objc" api="collect-launch-info" repeat="1"/>

```objc
+ (void)collectLaunchInfo:(NSDictionary<NSString *, id> * _Nonnull)userInfo;
```

<Variant platform="acp-objc" api="collect-launch-info" repeat="1"/>

```objc
+ (void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```

<Variant platform="aep-swift" api="get-sdk-identities" repeat="1"/>

```swift
static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-sdk-identities" repeat="1"/>

```objc
+ (void)getSdkIdentities:(void (^ _Nonnull)(NSString * _Nullable, NSError * _Nullable))completion;
```

<Variant platform="acp-objc" api="get-sdk-identities" repeat="1"/>

```objc
+ (void) getSdkIdentities: (nullable void (^) (NSString* __nullable content)) callback;
+ (void) getSdkIdentitiesWithCompletionHandler: (nullable void (^) (NSString* __nullable content, NSError* _Nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="set-log-level" repeat="1"/>

```swift
public static func setLogLevel(_ level: LogLevel)
```

<Variant platform="aep-objc" api="set-log-level" repeat="1"/>

```objc
+ (void)setLogLevel:(enum AEPLogLevel)level;
```

<Variant platform="acp-objc" api="set-log-level" repeat="1"/>

```objc
+ (void) setLogLevel: (ACPMobileLogLevel) logLevel;
```

<Variant platform="aep-swift" api="register-url-handler" repeat="1"/>

```swift
  // Not supported
```

<Variant platform="aep-objc" api="register-url-handler" repeat="1"/>

```objc
  // Not supported
```

<Variant platform="acp-objc" api="register-url-handler" repeat="1"/>

```objc
+ (void) registerURLHandler: (nonnull BOOL (^) (NSString* __nullable url)) callback;
```

<Variant platform="aep-swift" api="set-app-group" repeat="1"/>

```swift
public static func setAppGroup(_ group: String?)
```

<Variant platform="aep-objc" api="set-app-group" repeat="1"/>

```objc
+ (void)setAppGroup:(NSString * _Nullable)group;
```

<Variant platform="acp-objc" api="set-app-group" repeat="1"/>

```objc
+ (void) setAppGroup: (nullable NSString*) appGroup;
```

<Variant platform="aep-swift" api="configure-with-app-id" repeat="1"/>

```swift
static func configureWith(appId: String)
```

<Variant platform="aep-objc" api="configure-with-app-id" repeat="1"/>

```objc
+ (void)configureWithAppId:(NSString * _Nonnull)appId;
```

<Variant platform="acp-objc" api="configure-with-app-id" repeat="1"/>

```objc
+ (void) configureWithAppId: (NSString* __nullable) appid;
```

<Variant platform="aep-swift" api="update-configuration" repeat="1"/>

```swift
static func updateConfigurationWith(configDict: [String: Any])
```

<Variant platform="aep-objc" api="update-configuration" repeat="1"/>

```objc
+ (void)updateConfiguration:(NSDictionary<NSString *, id> * _Nonnull)configDict;
```

<Variant platform="acp-objc" api="update-configuration" repeat="1"/>

```objc
+ (void) updateConfiguration: (NSDictionary* __nullable) config;
```

<Variant platform="aep-swift" api="configure-with-file-in-path" repeat="1"/>

```swift
static func configureWith(filePath: String)
```

<Variant platform="aep-objc" api="configure-with-file-in-path" repeat="1"/>

```objc
+ (void)configureWithFilePath:(NSString * _Nonnull)filePath;
```

<Variant platform="acp-objc" api="configure-with-file-in-path" repeat="1"/>

```objc
+ (void) configureWithFileInPath: (NSString* __nullable) filepath;
```

<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
public static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```