---
noIndex: true
---

<Variant platform="android" task="import" repeat="6"/>

#### Java

1. Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using the app's Gradle file.

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation "com.adobe.marketing.mobile:core"
implementation "com.adobe.marketing.mobile:edgeidentity"
implementation "com.adobe.marketing.mobile:edge"
implementation "com.adobe.marketing.mobile:messaging"
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

</InlineNestedAlert>

2. Import the Mobile Core, Edge, Edge Identity, and Messaging extensions in your application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.Messaging;
```

<Variant platform="ios" task="import" repeat="7"/>

1. Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using Cocoapods. Add the following pods to your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore'
    pod 'AEPEdge'
    pod 'AEPEdgeIdentity'
    pod 'AEPMessaging'
end
```

2. Import the Mobile Core, Edge, Edge Identity, and Messaging libraries:

#### Swift

```swift
// AppDelegate.swift
import AEPCore
import AEPEdge
import AEPEdgeIdentity
import AEPMessaging
```

#### Objective-C

```objc
// AppDelegate.h
@import AEPCore;
@import AEPEdge;
@import AEPEdgeIdentity;
@import AEPMessaging;
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
            Arrays.asList(Edge.EXTENSION, Identity.EXTENSION, Messaging.EXTENSION),
            o -> Log.d("MainApp", "Adobe Experience Platform Mobile SDK was initialized.")
        );
    }
}
```

#### Kotlin

```java
class MainApp : Application() {

  private var ENVIRONMENT_FILE_ID: String = "YOUR_APP_ENVIRONMENT_ID"

    override fun onCreate() {
        super.onCreate()

        MobileCore.setApplication(this)
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)

        MobileCore.registerExtensions(
          listOf(Edge.EXTENSION, Identity.EXTENSION, Messaging.EXTENSION)
        ) {
          Log.d("MainApp", "Adobe Experience Platform Mobile SDK was initialized.")
        }
    }

}
```

<Variant platform="ios" task="register" repeat="4"/>

#### Swift

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Identity.self, Edge.self, Messaging.self], {
        MobileCore.configureWith(appId: <ENVIRONMENT_FILE_ID>) // Replace <ENVIRONMENT_FILE_ID> with a String containing your own ID.
    })
  ...
}
```

#### Objective-C

```objc
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileMessaging.class] completion:^{
    [AEPMobileCore configureWithAppId: <ENVIRONMENT_FILE_ID>]; // Replace <ENVIRONMENT_FILE_ID> with a String containing your own ID.
  }];
  ...
}
```
