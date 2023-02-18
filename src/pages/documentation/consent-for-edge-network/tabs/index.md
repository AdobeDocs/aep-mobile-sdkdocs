import Alerts from '../../resources/alerts.md'

<Variant platform="android" task="download" repeat="5"/>

1. Add the Mobile Core and Edge extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:edge:2.+'
implementation 'com.adobe.marketing.mobile:edgeidentity:2.+'
implementation 'com.adobe.marketing.mobile:edgeconsent:2.+'
```

<Alerts query="platform=android-gradle&componentClass=InlineNestedAlert"/>

2. Import the Mobile Core and Edge extensions in your Application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.edge.consent.Consent;
```

<Variant platform="ios" task="download" repeat="7"/>

1. Add the Mobile Core and Edge extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore'
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
    pod 'AEPEdgeConsent'
end
```

2. Import the Mobile Core and Edge libraries:

**Swift**

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import AEPEdgeConsent
```

**Objective-C**

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPEdgeConsent;
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

```java
public class MainApp extends Application {

  private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";

	@Override
	public void onCreate() {
		super.onCreate();

		MobileCore.setApplication(this);
		MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

		MobileCore.registerExtensions(
			Arrays.asList(Consent.EXTENSION, Identity.EXTENSION, Edge.EXTENSION),
			o -> Log.d("MainApp", "Adobe Experience Platform Mobile SDK was initialized")
		);
	}
}
```

#### Kotlin

```java
class MainApp : Application() {

    override fun onCreate() {
        super.onCreate()

        MobileCore.setApplication(this)
        MobileCore.configureWithAppID("YOUR_APP_ENVIRONMENT_ID")

        val extensions = listOf(Consent.EXTENSION, Identity.EXTENSION, Edge.EXTENSION)
        MobileCore.registerExtensions(extensions) {
            Log.d("MainApp", "Adobe Experience Platform Mobile SDK was initialized")
        }
    }

}
```

<Variant platform="ios" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Edge.self, Consent.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
  ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileEdgeConsent.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```