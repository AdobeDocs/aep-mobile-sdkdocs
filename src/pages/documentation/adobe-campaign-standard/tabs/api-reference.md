<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public String extensionVersion()
```

**Example**

```java
Campaign.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="10"/>

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

<Variant platform="ios-acp" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
+ (nonnull NSString*) extensionVersion;
```

**Example**

```swift
let campaignVersion = ACPCampaign.extensionVersion()
```

#### Objective-C

**Syntax**

```objective-c
+ (NSString * _Nonnull)extensionVersion
```

**Example**

```objective-c
NSString *campaignVersion = [ACPCampaign extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
extensionVersion(): Promise<string>
```

**Example**

```javascript
ACPCampaign.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCampaign version: " + version));
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Campaign.registerExtension();
```

<Variant platform="ios-aep" api="register-extension" repeat="1"/>

This API no longer exists in the Adobe Campaign Standard extension. Instead, the extension should be registered by calling the `registerExtensions` API in the MobileCore. Please see the updated SDK initialization steps at the [migrate to Swift tutorial](../migrate-to-swift.md).

<Variant platform="ios-acp" api="register-extension" repeat="10"/>

#### Swift

**Syntax**

```swift
+ (void) registerExtension
```

**Example**

```swift
ACPCampaign.registerExtension()
```

#### Objective-C

**Syntax**

```objective-c
+ (void) registerExtension
```

**Example**

```objective-c
[ACPCampaign registerExtension];
```

<Variant platform="react-native" api="register-extension" repeat="1"/>

When using React Native, register the Adobe Campaign Standard extension with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="android" api="reset-linkage-fields" repeat="5"/>

#### Java

**Syntax**

```java
public static void resetLinkageFields()
```

**Example**

```java
Campaign.resetLinkageFields()
```

<Variant platform="ios-aep" api="reset-linkage-fields" repeat="10"/>

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

<Variant platform="ios-acp" api="reset-linkage-fields" repeat="10"/>

#### Swift

**Syntax**

```swift
+ (void) resetLinkageFields
```

**Example**

```swift
ACPCampaign.resetLinkageFields()
```

#### Objective-C

**Syntax**

```objective-c
+ (void) resetLinkageFields
```

**Example**

```objective-c
[ACPCampaign resetLinkageFields];
```

<Variant platform="react-native" api="reset-linkage-fields" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
resetLinkageFields()
```

**Example**

```javascript
ACPCampaign.resetLinkageFields();
```

<Variant platform="android" api="set-linkage-fields" repeat="5"/>

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

<Variant platform="ios-aep" api="set-linkage-fields" repeat="10"/>

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

<Variant platform="ios-acp" api="set-linkage-fields" repeat="10"/>

#### Swift

**Syntax**

```swift
+ (void) setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*) linkageFields
```

**Example**

```swift
ACPCampaign.setLinkageFields(["cusFirstName": "John", "cusLastName": "Doe", "cusEmail": "john.doe@email.com"])
```

#### Objective-C

**Syntax**

```objective-c
+ (void) setLinkageFields: (NSDictionary<NSString*, NSString*>*) linkageFields
```

**Example**

```objective-c
[ACPCampaign setLinkageFields:@{@"cusFirstName" : @"John", @"cusLastName": @"Doe", @"cusEmail": @"john.doe@email.com"}];
```

<Variant platform="react-native" api="set-linkage-fields" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
setLinkageFields(linkageFields: { string: string })
```

**Example**

```javascript
ACPCampaign.setLinkageFields({"firstName": "John"});
```