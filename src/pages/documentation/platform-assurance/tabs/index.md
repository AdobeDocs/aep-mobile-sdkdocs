<Variant platform="android" task="import-library" repeat="4"/>

1. Add the following libraries in your project's `build.gradle` file:

```java
implementation 'com.adobe.marketing.mobile:core:1+'
implementation 'com.adobe.marketing.mobile:assurance:1+'
```

2. Import the Assurance library along with the other Mobile SDK libraries:

```java
import com.adobe.marketing.mobile.Assurance;
import com.adobe.marketing.mobile.MobileCore;
```

<Variant platform="ios-aep" task="import-library" repeat="7"/>

Add the library to your project via your [Cocoapods](https://cocoapods.org/pods/AEPAssurance) `Podfile`:

```pod
pod 'AEPCore','~> 3.0'
pod 'AEPAssurance','~> 3.0'
```

Import the Assurance extension along with the other Adobe Mobile SDK extensions:

#### Swift

```swift
import AEPCore
import AEPAssurance
```

#### Objective-C

```objectivec
@import AEPCore;
@import AEPAssurance;
```

<Variant platform="ios-acp" task="import-library" repeat="7"/>

Add the library to your project via your [Cocoapods](https://cocoapods.org/pods/AEPAssurance) `Podfile`:

```pod
pod 'ACPCore'
pod 'AEPAssurance','~> 1.0'
```

Import the Assurance extension along with the other Adobe Mobile extensions:

#### Swift

```swift
import ACPCore
import AEPAssurance
```

#### Objective-C

```objectivec
#import "ACPCore.h"
#import "AEPAssurance.h"
```

<Variant platform="react-native" task="import-library" repeat="13"/>

1. Install the AEP Assurance package.

```bash
npm install @adobe/react-native-aepassurance
```

2. Link the module.

**React Native 0.60+**

[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.

**React Native &lt;= 0.59**

```bash
react-native link @adobe/react-native-aepassurance
```

**Note** For `iOS` using `cocoapods`, run:

```bash
cd ios/ && pod install
```

3. Import the extension.

```jsx
import {AEPAssurance} from '@adobe/react-native-aepassurance';
```

4. Get the extension version.

```jsx
AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEPAssurance version: " + version));
```

<Variant platform="flutter" task="import-library" repeat="7"/>

#### JavaScript

1. Install the AEP Assurance package.

Installation instructions can be found in the [Flutter documentation](https://pub.dev/packages/flutter_assurance/install).

2. Import the extension.

```dart
import 'package:flutter_assurance/flutter_assurance.dart';
```

3. Get the extension version.

```dart
String version = await FlutterAEPAssurance.extensionVersion;
```

<Variant platform="cordova" task="import-library" repeat="5"/>

#### JavaScript

1. After creating your Cordova app and adding the Android and iOS platforms, the AEPAssurance extension for Cordova can be added with this command:

```js
cordova plugin add https://github.com/adobe/cordova-aepassurance.git
```

2. Get the extension version.

```jsx
AEPAssurance.extensionVersion(function(version) {  
    console.log("AEPAssurance version: " + version);
}, function(error) {  
    console.log(error);  
});
```

<Variant platform="unity" task="import-library" repeat="5"/>

#### C#

1. After importing the [AEPAssurance.unitypackage](https://github.com/adobe/unity-aepassurance/tree/master/bin), the AEP Assurance extension for Unity can be added with the following code in the MainScript:

```csharp
using com.adobe.marketing.mobile;
```

2. Get the extension version.

```csharp
AEPAssurance.extensionVersion();
```

<Variant platform="xamarin" task="import-library" repeat="5"/>

#### C#

1. After adding the [iOS](https://www.nuget.org/packages/Adobe.AEPAssurance.iOS/) or [Android](https://www.nuget.org/packages/Adobe.AEPAssurance.Android/) AEP Assurance NuGet package, the Assurance extension can be added by this import statement:

```csharp
using Com.Adobe.Marketing.Mobile;
```

2. Get the extension version.

```csharp
AEPAssurance.ExtensionVersion();
```

<Variant platform="android" task="register-assurance" repeat="7"/>

To start using the extension library, you must first register the extension with the [Mobile Core](../mobile-core/index.md) extension.

#### Java

Register the extension when you register other extensions.

<InlineAlert variant="info" slots="text"/>

"yourAppId", mentioned below, is found in the Data Collection UI "[Mobile Install Instructions](../mobile-core/configuration/index.md#configure-with-app-id-per-environment)". When inside of "Publishing Flow", select on the small gray box next to "Environment" dropdown.
   
![](./assets/index/install-instructions.png)

```java
    public class MobileApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        MobileCore.setApplication(this);

        try {
        // register other necessary extensions
        Assurance.registerExtension();            
        MobileCore.start(new AdobeCallback() {
            @Override
            public void call(final Object o) {
                MobileCore.configureWithAppID("yourAppId");
            }});
        } catch (Exception e) {
        // Log the exception
        }
    }
    }
```