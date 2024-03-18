<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
@NonNull
public static String extensionVersion();
```

**Example**

```java
String signalExtensionVersion = Signal.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="7"/>

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

<Variant platform="react-native" api="extension-version" repeat="4"/>

**Syntax**

```typescript
extensionVersion(): Promise<string>
```

**Example**

```typescript
Signal.extensionVersion().then(version => console.log("AdobeExperienceSDK: Signal version: " + version));
```

<!--  <Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String signalExtensionVersion = await FlutterACPSignal.extensionVersion;
``` -->

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

<Variant platform="react-native" api="register-extension" repeat="1"/>

Please refer to the native code tabs to learn how to register the Signal extension for Mobile Core.