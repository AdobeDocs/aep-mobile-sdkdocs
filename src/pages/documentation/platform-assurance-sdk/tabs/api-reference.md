<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
@NonNull
public static String extensionVersion()
```

**Example**

```java
final String extensionVersion = Assurance.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion: String = Assurance.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="8"/>

#### Swift

**Example**

```swift
AEPAssurance.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
[AEPAssurance extensionVersion];
```

<!--- <Variant platform="react-native" api="extension-version" repeat="3"/>

#### JavaScript

**Example**

```objectivec
AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEP Assurance version: " + version));
```

<Variant platform="flutter" api="extension-version" repeat="5"/>

#### Dart

**Syntax**

```dart
static Future<String> get extensionVersion async
```

**Example**

```dart
assuranceVersion = await FlutterAssurance.extensionVersion;
``` --->

<Variant platform="android" api="start-session" repeat="9"/>

<InlineNestedAlert variant="info" header="false" iconPosition="left">

This API is optional for Android. Deep linking is the best way to connect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can [add an intent filter for incoming links in your app](https://developer.android.com/training/app-links/deep-linking) to complete the deep link configuration.

</InlineNestedAlert>

#### Java

**Syntax**

```java
public static void startSession(@NonNull final String url)
```

**Example**

```java
final String url = "<assurance_session_url>";
Assurance.startSession(url);
```

#### Kotlin

**Example**

```java
val url: String = "<assurance_session_url>"
Assurance.startSession(url)
```

<Variant platform="ios" api="start-session" repeat="10"/>

#### Swift

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) startSession: (NSURL* _Nonnull) url;
```

**Example**

```objectivec
- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [AEPAssurance startSession:url];
    return false;
}
```

<!--- <Variant platform="react-native" api="start-session" repeat="3"/>

#### JavaScript

**Example**

```javascript
AEPAssurance.startSession("your-assurance-session-url");
```

<Variant platform="flutter" api="start-session" repeat="5"/>

#### Dart

**Syntax**

```dart
static Future<void> startSession(String url);
```

**Example**

```dart
FlutterAssurance.startSession(url);
``` --->

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Assurance.registerExtension();
```
