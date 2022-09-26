import Tabs from './tabs/api-reference.md'

# Places API reference

This document contains usage information for the public functions, classes, and enums in AEPPlaces.

<InlineAlert variant="info" slots="text"/>

This page only contains information about the 3.x `AEPPlaces` extension for iOS.<br/><br/>A full API reference for the Android `Places` extension and 2.x `ACPPlaces` extension for iOS can be found [here](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-extension/places-api-reference.html?lang=en).

## Static functions

### clear

Clears out the client-side data for Places in shared state, local storage, and in-memory.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=clear"/>

Objective-C

<Tabs query="language=objc&api=clear"/>

### extensionVersion

Returns the running version of the AEPPlaces extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=extension-version"/>

Objective-C

<Tabs query="language=objc&api=extension-version"/>

### getCurrentPointsOfInterest

Returns all points of interest (POI) of which the device is currently known to be within.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=get-current-points-of-interest"/>

Objective-C

<Tabs query="language=objc&api=get-current-points-of-interest"/>

### getLastKnownLocation

Returns the last latitude and longitude provided to the AEPPlaces Extension.

If the Places Extension does not have a valid last known location for the user, the parameter passed in the closure will be `nil`. The `CLLocation` object returned by this method will only contain a valid coordinate. Other properties on the `CLLocation` object should not be considered valid.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=get-last-known-location"/>

Objective-C

<Tabs query="language=objc&api=get-last-known-location"/>

### getNearbyPointsOfInterest

Requests a list of nearby Points of Interest (POI) and returns them in a closure.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=get-nearby-points-of-interest"/>

Objective-C

<Tabs query="language=objc&api=get-nearby-points-of-interest"/>

### processRegionEvent

Passes a `CLRegion` and a `PlacesRegionEvent` to be processed by the Places extension.

Calling this method will result in an `Event` being dispatched to the SDK's `EventHub`. This enables rule processing based on the triggering region event.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=process-region-event"/>

Objective-C

<Tabs query="language=objc&api=process-region-event"/>

### registerExtension

This API no longer exists in `AEPPlaces`. Instead, the extension should be registered by calling the `registerExtensions` API in the `MobileCore`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=register-extension"/>

Objective-C

<Tabs query="language=objc&api=register-extension"/>

### setAccuracyAuthorization

Sets the accuracy authorization status in the Places extension.

The value provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location accuracy authorization for this device.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=set-accuracy-authorization"/>

Objective-C

<Tabs query="language=objc&api=set-accuracy-authorization"/>

### setAuthorizationStatus

Sets the authorization status in the Places extension.

The status provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location authorization status for this device.

<InlineAlert variant="info" slots="text"/>

This method should only be called from the `CLLocationManagerDelegate` protocol method [locationManagerDidChangeAuthorization(\_:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Swift

<Tabs query="language=swift&api=set-authorization-status"/>

Objective-C

<Tabs query="language=objc&api=set-authorization-status"/>

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
