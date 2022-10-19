<Variant platform="android" api="append-to-url" repeat="7"/>

#### Java

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the attributes from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

**Syntax**

```java
public static void appendVisitorInfoForURL(final String baseURL, final AdobeCallback<String> callback);
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is invoked after the updated URL is available.

**Example**

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

<Variant platform="ios-aep" api="append-to-url" repeat="11"/>

#### Swift

**Syntax**

```swift
static func appendTo(url: URL?, completion: @escaping (URL?, Error?) -> Void)
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _completion_ is invoked after the updated _URL_ is available or _Error_ if an unexpected exception occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) appendToUrl: (NSURL * _Nullable baseUrl) completion: ^(NSURL * _Nullable urlWithVisitorData, NSError * _Nullable error) completion;
```

**Example**

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

<Variant platform="ios-acp" api="append-to-url" repeat="12"/>

Method `appendToUrl:withCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Swift

**Syntax**

```swift
static func append(to: URL?, withCallback: ((URL?) -> Void)?)
static func append(to: URL?, withCompletionHandler: ((URL?, Error?)-> Void)?)
```

**Example**

```swift
ACPIdentity.append(to:URL(string: "https://example.com"), withCallback: {(appendedURL) in    
  // handle the appended url here
  if let appendedURL = appendedURL {
    // APIs which update the UI must be called from main thread
    DispatchQueue.main.async {
      self.webView.load(URLRequest(url: appendedURL!))
    }
  } else {
    // handle error, nil appendedURL
  }
});

ACPIdentity.append(to: URL(string: "https://example.com"), withCompletionHandler: { (appendedURL, error) in
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

#### Objective-C

**Syntax**

```objectivec
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCallback: (nullable void (^) (NSURL* __nullable urlWithVisitorData)) callback;
+ (void) appendToUrl: (nullable NSURL*) baseUrl withCompletionHandler: (nullable void (^) (NSURL* __nullable urlWithVersionData, NSError* __nullable error)) completionHandler;
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is invoked after the updated URL is available.
* _completionHandler_ is invoked with _urlWithVersionData_ after the updated URL is available or _error_ if an unexpected exception occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```objectivec
NSURL* url = [[NSURL alloc] initWithString:@"https://example.com"];
[ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {    
  // handle the appended url here
  if (urlWithVisitorData) {
    // APIs which update the UI must be called from main thread
    dispatch_async(dispatch_get_main_queue(), ^{
      [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
    }
  } else {
    // handle error, nil urlWithVisitorData
  }
}];

[ACPIdentity appendToUrl:url withCompletionHandler:^(NSURL * _Nullable urlWithVersionData, NSError * _Nullable error) {
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

<Variant platform="react-native" api="append-to-url" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
appendVisitorInfoForURL(baseURL?: String): Promise<?string>;
```

* _baseUrl_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.

**Example**

```jsx
ACPIdentity.appendVisitorInfoForURL("https://example.com").then(urlWithVistorData => console.log("AdobeExperenceSDK: Url with Visitor Data = " + urlWithVisitorData));
```

<Variant platform="flutter" api="append-to-url" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<String> appendToUrl (String url);
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("https://example.com");
} on PlatformException {
  log("Failed to append URL");
}
```

<Variant platform="cordova" api="append-to-url" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.appendVisitorInfoForUrl = function(url, success, fail);
```

* _url_ _(String)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _success_ is a callback containing the provided URL with the visitor information appended if the `appendVisitorInfoForUrl` API executed without any errors.
* _fail_ is a callback containing error information if the  `appendVisitorInfoForUrl` API was executed with errors.

**Example**

```jsx
ACPIdentity.appendVisitorInfoForUrl("https://example.com", function(handleCallback) {
  console.log("AdobeExperenceSDK: Url with Visitor Data = " + handleCallback);
}, function(handleError) {
  console.log("AdobeExperenceSDK: Failed to append URL : " + handleError);
});
```

<Variant platform="unity" api="append-to-url" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void AppendToUrl(string url, AdobeIdentityAppendToUrlCallback callback)
```

* _url_ _(String)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendToUrl` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeIdentityAppendToUrlCallback))]
public static void HandleAdobeIdentityAppendToUrlCallback(string url)
{
    print("Url is : " + url);
}
ACPIdentity.AppendToUrl("https://www.adobe.com", HandleAdobeIdentityAppendToUrlCallback);
```

<Variant platform="xamarin" api="append-to-url" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public unsafe static void AppendToUrl (NSUrl baseUrl, Action<NSUrl> callback);
```

