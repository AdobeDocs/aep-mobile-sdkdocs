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
  MobileCore.setLogLevel(LoggingMode.DEBUG);
  try {
    Analytics.registerExtension();
    Identity.registerExtension();
    MobileCore.start(new AdobeCallback() {
      @Override
      public void call(Object o) {
        // add your app id from the "Environments" tab on Launch.
        MobileCore.configureWithAppID("your-app-id");
      }
    });
  } catch (InvalidInitException e) {
    e.printStackTrace();
  }
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

#### Mobile Services SDK

The Mobile Services SDK syntax and usage examples for these API are:

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

#### AEP SDK

The AEP SDK's have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data Map has been changed from `<String, Object>` to `<String, String>`. The syntax is:

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

#### Mobile Services SDK

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

#### AEP SDK

The AEP SDK's have moved the `trackAction` and `trackState` API's to the MobileCore extension. In addition, the NSDictionary has been changed from `<NSString, NSObject>` to `<NSString, NSString>`. The syntax is:

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

#### AEP SDK

The syntax and usage examples for `setPrivacyStatus` are:

```java
// syntax
public static void setPrivacyStatus(final MobilePrivacyStatus privacyStatus);

// usage
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN);
```

The syntax and usage examples for `getPrivacyStatus` are:

```java
// syntax
void getPrivacyStatus(AdobeCallback<MobilePrivacyStatus> callback);

// usage
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus status) {
          System.out.println("privacy status: " + status);
    }
});
```

The callback is invoked after the privacy status is available. If an instance of AdobeCallbackWithError is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the fail method is called with the appropriate AdobeError.

<Variant platform="ios" task="privacy-changes" repeat="12"/>

#### AEP SDK

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