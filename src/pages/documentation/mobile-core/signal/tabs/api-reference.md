<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public static String extensionVersion();
```

**Example**

```java
String signalExtensionVersion = Signal.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="7"/>

**Syntax**

```swift
public static let extensionVersion
```

**Examples**

**Swift**

```swift
let version = Signal.extensionVersion
```

**Objective-C**

```objectivec
NSString *version = [AEPMobileSignal extensionVersion];
```

<Variant platform="ios-acp" api="extension-version" repeat="7"/>

**Syntax**

```objectivec
(nonnull NSString*) extensionVersion;
```

**Examples**

**Swift**

```swift
var signalExtensionVersion  = ACPSignal.extensionVersion()
```

**Objective-C**

```objectivec
NSString *signalExtensionVersion = [ACPSignal extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPSignal.extensionVersion().then(signalExtensionVersion => console.log("AdobeExperienceSDK: ACPSignal version: " + signalExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String signalExtensionVersion = await FlutterACPSignal.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="2"/>

#### Cordova

```jsx
ACPSignal.extensionVersion(function(version) {  
    console.log("ACPSignal version: " + version);
}, function(error) {  
    console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="2"/>

#### C#

```csharp
string signalVersion = ACPSignal.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="2"/>

#### C#

```csharp
string signalVersion = ACPSignal.ExtensionVersion();
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Signal.registerExtension();
```

<Variant platform="ios-aep" api="register-extension" repeat="1"/>

This API no longer exists in `Signal`. Instead, the extension should be registered by calling the `registerExtensions` API in the MobileCore. Please see the updated SDK initialization steps at the [migrate to Swift tutorial.](../../migrate-to-swift.md#update-sdk-initialization)

<Variant platform="ios-acp" api="register-extension" repeat="7"/>

**Syntax**

```swift
+ (void) registerExtension;
```

**Example**

**Swift**

```swift
ACPSignal.registerExtension()
```

**Objective-C**

```objc
[ACPSignal registerExtension];
```

<Variant platform="react-native" api="register-extension" repeat="1"/>

When using React Native, register the Signal extension with Mobile Core in native code as shown on the Android and iOS tabs.