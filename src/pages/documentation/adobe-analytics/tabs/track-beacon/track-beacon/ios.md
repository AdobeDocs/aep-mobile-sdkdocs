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

    if beacon?.major != nil {
        contextData[BEACON_MAJOR] = beacon?.major.stringValue ?? ""
        UserProfile.updateUserAttributes(attributeDict: [BEACON_MAJOR: beacon?.major.stringValue ?? ""])
    } else {
        UserProfile.removeUserAttributes(attributeNames: [BEACON_MAJOR])
    }

    if beacon?.minor != nil {
        contextData[BEACON_MINOR] = beacon?.minor.stringValue ?? ""
        UserProfile.updateUserAttributes(attributeDict: [BEACON_MINOR: beacon?.minor.stringValue ?? ""])
    } else {
        UserProfile.removeUserAttributes(attributeNames:[BEACON_MINOR])
    }

    if beacon?.proximityUUID.uuidString != nil {
        contextData[BEACON_UUID] = beacon?.proximityUUID.uuidString ?? ""
        UserProfile.updateUserAttributes(attributeDict: [BEACON_UUID: beacon?.proximityUUID.uuidString ?? ""])
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
    UserProfile.updateUserAttributes(attributeDict: [BEACON_PROXIMITY: contextData[BEACON_PROXIMITY] ?? ""])

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
