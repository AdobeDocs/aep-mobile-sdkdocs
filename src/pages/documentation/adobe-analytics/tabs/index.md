<Variant platform="android" task="add" repeat="5"/>

#### Java

1. Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
implementation 'com.adobe.marketing.mobile:analytics:1.+'
```

2. Import the Analytics extension in your application's main activity.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Analytics;
```

<Variant platform="ios-aep" task="add" repeat="7"/>

1. Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using Cocoapods.
2. Add the following pods in your `Podfile`:

```ruby
pod 'AEPCore'
pod 'AEPAnalytics'
pod 'AEPIdentity'
```

3. Import the Analytics and Identity libraries:

**Swift**

```swift
import AEPCore
import AEPAnalytics
import AEPIdentity
```

**Objective-C**

```objectivec
@import AEPCore;
@import AEPAnalytics;
@import AEPIdentity;
```

<Variant platform="ios-acp" task="add" repeat="7"/>

1. Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using Cocoapods.
2. Add the following pods in your `Podfile`:

```ruby
pod 'ACPCore'
pod 'ACPAnalytics'
```

3. Import the Analytics and Identity libraries:

**Swift**

```swift
import ACPCore
import ACPAnalytics
```
**Objective-C**

```objectivec
#import "ACPCore.h"
#import "ACPAnalytics.h"
#import "ACPIdentity.h"
```

<Variant platform="react-native" task="add" repeat="13"/>

#### JavaScript

1. Install Adobe Analytics.

```bash
npm install @adobe/react-native-acpanalytics
```

2. Link the module and the application.

For React Native versions 0.6 and above, you can use the [CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) to link the module while building the app.

For React Native versions less than or equal to 0.59, you can use the following scripts:

```bash
 react-native link @adobe/react-native-acpanalytics
```

If you are using iOS and `cocoapods`, run:

```bash
 cd ios/ && pod install
```

3. Import the extension.

```jsx
 import {ACPAnalytics} from '@adobe/react-native-acpanalytics';
```

4. Get the extension version.

```jsx
 ACPAnalytics.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAnalytics version: " + version));
```

<Variant platform="flutter" task="add" repeat="7"/>

#### Flutter

1. Install Analytics.

Instructions on installing the Analytics SDK in Flutter can be found in the [official Flutter documentation](https://pub.dev/packages/flutter_acpanalytics#-installing-tab-).

2. Import the extension.

```dart
import 'package:flutter_acpanalytics/flutter_acpanalytics.dart';
```

3. Get the extension version.

```dart
String version = await FlutterACPAnalytics.extensionVersion;
```

<Variant platform="cordova" task="add" repeat="5"/>

#### Cordova

1. After creating your Cordova app and adding the Android and iOS platforms, add the Analytics extension.

```text
cordova plugin add https://github.com/adobe/cordova-acpanalytics.git
```

2. Get the extension version.

```jsx
ACPAnalytics.extensionVersion(function(version) {  
   console.log("ACPAnalytics version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" task="add" repeat="5"/>

#### C#

1. After importing the [ACPAnalytics.unitypackage](https://github.com/adobe/unity-acpanalytics/blob/master/bin/ACPAnalytics-0.0.1-Unity.zip), add the Analytics extension for Unity.

```csharp
using com.adobe.marketing.mobile;
```

2. Get the extension version.

```csharp
ACPAnalytics.extensionVersion();
```

<Variant platform="xamarin" task="add" repeat="5"/>

#### C#

1. After adding the iOS or Android ACPAnalytics NuGet package, add the Analytics extension.

```csharp
using Com.Adobe.Marketing.Mobile;
```

2. Get the extension version.

```csharp
ACPAnalytics.ExtensionVersion();
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

The following sample shows how to set up methods that call the [setApplication()](..//mobile-core/api-reference.md#setapplication-android-only) method in the `onCreate()` method:

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        MobileCore.configureWithAppID("yourAppId");
        try {
            Analytics.registerExtension(); //Register Analytics with Mobile Core
            Identity.registerExtension();
            MobileCore.start(null);
        } catch (Exception e) {
            //Log the exception
         }
    }
}
```

Analytics depends on the Identity extension and is automatically included in Core by Maven. When manually installing the Analytics extension, ensure that you add the `identity-1.x.x.aar` library to your project.

<Variant platform="ios-aep" task="register" repeat="6"/>

#### Swift

In your app's `_:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   MobileCore.registerExtensions([Analytics.self, Identity.self], {
   MobileCore.configureWith(appId: "yourAppId")
 })  
 ...
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions`, register Media with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileAnalytics.class, AEPMobileIdentity.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```

