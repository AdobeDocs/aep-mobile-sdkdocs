---
title: Adobe Analytics API reference
description: An API reference for the Adobe Analytics mobile extension.
---

import ClearQueueIosAEP from './tabs/api-reference/clear-queue/ios-aep.md'
import ClearQueueIosACP from './tabs/api-reference/clear-queue/ios-acp.md'
import ClearQueueAndroid from './tabs/api-reference/clear-queue/android.md'
import ClearQueueCordova from './tabs/api-reference/clear-queue/cordova.md'
import ClearQueueFlutter from './tabs/api-reference/clear-queue/flutter.md'
import ClearQueueUnity from './tabs/api-reference/clear-queue/unity.md'
import ClearQueueReactNative from './tabs/api-reference/clear-queue/react-native.md'
import ClearQueueXamarin from './tabs/api-reference/clear-queue/xamarin.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import ExtensionVersionCordova from './tabs/api-reference/extension-version/cordova.md'
import ExtensionVersionFlutter from './tabs/api-reference/extension-version/flutter.md'
import ExtensionVersionUnity from './tabs/api-reference/extension-version/unity.md'
import ExtensionVersionReactNative from './tabs/api-reference/extension-version/react-native.md'
import ExtensionVersionXamarin from './tabs/api-reference/extension-version/xamarin.md'
import GetQueueSizeIosAEP from './tabs/api-reference/get-queue-size/ios-aep.md'
import GetQueueSizeIosACP from './tabs/api-reference/get-queue-size/ios-acp.md'
import GetQueueSizeAndroid from './tabs/api-reference/get-queue-size/android.md'
import GetQueueSizeCordova from './tabs/api-reference/get-queue-size/cordova.md'
import GetQueueSizeFlutter from './tabs/api-reference/get-queue-size/flutter.md'
import GetQueueSizeUnity from './tabs/api-reference/get-queue-size/unity.md'
import GetQueueSizeReactNative from './tabs/api-reference/get-queue-size/react-native.md'
import GetQueueSizeXamarin from './tabs/api-reference/get-queue-size/xamarin.md'
import GetQueueSizeHandlerIosAEP from './tabs/api-reference/get-queue-size-handler/ios-aep.md'
import GetQueueSizeHandlerIosACP from './tabs/api-reference/get-queue-size-handler/ios-acp.md'
import GetTrackingIdentifierIosAEP from './tabs/api-reference/get-tracking-identifier/ios-aep.md'
import GetTrackingIdentifierIosACP from './tabs/api-reference/get-tracking-identifier/ios-acp.md'
import GetTrackingIdentifierAndroid from './tabs/api-reference/get-tracking-identifier/android.md'
import GetTrackingIdentifierCordova from './tabs/api-reference/get-tracking-identifier/cordova.md'
import GetTrackingIdentifierFlutter from './tabs/api-reference/get-tracking-identifier/flutter.md'
import GetTrackingIdentifierUnity from './tabs/api-reference/get-tracking-identifier/unity.md'
import GetTrackingIdentifierReactNative from './tabs/api-reference/get-tracking-identifier/react-native.md'
import GetTrackingIdentifierXamarin from './tabs/api-reference/get-tracking-identifier/xamarin.md'
import GetTrackingIdentifierHandlerIosAEP from './tabs/api-reference/get-tracking-identifier-handler/ios-aep.md'
import GetTrackingIdentifierHandlerIosACP from './tabs/api-reference/get-tracking-identifier-handler/ios-acp.md'
import GetVisitorIdentifierIosAEP from './tabs/api-reference/get-visitor-identifier/ios-aep.md'
import GetVisitorIdentifierIosACP from './tabs/api-reference/get-visitor-identifier/ios-acp.md'
import GetVisitorIdentifierAndroid from './tabs/api-reference/get-visitor-identifier/android.md'
import GetVisitorIdentifierCordova from './tabs/api-reference/get-visitor-identifier/cordova.md'
import GetVisitorIdentifierFlutter from './tabs/api-reference/get-visitor-identifier/flutter.md'
import GetVisitorIdentifierUnity from './tabs/api-reference/get-visitor-identifier/unity.md'
import GetVisitorIdentifierReactNative from './tabs/api-reference/get-visitor-identifier/react-native.md'
import GetVisitorIdentifierXamarin from './tabs/api-reference/get-visitor-identifier/xamarin.md'
import GetVisitorIdentifierHandlerIosAEP from './tabs/api-reference/get-visitor-identifier-handler/ios-aep.md'
import GetVisitorIdentifierHandlerIosACP from './tabs/api-reference/get-visitor-identifier-handler/ios-acp.md'
import SendQueuedHitsIosAEP from './tabs/api-reference/send-queued-hits/ios-aep.md'
import SendQueuedHitsIosACP from './tabs/api-reference/send-queued-hits/ios-acp.md'
import SendQueuedHitsAndroid from './tabs/api-reference/send-queued-hits/android.md'
import SendQueuedHitsCordova from './tabs/api-reference/send-queued-hits/cordova.md'
import SendQueuedHitsFlutter from './tabs/api-reference/send-queued-hits/flutter.md'
import SendQueuedHitsUnity from './tabs/api-reference/send-queued-hits/unity.md'
import SendQueuedHitsReactNative from './tabs/api-reference/send-queued-hits/react-native.md'
import SendQueuedHitsXamarin from './tabs/api-reference/send-queued-hits/xamarin.md'
import SetVisitorIdentifierIosAEP from './tabs/api-reference/set-visitor-identifier/ios-aep.md'
import SetVisitorIdentifierIosACP from './tabs/api-reference/set-visitor-identifier/ios-acp.md'
import SetVisitorIdentifierAndroid from './tabs/api-reference/set-visitor-identifier/android.md'
import SetVisitorIdentifierCordova from './tabs/api-reference/set-visitor-identifier/cordova.md'
import SetVisitorIdentifierFlutter from './tabs/api-reference/set-visitor-identifier/flutter.md'
import SetVisitorIdentifierUnity from './tabs/api-reference/set-visitor-identifier/unity.md'
import SetVisitorIdentifierReactNative from './tabs/api-reference/set-visitor-identifier/react-native.md'
import SetVisitorIdentifierXamarin from './tabs/api-reference/set-visitor-identifier/xamarin.md'

