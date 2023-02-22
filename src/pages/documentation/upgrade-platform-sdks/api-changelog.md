# API Changelog

This page details SDK API changes between the Experience Platform SDKs and 4x SDKs.

## Mobile Core APIs

For more information, see the [Mobile Core API reference](../mobile-core/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| extensionVersion: | version/getVersion ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [getPrivacyStatus:](./privacy-and-gdpr.md#getprivacystatus) | privacyStatus ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [setPrivacyStatus:](./privacy-and-gdpr.md#setprivacystatus) | setPrivacyStatus: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [setLogLevel:](../mobile-core/api-reference.md#setloglevel) | setDebugLogging: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en)\| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [configureWithFileInPath:](../mobile-core/configuration/api-reference.md/#configurewithfileinpath) | overrideConfigPath: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [setAppGroup:](../mobile-core/api-reference.md#setappgroup) | setAppGroup: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/ios-ext/ios-ext.html?lang=en)) |
| [trackState:data:](../mobile-core/api-reference.md#trackstate) | trackState:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/states.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/states.html?lang=en)) |
| [trackAction:data:](../mobile-core/api-reference.md#trackaction) | trackAction:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/actions.html?lang=en)) |
| [collectPII:](../mobile-core/api-reference.md#collectpii) | collectPII: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/postbacks/c-pii-postbacks.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/postbacks/c-pii-postbacks.html?lang=en)) |
| [getSdkIdentities:](../mobile-core/identity/api-reference.md#getsdkidentities) | getAllIdentifiersAsync: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/privacy-gdpr-ios/c-mob-gdpr-ret-stored-ids-ios.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/gdpr-privacy-android/c-mob-gdpr-ret-stored-ids-android.html?lang=en)) |

### Deprecated APIs and functionality

| 4x SDK | Notes |
|---|---|
| trackActionFromBackground ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/actions.html?lang=en)) | Deprecated |
| trackLocation:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/geo-poi.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/geo-poi.html?lang=en)) | Deprecated |
| trackBeacon:Data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Support modified. See [guide](../user-guides/track-beacon.md) |
| trackingClearCurrentBeacon ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/location-ios/ibeacon.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/location/beacon.html?lang=en)) | Deprecated |
| registerAdobeDataCallback: ([Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) | Deprecated |
| lifetimeValue ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/lifetime-value.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/lifetime-value.html?lang=en)) | Deprecated |
| trackLifetimeValueIncrease:data: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/lifetime-value.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/lifetime-value.html?lang=en)) | |
| trackTimedActionStart: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | Deprecated |
| trackTimedActionUpdate: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | Deprecated |
| trackTimedActionEnd: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | Deprecated |
| trackTimedActionExists: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/timed-actions.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/timed-actions.html?lang=en)) | Deprecated |
| trackPushMessageClickThrough:userInfo ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/messaging-ios/push-messaging/push-messaging.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/messaging-android/push-messaging/push-messaging.html?lang=en)) | Support modified. See [guide](../faq.md#how-can-i-track-user-engagement-of-push-notifications-using-the-experience-platform-mobile-sdk) |
| Tracking App Crash ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/crashes.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/crashes.html?lang=en)) | Deprecated |

## Lifecycle extension APIs

### Supported APIs

<InlineAlert variant="info" slots="text"/>

In the v4 iOS SDK, Lifecycle start and stop calls are made automatically by the SDK. In the Adobe Experience Platform Mobile SDK, the calls to start and stop lifecycle need to be made by the application developer. For more information, see the [Lifecycle extension](../mobile-core/lifecycle/index.md).

For more information, see the [Lifecycle API reference](../mobile-core/lifecycle/api-reference.md).

