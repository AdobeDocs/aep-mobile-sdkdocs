<Variant platform="android" api="clear" repeat="6"/>

#### Java

**Example**

```java
Places.clear();
```

#### Kotlin

**Example**

```java
Places.clear()
```

<Variant platform="ios" api="clear" repeat="10"/>

#### Swift

**Syntax**

```swift
static func clear()
```

**Example**

```swift
Places.clear()
```

#### Objective-C

**Syntax**

```objc
+ (void) clear;
```

**Example**

```objc
[AEPMobilePlaces clear];
```

<Variant platform="android" api="extension-version" repeat="6"/>

#### Java

**Example**

```java
String placesExtensionVersion = Places.extensionVersion();
```

#### Kotlin

**Example**

```java
val placesExtensionVersion: String = Places.extensionVersion()
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let placesVersion = Places.extensionVersion
```

#### Objective-C

**Syntax**

```objc
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objc
NSString *placesVersion = [AEPMobilePlaces extensionVersion];
```

<Variant platform="android" api="get-current-points-of-interest" repeat="6"/>

#### Java

**Example**

```java
Places.getCurrentPointsOfInterest(new AdobeCallback<List<PlacesPOI>>() {
    @Override
    public void call(List<PlacesPOI> pois) {
        // use the obtained POIs that the device is within
        processUserWithinPois(pois);
    }
});
```

#### Kotlin

**Example**

```java
Places.getCurrentPointsOfInterest() { pois -> 
    // use the obtained POIs that the device is within
    processUserWithinPois(pois)
}
```

<Variant platform="ios" api="get-current-points-of-interest" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getCurrentPointsOfInterest(_ closure: @escaping ([PointOfInterest]) -> Void)
```

**Example**

```swift
Places.getCurrentPointsOfInterest() { currentPois in
    print("currentPois: (currentPois)")
}
```

#### Objective-C

**Syntax**

```objc
+ (void) getCurrentPointsOfInterest: ^(NSArray<AEPPlacesPoi*>* _Nonnull pois) closure;
```

**Example**

```objc
[AEPMobilePlaces getCurrentPointsOfInterest:^(NSArray<AEPPlacesPoi *> *pois) {
    NSLog(@"currentPois: %@", pois);
}];
```

<Variant platform="android" api="get-last-known-location" repeat="6"/>

#### Java

**Example**

```java
Places.getLastKnownLocation(new AdobeCallback<Location>() {
    @Override
    public void call(Location lastLocation) {
        // do something with the last known location
        processLastKnownLocation(lastLocation);
    }
});
```

#### Kotlin

**Example**

```java
Places.getLastKnownLocation() { lastLocation -> 
    // do something with the last known location
    processLastKnownLocation(lastLocation)
}
```

<Variant platform="ios" api="get-last-known-location" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getLastKnownLocation(_ closure: @escaping (CLLocation?) -> Void)
```

**Example**

```swift
Places.getLastKnownLocation() { location in
    if let location = location {
        print("location returned from closure: ((location.coordinate.latitude), (location.coordinate.longitude))")
    }
}
```

#### Objective-C

**Syntax**

```objc
+ (void) getLastKnownLocation: ^(CLLocation* _Nullable lastLocation) closure;
```

**Example**

```objc
[AEPMobilePlaces getLastKnownLocation:^(CLLocation *location) {
    if (location) {
        NSLog(@"location returned from closure: (%f, %f)", location.coordinate.latitude, location.coordinate.longitude);
    }    
}];
```

<Variant platform="android" api="get-nearby-points-of-interest" repeat="8"/>

#### Java

**Syntax**

```java
public static void getNearbyPointsOfInterest(@NonNull final Location location,
    final int limit,
    @NonNull final AdobeCallback<List<PlacesPOI>> successCallback,
    @NonNull final AdobeCallback<PlacesRequestError> errorCallback);
```

**Example**

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

#### Kotlin

**Example**

```java
Places.getNearbyPointsOfInterest(currentLocation, 10, { pois -> 
    // do required processing with the returned nearbyPoi array
    startMonitoringPois(pois);
}, { error -> 
    // look for the placesRequestError and handle the error accordingly
    handleError(placesRequestError);
})
```

<Variant platform="ios" api="get-nearby-points-of-interest" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getNearbyPointsOfInterest(forLocation location: CLLocation,
                                      withLimit limit: UInt,
                                      closure: @escaping ([PointOfInterest], PlacesQueryResponseCode) -> Void)
```

**Example**

```swift
let location = CLLocation(latitude: 40.4350229, longitude: -111.8918356)
Places.getNearbyPointsOfInterest(forLocation: location, withLimit: 10) { (nearbyPois, responseCode) in    
    print("responseCode: (responseCode.rawValue) - nearbyPois: (nearbyPois)")
}
```

#### Objective-C

**Syntax**

```objc
+ (void) getNearbyPointsOfInterest: (nonnull CLLocation*) currentLocation
                             limit: (NSUInteger) limit
                          callback: ^ (NSArray<AEPPlacesPoi*>* _Nonnull, AEPPlacesQueryResponseCode) closure;
