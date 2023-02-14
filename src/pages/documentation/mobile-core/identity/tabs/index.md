<Variant platform="android" task="add" repeat="3"/>

#### Java

Import the library:

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.Extension;
```

<Variant platform="ios" task="add" repeat="4"/>

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
public class MobiletApp extends Application {
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

<Variant platform="android" task="implement" repeat="5"/>

#### Java

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](#appendtourl-appendvisitorinfoforurl):

```java
Identity.appendVisitorInfoForURL("https://example.com", new AdobeCallback<String>() {
    @Override
    public void call(String urlWithAdobeVisitorInfo) {
        //handle the new URL here
        //For example, open the URL on the device browser
        //
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(urlWithAdobeVisitorInfo));
        startActivity(i);
    }
});
```

Alternately, starting in SDK version 1.4.0 (Identity version 1.1.0), you can call [getUrlVariables](#geturlvariables) and build your own URL:

```java
Identity.getUrlVariables(new AdobeCallback<String>() {
    @Override
    public void call(String stringWithAdobeVisitorInfo) {
        //handle the URL query parameter string here
        //For example, open the URL on the device browser
        //
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse("https://example.com?" + urlWithAdobeVisitorInfo));
        startActivity(i);
    }
});
```

<Variant platform="ios" task="implement" repeat="10"/>

To append visitor information to the URL that is being used to open the web view, call [appendToUrl](./api-reference.md#appendtourl-appendvisitorinfoforurl):

#### Swift

```swift
let url = URL(string: "https://example.com")
Identity.appendTo(url: url) { appendedUrl, error in
    if error != nil {
        // handle error here
    } else {
        // handle appended url here
    }
}
```

#### Objective-C

```objectivec
NSURL *sampleUrl = [NSURL URLWithString:@"https://example.com"];
[AEPMobileIdentity appendToUrl:sampleUrl completion:^(NSURL * _Nullable appendedUrl, NSError *error) {
    if (error != nil) {
        // Handle error here
    } else {
        // Handle appended url here
    }
}];
```

Alternately, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

#### Swift

```swift
Identity.getUrlVariables { urlVariables, error in
    if error != nil {
        // handle error here
    } else {
        if let url = URL(string: "https://example.com?\(urlVariables ?? "")") {
            DispatchQueue.main.async {
                UIApplication.shared.open(url)
            }
        }
    }
}
```

#### Objective-C

```objectivec
[AEPMobileIdentity getUrlVariables:^(NSString * _Nullable urlVariables, NSError *error) {
    NSString *sampleURLString = @"https://example.com";
    if (error != nil) {
        // Handle variables being nil
    } else {
        NSString *stringWithData = [NSString stringWithFormat:@"%@?%@", sampleURLString, urlVariables];
        NSURL *appendedUrl = [NSURL URLWithString:stringWithData];
        dispatch_async(dispatch_get_main_queue(), ^{
            [[UIApplication sharedApplication] openURL:appendedUrl options:@{} completionHandler:nil];
        });
    }
}];
```

<!--- <Variant platform="react-native" task="implement" repeat="5"/>

#### JavaScript

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```jsx
ACPIdentity.appendVisitorInfoForURL("www.example.com").then(urlWithVistorData => console.log("Url with Visitor Data = " + urlWithVisitorData));
```

Alternately, starting with SDK version 1.0.5, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("query params = " + urlVariables));
```

<Variant platform="flutter" task="implement" repeat="5"/>

#### Dart

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("www.example.com");
} on PlatformException {
  log("Failed to append URL");
}
```

Alternately, starting with SDK version 1.0.0-beta.1, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
``` --->
