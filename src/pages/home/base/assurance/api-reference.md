---
title: Adobe Experience Platform Assurance API reference
description: An API reference for the Adobe Experience Platform Assurance mobile extension.
keywords:
- Adobe Experience Platform Assurance
- API reference
---

# Assurance API reference

## extensionVersion

Returns the current version of the AEP Assurance extension.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@NonNull
public static String extensionVersion()
```

### Example

```java
final String extensionVersion = Assurance.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val extensionVersion: String = Assurance.extensionVersion()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Example

```swift
AEPAssurance.extensionVersion()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="3" />

### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

### Example

```objectivec
[AEPAssurance extensionVersion];
```

\<!--- <Variant platform="react-native" api="extension-version" repeat="3"/>

#### JavaScript

### Example

```objectivec
AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEP Assurance version: " + version));
```

\<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

### Flutter

#### Dart

### Syntax

```dart
static Future<String> get extensionVersion async
```

### Example

```dart
assuranceVersion = await FlutterAssurance.extensionVersion;
``` --->
 ---\>

## registerExtension

<InlineAlert variant="warning" slots="heading, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../mobile-core/api-reference.md#registerextensions) API instead.

Registers the Assurance extension with the Mobile Core.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void registerExtension()
```

### Example

```java
Assurance.registerExtension();
```

## startSession

The `startSession` API needs to be called to begin a AEP Assurance session. When called, the Mobile SDK displays a PIN authentication overlay to begin a session.

<InlineAlert variant="info" slots="text"/>

You may call this API when the app launches with a URL (see code snippet below for sample usage)

<InlineAlert variant="info" slots="text"/>

This API is optional for Android. Deep linking is the best way to connect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can [add an intent filter for incoming links in your app](https://developer.android.com/training/app-links/deep-linking) to complete the deep link configuration.
### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void startSession(@NonNull final String url)
```

### Example

```java
final String url = "<assurance_session_url>";
Assurance.startSession(url);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```java
val url: String = "<assurance_session_url>"
Assurance.startSession(url)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Example

```swift
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    do {
        AEPAssurance.startSession(url)
        return false
    }
}
```

For SceneDelegate based applications

```swift
    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        AEPAssurance.startSession(URLContexts.first!.url)
    }
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="3" />

### Syntax

```objectivec
+ (void) startSession: (NSURL* _Nonnull) url;
```

### Example

```objectivec
- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [AEPAssurance startSession:url];
    return false;
}
```

\<!--- <Variant platform="react-native" api="start-session" repeat="3"/>

#### JavaScript

### Example

```javascript
AEPAssurance.startSession("your-assurance-session-url");
```

\<!--- React Native

<Tabs query="platform=react-native&api=start-session"/>

### Flutter

#### Dart

### Syntax

```dart
static Future<void> startSession(String url);
```

### Example

```dart
FlutterAssurance.startSession(url);
``` --->
 ---\>

## startSession (Quick Connect)

Displays a Quick Connect authorization overlay to begin an Experience Platform Assurance session.

<InlineAlert variant="info" slots="text"/>

This API is only supported on debug builds. Calling this method on a non-debuggable build will result in a no-op.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void startSession()
```

### Example

```java
Assurance.startSession();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

### Example

```kotlin
Assurance.startSession()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func startSession()
```

### Example

```swift
AEPAssurance.startSession()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (void) startSession;
```

### Example

```objectivec
[AEPAssurance startSession];
```

