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

<Variant platform="ios-acp" task="download" repeat="7"/>

1. Add the Mobile Core and Places extensions to your project using CocoaPods. Add the following pods in your `Podfile`:

```swift
use_frameworks!
target 'YourTargetApp' do
   pod 'ACPCore', '~> 2.0'
   pod 'ACPPlaces', '~> 1.0'
end
```

2. Import the Mobile Core and Places modules:

**Swift**

```swift
// AppDelegate.swift
import ACPCore
import ACPPlaces
```

**Objective-C**

```objectivec
// AppDelegate.h
#import "ACPCore.h"
#import "ACPPlaces.h"
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
        MobileCore.configureWith(appId: "yourLaunchEnvironmentID")
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
    [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];
    ...
}
```

<Variant platform="ios-acp" task="register" repeat="4"/>

**Swift**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ACPPlaces.registerExtension()
    ACPCore.configure(withAppId: "yourLaunchEnvironmentID")
    ACPCore.start()
  })
  ...
}
```

**Objective-C**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPPlaces registerExtension];
    [ACPCore configureWithAppId:@"yourLaunchEnvironmentID"];    
    [ACPCore start];  
    ...
}
```