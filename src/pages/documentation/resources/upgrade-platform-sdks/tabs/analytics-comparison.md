<Variant platform="android" task="config" repeat="3"/>

If using Gradle, remove the v4 Mobile SDK dependency:

```java
dependencies {
  implementation 'com.adobe.mobile:adobeMobileLibrary:4.18.2'
  ...
}
```

Alternatively, if the v4 Mobile SDK library is linked as a jar, search for `adobeMobileLibrary` in your project and remove the jar file.

<Variant platform="ios" task="config" repeat="3"/>

If using Cocoapods, remove the v4 Mobile SDK dependency from the Podfile:

```bash
target 'YourTarget' do
    pod 'AdobeMobileSDK'
    ...
end
```

Alternatively, if the v4 Mobile SDK library is linked in Xcode, select the application target and go to `Build Phases`, then `Link Binary With Libraries` and remove `AdobeMobileLibrary.a`.

<Variant platform="android" task="aep-install" repeat="1"/>

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Analytics;
import com.adobe.marketing.mobile.Identity;

@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.main);

  MobileCore.setApplication(getApplication());

  MobileCore.registerExtensions(Arrays.asList(
					Analytics.EXTENSION,
					Identity.EXTENSION
				), value -> {
			// add your Environment file ID from Environments tab in Data Collection tags.
			MobileCore.configureWithAppID("your-environment-file-id");
	});
}
```

<Variant platform="ios" task="aep-install" repeat="4"/>

**Objective-C**

```objc
#import "ACPCore.h"
#import "ACPAnalytics.h"
#import "ACPIdentity.h"

- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore setLogLevel:ACPMobileLogLevelDebug];
    [ACPAnalytics registerExtension];
    [ACPIdentity registerExtension];
    [ACPCore start:^{
      // add your app id from the "Environments" tab on Launch.
          [ACPCore configureWithAppId:@"your-app-id"];
    }];
    return YES;
}
```

**Swift**

```swift
import ACPCore
import ACPAnalytics
import ACPIdentity

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  ACPCore.setLogLevel(ACPMobileLogLevel.debug)
  ACPAnalytics.registerExtension()
  ACPIdentity.registerExtension()
  ACPCore.start(){
      ACPCore.configureWithAppId("your-app-id")
  }
  return true
}
```

<Variant platform="android" task="api-changes" repeat="8"/>

#### Adobe Mobile Library (v4)

The Adobe Mobile Library (v4) syntax and usage examples for these API are:

```java
// syntax
public static void trackState(final String state, final Map<String, Object> contextData)

// usage
Analytics.trackState("MainPage", new HashMap<String, Object>() {{
  put("firstVisit", true);
}});
```

```java
// syntax
public static void trackAction(final String action, final Map<String, Object> contextData)

// usage
Analytics.trackAction("linkClicked", new HashMap<String, Object>() {{
  put("url", "https://www.adobe.com");
}});
```

#### Experience Platform Mobile SDKs

The Mobile SDKs have the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data Map has been changed from `<String, Object>` to `<String, String>`. The syntax is:

```java
// syntax
public static void trackState(final String state, final Map<String, String> contextData)

// usage
MobileCore.trackState("MainPage", new HashMap<String, String>() {{
  put("firstVisit", "true");
}});
```

```java
// syntax
public static void trackAction(final String action, final Map<String, String> contextData)

// usage
MobileCore.trackAction("linkClicked", new HashMap<String, String>() {{
  put("url", "https://www.adobe.com");
}});
```

<Variant platform="ios" task="api-changes" repeat="13"/>

The Mobile Services SDK syntax and usage examples for these API are:

#### Adobe Mobile Library (v4)

```text
// syntax
+ (void) trackState:(NSString *)state data:(NSDictionary *)data;

// usage
[ADBMobile trackState:@"MainPage" data:@{@"firstVisit":@true}];
```

```text
// syntax
+ (void) trackAction:(NSString *)action data:(NSDictionary *)data;

// usage
[ADBMobile trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

#### Experience Platform Mobile SDKs

The Mobile SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the NSDictionary has been changed from `<NSString, NSObject>` to `<NSString, NSString>`. The syntax is:

```text
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

```text
+ (void) trackState: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

The usage examples are:

**Objective-C**

```text
[ACPCore trackState:@"MainPage" data:@{@"firstVisit":@"true"}];
[ACPCore trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

**Swift**

```swift
ACPCore.trackState("MainPage", data: ["firstVisit": "true"])
ACPCore.trackAction("linkClicked", data: ["url": "https://www.adobe.com"])
```

<Variant platform="android" task="privacy-changes" repeat="6"/>

#### Experience Platform Mobile SDKs

The syntax and usage examples for the `setPrivacyStatus` API are:

```java
// syntax
public static void setPrivacyStatus(final MobilePrivacyStatus privacyStatus);

// usage
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN);
```

The syntax and usage examples for the `getPrivacyStatus` API are:

```java
// syntax
void getPrivacyStatus(AdobeCallback<MobilePrivacyStatus> callback);

// usage
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus status) {
        // handle current privacy status
    }
});
```

<Variant platform="ios" task="privacy-changes" repeat="12"/>

#### Experience Platform Mobile SDKs

The syntax for `setPrivacyStatus` is:

```text
// syntax
+ (void) setPrivacyStatus: (ACPMobilePrivacyStatus) status;
```

The syntax for `getPrivacyStatus` is:

```text
// syntax
+ (void) getPrivacyStatus: (nonnull void (^) (ACPMobilePrivacyStatus status)) callback;
+ (void) getPrivacyStatusWithCompletionHandler: (nonnull void (^) (ACPMobilePrivacyStatus status, NSError* _Nullable error)) completionHandler;
```

The callback is invoked after the privacy status is available.

If the API with the completion handler is used, the completion handler will be invoked with the current privacy status, or error if an unexpected error occurs or the request times out. The default timeout is 5000ms.

The usage example for `getPrivacyStatus` is:

**Objective-C**

```objc
[ACPCore getPrivacyStatus:^(ACPMobilePrivacyStatus status) {
  switch (status) {
    case ACPMobilePrivacyStatusOptIn: NSLog(@"Privacy Status: Opt-In");
    case ACPMobilePrivacyStatusOptOut: NSLog(@"Privacy Status: Opt-Out");
    case ACPMobilePrivacyStatusUnknown: NSLog(@"Privacy Status: Unknown");
    default: break;
  }
}];

[ACPCore getPrivacyStatusWithCompletionHandler:^(ACPMobilePrivacyStatus status, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved privacy status
  }
}];
```

**Swift**

```swift
ACPCore.getPrivacyStatus({ status in
   switch status {
     case ACPMobilePrivacyStatus.optIn: print ("Privacy Status: Opt-In")
     case ACPMobilePrivacyStatus.optOut: print("Privacy Status: Opt-Out")
     case ACPMobilePrivacyStatus.unknown: print("Privacy Status: Unknown")
     default: break
   }
})

ACPCore.getPrivacyStatus(withCompletionHandler: { status, error in
    if error != nil {
      // handle error here
    } else {
      // handle the retrieved privacy status
    }
})
```
