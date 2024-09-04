---
title: Adobe Journey Optimizer Decisioning API reference
description: An API reference for the Adobe Journey Optimizer Decisioning mobile extension.
keywords:
- Adobe Journey Optimizer Decisioning
- API reference
---

import Alerts from '/src/pages/resources/alerts.md'
import Tabs from './tabs/api-reference.md'

# API reference

## clearPropositions

This API clears out the client-side in-memory propositions cache.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear-propositions"/>

iOS

<Tabs query="platform=ios&api=clear-propositions"/>

## extensionVersion

The `extensionVersion()` method (on Android) or the `extensionVersion` property (on iOS) returns the version information for currently installed AEPOptimize extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getPropositions

This API retrieves the previously fetched propositions, for the provided decision scopes, from the in-memory extension propositions cache. The completion callback is invoked with the decision propositions corresponding to the given decision scopes. If a certain decision scope has not already been fetched prior to this API call, it will not be contained in the returned propositions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-propositions"/>

iOS

<Tabs query="platform=ios&api=get-propositions"/>

## onPropositionsUpdate

This API registers a permanent callback which is invoked whenever the Edge extension dispatches a response event with an `eventType` of `personalization.response`. Additionally, the callback is only invoked if the response event contains at least one valid offer. The personalization query requests can be triggered by the `updatePropositions` API.

<InlineAlert variant="warning" slots="text"/>

The callback passed to `onPropositionsUpdate` will not be invoked if the Experience Edge Network returns an error for the personalization query, or if the response event payload is empty or has invalid proposition data. This API should not be used for handling errors that might occur when `updatePropositions` is called.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=on-propositions-update"/>

iOS

<Tabs query="platform=ios&api=on-propositions-update"/>

## registerExtension

<Alerts query="platform=android-register-extension&componentClass=InlineNestedAlert"/>

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## resetIdentities

<InlineAlert variant="warning" slots="text"/>

This API call can lead to unintended SDK behavior, e.g. resetting of Experience Cloud ID (ECID). So it should be sparingly used and caution should be followed!

This `MobileCore` API is a request to each extension to reset its identities. Every extension responds to this request in its own unique manner. For example, Optimize extension uses this API call to clear out its client-side in-memory propositions cache.
For details on syntax, usage and availability, refer to [Mobile Core - Reset identities](../../home/base/mobile-core/api-reference.md#resetidentities).

## updatePropositions

This API dispatches an Event for the Edge network extension to fetch decision propositions, for the provided decision scopes array, from the decisioning services enabled in the Experience Edge. The returned decision propositions are cached in-memory in the Optimize SDK extension and can be retrieved using `getPropositions` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-propositions"/>

iOS

<Tabs query="platform=ios&api=update-propositions"/>

## Public classes

| Type | Android | (AEP 5.x) Swift | (AEP 5.x) Objective-C |
| :--- | :--- | :--- | :--- |
| class | `DecisionScope` | `DecisionScope` | `AEPDecisionScope` |
| class | `Proposition` | `OptimizeProposition` | `AEPOptimizeProposition` |
| class | `Offer` | `Offer` | `AEPOffer` |

### DecisionScope

This class represents the decision scope which is used to fetch the decision propositions from the Edge decisioning services. The encapsulated scope name can also represent the Base64-encoded JSON string created using the provided activityId, placementId, and itemCount.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=decisionscope"/>

iOS

<Tabs query="platform=ios&api=decisionscope"/>

### OptimizeProposition

This class represents the decision propositions received from the decisioning services, upon a personalization query request to the Experience Edge network.

<InlineAlert variant="warning" slots="text"/>

In SDK versions lower than Android 3.0.0 and iOS 5.0.0, this class was named `Proposition`

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=proposition"/>

iOS

<Tabs query="platform=ios&api=proposition"/>

### Offer

This class represents the proposition option received from the decisioning services, upon a personalization query to the Experience Edge network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=offer"/>

iOS

<Tabs query="platform=ios&api=offer"/>

### OfferType

An enum indicating the type of an offer, derived from the proposition item `format` field in personalization query response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=offertype"/>

iOS

<Tabs query="platform=ios&api=offertype"/>