| Experience Platform SDK | 4x SDK |
|---|---|
| [lifecycleStart:](../mobile-core/lifecycle/api-reference.md#lifecyclestart) | collectLifecycleData ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [lifecycleStart:](../mobile-core/lifecycle/api-reference.md#lifecyclestart) | collectLifecycleWithAdditionalData ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [lifecyclePause](../mobile-core/lifecycle/api-reference.md#lifecyclepause) | pauseCollectingLifecycleData ([Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en) only) |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| keepLifecycleSessionAlive ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) | Deprecated |

## Identity extension APIs

For more information, see the [Identity API reference](../mobile-core/identity/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| [setPushIdentifier:](../mobile-core/identity/api-reference.md#setpushidentifier) | setPushIdentifier ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [setAdvertisingIdentifier:](../mobile-core/identity/api-reference.md#setadvertisingidentifier) | setAdvertisingIdentifier ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [getExperienceCloudId:](../mobile-core/identity/api-reference.md#getexperiencecloudid) | visitorMarketingCloudID ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [syncIdentifiers:](../mobile-core/identity/api-reference.md#syncidentifiers) | visitorSyncIdentifiers ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [syncIdentifiers:authentication:](../mobile-core/identity/api-reference.md#syncidentifiers-overloaded) | visitorSyncIdentifiers:authenticationState: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [syncIdentifier:identifier:authentication:](../mobile-core/identity/api-reference.md#syncidentifier) |visitorSyncIdentifiersWithType:identifier:authenticationState: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [getIdentifiers](../mobile-core/identity/api-reference.md#getidentifiers) | visitorGetIDs ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [appendToURL:withCallback:](../mobile-core/identity/api-reference.md#appendtourl--appendvisitorinfoforurl) | visitorAppendToURL: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/exp-cloud-ios/mc-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/experience-cloud-android/mc-methods.html?lang=en)) |
| [getUrlVariables](../mobile-core/identity/api-reference.md#geturlvariables) | visitorGetUrlVariablesAsync: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/sdk-reference-ios/hybrid-app.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/sdk-reference-android/hybrid-app.html?lang=en)) |

## Adobe Analytics extension APIs

For more information, see the [Analytics API reference](../adobe-analytics/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| [getVisitorIdentifier:](../adobe-analytics/api-reference.md#getvisitoridentifier) | getUserIdentifier ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [setVisitorIdentifier:](../adobe-analytics/api-reference.md#setvisitoridentifier) | setUserIdentifier ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [getTrackingIdentifier:](../adobe-analytics/api-reference.md#gettrackingidentifier) | trackingIdentifier ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/config-ios/sdk-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/configuration-android/methods.html?lang=en)) |
| [sendQueuedHits:](../adobe-analytics/api-reference.md#sendqueuedhits) | trackingSendQueuedHits ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/analytics-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/analytics-methods.html?lang=en)) |
| [clearQueue](../adobe-analytics/api-reference.md#clearqueue) | trackingClearQueue ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/analytics-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/analytics-methods.html?lang=en)) |
| [getQueueSize](../adobe-analytics/api-reference.md#getqueuesize) | trackingGetQueueSize ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/analytics-ios/analytics-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/analytics-android/analytics-methods.html?lang=en)) |

## Adobe Audience Manager extension APIs

For more information, see the [Audience Manager Extension API reference](../adobe-audience-manager/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/aam-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/audience-manager-android/c-audience-manager-methods.html?lang=en)) |
|---|---|
| [​getVisitorProfile:​](../adobe-audience-manager/api-reference.md#getvisitorprofile) | audienceVisitorProfile |
| [​signalWithData:callback:​](../adobe-audience-manager/api-reference.md#signalwithdata) | audienceSignalWithData:callback |
| [​reset​](../adobe-audience-manager/api-reference.md#reset-identifiers-and-profiles) | audienceReset |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| audienceSetDpid:dpuuid: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/aam-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/audience-manager-android/c-audience-manager-methods.html?lang=en)) | Replaced - See [Link](​https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |
| audienceDpid: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/aam-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/audience-manager-android/c-audience-manager-methods.html?lang=en)) | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |​
| audienceDpuuid: ([iOS](https://experienceleague.adobe.com/docs/mobile-services/ios/aam-methods.html?lang=en) \| [Android](https://experienceleague.adobe.com/docs/mobile-services/android/audience-manager-android/c-audience-manager-methods.html?lang=en)) | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html?lang=en) |

​## Adobe Target extension APIs

For more information see [Target API reference](../adobe-target/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK (iOS \| Android) |
| --- | --- |
| getThirdPartyId: | targetThirdPartyID |
| setThirdPartyId: | targetSetThirdPartyID |
| resetExperience: | targetClearCookies |
| initWithName:targetParameters (AEPTargetPrefetchObject) | targetPrefetchObjectWithName:mboxParameters: |
| prefetchContent:withParameters:callback: | targetPrefetchContent:withProfileParameters:callback: |
| prefetchClearCache: | targetPrefetchClearCache |
| initWithMboxName:defaultContent:targetParameters:contentCallback (AEPTargetRequestObject) | targetRequestObjectWithName:defaultContent:mboxParameters:callback: |
| retrieveLocationContent:withParameters: | targetLoadRequests:withProfileParameters: |
| clickedLocation:withTargetParameters: | locationClickedWithName:mboxParameters:productParameters:orderParameters: |
| setPreviewRestartDeeplink: | targetPreviewRestartDeepLink: |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| targetPcID | Deprecated |
| targetSessionID | Deprecated |
| targetLoadRequest:callback: | Deprecated |
| targetLoadRequestWithName:defaultContent:profileParameters:orderParameters:mboxParameters:callback: | Deprecated |
| targetLoadRequestWithName:defaultContent:profileParameters:orderParameters:mboxParameters:requestLocationParameters:callback: | Deprecated |
| targetCreateRequestWithName:defaultContent:parameters: | Deprecated |
| targetCreateOrderConfirmRequestWithName:orderId:orderTotal:productPurchasedId:parameters: | Deprecated |
