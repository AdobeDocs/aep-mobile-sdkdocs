<Variant language="aep-swift" api="clear" repeat="1"/>

```swift
static func clear()
```

<Variant language="aep-objc" api="clear" repeat="1"/>

```objc
+ (void) clear;
```

<Variant language="acp-objc" api="clear" repeat="1"/>

```objc
+ (void) clear;
```

<Variant language="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant language="aep-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant language="acp-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant language="aep-swift" api="get-current-points-of-interest" repeat="1"/>

```swift
static func getCurrentPointsOfInterest(_ closure: @escaping ([PointOfInterest]) -> Void)
```

<Variant language="aep-objc" api="get-current-points-of-interest" repeat="1"/>

```objc
+ (void) getCurrentPointsOfInterest: ^(NSArray<AEPPlacesPoi*>* _Nonnull pois) closure;
```

<Variant language="acp-objc" api="get-current-points-of-interest" repeat="1"/>

```objc
+ (void) getCurrentPointsOfInterest: (nullable void (^) (NSArray<ACPPlacesPoi*>* _Nullable userWithinPoi)) callback;
```

<Variant language="aep-swift" api="get-last-known-location" repeat="1"/>

```swift
static func getLastKnownLocation(_ closure: @escaping (CLLocation?) -> Void)
```

<Variant language="aep-objc" api="get-last-known-location" repeat="1"/>

```objc
+ (void) getLastKnownLocation: ^(CLLocation* _Nullable lastLocation) closure;
```

<Variant language="acp-objc" api="get-last-known-location" repeat="2"/>

If the SDK has no last known location, it will pass a `CLLocation` object with a value of `999.999` for latitude and longitude to the callback.

```objc
+ (void) getLastKnownLocation: (nullable void (^) (CLLocation* _Nullable lastLocation)) callback;
```

<Variant language="aep-swift" api="get-nearby-points-of-interest" repeat="2"/>

Rather than providing an overloaded method, a single method supports retrieval of nearby Points of Interest. The provided closure accepts two parameters, representing the resulting nearby points of interest (if any) and the response code.

```swift
static func getNearbyPointsOfInterest(forLocation location: CLLocation,
                                      withLimit limit: UInt,
                                      closure: @escaping ([PointOfInterest], PlacesQueryResponseCode) -> Void)
```

<Variant language="aep-objc" api="get-nearby-points-of-interest" repeat="1"/>

```objc
+ (void) getNearbyPointsOfInterest: (nonnull CLLocation*) currentLocation
                             limit: (NSUInteger) limit
                          callback: ^ (NSArray<AEPPlacesPoi*>* _Nonnull, AEPPlacesQueryResponseCode) closure;
```

<Variant language="acp-objc" api="get-nearby-points-of-interest" repeat="2"/>

Two `getNearbyPointsOfInterest` methods exist. The overloaded version allows the caller to provide an `errorCallback` parameter in the case of failure.

```objc
// without error handling
+ (void) getNearbyPointsOfInterest: (nonnull CLLocation*) currentLocation
                             limit: (NSUInteger) limit
                          callback: (nullable void (^) (NSArray<ACPPlacesPoi*>* _Nullable nearbyPoi)) callback;

// with error handling
+ (void) getNearbyPointsOfInterest: (nonnull CLLocation*) currentLocation
                             limit: (NSUInteger) limit
                          callback: (nullable void (^) (NSArray<ACPPlacesPoi*>* _Nullable nearbyPoi)) callback
                     errorCallback: (nullable void (^) (ACPPlacesRequestError result)) errorCallback;
```

<Variant language="aep-swift" api="process-region-event" repeat="2"/>

The order of parameters has the `PlacesRegionEvent` first, and the `CLRegion` that triggered the event second. This aligns better with Swift API naming conventions.

```swift
static func processRegionEvent(_ regionEvent: PlacesRegionEvent,
                               forRegion region: CLRegion)
```

<Variant language="aep-objc" api="process-region-event" repeat="1"/>

```objc
+ (void) processRegionEvent: (AEPRegionEventType) eventType
                  forRegion: (nonnull CLRegion*) region;
```

<Variant language="acp-objc" api="process-region-event" repeat="2"/>

The order of parameters has the `CLRegion` that triggered the event first, and the `ACPRegionEventType` second.

```objc
+ (void) processRegionEvent: (nonnull CLRegion*) region
         forRegionEventType: (ACPRegionEventType) eventType;
```

<Variant language="aep-swift" api="register-extension" repeat="2"/>

Registration occurs by passing `Places` to the `MobileCore.registerExtensions` API.

```swift
MobileCore.registerExtensions([Places.self])
```

<Variant language="aep-objc" api="register-extension" repeat="2"/>

Registration occurs by passing `AEPMobilePlaces` to the `[AEPMobileCore registerExtensions:completion:]` API.

```objc
[AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:nil];
```

<Variant language="acp-objc" api="register-extension" repeat="1"/>

```objc
+ (void) registerExtension;
```

<Variant language="aep-swift" api="set-authorization-status" repeat="1"/>

```swift
static func setAuthorizationStatus(status: CLAuthorizationStatus)
```

<Variant language="aep-objc" api="set-authorization-status" repeat="1"/>

```objc
+ (void) setAuthorizationStatus: (CLAuthorizationStatus) status;
```

<Variant language="acp-objc" api="set-authorization-status" repeat="1"/>

```objc
+ (void) setAuthorizationStatus: (CLAuthorizationStatus) status;
```