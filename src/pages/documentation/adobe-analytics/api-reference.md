---
title: Adobe Analytics API reference
description: An API reference for the Adobe Analytics mobile extension.
---

import Tabs from './tabs/api-reference.md'

# Analytics API reference

## clearQueue

Force delete, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=clear-queue"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=clear-queue"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=clear-queue"/>

React Native

<Tabs query="platform=react-native&api=clear-queue"/>

Flutter

<Tabs query="platform=flutter&api=clear-queue"/>

Cordova

<Tabs query="platform=cordova&api=clear-queue"/>

Unity

<Tabs query="platform=unity&api=clear-queue"/>

Xamarin

<Tabs query="platform=xamarin&api=clear-queue"/>

## extensionVersion

The `extensionVersion()` API returns the version of the Analytics extension that is registered with the Mobile Core extension.

To get the version of the Analytics extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=extension-version"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=extension-version"/>

React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/>

Cordova

<Tabs query="platform=cordova&api=extension-version"/>

Unity

<Tabs query="platform=unity&api=extension-version"/>

Xamarin

<Tabs query="platform=xamarin&api=extension-version"/>

## getQueueSize 

Retrieves the total number of Analytics hits in the tracking queue.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=get-queue-size"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-queue-size"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-queue-size"/>

React Native

<Tabs query="platform=react-native&api=get-queue-size"/>

Flutter

<Tabs query="platform=flutter&api=get-queue-size"/>

Cordova

<Tabs query="platform=cordova&api=get-queue-size"/>

Unity

<Tabs query="platform=unity&api=get-queue-size"/>

Xamarin

<Tabs query="platform=xamarin&api=get-queue-size"/>

## getQueueSizeWithCompletionHandler <a id="getqueuesizewithcompletionhandler"></a>

Retrieves the total number of Analytics hits in the tracking queue. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-queue-size-with-completion-handler"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-queue-size-with-completion-handler"/>

## getTrackingIdentifier

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled as well as on [MobileCore.resetIdentities](#resetidentities) API call or on privacy status opt out.

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.<br/><br/>Before using this API, see the documentation on identifying [unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=get-tracking-identifier"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-tracking-identifier"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-tracking-identifier"/>

React Native

<Tabs query="platform=react-native&api=get-tracking-identifier"/>

Flutter

<Tabs query="platform=flutter&api=get-tracking-identifier"/>

Cordova

<Tabs query="platform=cordova&api=get-tracking-identifier"/>

Unity

<Tabs query="platform=unity&api=get-tracking-identifier"/>

Xamarin

<Tabs query="platform=xamarin&api=get-tracking-identifier"/>

## getTrackingIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.<br/><br/>Before you use this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<InlineAlert variant="info" slots="text"/>

If you have an [Experience Cloud ID](../mobile-core/identity/api-reference.md#getexperiencecloudid) and have not yet configured a visitor ID grace period, the value returned by `getTrackingIdentifier` may be null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-tracking-identifier-with-completion-handler"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-tracking-identifier-with-completion-handler"/>

## getVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=get-visitor-identifier"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-visitor-identifier"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-visitor-identifier"/>

React Native

<Tabs query="platform=react-native&api=get-visitor-identifier"/>

Flutter

<Tabs query="platform=flutter&api=get-visitor-identifier"/>

Cordova

<Tabs query="platform=cordova&api=get-visitor-identifier"/>

Unity

<Tabs query="platform=unity&api=get-visitor-identifier"/>

Xamarin

<Tabs query="platform=xamarin&api=get-visitor-identifier"/>

## getVisitorIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier). Callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-visitor-identifier-with-completion-handler"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-visitor-identifier-with-completion-handler"/>

## resetIdentities

Clears the identities stored in the Analytics extension - `tracking identifier (AID)` and the `custom visitor identifiers (VID)` stored in the Analytics extension and force deletes, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="info" slots="text"/>

Support for this API was added in: <ul><li>Android Analytics version 1.2.9</li><li>iOS AEPAnalytics version 3.0.3</li></ul><br/>See [MobileCore.resetIdentities](../mobile-core/api-reference.md#resetidentities) for more details.

## sendQueuedHits

Sends all queued hits to Analytics, regardless of the current hit batch settings.

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=send-queued-hits"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=send-queued-hits"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=send-queued-hits"/>

React Native

<Tabs query="platform=react-native&api=send-queued-hits"/>

Flutter

<Tabs query="platform=flutter&api=send-queued-hits"/>

Cordova

<Tabs query="platform=cordova&api=send-queued-hits"/>

Unity

<Tabs query="platform=unity&api=send-queued-hits"/>

Xamarin

<Tabs query="platform=xamarin&api=send-queued-hits"/>

## setVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Sets a custom Analytics visitor identifier. For more information, see [Custom Visitor ID](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=set-visitor-identifier"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=set-visitor-identifier"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=set-visitor-identifier"/>

React Native

<Tabs query="platform=react-native&api=set-visitor-identifier"/>

Flutter

<Tabs query="platform=flutter&api=set-visitor-identifier"/>

Cordova

<Tabs query="platform=cordova&api=set-visitor-identifier"/>

Unity

<Tabs query="platform=unity&api=set-visitor-identifier"/>

Xamarin

<Tabs query="platform=xamarin&api=set-visitor-identifier"/>
