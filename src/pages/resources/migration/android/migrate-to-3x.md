# Migrate to Adobe Experience Platform 3.x SDKs for Android

<InlineAlert variant="info" slots="text"/>

This Mobile SDK version for Android now supports a minimum API level of 21.

## SDK versions

### Android BOM

<div style="height:20px; width:120px;"></div>

<div style="height:30px; width:140px;">
<a href="https://mvnrepository.com/artifact/com.adobe.marketing.mobile/sdk-bom">
<img src="https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/sdk-bom.svg?logo=android&logoColor=white&label=sdk-bom&style=flat-square&versionPrefix=3" alt="descriptive text"/>
</a>
</div>

### Android extensions

<div style="height:20px; width:120px;"></div>

| Extension | Version |
|---|---|
| [Mobile Core](../../../home/base/mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) |
| [Signal](../../../home/base/mobile-core/signal/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) |
| [Lifecycle](../../../home/base/mobile-core/lifecycle/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) |
| [Identity](../../../home/base/mobile-core/identity/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) |
| [Profile](../../../home/base/profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) |
| [Adobe Experience Platform Assurance](../../../home/base/assurance/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) |
| [Adobe Experience Platform Edge Network](../../../edge/edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) |
| [Identity for Edge Network](../../../edge/identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) |adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../../../edge/consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) |
| [Media for Edge Network](../../../edge/media-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgemedia.svg?logo=android&logoColor=white&label=edgemedia&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgemedia) |
| [Edge Bridge](../../../solution/adobe-analytics/migrate-to-edge-network.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgebridge.svg?logo=android&logoColor=white&label=edgebridge&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgebridge) |
| [Adobe Journey Optimizer](../../../edge/adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/messaging) |
| [Adobe Journey Optimizer - Decisioning](../../../edge/adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) |
| [Adobe Analytics](../../../solution/adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) |
| [Adobe Analytics - Media Analytics for Audio & Video](../../../solution/adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) |
| [Adobe Target](../../../solution/adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) |
| [Adobe Campaign Standard](../../../solution/adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) |
| [Adobe Campaign Classic](../../../solution/adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) |
| [Adobe Audience Manager](../../../solution/adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&style=flat-square&versionPrefix=3)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) |

## Migrate from Adobe Experience Platform 2.x SDKs for Android

If you have implemented Adobe Experience Platform 2.x SDKs for Android, then this guide will help you understand the steps required to migrate your implementation to the Experience Platform 3.x SDKs. In summary, you'll need to:

