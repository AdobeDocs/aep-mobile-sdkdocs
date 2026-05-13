---
title: Mobile Core Configuration API reference
description: An API reference for the Mobile Core Configuration extension.
keywords:
- API reference
- Configuration for Mobile Core
- Configuration
- Mobile Core
---

# Configuration API reference

## clearUpdatedConfiguration

You can clear any programmatic updates made to the configuration via the `clearUpdatedConfiguration` API. This will clear programmatic updates to configuration made via the [updateConfiguration](#updateconfiguration) API. It will also clear any updates to the `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS)  made via [setPrivacyStatus](../../../../resources/privacy-and-gdpr.md/#setprivacystatus).

Here are some scenarios based on the order of calls:

1. [configureWithAppId](#configurewithappid)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithAppId`.

1. [configureWithFileInPath](#configurewithfileinpath)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithFileInPath`.

1. [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration
4. [updateConfiguration](#updateconfiguration)

Result: In this example, the configuration will be the most recently updated configuration and will not have any keys from the first update unless they are included in the most recent update.

1. [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets)
2. [setPrivacyStatus](../../../../resources/privacy-and-gdpr.md/#setprivacystatus)
3. clearUpdatedConfiguration

Result: In this example, the configuration will have the initial `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS) set via [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void clearUpdatedConfiguration();
```

### Example

```java
MobileCore.clearUpdatedConfiguration();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func clearUpdatedConfiguration()
```

### Example

```swift
MobileCore.clearUpdatedConfiguration()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) clearUpdatedConfiguration(); 
```

### Example

```objectivec
[AEPMobileCore clearUpdatedConfiguration];
```

## configureWithAppID

You can use this API to download and apply the remote configuration for the provided app ID to the current session. Once downloaded, the configuration is stored in the local cache to prevent unnecessary downloads. The configuration is fetched only if remote changes are detected.

<InlineAlert variant="info" slots="text"/>

The SDK attempts to refresh the configuration on every cold launch to ensure it stays up to date with the remote configuration.

When you configure a mobile property, a unique environment ID is generated that the SDK uses to retrieve your configuration. The remote configuration is available when an app configuration is created and published to a given environment.

<InlineAlert variant="success" slots="text"/>

As best practice, you should configure a mobile property in the Data Collection UI and use environment IDs to configure your application. Follow the steps in the tutorial on [setting up a mobile property](../../../getting-started/create-a-mobile-property.md) if you need to create a new Experience Platform App.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void configureWithAppID(@NonNull final String appId);
```

### Example

```java
MobileCore.configureWithAppId("1423ae38-8385-8963-8693-28375403491d");
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
 static func configureWith(appId: String)
```

### Example

```swift
 MobileCore.configureWith(appId: "1423ae38-8385-8963-8693-28375403491d")
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) configureWithAppId: (NSString* appId);
```

### Example

```objectivec
 [AEPMobileCore configureWithAppId: @"1423ae38-8385-8963-8693-28375403491d"];
```

## configureWithFileInAssets

<InlineAlert variant="info" slots="text"/>

This API is only available in Android.

You can use this API to load the configuration from the JSON configuration file in the app's Assets folder.

<InlineAlert variant="warning" slots="text"/>

This will replace any configuration previously loaded during app launch or with the [configureWithAppID](#configurewithappid) API.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void configureWithFileInAssets(@NonNull final String fileName);
```

### Example

```java
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```

## configureWithFileInPath

You can use this API to load the configuration from the bundled JSON configuration file in your app package.

<InlineAlert variant="warning" slots="text"/>

This will replace any configuration previously loaded during app launch or with the [configureWithAppID](#configurewithappid) API.

To pass in a bundled path and file name:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void configureWithFileInPath(@NonNull final String filePath);
```

### Example

```java
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
 static func configureWith(filePath: String)
```

### Example

```swift
 let filePath = Bundle.main.path(forResource: "ExampleJSONFile", ofType: "json")
 MobileCore.configureWith(filePath: filePath)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) configureWithFileInPath: (NSString* __nullable) filepath;
```

### Example

```objectivec
 NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ExampleJSONFile" ofType:@"json"];
 [AEPMobileCore configureWithFilePath:filePath];
```

## extensionVersion

The `extensionVersion()` API returns the version of the Configuration extension.

To get the version of the Configuration extension, use the following code sample:

### Android Java

```java
String coreExtensionVersion = MobileCore.extensionVersion();
```

### iOS Swift

```swift
let version = MobileCore.extensionVersion
```

### iOS Objective-C

```objectivec
NSString *version = [AEPMobileCore extensionVersion];
```

## updateConfiguration

You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration.

<InlineAlert variant="info" slots="text"/>

Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values.

<InlineAlert variant="warning" slots="text"/>

Do not use this API to update the `build.environment` key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read [Environment-aware configuration properties](index.md#environment-aware-configuration-properties).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void updateConfiguration(@NonNull final Map configMap);
```

### Example

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(updateConfiguration:)
static func updateConfigurationWith(configDict: [String: Any])
```

### Example

```swift
 let updatedConfig = ["global.privacy":"optedout"]
 MobileCore.updateConfigurationWith(configDict: updatedConfig)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
 + (void) updateConfiguration: (NSDictionary* __nullable) config;
```

### Example

```objectivec
 NSDictionary *updatedConfig = @{@"global.privacy":@"optedout"};
 [AEPMobileCore updateConfiguration:updatedConfig];
```