* baseUrl _(NSUrl)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendToUrl` API executed without any errors.

**Android syntax**

```csharp
public unsafe static void AppendVisitorInfoForURL (string baseURL, IAdobeCallback callback);
```

* baseURL _(string)_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.
* _callback_ is a callback containing the provided URL with the visitor information appended if the `AppendVisitorInfoForURL` API executed without any errors.

**iOS example**

```csharp
ACPIdentity.AppendToUrl(url, callback => {
  Console.WriteLine("Appended url: " + callback);
});
```

**Android example**

```csharp
ACPIdentity.AppendVisitorInfoForURL("https://example.com", new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Appended url: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String identityExtensionVersion = Identity.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let identityExtensionVersion  = Identity.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *identityVersion = [AEPMobileIdentity extensionVersion];
```

<Variant platform="ios-acp" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static func extensionVersion() -> String
```

**Example**

```swift
let identityVersion  = ACPIdentity.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *identityVersion = [ACPIdentity extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPIdentity.extensionVersion().then(identityExtensionVersion => console.log("AdobeExperienceSDK: ACPIdentity version: " + identityExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String identityExtensionVersion = FlutterACPIdentity.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.extensionVersion = function(success, fail);
```

* _success_ is a callback containing the ACPIdentity extension version if the `extensionVersion` API executed without any errors.
* _fail_ is a callback containing error information if the  `appendVisitorInfoForUrl` API was executed with errors.

**Example**

```jsx
ACPIdentity.extensionVersion(function (handleCallback) {
  console.log("AdobeExperienceSDK: ACPIdentity version: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: failed to get extension version : " + handleError)
});
```

<Variant platform="unity" api="extension-version" repeat="5"/>

#### C#

**Syntax**

```csharp
public static string ExtensionVersion()
```

**Example**

```csharp
string identityVersion = ACPIdentity.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="5"/>

#### C#

**Syntax**

```csharp
public static string ExtensionVersion ();
```

**Example**

```csharp
string identityVersion = ACPIdentity.ExtensionVersion();
```

<Variant platform="android" api="get-experience-cloud-id" repeat="7"/>

#### Java

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the ECID from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

**Syntax**

```java
public static void getExperienceCloudId(final AdobeCallback<String> callback);
```

* _callback_ is invoked after the ECID is available.

**Example**

```java
Identity.getExperienceCloudId(new AdobeCallback<String>() {    
    @Override    
    public void call(String id) {        
         //Handle the ID returned here    
    }
});
```

<Variant platform="ios-aep" api="get-experience-cloud-id" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(getExperienceCloudId:)
static func getExperienceCloudId(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ after the ECID is available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

**Example**

```swift
Identity.getExperienceCloudId { ecid, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getExperienceCloudId: ^(NSString * _Nullable ecid, NSError * _Nullable error) completion;
```

**Example**

```objectivec
[AEPMobileIdentity getExperienceCloudId:^(NSString * _Nullable ecid, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}];
```

<Variant platform="ios-acp" api="get-experience-cloud-id" repeat="12"/>

Method `getExperienceCloudIdWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Swift

**Syntax**

```swift
static func getExperienceCloudId(_ callback: @escaping (String?) -> Void)
static func getExperienceCloudId(completionHandler: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked after the ECID is available.
* _completionHandler_ is invoked with _experienceCloudId_ after the ECID is available, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```swift
ACPIdentity.getExperienceCloudId { (retrievedCloudId) in    
    // handle the retrieved ID here    
}

ACPIdentity.getExperienceCloudId { (retrievedCloudId, error) in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getExperienceCloudId: (nonnull void (^) (NSString* __nullable experienceCloudId)) callback;
+ (void) getExperienceCloudIdWithCompletionHandler: (nonnull void (^) (NSString* __nullable experienceCloudId, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPIdentity getExperienceCloudId:^(NSString * _Nullable retrievedCloudId) {    
    // handle the retrieved ID here    
}];

[ACPIdentity getExperienceCloudIdWithCompletionHandler:^(NSString * _Nullable experienceCloudId, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved ID here
  }
}];
```

<Variant platform="react-native" api="get-experience-cloud-id" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
getExperienceCloudId(): Promise<?string>;
```

**Example**

```jsx
ACPIdentity.getExperienceCloudId().then(cloudId => console.log("AdobeExperienceSDK: CloudID = " + cloudId));
```

<Variant platform="flutter" api="get-experience-cloud-id" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<String> experienceCloudId;
```

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.experienceCloudId;
} on PlatformException {
  log("Failed to get experienceCloudId");
}
```

<Variant platform="cordova" api="get-experience-cloud-id" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.getExperienceCloudId(success, fail);
```

* _success_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.
* _fail_ is a callback containing error information if the `getExperienceCloudId` API was executed with errors.

**Example**

```jsx
ACPIdentity.getExperienceCloudId(function (handleCallback) {
  console.log("AdobeExperienceSDK: experienceCloudId: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve experienceCloudId : " + handleError);
});
```

<Variant platform="unity" api="get-experience-cloud-id" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetExperienceCloudId(AdobeGetExperienceCloudIdCallback callback)
```

* _callback_ is a callback containing the ECID if the `GetExperienceCloudId` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetExperienceCloudIdCallback))]
public static void HandleAdobeGetExperienceCloudIdCallback(string cloudId)
{
    print("ECID is : " + cloudId);
}
ACPIdentity.GetExperienceCloudId(HandleAdobeGetExperienceCloudIdCallback);
```

<Variant platform="xamarin" api="get-experience-cloud-id" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public unsafe static void GetExperienceCloudId (Action<NSString> callback);
```

* _callback_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.

**Android syntax**

```csharp
public unsafe static void GetExperienceCloudId (IAdobeCallback callback);
```

* _callback_ is a callback containing the ECID if the `getExperienceCloudId` API executed without any errors.

**iOS example**

```csharp
ACPIdentity.GetExperienceCloudId(callback => {
  Console.WriteLine("Experience Cloud Id: " + callback);
});
```

**Android example**

```csharp
ACPIdentity.GetExperienceCloudId(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Experience Cloud Id: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="android" api="get-identifiers" repeat="7"/>

#### Java

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the custom identifiers from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

**Syntax**

```java
public static void getIdentifiers(final AdobeCallback<List<VisitorID>> callback);
```

* _callback_ is invoked after the customer identifiers are available.

**Example**

```java
Identity.getIdentifiers(new AdobeCallback<List<VisitorID>>() {    
    @Override    
    public void call(List<VisitorID> idList) {        
         //Process the IDs here    
    }

});
```

<Variant platform="ios-aep" api="get-identifiers" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(getIdentifiers:)
static func getIdentifiers(completion: @escaping ([Identifiable]?, Error?) -> Void)
```

