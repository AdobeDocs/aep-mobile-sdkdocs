Currently, `CLBeacon` is only available in iOS. The sample code contains the necessary checks to ensure OS compatibility.

#### Objective-C

```objectivec
#if TARGET_OS_IOS
static NSString* const ACP_BEACON_MAJOR = @"a.beacon.major";
static NSString* const ACP_BEACON_MINOR = @"a.beacon.minor";
static NSString* const ACP_BEACON_UUID = @"a.beacon.uuid";
static NSString* const ACP_BEACON_PROXIMITY = @"a.beacon.prox";

+ (void) trackBeacon:(CLBeacon *)beacon data:(NSDictionary*)data {
    NSMutableDictionary *contextData = data ? [data mutableCopy] : [@{} mutableCopy];

    if (beacon.major) {
        contextData[ACP_BEACON_MAJOR] = [beacon.major stringValue];
        [ACPUserProfile updateUserAttribute:ACP_BEACON_MAJOR withValue:[beacon.major stringValue]];
    } else {
        [ACPUserProfile removeUserAttribute:ACP_BEACON_MAJOR];
    }

    if (beacon.minor) {
        contextData[ACP_BEACON_MINOR] = [beacon.minor stringValue];
        [ACPUserProfile updateUserAttribute:ACP_BEACON_MINOR withValue:[beacon.minor stringValue]];
    } else {
        [ACPUserProfile removeUserAttribute:ACP_BEACON_MINOR];
    }

    if (beacon.proximityUUID.UUIDString) {
        contextData[ACP_BEACON_UUID] = beacon.proximityUUID.UUIDString;
        [ACPUserProfile updateUserAttribute:ACP_BEACON_UUID withValue:beacon.proximityUUID.UUIDString];
    } else {
        [ACPUserProfile removeUserAttribute:ACP_BEACON_UUID];
    }

    switch (beacon.proximity) {
        case CLProximityImmediate:
            contextData[ACP_BEACON_PROXIMITY] = @"1";
            break;
        case CLProximityNear:
            contextData[ACP_BEACON_PROXIMITY] = @"2";
            break;
        case CLProximityFar:
            contextData[ACP_BEACON_PROXIMITY] = @"3";
            break;
        case CLProximityUnknown:
        default:
            contextData[ACP_BEACON_PROXIMITY] = @"0";
    }
    [ACPUserProfile updateUserAttribute:ACP_BEACON_PROXIMITY withValue:contextData[ACP_BEACON_PROXIMITY]];

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

#### Swift

```swift
#if TARGET_OS_IOS
private let ACP_BEACON_MAJOR = "a.beacon.major"
private let ACP_BEACON_MINOR = "a.beacon.minor"
private let ACP_BEACON_UUID = "a.beacon.uuid"
private let ACP_BEACON_PROXIMITY = "a.beacon.prox"

class func trackBeacon(_ beacon: CLBeacon?, data: [AnyHashable : Any]?) {
    var contextData = data != nil ? data : [:]

    if beacon?.major != nil {
        contextData?[ACP_BEACON_MAJOR] = beacon?.major.stringValue ?? ""
        ACPUserProfile.updateUserAttribute(ACP_BEACON_MAJOR, withValue: beacon?.major.stringValue ?? "")
    } else {
        ACPUserProfile.removeUserAttribute(ACP_BEACON_MAJOR)
    }

    if beacon?.minor != nil {
        contextData?[ACP_BEACON_MINOR] = beacon?.minor.stringValue ?? ""
        ACPUserProfile.updateUserAttribute(ACP_BEACON_MINOR, withValue: beacon?.minor.stringValue ?? "")
    } else {
        ACPUserProfile.removeUserAttribute(ACP_BEACON_MINOR)
    }

    if beacon?.proximityUUID.uuidString != nil {
        contextData?[ACP_BEACON_UUID] = beacon?.proximityUUID.uuidString ?? ""
        ACPUserProfile.updateUserAttribute(ACP_BEACON_UUID, withValue: beacon?.proximityUUID.uuidString)
    } else {
        ACPUserProfile.removeUserAttribute(ACP_BEACON_UUID)
    }

    switch beacon?.proximity {
        case .immediate?:
            contextData?[ACP_BEACON_PROXIMITY] = "1"
        case .near?:
            contextData?[ACP_BEACON_PROXIMITY] = "2"
        case .far?:
            contextData?[ACP_BEACON_PROXIMITY] = "3"
        case .unknown?:
            fallthrough
        default:
            contextData?[ACP_BEACON_PROXIMITY] = "0"
    }
    ACPUserProfile.updateUserAttribute(ACP_BEACON_PROXIMITY, withValue: contextData?[ACP_BEACON_PROXIMITY])

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