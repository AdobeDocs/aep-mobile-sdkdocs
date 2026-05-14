---
title: Adobe Campaign Standard API reference
description: An API reference for the Adobe Campaign Standard mobile extension.
keywords:
- Adobe Campaign Standard
- API reference
---

# Adobe Campaign Standard API reference

## extensionVersion

Returns the running version of the Campaign Standard extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public String extensionVersion()
```

#### Example

```java
String campaignExtensionVersion = Campaign.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public String extensionVersion()
```

#### Example

```java
val campaignExtensionVersion: String = Campaign.extensionVersion()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let campaignVersion = Campaign.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objective-c
+ (NSString * _Nonnull)extensionVersion
```

#### Example

```objective-c
NSString *campaignVersion = [AEPMobileCampaign extensionVersion];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

Registers the Campaign Standard extension with the Mobile Core.

This API has been deprecated as of version 2.0.0. Please use the [Mobile Core registerExtension API](../../home/base/mobile-core/api-reference.md) instead.

This API no longer exists in the Adobe Campaign Standard extension. Instead, the extension should be registered by calling the `registerExtensions` API in the MobileCore. Please see the updated SDK initialization steps at the [migrate to Swift tutorial](../../resources/migration/ios/migrate-to-3x.md).

## resetLinkageFields

Clears previously stored linkage fields in the mobile SDK and triggers a Campaign rules download request to the configured Campaign server.

This method unregisters any previously registered rules with the Rules Engine and clears cached rules from the most recent rules download.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void resetLinkageFields()
```

#### Example

```java
Campaign.resetLinkageFields()
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void resetLinkageFields()
```

#### Example

```java
Campaign.resetLinkageFields()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func resetLinkageFields()
```

#### Example

```swift
Campaign.resetLinkageFields()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objective-c
+ (void) resetLinkageFields
```

#### Example

```objective-c
[AEPMobileCampaign resetLinkageFields];
```

## setLinkageFields

Sets the Campaign linkage fields (CRM IDs) in Mobile SDK to be used for downloading personalized messages from Campaign.

The set linkage fields are stored as a base64 encoded JSON string in memory and they are sent in a custom HTTP header `X-InApp-Auth`.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setLinkageFields(final Map<String, String> linkageFields)
```

#### Example

```java
HashMap<String, String> linkageFields = new HashMap<String, String>();
linkageFields.put("cusFirstName", "John");
linkageFields.put("cusLastName", "Doe");
linkageFields.put("cusEmail", "john.doe@email.com");
Campaign.setLinkageFields(linkageFields);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setLinkageFields(final Map<String, String> linkageFields)
```

#### Example

```java
val linkageFields: Map<String, String?> = mapOf(
    "cusFirstName" to "John",
    "cusLastName" to "Doe",
    "cusEmail" to "john.doe@email.com"
)

Campaign.setLinkageFields(linkageFields)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setLinkageFields(_ linkageFields: [String: String])
```

#### Example

```swift
Campaign.setLinkageFields(linkageFields: ["cusFirstName": "John", "cusLastName": "Doe", "cusEmail": "john.doe@email.com"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objective-c
+ (void) setLinkageFields:(NSDictionary<NSString *,NSString *> * _Nonnull)
```

#### Example

```objective-c
[AEPMobileCampaign setLinkageFields:@{@"cusFirstName" : @"John", @"cusLastName": @"Doe", @"cusEmail": @"john.doe@email.com"}];
```

