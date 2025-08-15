---
noIndex: true
---

<Variant platform="java" api="extension-version" repeat="4"/>

**Syntax**

```java
public static String extensionVersion();
```

**Example**

```java
String extensionVersion = Consent.extensionVersion();
```

<Variant platform="kotlin" api="extension-version" repeat="4"/>

**Syntax**

```kotlin
fun extensionVersion(): String
```

**Example**

```kotlin
val extensionVersion = Consent.extensionVersion()
```

<Variant platform="swift" api="extension-version" repeat="4"/>

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let extensionVersion = Consent.extensionVersion
```

<Variant platform="objc" api="extension-version" repeat="4"/>

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *extensionVersion = [AEPMobileEdgeConsent extensionVersion];
```

<Variant platform="java" api="get-consents" repeat="5"/>

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

<Variant platform="kotlin" api="get-consents" repeat="5"/>

**Syntax**

```kotlin
fun getConsents(callback: AdobeCallback<Map<String, Any>>)
```

* _callback_ - callback invoked with the current consents of the extension. If an `AdobeCallbackWithError` is provided, an `AdobeError`, can be returned in the eventuality of any error that occurred while getting the user consents. The callback may be invoked on a different thread.

**Example**

```kotlin
Consent.getConsents { currentConsents ->
    // Handle currentConsents
}
```

<Variant platform="swift" api="get-consents" repeat="5"/>

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

<Variant platform="objc" api="get-consents" repeat="5"/>

**Syntax**

```objectivec
+ (void) getConsents:^ (NSDictionary<NSString *,id> * _Nullable, NSError * _Nullable)
```

* _completion_ - Invoked with the current consent preferences or an `AEPError` if an unexpected error occurs or the request timed out. It may be invoked on a different thread.

**Example**

```objectivec
[AEPMobileEdgeConsent getConsents:^(NSDictionary *currentConsents, NSError *error){
    // Handle currentConsents
}];
```

<Variant platform="java" api="register-extension" repeat="4"/>

**Syntax**

```java
public static void registerExtension();
```

**Example**

```java
Consent.registerExtension();
```

<Variant platform="swift" api="register-extension" repeat="5"/>

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

<Variant platform="objc" api="register-extension" repeat="5"/>

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

<Variant platform="java" api="update-consents" repeat="5"/>

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

<Variant platform="kotlin" api="update-consents" repeat="5"/>

**Syntax**

```kotlin
fun update(consents: Map<String, Any>)
```

* _consents_ - A `Map` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

**Example**

```kotlin
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

<Variant platform="swift" api="update-consents" repeat="5"/>

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

<Variant platform="objc" api="update-consents" repeat="5"/>

**Syntax**

```objectivec
+ (void) updateWithConsents:(NSDictionary<NSString *,id> * _Nonnull)
```

* _consents_ - A `[String: Any]` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

**Example**

```objc
// Example 1, updating users collect consent to 'yes'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"y"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];

// Example 2, updating users collect consent to 'no'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"n"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];
```
