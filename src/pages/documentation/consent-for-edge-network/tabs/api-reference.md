<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion();
```

**Example**

```java
String extensionVersion = Consent.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = Consent.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let extensionVersion = Consent.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [AEPMobileEdgeConsent extensionVersion];
```

<Variant platform="android" api="get-consents" repeat="9"/>

#### Java

**Syntax**

```java
public static void getConsents(final AdobeCallback<Map<String, Object>> callback);
```

* _callback_ - callback invoked with the current consents of the extension. If an `AdobeCallbackWithError` is provided, an `AdobeError`, can be returned in the eventuality of any error that occurred while getting the user consents. The callback may be invoked on a different thread.

**Example**

```java
Consent.getConsents(new AdobeCallback<Map<String, Object>>() {
    @Override
    public void call(Map<String, Object> currentConsents) {
        // Handle currentConsents
    }
});
```

#### Kotlin

**Example**

```java
Consent.getConsents { currentConsents ->
    // Handle currentConsents
}
```

<Variant platform="ios" api="get-consents" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getConsents(completion: @escaping ([String: Any]?, Error?) -> Void)
```

* _completion_ - Invoked with the current consent preferences or an `AEPError` if an unexpected error occurs or the request timed out. It may be invoked on a different thread.

**Example**

```swift
Consent.getConsents { currentConsents, error in
    // Handle currentConsents
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getConsents:^ (NSDictionary<NSString *,id> * _Nullable, NSError * _Nullable)
```

**Example**

```objectivec
[AEPMobileEdgeConsent getConsents:^(NSDictionary *currentConsents, NSError *error){
    // Handle currentConsents
}];
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension();
```

**Example**

```java
Consent.registerExtension();
```

<Variant platform="ios" api="register-extension" repeat="12"/>

#### Swift

Use the MobileCore API to register the Edge Consent extension.

**Syntax**

```swift
static func registerExtensions(_ extensions: [NSObject.Type], 
                               _ completion: (() -> Void)? = nil)
```

**Example**

```swift
import AEPEdgeConsent

...
MobileCore.registerExtensions([Consent.self])
```

#### Objective-C

Use the AEPMobileCore API to register the Edge Consent extension.

**Syntax**

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions 
                  completion: (void (^ _Nullable)(void)) completion;
```

**Example**

```objectivec
@import AEPEdgeConsent;

...
[AEPMobileCore registerExtensions:@[AEPMobileEdgeConsent.class] completion:nil];
```

<Variant platform="android" api="update-consents" repeat="9"/>

#### Java

**Syntax**

```java
public static void update(final Map<String, Object> consents);
```

* _consents_ - A `Map` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

**Example**

```java
// Example 1, updating users collect consent to 'yes'
final Map<String, Object> collectConsents = new HashMap<>();
collectConsents.put("collect", new HashMap<String, String>() {
    {
        put("val", "y");
    }
});

final Map<String, Object> consents = new HashMap<>();
consents.put("consents", collectConsents);

Consent.update(consents);

// Example 2, updating users collect consent to 'no'
final Map<String, Object> collectConsents = new HashMap<>();
collectConsents.put("collect", new HashMap<String, String>() {
    {
        put("val", "n");
    }
});

final Map<String, Object> consents = new HashMap<>();
consents.put("consents", collectConsents);

Consent.update(consents);
```

#### Kotlin

**Example**

```java
// Example 1, updating users collect consent to 'yes'
val collectConsents = mutableMapOf<String, Any>()
collectConsents["collect"] = mutableMapOf("val" to "y")

val consents = mutableMapOf<String, Any>()
consents["consents"] = collectConsents

Consent.update(consents)

// Example 2, updating users collect consent to 'no'
val collectConsents = mutableMapOf<String, Any>()
collectConsents["collect"] = mutableMapOf("val" to "n")

val consents = mutableMapOf<String, Any>()
consents["consents"] = collectConsents

Consent.update(consents)
```

<Variant platform="ios" api="update-consents" repeat="11"/>

#### Swift

**Syntax**

```swift
static func update(with consents: [String: Any])
```

* _consents_ - A `[String: Any]` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

**Example**

```swift
// Example 1, updating users collect consent to 'yes'
let collectConsent = ["collect": ["val": "y"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)

// Example 2, updating users collect consent to 'no'
let collectConsent = ["collect": ["val": "n"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) updateWithConsents:(NSDictionary<NSString *,id> * _Nonnull)
```

**Example**

```objc
// Example 1, updating users collect consent to 'yes'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"y"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];

// Example 2, updating users collect consent to 'no'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"n"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];
```