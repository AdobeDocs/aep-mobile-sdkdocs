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

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static let extensionVersion
```

### Example

```swift
let version = Signal.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

### Example

```objectivec
NSString *version = [AEPMobileSignal extensionVersion];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

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

## collectPii

The Signal extension can be used to handle `collectPii` rules. For more information, see the [collectPii](../api-reference.md#collectpii) API.
