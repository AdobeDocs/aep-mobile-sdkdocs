<Variant platform="android" task="config" repeat="4"/>

If using Gradle, remove the v4 Mobile SDK dependency:

#### Gradle

```bash
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

<Variant platform="android" task="aep-install" repeat="2"/>

#### Java

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

#### Swift

```swift
import AEPCore
import AEPIdentity
import AEPAnalytics

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  MobileCore.registerExtensions([Analytics.self, Identity.self], {
      // Use the environment file id assigned to this application in Data Collection UI
      MobileCore.configureWith(appId: "your-environment-file-id")
  })
  return true
}
```

#### Objective-C

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPIdentity;
@import AEPAnalytics;

// AppDelegate.m
- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore registerExtensions:@[AEPMobileAnalytics.class, AEPMobileIdentity.class] completion:^{
      // Use the environment file id assigned to this application in Data Collection UI
      [AEPMobileCore configureWithAppId: @"your-environment-file-id"];
  }];
  return YES;
}
```

<Variant platform="android" task="api-changes-v4" repeat="4"/>

#### Java

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

<Variant platform="ios" task="api-changes-v4" repeat="4"/>

#### Objective-C

The Adobe Mobile Library (v4) syntax and usage examples for these API are:

```objectivec
// syntax
+ (void) trackState:(NSString *)state data:(NSDictionary *)data;

// usage
[ADBMobile trackState:@"MainPage" data:@{@"firstVisit":@true}];
```

```objectivec
// syntax
+ (void) trackAction:(NSString *)action data:(NSDictionary *)data;

// usage
[ADBMobile trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

<Variant platform="android" task="api-changes-aep" repeat="4"/>

The Mobile SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data Map has been changed from `<String, Object>` to `<String, String>`. The syntax is:

#### Java

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

<Variant platform="ios" task="api-changes-aep" repeat="8"/>

The Mobile SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data dictionary has been changed from `<NSString, NSObject>` to `<NSString, NSString>`. The syntax is:

```objectivec
+ (void) trackAction: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

```objectivec
+ (void) trackState: (nullable NSString*) action data: (nullable NSDictionary<NSString*, NSString*>*) data;
```

The usage examples are:

#### Swift

```swift
MobileCore.track(state: "MainPage", data: ["firstVisit": "true"])
MobileCore.track(action: "linkClicked", data: ["url": "https://www.adobe.com"])
```

#### Objective-C

```objectivec
[AEPMobileCore trackState:@"MainPage" data:@{@"firstVisit":@"true"}];
[AEPMobileCore trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

<Variant platform="android" task="privacy-changes-aep" repeat="5"/>

#### Java

The usage example for the `setPrivacyStatus` API is:

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN);
```

The usage example for the `getPrivacyStatus` API is:

```java
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus status) {
        // handle current privacy status
    }
});
```

<Variant platform="ios" task="privacy-changes-aep" repeat="5"/>

The usage example for `getPrivacyStatus` is:

#### Swift

```swift
MobileCore.getPrivacyStatus(completion: ({ status in
  // handle current privacy status
   switch status {
     case PrivacyStatus.optedIn: print("Privacy Status: Opt-In")
     case PrivacyStatus.optedOut: print("Privacy Status: Opt-Out")
     case PrivacyStatus.unknown: print("Privacy Status: Unknown")
     default: break
   }
})
```

#### Objective-C

```objectivec
[AEPMobileCore getPrivacyStatus:^(AEPPrivacyStatus status) {
    switch (status) {
    case AEPPrivacyStatusOptedIn: NSLog(@"Privacy Status: Opt-In");
    case AEPPrivacyStatusOptedOut: NSLog(@"Privacy Status: Opt-Out");
    case AEPPrivacyStatusUnknown: NSLog(@"Privacy Status: Unknown");
    default: break;
  }
}];
```
