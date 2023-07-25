This example uses `static` constant strings that were provided in the `trackBeacon` code sample above.

```java
void clearCurrentBeacon() {
    UserProfile.removeUserAttribute(BEACON_MAJOR);
    UserProfile.removeUserAttribute(BEACON_MINOR);
    UserProfile.removeUserAttribute(BEACON_UUID);
    UserProfile.removeUserAttribute(BEACON_PROXIMITY);
}
```