# Analytics API reference

## clearQueue

Force delete, without sending to Analytics, all hits being stored or batched on the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<ClearQueueAndroid/>

### iOS (AEP 3.x)

<ClearQueueIosAEP/>

### iOS (ACP 2.x)

<ClearQueueIosACP/>

### React Native

<ClearQueueReactNative/>

### Flutter

<ClearQueueFlutter/>

### Cordova

<ClearQueueCordova/>

### Unity

<ClearQueueUnity/>

### Xamarin

<ClearQueueXamarin/>

## extensionVersion

The `extensionVersion()` API returns the version of the Analytics extension that is registered with the Mobile Core extension.

To get the version of the Analytics extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<ExtensionVersionAndroid/>

### iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

### iOS (ACP 2.x)

<ExtensionVersionIosACP/>

### React Native

<ExtensionVersionReactNative/>

### Flutter

<ExtensionVersionFlutter/>

### Cordova

<ExtensionVersionCordova/>

### Unity

<ExtensionVersionUnity/>

### Xamarin

<ExtensionVersionXamarin/>

## getQueueSize 

Retrieves the total number of Analytics hits in the tracking queue.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<GetQueueSizeAndroid/>

### iOS (AEP 3.x)

<GetQueueSizeIosAEP/>

### iOS (ACP 2.x)

<GetQueueSizeIosACP/>

### React Native

<GetQueueSizeReactNative/>

### Flutter

<GetQueueSizeFlutter/>

### Cordova

<GetQueueSizeCordova/>

### Unity

<GetQueueSizeUnity/>

### Xamarin

<GetQueueSizeXamarin/>

