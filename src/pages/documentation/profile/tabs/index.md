<Variant platform="android" task="add" repeat="5"/>

1. Add the `UserProfile` library to your project using the app's gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:userprofile:2.+'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

2. Import the `UserProfile` library and any other SDK library in your application's main activity.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.UserProfile;
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


After calling the `setApplication()` method in the `onCreate()` method, register the UserProfile extension.

1. The `UserProfile` extension must be registered with Mobile Core before calling an `UserProfile` API.

#### Java

```java
   public class MobileApp extends Application {

       @Override
       public void onCreate() {
            super.onCreate();
            MobileCore.setApplication(this);
            List<Class<? extends Extension>> extensions = Arrays.asList(UserProfile.EXTENSION, ...);
            MobileCore.registerExtensions(extensions, o -> {
                // Any other post registration processing
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
        MobileCore.configureWithAppID("YOUR_APP_ID")

        val extensions = listOf(UserProfile.EXTENSION, ...)
        MobileCore.registerExtensions(extensions) {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")
        }
    }
}
```

<Variant platform="ios" task="register" repeat="1"/>

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
