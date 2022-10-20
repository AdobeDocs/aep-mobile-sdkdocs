<Variant platform="aep-swift" api="append-to-url" repeat="1"/>

```swift
static func appendTo(url: URL?, completion: @escaping (URL?, Error?) -> Void)
```

<Variant platform="aep-objc" api="append-to-url" repeat="1"/>

```objectivec
+ (void) appendToUrl: (NSURL * _Nullable baseUrl)
					completion: ^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) completion;
```

<Variant platform="acp-objc" api="append-to-url" repeat="1"/>

```objectivec
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCallback: (nullable void (^) (NSURL* __nullable urlWithVisitorData)) callback;
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCompletionHandler: (nullable void (^) (NSURL* __nullable urlWithVersionData, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objectivec
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objectivec
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="aep-swift" api="get-experience-cloud-id" repeat="1"/>

```swift
static func getExperienceCloudId(completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-experience-cloud-id" repeat="1"/>

```objectivec
+ (void) getExperienceCloudId: ^(NSString * _Nullable ecid, NSError * _Nullable error) completion;
```

<Variant platform="acp-objc" api="get-experience-cloud-id" repeat="1"/>

```objectivec
+ (void) getExperienceCloudId: (nonnull void (^) (NSString* __nullable experienceCloudId)) callback;
+ (void) getExperienceCloudIdWithCompletionHandler: (nonnull void (^) (NSString* __nullable experienceCloudId, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="get-identifiers" repeat="1"/>

```swift
static func getIdentifiers(completion: @escaping ([Identifiable]?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-identifiers" repeat="1"/>

```objectivec
+ (void) getIdentifiers: ^(NSArray<id<AEPIdentifiables>> * _Nullable identifiers, NSError * _Nullable error) completion;
```

<Variant platform="acp-objc" api="get-identifiers" repeat="1"/>

```objectivec
+ (void) getIdentifiers: (nonnull void (^) (NSArray<ADBMobileVisitorId*>* __nullable visitorIDs)) callback;
+ (void) getIdentifiersWithCompletionHandler: (nonnull void (^) (NSArray<ACPMobileVisitorId*>* __nullable visitorIDs, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="get-url-variables" repeat="1"/>

```swift
static func getUrlVariables(completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-url-variables" repeat="1"/>

```objectivec
+ (void) getUrlVariables: ^(NSString * _Nullable urlVariables, NSError * _Nullable error) completion;
```

<Variant platform="acp-objc" api="get-url-variables" repeat="1"/>

```objectivec
+ (void) getUrlVariables: (nonnull void (^) (NSString* __nullable urlVariables)) callback;
+ (void) getUrlVariablesWithCompletionHandler: (nonnull void (^) (NSString* __nullable urlVariables, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="set-advertising-identifier" repeat="1"/>

```swift
public static func setAdvertisingIdentifier(_ identifier: String?)
```

<Variant platform="aep-objc" api="set-advertising-identifier" repeat="1"/>

```objectivec
+ (void) setAdvertisingIdentifier: (NSString * _Nullable identifier);
```

<Variant platform="acp-objc" api="set-advertising-identifier" repeat="1"/>

```objectivec
+ (void) setAdvertisingIdentifier: (nullable NSString*) adId;
```

<Variant platform="aep-swift" api="set-push-identifier" repeat="1"/>

```swift
public static func setPushIdentifier(_ deviceToken: Data?)
```

<Variant platform="aep-objc" api="set-push-identifier" repeat="1"/>

```objectivec
+ (void) setPushIdentifier: (NSString * _Nullable deviceToken);
```

<Variant platform="acp-objc" api="set-push-identifier" repeat="1"/>

```objectivec
+ (void) setPushIdentifier: (nullable NSData*) deviceToken;
```

<Variant platform="aep-swift" api="sync-identifier" repeat="1"/>

```swift
static func syncIdentifier(identifierType: String, identifier: String, authenticationState: MobileVisitorAuthenticationState)
```

<Variant platform="aep-objc" api="sync-identifier" repeat="1"/>

```objectivec
+ (void) syncIdentifierWithType: (NSString * _Nonnull identifierType)
										 identifier: (NSString * _Nonnull identifier)
								 authentication: (enum AEPAuthenticationState authenticationState);
```

<Variant platform="acp-objc" api="sync-identifier" repeat="1"/>

```objectivec
+ (void) syncIdentifier: (nonnull NSString*) identifierType             
             identifier: (nonnull NSString*) identifier
         authentication: (ADBMobileVisitorAuthenticationState) authenticationState;
```

<Variant platform="aep-swift" api="sync-identifiers" repeat="1"/>

```swift
static func syncIdentifiers(identifiers: [String: String]?)
static func syncIdentifiers(identifiers: [String: String]?, authenticationState: MobileVisitorAuthenticationState)
```

<Variant platform="aep-objc" api="sync-identifiers" repeat="1"/>

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers);
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers)
					authentication: (enum AEPAuthenticationState authenticationState);
```

<Variant platform="acp-objc" api="sync-identifiers" repeat="1"/>

```objectivec
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers;
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers authentication: (ACPMobileVisitorAuthenticationState) authenticationState;
```