<Variant platform="ios-acp" task="register" repeat="7"/>

#### Swift

In your app's `_:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     ACPCore.configure(withAppId: "yourAppId")   
     ACPAnalytics.registerExtension()
     ACPIdentity.registerExtension()
     ACPCore.start(nil)
     // Override point for customization after application launch.
     return true;
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions`, register Analytics with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore configureWithAppId:@"yourAppId"];
    [ACPAnalytics registerExtension];
    [ACPIdentity registerExtension];
    [ACPCore start:nil];
    // Override point for customization after application launch.
    return YES;
 }
```

Analytics depends on the Identity extension and is automatically included in the Core pod. When installing the Analytics extension manually, ensure that you added the `libACPIdentity_iOS.a` library to your project.

<Variant platform="react-native" task="register" repeat="2"/>

#### JavaScript

When using React Native, register Analytics with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="flutter" task="register" repeat="2"/>

#### Dart

When using Flutter, register Analytics with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="cordova" task="register" repeat="2"/>

#### Cordova

When using Cordova, register Analytics with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="unity" task="register" repeat="3"/>

#### C#

Register the extension in the `start()` function:

```csharp
using com.adobe.marketing.mobile;
using using AOT;

public class MainScript : MonoBehaviour
{
    [MonoPInvokeCallback(typeof(AdobeStartCallback))]
    public static void HandleStartAdobeCallback()
    {   
        ACPCore.ConfigureWithAppID("1423ae38-8385-8963-8693-28375403491d");
    }

    // Start is called before the first frame update
    void Start()
    {   
        ACPAnalytics.registerExtension();
        ACPCore.Start(HandleStartAdobeCallback);
    }
}
```

<Variant platform="xamarin" task="register" repeat="7"/>

#### C#

**iOS**

Register the Analytics extension in your app's `FinishedLaunching()` function:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  global::Xamarin.Forms.Forms.Init();
  LoadApplication(new App());
    ACPAnalytics.RegisterExtension();
  // start core
  ACPCore.Start(startCallback);
  return base.FinishedLaunching(app, options);
}

private void startCallback()
{
  // set launch config
  ACPCore.ConfigureWithAppID("yourAppId");
}
```

**Android**

Register the Analytics extension in your app's `OnCreate()` function:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
  LoadApplication(new App());
  ACPAnalytics.RegisterExtension();

  // start core
  ACPCore.Start(new CoreStartCompletionCallback());
}

class CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object callback)
  {
    // set launch config
    ACPCore.ConfigureWithAppID("yourAppId");
  }
}
```

<Variant platform="android" task="serialize" repeat="5"/>

#### Java

**Syntax**

```java
cdata.put("&&events", "event1:12341234");
```

**Example**

```java
//create a context data dictionary
HashMap cdata = new HashMap<String, Object>();

// add events
cdata.put("&&events", "event1:12341234");

// send a tracking call - use either a trackAction or TrackState call.
// trackAction example:
MobileCore.trackAction("Action Name", cdata);
// trackState example:
MobileCore.trackState("State Name", cdata);
```

<Variant platform="ios-aep" task="serialize" repeat="10"/>

#### Swift

**Syntax**

```swift
contextdata["&&events"] = "event1:12341234"
```

