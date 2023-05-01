<Variant platform="android" api="clear-updated-configuration" repeat="5"/>

#### Java

**Syntax**

```java
public static void clearUpdatedConfiguration();
```

**Example**

```java
MobileCore.clearUpdatedConfiguration();
```

<Variant platform="ios" api="clear-updated-configuration" repeat="10"/>

#### Swift

**Syntax**

```swift
static func clearUpdatedConfiguration()
```

**Example**

```swift
MobileCore.clearUpdatedConfiguration()
```

#### Objective-C

**Syntax**

```objectivec
+ (void) clearUpdatedConfiguration(); 
```

**Example**

```objectivec
[AEPMobileCore clearUpdatedConfiguration];
```

<Variant platform="android" api="configure-with-app-id" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithAppID(@NonNull final String appId);
```

**Example**

```java
MobileCore.configureWithAppId("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="ios" api="configure-with-app-id" repeat="10"/>

#### Swift

**Syntax**

```swift
 static func configureWith(appId: String)
```

**Example**

```swift
 MobileCore.configureWith(appId: "1423ae38-8385-8963-8693-28375403491d")
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithAppId: (NSString* appId);
```

**Example**

```objectivec
 [AEPMobileCore configureWithAppId: @"1423ae38-8385-8963-8693-28375403491d"];
```

<Variant platform="android" api="configure-with-file-in-assets" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithFileInAssets(@NonNull final String fileName);
```

**Example**

```java
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```

<Variant platform="android" api="configure-with-file-in-path" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithFileInPath(@NonNull final String filePath);
```

**Example**

```java
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");
```

<Variant platform="ios" api="configure-with-file-in-path" repeat="10"/>

#### Swift

**Syntax**

```swift
 static func configureWith(filePath: String)
```

**Example**

```swift
 let filePath = Bundle.main.path(forResource: "ExampleJSONFile", ofType: "json")
 MobileCore.configureWith(filePath: filePath)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithFileInPath: (NSString* __nullable) filepath;
```

**Example**

```objectivec
 NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ExampleJSONFile" ofType:@"json"];
 [AEPMobileCore configureWithFilePath:filePath];
```

<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String coreExtensionVersion = MobileCore.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="4"/>

#### Swift

```swift
let version = MobileCore.extensionVersion
```

#### Objective-C

```objectivec
NSString *version = [AEPMobileCore extensionVersion];
```

<!--- <Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPCore.extensionVersion().then(coreExtensionVersion => console.log("AdobeExperienceSDK: ACPCore version: " + coreExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String coreExtensionVersion = await FlutterACPCore.extensionVersion;
``` --->

<Variant platform="android" api="update-configuration" repeat="5"/>

#### Java

**Syntax**

```java
public static void updateConfiguration(@NonNull final Map configMap);
```

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```

<Variant platform="ios" api="update-configuration" repeat="10"/>

#### Swift

**Syntax**

```swift
@objc(updateConfiguration:)
static func updateConfigurationWith(configDict: [String: Any])
```

**Example**

```swift
 let updatedConfig = ["global.privacy":"optedout"]
 MobileCore.updateConfigurationWith(configDict: updatedConfig)
```

#### Objective-C

**Syntax**

```objectivec
 + (void) updateConfiguration: (NSDictionary* __nullable) config;
```

**Example**

```objectivec
 NSDictionary *updatedConfig = @{@"global.privacy":@"optedout"};
 [AEPMobileCore updateConfiguration:updatedConfig];
```

<!--- <Variant platform="react-native" api="update-configuration" repeat="5"/>

#### JavaScript

**Syntax**

```javascript
updateConfiguration(configMap?: { string: any })
```

**Example**

```jsx
ACPCore.updateConfiguration({"global.privacy":"optedout"});
```

<Variant platform="flutter" api="update-configuration" repeat="5"/>

#### Dart

**Syntax**

```dart
static Future<void> updateConfiguration(Map<String, Object> configMap);
```

**Example**

```dart
FlutterACPCore.updateConfiguration({"global.privacy":"optedout"});
``` --->
