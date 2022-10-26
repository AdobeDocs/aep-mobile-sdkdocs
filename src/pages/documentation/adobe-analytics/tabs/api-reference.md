<Variant platform="android" api="clear-queue" repeat="5"/>

#### Java

**Syntax**

```java
public static void clearQueue()
```

**Example**

```java
Analytics.clearQueue();
```

<Variant platform="ios-aep" api="clear-queue" repeat="10"/>

#### Swift

**Syntax**

```swift
static func clearQueue()
```

**Example**

```swift
Analytics.clearQueue()
```

#### Objective-C

**Syntax**

```objc
+ (void) clearQueue;
```

**Example**

```objc
[AEPMobileAnalytics clearQueue];
```

<Variant platform="ios-acp" api="clear-queue" repeat="10"/>

#### Swift

**Syntax**

```swift
static func clearQueue()
```

**Example**

```swift
ACPAnalytics.clearQueue()
```

#### Objective-C

**Syntax**

```objc
+ (void) clearQueue;
```

**Example**

```objc
[ACPAnalytics clearQueue];
```

<Variant platform="react-native" api="clear-queue" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
clearQueue();
```

**Example**

```jsx
ACPAnalytics.clearQueue();
```

<Variant platform="flutter" api="clear-queue" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<void> clearQueue();
```

**Example**

```dart
FlutterACPAnalytics.clearQueue();
```