**Example**

```swift
//create a context data dictionary
var contextData = [String: Any]()

// add events
contextData["&&events"] = "event1:12341234"

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
MobileCore.track(action: "Action Name" as String, data: contextData)

// trackState example:
MobileCore.track(state: "State Name" as String, data: contextData)
```

#### Objective-C

**Syntax**

```objectivec
[contextData setObject:@"eventN:serial number" forKey:@"&&events"];
```

**Example**

```objectivec
//create a context data dictionary
NSMutableDictionary *contextData = [NSMutableDictionary dictionary];

// add events
[contextData setObject:@"event1:12341234" forKey:@"&&events"];

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
[AEPMobileCore trackAction:@"Action Name" data:contextData];
// trackState example:
[AEPMobileCore trackState:@"State Name" data:contextData];
```

<Variant platform="ios-acp" task="serialize" repeat="5"/>

#### Objective-C

**Syntax**

```objectivec
[contextData setObject:@"eventN:serial number" forKey:@"&&events"];
```

**Example**

```objectivec
//create a context data dictionary
NSMutableDictionary *contextData = [NSMutableDictionary dictionary];

// add events
[contextData setObject:@"event1:12341234" forKey:@"&&events"];

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
[ACPCore trackAction:@"Action Name" data:contextData];
// trackState example:
[ACPCore trackState:@"State Name" data:contextData];
```

<Variant platform="react-native" task="serialize" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```jsx
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("Action Name", contextData);
// trackState example:
ACPCore.trackState("State Name", contextData);
```

<Variant platform="flutter" task="serialize" repeat="5"/>

#### Dart

**Syntax**

```dart
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```dart
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
FlutterACPCore.trackAction("Action Name",  data: contextData);
// trackState example:
FlutterACPCore.trackState("State Name",  data: contextData);
```

<Variant platform="cordova" task="serialize" repeat="5"/>

#### Cordova

**Syntax**

```jsx
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```jsx
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.trackAction("Action Name", contextData, function(handleCallback) {
  console.log("AdobeExperenceSDK: Track action success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to track action: " + handleError);
});
// trackState example:
ACPCore.trackState("State Name", contextData, function(handleCallback) {
  console.log("AdobeExperenceSDK: Track state success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to track state: " + handleError);
});
```

<Variant platform="unity" task="serialize" repeat="5"/>

#### C#

**Syntax**

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("key", "trackAction");
```

**Example**

```csharp
// create a context data dictionary and add events
var contextData = new Dictionary<string, string>();
contextData.Add("key", "trackAction");

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```

<Variant platform="xamarin" task="serialize" repeat="9"/>

#### C#

**iOS syntax**

```csharp
var contextData = new NSMutableDictionary<NSString, NSString>
{
  ["&&events"] = new NSString("eventN:serial number")
};
```

**iOS example**

```csharp
// create a context data dictionary and add events
var contextData = new NSMutableDictionary<NSString, NSString>
{
  ["&&events"] = new NSString("event1:12341234")
};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```

**Android syntax**

```csharp
var contextData = new Dictionary<string, string>();
contextData.Add("&&events", "event1:12341234");
```

**Android example**

```csharp
// create a context data dictionary and add events
var contextData = new Dictionary<string, string>();
contextData.Add("&&events", "event1:12341234");

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
ACPCore.TrackAction("Action Name", contextData);

// trackState example:
ACPCore.TrackState("State Name", contextData);
```

<Variant platform="android" task="update" repeat="3"/>

#### Java

**Example**

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("analytics.server", "sample.analytics.tracking.server");
data.put("analytics.rsids", "rsid1,rsid2");
data.put("analytics.batchLimit", 10);
data.put("analytics.offlineEnabled", true);

MobileCore.updateConfiguration(data);
```

<Variant platform="ios-aep" task="update" repeat="6"/>

#### Swift

**Example**

