---
title: Consent for Edge Network API reference
description: An API reference for the Consent for Edge Network mobile extension.
keywords:
- API reference
- Consent for Edge Network
- Edge Network
---

# API Reference

## extensionVersion

The extensionVersion() API returns the version of the client-side Consent extension.

### Android Kotlin

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```kotlin
fun extensionVersion(): String
```

#### Example

```kotlin
val extensionVersion = Consent.extensionVersion()
```

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion();
```

#### Example

```java
String extensionVersion = Consent.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let extensionVersion = Consent.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objectivec
NSString *extensionVersion = [AEPMobileEdgeConsent extensionVersion];
```

## getConsents

Retrieves the current consent preferences stored in the Consent extension.

### Android Kotlin

* _callback_ - Invoked with the current consent preferences. If an `AdobeCallbackWithError` is provided, an `AdobeError` is returned if any error occurs while retrieving the user consents. The callback may be invoked on a different thread.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```kotlin
fun getConsents(callback: AdobeCallback<Map<String, Any>>)
```

#### Example

```kotlin
Consent.getConsents { currentConsents ->
    // Handle currentConsents
}
```

### Android Java

* _callback_ - Invoked with the current consent preferences. If an `AdobeCallbackWithError` is provided, an `AdobeError` is returned if any error occurs while retrieving the user consents. The callback may be invoked on a different thread.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getConsents(final AdobeCallback<Map<String, Object>> callback);
```

#### Example

```java
Consent.getConsents(new AdobeCallback<Map<String, Object>>() {
    @Override
    public void call(Map<String, Object> currentConsents) {
        // Handle currentConsents
    }
});
```

### iOS Swift

* _completion_ - Invoked with the current consent preferences or an `AEPError` if an error occurs or the request times out. The completion may be invoked on a different thread.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getConsents(completion: @escaping ([String: Any]?, Error?) -> Void)
```

#### Example

```swift
Consent.getConsents { currentConsents, error in
    // Handle currentConsents
}
```

### iOS Objective-C

* _completion_ - Invoked with the current consent preferences or an `AEPError` if an error occurs or the request times out. The completion may be invoked on a different thread.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) getConsents:^ (NSDictionary<NSString *,id> * _Nullable, NSError * _Nullable)
```

#### Example

```objectivec
[AEPMobileEdgeConsent getConsents:^(NSDictionary *currentConsents, NSError *error){
    // Handle currentConsents
}];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension();
```

#### Example

```java
Consent.registerExtension();
```

### iOS Swift

Use the MobileCore API to register the Edge Consent extension.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func registerExtensions(_ extensions: [NSObject.Type], 
                               _ completion: (() -> Void)? = nil)
```

#### Example

```swift
import AEPEdgeConsent

...
MobileCore.registerExtensions([Consent.self])
```

### iOS Objective-C

Use the AEPMobileCore API to register the Edge Consent extension.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions 
                  completion: (void (^ _Nullable)(void)) completion;
```

#### Example

```objectivec
@import AEPEdgeConsent;

...
[AEPMobileCore registerExtensions:@[AEPMobileEdgeConsent.class] completion:nil];
```

## updateConsents

Merges the existing consents with the given consents. Duplicate keys will take the value of those passed in the API.

<InlineAlert variant="info" slots="text"/>

Since Android 3.0.2 and iOS 5.0.1, `Consent.update` requests ignore repeated updates that match current consent preferences when received within one second of the previous request.

<InlineAlert variant="info" slots="text1, text2, text3, text4, text5"/>

When `Consent.update` API is called, the Consent extension uses Adobe Standard 2.0 to communicate with the Edge Network.  Additionally, the property `metadata` is set to the time at which the API is called.

The following example shows when `Consent.update` is called to set collect consent to `y`:

```swift
// Example in iOS (Swift),  updating user's collect consent to 'yes'
let collectConsent = ["collect": ["val": "y"]]
let currentConsents = ["consents": collectConsent]
Consent.update(with: currentConsents)
```

Bellow you can see the snippet of the request payload sent to the Edge Network:

```json
    "consent": [
        {
        "standard": "Adobe",
        "version": "2.0",
        "value": {
            "metadata": {
            "time" : "2023-10-03T17:23:04.443Z"
            },
            "collect": {
            "val": "y"
            }
          }
        }
     ]
```

For additional information about the management of consent preferences, please refer to the [Privacy and GDPR documentation](../../resources/privacy-and-gdpr.md#using-experience-platform-sdks-for-edge-network).

### Android Kotlin

* _consents_ - A `Map` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```kotlin
fun update(consents: Map<String, Any>)
```

#### Example

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

### Android Java

* _consents_ - A `Map` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void update(final Map<String, Object> consents);
```

#### Example

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

### iOS Swift

* _consents_ - A `[String: Any]` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func update(with consents: [String: Any])
```

#### Example

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

### iOS Objective-C

* _consents_ - A `[String: Any]` of consents defined based on [Privacy/Personalization/Marketing Preferences \(Consents\) XDM Schema](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md).

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) updateWithConsents:(NSDictionary<NSString *,id> * _Nonnull)
```

#### Example

```objc
// Example 1, updating users collect consent to 'yes'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"y"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];

// Example 2, updating users collect consent to 'no'
NSDictionary *collectConsent = @{ @"collect": @{@"val": @"n"};
[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];
```
