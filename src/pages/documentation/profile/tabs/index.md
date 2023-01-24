<Variant platform="android" task="add" repeat="3"/>

#### Java

1. Add the `UserProfile` library to your project using the app's gradle file.

2. Import the `UserProfile` library and any other SDK library in your application's main activity.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios" task="add" repeat="7"/>

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

<Variant platform="ios" task="register" repeat="4"/>

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