```swift
let updatedConfig = ["analytics.server":"sample.analytics.tracking.server",
                     "analytics.rsids":"rsid1,rsid2",
                     "analytics.batchLimit":10,
                     "analytics.offlineEnabled":true] as [String: Any]
MobileCore.updateConfigurationWith(configDict: updatedConfig)
```

#### Objective-C

**Example**

```objectivec
NSDictionary *updatedConfig = @{@"analytics.server":@"sample.analytics.tracking.server",
                                @"analytics.rsids":@"rsid1,rsid2",
                                @"analytics.batchLimit":@(10),
                                @"analytics.offlineEnabled":@YES};
[AEPMobileCore updateConfiguration:updatedConfig];
```

<Variant platform="ios-acp" task="update" repeat="6"/>

#### Swift

**Example**

```swift
let updatedConfig = ["analytics.server":"sample.analytics.tracking.server",
                     "analytics.rsids":"rsid1,rsid2",
                     "analytics.batchLimit":10,
                     "analytics.offlineEnabled":true]
ACPCore.updateConfiguration(updatedConfig)
```

#### Objective-C

**Example**

```objectivec
NSDictionary *updatedConfig = @{@"analytics.server":@"sample.analytics.tracking.server",
                                @"analytics.rsids":@"rsid1,rsid2",
                                @"analytics.batchLimit":@(10),
                                @"analytics.offlineEnabled":@YES};
[ACPCore updateConfiguration:updatedConfig];
```

<Variant platform="react-native" task="update" repeat="3"/>

#### JavaScript

**Example**

```jsx
ACPCore.updateConfiguration({"analytics.server": "sample.analytics.tracking.server",
                             "analytics.rsids": "rsid1,rsid2",
                             "analytics.batchLimit": 10,
                             "analytics.offlineEnabled": true});
```

<Variant platform="flutter" task="update" repeat="3"/>

#### Dart

**Example**

```dart
FlutterACPCore.updateConfiguration({"analytics.server": "sample.analytics.tracking.server",
                                    "analytics.rsids": "rsid1,rsid2",
                                    "analytics.batchLimit": 10,
                                    "analytics.offlineEnabled": true});
```

<Variant platform="cordova" task="update" repeat="3"/>

#### Cordova

**Example**

```jsx
ACPCore.updateConfiguration({"analytics.server": "sample.analytics.tracking.server",
                             "analytics.rsids": "rsid1,rsid2",
                             "analytics.batchLimit": 10,
                             "analytics.offlineEnabled": true}, function(handleCallback) {
  console.log("AdobeExperenceSDK: Analytics configuration update success: " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to update analytics configuration: " + handleError);
});
```

<Variant platform="unity" task="update" repeat="3"/>

#### C\#

**Example**

```csharp
var dict = new Dictionary<string, object>();
dict.Add("analytics.server": "sample.analytics.tracking.server");
dict.Add("analytics.rsids": "rsid1,rsid2");
dict.Add("analytics.batchLimit": 10);
dict.Add("analytics.offlineEnabled": true);
ACPCore.UpdateConfiguration(dict);
```

<Variant platform="xamarin" task="update" repeat="5"/>

#### C#

**iOS example**

```csharp
var config = new NSMutableDictionary<NSString, NSObject>
{
  ["analytics.server"] = new NSString("sample.analytics.tracking.server"),
  ["analytics.rsids"] = new NSString("rsid1,rsid2"),
  ["analytics.batchLimit"] = new NSNumber(10),
  ["analytics.offlineEnabled"] = new NSNumber(true)
};
ACPCore.UpdateConfiguration(config);
```

**Android example**

```csharp
var config = new Dictionary<string, Java.Lang.Object>();
config.Add("analytics.server", "sample.analytics.tracking.server");
config.Add("analytics.rsids", "rsid1,rsid2");
config.Add("analytics.batchLimit", 10);
config.Add("analytics.offlineEnabled", true);
ACPCore.UpdateConfiguration(config);
```
