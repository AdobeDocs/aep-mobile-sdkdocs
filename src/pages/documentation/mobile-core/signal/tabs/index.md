<Variant platform="android" task="add" repeat="5"/>

#### Java

Add the [Mobile Core](../index.md) extension to your project using the app's Gradle file.

```java
implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
```

Import the Signal extension in your application's main activity.

```java
import com.adobe.marketing.mobile.*;
```

<Variant platform="ios" task="add" repeat="8"/>

​Add the AEPSignal extension and it's dependency, the [Mobile Core](../index.md) extension to your project using Cocoapods.

Add following pods in your `Podfile`:

```pod
pod 'AEPCore','~> 3.0'
pod 'AEPSignal','~> 3.0'
```

Import the Signal libraries:

#### Swift

```swift
import AEPCore
import AEPSignal
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPSignal;
```

<!--- <Variant platform="react-native" task="add" repeat="3"/>

#### JavaScript

Importing the Signal extension:

```jsx
import {ACPSignal} from '@adobe/react-native-acpcore';
```

<Variant platform="flutter" task="add" repeat="3"/>

#### Dart

Importing the Signal extension:

```dart
import 'package:flutter_acpcore/flutter_acpsignal.dart';
``` --->

<Variant platform="android" task="register" repeat="4"/>

#### Java

After calling the `setApplication()` method in the `onCreate()` method, register the Signal extension. If the registration was not successful, an `InvalidInitException` is thrown.

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);
        try {
            Signal.registerExtension();
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

Please note that the Signal extension is automatically included in the Mobile Core extension by Maven. When you manually install the Signal extension, ensure that you add the `signal-1.x.x.aar` library to your project.

<Variant platform="ios" task="register" repeat="5"/>

In your app's `application:didFinishLaunchingWithOptions`, register the Signal extension with Mobile Core:

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     MobileCore.registerExtensions([Signal.self, ...]) {
       MobileCore.configureWith(appId: "yourAppId")
       // Any other post registration processing
     }
     return true;
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, ...] completion:^{
        [AEPMobileCore configureWithAppId: @"yourAppId"];
        // Any other post registration processing
    }];
    return YES;
 }
```

<!--- <Variant platform="react-native" task="register" repeat="2"/>

#### JavaScript

When using React Native, registering Signal with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="flutter" task="register" repeat="2"/>

#### Dart

When using Flutter, registering Signal with Mobile Core should be done in native code which is shown under the Android and iOS tabs. --->