* _completion_ is invoked with a list of  _Identifiable_ objects after the customer identifiers are available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error.

**Example**

```swift
Identity.getIdentifiers { identifiers, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getIdentifiers: ^(NSArray<id<AEPIdentifiables>> * _Nullable identifiers, NSError * _Nullable error) completion;
```

**Example**

```objectivec
[[AEPMobileIdentity getIdentifiers:^(NSArray<id<AEPIdentifiable>> * _Nullable identifiers, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}];
```

<Variant platform="ios-acp" api="get-identifiers" repeat="12"/>

Method `getIdentifiersWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Swift

**Syntax**

```swift
static func getIdentifiers(_ callback: @escaping ([ACPMobileVisitorId]?) -> Void)
static func getIdentifiersWithCompletionHandler(_ completionHandler: @escaping ([ACPMobileVisitorId]?, Error?) -> Void)
```

* _callback_ is invoked after the customer identifiers are available.
* _completionHandler_ is invoked with _visitorIDs_ after the customer identifiers are available, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```swift
ACPIdentity.getIdentifiers { (retrievedVisitorIds) in    
   // handle the retrieved identifiers here        
}

ACPIdentity.getIdentifiersWithCompletionHandler { (retrievedVisitorIds, error) in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getIdentifiers: (nonnull void (^) (NSArray<ADBMobileVisitorId*>* __nullable visitorIDs)) callback;
+ (void) getIdentifiersWithCompletionHandler: (nonnull void (^) (NSArray<ACPMobileVisitorId*>* __nullable visitorIDs, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPIdentity getIdentifiers:^(NSArray<ACPMobileVisitorId *> * _Nullable retrievedVisitorIds) {    
    // handle the retrieved identifiers here     
}];

[ACPIdentity getIdentifiersWithCompletionHandler:^(NSArray<ACPMobileVisitorId *> * _Nullable visitorIDs, NSError * _Nullable error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}];
```

<Variant platform="react-native" api="get-identifiers" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
getIdentifiers(): Promise<Array<?ACPVisitorID>>;
```

**Example**

```jsx
ACPIdentity.getIdentifiers().then(identifiers => console.log("AdobeExperienceSDK: Identifiers = " + identifiers));
```

<Variant platform="flutter" api="get-identifiers" repeat="5"/>

#### Dart

**Syntax**

```dart
 Future<List<ACPMobileVisitorId>> identifiers;
```

**Example**

```dart
List<ACPMobileVisitorId> result;

try {
  result = await FlutterACPIdentity.identifiers;
} on PlatformException {
  log("Failed to get identifiers");
}
```

<Variant platform="cordova" api="get-identifiers" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.getIdentifiers(success, fail);
```

* _success_ is a callback containing the previously synced identifiers if the `getIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `getIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.getIdentifiers(function (handleCallback) {
  console.log("AdobeExperienceSDK: Visitor identifiers: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve visitor identifiers : " + handleError);
});
```

<Variant platform="unity" api="get-identifiers" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetIdentifiers(AdobeGetIdentifiersCallback callback)
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetIdentifiersCallback))]
public static void HandleAdobeGetIdentifiersCallback(string visitorIds)
{
    print("Ids is : " + visitorIds);
}
ACPIdentity.GetIdentifiers(HandleAdobeGetIdentifiersCallback);
```

<Variant platform="xamarin" api="get-identifiers" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public unsafe static void GetIdentifiers (Action<ACPMobileVisitorId[]> callback);
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**Android syntax**

```csharp
public unsafe static void GetIdentifiers (IAdobeCallback callback);
```

* _callback_ is a callback containing the previously synced identifiers if the `GetIdentifiers` API executed without any errors.

**iOS example**

```csharp
Action<ACPMobileVisitorId[]> callback = new Action<ACPMobileVisitorId[]>(handleCallback);
ACPIdentity.GetIdentifiers(callback);

private void handleCallback(ACPMobileVisitorId[] ids)
{
  String visitorIdsString = "[]";
  if (ids.Length != 0)
  {
    visitorIdsString = "";
    foreach (ACPMobileVisitorId id in ids)
    {
      visitorIdsString = visitorIdsString + "[Id: " + id.Identifier + ", Type: " + id.IdType + ", Origin: " + id.IdOrigin + ", Authentication: " + id.AuthenticationState + "]";
    }
  }
  Console.WriteLine("Retrieved visitor ids: " + visitorIdsString);
}
```

**Android example**

```csharp
ACPIdentity.GetIdentifiers(new GetIdentifiersCallback());

class GetIdentifiersCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object retrievedIds)
  {
    System.String visitorIdsString = "[]";
    if (retrievedIds != null)
    {
      var ids = GetObject<JavaList>(retrievedIds.Handle, JniHandleOwnership.DoNotTransfer);
      if (ids != null && ids.Count > 0)
      {
        visitorIdsString = "";
        foreach (VisitorID id in ids)
        {
          visitorIdsString = visitorIdsString + "[Id: " + id.Id + ", Type: " + id.IdType + ", Origin: " + id.IdOrigin + ", Authentication: " + id.GetAuthenticationState() + "]";
        }
      }
    }
    Console.WriteLine("Retrieved visitor ids: " + visitorIdsString);
  }
}
```

<Variant platform="android" api="get-url-variables" repeat="8"/>

#### Java

This method was added in Core version 1.4.0 and Identity version 1.1.0.

This API can be called with [AdobeCallback](../api-reference.md#public-classes) or [AdobeCallbackWithError](../api-reference.md#public-classes) for retrieving the attributes from the Mobile SDK. When `AdobeCallbackWithError` is provided, this API uses a default timeout of 500ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate [AdobeError](../api-reference.md#public-classes).

**Syntax**

```java
public static void getUrlVariables(final AdobeCallback<String> callback);
```

* _callback_ has an NSString value that contains the visitor identifiers as a query string after the service request is complete.

**Example**

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

<Variant platform="ios-aep" api="get-url-variables" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(getUrlVariables:)
static func getUrlVariables(completion: @escaping (String?, Error?) -> Void)
```

