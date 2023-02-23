<Variant platform="android" task="enable" repeat="2"/>

#### Java

```java
MobileCore.setLogLevel(LoggingMode.DEBUG);
// MobileCore.setLogLevel(LoggingMode.VERBOSE);
// MobileCore.setLogLevel(LoggingMode.WARNING);
// MobileCore.setLogLevel(LoggingMode.ERROR);
```

<Variant platform="ios" task="enable" repeat="4"/>

#### Swift

```swift
MobileCore.setLogLevel(.debug)
// MobileCore.setLogLevel(.trace)
// MobileCore.setLogLevel(.warning)
// MobileCore.setLogLevel(.error)
```

#### Objective-C

```objectivec
[AEPMobileCore setLogLevel:AEPLogLevelDebug];
// [AEPMobileCore setLogLevel:AEPLogLevelTrace];
// [AEPMobileCore setLogLevel:AEPLogLevelWarning];
// [AEPMobileCore setLogLevel:AEPLogLevelError];
```
<!-- 
<Variant platform="react-native" task="enable" repeat="2"/>

#### Javascript

```jsx
ACPCore.setLogLevel(ACPMobileLogLevel.DEBUG);
//ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
//ACPCore.setLogLevel(ACPMobileLogLevel.WARNING);
//ACPCore.setLogLevel(ACPMobileLogLevel.ERROR);
``` -->

<!-- <Variant platform="flutter" task="enable" repeat="2"/>

#### Dart

```dart
FlutterACPCore.setLogLevel(ACPLoggingLevel.DEBUG);
//FlutterACPCore.setLogLevel(ACPLoggingLevel.VERBOSE);
//FlutterACPCore.setLogLevel(ACPLoggingLevel.WARNING);
//FlutterACPCore.setLogLevel(ACPLoggingLevel.ERROR);
``` -->

<!-- <Variant platform="cordova" task="enable" repeat="2"/>

#### Cordova

```javascript
ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelError, successCallback, errorCallback);
ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelWarning, successCallback, errorCallback);
ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelDebug, successCallback, errorCallback);
ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelVerbose, successCallback, errorCallback);
```

<Variant platform="unity" task="enable" repeat="2"/>

#### C#

```csharp
ACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.ERROR);
ACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.WARNING);
ACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.DEBUG);
ACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.VERBOSE);
``` -->

<Variant platform="android" task="metrics" repeat="7"/>

#### Java

With the `onResume` function, start Lifecycle data collection:

```java
@Override  
   public void onResume() {  
      MobileCore.setApplication(getApplication());
      MobileCore.lifecycleStart(null);
   }
```

Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each `Activity` has no negative impact and ensures that the SDK always has the necessary reference to your application. As a result, you should call `setApplication` on each of your activities.

You can use the `onPause` function to pause the lifecycle data collection:

To ensure accurate session and crash reporting, this call must be added to every `Activity`.

```java
@Override
   public void onPause() {
      MobileCore.lifecyclePause();
   }
```

<Variant platform="ios" task="metrics" repeat="16"/>

#### Swift

Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, your `application:didFinishLaunchingWithOptions:` method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    // register the lifecycle extension
    ACPLifecycle.registerExtension();

    let appState = application.applicationState;            
    ACPCore.start {
        // only start lifecycle if the application is not in the background    
        if appState != .background {
            ACPCore.lifecycleStart(nil)
        }    
    }    
}
```

When launched, if your app is resuming from a backgrounded state, iOS might call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```swift
func applicationWillEnterForeground(_ application: UIApplication) {    
    ACPCore.lifecycleStart(nil)
}
```

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {    
    ACPCore.lifecyclePause()
}
```

#### Objective-C

Start Lifecycle data collection by calling `lifecycleStart:` from within the callback of the `ACPCore::start:` method in your app's `application:didFinishLaunchingWithOptions:` delegate method.

If your iOS application supports background capabilities, you `application:didFinishLaunchingWithOptions:` method may be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then `lifecycleStart:` should only be called when the application state is not equal to `UIApplicationStateBackground`.

```objectivec
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // register the lifecycle extension
    [ACPLifecycle registerExtension];

    const UIApplicationState appState = application.applicationState;
    [ACPCore start:^{
        // only start lifecycle if the application is not in the background
        if (appState != UIApplicationStateBackground) {
            [ACPCore lifecycleStart:nil];
        }
    }];
}
```

When launched, if your app is resuming from a backgrounded state, iOS may call your `applicationWillEnterForeground:` delegate method. You also need to call `lifecycleStart:`, but this time you do not need all of the supporting code that you used in `application:didFinishLaunchingWithOptions:`:

```objectivec
- (void) applicationWillEnterForeground:(UIApplication *)application {
    [ACPCore lifecycleStart:nil];
}
```

When the app enters the background, pause Lifecycle data collection from your app's `applicationDidEnterBackground:` delegate method:

```objectivec
 - (void) applicationDidEnterBackground:(UIApplication *)application {
    [ACPCore lifecyclePause];
 }
```

<!-- <Variant platform="react-native" task="metrics" repeat="6"/>

#### JavaScript

You should implement Lifecycle metrics in native code. However, Lifecycle's APIs are available in Javascript if it fits your use case.

**Starting a Lifecycle event**

```jsx
ACPCore.lifecycleStart({"lifecycleStart": "myData"});
```

**Pausing a Lifecycle event**

```jsx
ACPCore.lifecyclePause();
``` -->

<!-- <Variant platform="flutter" task="metrics" repeat="2"/>

#### Flutter

You need to implement Lifecycle in native Android and iOS code. For more information on implementing, please read the [Lifecycle documentation](../lifecycle-for-edge-network/index.md). -->

<!-- <Variant platform="cordova" task="metrics" repeat="4"/>

#### Cordova

You need to implement Lifecycle in native Android and iOS code. For more information on implementing, please read the [Lifecycle documentation](../lifecycle-for-edge-network/index.md).

**Getting Lifecycle version**

```javascript
ACPLifecycle.extensionVersion(function(version) {
    console.log(version);
}, function(error) {
    console.log(error);
});
```

<Variant platform="unity" task="metrics" repeat="3"/>

#### C#

**Starting and pausing a lifecycle event**

```csharp
private void OnApplicationPause(bool pauseStatus)
{
  if (pauseStatus)
  {
    ACPCore.LifecyclePause();
  }
  else
  {
    var cdata = new Dictionary<string, string>();
    cdata.Add("launch.data", "added");
    ACPCore.LifecycleStart(cdata);
  }
}
```

<Variant platform="xamarin" task="metrics" repeat="7"/>

#### C#

**iOS**

**Starting and pausing a lifecycle event**

```csharp
public override void WillEnterForeground(UIApplication uiApplication)
{
  base.WillEnterForeground(uiApplication);
  ACPCore.LifecycleStart(null);
}

public override void DidEnterBackground(UIApplication uiApplication)
{
  base.DidEnterBackground(uiApplication);
  ACPCore.LifecycleStart(null);
}
```

**Android**

**Starting and pausing a lifecycle event**

```csharp
protected override void OnResume()
{
  base.OnResume();
  ACPCore.LifecycleStart(null);
}

protected override void OnPause()
{
  base.OnPause();
  ACPCore.LifecyclePause();
}
``` -->