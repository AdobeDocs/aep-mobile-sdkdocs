---
noIndex: true
---

<Variant platform="android" task="add" repeat="6"/>

Add the Lifecycle extension and its dependency, the [Mobile Core](../index.md) extension to your project using the app's Gradle file.

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:lifecycle")
```

#### Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:lifecycle'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../../resources/manage-gradle-dependencies.md) for more information.

</InlineNestedAlert>

<Variant platform="ios" task="add" repeat="3"/>

Add the AEPLifecycle extension and its dependency, the [Mobile Core](../index.md) extension, to your project using Cocoapods.

Add the following pods in your `Podfile`:

```pod
pod 'AEPCore', '~> 5.0'
pod 'AEPLifecycle', '~> 5.0'
```

<!--- <Variant platform="react-native" task="add" repeat="3"/>

#### JavaScript

Import the Lifecycle extension

```jsx
import {ACPLifecycle} from '@adobe/react-native-acpcore';
```

<Variant platform="flutter" task="add" repeat="3"/>

#### Dart

Import the Lifecycle extension

```dart
import 'package:flutter_acpcore/flutter_acplifecycle.dart';
``` --->

<Variant platform="android" task="register" repeat="8"/>

#### Kotlin

Register the Lifecycle extension in your app's Application class:

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Lifecycle
...
```

```kotlin
class MobileApp : Application() {

override fun onCreate() {
    super.onCreate()
    MobileCore.setApplication(this);
    val extensions = listOf(Lifecycle.EXTENSION, ...)
    MobileCore.registerExtensions(extensions) {
        // Any post registration processing
    }
  }
}
```

#### Java

Register the Lifecycle extension in your app's Application class:

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;
...
```

```java
public class MobileApp extends Application {
@Override
public void onCreate() {
    super.onCreate();
    MobileCore.setApplication(this);
    List<Class<? extends Extension>> extensions = Arrays.asList(Lifecycle.EXTENSION, ...);
    MobileCore.registerExtensions(extensions, o -> {
        // Any post registration processing
    });
  }
}
```

<Variant platform="android-java" task="activity-start-pause" repeat="5"/>

#### Java

Add the following to each Android Activity class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;
...
```

```java
    @Override
    public void onResume() {
        MobileCore.setApplication(getApplication());
        MobileCore.lifecycleStart(null);
    }
```

```java
    @Override
    public void onPause() {
        MobileCore.lifecyclePause();
    }
```

<Variant platform="android-kotlin" task="activity-start-pause" repeat="5"/>

#### Kotlin

Add the following to each Android Activity class.

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Lifecycle
...
```

```kotlin
    override fun onResume() {
        MobileCore.setApplication(this.application)
        MobileCore.lifecycleStart(null)
    }
```

```kotlin
    override fun onPause() {
        MobileCore.lifecyclePause()
    }
```

<Variant platform="android-java" task="context-data" repeat="1"/>

```java
HashMap<String, Object> additionalContextData = new HashMap<String, Object>();
contextData.put("myapp.category", "Game");
MobileCore.lifecycleStart(additionalContextData);
```

<Variant platform="android-kotlin" task="context-data" repeat="1"/>

```kotlin
MobileCore.lifecycleStart(mapOf("myapp.category" to "Game"))
```

<Variant platform="ios-swift" task="context-data" repeat="1"/>

```swift
MobileCore.lifecycleStart(additionalContextData: ["myapp.category": "Game"])
```

<Variant platform="ios-objc" task="context-data" repeat="1"/>

```objectivec
[AEPMobileCore lifecycleStart:@{@"myapp.category": @"Game"}];      
```

<Variant platform="android-java" task="global-lifecycle" repeat="1"/>

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Lifecycle;

public class MobileApp extends Application {

@Override
protected void onCreate() {
    super.onCreate();

    registerActivityLifecycleCallbacks(new ActivityLifecycleCallbacks() {
        @Override
        public void onActivityResumed(Activity activity) {
            MobileCore.setApplication(activity.getApplication());
            MobileCore.lifecycleStart(null);
        }

        @Override
        public void onActivityPaused(Activity activity) {
            MobileCore.lifecyclePause();
        }

        // the following methods aren't needed for our lifecycle purposes, but are
        // required to be implemented by the ActivityLifecycleCallbacks object
        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {}
        @Override
        public void onActivityStarted(Activity activity) {}
        @Override
        public void onActivityStopped(Activity activity) {}
        @Override
        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {}
        @Override
        public void onActivityDestroyed(Activity activity) {}
    });

    ...
}
 ...
}
```

