---
title: Mobile Core Identity API reference
description: An API reference for the Mobile Core Identity extension.
keywords:
- API reference
- Identity
- Identity for Mobile Core
- Mobile Core
---

# Identity API reference

## appendToURL / appendVisitorInfoForURL

This API appends Adobe visitor information to the query component of the specified URL.

If the provided URL is null or empty, it is returned as is. Otherwise, the following information is added to the query component of the specified URL and is returned in the callback function:

* The `adobe_mc` attribute is a URL encoded list that contains:
  * `MCMID` - Experience Cloud ID (ECID)
  * `MCORGID` - Experience Cloud Org ID
  * `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../../solution/adobe-analytics/api-reference.md#gettrackingidentifier)
  * `TS` - A timestamp taken when this request was made
* The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../../solution/adobe-analytics/api-reference.md#setvisitoridentifier).

This API is designed to handle the following URL formats:

```text
scheme://authority/path?query=param#fragment
```

In this example, the Adobe visitor data is appended as:

```text
scheme://authority/path?query=param&adobe_mc=TS%3Dtimestamp%7CMCMID%3Decid%7CMCORGID%3Decorgid%40AdobeOrg#fragment
```

Similarly, URLs without a query component:

```text
scheme://authority/path#fragment
```

The Adobe visitor data is appended as:

```text
scheme://authority/path?adobe_mc=TS%3Dtimestamp%7CMCMID%3Decid%7CMCORGID%3Decorgid%40AdobeOrg#fragment
```

In these examples the `adobe_mc` parameters are separated by "|" (pipe) and are encoded.

```text
adobe_mc = TS=XXXXXX|MCMID=XXXXXX|MCAID=XXXXXX|MCORGID=XXXXXX@AdobeOrg
```

If your application uses more complicated URLs, such as Angular URLs, you should use [getUrlVariables](#geturlvariables).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the attributes from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

### Syntax

```java
public static void appendVisitorInfoForURL(
            @NonNull final String baseURL, @NonNull final AdobeCallback<String> callback)
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is invoked after the updated URL is available.

### Example

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

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func appendTo(url: URL?, completion: @escaping (URL?, Error?) -> Void)
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _completion_ is invoked after the updated _URL_ is available or _Error_ if an unexpected exception occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

### Example

```swift
Identity.appendTo(url: URL(string: "https://example.com")) { appendedURL, error in
  if let error = error {
    // handle error
  } else {
    // handle the appended url here
    if let appendedURL = appendedURL {
      // APIs which update the UI must be called from main thread
      DispatchQueue.main.async {
        self.webView.load(URLRequest(url: appendedURL!))
      }
    } else {
      // handle error, nil appendedURL
    }
  }
})
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) appendToUrl: (NSURL * _Nullable baseUrl) completion: ^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) completion;
```

### Example

```objectivec
NSURL* url = [NSURL URLWithString:@"https://example.com"];
[AEPMobileIdentity appendToUrl:url completion:^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the appended url here
    if (urlWithVisitorData) {
      // APIs which update the UI must be called from main thread
      dispatch_async(dispatch_get_main_queue(), ^{
        [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
      }
    } else {
      // handle error, nil urlWithVisitorData
    }
  }
}];
```

\<!--- <Variant platform="react-native" api="append-to-url" repeat="6"/>

#### JavaScript
### Syntax
```jsx
appendVisitorInfoForURL(baseURL?: String): Promise<?string>;
```
* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
### Example
```jsx
ACPIdentity.appendVisitorInfoForURL("https://example.com").then(urlWithVistorData => console.log("AdobeExperenceSDK: Url with Visitor Data = " + urlWithVisitorData));
```

\<!--- React Native

<Tabs query="platform=react-native&api=append-to-url"/>

### Flutter

#### Dart

### Syntax

```dart
Future<String> appendToUrl (String url);
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
### Example

```dart
String result = "";
try {
  result = await FlutterACPIdentity.appendToUrl("https://example.com");
} on PlatformException {
  log("Failed to append URL");
}
``` --->
 ---\>

## extensionVersion

The `extensionVersion()` API returns the version of the Identity extension that is registered with the Mobile Core extension.

To get the version of the Identity extension, use the following code sample:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@NonNull
public static String extensionVersion();
```

