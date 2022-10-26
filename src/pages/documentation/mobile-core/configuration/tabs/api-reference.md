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

<Variant platform="ios-aep" api="clear-updated-configuration" repeat="10"/>

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
public static void configureWithAppID(final String appId);
```

**Example**

```java
MobileCore.configureWithAppId("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="ios-aep" api="configure-with-app-id" repeat="10"/>

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

<Variant platform="ios-acp" api="configure-with-app-id" repeat="10"/>

#### Swift

**Syntax**

```swift
static func configure(withAppId: String)
```

**Example**

```swift
ACPCore.configure(withAppId: "1423ae38-8385-8963-8693-28375403491d")
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithAppId: (NSString* __nullable) appid;
```

**Example**

```objectivec
[ACPCore configureWithAppId:@"1423ae38-8385-8963-8693-28375403491d"];
```

<Variant platform="unity" api="configure-with-app-id" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void ConfigureWithAppID(string appId)
```

**Example**

```csharp
ACPCore.ConfigureWithAppID("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="xamarin" api="configure-with-app-id" repeat="7"/>

#### C#

**Android syntax**

```csharp
public unsafe static void ConfigureWithAppID (string appId);
```

**iOS syntax**

```csharp
public static void ConfigureWithAppID (string appid);
```

**Example**

```csharp
ACPCore.ConfigureWithAppID("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="android" api="configure-with-file-in-assets" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithFileInAssets(final String fileName);
```

**Example**

```java
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```

<Variant platform="android" api="configure-with-file-in-path" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithFileInPath(final String filePath);
```

**Example**

```java
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");
```

<Variant platform="ios-aep" api="configure-with-file-in-path" repeat="10"/>

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

<Variant platform="ios-acp" api="configure-with-file-in-path" repeat="10"/>

#### Swift

**Syntax**

```swift
static func configureWithFile(inPath: String)
```

**Example**

```swift
let filePath = Bundle.main.path(forResource: "ExampleJSONFile", ofType: "json")
ACPCore.configureWithFile(inPath: filePath)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithFileInPath: (NSString* __nullable) filepath;
```

**Example**

```objectivec
NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ExampleJSONFile"ofType:@"json"];
[ACPCore configureWithFileInPath:filePath];
```

<Variant platform="xamarin" api="configure-with-file-in-path" repeat="7"/>

#### C#

**Android syntax** 

```csharp
public unsafe static void ConfigureWithFileInPath (string filepath);
```

**iOS syntax**

```csharp
public static void ConfigureWithFileInPath (string filepath);
```

**Example**

```csharp
ACPCore.ConfigureWithFileInPath("absolute/path/to/exampleJSONfile.json");
```

<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String coreExtensionVersion = MobileCore.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="4"/>

#### Swift

```swift
let version = MobileCore.extensionVersion
```

#### Objective-C

```objectivec
NSString *version = [AEPMobileCore extensionVersion];
```

<Variant platform="ios-acp" api="extension-version" repeat="4"/>

#### Swift

```swift
let coreExtensionVersion  = ACPCore.extensionVersion()
```

#### Objective-C

```objectivec
NSString *coreExtensionVersion = [ACPCore extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPCore.extensionVersion().then(coreExtensionVersion => console.log("AdobeExperienceSDK: ACPCore version: " + coreExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String coreExtensionVersion = await FlutterACPCore.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="2"/>

#### Cordova

```jsx
ACPCore.extensionVersion(function(version) {  
   console.log("ACPCore version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="2"/>

#### C#

```csharp
string coreExtensionVersion = ACPCore.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="2"/>

#### C#

```csharp
string coreExtensionVersion = ACPCore.ExtensionVersion();
```

<Variant platform="android" api="update-configuration" repeat="5"/>

#### Java

**Syntax**

```java
public static void updateConfiguration(final Map configMap);
```

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```

<Variant platform="ios-aep" api="update-configuration" repeat="10"/>

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

<Variant platform="ios-acp" api="update-configuration" repeat="10"/>

#### Swift

**Syntax**

```swift
static func updateConfiguration(_: [String: Any])
```

**Example**

```swift
let updatedConfig = ["global.privacy":"optedout"]
ACPCore.updateConfiguration(updatedConfig)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) updateConfiguration: (NSDictionary* __nullable) config;
```

**Example**

```objectivec
NSDictionary *updatedConfig = @{@"global.privacy":@"optedout"};
[ACPCore updateConfiguration:updatedConfig];
```

<Variant platform="react-native" api="update-configuration" repeat="5"/>

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
```

<Variant platform="cordova" api="update-configuration" repeat="2"/>

#### Javascript

```javascript
ACPCore.updateConfiguration({"newConfigKey":"newConfigValue"}, successCallback, errorCallback);
```

<Variant platform="unity" api="update-configuration" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void UpdateConfiguration(Dictionary<string, object> config);
```

**Example**

```csharp
var dict = new Dictionary<string, object>();
dict.Add("newConfigKey", "newConfigValue");
ACPCore.UpdateConfiguration(dict);
```

<Variant platform="xamarin" api="update-configuration" repeat="7"/>

#### C#

**Syntax**

```csharp
void UpdateConfiguration([NullAllowed] NSDictionary config);
```

**iOS example**

```csharp
 var config = new NSMutableDictionary<NSString, NSObject>
 {
   ["newConfigKey"] = new NSString("newConfigValue")
 };
ACPCore.UpdateConfiguration(config);
```

**Android example**

```csharp
var config = new Dictionary<string, Java.Lang.Object>();
config.Add("newConfigKey", "newConfigValue");
ACPCore.UpdateConfiguration(config);
```