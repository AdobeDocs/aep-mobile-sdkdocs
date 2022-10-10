<Variant platform="android" task="add" repeat="5"/>

#### Java

Add the [Mobile Core](../index.md) extension to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
```

Import the Signal extension in your application's main activity.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios-aep" task="add" repeat="8"/>

​Add the AEPSignal extension and it's dependency, the [Mobile Core](../index.md) extension to your project using Cocoapods.

Add following pods in your `Podfile`:

```pod
pod 'AEPCore','~> 3.0'
pod 'AEPSignal','~> 3.0'
```

Import the Signal libraries:

#### Swift

```swift
import AEPCore
import AEPSignal
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPSignal;
```

<Variant platform="ios-acp" task="add" repeat="9"/>

​The Signal extension is included in the Mobile Core extension. Add the [Mobile Core](../index.md) extension to your project using Cocoapods.

Add following pods in your `Podfile`:

```pod
pod 'ACPCore', '~> 2.0'
```

Import the Signal libraries:

#### Objective-C

```objectivec
#import "ACPCore.h"
#import "ACPSignal.h"
```

#### Swift

In Swift, the ACPCore includes ACPSignal:

```swift
import ACPCore
```

<Variant platform="react-native" task="add" repeat="3"/>

#### JavaScript

Importing the Signal extension:

```jsx
import {ACPSignal} from '@adobe/react-native-acpcore';
```

<Variant platform="flutter" task="add" repeat="3"/>

#### Dart

Importing the Signal extension:

```dart
import 'package:flutter_acpcore/flutter_acpsignal.dart';
```

<Variant platform="cordova" task="add" repeat="3"/>

#### Cordova

After creating your Cordova app and adding the Android and iOS platforms, the Signal extension for Cordova can be added with this command:

```text
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

<Variant platform="unity" task="add" repeat="3"/>

#### C#

After importing the [ACPCore.unitypackage](https://github.com/adobe/unity-acpcore/blob/master/bin/ACPCore-0.0.1-Unity.zip), the Signal extension for Unity can be added with following code in the MainScript

```csharp
using com.adobe.marketing.mobile;
```

<Variant platform="xamarin" task="add" repeat="3"/>

#### C#

After adding the iOS ACPCore NuGet package or the Android ACPSignal NuGet package, the Signal extension can be added by this import statement

```csharp
using Com.Adobe.Marketing.Mobile;
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

After calling the `setApplication()` method in the `onCreate()` method, register the Signal extension. If the registration was not successful, an `InvalidInitException` is thrown.

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        try {
            Signal.registerExtension();
            // register other extensions
            MobileCore.start(new AdobeCallback () {
                @Override
                public void call(Object o) {
                    MobileCore.configureWithAppID("yourAppId");
                }
            });    
        } catch (Exception e) {
            //Log the exception
         }
    }
}
```

Please note that the Signal extension is automatically included in the Mobile Core extension by Maven. When you manually install the Signal extension, ensure that you add the `signal-1.x.x.aar` library to your project.

<Variant platform="ios-aep" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions`, register the Signal extension with Mobile Core:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     MobileCore.registerExtensions([Signal.self, ...]) {
       MobileCore.configureWith(appId: "yourAppId")
       // Any other post registration processing
     }
     return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, ...] completion:^{
        [AEPMobileCore configureWithAppId: @"yourAppId"];
        // Any other post registration processing
    }];
    return YES;
 }
```

<Variant platform="ios-acp" task="register" repeat="6"/>

In your app's`application:didFinishLaunchingWithOptions`, register the Signal extension with Mobile Core:

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore configureWithAppId:@"yourAppId"];
    [ACPSignal registerExtension];
    [ACPCore start:nil];
    // Override point for customization after application launch.
    return YES;
 }
```

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     ACPCore.configure(withAppId: "yourAppId")   
     ACPSignal.registerExtension()
     ACPCore.start(nil)
     // Override point for customization after application launch.
     return true;
}
```

Please note that the Signal extension is automatically included in the Mobile Core pod. When you manually install the Signal extension, ensure that you add the `libACPSignal_iOS.a` library to your project.

<Variant platform="react-native" task="register" repeat="2"/>

#### JavaScript

When using React Native, registering Signal with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="flutter" task="register" repeat="2"/>

#### Dart

When using Flutter, registering Signal with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="cordova" task="register" repeat="2"/>

#### Cordova

When using Cordova, registering Signal with Mobile Core must be done in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" task="register" repeat="3"/>

#### C#

Register the extension in the `start()` function:

```csharp
void Start()
{   
  ACPSignal.RegisterExtension();
}
```

<Variant platform="xamarin" task="register" repeat="7"/>

#### C#

**iOS**

Register the Signal extension with the Mobile Core by adding the following to your app's `FinishedLaunching:` delegate method:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  ACPSignal.RegisterExtension();
  // start Mobile Core
  ACPCore.Start(startCallback);

  return base.FinishedLaunching(app, options);
}

private void startCallback()
{
  // set app id from the Data Collection UI
  ACPCore.ConfigureWithAppID("yourAppId");
}
```

**Android**

Register the Signal extension with the Mobile Core by adding the following to your app's `OnCreate:` method:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
    LoadApplication(new App());
  ACPCore.Application = this.Application;
  ACPSignal.RegisterExtension();
  // start Mobile Core
  ACPCore.Start(new CoreStartCompletionCallback());
}

class CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object callback)
  {
  // set app id from the Data Collection UI
    ACPCore.ConfigureWithAppID("yourAppId");
  }
}
```