<Variant platform="android" task="import-library" repeat="5"/>

1. Add the following libraries in your project's `build.gradle` file:

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:assurance:2.+'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

2. Import the Assurance library along with the other Mobile SDK libraries:

```java
import com.adobe.marketing.mobile.Assurance;
import com.adobe.marketing.mobile.MobileCore;
```

<Variant platform="ios" task="import-library" repeat="7"/>

Add the library to your project via your [Cocoapods](https://cocoapods.org/pods/AEPAssurance) `Podfile`:

```pod
pod 'AEPCore','~> 3.0'
pod 'AEPAssurance','~> 3.0'
```

Import the Assurance extension along with the other Adobe Mobile SDK extensions:

#### Swift

```swift
import AEPCore
import AEPAssurance
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPAssurance;
```

<!--- <Variant platform="react-native" task="import-library" repeat="13"/>

1. Install the AEP Assurance package.

```bash
npm install @adobe/react-native-aepassurance
```

2. Link the module.

**React Native 0.60+**

[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.

**React Native &lt;= 0.59**

```bash
react-native link @adobe/react-native-aepassurance
```

**Note** For `iOS` using `cocoapods`, run:

```bash
cd ios/ && pod install
```

3. Import the extension.

```jsx
import {AEPAssurance} from '@adobe/react-native-aepassurance';
```

4. Get the extension version.

```jsx
AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEPAssurance version: " + version));
```

<Variant platform="flutter" task="import-library" repeat="7"/>

#### JavaScript

1. Install the AEP Assurance package.

Installation instructions can be found in the [Flutter documentation](https://pub.dev/packages/flutter_assurance/install).

2. Import the extension.

```dart
import 'package:flutter_assurance/flutter_assurance.dart';
```

3. Get the extension version.

```dart
String version = await FlutterAEPAssurance.extensionVersion;
``` --->

<Variant platform="android" task="register-assurance" repeat="4"/>

#### Java

```java
public class MainApp extends Application {
    private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";


    @Override
    public void onCreate() {
        super.onCreate();

        MobileCore.setApplication(this);
        MobileCore.setLogLevel(LoggingMode.VERBOSE);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

        List<Class<? extends Extension>> extensions = Arrays.asList(
                Assurance.EXTENSION,...);
        MobileCore.registerExtensions(extensions, o -> {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
        });
    }
}
```

#### Kotlin

```java
class MyApp : Application() {

    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.setLogLevel(LoggingMode.VERBOSE)
        MobileCore.configureWithAppID("YOUR_APP_ENVIRONMENT_ID")

        val extensions = listOf(Assurance.EXTENSION, ...)
        MobileCore.registerExtensions(extensions) {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")
        }
    }
}
```

<Variant platform="ios" task="register-assurance" repeat="5"/>

To start using the extension library, you must first register the extension with the [Mobile Core](../mobile-core/index.md) extension.

#### Swift

```swift
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        let extensions = [Assurance.self, ...]
        MobileCore.registerExtensions(extensions, {
            // set app id from the Data Collection UI    
                MobileCore.configureWith(appId: "yourAppId")  
        })

        return true
    }
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    NSArray *extensionsToRegister = @[AEPMobileAssurance.class, ...];
    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{
        // set app id from the Data Collection UI
        [AEPMobileCore configureWithAppId: @"yourAppId"];
    }];

    return YES;
}
```

<!--- <Variant platform="react-native" task="register-assurance" repeat="2"/>

#### JavaScript

When using React Native, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="flutter" task="register-assurance" repeat="2"/>

#### Dart

When using Flutter, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs. --->


<Variant platform="android" task="implement-assurance" repeat="1"/>

Deep linking is the best way to connnect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can [add an intent filter for incoming links in your app](https://developer.android.com/training/app-links/deep-linking) to complete the deep link configuration. The combination of `android:host` and `android:scheme` (in the form of `<host>://<scheme>`) for this intent filter will serve as the Base URL while creating a session in the [Adobe Experience Platform Assurance UI](https://experience.adobe.com/assurance)

<Variant platform="ios" task="implement-assurance" repeat="13"/>

The [startSession](./api-reference.md#startsession) API needs to be called to begin an Adobe Experience Platform Assurance session. You should call this API when the app launches with a URL (see code snippet below for sample usage). When called, SDK displays a PIN authentication overlay to begin a session. 

#### Swift

**Example**

```swift
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        Assurance.startSession(url: url)
        return true
    }
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```swift
    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        // Called when the app in background is opened with a deep link.
        if let deepLinkURL = URLContexts.first?.url {
            Assurance.startSession(url: deepLinkURL)
        }
    }

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        // Called when the app launches with the deep link
        if let deepLinkURL = connectionOptions.urlContexts.first?.url {
            Assurance.startSession(url: deepLinkURL)
        }
    }
```

#### Objective-C

**Syntax**

```objectivec
static func startSession(url: URL?)
```

**Example**

```objectivec
- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    [AEPMobileAssurance startSessionWithUrl:url];
    return true;
}
```

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `scene(_:openURLContexts:)` method as follows:

```objectivec

- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {    
    NSURL *deepLinkURL = connectionOptions.URLContexts.allObjects.firstObject.URL;
    [AEPMobileAssurance startSessionWithUrl:deepLinkURL];
}


- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
    [AEPMobileAssurance startSessionWithUrl:URLContexts.allObjects.firstObject.URL];
}
```