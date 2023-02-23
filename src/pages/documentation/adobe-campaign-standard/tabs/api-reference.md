<Variant platform="android" api="extension-version" repeat="10"/>

#### Java

**Syntax**

```java
public String extensionVersion()
```

**Example**

```java
String campaignExtensionVersion = Campaign.extensionVersion();
```

#### Kotlin

**Syntax**

```java
public String extensionVersion()
```

**Example**

```java
val campaignExtensionVersion: String = Campaign.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let campaignVersion = Campaign.extensionVersion
```

#### Objective-C

**Syntax**

```objective-c
+ (NSString * _Nonnull)extensionVersion
```

**Example**

```objective-c
NSString *campaignVersion = [AEPMobileCampaign extensionVersion];
```

<Variant platform="android" api="register-extension" repeat="1"/>

This API has been deprecated as of version 2.0.0. Please use the [Mobile Core registerExtension API](../../mobile-core/api-reference.md) instead.

<Variant platform="ios" api="register-extension" repeat="1"/>

This API no longer exists in the Adobe Campaign Standard extension. Instead, the extension should be registered by calling the `registerExtensions` API in the MobileCore. Please see the updated SDK initialization steps at the [migrate to Swift tutorial](../migrate-to-swift.md).

<Variant platform="android" api="reset-linkage-fields" repeat="10"/>

#### Java

**Syntax**

```java
public static void resetLinkageFields()
```

**Example**

```java
Campaign.resetLinkageFields()
```

#### Kotlin

**Syntax**

```java
public static void resetLinkageFields()
```

**Example**

```java
Campaign.resetLinkageFields()
```

<Variant platform="ios" api="reset-linkage-fields" repeat="10"/>

#### Swift

**Syntax**

```swift
static func resetLinkageFields()
```

**Example**

```swift
Campaign.resetLinkageFields()
```

#### Objective-C

**Syntax**

```objective-c
+ (void) resetLinkageFields
```

**Example**

```objective-c
[AEPMobileCampaign resetLinkageFields];
```

<Variant platform="android" api="set-linkage-fields" repeat="10"/>

#### Java

**Syntax**

```java
public static void setLinkageFields(final Map<String, String> linkageFields)
```

**Example**

```java
HashMap<String, String> linkageFields = new HashMap<String, String>();
linkageFields.put("cusFirstName", "John");
linkageFields.put("cusLastName", "Doe");
linkageFields.put("cusEmail", "john.doe@email.com");
Campaign.setLinkageFields(linkageFields);
```

#### Kotlin

**Syntax**

```java
public static void setLinkageFields(final Map<String, String> linkageFields)
```

**Example**

```java
val linkageFields: Map<String, String?> = mapOf(
    "cusFirstName" to "John",
    "cusLastName" to "Doe",
    "cusEmail" to "john.doe@email.com"
)

Campaign.setLinkageFields(linkageFields)
```

<Variant platform="ios" api="set-linkage-fields" repeat="10"/>

#### Swift

**Syntax**

```swift
static func setLinkageFields(_ linkageFields: [String: String])
```

**Example**

```swift
Campaign.setLinkageFields(linkageFields: ["cusFirstName": "John", "cusLastName": "Doe", "cusEmail": "john.doe@email.com"])
```

#### Objective-C

**Syntax**

```objective-c
+ (void) setLinkageFields:(NSDictionary<NSString *,NSString *> * _Nonnull)
```

**Example**

```objective-c
[AEPMobileCampaign setLinkageFields:@{@"cusFirstName" : @"John", @"cusLastName": @"Doe", @"cusEmail": @"john.doe@email.com"}];
```
