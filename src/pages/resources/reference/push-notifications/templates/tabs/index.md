---
noIndex: true
---

<Variant platform="android" template="setup" repeat="3"/>

In order for the SDK to handle these push templates, the application **must** call `AEPMessagingService.handleRemoteMessage` from `onMessageReceived` in the class implementing `FirebaseMessagingService`.

Below is an example of where to call the new API:

```java
public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (AEPMessagingService.handleRemoteMessage(this, remoteMessage)) {
            // Campaign extension has handled the notification
        } else {
            // Handle notification from other sources
        }
    }
}
```

<Variant platform="ios" template="setup" repeat="1"/>

### TODO
