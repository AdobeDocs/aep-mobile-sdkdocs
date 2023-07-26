Currently, `CLBeacon` is only available in iOS. The sample code contains the necessary checks to ensure OS compatibility.

#### Swift

```swift
#if TARGET_OS_IOS
private let BEACON_MAJOR = "a.beacon.major"
private let BEACON_MINOR = "a.beacon.minor"
private let BEACON_UUID = "a.beacon.uuid"
private let BEACON_PROXIMITY = "a.beacon.prox"

class func trackBeacon(_ beacon: CLBeacon?, data: [AnyHashable : Any]?) {
    var contextData = data != nil ? data : [:]

    if beacon?.major != nil {
        contextData?[BEACON_MAJOR] = beacon?.major.stringValue ?? ""
        ACPUserProfile.updateUserAttribute(BEACON_MAJOR, withValue: beacon?.major.stringValue ?? "")
    } else {
        ACPUserProfile.removeUserAttribute(BEACON_MAJOR)
    }

    if beacon?.minor != nil {
        contextData?[BEACON_MINOR] = beacon?.minor.stringValue ?? ""
        ACPUserProfile.updateUserAttribute(BEACON_MINOR, withValue: beacon?.minor.stringValue ?? "")
    } else {
        ACPUserProfile.removeUserAttribute(BEACON_MINOR)
    }

    if beacon?.proximityUUID.uuidString != nil {
        contextData?[BEACON_UUID] = beacon?.proximityUUID.uuidString ?? ""
        ACPUserProfile.updateUserAttribute(BEACON_UUID, withValue: beacon?.proximityUUID.uuidString)
    } else {
        ACPUserProfile.removeUserAttribute(BEACON_UUID)
    }

    switch beacon?.proximity {
        case .immediate?:
            contextData?[BEACON_PROXIMITY] = "1"
        case .near?:
            contextData?[BEACON_PROXIMITY] = "2"
        case .far?:
            contextData?[BEACON_PROXIMITY] = "3"
        case .unknown?:
            fallthrough
        default:
            contextData?[BEACON_PROXIMITY] = "0"
    }
    ACPUserProfile.updateUserAttribute(BEACON_PROXIMITY, withValue: contextData?[BEACON_PROXIMITY])

    let eventData = [
    "trackinternal": NSNumber(value: true),
    "action": "Beacon",
    "contextdata": contextData
]

var event: ACPExtensionEvent? = nil
do {
    event = try ACPExtensionEvent(name: "TrackBeacon", type: "com.adobe.eventType.generic.track", source: "com.adobe.eventSource.requestContent", data: eventData)
} catch {
}
do {
    try ACPCore.dispatchEvent(event)
} catch {
}

#endif
```

#### Objective-C

```objectivec
#if TARGET_OS_IOS
static NSString* const BEACON_MAJOR = @"a.beacon.major";
static NSString* const BEACON_MINOR = @"a.beacon.minor";
static NSString* const BEACON_UUID = @"a.beacon.uuid";
static NSString* const BEACON_PROXIMITY = @"a.beacon.prox";

+ (void) trackBeacon:(CLBeacon *)beacon data:(NSDictionary*)data {
    NSMutableDictionary *contextData = data ? [data mutableCopy] : [@{} mutableCopy];

    if (beacon.major) {
        contextData[BEACON_MAJOR] = [beacon.major stringValue];
        [ACPUserProfile updateUserAttribute:BEACON_MAJOR withValue:[beacon.major stringValue]];
    } else {
        [ACPUserProfile removeUserAttribute:BEACON_MAJOR];
    }

    if (beacon.minor) {
        contextData[BEACON_MINOR] = [beacon.minor stringValue];
        [ACPUserProfile updateUserAttribute:BEACON_MINOR withValue:[beacon.minor stringValue]];
    } else {
        [ACPUserProfile removeUserAttribute:BEACON_MINOR];
    }

    if (beacon.proximityUUID.UUIDString) {
        contextData[BEACON_UUID] = beacon.proximityUUID.UUIDString;
        [ACPUserProfile updateUserAttribute:BEACON_UUID withValue:beacon.proximityUUID.UUIDString];
    } else {
        [ACPUserProfile removeUserAttribute:BEACON_UUID];
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
    [ACPUserProfile updateUserAttribute:BEACON_PROXIMITY withValue:contextData[BEACON_PROXIMITY]];

    NSDictionary *eventData = @{
                                @"trackinternal":@(YES),
                                @"action":@"Beacon",
                                @"contextdata":contextData
                                };

    ACPExtensionEvent *event = [ACPExtensionEvent extensionEventWithName:@"TrackBeacon"
                                                                    type:@"com.adobe.eventType.generic.track"
                                                                  source:@"com.adobe.eventSource.requestContent"
                                                                    data:eventData
                                                                   error:nil];
    [ACPCore dispatchEvent:event error:nil];
}
#endif
```