<Variant platform="cordova" api="clear-queue" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.clearQueue = function(success, fail);
```

* _success_ is a callback containing a general success message if the clearQueue API executed without any errors.
* _fail_ is a callback containing error information if the clearQueue API was executed with errors.

**Example**

```jsx
ACPAnalytics.clearQueue(function (handleCallback) {
  console.log("AdobeExperienceSDK: Clear queued hits successful. " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to clear queued hits: " + handleError);
});
```

<Variant platform="unity" api="clear-queue" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void ClearQueue()
```

**Example**

```csharp
ACPAnalytics.ClearQueue();
```

<Variant platform="xamarin" api="clear-queue" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void ClearQueue ();
```

**Example**

```csharp
ACPAnalytics.ClearQueue();
```

<Variant platform="android" api="extension-version" repeat="2"/>

#### Java

```java
String analyticsExtensionVersion = Analytics.extensionVersion();
```

<Variant platform="ios-aep" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let version = Analytics.extensionVersion
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *version = [AEPMobileAnalytics extensionVersion];
```


<Variant platform="ios-acp" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static func extensionVersion()
```

**Example**

```swift
let analyticsExtensionVersion  = ACPAnalytics.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *analyticsExtensionVersion = [ACPAnalytics extensionVersion];
```

<Variant platform="react-native" api="extension-version" repeat="2"/>

#### JavaScript

```jsx
ACPAnalytics.extensionVersion().then(analyticsExtensionVersion => console.log("AdobeExperienceSDK: ACPAnalytics version: " + analyticsExtensionVersion));
```

<Variant platform="flutter" api="extension-version" repeat="2"/>

#### Dart

```dart
String analyticsExtensionVersion = await FlutterACPAnalytics.extensionVersion;
```

<Variant platform="cordova" api="extension-version" repeat="2"/>

### Cordova

```jsx
ACPAnalytics.extensionVersion(function(version) {  
   console.log("ACPAnalytics version: " + version);
}, function(error) {  
   console.log(error);  
});
```

<Variant platform="unity" api="extension-version" repeat="2"/>

#### C#

```csharp
string analyticsExtensionVersion = ACPAnalytics.ExtensionVersion();
```

<Variant platform="xamarin" api="extension-version" repeat="2"/>

#### C#

```csharp
string analyticsExtensionVersion = ACPAnalytics.ExtensionVersion();
```

<Variant platform="android" api="get-queue-size" repeat="6"/>

#### Java

**Syntax**

```java
 public static void getQueueSize(final AdobeCallback<Long> callback)
```

* _callback_ is invoked with the queue size value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with queue size.

**Example**

```java
Analytics.getQueueSize(new AdobeCallback<Long>() {
    @Override
    public void call(final Long queueSize) {
        // handle the queueSize
    }
});
```

<Variant platform="ios-aep" api="get-queue-size" repeat="1"/>

Please use the [getQueueSizeWithCompletionHandler](#getqueuesizewithcompletionhandler) API instead.

<Variant platform="ios-acp" api="get-queue-size" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getQueueSize(_ callback: @escaping (UInt) -> Void)
```

**Example**

```swift
ACPAnalytics.getQueueSize { (queueSize) in    
     // handle queue size   
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getQueueSize: (nonnull void (^) (NSUInteger queueSize)) callback;
```

* _callback_ is invoked with the queue size value.

**Example**

```objectivec
[ACPAnalytics getQueueSize: ^(NSUInteger queueSize) {    
    // handle queue size
}];
```

<Variant platform="react-native" api="get-queue-size" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
getQueueSize(): Promise<?integer>;
```

**Example**

```jsx
ACPAnalytics.getQueueSize().then(size => console.log("AdobeExperienceSDK: Queue size: " + size));
```

<Variant platform="flutter" api="get-queue-size" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<int> getQueueSize;
```

**Example**

```dart
int queueSize;

try {
    queueSize = await FlutterACPAnalytics.queueSize;
} on PlatformException {
    log("Failed to get the queue size");
}
```

<Variant platform="cordova" api="get-queue-size" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.getQueueSize = function(success, fail);
```

* _success_ is a callback containing the `queue size` if the getQueueSize API executed without any errors.
* _fail_ is a callback containing error information if the getQueueSize API was executed with errors.

**Example**

```csharp
ACPAnalytics.getQueueSize(function (handleCallback) {
  console.log("AdobeExperienceSDK: Queue size: " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to get queue size: " + handleError);
});
```

<Variant platform="unity" api="get-queue-size" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetQueueSize(AdobeGetQueueSizeCallback callback)
```

* _callback_ is a callback containing the `queue size` if the GetQueueSize API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetQueueSizeCallback))]
public static void HandleAdobeGetQueueSizeCallback(long queueSize)
{
    Debug.Log("Queue size is : " + queueSize);
}
ACPAnalytics.GetQueueSize(HandleAdobeGetQueueSizeCallback);
```

<Variant platform="xamarin" api="get-queue-size" repeat="13"/>

#### C#

**iOS**

**Syntax**

```csharp
public unsafe static void GetQueueSize (Action<nuint> callback);
```

* _callback_ is a callback containing the `queue size` if the GetQueueSize API executed without any errors.

**Example**

```csharp
ACPAnalytics.GetQueueSize(callback => {
  Console.WriteLine("Queue size: " + callback);
});
```

**Android**

**Syntax**

```csharp
public unsafe static void GetQueueSize (IAdobeCallback callback);
```

* _callback_ is a callback containing the `queue size` if the GetQueueSize API executed without any errors.

**Example**

```csharp
ACPAnalytics.GetQueueSize(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Queue size: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="ios-aep" api="get-queue-size-with-completion-handler" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getQueueSize(completion: @escaping (Int, Error?) -> Void)
```

**Example**

```swift
Analytics.getQueueSize { (queueSize, error) in
    // Handle error (if non-nil) or use queueSize.
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void)getQueueSize:^(NSInteger, NSError * _Nullable)completion
```

**Example**

```objectivec
[AEPMobileAnalytics getQueueSize:^(NSInteger queueSize, NSError * _Nullable error) {
    // Handle error (if non-nil) or use queueSize.
 }];
```

<Variant platform="ios-acp" api="get-queue-size-with-completion-handler" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getQueueSize(completionHandler: @escaping (UInt, Error?) -> Void)
```
**Example**

```swift
ACPAnalytics.getQueueSizeWithCompletionHandler { (queueSize, error) in    
    // Handle error (if non-nil) or use queueSize.  
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getQueueSizeWithCompletionHandler: (nonnull void (^) (NSUInteger queueSize, NSError* __nullable error)) completionHandler;
```

* _completionHandler_ is invoked with the queue size value or an NSError if an unexpected error occurs or the request times out.

**Example**

```objectivec
[ACPAnalytics getQueueSizeWithCompletionHandler: ^(NSUInteger queueSize, NSError * _Nullable error) {    
    // Handle error (if non-nil) or use queueSize.
}];
```

<Variant platform="android" api="get-tracking-identifier" repeat="6"/>

#### Java

**Syntax**

```java
 public static void
   getTrackingIdentifier(final AdobeCallback<String> callback)
```

* _callback_ is invoked with the tracking Identifier string value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with analytics tracking identifier.

**Example**

```java
Analytics.getTrackingIdentifier(new AdobeCallback<String>() {
    @Override
    public void call(final String trackingIdentifier) {
        // check the trackingIdentifier value    
    }
});
```

<Variant platform="ios-aep" api="get-tracking-identifier" repeat="1"/>

Please see the [getTrackingIdentifierWithCompletionHandler](#gettrackingidentifierwithcompletionhandler) section for using this API call.

<Variant platform="ios-acp" api="get-tracking-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getTrackingIdentifier(_ callback: @escaping (String?) -> Void)
```

**Example**

```swift
ACPAnalytics.getTrackingIdentifier { (trackingIdentifier) in
    // check the trackingIdentifier value  
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getTrackingIdentifier: (nonnull void (^) (NSString* __nullable trackingIdentifier)) callback;
```

* _callback_ is invoked with the tracking Identifier string value.

**Example**

```objectivec
[ACPAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier) {
    // check the trackingIdentifier value  
}];
```

<Variant platform="react-native" api="get-tracking-identifier" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
getTrackingIdentifier();
```

* _callback_ is invoked with the tracking Identifier string value.

**Example**

```jsx
ACPAnalytics.getTrackingIdentifier().then(identifier => console.log("AdobeExperienceSDK: Tracking identifier: " + identifier));
```

<Variant platform="flutter" api="get-tracking-identifier" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<String> getTrackingIdentifier;
```

**Example**

```dart
String trackingId;

try {
    trackingId = await FlutterACPAnalytics.trackingIdentifier;
} on PlatformException {
    log("Failed to get the tracking identifier");
}
```

<Variant platform="cordova" api="get-tracking-identifier" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.getTrackingIdentifier = function(success, fail);
```

* _success_ is a callback containing the tracking Identifier string value.
* _fail_ is a callback containing error information if the getTrackingIdentifier API was executed with errors.

**Example**

```jsx
ACPAnalytics.getTrackingIdentifier(function (handleCallback) {
  console.log("AdobeExperienceSDK: Retrieved tracking identifier: " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve tracking identifier: " + handleError);
});
```

<Variant platform="unity" api="get-tracking-identifier" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetTrackingIdentifier(AdobeGetTrackingIdentifierCallback callback)
```

* _callback_ is a callback containing the tracking Identifier string value.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetTrackingIdentifierCallback))]
public static void HandleAdobeGetTrackingIdentifierCallback(string trackingIdentifier)
{
    Debug.Log("Tracking identifier is : " + trackingIdentifier);
}
ACPAnalytics.GetTrackingIdentifier(HandleAdobeGetTrackingIdentifierCallback);
```

<Variant platform="xamarin" api="get-tracking-identifier" repeat="13"/>

#### C#

**iOS**

**Syntax**

```csharp
public unsafe static void GetTrackingIdentifier (Action<NSString> callback);
```

* _callback_ is a callback containing the tracking Identifier string value.

**Example**

```csharp
ACPAnalytics.GetTrackingIdentifier(callback => {
  Console.WriteLine("Tracking identifier: " + callback);
});
```

**Android**

**Syntax**

```csharp
public unsafe static void GetTrackingIdentifier (IAdobeCallback callback);
```

* _callback_ is a callback containing the tracking Identifier string value.

**Example**

```csharp
ACPAnalytics.GetTrackingIdentifier(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Tracking identifier: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="ios-aep" api="get-tracking-identifier-with-completion-handler" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getTrackingIdentifier(completion: @escaping (String?, Error?) -> Void)
```

**Example**

```swift
Analytics.getTrackingIdentifier { (trackingId, error) in
   // Handle the error (if non-nil) or use the trackingIdentifier value
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getTrackingIdentifier:^(NSString * _Nullable, NSError * _Nullable)completion
```

**Example**
```objectivec
AEPMobileAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error) {
   // Handle the error (if non-nil) or use the trackingIdentifier value
}];
```

<Variant platform="ios-acp" api="get-tracking-identifier-with-completion-handler" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getTrackingIdentifier(completionHandler: @escaping (String?, Error?) -> Void)
```

* _completionHandler_ is invoked with the tracking Identifier string value. or an NSError if an unexpected error occurs or the request times out.

**Example**

```swift
ACPAnalytics.getTrackingIdentifierWithCompletionHandler { (trackingIdentifier, error) in    
     // Handle the error (if non-nil) or use the trackingIdentifier value.
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getTrackingIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable trackingIdentifier, NSError* __nullable error)) completionHandler;
```

**Example**

```objectivec
[ACPAnalytics getTrackingIdentifierWithCompletionHandler:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error) {
    // Handle the error (if non-nil) or use the trackingIdentifier value.
}];
```

<Variant platform="android" api="get-visitor-identifier" repeat="6"/>

#### Java

**Syntax**

```java
public static void getVisitorIdentifier(AdobeCallback<String> callback)
```

* _callback_ is invoked with the visitor identifier value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with visitor identifier.

**Example**

```java
Analytics.getVisitorIdentifier(new AdobeCallback<String>() {
    @Override
    public void call(final String visitorIdentifier) {
        // check the visitorIdentifier value    
    }
});
```

<Variant platform="ios-aep" api="get-visitor-identifier" repeat="1"/>

For more information on using this API call, please read [getVisitorIdentifierWithCompletionHandler](#getvisitoridentifierwithcompletionHandler).

<Variant platform="ios-acp" api="get-visitor-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getVisitorIdentifier(_ callback: @escaping (String?) -> Void)
```

