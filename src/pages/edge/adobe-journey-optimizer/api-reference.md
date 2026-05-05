---
title: Adobe Journey Optimizer API reference
description: An API reference for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
---

# Adobe Journey Optimizer API reference

## extensionVersion

The extensionVersion API returns the library version.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static String extensionVersion()
```

### Example

```java
Messaging.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```kotlin
Messaging.extensionVersion();
```

### IOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static static let extensionVersion()
```

### Example

```swift
Messaging.extensionVersion()
```

### IOS Objective-C 

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
public static let extensionVersion
```

### Example

```objc
[AEPMobileMessaging extensionVersion];
```

## registerExtension

<InlineAlert variant="warning" slot="text" />

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.
Use `MobileCore.registerExtensions()` API instead.

### Android Java 

<CodeBlock slots="heading, code" repeat="1"/>

### Syntax

```java
public static String registerExtension()
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1"/>

### Example

```kotlin
Messaging.registerExtension();
```

## resetIdentities

The [MobileCore.resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities) API is used to inform extensions to clear any identities that it owns. Starting with release 3.3.3 on Android and 5.6.3 on iOS, the Messaging extension handles the `MobileCore.resetIdentities` API by clearing the push identifier from the Messaging extension. Using this API does not remove the push identifier from the server-side User Profile Graph.

## Android Java

<CodeBlock slots="heading, code" repeat="1"/>

### Example

```java
MobileCore.resetIdentities();
```

### Android Kotlin 

<CodeBlock slots="heading, code" repeat="1"/>

### Example

```kotlin
MobileCore.resetIdentities();
```

### IOS Swift

<CodeBlock slots="heading, code" repeat="1"/>

### Example

```swift
MobileCore.resetIdentities()
```
### IOS Objective C

<CodeBlock slots="heading, code" repeat="1"/>

### Example 

```objc
[AEPMobileCore resetIdentities];
```
