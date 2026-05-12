---
title: Mobile Core Signal API reference
description: An API reference for the Mobile Core Signal extension.
keywords:
- API reference
- Mobile Core
- Signal
- Signal for Mobile Core
---

# Signal API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Signal extension that is registered with the Mobile Core extension.

To get the version of the Signal extension, use the following code sample:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@NonNull
public static String extensionVersion();
```

### Example

```java
String signalExtensionVersion = Signal.extensionVersion();
```

### iOS

### Syntax

```swift
public static let extensionVersion
```

**Examples**

**Swift**

```swift
let version = Signal.extensionVersion
```

**Objective-C**

```objectivec
NSString *version = [AEPMobileSignal extensionVersion];
```

\<!--- <Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPSignal.extensionVersion().then(signalExtensionVersion => console.log("AdobeExperienceSDK: ACPSignal version: " + signalExtensionVersion));
```

\<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

### Flutter

#### Dart

```dart
String signalExtensionVersion = await FlutterACPSignal.extensionVersion;
``` --->
 ---\>

## registerExtension

<InlineAlert variant="warning" slots="heading, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../mobile-core/api-reference.md#registerextensions) API instead.

Registers the Signal extension with the Mobile Core.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void registerExtension()
```

### Example

```java
Signal.registerExtension();
```

\<!--- <Variant platform="react-native" api="register-extension" repeat="1"/>

When using React Native, register the Signal extension with Mobile Core in native code as shown on the Android and iOS tabs. ---\>

\<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/> ---\>

## collectPii

The Signal extension can be used to handle `collectPii` rules. For more information, see the [collectPii](../api-reference.md#collectpii) API.