1. [Update dependencies](#update-dependencies)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Handle API migration and breaking changes](#handle-api-migration-and-breaking-changes)

### Update dependencies

When updating to the Experience Platform 3.x SDKs, be sure to review the following updates regarding dependencies.

#### Gradle

The Adobe SDK BOM artifact enables managing all compatible versions of Adobe Experience Platform Android extensions by specifying a single BOM version. This is now the recommended way to manage Android SDKs. If you are using Gradle to manage your app dependencies, the following example shows how to start using BOM in the `build.gradle` file.

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is not recommended for production apps. Refer to this [page](../../../resources/manage-gradle-dependencies.md) for managing Gradle dependencies.

```java
dependencies {
    // implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')
    // implementation 'com.adobe.marketing.mobile:core'
    // implementation 'com.adobe.marketing.mobile:identity'
    // implementation 'com.adobe.marketing.mobile:signal'
    // implementation 'com.adobe.marketing.mobile:lifecycle'
    // implementation 'com.adobe.marketing.mobile:userprofile'

    // Update Adobe SDK BOM artifact to the latest 3.x.x version.
    implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
    implementation 'com.adobe.marketing.mobile:core'
    implementation 'com.adobe.marketing.mobile:identity'
    implementation 'com.adobe.marketing.mobile:signal'
    implementation 'com.adobe.marketing.mobile:lifecycle'
    implementation 'com.adobe.marketing.mobile:userprofile'
}
```

Save the `build.gradle` file and select `Sync Project with Gradle Files` in Android Studio to download the 3.x SDKs.

#### Manual library import

If you are importing SDK libraries manually, make sure to update your libraries by downloading the most recent 3.x binaries directly from [Maven Central Repository](https://mvnrepository.com/artifact/com.adobe.marketing.mobile).

### Update SDK initialization

The `MobileCore.start()` API and the `registerExtension` API for each extension, which were deprecated in the 2.x version of the mobile SDK, have been removed in the 3.x version. If you're still using these APIs, refer [here](./migrate-to-2x.md#update-sdk-initialization) to initialize the SDK and register the extensions using the `MobileCore.registerExtensions()` API.

### Handle API migration and breaking changes

Some of the APIs available in previous major versions of the Mobile SDK for Android are now deprecated or removed. You can choose to replace the obsolete APIs in your code with the alternative APIs in the 3.x version, as described below.

<InlineAlert variant="warning" slots="text"/>

The `registerExtension` API for each extension that was deprecated in the 2.x version of the mobile SDK has been removed in the 3.x version of the mobile SDK. See the [Update SDK initialization](#update-sdk-initialization) section for more details.

#### MobileCore

| Removed API | Alternative API |
| :------------- | :-------------- |
| MobileCore.start(AdobeCallback)| [MobileCore.registerExtensions](../../../home/base/mobile-core/api-reference.md#registerextensions) registers extensions and starts event processing by default |
| MobileCore.dispatchEventWithResponseCallback(Event, AdobeCallbackWithError)| Use [MobileCore.dispatchEventWithResponseCallback(Event, long, AdobeCallbackWithError)](../../../home/base/mobile-core/api-reference.md#dispatch--dispatcheventwithresponsecallback) to explicitly specify a timeout |
| MessagingDelegate | Refer to this [page](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) to migrate to PresentationDelegate |
| InvalidInitException| This exception is no longer thrown by the SDK |

##### Extension Development

Core 3.0.0 is not binary compatible with extensions built using earlier versions. Third-party extension developers are required to recompile their extensions with this version of Core.

| Removed API | Alternative API |
| :------------- | :-------------- |
| MobileCore.log(LoggingMode, String, String) | Use logging methods exposed via [com.adobe.marketing.mobile.services.Log](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/code/core/src/phone/java/com/adobe/marketing/mobile/services/Log.java) |
| MobileCore.registerExtension(Class, ExtensionErrorCallback) | [MobileCore.registerExtensions](../../../home/base/mobile-core/api-reference.md#registerextensions) |
| MobileCore.dispatchEvent(Event, ExtensionErrorCallback)| [MobileCore.dispatch(Event)](../../../home/base/mobile-core/api-reference.md#dispatch--dispatchevent) , [MobileCore.dispatchEventWithResponseCallback(Event, long, AdobeCallbackWithError)](../../../home/base/mobile-core/api-reference.md#dispatch--dispatcheventwithresponsecallback) |
| MobileCore.dispatchEvent(Event, AdobeCallback, ExtensionErrorCallback)| [MobileCore.dispatchEventWithResponseCallback(Event, long, AdobeCallbackWithError)](../../../home/base/mobile-core/api-reference.md#dispatch--dispatcheventwithresponsecallback) |
| MobileCore.dispatchResponseEvent(Event, Event, ExtensionErrorCallback) | Use **Event.Builder.inResponseToEvent(Event)** to create a response event |
| Event.copy() | Use [Event.Builder()](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#creating-an-event) to create a new Event |
| Extension.onUnexpectedError(ExtensionUnexpectedError) | This API is no longer supported by the SDK |
| ExtensionApi.setSharedEventState(Map, Event, ExtensionErrorCallback)| [ExtensionApi.createSharedState(Map, Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#updating-shared-state), [ExtensionApi.createPendingSharedState(Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#creating-and-updating-a-pending-shared-state)  |
| ExtensionApi.setXDMSharedEventState(Map, Event, ExtensionErrorCallback)| [ExtensionApi.createXDMSharedState(Map, Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#updating-xdm-shared-state), [ExtensionApi.createXDMPendingSharedState(Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#creating-and-updating-a-pending-xdm-shared-state) |
| ExtensionApi.getSharedEventState(String, ExtensionErrorCallback)| [ExtensionApi.getSharedState(String, Event, boolean, SharedStateResolution)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#reading-shared-state-from-another-extension) |
| ExtensionApi.getXDMSharedEventState(String, Event, ExtensionErrorCallback)| [ExtensionApi.getXDMSharedState(String, Event, boolean, SharedStateResolution)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#reading-xdm-shared-state-from-another-extension) |
| ExtensionApi.clearSharedEventStates(ExtensionErrorCallback)| Use [ExtensionApi.createSharedState(Map, Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#updating-shared-state) with an empty state |
| ExtensionApi.clearXDMSharedEventStates(ExtensionErrorCallback)| Use [ExtensionApi.createXDMSharedState(Map, Event)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#updating-xdm-shared-state) with an empty state |
| ExtensionApi.registerEventListener(String, String, Class, ExtensionErrorCallback)| [ExtensionApi.registerEventListener(String, String,ExtensionEventListener)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#listener-example)|
| ExtensionApi.registerWildcardEventListener(Class, ExtensionErrorCallback) | [ExtensionApi.registerEventListener(String, String, ExtensionEventListener)](https://github.com/adobe/aepsdk-core-android/blob/v3.0.0-core/Documentation/EventHub/BuildingExtensions.md#wildcard-listeners) |
| LaunchRulesEngine(ExtensionApi) | Use LaunchRulesEngine(String,ExtensionApi) to specify the name of the engine |
| LaunchRulesEngine.process(Event) | LaunchRulesEngine.evaluateEvent(Event) |

`ExtensionListener`, `ExtensionError`, `ExtensionUnexpectedError`, `ExtensionErrorCallback` classes have been removed as they are no longer referenced after above API changes.

#### UserProfile

| Removed API | Alternative API |
| :------------- | :-------------- |
| UserProfile.updateUserAttribute | [UserProfile.updateUserAttributes](../../../home/base/profile/api-reference.md#updateuserattributes) |
| UserProfile.removeUserAttribute | [UserProfile.removeUserAttributes](../../../home/base/profile/api-reference.md#removeuserattributes) |

#### Edge Bridge

As of version 3.0.0 of the Adobe Experience Platform Edge Bridge for Android, the table below shows how the `trackAction` and `trackState` parameters map to the `data` node of the Experience Event sent to the Experience Platform Edge Network. Edge Network automatically maps these data variables to Adobe Analytics without additional server-side configuration. If you are using Edge Bridge version 2.x and mapping data to XDM in your datastream, adjustments are required for version 3.0.0.

| Data | Key path in v2.x | Key path in v3.+ | Description |
| --- | --- | --- | --- |
| Action | `data.action` | `data.__adobe.analytics.linkName` | As of v3, set as the custom link name in the Analytics hit. The field `data.__adobe.analytics.linkType` with value `other` is also automatically included. |
| State | `data.state` | `data.__adobe.analytics.pageName` | As of v3, set as the page name in the Analytics hit. |
| Context data | `data.contextdata` | `data.__adobe.analytics.contextData` | Context data is a map which includes the custom keys and values specified in the `trackAction` and `trackState` API calls. |
| Context data prefixed with "&&" | `data.contextdata`| `data.__adobe.analytics` | Before v3, there was no special handling of context data prefixed with "&&".  <br/> <br/>  As of v3, context data keys prefixed with "&&" are automatically mapped to Analytics variables and no longer include the "&&" prefix. For example, the key `&&products` is sent as `data.__adobe.analytics.products`. Please note that these keys must be known to Analytics and are case sensitive. Find the full list of supported Analytics variables [here](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/data-var-mapping). |
| App identifier | Not included | `data.__adobe.analytics.contextData.a.AppID` | As of v3, the application identifier is automatically added to every tracking event under the key name `a.AppID`.|
| Customer perspective | Not included|  `data.__adobe.analytics.cp` | As of v3, the customer perspective is automatically added to every tracking event. The values are either `foreground` or `background`. |

##### Track action example

Given the track action call:

```kotlin
MobileCore.trackAction("action name", mapOf("key" to "value", "&&products" to ";Running Shoes;1;69.95;event1|event2=55.99;eVar1=12345"))
```

The resulting Experience Event has the following payload:

```json
{
  "data":{
    "__adobe": {
      "analytics": {
        "linkName": "action name",
        "linkType": "other",
        "cp": "foreground",
        "products": ";Running Shoes;1;69.95;event1|event2=55.99;eVar1=12345",
        "contextData":{
          "a.AppID": "myApp 1.0 (1)",
          "key": "value"
        }
      }
    }
  }
}
```

##### Track state example

Given the track state call:

```kotlin
MobileCore.trackState("view name", mapOf("&&events" to "event5,event2=2"))
```

 The resulting Experience Event has the following payload:

```json
{
  "data":{
    "__adobe": {
      "analytics": {
        "pageName": "view name",
        "cp": "foreground",
        "events": "event5,event2=2",
        "contextData":{
          "a.AppID": "myApp 1.0 (1)"
        }
      }
    }
  }
}
```

#### Edge

| Removed API | Alternative API |
| :------------- | :-------------- |
| Formatters.dateToISO8601String | Use TimeUtils.getISO8601UTCDateWithMilliseconds from MobileCore |
| Formatters.dateToShortDateString | Use TimeUtils.getISO8601FullDate from MobileCore |

#### Adobe Analytics - Media Analytics for Audio & Video

| Extension | Mobile Core compatibility | BOM version |
|---|---|---|
| com.adobe.marketing.mobile:media:3.0.0 | com.adobe.marketing.mobile:core:2.+ | com.adobe.marketing.mobile:sdk-bom:2.+ |
| com.adobe.marketing.mobile:media:3.1.0 | com.adobe.marketing.mobile:core:3.+ | com.adobe.marketing.mobile:sdk-bom:3.+ |

Please note that the increment to 3.1.0 was preferred for this release in order to synchronize all extensions to same major version. For more details, see this article on [aligning major version releases for Adobe Experience Platform Mobile SDKs](https://developer.adobe.com/client-sdks/resources/major-version-alignment/).

#### Messaging

| Removed API | Alternative API |
| :------------- | :-------------- |
| Message.dismiss(boolean suppressAutoTrack) | [Message.dismiss()](../../../edge/adobe-journey-optimizer/public-classes/message.md#dismiss)|
| Message.evaluateJavascript(String) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **com.adobe.marketing.mobile.services.ui.message.InAppMessageEventHandler.evaluateJavascript(String, AdobeCallback)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/javascript-from-native/) for more details |
| Message.handleJavascriptMessage(String, AdobeCallback) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **com.adobe.marketing.mobile.services.ui.message.InAppMessageEventHandler.handleJavascriptMessage(String, AdobeCallback)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/native-from-javascript/) for more details |
| Message.getParent() | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **com.adobe.marketing.mobile.messaging.MessagingUtils.getMessageForPresentable(Presentable)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details |
| Message.getWebView() | This functionality is no longer supported |
| MessagingDelegate.shouldShowMessage(FullscreenMessage) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **PresentationDelegate.canShow(Presentable)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details|
| MessagingDelegate.onShow(FullscreenMessage) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **PresentationDelegate.onShow(Presentable)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details|
| MessagingDelegate.onDismiss(FullscreenMessage) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **PresentationDelegate.onDismiss(Presentable)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details|
| MessagingDelegate.urlLoaded(String, FullscreenMessage) | Migrate to **com.adobe.marketing.mobile.services.ui.PresentationDelegate** and use **PresentationDelegate.onContentLoaded(Presentable, PresentationListener.PresentationContent)**. Refer to this [tutorial](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details|

#### Optimize

| Removed API | Alternative API |
| :------------- | :-------------- |
| com.adobe.marketing.mobile.optimize.Proposition | [com.adobe.marketing.mobile.optimize.OptimizeProposition](../../../edge/adobe-journey-optimizer-decisioning/api-reference#optimizeproposition) |

#### Adobe Campaign Classic

| Removed API | Alternative API |
| :------------- | :-------------- |
| AEPMessagingService.handleRemoteMessage(Context, RemoteMessage) | Coming soon |

## Frequently asked questions

### Why do I see 'unresolved reference' errors related to `MessagingDelegate` when upgrading to 3.x SDK?

The Mobile Core 3.x SDK for Android includes changes to SDK presentation management that break compatiblity with earlier versions of the SDK. `com.adobe.marketing.mobile.services.MessagingDelegate` and its usage has been removed in favor of `com.adobe.marketing.mobile.services.ui.PresentationDelegate`. If your application uses `MessagingDelegate` for granular control of in-app messages, refer to this [page](../../../edge/adobe-journey-optimizer/in-app-message/tutorials/messaging-delegate/) for more details on using `PresentationDelegate`.

### Why do I see 'java.lang.NoSuchMethodError' after upgrading to the 3.x version of Mobile SDK for Android?

The Mobile Core 3.x SDK for Android includes changes that break compatiblity with solution SDKs developed for earlier verisons of the Mobile Core SDK.

If you attempt to use 3.x Mobile Core SDK with solution SDKs that were built for previous versions of Mobile Core in your app, you may encounter the following errors:

```text
2024-04-03 17:45:02.501 XXXXX-XXXX/XXXX E/AndroidRuntime: FATAL EXCEPTION: main
    Process: XXX, PID: XXXXXX
    java.lang.NoSuchMethodError: No static method getCore()Lcom/adobe/marketing/mobile/Core; in class Lcom/adobe/marketing/mobile/MobileCore; or its super classes (declaration of 'com.adobe.marketing.mobile.MobileCore' appears in XXX

2024-04-03 17:45:02.501 XXXXX-XXXX/XXXX E/AndroidRuntime: FATAL EXCEPTION: main
    Process: XXX, PID: XXXXX
    java.lang.NoClassDefFoundError: Failed resolution of: Lcom/adobe/marketing/mobile/ExtensionErrorCallback;
```

To resolve these errors, upgrade all your solution SDKs to the [most recent versions](#update-dependencies) using Adobe SDK BOM.

### Why do I see installation instructions related to older SDK versions on Data Collection UI?

Upgrade the extensions within the mobile property in the Data Collection UI to see latest installation instructions for the mobile platform extensions.