```

**Example**

```objc
CLLocation *location = [[CLLocation alloc] initWithLatitude:40.4350229 longitude:-111.8918356];

[AEPMobilePlaces getNearbyPointsOfInterest:location
                                     limit:10
                                  callback:^(NSArray<AEPPlacesPoi *> *pois, AEPPlacesQueryResponseCode responseCode) {
    NSLog(@"responseCode: %ld", (long)responseCode);
    NSLog(@"nearbyPois: %@", pois);
}];
```

<Variant platform="android" api="process-geofence" repeat="8"/>

#### Java

**Syntax**

```java
public static void processGeofence(final Geofence geofence, final int transitionType);
```

**Example**

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

#### Kotlin

**Example**

```java
fun onHandleIntent(intent: Intent) {
    val geofencingEvent = GeofencingEvent.fromIntent(intent)

    val geofences = geofencingEvent.getTriggeringGeofences()

    if (!geofences.isEmpty()) {
        Places.processGeofence(geofences.first(), geofencingEvent.getGeofenceTransition())
    }
}
```

<Variant platform="android" api="process-geofence-event" repeat="8"/>

#### Java

**Syntax**

```java
public static void processGeofenceEvent(@NonNull final GeofencingEvent geofencingEvent);
```

**Example**

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

#### Kotlin

**Example**

```java
fun onHandleIntent(intent: Intent) {
    val geofencingEvent = GeofencingEvent.fromIntent(intent)
    // Call the Places API to process information
    Places.processGeofenceEvent(geofencingEvent)
}
```

<Variant platform="ios" api="process-region-event" repeat="10"/>

#### Swift

**Syntax**

```swift
static func processRegionEvent(_ regionEvent: PlacesRegionEvent,
                               forRegion region: CLRegion)
```

**Example**

```swift
let region = CLCircularRegion(center: CLLocationCoordinate2D(latitude: 40.3886845, longitude: -111.8284979),
                              radius: 100,
                              identifier: "877677e4-3004-46dd-a8b1-a609bd65a428")

Places.processRegionEvent(.entry, forRegion: region)
```

#### Objective-C

**Syntax**

```objc
+ (void) processRegionEvent: (AEPRegionEventType) eventType
                  forRegion: (nonnull CLRegion*) region;
```

**Example**

```objc
CLCircularRegion *region = [[CLCircularRegion alloc] initWithCenter:CLLocationCoordinate2DMake(40.3886845, -111.8284979)
                                                             radius:100
                                                         identifier:@"877677e4-3004-46dd-a8b1-a609bd65a428"];

[AEPMobilePlaces processRegionEvent:AEPPlacesRegionEventEntry forRegion:region];
```

<Variant platform="android" api="register-extension" repeat="6"/>

#### Java

**Example**

```java
Places.registerExtension();
```

#### Kotlin

**Example**

```java
Places.registerExtension()
```

<Variant platform="ios" api="register-extension" repeat="4"/>

#### Swift

**Example**

```swift
MobileCore.registerExtensions([Places.self])
```

#### Objective-C

**Example**

```objc
[AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:nil];
```

<Variant platform="ios" api="set-accuracy-authorization" repeat="10"/>

#### Swift

**Syntax**

```swift
static func setAccuracyAuthorization(_ accuracy: CLAccuracyAuthorization)
```

**Example**

```swift
Places.setAccuracyAuthorization(.fullAccuracy)
```

#### Objective-C

**Syntax**

```objc
+ (void) setAccuracyAuthorization: (CLAccuracyAuthorization) accuracy;
```

**Example**

```objc
[AEPMobilePlaces setAccuracyAuthorization:CLAccuracyAuthorizationFullAccuracy];
```

<Variant platform="android" api="set-authorization-status" repeat="8"/>

#### Java

**Syntax**

```java
public static void setAuthorizationStatus(final PlacesAuthorizationStatus status);
```

**Example**

```java
Places.setAuthorizationStatus(PlacesAuthorizationStatus.ALWAYS);
```

#### Kotlin

**Example**

```java
Places.setAuthorizationStatus(PlacesAuthorizationStatus.ALWAYS)
```

<Variant platform="ios" api="set-authorization-status" repeat="10"/>

#### Swift

**Syntax**

```swift
static func setAuthorizationStatus(status: CLAuthorizationStatus)
```

**Example**

```swift
// in the class implementing CLLocationManagerDelegate:

func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
    Places.setAuthorizationStatus(status: manager.authorizationStatus)
}
```

#### Objective-C

**Syntax**

```objc
+ (void) setAuthorizationStatus: (CLAuthorizationStatus) status;
```

**Example**

```objc
// in the class implementing CLLocationManagerDelegate:

- (void)locationManagerDidChangeAuthorization:(CLLocationManager *)manager {
    [AEPMobilePlaces setAuthorizationStatus:manager.authorizationStatus];
}
```