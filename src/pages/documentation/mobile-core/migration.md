# Migrating to AEPCore reference

This document is a reference comparison of ACPCore (2.x) APIs against their equivalent APIs in AEPCore (3.x).

## Primary `Classes`

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | MobileCore | AEPMobileCore | ACPCore |
| Enum | LogLevel | AEPLogLevel | ACPMobileLogLevel |

## Core extension APIs

### trackAction

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func track(action: String?, data: [String: Any]?)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)trackAction:(NSString * _Nullable)action data:(NSDictionary<NSString *, id> * _Nullable)data;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary*) contextData;
```
{% endtab %}
{% endtabs %}

### trackState

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func track(state: String?, data: [String: Any]?)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)trackState:(NSString * _Nullable)state data:(NSDictionary<NSString *, id> * _Nullable)data;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) trackState: (nullable NSString*) state data: (nullable NSDictionary*) contextData;
```
{% endtab %}
{% endtabs %}

### collectPii

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
public static func collectPii(_ data: [String: Any])
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)collectPii:(NSDictionary<NSString *, id> * _Nonnull)data;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) collectPii: (nonnull NSDictionary<NSString*, NSString*>*) data;
```
{% endtab %}
{% endtabs %}

### collectLaunchInfo

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
public static func collectLaunchInfo(_ userInfo: [String: Any])
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)collectLaunchInfo:(NSDictionary<NSString *, id> * _Nonnull)userInfo;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) collectLaunchInfo: (nonnull NSDictionary*) userInfo;
```
{% endtab %}
{% endtabs %}

### getSdkIdentities

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)getSdkIdentities:(void (^ _Nonnull)(NSString * _Nullable, NSError * _Nullable))completion;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) getSdkIdentities: (nullable void (^) (NSString* __nullable content)) callback;
+ (void) getSdkIdentitiesWithCompletionHandler: (nullable void (^) (NSString* __nullable content, NSError* _Nullable error)) completionHandler;
```
{% endtab %}
{% endtabs %}

### setLogLevel

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
public static func setLogLevel(_ level: LogLevel)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)setLogLevel:(enum AEPLogLevel)level;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) setLogLevel: (ACPMobileLogLevel) logLevel;
```
{% endtab %}
{% endtabs %}

### registerURLHandler

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
  // Not supported
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
  // Not supported
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) registerURLHandler: (nonnull BOOL (^) (NSString* __nullable url)) callback;
```
{% endtab %}
{% endtabs %}

### setAppGroup

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
public static func setAppGroup(_ group: String?)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)setAppGroup:(NSString * _Nullable)group;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) setAppGroup: (nullable NSString*) appGroup;
```
{% endtab %}
{% endtabs %}

### configureWithAppId

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func configureWith(appId: String)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)configureWithAppId:(NSString * _Nonnull)appId;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) configureWithAppId: (NSString* __nullable) appid;
```
{% endtab %}
{% endtabs %}

### updateConfiguration

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func updateConfigurationWith(configDict: [String: Any])
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)updateConfiguration:(NSDictionary<NSString *, id> * _Nonnull)configDict;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) updateConfiguration: (NSDictionary* __nullable) config;
```
{% endtab %}
{% endtabs %}

### configureWithFileInPath

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
static func configureWith(filePath: String)
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (void)configureWithFilePath:(NSString * _Nonnull)filePath;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (void) configureWithFileInPath: (NSString* __nullable) filepath;
```
{% endtab %}
{% endtabs %}

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>
{% tab title="AEP 3.x (Swift)" %}
```swift
public static var extensionVersion: String
```
{% endtab %}

{% tab title="AEP 3.x (Objective-C)" %}
```objc
+ (nonnull NSString*) extensionVersion;
```
{% endtab %}

{% tab title="ACP 2.x (Objective-C)" %}
```objc
+ (nonnull NSString*) extensionVersion;
```
{% endtab %}
{% endtabs %}