* _completion_ is invoked with _String_ containing the visitor identifiers as a query string, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) getUrlVariables: ^(NSString * _Nullable urlVariables, NSError * _Nullable error) completion;
```

**Example**

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

<Variant platform="ios-acp" api="get-url-variables" repeat="12"/>

Method `getUrlVariables` was added in ACPCore version 2.3.0 and ACPIdentity version 2.1.0. Method `getUrlVariablesWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

#### Swift

**Syntax**

```swift
static func getUrlVariables(_ callback: @escaping (String?) -> Void)
static func getUrlVariables(completionHandler: @escaping (String?, Error?) -> Void)
```

* _callback_ has an NSString value that contains the visitor identifiers as a query string after the service request is complete.
* _completionHandler_ is invoked with _urlVariables_ containing the visitor identifiers as a query string, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#public-classes) code of the specific error. The default timeout of 500ms.

**Example**

```swift
ACPIdentity.getUrlVariables {(urlVariables) in
  var urlStringWithVisitorData: String = "https://example.com"
  if let urlVariables: String = urlVariables {
    urlStringWithVisitorData.append("?" + urlVariables)
  }

  guard let urlWithVisitorData: URL = URL(string: urlStringWithVisitorData)   else {
    // handle error, unable to construct URL
    return
  }
  // APIs which update the UI must be called from main thread
  DispatchQueue.main.async {
    self.webView.load(URLRequest(url: urlWithVisitorData))
  }
}

ACPIdentity.getUrlVariables { (urlVariables, error) in
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


#### Objective-C

**Syntax**

```objectivec
+ (void) getUrlVariables: (nonnull void (^) (NSString* __nullable urlVariables)) callback;
+ (void) getUrlVariablesWithCompletionHandler: (nonnull void (^) (NSString* __nullable urlVariables, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {    
  // handle the URL query parameter string here
  NSString* urlString = @"https://example.com";
  NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];
  NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];
  // APIs which update the UI must be called from main thread
  dispatch_async(dispatch_get_main_queue(), ^{
    [[self webView] loadRequest:[NSURLRequest requestWithURL:urlWithVisitorData]];
  }
}];

[ACPIdentity getUrlVariablesWithCompletionHandler:^(NSString * _Nullable urlVariables, NSError * _Nullable error) {
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

<Variant platform="react-native" api="get-url-variables" repeat="6"/>

This method was added in react-native-acpcore v1.0.5.

#### JavaScript

**Syntax**

```jsx
getUrlVariables(): Promise<?string>;
```

**Example**

```jsx
ACPIdentity.getUrlVariables().then(urlVariables => console.log("AdobeExperenceSDK: query params = " + urlVariables));
```

<Variant platform="flutter" api="get-url-variables" repeat="5"/>

#### Dart

**Syntax**

```dart
 Future<String> urlVariables;
```

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
```

<Variant platform="cordova" api="get-url-variables" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.getUrlVariables(success, fail);
```

* _success_ is a callback containing the url variables in query parameter form if the `getUrlVariables` API executed without any errors.
* _fail_ is a callback containing error information if the `getUrlVariables` API was executed with errors.

**Example**

```jsx
ACPIdentity.getUrlVariables(function (handleCallback) {
  console.log("AdobeExperienceSDK: Url variables: " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve url variables : " + handleError);
});
```

<Variant platform="unity" api="get-url-variables" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetUrlVariables(AdobeGetUrlVariables callback)
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetUrlVariables))]
public static void HandleAdobeGetUrlVariables(string urlVariables)
{
  print("Url variables are : " + urlVariables);
}
ACPIdentity.GetUrlVariables(HandleAdobeGetUrlVariables);
```

<Variant platform="xamarin" api="get-url-variables" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public unsafe static void GetUrlVariables (Action<NSString> callback);
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**Android syntax**

```csharp
public unsafe static void GetUrlVariables (IAdobeCallback callback);
```

* _callback_ is a callback containing the url variables in query parameter form if the `GetUrlVariables` API executed without any errors.

**iOS example**

```csharp
 ACPIdentity.GetUrlVariables(callback => {
   Console.WriteLine("Url variables: " + callback);
 });
```

**Android example**

```csharp
ACPIdentity.GetUrlVariables(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Url variables: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="android" api="register-extension" repeat="3"/>

#### Java

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

<Variant platform="ios-aep" api="register-extension" repeat="7"/>

For iOS AEP libraries, registration is changed to a single API call. Calling the MobileCore.start API is no longer required. See [MobileCore.registerExtensions()](../api-reference.md#registerextension-s) for more information.

#### Swift

**Example**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([AEPIdentity.Identity.self, Lifecycle.self, Analytics.self], {
        MobileCore.configureWith(appId: "mobilePropertyEnvironmentID")
    })
  ...
}
```

#### Objective-C

**Example**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, AEPMobileLifecycle.class, AEPMobileAnalytics.class] completion:^{
    [AEPMobileCore configureWithAppId: @"mobilePropertyEnvironmentID"];
  }];
  ...
}
```

<Variant platform="ios-acp" api="register-extension" repeat="7"/>

Register the Identity extension in your app's `didFinishLaunchingWithOptions` function:

#### Swift

**Example**

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  ACPIdentity.registerExtension()
  // Override point for customization after application launch.
  return true;
}
```

#### Objective-C

**Example**

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [ACPIdentity registerExtension];
  // Override point for customization after application launch.
  return YES;
}
```

