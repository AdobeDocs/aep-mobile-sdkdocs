<Variant platform="android" task="configure" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithAppID(final String appId);
```

**Example**

```java
MobileCore.configureWithAppId("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="ios-aep" task="configure" repeat="11"/>

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

Alternatively, you can also place the environment ID in your iOS project's _Info.plist_ with the `ADBMobileAppID` key. When the SDK is initialized, the environment ID is automatically read from the _Info.plist_ file and the associated configuration.

<Variant platform="ios-acp" task="configure" repeat="11"/>

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

Alternatively, you can also place the environment ID in your iOS project's _Info.plist_ with the `ADBMobileAppID` key. When the SDK is initialized, the environment ID is automatically read from the _Info.plist_ file and the associated configuration.

<Variant platform="cordova" task="configure" repeat="2"/>

#### Cordova

When using Cordova, the `configureWithAppId` method call must be done in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" task="configure" repeat="5"/>

#### C#

**Syntax**

```csharp
void ConfigureWithAppID([NullAllowed] string appid);
```

**Example**

```csharp
ACPCore.ConfigureWithAppID("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="xamarin" task="configure" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void ConfigureWithAppID(string appId);
```

**Example**

```csharp
ACPCore.ConfigureWithAppID("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="android" task="update" repeat="5"/>

#### Java

**Syntax**

```java
public static void updateConfiguration(final Map<String, Object> configMap);
```

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```

<Variant platform="ios-aep" task="update" repeat="10"/>

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

<Variant platform="ios-acp" task="update" repeat="10"/>

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


<Variant platform="react-native" task="update" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
updateConfiguration(configMap?: { string: any })
```

**Example**

```jsx
ACPCore.updateConfiguration({"global.privacy":"optedout"});
```

<Variant platform="flutter" task="update" repeat="5"/>

#### Dart

**Syntax**

```dart
static Future<void> updateConfiguration(Map<String, Object> configMap);
```

**Example**

```dart
FlutterACPCore.updateConfiguration({"global.privacy":"optedout"});
```

<Variant platform="cordova" task="update" repeat="3"/>

#### Cordova

**Example**

```jsx
ACPCore.updateConfiguration({"global.privacy":"optedout"}, function(handleCallback) {
  console.log("AdobeExperenceSDK: Update configuration successful: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to update configuration : " + handleError);
});
```

<Variant platform="unity" task="update" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void UpdateConfiguration(Dictionary<string, object> config);
```

**Example**

```csharp
var dict = new Dictionary<string, object>();
dict.Add("global.privacy", "optedout");
ACPCore.UpdateConfiguration(dict);
```

<Variant platform="xamarin" task="update" repeat="7"/>

#### C#

**Syntax**

```csharp
void UpdateConfiguration([NullAllowed] NSDictionary config);
```

**iOS example**

```csharp
 var config = new NSMutableDictionary<NSString, NSObject>
 {
   ["global.privacy"] = new NSString("optedout")
 };
ACPCore.UpdateConfiguration(config);
```

**Android example**

```csharp
var config = new Dictionary<string, Java.Lang.Object>();
config.Add("global.privacy", "optedout");
ACPCore.UpdateConfiguration(config);
```

<Variant platform="android" task="bundle" repeat="2"/>

#### Java

```java
// Case 1: to use ADBMobileConfig.json in the assets folder
// No code is needed

// Case 2: to use a config json from a absolute path:
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");

// Case 3: to use a config json in Assets folder
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```

<Variant platform="ios-aep" task="bundle" repeat="10"/>

#### Swift

**Syntax**

```swift
static func configureWith(filePath: String)
```

**Example**

```swift
let filePath = Bundle.main.path(forResource: "ExampleJSONFile", ofType: "json")
if let filePath = filePath {
    MobileCore.configureWith(filePath: filePath)
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) configureWithFilePath: (NSString* __nullable) filepath;
```

**Example**

```objectivec
NSString *filePath = [[NSBundle mainBundle] pathForResource:@"ExampleJSONFile" ofType:@"json"];
[AEPMobileCore configureWithFilePath: filePath];
```

<Variant platform="ios-acp" task="bundle" repeat="10"/>

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

<Variant platform="xamarin" task="bundle" repeat="5"/>

#### C#

**Syntax**

```csharp
void ConfigureWithFileInPath([NullAllowed] string filepath);
```

**Example**

```csharp
ACPCore.ConfigureWithFileInPath("absolute/path/to/exampleJSONfile.json");
```