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

#### Syntax

```java
public static String extensionVersion();
```

#### Example

```java
Messaging.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
Messaging.extensionVersion()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
public static let extensionVersion
```

#### Example

```swift
Messaging.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
public static let extensionVersion
```

#### Example

```objc
[AEPMobileMessaging extensionVersion];
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
Messaging.registerExtension();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
Messaging.registerExtension()
```

## resetIdentities

The [MobileCore.resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities) API is used to inform extensions to clear any identities that it owns. Starting with release 3.3.3 on Android and 5.6.3 on iOS, the Messaging extension handles the `MobileCore.resetIdentities` API by clearing the push identifier from the Messaging extension. Using this API does not remove the push identifier from the server-side User Profile Graph.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
MobileCore.resetIdentities();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
MobileCore.resetIdentities()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```swift
MobileCore.resetIdentities()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objc
[AEPMobileCore resetIdentities];
```

## clearCachedPropositions

Clears all downloaded and cached content card propositions from both the in-memory cache and the on-device storage. Call this API when a user signs out or when you need to ensure no persisted content card data is carried forward to the next session.

<InlineAlert variant="info" slots="text"/>

This API only affects content card propositions. In-App Message rules, Code-Based Experience propositions, and other extension data are not affected. Calling `MobileCore.resetIdentities()` also clears content card propositions automatically.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void clearCachedPropositions();
```

#### Example

```java
Messaging.clearCachedPropositions();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
Messaging.clearCachedPropositions()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
public static func clearCachedPropositions()
```

#### Example

```swift
Messaging.clearCachedPropositions()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) clearCachedPropositions;
```

#### Example

```objc
[AEPMobileMessaging clearCachedPropositions];
```

<InlineAlert variant="info" slots="text"/>

Channel-specific APIs are listed in the corresponding API reference section.
