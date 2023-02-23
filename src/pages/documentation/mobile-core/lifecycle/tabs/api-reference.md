<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
final String lifecycleExtensionVersion = Lifecycle.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let version = Lifecycle.extensionVersion
```

#### Objective-C

**Syntax**

```swift
@objc static var extensionVersion: String
```

**Example**

```objectivec
NSString *version = [AEPMobileLifecycle extensionVersion];
```

<!--- <Variant platform="react-native" api="extension-version" repeat="2"/>

**JavaScript**

```jsx
ACPLifecycle.extensionVersion().then(lifecycleExtensionVersion => console.log("AdobeExperienceSDK: ACPLifecycle version: " + lifecycleExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

**Dart**

```dart
String lifeycycleExtensionVersion = await FlutterACPLifecycle.extensionVersion;
``` --->

<Variant platform="android" api="lifecycle-start" repeat="8"/>

#### Java

This method should be called from the Activity onResume method.

**Syntax**

```java
public static void lifecycleStart(@Nullable final Map<String, String> additionalContextData)
```

**Example**

```java
MobileCore.lifecycleStart(null);
```

If you need to collect additional lifecycle data:

```java
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

<Variant platform="ios" api="lifecycle-start" repeat="14"/>

#### Swift

**Syntax**

```swift
 static func lifecycleStart(additionalContextData: [String: Any]?)
```

**Example**

```swift
 MobileCore.lifecycleStart(additionalContextData: nil)
```

If you need to collect additional lifecycle data:

```swift
 MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])
```

#### Objective-C

**Syntax**

```swift
 @objc(lifecycleStart:)
 static func lifecycleStart(additionalContextData: [String: Any]?)
```

**Example**

```objc
 [AEPMobileCore lifecycleStart:nil];
```

If you need to collect additional lifecycle data:

```objc
 [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];
```

<!--- <Variant platform="react-native" api="lifecycle-start" repeat="2"/>

#### JavaScript

When using React Native, starting to collect lifecycle data should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs. --->

<Variant platform="android" api="lifecycle-pause" repeat="5"/>

#### Java

**Syntax**

```java
public static void lifecyclePause()
```

**Example**

```java
MobileCore.lifecyclePause();
```

<Variant platform="ios" api="lifecycle-pause" repeat="10"/>

#### Swift

**Syntax**

```swift
 static func lifecyclePause()
```

**Example**

```swift
 MobileCore.lifecyclePause()
```

#### Objective-C

**Syntax**

```objc
 @objc(lifecyclePause)
 static func lifecyclePause()
```

**Example**

```objc
 [AEPMobileCore lifecyclePause];
```

<!--- <Variant platform="react-native" api="lifecycle-pause" repeat="2"/>

#### JavaScript

When using React Native, pausing the collection of lifecycle data should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs. --->

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Lifecycle.registerExtension();