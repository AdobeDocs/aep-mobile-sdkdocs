# API Changelog

This page details SDK API changes between the Experience Platform SDKs and 4x SDKs.

## Mobile Core APIs

For more information, see the [Mobile Core API reference](../../home/base/mobile-core/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| extensionVersion: | version/getVersion |
| [getPrivacyStatus:](../privacy-and-gdpr.md#getprivacystatus) | privacyStatus |
| [setPrivacyStatus:](../privacy-and-gdpr.md#setprivacystatus) | setPrivacyStatus: |
| [setLogLevel:](../../home/base/mobile-core/api-reference.md#setloglevel) | setDebugLogging: |
| [configureWithFileInPath:](../../home/base/mobile-core/configuration/api-reference.md/#configurewithfileinpath) | overrideConfigPath: |
| [setAppGroup:](../../home/base/mobile-core/api-reference.md#setappgroup) | setAppGroup: |
| [trackState:data:](../../home/base/mobile-core/api-reference.md#trackstate) | trackState:data: |
| [trackAction:data:](../../home/base/mobile-core/api-reference.md#trackaction) | trackAction:data: |
| [collectPII:](../../home/base/mobile-core/api-reference.md#collectpii) | collectPII: |
| [getSdkIdentities:](../../home/base/mobile-core/identity/api-reference.md#getsdkidentities) | getAllIdentifiersAsync: |

### Deprecated APIs and functionality

| 4x SDK | Notes |
|---|---|
| trackActionFromBackground | Deprecated |
| trackLocation:data: | Deprecated |
| trackBeacon:Data: | Support modified. See [guide](../../solution/adobe-analytics/track-beacon.md) |
| trackingClearCurrentBeacon | Deprecated |
| registerAdobeDataCallback: | Deprecated |
| lifetimeValue | Deprecated |
| trackLifetimeValueIncrease:data: | Deprecated |
| trackTimedActionStart: | Deprecated |
| trackTimedActionUpdate: | Deprecated |
| trackTimedActionEnd: | Deprecated |
| trackTimedActionExists: | Deprecated |
| trackPushMessageClickThrough:userInfo | Support modified. See [guide](../faq.md#how-can-i-track-user-engagement-of-push-notifications-using-the-experience-platform-mobile-sdk) |
| Tracking App Crash | Deprecated |

## Lifecycle extension APIs

### Supported APIs

<InlineAlert variant="info" slots="text"/>

In the v4 iOS SDK, Lifecycle start and stop calls are made automatically by the SDK. In the Adobe Experience Platform Mobile SDK, the calls to start and stop lifecycle need to be made by the application developer. For more information, see the [Lifecycle extension](../../home/base/mobile-core/lifecycle/index.md).

For more information, see the [Lifecycle API reference](../../home/base/mobile-core/lifecycle/api-reference.md).

| Experience Platform SDK | 4x SDK |
|---|---|
| [lifecycleStart:](../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclestart) | collectLifecycleData |
| [lifecycleStart:](../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclestart) | collectLifecycleWithAdditionalData |
| [lifecyclePause](../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclepause) | pauseCollectingLifecycleData (Android only) |

### Deprecated APIs

| 4x SDK | Notes |
|---|---|
| keepLifecycleSessionAlive | Deprecated |

## Identity extension APIs

For more information, see the [Identity API reference](../../base-extensions-mobile-core/identity/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| [setPushIdentifier:](../../home/base/mobile-core/identity/api-reference.md#setpushidentifier) | setPushIdentifier |
| [setAdvertisingIdentifier:](../../home/base/mobile-core/identity/api-reference.md#setadvertisingidentifier) | setAdvertisingIdentifier |
| [getExperienceCloudId:](../../home/base/mobile-core/identity/api-reference.md#getexperiencecloudid) | visitorMarketingCloudID |
| [syncIdentifiers:](../../home/base/mobile-core/identity/api-reference.md#syncidentifiers) | visitorSyncIdentifiers |
| [syncIdentifiers:authentication:](../../home/base/mobile-core/identity/api-reference.md#syncidentifiers-overloaded) | visitorSyncIdentifiers:authenticationState: |
| [syncIdentifier:identifier:authentication:](../../home/base/mobile-core/identity/api-reference.md#syncidentifier) |visitorSyncIdentifiersWithType:identifier:authenticationState: |
| [getIdentifiers](../../home/base/mobile-core/identity/api-reference.md#getidentifiers) | visitorGetIDs |
| [appendToURL:withCallback:](../../home/base/mobile-core/identity/api-reference.md#appendtourl--appendvisitorinfoforurl) | visitorAppendToURL: |
| [getUrlVariables](../../home/base/mobile-core/identity/api-reference.md#geturlvariables) | visitorGetUrlVariablesAsync: |

## Adobe Analytics extension APIs

For more information, see the [Analytics API reference](../../solution/adobe-analytics/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| [getVisitorIdentifier:](../../solution/adobe-analytics/api-reference.md#getvisitoridentifier) | getUserIdentifier |
| [setVisitorIdentifier:](../../solution/adobe-analytics/api-reference.md#setvisitoridentifier) | setUserIdentifier |
| [getTrackingIdentifier:](../../solution/adobe-analytics/api-reference.md#gettrackingidentifier) | trackingIdentifier |
| [sendQueuedHits:](../../solution/adobe-analytics/api-reference.md#sendqueuedhits) | trackingSendQueuedHits |
| [clearQueue](../../solution/adobe-analytics/api-reference.md#clearqueue) | trackingClearQueue |
| [getQueueSize](../../solution/adobe-analytics/api-reference.md#getqueuesize) | trackingGetQueueSize |

## Adobe Audience Manager extension APIs

For more information, see the [Audience Manager Extension API reference](../../solution/adobe-audience-manager/api-reference.md).

### Supported APIs

| Experience Platform SDK | 4x SDK |
|---|---|
| [​getVisitorProfile:​](../../solution/adobe-audience-manager/api-reference.md#getvisitorprofile) | audienceVisitorProfile |
| [​signalWithData:callback:​](../../solution/adobe-audience-manager/api-reference.md#signalwithdata) | audienceSignalWithData:callback |
| [​reset​](../../solution/adobe-audience-manager/api-reference.md#reset-identifiers-and-profiles) | audienceReset |

### Deprecated APIs

| 4x SDK | Notes |
| ------ | ----- |
| audienceSetDpid:dpuuid: | Replaced - See [Link](​https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html) |
| audienceDpid: | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html) |
| audienceDpuuid: | Replaced - See [Link](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/cid.html) |

​## Adobe Target extension APIs

For more information see [Target API reference](../../solution/adobe-target/api-reference.md).

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
