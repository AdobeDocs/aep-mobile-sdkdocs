import Tabs from './tabs/api-reference.md'

# API reference

## clearPropositions

This API clears out the client-side in-memory propositions cache.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear-propositions"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=clear-propositions"/>

## extensionVersion

The `extensionVersion()` method (on Android) or the `extensionVersion` property (on iOS) returns the version information for currently installed AEPOptimize extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=extension-version"/>

## getPropositions

This API retrieves the previously fetched propositions, for the provided decision scopes, from the in-memory extension propositions cache. The completion callback is invoked with the decision propositions corresponding to the given decision scopes. If a certain decision scope has not already been fetched prior to this API call, it will not be contained in the returned propositions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-propositions"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=get-propositions"/>

## onPropositionsUpdate

This API registers a permanent callback which is invoked whenever the Edge extension dispatches a response Event received from the Experience Edge Network upon a personalization query. The personalization query requests can be triggered by the `updatePropositions` API, Edge extension `sendEvent` API or launch consequence rules.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=on-propositions-update"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=on-propositions-update"/>

## registerExtension(s)

This API can be invoked to register the Optimize extension with the Mobile Core. On iOS, `registerExtensions` API is part of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=register-extension"/>

## resetIdentities

This `MobileCore` API can also be invoked to clear out the client-side data for the Optimize extension, such as the in-memory propositions cache.
For details on syntax, usage and availability, refer to [Mobile Core - Reset identities](../mobile-core/api-reference.md#reset-identities).

## updatePropositions

This API dispatches an Event for the Edge network extension to fetch decision propositions, for the provided decision scopes array, from the decisioning services enabled in the Experience Edge. The returned decision propositions are cached in-memory in the Optimize SDK extension and can be retrieved using `getPropositions` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-propositions"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=update-propositions"/>

## Public classes

| Type | Android | (AEP 3.x) Swift | (AEP 3.x) Objective-C |
| :--- | :--- | :--- | :--- |
| class | `DecisionScope` | `DecisionScope` | `AEPDecisionScope` |
| class | `Proposition` | `Proposition` | `AEPProposition` |
| class | `Offer` | `Offer` | `AEPOffer` |

### DecisionScope

This class represents the decision scope which is used to fetch the decision propositions from the Edge decisioning services. The encapsulated scope name can also represent the Base64-encoded JSON string created using the provided activityId, placementId, and itemCount.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=decisionscope"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=decisionscope"/>

### Proposition

This class represents the decision propositions received from the decisioning services, upon a personalization query request to the Experience Edge network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=proposition"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=proposition"/>

### Offer

This class represents the proposition option received from the decisioning services, upon a personalization query to the Experience Edge network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=offer"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=offer"/>

### OfferType

An enum indicating the type of an offer, derived from the proposition item `format` field in personalization query response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=offertype"/>

iOS (AEP 3.x)

<Tabs query="platform=ios&api=offertype"/>