<Variant platform="react-native" api="register-extension" repeat="2"/>

#### JavaScript

When using React Native, registering Identity with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="flutter" api="register-extension" repeat="2"/>

#### Dart

When using Flutter, registering Identity with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="cordova" api="register-extension" repeat="2"/>

#### Cordova

When using Cordova, registering Identity with Mobile Core should be done in native code which is shown under the Android and iOS tabs.

<Variant platform="unity" api="register-extension" repeat="3"/>

#### C#

Register the Identity extension in your app's `Start()` function:

```csharp
void Start() {
  ACPIdentity.RegisterExtension();
}
```

<Variant platform="xamarin" api="register-extension" repeat="7"/>

#### C#

**iOS**

Register the Identity extension in your app's `FinishedLaunching()` function:

```csharp
public override bool FinishedLaunching(UIApplication app, NSDictionary options)
{
  global::Xamarin.Forms.Forms.Init();
  LoadApplication(new App());
    ACPIdentity.RegisterExtension();

  // start core
  ACPCore.Start(startCallback);

  return base.FinishedLaunching(app, options);
}
```

**Android**

Register the Identity extension in your app's `OnCreate()` function:

```csharp
protected override void OnCreate(Bundle savedInstanceState)
{
  base.OnCreate(savedInstanceState);
  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);
  LoadApplication(new App());

  ACPIdentity.RegisterExtension();

  // start core
  ACPCore.Start(new CoreStartCompletionCallback());
}
```

<Variant platform="android" api="set-advertising-identifier" repeat="8"/>

#### Java

**Syntax**

```java
public static void setAdvertisingIdentifier(final String advertisingIdentifier);
```

* _advertisingIdentifier_ is a string that provides developers with a simple, standard system to track the Ads through their apps.     

**Example**

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

<Variant platform="ios-aep" api="set-advertising-identifier" repeat="13"/>

To access IDFA and handle it correctly in your mobile application, see the [Apple developer documentation about IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager)

Starting iOS 14+, applications must use the [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) framework to request user authorization before using the Identifier for Advertising (IDFA).

#### Swift

**Syntax**

```swift
@objc(setAdvertisingIdentifier:)
public static func setAdvertisingIdentifier(_ identifier: String?)
```

* _identifier_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

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

#### Objective-C

**Syntax**

```objectivec
+ (void) setAdvertisingIdentifier: (NSString * _Nullable identifier);
```

**Example**

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

<Variant platform="ios-acp" api="set-advertising-identifier" repeat="13"/>

To access IDFA and handle it correctly in your mobile application, see [Apple developer documentation about IDFA](https://developer.apple.com/documentation/adsupport/asidentifiermanager)

Starting iOS 14+, applications must use the [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) framework to request user authorization before using the Identifier for Advertising (IDFA).

#### Swift

**Syntax**

```swift
static func setAdvertisingIdentifier(adId: String?)
```

* _adId_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

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
            ACPCore.log(ACPMobileLogLevel.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is disabled by the user, cannot process the advertising identifier.");
        }
        ACPCore.setAdvertisingIdentifier(idfa);
}

