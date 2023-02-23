<Variant platform="android" task="add" repeat="8"/>

1. Add the Media extension and its dependencies to your project using the app's Gradle file.

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:identity:2.+'
implementation 'com.adobe.marketing.mobile:analytics:2.+'
implementation 'com.adobe.marketing.mobile:media:3.+'
```

2. Import the libraries in your application's main activity.

#### Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Analytics;
import com.adobe.marketing.mobile.Media;
```

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Identity
import com.adobe.marketing.mobile.Analytics
import com.adobe.marketing.mobile.Media
```


<Variant platform="ios" task="add" repeat="7"/>

1. To add the Media library and its dependencies to your project, add the following pods to your `Podfile`:

```ruby
pod 'AEPCore
pod 'AEPAnalytics
pod 'AEPMedia'
```

2. In Xcode project, import the Media extension:

**Swift**

```swift
import AEPMedia
import AEPCore
import AEPIdentity
import AEPAnalytics
```

**Objective-C**

```objectivec
@import AEPCore;
@import AEPMedia;
@import AEPAnalytics;
@import AEPIdentity;
```

<Variant platform="android" task="register" repeat="5"/>

To register Media with Mobile Core, import the Media library and register it:

#### Java

```java
public class MainApp extends Application {
     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

     @Override
     public void onCreate() {
         super.onCreate();

         MobileCore.setApplication(this);
         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

         List<Class<? extends Extension>> extensions = Arrays.asList(
                 Media.EXTENSION, Analytics.EXTENSION, Identity.EXTENSION);
         MobileCore.registerExtensions(extensions, o -> {
             Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
         });
     }
 }
```

#### Kotlin

```kotlin
class MyApp : Application() {
    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"
    
    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)

        val extensions = listOf(Media.EXTENSION, Analytics.EXTENSION, Identity.EXTENSION)
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
   MobileCore.registerExtensions([Media.self, Analytics.self, Identity.self], {
   MobileCore.configureWith(appId: "yourAppId")
 })  
 ...
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions`, register Media with Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileMedia.class, AEPMobileAnalytics.class, AEPMobileIdentity.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```
