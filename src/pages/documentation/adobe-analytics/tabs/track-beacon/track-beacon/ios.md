Currently, `CLBeacon` is only available in iOS. The sample code contains the necessary checks to ensure OS compatibility.

#### Swift

```swift
import AEPCore
import AEPUserProfile

#if os(iOS)
import CoreLocation

private let BEACON_MAJOR = "a.beacon.major"
private let BEACON_MINOR = "a.beacon.minor"
private let BEACON_UUID = "a.beacon.uuid"
private let BEACON_PROXIMITY = "a.beacon.prox"

class func trackBeacon(_ beacon: CLBeacon?, data: [String: String]) {
    var contextData: [String: String] = data
    var userAttributes: [String: Any] = [:]

    if beacon?.major != nil {
        contextData[BEACON_MAJOR] = beacon?.major.stringValue ?? ""
        userAttributes[BEACON_MAJOR] = beacon?.major.stringValue ?? ""
    } else {
        UserProfile.removeUserAttributes(attributeNames: [BEACON_MAJOR])
    }

    if beacon?.minor != nil {
        contextData[BEACON_MINOR] = beacon?.minor.stringValue ?? ""
        userAttributes[BEACON_MINOR] = beacon?.minor.stringValue ?? ""
    } else {
        UserProfile.removeUserAttributes(attributeNames:[BEACON_MINOR])
    }

    if beacon?.proximityUUID.uuidString != nil {
        contextData[BEACON_UUID] = beacon?.proximityUUID.uuidString ?? ""
        userAttributes[BEACON_UUID] = beacon?.proximityUUID.uuidString ?? ""
    } else {
        UserProfile.removeUserAttributes(attributeNames: [BEACON_UUID])
    }

    switch beacon?.proximity {
    case .immediate?:
        contextData[BEACON_PROXIMITY] = "1"
    case .near?:
        contextData[BEACON_PROXIMITY] = "2"
    case .far?:
        contextData[BEACON_PROXIMITY] = "3"
    case .unknown?:
        fallthrough
    default:
        contextData[BEACON_PROXIMITY] = "0"
    }
    userAttributes[BEACON_PROXIMITY] = contextData[BEACON_PROXIMITY] ?? ""
    UserProfile.updateUserAttributes(attributeDict: userAttributes)

    let eventData:[String: Any] = [
        "trackinternal": true,
        "action": "Beacon",
        "contextdata": contextData
    ]

    var event = Event(name: "TrackBeacon",
                      type: "com.adobe.eventType.generic.track",
                      source: "com.adobe.eventSource.requestContent",
                      data: eventData)
     MobileCore.dispatch(event: event)
}
#endif
```

#### Objective-C
```objectivec
@import AEPCore;
@import AEPUserProfile;
@import CoreLocation;

#if TARGET_OS_IOS
static NSString* const BEACON_MAJOR = @"a.beacon.major";
static NSString* const BEACON_MINOR = @"a.beacon.minor";
static NSString* const BEACON_UUID = @"a.beacon.uuid";
static NSString* const BEACON_PROXIMITY = @"a.beacon.prox";

+ (void) trackBeacon:(CLBeacon *)beacon data:(NSDictionary*)data {
    NSMutableDictionary *contextData = data ? [data mutableCopy] : [@{} mutableCopy];
    NSMutableDictionary *userAttributes = [@{} mutableCopy];

    if (beacon.major) {
        contextData[BEACON_MAJOR] = [beacon.major stringValue];
        userAttributes[BEACON_MAJOR] = [beacon.major stringValue];
    } else {
        [AEPMobileUserProfile removeUserAttributesWithAttributeNames: @[BEACON_MAJOR]];
    }

    if (beacon.minor) {
        contextData[BEACON_MINOR] = [beacon.minor stringValue];
        userAttributes[BEACON_MINOR] = [beacon.minor stringValue];
    } else {
        [AEPMobileUserProfile removeUserAttributesWithAttributeNames: @[BEACON_MINOR]];
    }

    if (beacon.proximityUUID.UUIDString) {
        contextData[BEACON_UUID] = beacon.proximityUUID.UUIDString;
        userAttributes[BEACON_UUID] = beacon.proximityUUID.UUIDString;
    } else {
        [AEPMobileUserProfile removeUserAttributesWithAttributeNames: @[BEACON_UUID]];
    }

    switch (beacon.proximity) {
        case CLProximityImmediate:
            contextData[BEACON_PROXIMITY] = @"1";
            break;
        case CLProximityNear:
            contextData[BEACON_PROXIMITY] = @"2";
            break;
        case CLProximityFar:
            contextData[BEACON_PROXIMITY] = @"3";
            break;
        case CLProximityUnknown:
        default:
            contextData[BEACON_PROXIMITY] = @"0";
    }
    userAttributes[BEACON_PROXIMITY] = contextData[BEACON_PROXIMITY];
    [AEPMobileUserProfile updateUserAttributesWithAttributeDict:userAttributes];

    NSDictionary *eventData = @{
                                @"trackinternal":@(YES),
                                @"action":@"Beacon",
                                @"contextdata":contextData
                                };

    AEPEvent *event = [[AEPEvent alloc] initWithName:@"TrackBeacon"
                                                type:@"com.adobe.eventType.generic.track"
                                              source:@"com.adobe.eventSource.requestContent"
                                                data:eventData];
    [AEPMobileCore dispatch:event];
}
#endif

```
