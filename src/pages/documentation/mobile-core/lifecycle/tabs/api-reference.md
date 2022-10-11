<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String lifecycleExtensionVersion = Lifecycle.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="4"/>

**Swift**

```swift
let version = Lifecycle.extensionVersion
```

**Objective-C**

```objectivec
NSString *version = [AEPMobileLifecycle extensionVersion];
```

<Variant platform="ios-acp" api="extension-version" repeat="4"/>

**Swift**

```swift
let lifecycleExtensionVersion  = ACPLifecycle.extensionVersion()
```

**Objective-C**

```objectivec
NSString *lifecycleExtensionVersion = [ACPLifecycle extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

**JavaScript**

```jsx
ACPLifecycle.extensionVersion().then(lifecycleExtensionVersion => console.log("AdobeExperienceSDK: ACPLifecycle version: " + lifecycleExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

**Dart**

```dart
String lifeycycleExtensionVersion = await FlutterACPLifecycle.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="2"/>

**Cordova**

```jsx
ACPLifecycle.extensionVersion(function(version) {  
   console.log("ACPLifecycle version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="2"/>

**C#**

```csharp
string lifecycleVersion = ACPLifecycle.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="2"/>

**C#**

```csharp
string lifecycleVersion = ACPLifecycle.ExtensionVersion();
```

<Variant platform="android" api="lifecycle-start" repeat="8"/>

#### Java

This method should be called from the Activity onResume method.

**Syntax**

```java
public static void lifecycleStart(final Map<String, String> additionalContextData);
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

<Variant platform="ios-aep" api="lifecycle-start" repeat="9"/>

#### Swift

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

<Variant platform="ios-acp" api="lifecycle-start" repeat="9"/>

#### Swift

```swift
ACPCore.lifecycleStart(["state": "appResume"])
```

#### Objective-C

**Syntax**

```text
+ (void) lifecycleStart: (nullable NSDictionary<NSString*, NSString*>*) additionalContextData;
```

**Example**

```objc
[ACPCore lifecycleStart:nil];
```

If you need to collect additional lifecycle data:

```objc
[ACPCore lifecycleStart:@{@"state": @"appResume"}];
```

<Variant platform="react-native" api="lifecycle-start" repeat="2"/>

#### JavaScript

When using React Native, starting to collect lifecycle data should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs.

<Variant platform="cordova" api="lifecycle-start" repeat="2"/>

#### Cordova

When using Cordova, the `lifecycleStart` method call must be made in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" api="lifecycle-start" repeat="3"/>

#### C#

When using Unity, the `LifecycleStart` method call must be made from the `OnApplicationPause` method.

```csharp
private void OnApplicationPause(bool pauseStatus)
{
  if (!pauseStatus)
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

<Variant platform="xamarin" api="lifecycle-start" repeat="7"/>

#### C#

**iOS**

When using iOS, the `LifecycleStart` method call must be made from the `OnActivated` method.

```csharp
public override void OnActivated(UIApplication uiApplication)
{
  base.OnActivated(uiApplication);
  ACPCore.LifecycleStart(null);
}
```

**Android**

When using Android, the `LifecycleStart` method call must be made from the `OnResume` method.

```csharp
protected override void OnResume()
{
  base.OnResume();
  ACPCore.LifecycleStart(null);
}
```

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

<Variant platform="ios-aep" api="lifecycle-pause" repeat="7"/>

#### Swift

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

<Variant platform="ios-acp" api="lifecycle-pause" repeat="7"/>

#### Swift

```swift
ACPCore.lifecyclePause()
```

#### Objective-C

**Syntax**

```objc
+ (void) lifecyclePause;
```

**Example**

```objc
[ACPCore lifecyclePause];
```

<Variant platform="react-native" api="lifecycle-pause" repeat="2"/>

#### JavaScript

When using React Native, pausing the collection of lifecycle data should be done in native code which is shown under the Android and iOS (ACP 2.x) tabs.

<Variant platform="cordova" api="lifecycle-pause" repeat="2"/>

#### Cordova

When using Cordova, the `lifecyclePause` method call must be made in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" api="lifecycle-pause" repeat="3"/>

#### C#

When using Unity, the `LifecyclePause` method call must be made from the `OnApplicationPause` method.

```csharp
private void OnApplicationPause(bool pauseStatus)
{
  if (!pauseStatus)
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

<Variant platform="xamarin" api="lifecycle-pause" repeat="7"/>

#### C#

**iOS**

When using iOS, the `LifecyclePause` method call must be made from the `OnResignActivation` method.

```csharp
public override void OnResignActivation(UIApplication uiApplication)
{
  base.OnResignActivation(uiApplication);
  ACPCore.LifecyclePause();
}
```

**Android**

When using Android, the `LifecyclePause` method call must be made from the `OnPause` method.

```csharp
protected override void OnPause()
{
  base.OnPause();
  ACPCore.LifecyclePause();
}
```