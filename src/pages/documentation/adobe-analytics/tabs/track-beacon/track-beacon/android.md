In this method, the `proximity` parameter is an `int` that represents the various distances:

* 0 - Unknown
* 1 - Immediate
* 2 - Near
* 3 - Far

```java
static final String BEACON_MAJOR = "a.beacon.major";
static final String BEACON_MINOR = "a.beacon.minor";
static final String BEACON_UUID = "a.beacon.uuid";
static final String BEACON_PROXIMITY = "a.beacon.prox";

void trackBeacon(final String beaconUUID, final String major, final String minor, final int proximity, final Map<String, String> cdata) {
    final HashMap<String, String> contextData = cdata == null ? new HashMap<String, String>() : new HashMap<String, String>(cdata);

    if (major != null && !major.isEmpty()) {
        contextData.put(BEACON_MAJOR, major);
        UserProfile.updateUserAttribute(BEACON_MAJOR, major);
    } else {
        UserProfile.removeUserAttribute(BEACON_MAJOR);
    }

    if (minor != null && !minor.isEmpty()) {
        contextData.put(BEACON_MINOR, minor);
        UserProfile.updateUserAttribute(BEACON_MINOR, minor);
    } else {
        UserProfile.removeUserAttribute(BEACON_MINOR);
    }

    if (beaconUUID != null && !beaconUUID.isEmpty()) {
        contextData.put(BEACON_UUID, beaconUUID);
        UserProfile.updateUserAttribute(BEACON_UUID, beaconUUID);
    } else {
        UserProfile.removeUserAttribute(BEACON_UUID);
    }

    contextData.put(BEACON_PROXIMITY, String.valueOf(proximity));
    UserProfile.updateUserAttribute(BEACON_PROXIMITY, String.valueOf(proximity));

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
