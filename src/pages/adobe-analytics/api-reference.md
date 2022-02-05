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

If you have an [Experience Cloud ID](https://app.gitbook.com/@aep-sdks/s/docs/using-mobile-extensions/mobile-core/identity/identity-api-reference#getexperiencecloudid) and have not yet configured a visitor ID grace period, the value returned by `getTrackingIdentifier` may be null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

### iOS (AEP 3.x)

<GetTrackingIdentifierHandlerIosAEP/>

### iOS (ACP 2.x)

<GetTrackingIdentifierHandlerIosACP/>

## getVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics/analytics-api-reference#setvisitoridentifier).

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

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-analytics/analytics-api-reference#setvisitoridentifier). Callback with NSError if an unexpected error occurs or the request times out.

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
