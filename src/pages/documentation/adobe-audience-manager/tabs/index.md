<Variant platform="android" task="add" repeat="8"/>

1. Add the library to your project.

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:identity:2.+'
implementation 'com.adobe.marketing.mobile:audience:2.+'
```

2. Import the library.

#### Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Audience;
```

#### Kotlin

```java
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Identity
import com.adobe.marketing.mobile.Audience
```

<Variant platform="ios" task="add" repeat="6"/>

1. Add the [Mobile Core](../mobile-core/index.md) and Audience extensions to your project using Cocoapods.
2. Add the following pods in your `Podfile`:

   ```ruby
    pod 'AEPCore'
    pod 'AEPAudience'
    pod 'AEPIdentity'
   ```

Please note that the Audience Manager extension depends on the Identity extension.

#### Swift

```swift
   import AEPCore
   import AEPAudience
   import AEPIdentity
```

#### Objective-C

```objectivec
   @import AEPCore;
   @import AEPAudience;
   @import AEPIdentity;
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

```java
public class MainApp extends Application {
     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

     @Override
     public void onCreate() {
         super.onCreate();

         MobileCore.setApplication(this);
         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

         List<Class<? extends Extension>> extensions = new ArrayList<>();
         extensions.add(Audience.EXTENSION);        
         extensions.add(Identity.EXTENSION);        
         MobileCore.registerExtensions(extensions, o -> {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
        });
   }
}
```

#### Kotlin

```java
class MyApp : Application() {
    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"

    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)

        val extensions = listOf(Audience.EXTENSION, Identity.EXTENSION)
        MobileCore.registerExtensions(extensions) {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")
        }
    }
}
```

<Variant platform="ios" task="register" repeat="6"/>

#### Swift

In your app's `_:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
  MobileCore.registerExtensions([Audience.self, Identity.self], {
  MobileCore.configureWith(appId: "yourAppId") 
 })  
 ...
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   [AEPMobileCore registerExtensions:@[AEPMobileAudience.class, AEPMobileIdentity.class] completion:^{
   [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```
