---
noIndex: true
---

<!-- ////////////  Add Dependencies ////////// -->

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android-kotlin" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:lifecycle")
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="android-groovy" task="add" repeat="3"/>

Add the required dependencies to your project by including them in the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:lifecycle'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

<Variant platform="ios-pods" task="add" repeat="2"/>

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
  pod 'AEPCore', '~> 5.0'
  pod 'AEPLifecycle', '~> 5.0'
end
```

<!-- ////////////  Android Start Pause Lifecycle /////////// -->

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

<!-- ///////////// Additional Context Data ////////// -->

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

<!-- ///////////  Android Global Lifecycle //////////// -->

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

<!-- ////////////  iOS Start on Launch /////////// -->

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

<!-- ////////////  iOS Start Pause Lifecycle /////////// -->

<Variant platform="ios-swift" task="start-pause" repeat="6"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate` as follows:

```swift
func sceneWillEnterForeground(_ scene: UIScene) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

```swift
func sceneDidEnterBackground(_ scene: UIScene) {
    MobileCore.lifecyclePause()
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate` as follows:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {
    MobileCore.lifecycleStart(additionalContextData: nil)
}
```

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    MobileCore.lifecyclePause()
}
```

<Variant platform="ios-objc" task="start-pause" repeat="6"/>

In iOS 13 and later, for a scene-based application, use the `UISceneDelegate` as follows:

```objectivec
- (void) sceneWillEnterForeground:(UIScene *)scene {
    [AEPMobileCore lifecycleStart:nil];
}
```

```objectivec
- (void) sceneDidEnterBackground:(UIScene *)scene {
    [AEPMobileCore lifecyclePause];
}
```

In iOS 12 and earlier, use the `UIApplicationDelegate` as follows:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [AEPMobileCore lifecycleStart:nil];
}
```

```objectivec
- (void) applicationDidEnterBackground:(UIApplication *)application {
    [AEPMobileCore lifecyclePause];
}
```