* _callback_ is invoked with the visitor identifier value.

**Example**

```swift
ACPAnalytics.getVisitorIdentifier { (visitorIdentifier) in
    // check the visitorIdentifier value  
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getVisitorIdentifier: (nonnull void (^) (NSString* __nullable visitorIdentifier)) callback;
```

**Example**

```objectivec
[ACPAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier) {
    // check the visitorIdentifier value   
}];
```

<Variant platform="react-native" api="get-visitor-identifier" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
getVisitorIdentifier();
```

**Example**

```jsx
ACPAnalytics.getVisitorIdentifier().then(vid => console.log("AdobeExperienceSDK: Visitor identifier: " + vid));
```

<Variant platform="flutter" api="get-visitor-identifier" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<String> visitorIdentifier;
```

**Example**

```dart
String visitorId;

try {
    visitorId = await FlutterACPAnalytics.visitorIdentifier;
} on PlatformException {
    visitorId = "Failed to get the visitor identifier";
}
```

<Variant platform="cordova" api="get-visitor-identifier" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.getVisitorIdentifier = function(success, fail);
```

* _success_ is a callback containing the `Visitor Identifier` string if the getVisitorIdentifier API executed without any errors.
* _fail_ is a callback containing error information if the getVisitorIdentifier API was executed with errors.

**Example**

```jsx
ACPAnalytics.getVisitorIdentifier(function (handleCallback) {
  console.log("AdobeExperienceSDK: Retrieved custom visitor identifier: " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to retrieve custom visitor identifier: " + handleError);
});
```

<Variant platform="unity" api="get-visitor-identifier" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void GetVisitorIdentifier(AdobeGetVisitorIdentifierCallback callback)
```

* _callback_ is a callback containing the `Visitor Identifier` string if the GetVisitorIdentifier API executed without any errors.

**Example**

```csharp
[MonoPInvokeCallback(typeof(AdobeGetVisitorIdentifierCallback))]
public static void HandleAdobeGetVisitorIdentifierCallback(string visitorIdentifier)
{
    Debug.Log("Visitor identifier is : " + visitorIdentifier);
}
ACPAnalytics.GetVisitorIdentifier(HandleAdobeGetVisitorIdentifierCallback);
```

<Variant platform="xamarin" api="get-visitor-identifier" repeat="13"/>

#### C#

**iOS**

**Syntax**

```csharp
public unsafe static void GetVisitorIdentifier (Action<NSString> callback);
```

* _callback_ is a callback containing the visitor Identifier string value.

**Example**

```csharp
ACPAnalytics.GetVisitorIdentifier(callback => {
  Console.WriteLine("Visitor identifier: " + callback);
});
```

**Android**

**Syntax**

```csharp
public unsafe static void GetVisitorIdentifier (IAdobeCallback callback);
```

* _callback_ is a callback containing the visitor Identifier string value.

**Example**

```csharp
ACPAnalytics.GetVisitorIdentifier(new StringCallback());

class StringCallback : Java.Lang.Object, IAdobeCallback
{
  public void Call(Java.Lang.Object stringContent)
  {
    if (stringContent != null)
    {
      Console.WriteLine("Visitor identifier: " + stringContent);
    }
    else
    {
      Console.WriteLine("null content in string callback");
    }
  }
}
```

<Variant platform="ios-aep" api="get-visitor-identifier-with-completion-handler" repeat="10"/>

#### Swift

**Syntax**

```swift
static func getVisitorIdentifier(completion: @escaping (String?, Error?) -> Void)
```

**Example**

```swift
Analytics.getVisitorIdentifier { (visitorIdentifier, error) in
   // Handle the error (if non-nil) or use the visitorIdentifier value
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getVisitorIdentifier:^(NSString * _Nullable, NSError * _Nullable)completion
```

**Example**

```objectivec
[AEPMobileAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier, NSError * _Nullable error) {
   // Handle the error (if non-nil) or use the visitorIdentifier value
}];
```

<Variant platform="ios-acp" api="get-visitor-identifier-with-completion-handler" repeat="11"/>

#### Swift

**Syntax**

```swift
static func getVisitorIdentifier(completionHandler: @escaping (String?, Error?) -> Void)
```

* _completionHandler_ is invoked with the visitor identifier value or an NSError if an unexpected error occurs or the request times out.

**Example**

```swift
ACPAnalytics.getVisitorIdentifierWithCompletionHandler { (visitorIdentifier, error) in
    // Handle the error (if non-nil) or use the visitorIdentifier value
}
```

#### Objective-C

**Syntax**

```objc
+ (void) getVisitorIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable visitorIdentifier, NSError* __nullable error)) completionHandler;
```

**Example**

```objc
[ACPAnalytics getVisitorIdentifierWithCompletionHandler:^(NSString * _Nullable visitorIdentifier, NSError * _Nullable error) {
    // Handle the error (if non-nil) or use the visitorIdentifier value
}];
```

<Variant platform="android" api="send-queued-hits" repeat="5"/>

#### Java

**Syntax**

```java
public static void sendQueuedHits()
```

**Example**

```java
Analytics.sendQueuedHits();
```

<Variant platform="ios-aep" api="send-queued-hits" repeat="10"/>

#### Swift

**Syntax**

```swift
static func sendQueuedHits()
```

**Example**

```swift
[AEPMobileAnalytics sendQueueHits];
```

#### Objective-C

**Syntax**

```objectivec
+ (void) sendQueueHits
```

**Example**

```objectivec
Analytics.sendQueuedHits()
```

<Variant platform="ios-acp" api="send-queued-hits" repeat="10"/>

#### Swift

**Syntax**

```swift
static func sendQueuedHits()
```

**Example**

```swift
ACPAnalytics.sendQueuedHits()
```

#### Objective-C

**Syntax**

```objectivec
+ (void) sendQueuedHits;
```

**Example**

```objectivec
[ACPAnalytics sendQueuedHits];
```

<Variant platform="react-native" api="send-queued-hits" repeat="5"/>

#### JavaScript

**Syntax**

```jsx
sendQueuedHits();
```

**Example**

```jsx
ACPAnalytics.sendQueuedHits();
```

<Variant platform="flutter" api="send-queued-hits" repeat="5"/>

#### Dart

**Syntax**

```dart
Future<void> sendQueuedHits();
```

**Example**

```dart
FlutterACPAnalytics.sendQueuedHits();
```

<Variant platform="cordova" api="send-queued-hits" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.sendQueuedHits = function(success, fail);
```

* _success_ is a callback containing a general success message if the sendQueuedHits API executed without any errors.
* _fail_ is a callback containing error information if the sendQueuedHits API was executed with errors.

**Example**

```jsx
ACPAnalytics.sendQueuedHits(function (handleCallback) {
  console.log("AdobeExperienceSDK: Send queued hits successful. " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to send queued hits: " + handleError);
});
```

<Variant platform="unity" api="send-queued-hits" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void SendQueuedHits()
```

**Example**

```csharp
ACPAnalytics.SendQueuedHits();
```

<Variant platform="xamarin" api="send-queued-hits" repeat="5"/>

#### C#

**Syntax**

```csharp
public static void SendQueuedHits ();
```

**Example**

```csharp
ACPAnalytics.SendQueuedHits();
```

<Variant platform="android" api="set-visitor-identifier" repeat="6"/>

#### Java

**Syntax**

```java
 public static void setVisitorIdentifier(final String visitorIdentifier)
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```java
Analytics.setVisitorIdentifier("custom_identifier");
```

<Variant platform="ios-aep" api="set-visitor-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func setVisitorIdentifier(visitorIdentifier: String)
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```swift
Analytics.setVisitorIdentifier(visitorIdentifier:"custom_identifier")
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setVisitorIdentifier:(NSString * _Nonnull)
```

**Example**

```objectivec
[AEPMobileAnalytics setVisitorIdentifier:@"custom_identifier"];
```

<Variant platform="ios-acp" api="set-visitor-identifier" repeat="11"/>

#### Swift

**Syntax**

```swift
static func setVisitorIdentifier(_ visitorIdentifier: String)
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```swift
ACPAnalytics.setVisitorIdentifier("custom_identifier")
```

#### Objective-C

**Syntax**

```objectivec
+ (void) setVisitorIdentifier: (nonnull NSString*) visitorIdentifier;
```

**Example**

```objectivec
[ACPAnalytics setVisitorIdentifier:@"custom_identifier"];
```

<Variant platform="react-native" api="set-visitor-identifier" repeat="6"/>

#### JavaScript

**Syntax**

```jsx
setVisitorIdentifier(visitorIdentifier);
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```jsx
ACPAnalytics.setVisitorIdentifier("custom_identifier");
```

<Variant platform="flutter" api="set-visitor-identifier" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> setVisitorIdentifier(visitorIdentifier);
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```dart
FlutterACPAnalytics.setVisitorIdentifier("yourVisitorId");
```

<Variant platform="cordova" api="set-visitor-identifier" repeat="6"/>

#### Cordova

**Syntax**

```jsx
ACPAnalytics.setVisitorIdentifier(visitorIdentifier, success, fail);
```

* _visitorIdentifier_ is the new value for the visitor identifier.
* _success_ is a callback containing a general success message if the setVisitorIdentifier API executed without any errors.
* _fail_ is a callback containing error information if the setVisitorIdentifier API was executed with errors.

**Example**

```jsx
ACPAnalytics.setVisitorIdentifier("custom_identifier", function (handleCallback) {
  console.log("AdobeExperienceSDK: Custom visitor identifier set successfully. " + handleCallback);
} ,function (handleError) {
  console.log("AdobeExperenceSDK: Failed to set custom visitor identifier: " + handleError);
});
```

<Variant platform="unity" api="set-visitor-identifier" repeat="6"/>

#### C#

**Syntax**

```csharp
public static void SetVisitorIdentifier(string visitorId)
```

* _visitorId_ is the new value for the visitor identifier.

**Example**

```csharp
ACPAnalytics.SetVisitorIdentifier("VisitorIdentifier");
```

<Variant platform="xamarin" api="set-visitor-identifier" repeat="11"/>

#### C#

**iOS**

**Syntax**

```csharp
public static void SetVisitorIdentifier (string visitorIdentifier);
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Android**

**Syntax**

```csharp
public unsafe static void SetVisitorIdentifier (string visitorID);
```

* _visitorID_ is the new value for the visitor identifier.

**Example**

```csharp
ACPAnalytics.SetVisitorIdentifier("VisitorIdentifier");
```