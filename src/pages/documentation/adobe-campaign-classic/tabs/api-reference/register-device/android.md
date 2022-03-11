<InlineAlert variant="info" slots="text"/>

To prepare your app to handle push notifications, see the tutorial on [setting up a Firebase Cloud Messaging client app on Android](https://firebase.google.com/docs/cloud-messaging/android/client). After you receive the Firebase Cloud Messaging (FCM) SDK registration token, send this token and the device information to Campaign Classic by using the `registerDevice` API.

The `registerDevice` API registers a device with your Campaign Classic registration server. It takes the FCM registration token as a parameter with a user key that identifies a user, such as an email address or a login name. You can also provide a map of the custom key-value pairs that you want to associate with the registration. A boolean value is returned in the callback, which signals whether the registration was successful.

#### Java

**Syntax**

```java
public static void registerDevice(final String token, final String userKey, final Map<String, Object> additionalParams, final AdobeCallback<Boolean> callback)
```

**Example**

```java
@Override
public void onNewToken(String token) {
    Log.d("TestApp", "Refreshed token: " + token);

    // If you want to send messages to this application instance or
    // manage this app's subscriptions on the server side, send the
    // Instance ID token to your app server.
    if (token != null) {
                Log.d("TestApp", "FCM SDK registration token received : " + token);
                // Create a map of additional parameters
                Map<String, Object> additionalParams = new HashMap<String, Object>();
                additionalParams.put("name", "John");
                additionalParams.put("serial", 12345);
                additionalParams.put("premium", true);
                // Send the registration info
                CampaignClassic.registerDevice(token, "john@example.com",additionalParams,new AdobeCallback<Boolean>() {
                    @Override
                    public void call(final Boolean status) {
                        Log.d("TestApp", "Registration Status: " + status);
                    }
                });
      }
}
```