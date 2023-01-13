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

<Variant platform="react-native" api="clear" repeat="4"/>

**Syntax**

```typescript
clear(): void
```

**Example**

```typescript
Places.clear();
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

<Variant platform="react-native" api="extension-version" repeat="4"/>

**Syntax**

```typescript
extensionVersion(): Promise<string>
```

**Example**

```typescript
const version = await Places.extensionVersion();
console.log(`AdobeExperienceSDK: Places version: ${version}`);
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

<Variant platform="react-native" api="get-current-points-of-interest" repeat="4"/>

**Syntax**

```typescript
getCurrentPointsOfInterest(): Promise<Array<PlacesPOI>>
```

**Example**

```typescript
const pois = await Places.getCurrentPointsOfInterest();
console.log('AdobeExperienceSDK: Places pois: ' + pois);
);
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

<Variant platform="react-native" api="get-last-known-location" repeat="4"/>

**Syntax**

```typescript
getLastKnownLocation(): Promise<PlacesLocation>
```

**Example**

```typescript
const location = await Places.getLastKnownLocation();
console.log('AdobeExperienceSDK: Places location: ' + location)
);
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

<Variant platform="react-native" api="get-nearby-points-of-interest" repeat="4"/>

**Syntax**

```typescript
getNearbyPointsOfInterest(location, <limit>): Promise<Array<PlacesPOI>>
```

**Example**

```typescript
let location = new PlacesLocation(<latitude>, <longitude>, <optional altitude>, <optional speed>, <optional accuracy>);

try {
  const pois = await Places.getNearbyPointsOfInterest(location, <limit>);
  console.log(`AdobeExperienceSDK: Places pois: ${pois}`)
} catch(error) {
  console.log(`AdobeExperienceSDK: Places error: ${error}`
}
```

<Variant platform="ios" api="process-region-event" repeat="4"/>

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

<Variant platform="react-native" api="process-region-event" repeat="1"/>

Missing?

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

<Variant platform="react-native" api="register-extension" repeat="1"/>

Please refer to the native code tabs to learn how to register the Places extension.

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

<Variant platform="react-native" api="set-accuracy-authorization" repeat="1"/>

Missing????

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

<Variant platform="react-native" api="set-authorization-status" repeat="4"/>

**Syntax**

```typescript
setAuthorizationStatus(authStatus?: PlacesAuthStatus): void;
```

**Example**

```typescript
Places.setAuthorizationStatus(PlacesAuthStatus.ALWAYS);
Places.setAuthorizationStatus(PlacesAuthStatus.DENIED);
Places.setAuthorizationStatus(PlacesAuthStatus.RESTRICTED);
Places.setAuthorizationStatus(PlacesAuthStatus.WHEN_IN_USE);
Places.setAuthorizationStatus(PlacesAuthStatus.UNKNOWN);
```