### Example

```java
String identityExtensionVersion = Identity.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static var extensionVersion: String
```

### Example

```swift
let identityExtensionVersion  = Identity.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

### Example

```objectivec
NSString *identityVersion = [AEPMobileIdentity extensionVersion];
```

\<!--- <Variant platform="react-native" api="extension-version" repeat="2"/>
#### JavaScript
```jsx
ACPIdentity.extensionVersion().then(identityExtensionVersion => console.log("AdobeExperienceSDK: ACPIdentity version: " + identityExtensionVersion));
```

\<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

### Flutter

#### Dart
```dart
String identityExtensionVersion = FlutterACPIdentity.extensionVersion;
``` --->
 ---\>

## getExperienceCloudId

This API retrieves the Adobe Experience Cloud ID (ECID) that was generated when the app was initially launched and is stored in the Adobe Experience Cloud Identity Service.

This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the ECID from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

### Syntax

```java
public static void getExperienceCloudId(@NonNull final AdobeCallback<String> callback)
```

* _callback_ is invoked after the ECID is available.

### Example

```java
Identity.getExperienceCloudId(new AdobeCallback<String>() {
    @Override
    public void call(String id) {
         //Handle the ID returned here
    }
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(getExperienceCloudId:)
static func getExperienceCloudId(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ after the ECID is available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

### Example

```swift
Identity.getExperienceCloudId { ecid, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) getExperienceCloudId: ^(NSString * _Nullable ecid, NSError * _Nullable error) completion;
```

### Example

```objectivec
[AEPMobileIdentity getExperienceCloudId:^(NSString * _Nullable ecid, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}];
```

\<!--- <Variant platform="react-native" api="get-experience-cloud-id" repeat="5"/>
#### JavaScript
### Syntax
```jsx
getExperienceCloudId(): Promise<?string>;
```
### Example
```jsx
ACPIdentity.getExperienceCloudId().then(cloudId => console.log("AdobeExperienceSDK: CloudID = " + cloudId));
```

\<!--- React Native

<Tabs query="platform=react-native&api=get-experience-cloud-id"/>

### Flutter

#### Dart
### Syntax
```dart
Future<String> experienceCloudId;
```
### Example
```dart
String result = "";
try {
  result = await FlutterACPIdentity.experienceCloudId;
} on PlatformException {
  log("Failed to get experienceCloudId");
}
``` --->
 ---\>

## getIdentifiers

This API returns all customer identifiers that were previously synced with the Adobe Experience Cloud Identity Service.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the custom identifiers from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

### Syntax

```java
public static void getIdentifiers(@NonNull final AdobeCallback<List<VisitorID>> callback)
```

* _callback_ is invoked after the customer identifiers are available.

### Example

```java
Identity.getIdentifiers(new AdobeCallback<List<VisitorID>>() {
    @Override
    public void call(List<VisitorID> idList) {
         //Process the IDs here
    }

});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(getIdentifiers:)
static func getIdentifiers(completion: @escaping ([Identifiable]?, Error?) -> Void)
```

* _completion_ is invoked with a list of _Identifiable_ objects after the customer identifiers are available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

### Example

```swift
Identity.getIdentifiers { identifiers, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) getIdentifiers: ^(NSArray<id<AEPIdentifiables>> * _Nullable identifiers, NSError * _Nullable error) completion;
```

### Example

```objectivec
[[AEPMobileIdentity getIdentifiers:^(NSArray<id<AEPIdentifiable>> * _Nullable identifiers, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}];
```

\<!--- <Variant platform="react-native" api="get-identifiers" repeat="5"/>
#### JavaScript
### Syntax
```jsx
getIdentifiers(): Promise<Array<?ACPVisitorID>>;
```
### Example
```jsx
ACPIdentity.getIdentifiers().then(identifiers => console.log("AdobeExperienceSDK: Identifiers = " + identifiers));
```

\<!--- React Native

<Tabs query="platform=react-native&api=get-identifiers"/>

### Flutter

#### Dart
### Syntax
```dart
 Future<List<ACPMobileVisitorId>> identifiers;
```
### Example
```dart
List<ACPMobileVisitorId> result;
try {
  result = await FlutterACPIdentity.identifiers;
} on PlatformException {
  log("Failed to get identifiers");
}
``` --->
 ---\>

## getUrlVariables

This API gets the Adobe Experience Cloud Identity Service variables in URL query parameter form, and these variables will be consumed by the hybrid app. This method returns an appropriately formed string that contains the Experience Cloud Identity Service URL variables. There will be no leading (&) or (?) punctuation because the caller is responsible for placing the variables in their resulting URL in the correct location.

If an error occurs while retrieving the URL string, the callback handler will be called with a null value. Otherwise, the following information is added to the string that is returned in the callback:

* The `adobe_mc` attribute is an URL encoded list that contains:
  * `MCMID` - Experience Cloud ID (ECID)
  * `MCORGID` - Experience Cloud Org ID
  * `MCAID` - Analytics Tracking ID (AID), if available from the [Analytics extension](../../../solution/adobe-analytics/index.md)
  * `TS` - A timestamp taken when this request was made
* The optional `adobe_aa_vid` attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the [Analytics extension](../../../solution/adobe-analytics/index.md).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

This method was added in Core version 1.4.0 and Identity version 1.1.0.

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the attributes from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

### Syntax

```java
public static void getUrlVariables(final AdobeCallback<String> callback);
```

* _callback_ has an NSString value that contains the visitor identifiers as a query string after the service request is complete.

### Example

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

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(getUrlVariables:)
static func getUrlVariables(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ containing the visitor identifiers as a query string, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

### Example

```swift
Identity.getUrlVariables { (urlVariables, error) in
  if let error = error {
    // handle error
  } else {
    var urlStringWithVisitorData: String = "https://example.com"
    if let urlVariables: String = urlVariables {
      urlStringWithVisitorData.append("?" + urlVariables)
    }

    guard let urlWithVisitorData: URL = URL(string: urlStringWithVisitorData) else {
      // handle error, unable to construct URL
      return
    }
    // APIs which update the UI must be called from main thread
    DispatchQueue.main.async {
      self.webView.load(URLRequest(url: urlWithVisitorData))
    }
  }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) getUrlVariables: ^(NSString * _Nullable urlVariables, NSError * _Nullable error) completion;
```

### Example

```objectivec
[AEPMobileIdentity getUrlVariables:^(NSString * _Nullable urlVariables, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the URL query parameter string here
    NSString* urlString = @"https://example.com";
    NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
    NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
    // APIs which update the UI must be called from main thread
    dispatch_async(dispatch_get_main_queue(), ^{
      [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
    }
  }
}];
```

\<!--- <Variant platform="react-native" api="get-url-variables" repeat="6"/>
This method was added in react-native-acpcore v1.0.5.
#### JavaScript
### Syntax
```jsx
getUrlVariables(): Promise<?string>;
```
### Example
```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("AdobeExperenceSDK: query params = " + urlVariables));
```

\<!--- React Native

<Tabs query="platform=react-native&api=get-url-variables"/>

### Flutter

#### Dart
### Syntax
```dart
 Future<String> urlVariables;
```
### Example
```dart
String result = "";
try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
``` --->
 ---\>

## registerExtension

<InlineAlert variant="warning" slots="heading, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../api-reference.md#registerextensions) API instead.

The `registerExtension()` API registers the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

### Android Java

After calling the `setApplication()` method in the `onCreate()` method, register the extension. If the registration was not successful, an `InvalidInitException` is thrown.

```java
public class MobileApp extends Application {
@Override
public void onCreate() {
super.onCreate();
     MobileCore.setApplication(this);
     try {
         Identity.registerExtension();
     } catch (Exception e) {
         //Log the exception
     }
  }
}
```

## resetIdentities

Clears all identities stored in the Identity extension and generates a new Experience Cloud ID (ECID). Using this API does not remove the identifiers from the server-side service.

This is a destructive action, since once an ECID is removed it cannot be reused. The new ECID generated by this API can increase metrics like unique visitors when a new user profile is created.

Some example use cases for this API are:

* During debugging, to see how new ECIDs (and other identifiers paired with it) behave with existing rules and metrics.
* A last-resort reset for when an ECID should no longer be used.

This API is **not** recommended for:

* Resetting a user's privacy settings; see [Privacy and GDPR](../../../resources/privacy-and-gdpr.md).
* Removing existing custom identifiers; use the [`syncIdentifier`](#syncidentifier) API instead.
* Removing a previously synced advertising identifier after the advertising tracking settings were changed by the user; use the [`setAdvertisingIdentifier`](#setadvertisingidentifier) API instead.

See [`MobileCore.resetIdentities`](../api-reference.md#resetidentities) for more details.

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via the [Signals](../signal/index.md) extension, and is removed at uninstall.

<InlineAlert variant="info" slots="text"/>

If the current SDK privacy status is `optedout`, the advertising identifier is not set or stored.

### Android Java

<CodeBlock slots="heading, code" repeat="1" />

### Syntax

```java
public static void setAdvertisingIdentifier(@Nullable final String advertisingIdentifier)
```

* _advertisingIdentifier_ is a string that provides developers with a simple, standard system to track the Ads through their apps.

### Example

This is just an implementation example. For more information about advertising identifiers and how to handle them correctly in your mobile application, see [Google Play Services documentation about AdvertisingIdClient](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient).

This example requires Google Play Services to be configured in your mobile application. For instructions on how to import the Google Mobile Ads SDK and how to configure your ApplicationManifest.xml file, see [Google Mobile Ads SDK setup](https://developers.google.com/admob/android/quick-start).

```java
...
@Override
public void onResume() {
    super.onResume();
    ...
    new Thread(new Runnable() {
        @Override
        public void run() {
            String advertisingIdentifier = null;

            try {
                AdvertisingIdClient.Info adInfo = AdvertisingIdClient.getAdvertisingIdInfo(getApplicationContext());
                if (adInfo != null) {
                    if (!adInfo.isLimitAdTrackingEnabled()) {
                        advertisingIdentifier = adInfo.getId();
                    } else {
                        MobileCore.log(LoggingMode.DEBUG, "ExampleActivity", "Limit Ad Tracking is enabled by the user, cannot process the advertising identifier");
                    }
                }

            } catch (IOException e) {
                // Unrecoverable error connecting to Google Play services (e.g.,
                // the old version of the service doesn't support getting AdvertisingId).
                MobileCore.log(LoggingMode.DEBUG, "ExampleActivity", "IOException while retrieving the advertising identifier " + e.getLocalizedMessage());
            } catch (GooglePlayServicesNotAvailableException e) {
                // Google Play services is not available entirely.
                MobileCore.log(LoggingMode.DEBUG, "ExampleActivity", "GooglePlayServicesNotAvailableException while retrieving the advertising identifier " + e.getLocalizedMessage());
            } catch (GooglePlayServicesRepairableException e) {
                // Google Play services is not installed, up-to-date, or enabled.
                MobileCore.log(LoggingMode.DEBUG, "ExampleActivity", "GooglePlayServicesRepairableException while retrieving the advertising identifier " + e.getLocalizedMessage());
            }

            MobileCore.setAdvertisingIdentifier(advertisingIdentifier);
        }
    }).start();
}
```

To access IDFA and handle it correctly in your mobile application, see the [Apple developer documentation about IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager)

Starting iOS 14+, applications must use the [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) framework to request user authorization before using the Identifier for Advertising (IDFA).
### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(setAdvertisingIdentifier:)
public static func setAdvertisingIdentifier(_ identifier: String?)
```

* _identifier_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

### Example

```swift
import AdSupport
import AppTrackingTransparency
...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    ...
    if #available(iOS 14, *) {
       setAdvertisingIdentiferUsingTrackingManager()
    } else {
       // Fallback on earlier versions
       setAdvertisingIdentifierUsingIdentifierManager()
    }

}

func setAdvertisingIdentifierUsingIdentifierManager() {
    var idfa:String = "";
        if (ASIdentifierManager.shared().isAdvertisingTrackingEnabled) {
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString;
        } else {
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is disabled by the user, cannot process the advertising identifier.");
        }
        MobileCore.setAdvertisingIdentifier(idfa);
}

@available(iOS 14, *)
func setAdvertisingIdentiferUsingTrackingManager() {
    ATTrackingManager.requestTrackingAuthorization { (status) in
        var idfa: String = "";

        switch (status) {
        case .authorized:
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString
        case .denied:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is denied by the user, cannot process the advertising identifier.")
        case .notDetermined:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is not determined, cannot process the advertising identifier.")
        case .restricted:
            Log.debug(label: "AppDelegateExample",
                      "Advertising Tracking is restricted by the user, cannot process the advertising identifier.")
        }

        MobileCore.setAdvertisingIdentifier(idfa)
    }
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) setAdvertisingIdentifier: (NSString * _Nullable identifier);
```

### Example

```objectivec
#import <AdSupport/ASIdentifierManager.h>
#import <AppTrackingTransparency/ATTrackingManager.h>
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
-   ...
-
    if (@available(iOS 14, *)) {
        [self setAdvertisingIdentiferUsingTrackingManager];
    } else {
        // fallback to earlier versions
        [self setAdvertisingIdentifierUsingIdentifierManager];
    }

}

- (void) setAdvertisingIdentifierUsingIdentifierManager {
    // setup the advertising identifier
    NSString *idfa = nil;
    if ([[ASIdentifierManager sharedManager] isAdvertisingTrackingEnabled]) {
        idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    } else {
        [AEPLog debugWithLabel:@"AppDelegateExample"
                       message:@"Advertising Tracking is disabled by the user, cannot process the advertising identifier"];
    }
    [AEPMobileCore setAdvertisingIdentifier:idfa];

}

- (void) setAdvertisingIdentiferUsingTrackingManager API_AVAILABLE(ios(14)) {
    [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:
    ^(ATTrackingManagerAuthorizationStatus status){
        NSString *idfa = nil;
        switch(status) {
            case ATTrackingManagerAuthorizationStatusAuthorized:
                idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
                break;
            case ATTrackingManagerAuthorizationStatusDenied:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is denied by the user, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusNotDetermined:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is not determined, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusRestricted:
                [AEPLog debugWithLabel:@"AppDelegateExample"
                               message:@"Advertising Tracking is restricted by the user, cannot process the advertising identifier"];
                break;
        }

        [AEPMobileCore setAdvertisingIdentifier:idfa];
    }];
}
```

\<!--- <Variant platform="react-native" api="set-advertising-identifier" repeat="6"/>
#### JavaScript
### Syntax
```jsx
setAdvertisingIdentifier(advertisingIdentifier?: String);
```
* _adID_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.
### Example
```jsx
ACPCore.setAdvertisingIdentifier("ADVTID");
```

\<!--- React Native

<Tabs query="platform=react-native&api=set-advertising-identifier"/>

### Flutter

#### Dart
### Syntax
```dart
Future<void> setAdvertisingIdentifier (String aid);
```
* _aid_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.
### Example
```dart
FlutterACPCore.setAdvertisingIdentifier("ADVTID");
``` --->
 ---\>

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void setPushIdentifier(@Nullable final String pushIdentifier)
```

* _pushIdentifier_ is a string that contains the device token for push notifications.

### Example

```java
//Retrieve the token from either GCM or FCM, and pass it to the SDK
MobileCore.setPushIdentifier(token);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(setPushIdentifier:)
public static func setPushIdentifier(_ deviceToken: Data?)
```

* _deviceToken_ is a string that contains the device token for push notifications.

### Example

```swift
// Set the deviceToken that the APNs has assigned to the device
MobileCore.setPushIdentifier(deviceToken)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) setPushIdentifier: (NSString * _Nullable deviceToken);
```

### Example

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[AEPMobileCore setPushIdentifier:deviceToken];
```

\<!--- <Variant platform="react-native" api="set-push-identifier" repeat="6"/>
#### JavaScript
### Syntax
```jsx
ACPCore.setPushIdentifier(pushIdentifier);
```
* _pushIdentifier_ is a string that contains the device token for push notifications.
### Example
```jsx
ACPCore.setPushIdentifier("pushID");
``` --->

\<!--- React Native

<Tabs query="platform=react-native&api=set-push-identifier"/> ---\>

## syncIdentifier

The `syncIdentifier()` and `syncIdentifiers()` APIs update the specified customer IDs with the Adobe Experience Cloud Identity Service.

These APIs synchronize the provided customer identifier type key and value with the authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, this ID type is updated with the new ID and the authentication state. Otherwise, a new customer ID is added.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Experience Cloud Identity Service.

These IDs are preserved between app upgrades, are saved and restored during the standard application backup process, and are removed at uninstall.

If the current SDK privacy status is `MobilePrivacyStatus.OPT_OUT`, calling this method results in no operations being performed.

This API updates or appends the provided customer identifier type key and value with the given authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, the ID is updated with the new ID and authentication state. Otherwise a new customer ID is added.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void syncIdentifier(
            @NonNull final String identifierType,
            @Nullable final String identifier,
            @NonNull final VisitorID.AuthenticationState authenticationState)
```

* _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* _identifier (String)_ contains the `identifier value`, and this parameter should not be null or empty.
* _authenticationState (AuthenticationState)_ indicates the authentication state of the user and contains one of the [VisitorID.AuthenticationState](#public-classes) values.

### Example

```java
Identity.syncIdentifier("idType",
                        "idValue",
                        VisitorID.AuthenticationState.AUTHENTICATED);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(syncIdentifierWithType:identifier:authenticationState:)
static func syncIdentifier(identifierType: String, identifier: String, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifierType` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* The _authenticationState (MobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

### Example

```swift
Identity.syncIdentifier(identifierType: "idType",
                            identifier: "idValue",
                        authentication: .unknown)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) syncIdentifierWithType: (NSString * _Nonnull identifierType)
                                         identifier: (NSString * _Nonnull identifier)
                                 authentication: (enum AEPAuthenticationState authenticationState);
```

### Example

```objectivec
[AEPMobileIdentity syncIdentifierWithType:@"idType"
                               identifier:@"idValue"
                      authenticationState:AEPMobileVisitorAuthStateUnknown];
```

\<!--- <Variant platform="react-native" api="sync-identifier" repeat="6"/>
#### JavaScript
### Syntax
```jsx
syncIdentifier(identifierType: String, identifier: String, authenticationState: string);
```
* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authenticationState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.
### Example
```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';
ACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```

\<!--- React Native

<Tabs query="platform=react-native&api=sync-identifier"/>

### Flutter

#### Dart
### Syntax
```dart
Future<void> syncIdentifier(String identifierType, String identifier, ACPMobileVisitorAuthenticationState authState);
```
* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.
### Example
```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';
FlutterACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
``` --->
 ---\>

## syncIdentifiers

This API is an overloaded version, which does not include the parameter for the authentication state and it assumes a default value of `VisitorID.AuthenticationState.UNKNOWN`.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void syncIdentifiers(@NonNull final Map<String, String> identifiers)
```

* _identifiers_ is a map that contains the identifiers with the Identifier type as the key, and the string identifier as the value. In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

### Example

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(syncIdentifiers:)
static func syncIdentifiers(identifiers: [String: String]?)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

### Example

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers);
```

### Example

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids];
```

\<!--- <Variant platform="react-native" api="sync-identifiers" repeat="6"/>
#### JavaScript
### Syntax
```jsx
syncIdentifiers(identifiers?: {string: string});
```
* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
### Example
```jsx
ACPIdentity.syncIdentifiers({"id1": "identifier1"});
```

\<!--- React Native

<Tabs query="platform=react-native&api=sync-identifiers"/>

### Flutter

#### Dart
### Syntax
```dart
Future<void> syncIdentifiers (Map<String, String> identifiers);
```
* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
### Example
```jsx
FlutterACPIdentity.syncIdentifiers({"idType1":"idValue1",
                                    "idType2":"idValue2",
                                    "idType3":"idValue3"});
``` --->
 ---\>

## syncIdentifiers (overloaded)

The function of this API is the same as the `syncIdentifier` API. This API passes a list of identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

Starting with _ACPIdentity v2.1.3 (iOS)_ and _Identity v1.1.2 (Android)_ if the new `identifier` value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Adobe Experience Cloud Identity Service.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void syncIdentifiers(
            @NonNull final Map<String, String> identifiers,
            @NonNull final VisitorID.AuthenticationState authenticationState)
```

* _identifiers_ is a map that contains IDs with the identifier type as the key, and the string identifier as the value.
* _authState_ indicates the authentication state for the user, which contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

### Example

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers, VisitorID.AuthenticationState.AUTHENTICATED);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(syncIdentifiers:authenticationState:)
static func syncIdentifiers(identifiers: [String: String]?, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.
* The _authenticationState (MobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

### Example

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids, authenticationState: .authenticated)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers)
                  authentication: (enum AEPAuthenticationState authenticationState);
```

### Example

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids authenticationState:AEPMobileVisitorAuthStateAuthenticated];
```

\<!--- <Variant platform="react-native" api="sync-identifiers-overloaded" repeat="6"/>
#### JavaScript
### Syntax
```jsx
syncIdentifiersWithAuthState(identifiers?: {string: string}, authenticationState: string);
```
* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.
### Example
```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';
ACPIdentity.syncIdentifiersWithAuthState({"id1": "identifier1"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```

\<!--- React Native

<Tabs query="platform=react-native&api=sync-identifiers-overloaded"/>

### Flutter

#### Dart
### Syntax
```dart
Future<void> syncIdentifiersWithAuthState (Map<String, String> identifiers, ACPMobileVisitorAuthenticationState authState);
```
* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* The _authState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.
### Example
```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';
FlutterACPIdentity.syncIdentifiersWithAuthState({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
``` --->
 ---\>

## Public classes

### Android

**AuthenticationState**

This class is used to indicate the authentication state for the current `VisitorID`.

```java
public enum AuthenticationState {
       UNKNOWN,
       AUTHENTICATED,
       LOGGED_OUT;
}
```

**VisitorID**

This class is an identifier to be used with the Adobe Experience Cloud Identity Service.

```java
public class VisitorID {
     //Constructor
     public VisitorID(String idOrigin, String idType, String id, VisitorID.AuthenticationState authenticationState);

     public VisitorID.AuthenticationState getAuthenticationState();

     public final String getId();

     public final String getIdOrigin();

     public final String getIdType();

}
```

### iOS

**MobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `Identifiable`.

```swift
@objc(AEPMobileVisitorAuthState) public enum MobileVisitorAuthenticationState: Int, Codable {
    case unknown = 0
    case authenticated = 1
    case loggedOut = 2
}
```

**Identifiable**

```swift
@objc(AEPIdentifiable) public protocol Identifiable {
    /// Origin of the identifier
    var origin: String? { get }

    /// Type of the identifier
    var type: String? { get }

    /// The identifier
    var identifier: String? { get }

    /// The authentication state for the identifier
    var authenticationState: MobileVisitorAuthenticationState { get }
}
```

\<!--- <Variant platform="react-native" api="public-classes" repeat="7"/>
#### JavaScript
**ACPVisitorID**
This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.
```jsx
import {ACPVisitorID} from '@adobe/react-native-acpcore';
var visitorId = new ACPVisitorID(idOrigin?: string, idType: string, id?: string, authenticationState?: ACPMobileVisitorAuthenticationState);
```
**ACPMobileVisitorAuthenticationState**
This is used to indicate the authentication state for the current `VisitorID`.
```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';
var state = ACPMobileVisitorAuthenticationState.AUTHENTICATED;
//var state = ACPMobileVisitorAuthenticationState.LOGGED_OUT;
//var state = ACPMobileVisitorAuthenticationState.UNKNOWN;
```

\<!--- React Native

<Tabs query="platform=react-native&api=public-classes"/>

### Flutter

#### Dart
**ACPVisitorID**
This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.
```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';
class ACPMobileVisitorId {
  String get idOrigin;
  String get idType;
  String get identifier;
  ACPMobileVisitorAuthenticationState get authenticationState;
};
```
**ACPMobileVisitorAuthenticationState**
This is used to indicate the authentication state for the current `VisitorID`.
```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';
enum ACPMobileVisitorAuthenticationState {UNKNOWN, AUTHENTICATED, LOGGED_OUT};
``` --->
 ---\>