@available(iOS 14, *)
func setAdvertisingIdentiferUsingTrackingManager() {
    ATTrackingManager.requestTrackingAuthorization { (status) in
        var idfa: String = "";

        switch (status) {
        case .authorized:
            idfa = ASIdentifierManager.shared().advertisingIdentifier.uuidString
        case .denied:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is denied by the user, cannot process the advertising identifier.")
        case .notDetermined:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is not determined, cannot process the advertising identifier.")
        case .restricted:
            ACPCore.log(.debug,
                        tag: "AppDelegateExample",
                        message: "Advertising Tracking is restricted by the user, cannot process the advertising identifier.")
        }

        ACPCore.setAdvertisingIdentifier(idfa)
    }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setAdvertisingIdentifier: (nullable NSString*) adId;
```   

**Example**

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
        [ACPCore log:ACPMobileLogLevelDebug
                 tag:@"AppDelegateExample"
             message:@"Advertising Tracking is disabled by the user, cannot process the advertising identifier"];
    }
    [ACPCore setAdvertisingIdentifier:idfa];

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
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is denied by the user, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusNotDetermined:
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is not determined, cannot process the advertising identifier"];
                break;
            case ATTrackingManagerAuthorizationStatusRestricted:
                [ACPCore log:ACPMobileLogLevelDebug
                         tag:@"AppDelegateExample"
                     message:@"Advertising Tracking is restricted by the user, cannot process the advertising identifier"];
                break;
        }

        [ACPCore setAdvertisingIdentifier:idfa];
    }];
}
```

<Variant platform="react-native" api="set-advertising-identifier" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
setAdvertisingIdentifier(advertisingIdentifier?: String);
```

* _adID_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

```jsx
ACPCore.setAdvertisingIdentifier("ADVTID");
```

<Variant platform="flutter" api="set-advertising-identifier" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> setAdvertisingIdentifier (String aid);
```

* _aid_ is a string that provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

```dart
FlutterACPCore.setAdvertisingIdentifier("ADVTID");
```

<Variant platform="cordova" api="set-advertising-identifier" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPCore.setAdvertisingIdentifier(identifier, success, fail);
```

* _identifier_ _(String)_ provides developers with a simple, standard system to continue to track the Ads through their apps.
* _success_ is a callback containing a general success message if the `setAdvertisingIdentifier` API executed without any errors.
* _fail_ is a callback containing error information if the `setAdvertisingIdentifier` API was executed with errors.

**Example**

```jsx
ACPCore.setAdvertisingIdentifier("ADVTID", function (handleCallback) {
  console.log("AdobeExperienceSDK: Advertising identifier successfully set.");
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to set advertising identifier : " + handleError);
});
```

<Variant platform="unity" api="set-advertising-identifier" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void SetAdvertisingIdentifier(string adId)
```

* _adId_ _(String)_ provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

```csharp
ACPCore.SetAdvertisingIdentifier("ADVTID");
```

<Variant platform="xamarin" api="set-advertising-identifier" repeat="9"/>

#### C#

**iOS syntax**

```csharp
public static void SetAdvertisingIdentifier (string adId);
```

* _adId_ _(String)_ provides developers with a simple, standard system to continue to track the Ads through their apps.

**Android syntax**

```csharp
public unsafe static void SetAdvertisingIdentifier (string advertisingIdentifier);
```

* _advertisingIdentifier_ _(String)_ provides developers with a simple, standard system to continue to track the Ads through their apps.

**Example**

```csharp
ACPCore.SetAdvertisingIdentifier("ADVTID");
```

<Variant platform="android" api="set-push-identifier" repeat="6"/>

#### Java

**Syntax**

```java
public static void setPushIdentifier(final String pushIdentifier);
```

* _pushIdentifier_  is a string that contains the device token for push notifications.

**Example**

```java
//Retrieve the token from either GCM or FCM, and pass it to the SDK
MobileCore.setPushIdentifier(token);
```

<Variant platform="ios-aep" api="set-push-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(setPushIdentifier:)
public static func setPushIdentifier(_ deviceToken: Data?)
```

* _deviceToken_  is a string that contains the device token for push notifications.

**Example**

```swift
// Set the deviceToken that the APNs has assigned to the device
MobileCore.setPushIdentifier(deviceToken)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setPushIdentifier: (NSString * _Nullable deviceToken);
```

**Example**

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[AEPMobileCore setPushIdentifier:deviceToken];
```

<Variant platform="ios-acp" api="set-push-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func setPushIdentifier(deviceToken: NSData?)
```

* _deviceToken_  is a string that contains the device token for push notifications.

**Example**

```swift
// Set the deviceToken that the APNs has assigned to the device
ACPCore.setPushIdentifier(deviceToken)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setPushIdentifier: (nullable NSData*) deviceToken;
```

**Example**

```objectivec
// Set the deviceToken that the APNS has assigned to the device
[ACPCore setPushIdentifier:deviceToken];
```

<Variant platform="react-native" api="set-push-identifier" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
ACPCore.setPushIdentifier(pushIdentifier);
```

* _pushIdentifier_ is a string that contains the device token for push notifications.

**Example**

```jsx
ACPCore.setPushIdentifier("pushID");
```

<Variant platform="android" api="sync-identifier" repeat="6"/>

#### Java

**Syntax**

```java
public static void syncIdentifier(final String identifierType,
                                  final String identifier,
                                  final VisitorID.AuthenticationState authenticationState);
```

* _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* _identifier (String)_ contains the `identifier value`, and this parameter should not be null or empty.
* _authenticationState (AuthenticationState)_ indicates the authentication state of the user and contains one of the [VisitorID.AuthenticationState](#public-classes) values.

**Example**

```java
Identity.syncIdentifier("idType",
                        "idValue",
                        VisitorID.AuthenticationState.AUTHENTICATED);
```

<Variant platform="ios-aep" api="sync-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(syncIdentifierWithType:identifier:authenticationState:)
static func syncIdentifier(identifierType: String, identifier: String, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifierType` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* The _authenticationState (MobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
Identity.syncIdentifier(identifierType: "idType",
                            identifier: "idValue",
                        authentication: .unknown)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifierWithType: (NSString * _Nonnull identifierType)
										 identifier: (NSString * _Nonnull identifier)
								 authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
[AEPMobileIdentity syncIdentifierWithType:@"idType"
                               identifier:@"idValue"
                      authenticationState:AEPMobileVisitorAuthStateUnknown];
```

<Variant platform="ios-acp" api="sync-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func syncIdentifier(_ identifierType: String, identifier: String, authentication authenticationState: ACPMobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* The _authenticationState (ACPMobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
ACPIdentity.syncIdentifier("idType", identifier: "idValue", authentication: ACPMobileVisitorAuthenticationState.unknown)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifier: (nonnull NSString*) identifierType             
             identifier: (nonnull NSString*) identifier
         authentication: (ADBMobileVisitorAuthenticationState) authenticationState;
```

**Example**

```objectivec
[ACPIdentity syncIdentifier:@"idType" identifier:@"idValue" authentication:ACPMobileVisitorAuthenticationStateUnknown];
```

<Variant platform="react-native" api="sync-identifier" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
syncIdentifier(identifierType: String, identifier: String, authenticationState: string);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authenticationState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

ACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```

<Variant platform="flutter" api="sync-identifier" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> syncIdentifier(String identifierType, String identifier, ACPMobileVisitorAuthenticationState authState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```

<Variant platform="cordova" api="sync-identifier" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifier = function(identifierType, identifier, authState, success, fail);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authState (ACPMobileVisitorAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the visitor id type, value, and authentication state if the `syncIdentifier` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifier` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifier("id1", "value1", ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown, function (handleCallback) {
  console.log("AdobeExperenceSDK: Identifier synced successfully : " + handleCallback);
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifier : " + handleError);
});
```

<Variant platform="unity" api="sync-identifier" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void SyncIdentifier(string identifierType, string identifier, ACPAuthenticationState authState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authState (ACPAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPAuthenticationState](#public-classes) values.

**Example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPIdentity.ACPAuthenticationState.AUTHENTICATED);
```

<Variant platform="xamarin" api="sync-identifier" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public static void SyncIdentifier (string identifierType, string identifier, ACPMobileVisitorAuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authenticationState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Android syntax**

```csharp
public unsafe static void SyncIdentifier (string identifierType, string identifier, VisitorID.AuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty. If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.
* _authenticationState (AuthenticationState)_ value indicating authentication state for the user and contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**iOS example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPMobileVisitorAuthenticationState.Authenticated);
```

**Android example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", VisitorID.AuthenticationState.Authenticated);
```

<Variant platform="android" api="sync-identifiers" repeat="6"/>

#### Java

**Syntax**

```java
public static void syncIdentifiers(final Map<String, String> identifiers);
```

* _identifiers_ is a map that contains the identifiers with the Identifier type as the key, and the string identifier as the value. In each identifier pair, if the `identifier type` contains a null or an empty string, the identifier is ignored by the Identity extension.

**Example**

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers);
```

<Variant platform="ios-aep" api="sync-identifiers" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(syncIdentifiers:)
static func syncIdentifiers(identifiers: [String: String]?)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids];
```

<Variant platform="ios-acp" api="sync-identifiers" repeat="11"/>

#### Swift

**Syntax**

```swift
static func syncIdentifiers(_ identifiers: [AnyHashable : Any]?)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```swift
let identifiers : [String: String] = ["idType1":"idValue1",
                                      "idType2":"idValue2",
                                      "idType3":"idValue3"];
ACPIdentity.syncIdentifiers(identifiers)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers;
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[ACPIdentity syncIdentifiers:ids];
```

<Variant platform="react-native" api="sync-identifiers" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
syncIdentifiers(identifiers?: {string: string});
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"id1": "identifier1"});
```

<Variant platform="flutter" api="sync-identifiers" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> syncIdentifiers (Map<String, String> identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```jsx
FlutterACPIdentity.syncIdentifiers({"idType1":"idValue1",
                                    "idType2":"idValue2",
                                    "idType3":"idValue3"});
```

<Variant platform="cordova" api="sync-identifiers" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifiers = function(identifiers, success, fail);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* _success_ is a callback containing the synced identifiers if the `syncIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, function (handleCallback) {
  console.log("AdobeExperienceSDK: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifiers : " + handleError)
});
```

<Variant platform="unity" api="sync-identifiers" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void SyncIdentifiers(Dictionary<string, string> identifiers)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Example**

```csharp
Dictionary<string, string> ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids);
```

<Variant platform="xamarin" api="sync-identifiers" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public static void SyncIdentifiers (NSDictionary identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**Android syntax**

```csharp
public unsafe static void SyncIdentifiers (IDictionary<string, string> identifiers);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

