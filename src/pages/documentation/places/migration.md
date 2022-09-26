import Tabs from './tabs/migration.md'

# Migrating to AEPPlaces reference

This document is a reference comparison of AEPPlaces (3.x) APIs against against their equivalent ACPPlaces (2.x) APIs.

The AEPPlaces extension is implemented purely in Swift and is compatible with the AEPCore swift SDK. To ensure a smooth transition from the ACPPlaces SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section.

## Public classes

| Type | AEP 3.x (Swift) | AEP 3.x (Objective-C) | ACP 2.x (Objective-C) |
| :--- | :--- | :--- | :--- |
| Primary Class | Places | AEPMobilePlaces | ACPPlaces |
| Enum | PlacesQueryResponseCode | AEPPlacesQueryResponseCode | ACPPlacesRequestError |
| Class | PointOfInterest | AEPPlacesPoi | ACPPlacesPoi |
| Enum | PlacesRegionEvent | AEPPlacesRegionEvent | ACPRegionEventType |

## Public APIs (alphabetical)

### clear

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=clear"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=clear"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=clear"/>

### extensionVersion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=extension-version"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=extension-version"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=extension-version"/>

### getCurrentPointsOfInterest

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=get-current-points-of-interest"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=get-current-points-of-interest"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=get-current-points-of-interest"/>

### getLastKnownLocation

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=get-last-known-location"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=get-last-known-location"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=get-last-known-location"/>

### getNearbyPointsOfInterest

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=get-nearby-points-of-interest"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=get-nearby-points-of-interest"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=get-nearby-points-of-interest"/>

### processRegionEvent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=process-region-event"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=process-region-event"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=process-region-event"/>

### registerExtension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=register-extension"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=register-extension"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=register-extension"/>

### setAuthorizationStatus

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

AEP 3.x (Swift)

<Tabs query="language=aep-swift&api=set-authorization-status"/>

AEP 3.x (Objective-C)

<Tabs query="language=aep-objc&api=set-authorization-status"/>

ACP 2.x (Objective-C)

<Tabs query="language=acp-objc&api=set-authorization-status"/>

For additional details, please read the [Places API reference](./api-reference.md).

