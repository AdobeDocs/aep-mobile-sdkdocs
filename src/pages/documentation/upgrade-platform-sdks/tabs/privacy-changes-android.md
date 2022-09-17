#### Android

**AEP SDK**

The syntax and usage examples for `setPrivacyStatus` are:

```
// syntax
public static void setPrivacyStatus(final MobilePrivacyStatus privacyStatus);

// usage
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN);
```

The syntax and usage examples for `getPrivacyStatus` are:

```
// syntax
void getPrivacyStatus(AdobeCallback<MobilePrivacyStatus> callback);

// usage
MobileCore.getPrivacyStatus(new AdobeCallback<MobilePrivacyStatus>() {
    @Override
    public void call(MobilePrivacyStatus status) {
          System.out.println("privacy status: " + status);
    }
});
```

The callback is invoked after the privacy status is available. If an instance of `AdobeCallbackWithError` is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the fail method is called with the appropriate `AdobeError`.