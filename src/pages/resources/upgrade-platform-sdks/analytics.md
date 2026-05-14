---
title: Adobe Mobile Library (v4) to Experience Platform Analytics migration
description: The Adobe Experience Platform Analytics extension uses [tags](https://experience.adobe.com/#/data-collection/) to configure the Experience Platform SDKs. T...
---
# Adobe Mobile Library (v4) to Experience Platform Analytics migration

## Configuration

The Adobe Experience Platform Analytics extension uses [tags](https://experience.adobe.com/#/data-collection/) to configure the Experience Platform SDKs. This replaces the ADBMobileConfig.json which the Mobile Services SDK used for configuration. To get started with the AEP SDKs:

1. Create a mobile property on tags. \<br/\>See [Set up a mobile property](../../home/getting-started/create-a-mobile-property.md) for more information.
2. Configure your mobile app with the create mobile property.\<br/\>The AEP Mobile Core extension provides general functionality required by all the Adobe AEP extensions. The Configuration extension is built into the Mobile Core and contains the configureWithAppId API. This API is used to link the tag mobile property with your mobile app. The documentation for this API can be seen at the [Configuration API Reference](../../home/base/mobile-core/configuration/api-reference.md#configurewithappid) page. A code sample showing the usage of this API is provided below.
3. Once all the Platform extensions are imported and configured correctly, remove the v4 Mobile SDK dependency. \<br/\>This step is mandatory and a mix of v4 and AEP API calls is not supported.

### Android

If using Gradle, remove the v4 Mobile SDK dependency:

#### Gradle

```bash
dependencies {
  implementation 'com.adobe.mobile:adobeMobileLibrary:4.18.2'
  ...
}
```

Alternatively, if the v4 Mobile SDK library is linked as a jar, search for `adobeMobileLibrary` in your project and remove the jar file.

### iOS

If using Cocoapods, remove the v4 Mobile SDK dependency from the Podfile:

```bash
target 'YourTarget' do
    pod 'AdobeMobileSDK'
    ...
end
```

Alternatively, if the v4 Mobile SDK library is linked in Xcode, select the application target and go to `Build Phases`, then `Link Binary With Libraries` and remove `AdobeMobileLibrary.a`.

## Analytics Migration Overview

For an overview of the API mapping between the Mobile Services SDK and Adobe Experience Platform SDKs, see the [API Change Log](api-changelog.md). This section describes the Analytics-specific changes made with the AEP Analytics extension.

### Deprecated API

| API | Notes |
|---|---|
| trackActionFromBackground | Deprecated |
| trackLocation:data: | This functionality is available in the [Places extension](../../solution/places/index.md). |
| trackBeacon:Data: | Support modified. [See guide](../../solution/adobe-analytics/track-beacon.md). |
| trackingClearCurrentBeacon | Support modified. [See guide](../../solution/adobe-analytics/track-beacon.md). |
| trackLifetimeValueIncrease:data: | This functionality can be recreated using the [Analytics](../../solution/adobe-analytics/index.md) and [User Profile](../../home/base/profile/index.md) extensions. |
| trackTimedActionStart: | This functionality can be recreated using the [Analytics](../../solution/adobe-analytics/index.md) and [User Profile](../../home/base/profile/index.md) extensions. |
| trackTimedActionUpdate: | This functionality can be recreated using the [Analytics](../../solution/adobe-analytics/index.md) and [User Profile](../../home/base/profile/index.md) extensions. |
| trackTimedActionEnd: | This functionality can be recreated using the [Analytics](../../solution/adobe-analytics/index.md) and [User Profile](../../home/base/profile/index.md) extensions. |
| trackTimedActionExists: | This functionality can be recreated using the [Analytics](../../solution/adobe-analytics/index.md) and [User Profile](../../home/base/profile/index.md) extensions. |

## Experience Platform extensions installation and setup

### Register the extensions and link the app to the configuration created with Data Collection tags

In your app's Application class add the mobile extension registration and configuration code:

### Android Java

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

### iOS Swift

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

### iOS Objective-C

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

For more details, see [Add Analytics to your application](../../solution/adobe-analytics/index.md#add-analytics-to-your-application).

## API changes

### Track app states and actions

#### Adobe Mobile Library (v4)

### Android Java

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

### iOS Objective-C

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

### Experience Platform Mobile SDKs

### Android Java

The Mobile SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. In addition, the context data Map has been changed from `<String, Object>` to `<String, String>`. The syntax is:

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

### IOS

The Mobile SDKs have moved the `trackAction` and `trackState` APIs to the MobileCore extension. The syntax is:

```objectivec
 @objc(trackAction:data:)
 static func track(action: String?, data: [String: Any]?)
```

```objectivec
 @objc(trackState:data:)
 static func track(state: String?, data: [String: Any]?)
```

The usage examples are:
### iOS Swift

```swift
MobileCore.track(state: "MainPage", data: ["firstVisit": "true"])
MobileCore.track(action: "linkClicked", data: ["url": "https://www.adobe.com"])
```

### iOS Objective-C

```objectivec
[AEPMobileCore trackState:@"MainPage" data:@{@"firstVisit":@"true"}];
[AEPMobileCore trackAction:@"linkClicked" data:@{@"url":@"https://www.adobe.com"}];
```

## Privacy status changes in the Experience Platform SDK

The privacy APIs `setPrivacyStatus` and `getPrivacyStatus` can be found in the Mobile Core. Similar to the v4 SDK, the Analytics extension will follow these behaviors depending on the privacy status set:

* **Opted in:** Analytics hits will be sent.
* **Unknown:** Analytics hits will be queued.
* **Opted out:** Analytics hits will be dropped.

### Experience Platform Mobile SDKs

### Android Java

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

The usage example for `getPrivacyStatus` is:
### iOS Swift

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

### iOS Objective-C

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

