<Variant platform="android" task="add" repeat="3"/>

#### Java

1. Add the `UserProfile` library to your project using the app's gradle file.

2. Import the `UserProfile` library and any other SDK library in your application's main activity.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios-aep" task="add" repeat="7"/>

1. Add the Mobile Core and Profile extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```ruby
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore', '~> 3.0'
    pod 'AEPUserProfile', '~> 3.0'
end
```

2. Import the UserProfile library.  

#### Swift

```swift
   import AEPCore
   import AEPUserProfile
```

#### Objective-C

```objectivec
   @import AEPCore;
   @import AEPUserProfile;
```

<Variant platform="ios-acp" task="add" repeat="7"/>

1. Add the Mobile Core and Profile extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```pod
use_frameworks!
target 'YourTargetApp' do
    pod 'ACPCore'
    pod 'ACPUserProfile'
end
```

2. Import the UserProfile library.   

#### Objective-C

```objectivec
   #import "ACPCore.h"
   #import "ACPUserProfile.h"
```

#### Swift

```swift
   import ACPCore
   import ACPUserProfile
```

<Variant platform="cordova" task="add" repeat="3"/>

#### Cordova

After creating your Cordova app and adding the Android and iOS platforms, the UserProfile extension for Cordova can be added with this command:

```bash
cordova plugin add https://github.com/adobe/cordova-acpuserprofile.git
```

<Variant platform="unity" task="add" repeat="3"/>

#### C#

After importing the [ACPUserProfile.unitypackage](https://github.com/adobe/unity-acpuserprofile/blob/master/bin/ACPUserProfile-0.0.1-Unity.zip), the UserProfile extension for Unity can be added with following code in the MainScript

```csharp
using com.adobe.marketing.mobile;
```

<Variant platform="xamarin" task="add" repeat="3"/>

#### C#

After adding the iOS ACPUserProfile NuGet package or the Android ACPUserProfile NuGet package, the UserProfile extension can be added by this import statement

```csharp
using Com.Adobe.Marketing.Mobile;
```

<Variant platform="android" task="register" repeat="5"/>

#### Java

**Required:** The `setApplication()` method must be called once in the `onCreate()` method of your main activity.

1. The `UserProfile` extension must be registered with Mobile Core before calling an `UserProfile` API.

This can be done after calling `setApplication()` in the `onCreate()` method. Here is a code sample, which calls these set up methods:

```java
   public class MobileApp extends Application {

       @Override
       public void onCreate() {
           super.onCreate();
           MobileCore.setApplication(this);
           try {
               // register other extensions
               UserProfile.registerExtension();
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

<Variant platform="ios-aep" task="register" repeat="4"/>

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([UserProfile.self], {
  })
  ...
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@AEPMobileUserProfile.class] completion:^{
    ...
  }];
  ...
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="ios-acp" task="register" repeat="4"/>

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     ACPCore.configure(withAppId: "yourAppId")   
     ACPUserProfile.registerExtension() 
     ACPCore.start(nil)
     // Override point for customization after application launch. 
     return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPUserProfile registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="react-native" task="register" repeat="2"/>

#### JavaScript

When using React Native, register Profile with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="flutter" task="register" repeat="2"/>

#### Flutter

When using Flutter, register Profile with Mobile Core in native code as shown on the Android and iOS tabs.

<Variant platform="cordova" task="register" repeat="2"/>

#### Cordova

When using Cordova, register Profile with Mobile Core in native code as shown on the Android and iOS tabs.

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
        ACPCore.ConfigureWithAppID("yourAppId"); 
    }

    // Start is called before the first frame update
    void Start()
    {   
        ACPUserProfile.registerExtension();
        ACPCore.Start(HandleStartAdobeCallback);
    }
}
```

<Variant platform="xamarin" task="register" repeat="7"/>

#### C#

**iOS**

Register the User Profile extension in your app's `FinishedLaunching()` function:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  global::Xamarin.Forms.Forms.Init();
  LoadApplication(new App());
  ACPUserProfile.RegisterExtension();
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

Register the User Profile extension in your app's `OnCreate()` function:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
  LoadApplication(new App());
  ACPUserProfile.RegisterExtension();

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