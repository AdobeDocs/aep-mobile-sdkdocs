<Variant platform="android" task="install" repeat="2"/>

In-app messages are enabled in Messaging extension version `2.0.1` or newer.

```groovy
implementation('com.adobe.marketing.mobile:messaging:2.0.+')
```

<Variant platform="ios" task="install" repeat="2"/>

The example below shows how to point to the `staging` branch in a Cocoapods `Podfile`:

```
pod 'AEPMessaging', :git => 'https://github.com/adobe/aepsdk-messaging-ios.git', :branch => 'staging'
```

<Variant platform="android" task="register" repeat="2"/>

#### Java

```java
import android.app.Application;

import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.Messaging;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.edge.identity.Identity;

public class MainApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        MobileCore.setApplication(this);
        MobileCore.setLogLevel(LoggingMode.VERBOSE);

        try {
            Messaging.registerExtension();
            Identity.registerExtension();
            Edge.registerExtension();

            MobileCore.start(new AdobeCallback() {
                @Override
                public void call(Object o) {
                    MobileCore.configureWithAppID("MY_APP_ID");
                }
            });
        } catch (Exception e) {
            //Log the exception
        }
    }
}
```

<Variant platform="ios" task="register" repeat="3"/>

In the `application(_: didFinishLaunchingWithOptions:)` method in the `AppDelegate`:

#### Swift

```swift
import AEPMessaging
import AEPCore
import AEPEdge
import AEPEdgeIdentity

class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // optionally enable trace logging
        MobileCore.setLogLevel(.trace)

        // create a list of extensions that will be registered
        let extensions = [
            Messaging.self,
            AEPEdgeIdentity.Identity.self,
            Edge.self
        ]

        MobileCore.registerExtensions(extensions) {            
            // use the App ID assigned for this application from Adobe Data Collection (formerly Adobe Launch)
            MobileCore.configureWith(appId: "MY_APP_ID")
        }

        return true
    }
}
```