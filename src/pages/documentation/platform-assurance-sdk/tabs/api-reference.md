<Variant platform="android" api="extension-version" repeat="5"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
Assurance.extensionVersion()
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

<Variant platform="react-native" api="extension-version" repeat="3"/>

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
```

<Variant platform="cordova" api="extension-version" repeat="4"/>

**Syntax**

```javascript
AEPAssurance.extensionVersion = function(success, fail);
```

**Example**

```javascript
AEPAssurance.extensionVersion(function(version) {  
   console.log("AEPAssurance version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="5"/>

#### C#

**Syntax**

```csharp
public static string ExtensionVersion()
```

**Example**

```csharp
string version = AEPAssurance.ExtensionVersion();
print(LOG_TAG + "Assurance version: "+version);
```

<Variant platform="xamarin" api="extension-version" repeat="3"/>

#### C#

**Example**

```csharp
string version = AEPAssurance.ExtensionVersion()  
Console.WriteLine("AEPAssurance version installed is: " + version);
```

<Variant platform="android" api="start-session" repeat="7"/>

This API is optional for Android.

Android does not require this API to be called. When the `registerExtension` API is called, AEP Assurance extension registers the app lifecycle handlers which automatically pick up any deep links and use them to start the session.

#### Java

**Syntax**

```java
public static void startSession(final String url)
```

**Example**

```java
 Assurance.startSession(url);
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

<Variant platform="react-native" api="start-session" repeat="3"/>

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
```

<Variant platform="cordova" api="start-session" repeat="4"/>

**Syntax**

```javascript
AEPAssurance.startSession = function(sessionurl,success, fail);
```

**Example**

```javascript
AEPAssurance.startSession(url,function(result) {  
   console.log("AdobeExperenceSDK: AEPAssurance session started succesfully: " + result);
}, function(error) {  
   console.log("AdobeExperenceSDK: Failed to start AEPAssurance session: " + error);
});
```

<Variant platform="unity" api="start-session" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void StartSession(string url)
```

**Example**

```csharp
AEPAssurance.StartSession(url);
```

<Variant platform="xamarin" api="start-session" repeat="2"/>

#### C#

```csharp
AEPAssurance.StartSession(url);
```