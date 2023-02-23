<Variant platform="android" task="add" repeat="6"/>

#### Java

Add the Signal extension and its dependency, the [Mobile Core](../index.md) extension to your project using the app's Gradle file.

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../manage-gradle-dependencies.md) for more information. 

</InlineNestedAlert>

```java
implementation 'com.adobe.marketing.mobile:core:2.+'
implementation 'com.adobe.marketing.mobile:signal:2.+'
```

Import the Signal and MobileCore extensions in your application's main activity.


```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
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

<Variant platform="android" task="register" repeat="3"/>

After calling the `setApplication()` method in the `onCreate()` method, register the Signal extension.

#### Java

```java
public class MobileApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);

        List<Class<? extends Extension>> extensions = Arrays.asList(Signal.EXTENSION, ...);
        MobileCore.registerExtensions(extensions, o -> {
            // Any other post registration processing
        });
    }
}
```

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
