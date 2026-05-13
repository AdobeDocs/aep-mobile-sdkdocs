---
title: Places API reference
description: An API reference for the Places mobile extension.
keywords:
- API reference
- Places
---

# Places API reference

This document contains usage information for the public functions, classes, and enums in AEPPlaces.

<InlineAlert variant="info" slots="text"/>

This page only contains information about the 3.x `AEPPlaces` extension.\<br/\>\<br/\>A full API reference for the 2.x `ACPPlaces` extension for iOS can be found [here](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-extension/places-api-reference.html).

## clear

Clears out the client-side data for Places in shared state, local storage, and in-memory.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.clear();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.clear()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func clear()
```

#### Example

```swift
Places.clear()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) clear;
```

#### Example

```objc
[AEPMobilePlaces clear];
```

## extensionVersion

Returns the running version of the AEPPlaces extension.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
String placesExtensionVersion = Places.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val placesExtensionVersion: String = Places.extensionVersion()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let placesVersion = Places.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objc
NSString *placesVersion = [AEPMobilePlaces extensionVersion];
```

## getCurrentPointsOfInterest

Returns all points of interest (POI) of which the device is currently known to be within.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.getCurrentPointsOfInterest(new AdobeCallback<List<PlacesPOI>>() {
    @Override
    public void call(List<PlacesPOI> pois) {
        // use the obtained POIs that the device is within
        processUserWithinPois(pois);
    }
});
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.getCurrentPointsOfInterest() { pois -> 
    // use the obtained POIs that the device is within
    processUserWithinPois(pois)
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getCurrentPointsOfInterest(_ closure: @escaping ([PointOfInterest]) -> Void)
```

#### Example

```swift
Places.getCurrentPointsOfInterest() { currentPois in
    print("currentPois: (currentPois)")
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getCurrentPointsOfInterest: ^(NSArray<AEPPlacesPoi*>* _Nonnull pois) closure;
```

#### Example

```objc
[AEPMobilePlaces getCurrentPointsOfInterest:^(NSArray<AEPPlacesPoi *> *pois) {
    NSLog(@"currentPois: %@", pois);
}];
```

## getLastKnownLocation

Returns the last latitude and longitude provided to the AEPPlaces Extension.

If the Places Extension does not have a valid last known location for the user, the parameter passed in the closure will be `nil`. The `CLLocation` object returned by this method will only contain a valid coordinate. Other properties on the `CLLocation` object should not be considered valid.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.getLastKnownLocation(new AdobeCallback<Location>() {
    @Override
    public void call(Location lastLocation) {
        // do something with the last known location
        processLastKnownLocation(lastLocation);
    }
});
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.getLastKnownLocation() { lastLocation -> 
    // do something with the last known location
    processLastKnownLocation(lastLocation)
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getLastKnownLocation(_ closure: @escaping (CLLocation?) -> Void)
```

#### Example

```swift
Places.getLastKnownLocation() { location in
    if let location = location {
        print("location returned from closure: ((location.coordinate.latitude), (location.coordinate.longitude))")
    }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getLastKnownLocation: ^(CLLocation* _Nullable lastLocation) closure;
```

#### Example

```objc
[AEPMobilePlaces getLastKnownLocation:^(CLLocation *location) {
    if (location) {
        NSLog(@"location returned from closure: (%f, %f)", location.coordinate.latitude, location.coordinate.longitude);
    }    
}];
```

## getNearbyPointsOfInterest

Requests a list of nearby Points of Interest (POI) and returns them in a closure.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getNearbyPointsOfInterest(@NonNull final Location location,
    final int limit,
    @NonNull final AdobeCallback<List<PlacesPOI>> successCallback,
    @NonNull final AdobeCallback<PlacesRequestError> errorCallback);
```

#### Example

```java
Places.getNearbyPointsOfInterest(currentLocation, 10,
    new AdobeCallback<List<PlacesPOI>>() {
        @Override
        public void call(List<PlacesPOI> pois) {
            // do required processing with the returned nearbyPoi array
            startMonitoringPois(pois);
        }
    }, new AdobeCallback<PlacesRequestError>() {
        @Override
        public void call(PlacesRequestError placesRequestError) {
            // look for the placesRequestError and handle the error accordingly
            handleError(placesRequestError);
        }
    }
);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.getNearbyPointsOfInterest(currentLocation, 10, { pois -> 
    // do required processing with the returned nearbyPoi array
    startMonitoringPois(pois);
}, { error -> 
    // look for the placesRequestError and handle the error accordingly
    handleError(placesRequestError);
})
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getNearbyPointsOfInterest(forLocation location: CLLocation,
                                      withLimit limit: UInt,
                                      closure: @escaping ([PointOfInterest], PlacesQueryResponseCode) -> Void)
```

#### Example

```swift
let location = CLLocation(latitude: 40.4350229, longitude: -111.8918356)
Places.getNearbyPointsOfInterest(forLocation: location, withLimit: 10) { (nearbyPois, responseCode) in    
    print("responseCode: (responseCode.rawValue) - nearbyPois: (nearbyPois)")
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) getNearbyPointsOfInterest: (nonnull CLLocation*) currentLocation
                             limit: (NSUInteger) limit
                          callback: ^ (NSArray<AEPPlacesPoi*>* _Nonnull, AEPPlacesQueryResponseCode) closure;
```

#### Example

```objc
CLLocation *location = [[CLLocation alloc] initWithLatitude:40.4350229 longitude:-111.8918356];

[AEPMobilePlaces getNearbyPointsOfInterest:location
                                     limit:10
                                  callback:^(NSArray<AEPPlacesPoi *> *pois, AEPPlacesQueryResponseCode responseCode) {
    NSLog(@"responseCode: %ld", (long)responseCode);
    NSLog(@"nearbyPois: %@", pois);
}];
```

## processGeofence

When a device crosses one of your app's pre-defined Places Service region boundaries, the region and event type are passed to the SDK for processing.

Process a Geofence region event for the provided transitionType.

You can pass the transitionType from `GeofencingEvent.getGeofenceTransition()`. Currently `Geofence.GEOFENCE_TRANSITION_ENTER` and `Geofence.GEOFENCE_TRANSITION_EXIT` are supported.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void processGeofence(final Geofence geofence, final int transitionType);
```

#### Example

```java
public class GeofenceTransitionsIntentService extends IntentService {

    public GeofenceTransitionsIntentService() {
        super("GeofenceTransitionsIntentService");
    }

    protected void onHandleIntent(Intent intent) {
        GeofencingEvent geofencingEvent = GeofencingEvent.fromIntent(intent);

        List<Geofence> geofences = geofencingEvent.getTriggeringGeofences();

        if (geofences.size() > 0) {
            // Call the Places API to process information
            Places.processGeofence(geofences.get(0), geofencingEvent.getGeofenceTransition());
        }
    }
}
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
fun onHandleIntent(intent: Intent) {
    val geofencingEvent = GeofencingEvent.fromIntent(intent)

    val geofences = geofencingEvent.getTriggeringGeofences()

    if (!geofences.isEmpty()) {
        Places.processGeofence(geofences.first(), geofencingEvent.getGeofenceTransition())
    }
}
```

## processGeofenceEvent

Process all Geofences in the GeofencingEvent at the same time.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void processGeofenceEvent(@NonNull final GeofencingEvent geofencingEvent);
```

#### Example

```java
public class GeofenceTransitionsIntentService extends IntentService {

    public GeofenceTransitionsIntentService() {
        super("GeofenceTransitionsIntentService");
    }

    protected void onHandleIntent(Intent intent) {
        GeofencingEvent geofencingEvent = GeofencingEvent.fromIntent(intent);
        // Call the Places API to process information
        Places.processGeofenceEvent(geofencingEvent);
    }
}
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
fun onHandleIntent(intent: Intent) {
    val geofencingEvent = GeofencingEvent.fromIntent(intent)
    // Call the Places API to process information
    Places.processGeofenceEvent(geofencingEvent)
}
```

## processRegionEvent

Passes a `CLRegion` and a `PlacesRegionEvent` to be processed by the Places extension.

Calling this method will result in an `Event` being dispatched to the SDK's `EventHub`. This enables rule processing based on the triggering region event.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func processRegionEvent(_ regionEvent: PlacesRegionEvent,
                               forRegion region: CLRegion)
```

#### Example

```swift
let region = CLCircularRegion(center: CLLocationCoordinate2D(latitude: 40.3886845, longitude: -111.8284979),
                              radius: 100,
                              identifier: "877677e4-3004-46dd-a8b1-a609bd65a428")

Places.processRegionEvent(.entry, forRegion: region)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) processRegionEvent: (AEPRegionEventType) eventType
                  forRegion: (nonnull CLRegion*) region;
```

#### Example

```objc
CLCircularRegion *region = [[CLCircularRegion alloc] initWithCenter:CLLocationCoordinate2DMake(40.3886845, -111.8284979)
                                                             radius:100
                                                         identifier:@"877677e4-3004-46dd-a8b1-a609bd65a428"];

[AEPMobilePlaces processRegionEvent:AEPPlacesRegionEventEntry forRegion:region];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.registerExtension();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.registerExtension()
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```swift
MobileCore.registerExtensions([Places.self])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```objc
[AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:nil];
```

## setAccuracyAuthorization

Sets the accuracy authorization status in the Places extension.

The value provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location accuracy authorization for this device.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setAccuracyAuthorization(_ accuracy: CLAccuracyAuthorization)
```

#### Example

```swift
Places.setAccuracyAuthorization(.fullAccuracy)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setAccuracyAuthorization: (CLAccuracyAuthorization) accuracy;
```

#### Example

```objc
[AEPMobilePlaces setAccuracyAuthorization:CLAccuracyAuthorizationFullAccuracy];
```

## setAuthorizationStatus

Sets the authorization status in the Places extension.

The status provided is stored in the Places shared state, and is for reference only. Calling this method does not impact the actual location authorization status for this device.

<InlineAlert variant="info" slots="text"/>

This method should only be called from the `CLLocationManagerDelegate` protocol method [locationManagerDidChangeAuthorization(\_:)](https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setAuthorizationStatus(final PlacesAuthorizationStatus status);
```

#### Example

```java
Places.setAuthorizationStatus(PlacesAuthorizationStatus.ALWAYS);
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Places.setAuthorizationStatus(PlacesAuthorizationStatus.ALWAYS)
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setAuthorizationStatus(status: CLAuthorizationStatus)
```

#### Example

```swift
// in the class implementing CLLocationManagerDelegate:

func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
    Places.setAuthorizationStatus(status: manager.authorizationStatus)
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) setAuthorizationStatus: (CLAuthorizationStatus) status;
```

#### Example

```objc
// in the class implementing CLLocationManagerDelegate:

- (void)locationManagerDidChangeAuthorization:(CLLocationManager *)manager {
    [AEPMobilePlaces setAuthorizationStatus:manager.authorizationStatus];
}
```

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
