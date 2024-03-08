---
title: Places release notes
description: The release notes for the Places mobile extension.
keywords:
- Places
- Release notes
---

# Release notes

## February 27, 2024

### iOS Places 4.1.1

* Added max versions to Platform dependencies in podspec

## Aug 8, 2023

### iOS Places 4.1.0 and Android Places 2.1.0

* Added support for forwarding location entry and exit events to Adobe Experience Platform. For more information, refer to the [Places Service event forwarding to Adobe Experience Platform](places-to-platform.md) guide.

## June 6, 2023

### iOS Places 4.0.0

Major version update for [Adobe Experience Platform Location Service](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## March 6, 2023

### iOS Places 3.0.3

* Fixed the friendly name for the extension to be `Places` instead of fully qualified extension name.
* Updated `nearbyPois` in shared state to be an array of POI objects (represented as dictionaries).

## February 3, 2023

### Android Places 2.0.0

* Major version update for [Adobe Experience Platform Location Service](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-places-android).

Please note that the following improvements have been made in the current release:

1. The `getNearbyPointsOfInterest` API without the errorCallback has been removed. Alternatively, use the below overloaded API which provides both successCallback and errorCallback:

```java
public static void getNearbyPointsOfInterest(final Location location,
      final int limit,
      final AdobeCallback<List<PlacesPOI>> successCallback,
      final AdobeCallback<PlacesRequestError> errorCallback)
```

2. The public classes `PlacesAuthorizationStatus`, `PlacesPOI`, and `PlacesRequestError` are consolidated under the `places` subpackage and require updating the import statements as shown below:

```java
import com.adobe.marketing.mobile.places.PlacesAuthorizationStatus;
import com.adobe.marketing.mobile.places.PlacesPOI;
import com.adobe.marketing.mobile.places.PlacesRequestError;
```