<Variant platform="android-kotlin" task="global-lifecycle" repeat="1"/>

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Lifecycle

class MobileApp : Application() {

override fun onCreate() {
    super.onCreate()

    registerActivityLifecycleCallbacks(object: ActivityLifecycleCallbacks {
        override fun onActivityResumed(activity: Activity) {
            MobileCore.setApplication(activity.application)
            MobileCore.lifecycleStart(null)
        }

        override fun onActivityPaused(activity: Activity) {
            MobileCore.lifecyclePause()
        }

        // the following methods aren't needed for our lifecycle purposes, but are
        // required to be implemented by the ActivityLifecycleCallbacks object
        override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {}
        override fun onActivityStarted(activity: Activity) {}
        override fun onActivityStopped(activity: Activity) {}
        override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {}
        override fun onActivityDestroyed(activity: Activity) {}
    })

    ...
}
 ...
}
```

<Variant platform="ios" task="register" repeat="7"/>

Register the Lifecycle extension in the app delegate object's `application(_:didFinishLaunchingWithOptions:)` method:

#### Swift

```swift
import AEPCore
import AEPLifecycle
...
```

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Lifecycle.self, ...], {
        // Any post registration processing
    }
}
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPLifecycle;
...
```

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
[AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
    // Any post registration processing
}];
return YES;
}
```

<Variant platform="ios-swift" task="start-lifecycle-didfinishlaunch" repeat="1"/>

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    let appState = application.applicationState
    MobileCore.registerExtensions([Lifecycle.self, ...], {
        if appState != .background {
        // only start lifecycle if the application is not in the background
        MobileCore.lifecycleStart(additionalContextData: nil)
        }
    }
}
```

<Variant platform="ios-objc" task="start-lifecycle-didfinishlaunch" repeat="1"/>

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    const UIApplicationState appState = application.applicationState;
    [AEPMobileCore registerExtensions:@[AEPMobileLifecycle.class, ...] completion:^{
    // only start lifecycle if the application is not in the background
    if (appState != UIApplicationStateBackground) {
        [AEPMobileCore lifecycleStart:nil];
    }
    }];
}
```

<Variant platform="ios-swift" task="willenterforeground" repeat="4"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground(_:)` method as follows:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate`'s `applicationWillEnterForeground(_:)` method as follows:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

<Variant platform="ios-objc" task="willenterforeground" repeat="4"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneWillEnterForeground:` method as follows:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [AEPMobileCore lifecycleStart:nil];
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate`'s `applicationWillEnterForeground:` method as follows:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [AEPMobileCore lifecycleStart:nil];
}
```

<Variant platform="ios-swift" task="didenterbackground" repeat="4"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground(_:)` method as follows:

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    MobileCore.lifecyclePause()
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate`'s `applicationDidEnterBackground(_:)` method as follows:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    MobileCore.lifecyclePause()
}
```

<Variant platform="ios-objc" task="didenterbackground" repeat="4"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate`'s `sceneDidEnterBackground:` method as follows:

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [AEPMobileCore lifecyclePause];
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate`'s `applicationDidEnterBackground:` method as follows:

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
    [AEPMobileCore lifecyclePause];
}
```

<!--- <Variant platform="react-native" task="register" repeat="2"/>

**Registering the extension with Core**

When using React Native, registering Lifecycle with Mobile Core should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs. --->
