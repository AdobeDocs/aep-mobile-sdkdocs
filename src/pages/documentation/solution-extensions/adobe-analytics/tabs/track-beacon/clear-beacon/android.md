---
noIndex: true
---

This example uses `static` constant strings that were provided in the `trackBeacon` code sample above.

```java
void clearCurrentBeacon() {
 UserProfile.removeUserAttributes(Arrays.asList(BEACON_MAJOR, BEACON_MINOR, BEACON_UUID, BEACON_PROXIMITY));
}
```
