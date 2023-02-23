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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear-queue"/>

iOS

<Tabs query="platform=ios&api=clear-queue"/>

## extensionVersion

The `extensionVersion()` API returns the version of the Analytics extension that is registered with the Mobile Core extension.

To get the version of the Analytics extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getQueueSize 

Retrieves the total number of Analytics hits in the tracking queue.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-queue-size"/>

iOS

<Tabs query="platform=ios&api=get-queue-size"/>

## getQueueSizeWithCompletionHandler

Retrieves the total number of Analytics hits in the tracking queue. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=get-queue-size-with-completion-handler"/>

## getTrackingIdentifier

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled as well as on [MobileCore.resetIdentities](#resetidentities) API call or on privacy status opt out.

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.<br/><br/>Before using this API, see the documentation on identifying [unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-tracking-identifier"/>

iOS

<Tabs query="platform=ios&api=get-tracking-identifier"/>

## getTrackingIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.<br/><br/>Before you use this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<InlineAlert variant="info" slots="text"/>

If you have an [Experience Cloud ID](../mobile-core/identity/api-reference.md#getexperiencecloudid) and have not yet configured a visitor ID grace period, the value returned by `getTrackingIdentifier` may be null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=get-tracking-identifier-with-completion-handler"/>

## getVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-visitor-identifier"/>

iOS

<Tabs query="platform=ios&api=get-visitor-identifier"/>

## getVisitorIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier). Callback with NSError if an unexpected error occurs or the request times out.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=get-visitor-identifier-with-completion-handler"/>

## registerExtension

Registers the Analytics extension with the Mobile Core SDK.

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## resetIdentities

Clears the identities stored in the Analytics extension - `tracking identifier (AID)` and the `custom visitor identifiers (VID)` stored in the Analytics extension and force deletes, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="info" slots="text"/>

Support for this API was added in: <ul><li>Android Analytics version 1.2.9</li><li>iOS AEPAnalytics version 3.0.3</li></ul><br/>See [MobileCore.resetIdentities](../mobile-core/api-reference.md#resetidentities) for more details.

## sendQueuedHits

Sends all queued hits to Analytics, regardless of the current hit batch settings.

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=send-queued-hits"/>

iOS

<Tabs query="platform=ios&api=send-queued-hits"/>

## setVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Sets a custom Analytics visitor identifier. For more information, see [Custom Visitor ID](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-visitor-identifier"/>

iOS

<Tabs query="platform=ios&api=set-visitor-identifier"/>