**iOS example**

```csharp
var ids = new NSMutableDictionary<NSString, NSObject>
{
  ["idsType1"] = new NSString("idValue1"),
  ["idsType2"] = new NSString("idValue2"),
  ["idsType3"] = new NSString("idValue3")
};
ACPIdentity.SyncIdentifiers(ids);
```

**Android example**

```csharp
var ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids);
```

<Variant platform="android" api="sync-identifiers-overloaded" repeat="6"/>

#### Java

**Syntax**

```java
public static void syncIdentifiers(final Map<String, String> identifiers, final VisitorID.AuthenticationState authState)
```

* _identifiers_ is a map that contains IDs with the identifier type as the key, and the string identifier as the value.
* _authState_ indicates the authentication state for the user, which contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**Example**

```java
Map<String, String> identifiers = new HashMap<String, String>();
identifiers.put("idType1", "idValue1");
identifiers.put("idType2", "idValue2");
identifiers.put("idType3", "idValue3");
Identity.syncIdentifiers(identifiers, VisitorID.AuthenticationState.AUTHENTICATED);
```

<Variant platform="ios-aep" api="sync-identifiers-overloaded" repeat="11"/>

#### Swift

**Syntax**

```swift
@objc(syncIdentifiers:authenticationState:)
static func syncIdentifiers(identifiers: [String: String]?, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.
* The _authenticationState (MobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids, authenticationState: .authenticated)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers)
				  authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids authenticationState:AEPMobileVisitorAuthStateAuthenticated];
```

<Variant platform="ios-acp" api="sync-identifiers-overloaded" repeat="11"/>

#### Swift

**Syntax**

```swift
static func syncIdentifiers(_ identifiers: [AnyHashable : Any]?, authentication authenticationState: ACPMobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
ACPIdentity.syncIdentifiers(identifiers, authentication:
ACPMobileVisitorAuthenticationState.authenticated)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (nullable NSDictionary*) identifiers authentication: (ACPMobileVisitorAuthenticationState) authenticationState;
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[ACPIdentity syncIdentifiers:ids authentication:ACPMobileVisitorAuthenticationStateAuthenticated];
```

