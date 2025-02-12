---
noIndex: true
---

<Variant platform="android" task="add" repeat="10"/>

1. Add the `Identity` library to your project using the app's gradle file.

#### Kotlin

```kotlin
implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))
implementation("com.adobe.marketing.mobile:core")
implementation("com.adobe.marketing.mobile:identity")
```

#### Groovy

```java
implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')
implementation 'com.adobe.marketing.mobile:core'
implementation 'com.adobe.marketing.mobile:identity'
```

<InlineNestedAlert variant="warning" header="false" iconPosition="left">

Using dynamic dependency versions is **not** recommended for production apps. Please read the [managing Gradle dependencies guide](../../resources/manage-gradle-dependencies.md) for more information.

</InlineNestedAlert>

2. Import the Identity and MobileCore extensions in your application's main activity.

#### Java

Import the library:

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
```

<Variant platform="ios" task="add" repeat="7"/>

1. Add the Mobile Core and Identity extensions to your project using Cocoapods. Add following pods in your `Podfile`:

```ruby
use_frameworks!
target 'YourTargetApp' do
    pod 'AEPCore', '~> 5.0'
    pod 'AEPIdentity', '~> 5.0'
end
```

2. Import the Identity library.

#### Swift

```swift
import AEPCore
import AEPIdentity
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPIdentity;
```

<!--- <Variant platform="react-native" task="add" repeat="2"/>
#### JavaScript
```jsx
import {ACPIdentity} from '@adobe/react-native-acpcore';
```
<Variant platform="flutter" task="add" repeat="2"/>
#### Dart
```dart
import 'package:flutter_acpcore/flutter_acpidentity.dart';
``` --->

<Variant platform="android" task="register" repeat="3"/>

After calling the `setApplication()` method in the `onCreate()` method, register the Identity extension.

#### Java

```java
public class MobileApp extends Application {
@Override
public void onCreate() {
super.onCreate();
     MobileCore.setApplication(this);
     List<Class<? extends Extension>> extensions = Arrays.asList(Identity.EXTENSION, ...);
     MobileCore.registerExtensions(extensions, o -> {
        // Any other post registration processing
    });
  }
}
```

<Variant platform="ios" task="register" repeat="6"/>

Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Swift

When including both Identity and Identity for Edge Network extensions, register the extensions using their full Swift module names, such as `AEPIdentity.Identity.self`.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
     MobileCore.registerExtensions([Identity.self, ...], {
       ...
     })
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, ...] completion:^{
   ...
 }];
 return YES;
}
```

<!--- <Variant platform="react-native" task="register" repeat="1"/>

When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs.

<Variant platform="flutter" task="register" repeat="1"/>

When using Flutter, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs. --->
