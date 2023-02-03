<Variant platform="android" task="add" repeat="5"/>

#### Java

1. Add the [Mobile Core](../mobile-core/index.md) and Analytics extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:2.x.x'
implementation 'com.adobe.marketing.mobile:analytics:2.x.x'
```

2. Import the Analytics extension in your application's main activity.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Analytics;
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
