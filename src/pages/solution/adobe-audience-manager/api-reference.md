---
title: Adobe Audience Manager API reference
description: An API reference for the Adobe Audience Manager mobile extension.
keywords: 
- Adobe Audience Manager
- API reference
---

# Adobe Audience Manager API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Audience extension that is registered with the Mobile Core extension.

To get the version of the Audience extension, use the following code sample:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion()
```

#### Example

```java
String audienceExtensionVersion = Audience.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val extensionVersion = Audience.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let audienceExtensionVersion  = Audience.extensionVersion()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objectivec
NSString *audienceExtensionVersion = [AEPMobileAudience extensionVersion];
```

## getVisitorProfile

This API returns the most recently obtained visitor profile. The visitor profile is saved in the SDK's local storage for access across multiple launches of your app. If no audience signal has been sent before, when this API is called, a null value is returned.

This API returns the most recently obtained visitor profile. For easy access across multiple launches of your app, the visitor profile is saved in `SharedPreferences`. If no signal has been submitted, null is returned.

When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getVisitorProfile(final AdobeCallback<Map<String, String>> adobeCallback)
```

#### Example

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // your own customized code
    }
};

Audience.getVisitorProfile(visitorProfileCallback);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Audience.getVisitorProfile { visitorProfile ->
    // provide code to process the visitorProfile
}
```

This API returns the most recently obtained visitor profile.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getVisitorProfile(completion: @escaping ([String: String]?, Error?) -> Void)
```

#### Example

```swift
Audience.getVisitorProfile { (visitorProfile, error) in
   if error != nil {
    // handle the error here
   } else {
    // handle the retrieved visitorProfile here
   }
  }
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+  (void) getVisitorProfile:^(NSDictionary<NSString *,NSString *> * _Nullable, NSError * _Nullable)completion
```

#### Example

```objc
[AEPMobileAudience getVisitorProfile:^(NSDictionary<NSString *,NSString *> * _Nullable visitorProfile, NSError * _Nullable error) {
   if (error) {
    // handle the error here
   } else {
    // handle the returned visitorProfile dictionary here
   }
}];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

Registers the Audience Manager extension with the Mobile Core SDK.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public  static void registerExtension()
```

#### Example

```java
Audience.registerExtension();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Audience.registerExtension()
```

## reset

This API helps you reset the Audience Manager UUID and purges the current visitor profile.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID, the DPID, the DPUUID and other Audience Manager identifiers, see [Index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html).

This API resets the Audience Manager UUID and purges the current visitor profile from `android.content.SharedPreferences`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void reset()
```

#### Example

```java
Audience.reset();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Audience.reset()
```

This API resets the Audience Manager UUID and purges the current visitor profile from `UserDefaults`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func reset()
```

#### Example

```swift
Audience.reset()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) reset
```

#### Example

```objectivec
[AEPMobileAudience reset];
```

## signalWithData

This method is used to send a signal with traits to Audience Manager and get the matching segments returned in a block callback. Audience Manager sends the UUID in response to an initial signal call. The UUID is persisted on local SDK storage and is sent by the SDK to Audience Manager in all subsequent signal requests.

If you are using the Experience Cloud ID (ECID) Service (formerly MCID), the ECID and other custom identifiers for the same visitor are sent with each signal request. The visitor profile that is returned by Audience Manager is saved in SDK local storage and is updated with subsequent signal calls.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID and other Audience Manager identifiers, see the [index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html).

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `SharedPreferences` and is sent by the SDK in all subsequent signal requests. If available, the ECID is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `SharedPreferences` and is updated with every signal call.

When an `AdobeCallbackWithError` is provided, an `AdobeError` can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

### Android Java

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void signalWithData(final Map<String, String> data, final AdobeCallback<Map<String, String>> callback)
```

#### Example

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // handle the returned visitorProfile here
    }
};
​
Map<String, String> traits = new HashMap<String, String>();
traits.put("trait", "xyz");
Audience.signalWithData(traits, visitorProfileCallback);
```

### Android Kotlin

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a closure.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `NSUserDefaults` and is sent by the SDK in all subsequent signal requests. If available, the Experience Cloud ID (MID) is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `NSUserDefaults` and is updated with every signal call.

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val traits: Map<String, String?> = mapOf(
    "trait1" to "value1",
    "trait2" to "value2"
)

Audience.signalWithData(traits) { visitorProfile ->
    // handle the returned visitorProfile
}
```

### iOS Swift

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func signalWithData(data: [String: String], completion: @escaping ([String: String]?, Error?) -> Void)
```

#### Example

```swift
Audience.signalWithData(data: ["trait": "trait value"]) { (traits, error) in
  if error != nil {
     // handle the error here
     } else {
     // handle the returned visitorProfile here
     }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) signalWithData:(NSDictionary<NSString *,NSString *> * _Nonnull) completion:^(NSDictionary<NSString *,NSString *> * _Nullable, NSError * _Nullable)completion
```

#### Example

```objectivec
NSDictionary *traits = @{@"key1":@"value1",@"key2":@"value2"};
[AEPMobileAudience signalWithData:traits completion:^(NSDictionary<NSString *,NSString *> * _Nullable visitorProfile, NSError* _Nullable error) {
  if (error) {
     // handle the error here
     } else {
     // handle the returned visitorProfile dictionary here
     }
}];
```

