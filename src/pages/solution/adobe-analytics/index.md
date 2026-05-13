---
title: Adobe Analytics extension
description: Configuring the Adobe Analytics extension in the Data Collection UI
keywords:
- Adobe Analytics
- Product overview
---

# Adobe Analytics

## Configure the Analytics extension in the Data Collection UI

1. In the Data Collection UI, select the **Extensions** tab.
2. On the **Catalog** tab, locate the **Adobe Analytics** extension, and select **Install**.
3. Type the extension settings. For more information, please read the [configure the Analytics Extension section](#configure-the-analytics-extension).
4. Click **Save**.
5. Follow the publishing process to update SDK configuration.

![Workflow overview for the Data Collection UI, the Mobile SDK, and Adobe Analytics](./assets/index/workflow.png)

### Configure the Analytics extension

![Adobe Analytics Extension Configuration](./assets/index/mobile-analytics-configuration.png)

#### Analytics company

![Adobe Analytics Company](./assets/index/mobile-analytics-company.png)

If you have access to more than one Analytics company, a select menu will appear, allowing you to choose which company you want to use. If you only have access to one Analytics company, this select menu will not appear.

Once you select an Analytics company, the list of report suites associated with that company will appear in the report suites section.

#### Report suites

<InlineAlert variant="info" slots="text"/>

To learn how to find report suite IDs, please read the documentation on [report suites](https://experienceleague.adobe.com/docs/analytics/admin/manage-report-suites/report-suites-admin.html).

Select one or more mobile-enabled report suite identifiers from the combo box to which the Analytics data should be sent. Only report suite identifiers that belong to a company and that are enabled for mobile can be selected. For information on how to enable mobile for your report suite, see the [mobile management documentation](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/mobile-management.html).

To narrow the search for a report suite identifier, type a string in the combo box text field. After a valid report suite identifier has been selected, this identifier appears in a tag below the combo box. To remove a report suite ID, click on the X next to the ID you want to remove. Report suite IDs can also be configured for the Development and Staging environments.

#### Tracking server

<InlineAlert variant="info" slots="text"/>

To learn what a tracking server is and how to find it, please read the documentation on [tracking servers](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/trackingserver.html).

The tracking server is the tracking domain that all the Analytics requests should be made.

#### Offline enabled

<InlineAlert variant="info" slots="text"/>

To learn more about offline tracking, please read the documentation on [offline tracking](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/trackoffline.html).

When the **Offline Enabled** checkbox is selected, Analytics hits are queued when your device is offline and are sent later when your device is back online. To use offline tracking, ensure that your report suite is timestamp enabled.

<InlineAlert variant="warning" slots="text"/>

If your report suite is timestamp enabled, the checkbox must be selected. If your report suite is not timestamped enabled, leave the checkbox unselected. If this setting is not configured correctly, data will be lost.\<br/\>\<br/\>If you are not sure whether your report suite is timestamp enabled, contact Customer Care.

<InlineAlert variant="info" slots="text"/>

If you currently send Mobile SDK data to a report suite that also collects data from web JavaScript, you may need to set up a separate report suite for mobile data or include a custom timestamp on all JavaScript hits that use the `s.timestamp` variable. For more information, please contact Customer Care.

#### Audience Manager forwarding

<InlineAlert variant="info" slots="text"/>

For more information about Analytics server-side forwarding to Audience Manager, see the documentation on [Analytics sever-side forwarding](#server-side-forwarding-with-audience-manager).

If you set up Analytics server-side forwarding to Audience Manager in your Analytics report suite, select the **Audience Manager Forwarding** checkbox. When this checkbox is selected, all SDK requests to Analytics servers are sent with an expected response code of **10**. This step ensures that client-side Analytics response traffic is forwarded to the Audience Manager SDK so that the User Profile is correctly updated.

#### Backdate previous session info

<InlineAlert variant="warning" slots="text"/>

Select the **Backdate Previous Session Info** checkbox **only** if you have timestamp-enabled report report suites.

When you select this checkbox, the SDK backdates the end-of-session lifecycle information so that this information can be attributed into its correct session. Session information currently consists of crashes and session length.

The SDK also backdates the session information hit to one second after the last hit of the previous session. This means that crashes and session data will correlate with the correct date on which they occurred. One hit is backdated each time a new launch of the application is occurs.

For example, if you select the checkbox, Lifecycle session information or crash events are backdated to one second after the last hit was sent. If you do not select the checkbox, Lifecycle data is attached to the first hit of the subsequent session.

If this option is disabled, Mobile SDK attaches the session information to the current lifecycle.

#### Batch limit

This setting creates a threshold number of hits to be sent in consecutive calls. For example, if you type or select "10", each Analytics hit before the 10th hit is stored in the queue. When the 10th hit comes in, all 10 hits are sent to Analytics in the order in which they were generated.

<InlineAlert variant="info" slots="text"/>

If you set a value greater than 0, ensure that the **Offline Enabled** checkbox is also selected.

The default value for this setting is 0, which means that hit batching is disabled, and all hits are immediately sent to Analytics as they are generated.

#### Launch hit delay

The number of seconds to wait before Analytics launch hits are sent from the SDK.

## Add the Analytics extension to your app

### Include Analytics extension as an app dependency

Add MobileCore, Identity, and Analytics extensions as dependencies to your project.

#### Android Kotlin

Add the required dependencies to your project by including them in the app's Gradle file.

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:identity")
implementation("com.adobe.marketing.mobile:analytics")
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

#### Android Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:identity'
implementation 'com.adobe.marketing.mobile:analytics'
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

#### iOS CocoaPods

Add the required dependencies to your project using CocoaPods. Add following pods in your `Podfile`:

```swift
use_frameworks!

target 'YourTargetApp' do
    pod 'AEPCore', '~> 5.0'
    pod 'AEPAnalytics', '~> 5.0'
    pod 'AEPIdentity', '~> 5.0'
end
```

### Initialize Adobe Experience Platform SDK with Analytics Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](../../home/getting-started/get-the-sdk.md#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

#### Android Kotlin

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

```kotlin
import com.adobe.marketing.mobile.LoggingMode
import com.adobe.marketing.mobile.MobileCore
...
import android.app.Application
...

class MainApp : Application() {
  override fun onCreate() {
    super.onCreate()
    MobileCore.setLogLevel(LoggingMode.DEBUG)
    MobileCore.initialize(this, "ENVIRONMENT_ID")
  }
}
```

#### Android Java

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **Android BOM version 3.8.0**.

```java
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
...
import android.app.Application;
...
public class MainApp extends Application {
  @Override
  public void onCreate(){
    super.onCreate();
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    MobileCore.initialize(this, "ENVIRONMENT_ID");
  }
}
```

#### iOS Swift

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

```swift
// AppDelegate.swift
import AEPCore
import AEPServices
...

final class AppDelegate: NSObject, UIApplicationDelegate {
  func application(_: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
    MobileCore.setLogLevel(.debug)
    MobileCore.initialize(appId: "ENVIRONMENT_ID")
    ...
  }
}
```

#### iOS Objective-C

<InlineAlert variant="warning" slots="text"/>

This API is available starting from **iOS version 5.4.0**.

```objectivec
// AppDelegate.m
#import "AppDelegate.h"
@import AEPCore;
@import AEPServices;
...
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore setLogLevel: AEPLogLevelDebug];  
  [AEPMobileCore initializeWithAppId:@"ENVIRONMENT_ID" completion:^{
      NSLog(@"AEP Mobile SDK is initialized");
  }];
  ...
  return YES;
}
@end
```

## Send Lifecycle metrics to Analytics

To automatically report on the application lifecycle details in Analytics, ensure that you properly configure the lifecycle data collection. For more information, see the documentation on [Lifecycle metrics](../../home/base/mobile-core/lifecycle/metrics.md).

## Send app states and actions to Analytics

To track mobile app states and actions in Adobe Analytics, implement the [trackAction](../../home/base/mobile-core/api-reference.md#trackaction) and [trackState](../../home/base/mobile-core/api-reference.md#trackstate) APIs from the Mobile Core extension. For more information, see the [track app actions](../../home/base/mobile-core/api-reference.md#track-app-actions) and [track app states](../../home/base/mobile-core/api-reference.md#track-app-states-and-views) tutorials.

<InlineAlert variant="info" slots="text"/>

[trackState](../../home/base/mobile-core/api-reference.md#trackstate) reports the view state as the **Page Name**, and state views are reported as **Page View** in Analytics. The value is sent to Analytics by using the page name variable (`pagename=value`).\<br/\>\<br/\> [trackAction](../../home/base/mobile-core/api-reference.md#trackaction) reports the Action as an **event** and does not increment your page views in Analytics. The value is sent to Analytics by using the action variable (`action=value`).

## Integrations with Adobe Experience Platform solutions and services

### Analytics for Adobe Target (A4T)

To see the performance of your Target activities for some segments, you can set up the Analytics extension for Target (A4T) cross-solution integration by enabling the A4T campaigns. This integration allows you to use Analytics reports to examine your results. If you use Analytics as the reporting source for an activity, all reporting and segmentation for that activity is based on Analytics data collection. For more information, see [Target](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html).

### Server-side forwarding with Audience Manager

To enable server-side forwarding to share Analytics data with Audience Manager, see the documentation on [Server-side Forwarding](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/manage-report-suites/edit-report-suite/report-suite-general/server-side-forwarding/ssf.html) to enable server-side forwarding at the report suite level.

To enable client-side forwarding to share Analytics data with Audience Manager within the SDK, in the Data Collection UI, select the **Audience Manager Forwarding** checkbox. For more information, go to [Audience Manager](../adobe-audience-manager/index.md).

### Audio and video analytics

For more information about collecting audio and video analytics, please read the documentation on [Media Analytics for audio and video](../adobe-media-analytics/index.md).

## Event serialization

Event serialization is not supported by processing rules. To set serialized events directly on the hits sent to Analytics, use the following syntax in context data parameters:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
cdata.put("&&events", "event1:12341234");
```

#### Example

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

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
contextdata["&&events"] = "event1:12341234"
```

#### Example

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

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
[contextData setObject:@"eventN:serial number" forKey:@"&&events"];
```

#### Example

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

## Configuration keys

To update the SDK configuration programmatically, use the following information to change your Analytics configuration values.

| Key | Required | Description | Data Type |
| :--- | :--- | :--- | :--- |
| analytics.server | Yes | See [Tracking Server](index.md#tracking-server) | String |
| analytics.rsids | Yes | See [Report Suites](index.md#report-suites). Multiple report suite IDs can be comma separated with no space in- between. For example: "rsids" : "rsid" "rsids" : "rsid1,rsid2" | String |
| analytics.batchLimit | No | See [Batch Limit](index.md#batch-limit) | Integer |
| analytics.aamForwardingEnabled | No | See [Audience Manager Forwarding](index.md#audience-manager-forwarding) | Boolean |
| analytics.offlineEnabled | No | See [Offline Enabled](index.md#offline-enabled) | Boolean |
| analytics.backdatePreviousSessionInfo | No | See [Backdate Previous Session Info](index.md#backdate-previous-session-info). | Boolean |

## Update Analytics configuration

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
HashMap<String, Object> data = new HashMap<String, Object>();
data.put("analytics.server", "sample.analytics.tracking.server");
data.put("analytics.rsids", "rsid1,rsid2");
data.put("analytics.batchLimit", 10);
data.put("analytics.offlineEnabled", true);

MobileCore.updateConfiguration(data);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
val data: Map<String, Any?> = mapOf(
    "analytics.server" to "sample.analytics.tracking.server",
    "analytics.rsids" to "rsid1,rsid2",
    "analytics.batchLimit" to 10,
    "analytics.offlineEnabled" to true
)

MobileCore.updateConfiguration(data)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```swift
let updatedConfig = ["analytics.server":"sample.analytics.tracking.server",
                     "analytics.rsids":"rsid1,rsid2",
                     "analytics.batchLimit":10,
                     "analytics.offlineEnabled":true] as [String: Any]
MobileCore.updateConfigurationWith(configDict: updatedConfig)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objectivec
NSDictionary *updatedConfig = @{@"analytics.server":@"sample.analytics.tracking.server",
                                @"analytics.rsids":@"rsid1,rsid2",
                                @"analytics.batchLimit":@(10),
                                @"analytics.offlineEnabled":@YES};
[AEPMobileCore updateConfiguration:updatedConfig];
```

For more information, see the [configuration API reference](../../home/base/mobile-core/configuration/api-reference.md).