<Variant platform="react-native" api="sync-identifiers-overloaded" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
syncIdentifiersWithAuthState(identifiers?: {string: string}, authenticationState: string);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

ACPIdentity.syncIdentifiersWithAuthState({"id1": "identifier1"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```

<Variant platform="flutter" api="sync-identifiers-overloaded" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> syncIdentifiersWithAuthState (Map<String, String> identifiers, ACPMobileVisitorAuthenticationState authState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* The _authState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifiersWithAuthState({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```

<Variant platform="cordova" api="sync-identifiers-overloaded" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPIdentity.syncIdentifiers = function(identifiers, authState, success, fail);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* _authState_ value indicating authentication state for the identifiers to be synced and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.
* _success_ is a callback containing the synced identifiers if the `syncIdentifiers` API executed without any errors.
* _fail_ is a callback containing error information if the `syncIdentifiers` API was executed with errors.

**Example**

```jsx
ACPIdentity.syncIdentifiers({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPIdentity.ACPMobileVisitorAuthenticationStateAuthenticated, function (handleCallback) {
  console.log("AdobeExperienceSDK: " + handleCallback)
}, function (handleError) {
  console.log("AdobeExperenceSDK: Failed to sync identifiers : " + handleError)
});
```

<Variant platform="unity" api="sync-identifiers-overloaded" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void SyncIdentifiers(Dictionary<string, string> ids, ACPAuthenticationState authenticationState)
```

* The _ids_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* _authenticationState_ value indicating authentication state for the identifiers to be synced and contains one of the [ACPAuthenticationState](#public-classes) values.

**Example**

```csharp
Dictionary<string, string> ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.AUTHENTICATED);
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.LOGGED_OUT);
ACPIdentity.SyncIdentifiers(ids, ACPIdentity.ACPAuthenticationState.UNKNOWN);
```

<Variant platform="xamarin" api="sync-identifiers-overloaded" repeat="11"/>

#### C#

**iOS syntax**

```csharp
public static void SyncIdentifiers (NSDictionary identifiers, ACPMobileVisitorAuthenticationState authenticationState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* _authenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Android syntax**

```csharp
public unsafe static void SyncIdentifiers (IDictionary<string, string> identifiers, VisitorID.AuthenticationState authenticationState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value. If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.
* _authenticationState_ value indicating authentication state for the user and contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**iOS example**

```csharp
var ids = new NSMutableDictionary<NSString, NSObject>
{
  ["idsType1"] = new NSString("idValue1"),
  ["idsType2"] = new NSString("idValue2"),
  ["idsType3"] = new NSString("idValue3")
};
ACPIdentity.SyncIdentifiers(ids, ACPMobileVisitorAuthenticationState.LoggedOut);
```

**Android example**

```csharp
var ids = new Dictionary<string, string>();
ids.Add("idsType1", "idValue1");
ids.Add("idsType2", "idValue2");
ids.Add("idsType3", "idValue3");
ACPIdentity.SyncIdentifiers(ids, VisitorID.AuthenticationState.LoggedOut);
```

<Variant platform="android" api="public-classes" repeat="6"/>

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

<Variant platform="ios-aep" api="public-classes" repeat="5"/>

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

<Variant platform="ios-acp" api="public-classes" repeat="6"/>

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```objectivec
typedef NS_ENUM(NSUInteger,
    ACPMobileVisitorAuthenticationState) {    
    ACPMobileVisitorAuthenticationStateUnknown          = 0,    
    ACPMobileVisitorAuthenticationStateAuthenticated    = 1,    
    ACPMobileVisitorAuthenticationStateLoggedOut        = 2  };
```

**ACPMobileVisitorId**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```objectivec
@interface ACPMobileVisitorId : NSObject

@property(nonatomic, strong, nullable) NSString* idOrigin;
@property(nonatomic, strong, nullable) NSString* idType;
@property(nonatomic, strong, nullable) NSString* identifier;
@property(nonatomic, readwrite) ACPMobileVisitorAuthenticationState authenticationState;

@end
```

<Variant platform="react-native" api="public-classes" repeat="7"/>

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

<Variant platform="flutter" api="public-classes" repeat="7"/>

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
```

<Variant platform="cordova" api="public-classes" repeat="4"/>

#### Cordova

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```jsx
ACPIdentity.ACPMobileVisitorAuthenticationStateUnknown = 0;
ACPIdentity.ACPMobileVisitorAuthenticationStateAuthenticated = 1;
ACPIdentity.ACPMobileVisitorAuthenticationStateLoggedOut = 2;
```

<Variant platform="unity" api="public-classes" repeat="4"/>

#### C#

**ACPAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```csharp
ACPIdentity.ACPAuthenticationState.UNKNOWN = 0;
ACPIdentity.ACPAuthenticationState.AUTHENTICATED = 1;
ACPIdentity.ACPAuthenticationState.LOGGED_OUT = 2;
```

<Variant platform="xamarin" api="public-classes" repeat="9"/>

#### C#

**iOS**

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `ACPMobileVisitorId`.

```csharp
ACPMobileVisitorAuthenticationState.Unknown = 0;
ACPMobileVisitorAuthenticationState.Authenticated = 1;
ACPMobileVisitorAuthenticationState.LoggedOut = 2;
```

**Android**

**VisitorID.AuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```csharp
VisitorID.AuthenticationState.Unknown = 0;
VisitorID.AuthenticationState.Authenticated = 1;
VisitorID.AuthenticationState.LoggedOut = 2;
```