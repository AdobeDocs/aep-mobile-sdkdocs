<Variant platform="android" task="add" repeat="8"/>


1. Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using the app's Gradle file.

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../resources/manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:identity:2.+'
implementation 'com.adobe.marketing.mobile:analytics:2.+'
```

2. Import the Analytics extension in your application's main activity.

#### Java

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Analytics;
```

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.Identity
import com.adobe.marketing.mobile.Analytics
```

<Variant platform="ios" task="add" repeat="7"/>

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

         List<Class<? extends Extension>> extensions = Arrays.asList(
                 Analytics.EXTENSION, Identity.EXTENSION);
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

        val extensions = listOf(Analytics.EXTENSION, Identity.EXTENSION)
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

<Variant platform="android" task="serialize" repeat="8"/>

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
#### Kotlin

**Example**

```kotlin
//create a context data dictionary
val cdata: Map<String, Any?> = mapOf(
    "&&events" to "event1:12341234"
)

// send a tracking call - use either a trackAction or TrackState call.
// trackAction example:
MobileCore.trackAction("Action Name", cdata);
// trackState example:
MobileCore.trackState("State Name", cdata);
```

<Variant platform="ios" task="serialize" repeat="10"/>

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

<Variant platform="android" task="update" repeat="6"/>

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
#### Kotlin

**Example**

```kotlin
val data: Map<String, Any?> = mapOf(
    "analytics.server" to "sample.analytics.tracking.server",
    "analytics.rsids" to "rsid1,rsid2",
    "analytics.batchLimit" to 10,
    "analytics.offlineEnabled" to true
)

MobileCore.updateConfiguration(data)
```
<Variant platform="ios" task="update" repeat="6"/>

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
