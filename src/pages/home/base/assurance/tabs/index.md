---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:assurance")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:assurance'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore','~> 5.0'
  pod 'AEPAssurance','~> 5.0'
end
```

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
