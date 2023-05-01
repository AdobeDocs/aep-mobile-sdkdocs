<Variant platform="android" task="unable-to-open-app" repeat="1"/>

Follow the [Android documention](https://developer.android.com/training/app-links/deep-linking) on information about how to set up a deeplink.

<Variant platform="ios" task="unable-to-open-app" repeat="1"/>

Follow the [Apple developer](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app) documentation to set a custom URL scheme for your application.

<Variant platform="android" task="register-assurance" repeat="2"/>

#### Java

```java
public class MobileApp extends Application {
   @Override
   public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);
      MobileCore.configureWithAppId("yourAppId");
      try {
         Assurance.registerExtension();
         MobileCore.start(null);
      } catch (Exception e) {
         // Log the exception
      }
   }
  }
```

<Variant platform="ios" task="register-assurance" repeat="2"/>

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     ACPCore.configure(withAppId: "yourAppId")   
     AEPAssurance.registerExtension() // <-- register AEPAssurance with Core
     ACPCore.start(nil)
     // Override point for customization after application launch. 
     return true;
}
```

<Variant platform="android" task="copy-link" repeat="1"/>

```text
AdobeExperienceSDK: Assurance - Not a valid Assurance deeplink, Ignoring start session API call. URL :  <deeplink URL>
```

<Variant platform="ios" task="copy-link" repeat="1"/>

```text
AdobeExperienceSDK: Assurance - Not a valid Assurance deeplink, Ignoring start session API call. URL :  <deeplink URL>
```

<Variant platform="android" task="invalid-configuration-sample-logs" repeat="1"/>

```text
W/AdobeExperienceSDK: Assurance - Assurance connection closed. Reason: Invalid Configuration, Description: The Experience Cloud organization identifier is unavailable from the SDK. Ensure SDK configuration is setup correctly. See documentation for more detail.
```

<Variant platform="ios" task="invalid-configuration-sample-logs" repeat="1"/>

```text
[AdobeExperienceSDK ERROR <AEPAssurance>]: Invalid Configuration, Description: The Experience Cloud organization identifier is unavailable from the SDK. Ensure SDK configuration is setup correctly. See documentation for more detail.
```

<Variant platform="android" task="unauthorized-access-sample-logs" repeat="1"/>

```text
W/AdobeExperienceSDK: Assurance - Assurance connection closed. Reason: Unauthorized Access, Description: The Experience Cloud organization identifier does not match with that of the Assurance session. Ensure the right Experience Cloud organization is being used. See documentation for more detail.
```

<Variant platform="ios" task="unauthorized-access-sample-logs" repeat="1"/>

```text
[AdobeExperienceSDK ERROR <AEPAssurance>]: Assurance connection closed. Reason: Unauthorized Access, Description: The Experience Cloud organization identifier does not match with that of the Assurance session. Ensure the right Experience Cloud organization is being used. See documentation for more detail.
```

<Variant platform="android" task="timeout-sample-logs" repeat="1"/>

```text
D/AdobeExperienceSDK: Assurance - Timeout - Assurance did not receive deeplink to start Assurance session within 5 seconds. Shutting down Assurance extension
```

<Variant platform="ios" task="timeout-sample-logs" repeat="1"/>

```text
[AdobeExperienceSDK DEBUG <AEPAssurance>]: Timeout - Assurance extension did not receive session url. Shutting down from processing any further events.
```