## getQueueSizeWithCompletionHandler <a id="getqueuesizewithcompletionhandler"></a>

Retrieves the total number of Analytics hits in the tracking queue. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

### iOS (AEP 3.x)

<GetQueueSizeHandlerIosAEP/>

### iOS (ACP 2.x)

<GetQueueSizeHandlerIosACP/>

## getTrackingIdentifier

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled as well as on [MobileCore.resetIdentities](#resetidentities) API call or on privacy status opt out.

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.<br/><br/>Before using this API, see the documentation on identifying [unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<GetTrackingIdentifierAndroid/>

### iOS (AEP 3.x)

<GetTrackingIdentifierIosAEP/>

### iOS (ACP 2.x)

<GetTrackingIdentifierIosACP/>

### React Native

<GetTrackingIdentifierReactNative/>

### Flutter

<GetTrackingIdentifierFlutter/>

### Cordova

<GetTrackingIdentifierCordova/>

### Unity

<GetTrackingIdentifierUnity/>

### Xamarin

<GetTrackingIdentifierXamarin/>

## getTrackingIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Before you use this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<InlineAlert variant="info" slots="text"/>

If you have an [Experience Cloud ID](../mobile-core/identity/api-reference.md#getexperiencecloudid) and have not yet configured a visitor ID grace period, the value returned by `getTrackingIdentifier` may be null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

### iOS (AEP 3.x)

<GetTrackingIdentifierHandlerIosAEP/>

### iOS (ACP 2.x)

<GetTrackingIdentifierHandlerIosACP/>

## getVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<GetVisitorIdentifierAndroid/>

### iOS (AEP 3.x)

<GetVisitorIdentifierIosAEP/>

### iOS (ACP 2.x)

<GetVisitorIdentifierIosACP/>

### React Native

<GetVisitorIdentifierReactNative/>

### Flutter

<GetVisitorIdentifierFlutter/>

### Cordova

<GetVisitorIdentifierCordova/>

### Unity

<GetVisitorIdentifierUnity/>

### Xamarin

<GetVisitorIdentifierXamarin/>

## getVisitorIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier). Callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

### iOS (AEP 3.x)

<GetVisitorIdentifierHandlerIosAEP/>

### iOS (ACP 2.x)

<GetVisitorIdentifierHandlerIosACP/>

## resetIdentities

Clears the identities stored in the Analytics extension - `tracking identifier (AID)` and the `custom visitor identifiers (VID)` stored in the Analytics extension and force deletes, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="info" slots="text"/>

Support for this API was added in: <ul><li>Android Analytics version 1.2.9</li><li>iOS AEPAnalytics version 3.0.3</li></ul><br/>See [MobileCore.resetIdentities](../../foundation-extensions/mobile-core/mobile-core-api-reference.md#resetidentities) for more details.

## sendQueuedHits

Sends all queued hits to Analytics, regardless of the current hit batch settings.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<SendQueuedHitsAndroid/>

### iOS (AEP 3.x)

<SendQueuedHitIosAEP/>

### iOS (ACP 2.x)

<SendQueuedHitIosACP/>

### React Native

<SendQueuedHitReactNative/>

### Flutter

<SendQueuedHitFlutter/>

### Cordova

<SendQueuedHitCordova/>

### Unity

<SendQueuedHitUnity/>

### Xamarin

<SendQueuedHitXamarin/>

## setVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Sets a custom Analytics visitor identifier. For more information, see [Custom Visitor ID](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

### Android

<SetVisitorIdentifierAndroid/>

### iOS (AEP 3.x)

<SetVisitorIdentifierIosAEP/>

### iOS (ACP 2.x)

<SetVisitorIdentifierIosACP/>

### React Native

<SetVisitorIdentifierReactNative/>

### Flutter

<SetVisitorIdentifierFlutter/>

### Cordova

<SetVisitorIdentifierCordova/>

### Unity

<SetVisitorIdentifierUnity/>

### Xamarin

<SetVisitorIdentifierXamarin/>
