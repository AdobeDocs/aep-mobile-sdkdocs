import Tabs from './tabs/api-reference.md'

# Places API reference

This document contains usage information for the public functions, classes, and enums in AEPPlaces.

<InlineAlert variant="info" slots="text"/>

This page only contains information about the 3.x `AEPPlaces` extension.<br/><br/>A full API reference for the 2.x `ACPPlaces` extension for iOS can be found [here](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-extension/places-api-reference.html?lang=en).

## Static functions

### clear

Clears out the client-side data for Places in shared state, local storage, and in-memory.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear"/>

iOS

<Tabs query="platform=ios&api=clear"/>

### extensionVersion

Returns the running version of the AEPPlaces extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

### getCurrentPointsOfInterest

Returns all points of interest (POI) of which the device is currently known to be within.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-current-points-of-interest"/>

iOS

<Tabs query="platform=ios&api=get-current-points-of-interest"/>

### getLastKnownLocation

Returns the last latitude and longitude provided to the AEPPlaces Extension.

If the Places Extension does not have a valid last known location for the user, the parameter passed in the closure will be `nil`. The `CLLocation` object returned by this method will only contain a valid coordinate. Other properties on the `CLLocation` object should not be considered valid.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-last-known-location"/>

iOS

<Tabs query="platform=ios&api=get-last-known-location"/>

### getNearbyPointsOfInterest

Requests a list of nearby Points of Interest (POI) and returns them in a closure.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-nearby-points-of-interest"/>

iOS

<Tabs query="platform=ios&api=get-nearby-points-of-interest"/>

### processGeofence 

When a device crosses one of your app’s pre-defined Places Service region boundaries, the region and event type are passed to the SDK for processing.

Process a Geofence region event for the provided transitionType.

You can pass the transitionType from `GeofencingEvent.getGeofenceTransition()`. Currently `Geofence.GEOFENCE_TRANSITION_ENTER` and `Geofence.GEOFENCE_TRANSITION_EXIT` are supported.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=process-geofence"/>

### processGeofenceEvent

Process all Geofences in the GeofencingEvent at the same time.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=process-geofence-event"/>

### processRegionEvent

Passes a `CLRegion` and a `PlacesRegionEvent` to be processed by the Places extension.

Calling this method will result in an `Event` being dispatched to the SDK's `EventHub`. This enables rule processing based on the triggering region event.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=process-region-event"/>

### registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>

### setAccuracyAuthorization

Sets the accuracy authorization status in the Places extension.

The value provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location accuracy authorization for this device.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=set-accuracy-authorization"/>

### setAuthorizationStatus

Sets the authorization status in the Places extension.

The status provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location authorization status for this device.

<InlineAlert variant="info" slots="text"/>

This method should only be called from the `CLLocationManagerDelegate` protocol method [locationManagerDidChangeAuthorization(\_:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-authorization-status"/>

iOS

<Tabs query="platform=ios&api=set-authorization-status"/>

## Additional classes and enums

| Type | Swift | Objective-C |
| :--- | :--- | :--- |
| class | `PointOfInterest` | `AEPPlacesPoi` |
| enum | `PlacesQueryResponseCode` | `AEPlacesQueryResponseCode` |
| enum | `PlacesRegionEvent` | `AEPPlacesRegionEvent` |

#### PointOfInterest

| Name | Data Type |
| :--- | :--- |
| identifier | String |
| latitude | Double |
| libraryId | String |
| longitude | Double |
| metaData | \[String: String\] |
| name | String |
| radius | Int |
| userIsWithin | Bool |
| weight | Int |

#### PlacesQueryResponseCode

| Case | Raw Value |
| :--- | :--- |
| ok | 0 |
| connectivityError | 1 |
| serverResponseError | 2 |
| invalidLatLongError | 3 |
| configurationError | 4 |
| queryServiceUnavailable | 5 |
| privacyOptedOut | 6 |
| unknownError | 7 |

#### PlacesRegionEvent

| Case | Raw Value |
| :--- | :--- |
| entry | 0 |
| exit | 1 |
