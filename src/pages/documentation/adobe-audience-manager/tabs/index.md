<Variant platform="android" task="add" repeat="4"/>

#### Java

1. Add the library to your project.
2. Import the library.

```java
import com.adobe.marketing.mobile.*;
```

Audience Manager depends on the Identity extension and is automatically included in the Core pod. When manually installing the Audience Manager extension, ensure that you add the `identity-1.x.x.aar` library to your project.

<Variant platform="ios-aep" task="add" repeat="6"/>

1. Add the [Mobile Core](../mobile-core/index.md) and Audience extensions to your project using Cocoapods.
2. Add the following pods in your `Podfile`:

   ```ruby
    pod 'AEPCore'
    pod 'AEPAudience'
    pod 'AEPIdentity'
   ```

Please note that the Audience Manager extension depends on the Identity extension.

#### Swift

```swift
   import AEPCore
   import AEPAudience
   import AEPIdentity
```

#### Objective-C

```objectivec
   @import AEPCore;
   @import AEPAudience;
   @import AEPIdentity;
```

<Variant platform="ios-acp" task="add" repeat="6"/>

1. Add the library to your project via your `Podfile` by adding `pod 'ACPAudience'`
2. Import the Audience and Identity library, using the respective language.

Please note that the Audience Manager extension depends on the Identity extension, which is automatically included in the Core pod. If you are installing the Audience Manager extension manually, ensure you add the  `libACPIdentity_iOS.a` library to your project.

#### Swift

```swift
   import ACPCore
   import ACPAudience
```

#### Objective-C

```objectivec
  #import "ACPCore.h"
  #import "ACPAudience.h"
  #import "ACPIdentity.h"
```

<Variant platform="react-native" task="add" repeat="7"/>

#### JavaScript

1. Install Audience Manager in your project.

```jsx
npm install @adobe/react-native-acpaudience
react-native link @adobe/react-native-acpaudience
```

2. Import the extension.

```jsx
import {ACPAudience} from '@adobe/react-native-acpaudience';
```

3. Ensure the extension version is correct.

```jsx
ACPAudience.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAudience version: " + version));
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

Call the `setApplication()` method once in the `onCreate()` method of your main activity.

For example, your code might look like the following:

```java
public class AudiencetApp extends Application {

@Override
public void onCreate() {
     super.onCreate();
     MobileCore.setApplication(this);

     try {
         Audience.registerExtension(); //Register Audience Manager with Mobile Core
         Identity.registerExtension();
         MobileCore.start(null);
     } catch (Exception e) {
     //Log the exception
     }
  }
}
```

<Variant platform="ios-aep" task="register" repeat="6"/>

#### Swift

In your app's `_:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
  MobileCore.registerExtensions([Audience.self, Identity.self], {
  MobileCore.configureWith(appId: "yourAppId") 
 })  
 ...
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   [AEPMobileCore registerExtensions:@[AEPMobileAudience.class, AEPMobileIdentity.class] completion:^{
   [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```

<Variant platform="ios-acp" task="register" repeat="6"/>

#### Swift

In your app's `_:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  
 ACPIdentity.registerExtension()
 ACPAudience.registerExtension()
 ACPCore.start(nil)

 // Override point for customization after application launch.
 return true;
}
```

#### Objective-C

In your app's `application:didFinishLaunchingWithOptions` function, register the Audience Manager extension with the Mobile Core:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   [ACPIdentity registerExtension];
   [ACPAudience registerExtension];
   [ACPCore start:nil]

   // Override point for customization after application launch.
   return YES;
}
```

<Variant platform="react-native" task="register" repeat="3"/>

#### JavaScript

```jsx
import {ACPAudience} from '@adobe/react-native-acpcore';

initSDK() {
    ACPAudience.registerExtension();
}
```