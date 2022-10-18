This example uses `static` constant strings that were provided in the `trackBeacon` code sample above.

```java
void clearCurrentBeacon() {
    UserProfile.removeUserAttribute(ACP_BEACON_MAJOR);
    UserProfile.removeUserAttribute(ACP_BEACON_MINOR);
    UserProfile.removeUserAttribute(ACP_BEACON_UUID);
    UserProfile.removeUserAttribute(ACP_BEACON_PROXIMITY);
}
```