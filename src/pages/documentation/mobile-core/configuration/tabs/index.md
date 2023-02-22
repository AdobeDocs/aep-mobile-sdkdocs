<Variant platform="android" task="configure" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithAppID(@NonNull final String appId);
```

**Example**

```java
MobileCore.configureWithAppId("1423ae38-8385-8963-8693-28375403491d");
```

<Variant platform="ios" task="configure" repeat="11"/>

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

<Variant platform="android" task="update" repeat="5"/>

#### Java

**Syntax**

```java
public static void updateConfiguration(@NonNull final Map<String, Object> configMap);
```

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("global.privacy", "optedout");
MobileCore.updateConfiguration(data);
```

<Variant platform="ios" task="update" repeat="10"/>

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

<!--- <Variant platform="react-native" task="update" repeat="5"/>

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
``` --->

<Variant platform="android" task="bundle" repeat="5"/>

#### Java

**Syntax**

```java
public static void configureWithFileInPath(@NonNull final String filePath)
```

**Example**

```java
// Case 1: to use ADBMobileConfig.json in the assets folder
// No code is needed

// Case 2: to use a config json from a absolute path:
MobileCore.configureWithFileInPath("absolute/path/to/exampleJSONfile.json");

// Case 3: to use a config json in Assets folder
MobileCore.configureWithFileInAssets("exampleJSONfile.json");
```

<Variant platform="ios" task="bundle" repeat="10"/>

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
