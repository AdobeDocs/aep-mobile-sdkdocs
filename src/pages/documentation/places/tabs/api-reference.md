<Variant language="swift" api="clear" repeat="4"/>

**Syntax**

```swift
static func clear()
```

**Example**

```swift
Places.clear()
```

<Variant language="objc" api="clear" repeat="4"/>

**Syntax**

```objc
+ (void) clear;
```

**Example**

```objc
[AEPMobilePlaces clear];
```

<Variant language="swift" api="extension-version" repeat="4"/>

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let placesVersion = Places.extensionVersion
```

<Variant language="objc" api="extension-version" repeat="4"/>

**Syntax**

```objc
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objc
NSString *placesVersion = [AEPMobilePlaces extensionVersion];
```

<Variant language="swift" api="get-current-points-of-interest" repeat="4"/>

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

<Variant language="objc" api="get-current-points-of-interest" repeat="4"/>

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

<Variant language="swift" api="get-last-known-location" repeat="4"/>

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

<Variant language="objc" api="get-last-known-location" repeat="4"/>

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

<Variant language="swift" api="get-nearby-points-of-interest" repeat="4"/>

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

<Variant language="objc" api="get-nearby-points-of-interest" repeat="4"/>

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

<Variant language="swift" api="process-region-event" repeat="4"/>

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

<Variant language="objc" api="process-region-event" repeat="4"/>

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

<Variant language="swift" api="register-extension" repeat="2"/>

**Example**

```swift
MobileCore.registerExtensions([Places.self])
```

<Variant language="objc" api="register-extension" repeat="2"/>

**Example**

```objc
[AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:nil];
```

<Variant language="swift" api="set-accuracy-authorization" repeat="4"/>

**Syntax**

```swift
static func setAccuracyAuthorization(_ accuracy: CLAccuracyAuthorization)
```

**Example**

```swift
Places.setAccuracyAuthorization(.fullAccuracy)
```

<Variant language="objc" api="set-accuracy-authorization" repeat="4"/>

**Syntax**

```objc
+ (void) setAccuracyAuthorization: (CLAccuracyAuthorization) accuracy;
```

**Example**

```objc
[AEPMobilePlaces setAccuracyAuthorization:CLAccuracyAuthorizationFullAccuracy];
```

<Variant language="swift" api="set-authorization-status" repeat="4"/>

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

<Variant language="objc" api="set-authorization-status" repeat="4"/>

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