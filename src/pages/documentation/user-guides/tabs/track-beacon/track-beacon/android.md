In this method, the `proximity` parameter is an `int` that represents the various distances:

* 0 - Unknown
* 1 - Immediate
* 2 - Near
* 3 - Far

```java
static final String ACP_BEACON_MAJOR = "a.beacon.major";
static final String ACP_BEACON_MINOR = "a.beacon.minor";
static final String ACP_BEACON_UUID = "a.beacon.uuid";
static final String ACP_BEACON_PROXIMITY = "a.beacon.prox";

void trackBeacon(final String beaconUUID, final String major, final String minor, final int proximity, final Map<String, String> cdata) {
    final HashMap<String, String> contextData = cdata == null ? new HashMap<String, String>() : new HashMap<String, String>(cdata);

    if (major != null && !major.isEmpty()) {
        contextData.put(ACP_BEACON_MAJOR, major);
        UserProfile.updateUserAttribute(ACP_BEACON_MAJOR, major);
    } else {
        UserProfile.removeUserAttribute(ACP_BEACON_MAJOR);
    }

    if (minor != null && !minor.isEmpty()) {
        contextData.put(ACP_BEACON_MINOR, minor);
        UserProfile.updateUserAttribute(ACP_BEACON_MINOR, minor);
    } else {
        UserProfile.removeUserAttribute(ACP_BEACON_MINOR);
    }

    if (beaconUUID != null && !beaconUUID.isEmpty()) {
        contextData.put(ACP_BEACON_UUID, beaconUUID);
        UserProfile.updateUserAttribute(ACP_BEACON_UUID, beaconUUID);
    } else {
        UserProfile.removeUserAttribute(ACP_BEACON_UUID);
    }

    contextData.put(ACP_BEACON_PROXIMITY, String.valueOf(proximity));
    UserProfile.updateUserAttribute(ACP_BEACON_PROXIMITY, String.valueOf(proximity));

    final HashMap<String, Object> eventData = new HashMap<>();
    eventData.put("trackinternal", true);
    eventData.put("action", "Beacon");
    eventData.put("contextdata", contextData);

    final Event event = new Event.Builder("TrackBeacon", "com.adobe.eventType.generic.track", "com.adobe.eventSource.requestContent")
            .setEventData(eventData)
            .build();

    MobileCore.dispatchEvent(event, null);
}
```