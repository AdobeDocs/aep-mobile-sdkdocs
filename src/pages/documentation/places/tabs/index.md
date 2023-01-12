<Variant platform="android" task="download" repeat="5"/>

**Java**

1. Add the Mobile Core and Places extensions to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:core:1.+'
implementation 'com.adobe.marketing.mobile:places:1.+'
```

2. Import the Mobile Core and Places extensions in your Application class.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Places;
```

<Variant platform="ios-aep" task="download" repeat="7"/>

1. Add the Mobile Core and Places extensions to your project using CocoaPods. Add the following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
   pod 'AEPCore'
   pod 'AEPPlaces'       
end
```

2. Import the Mobile Core and Places modules:

**Swift**

```swift
// AppDelegate.swift
import AEPCore
import AEPPlaces
```

**Objective-C**

```objectivec
// AppDelegate.h
@import AEPCore;
@import AEPPlaces;
```

<Variant platform="react-native" task="download" repeat="4"/>

1. Install the `@adobe/react-native-aepplaces` package:

```bash
# NPM
npm install @adobe/react-native-aepplaces

# Yarn
yarn add @adobe/react-native-aepplaces
```

2. Import the Places libraries. 

```typescript
import { 
  Places,
  PlacesAuthStatus,
  PlacesGeofence,
  PlacesGeofenceTransitionType,
  PlacesLocation,
  PlacesPOI
} from '@adobe/react-native-aepplaces';
```

<Variant platform="android" task="register" repeat="2"/>

**Java**

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        try {            
            Places.registerExtension();
            // register other extensions
            MobileCore.start(new AdobeCallback () {
                @Override
                public void call(Object o) {
                    MobileCore.configureWithAppID("yourAppId");
                }
            });    
        } catch (Exception e) {
            //Log the exception
         }
    }
}
```

<Variant platform="ios-aep" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Places.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
    ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:^{
        ...
    }];
    [AEPMobileCore configureWithAppId: @"yourAppId"];
    ...
}
```

<Variant platform="react-native" task="register" repeat="1"/>

Please refer to the native code tabs to learn how to register the Places extension.
