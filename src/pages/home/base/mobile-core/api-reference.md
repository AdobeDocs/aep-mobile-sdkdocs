---
title: Mobile Core API reference
description: An API reference for the Mobile Core extensions.
keywords:
- API reference
- Mobile Core
---

# Mobile Core API reference

## clearUpdatedConfiguration

Programmatic updates made to the configuration can be cleared via the `clearUpdatedConfiguration` API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#clearupdatedconfiguration).

## collectMessageInfo

User interactions with local or push notifications can be tracked by invoking the `collectMessageInfo` API. Please refer to [this page](../../../solution/adobe-campaign-standard/index.md#tracking-local-and-push-notification-message-interactions) for more information about tracking local and push notification message interactions.

## collectLaunchInfo

You can provide the user information to the SDK from various launch points in your application.

<InlineAlert variant="info" slots="text"/>

If the Adobe Analytics extension is enabled in your SDK, collecting this launch data results in an Analytics request being sent. Other extensions in the SDK might use the collected data, for example, as a rule condition for an In-App Message.

### Android

The Android SDK automatically registers an `Application.ActivityLifecycleCallbacks`and listens for `onActivityResumed`. When an activity is resumed, SDK collects the data from the activity. Currently, it is being used in the following scenarios:

* Tracking deep link clickthrough
* Tracking push message clickthrough
* Tracking Local Notification clickthrough

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application(_:didFinishLaunchingWithOptions:)`
  * Extract `userInfo` from `url: UIApplication.LaunchOptionsKey`
* Tracking push message clickthrough
  * From `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`

### Syntax

```swift
 public static func collectLaunchInfo(_ userInfo: [String: Any])
```

### Example

```swift
 MobileCore.collectLaunchInfo(userInfo)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application:didFinishLaunchingWithOptions`
  * Extract `userInfo` from `UIApplicationLaunchOptionsURLKey`
    * Tracking push message clickthrough
  * From `application:didReceiveRemoteNotification:fetchCompletionHandler:`

### Syntax

```objc
@objc(collectLaunchInfo:)
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

### Example

```objc
 [AEPMobileCore collectLaunchInfo:launchOptions];
```

## collectPii

The `collectPii` method lets the SDK to collect sensitive or personally identifiable information (PII).

<InlineAlert variant="warning" slots="text"/>

Although this method enables the collection of sensitive data, no data is sent to any Adobe or other third-party endpoints. To send the data to an endpoint, use a PII type postback.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void collectPii(@NonNull final Map<String, String> data)
```

### Example

```java
Map<String, String> data = new HashMap<String, String>();
data.put("firstname", "customer");
//The rule to trigger a PII needs to be setup for this call
//to result in a network send
MobileCore.collectPii(data);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func collectPii(_ data: [String: Any])
```

### Example

```objectivec
MobileCore.collectPii(["key1" : "value1","key2" : "value2"]);
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```swift
 @objc(collectPii:)
 public static func collectPii(_ data: [String: Any])
```

### Example

```objectivec
 [AEPMobileCore collectPii:data:@{@"key1" : @"value1",
                            @"key2" : @"value2"
                            }];
```

\<!--- <Variant platform="react-native" api="collect-pii" repeat="10"/>

#### Javascript

### Syntax

```jsx
ACPCore.collectPii(data: [String : String])
```

### Example

```jsx
ACPCore.collectPii({"myPii": "data"});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
ACPCore.collectPii(data: [String : String])
```

### Example

```objectivec
MobileCore.collectPii(["key1" : "value1","key2" : "value2"]);
``` --->

\<!--- React Native

<Tabs query="platform=react-native&api=collect-pii"/> ---\>

## configureWithAppId

The `configureWithAppId` API can be used to download the configuration for the provided app ID and apply the configuration to the current session. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithappid).

## configureWithFileInAssets

You can bundle a JSON configuration file in the app's assets folder and use `configureWithFileInAssets` API to replace or complement the configuration that was downloaded using the [`configureWithAppId`](#configurewithappid) API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithfileinassets).

## configureWithFileInPath

You can bundle a JSON configuration file in you app package and use `configureWithFileInPath` API to replace or complement the configuration that was downloaded using the [`configureWithAppId`](#configurewithappid) API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithfileinpath).

## dispatch / dispatchEvent

This method can be used to send an event through the Mobile Core for other extensions to consume.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void dispatchEvent(@NonNull final Event event)
```

### Example

```java
final Map<String, Object> eventData = new HashMap<>();
eventData.put("sampleKey", "sampleValue");

final Event sampleEvent = new Event.Builder("SampleEventName", "SampleEventType", "SampleEventSource")
                          .setEventData(eventData)
                          .build();

MobileCore.dispatchEvent(sampleEvent);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func dispatch(event: Event)
```

### Example

```swift
let event = Event(name: "Sample Event Name", type: EventType.custom, source: EventType.custom, data: ["sampleKey": "sampleValue"])
MobileCore.dispatch(event: event)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
@objc(dispatch:)
public static func dispatch(event: Event)
```

### Example

```objectivec
AEPEvent *event = [[AEPEvent alloc] initWithName:@"Sample Event Name" type:AEPEventType.custom source:AEPEventType.custom data:@{@"sampleKey": @"sampleValue"}];
[AEPMobileCore dispatch:event];
```

## dispatch / dispatchEventWithResponseCallback

This method can be used to send an event through the Mobile Core for other extensions to consume. The provided event is used as a trigger and in return a response event is provided as a callback. The callback is invoked with a null event if the response could not be provided within the given timeout.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void dispatchEventWithResponseCallback(@NonNull final Event event, final long timeoutMS, @NonNull final AdobeCallbackWithError<Event> responseCallback)
```

### Example

```java
final Map<String, Object> eventData = new HashMap<>();
eventData.put("sampleKey", "sampleValue");

final Event sampleEvent = new Event.Builder("My Event", "SampleEventType", "SampleEventSource")
                          .setEventData(eventData)
                          .build();

MobileCore.dispatchEventWithResponseCallback(sampleEvent, 5000L, new AdobeCallbackWithError<Event>() {
    // handle response event
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func dispatch(event: Event, timeout: TimeInterval = 1, responseCallback: @escaping (Event?) -> Void)
```

### Example

```swift
let event = Event(name: "My Event", type: EventType.custom, source: EventType.custom, data: ["sampleKey": "sampleValue"])
MobileCore.dispatch(event: event) { (responseEvent) in
    // handle responseEvent
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
@objc(dispatch:timeout:responseCallback:)
public static func dispatch(event: Event, timeout: TimeInterval = 1, responseCallback: @escaping (Event?) -> Void)
```

### Example

```objectivec
AEPEvent *event = [[AEPEvent alloc] initWithName:@"My Event" type:AEPEventType.custom source:AEPEventType.custom data:@{@"sampleKey": @"sampleValue"}];
[AEPMobileCore dispatch:event responseCallback:^(AEPEvent * _Nullable responseEvent) {
    // handle responseEvent
}];
```

## getApplication

You can use the `getApplication` method to get the previously set Android `Application` instance. The `Application` instance is mainly provided for third-party extensions.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

`MobileCore.getApplication` will return `null` if the `Application` object was destroyed or if `MobileCore.setApplication` was not previously called.

### Syntax

```java
@Nullable
public static Application getApplication()
```

### Example

```java
Application app = MobileCore.getApplication();
if (app != null) {
    ...
}
```

## getLogLevel

This API gets the current log level being used in the SDK.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
@NonNull
public static LoggingMode getLogLevel()
```

### Example

```java
LoggingMode mode = MobileCore.getLogLevel();
```

The logLevel getter has been deprecated. To get the log level in the Swift AEP 3.x SDKs, please use `Log.logFilter` instead.
### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static var logFilter: LogLevel
```

This variable is part of the `Log` class within `AEPServices`.

### Example

```swift
var logLevel = Log.logFilter
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="3" />

### Syntax

```objectivec
@objc public static var logFilter: LogLevel
```

### Example

```objectivec
AEPLogLevel logLevel = [AEPLog logFilter];
```

\<!--- <Variant platform="react-native" api="get-log-level" repeat="3"/>

#### Javascript

### Example

```jsx
ACPCore.getLogLevel().then(level => console.log("AdobeExperienceSDK: Log Level = " + level));
``` --->

\<!--- React Native

<Tabs query="platform=react-native&api=get-log-level"/> ---\>

## getPrivacyStatus

You can use the `getPrivacyStatus` API to retrieve the current privacy status. For more information about privacy in Mobile Core, please see [Privacy and GDPR](../../../resources/privacy-and-gdpr.md#getprivacystatus)

## getSdkIdentities

The following SDK identities are locally stored:

* Company Context - IMS Org IDs
* Experience Cloud ID (MID)
* User IDs
* Integration codes (ADID, push IDs)
* Data source IDs (DPID, DPUUID)
* Analytics IDs (AVID, AID, VID, and associated RSIDs)
* Target legacy IDs (TNTID, TNT3rdpartyID)
* Audience Manager ID (UUID)

To retrieve data as a JSON string from the SDKs and send this data to your servers, use the `getSdkIdentities` method.

<InlineAlert variant="warning" slots="text"/>

You must call the API below and retrieve identities stored in the SDK, **before** the user opts out.<br/><br/>This API does **not** include the identities stored in the Edge Identity extension. To retrieve the identities from the Edge Identity extension, use [getIdentities](../../edge/identity-for-edge-network/api-reference.md#getidentities).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
void getSdkIdentities(@NonNull AdobeCallback<String> callback);
```

* _callback_ is invoked with the SDK identities as a JSON string. If an instance of  `AdobeCallbackWithError` is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

### Example

```java
MobileCore.getSdkIdentities(new AdobeCallback<String>() {
    @Override
    public void call(String value) {
        // handle the json string
    }
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

### Example

```swift
 MobileCore.getSdkIdentities { (content, error) in
     // handle completion
 }
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
 @objc(getSdkIdentities:)
 static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

### Example

```objectivec
 [AEPMobileCore getSdkIdentities:^(NSString * _Nullable content, NSError * _Nullable error) {
     if (error) {
       // handle error here
     } else {
       // handle the retrieved identities
     }
 }];
```

## initialize

<InlineAlert variant="info" slots="text" />

This API is available starting from Android version 3.3.0 and iOS version 5.4.0. To enable automatic extension registration on Android, use BOM version 3.8.0 or later.

<InlineAlert variant="info" slots="text" />

This API eliminates the need to register extensions manually using [registerExtensions](#registerextensions) and manage lifecycle tracking with [lifecycleStart](lifecycle/api-reference.md#lifecyclestart) and [lifecyclePause](lifecycle/api-reference.md#lifecyclepause) APIs.

This API initializes AEP SDKs by automatically registering all extensions bundled with the application and enabling automatic lifecycle tracking by default. The completion callback is triggered once the SDK is fully initialized, allowing event processing to begin.

Two versions of this API are available, which accept **app ID** or **InitOptions**:

* **app ID**: Configures the SDK with the provided mobile property environment ID configured from the Data Collection UI.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
 public static void initialize(
            @NonNull final Application application,
            @NonNull final String appId,
            @Nullable final AdobeCallback<?> completionCallback) 
```

* _application_ The Android Application instance.
* _appID_ The mobile property environment ID configured from the Data Collection UI.
* _completionCallback_ An Optional [AdobeCallback](#adobecallback) triggered once initialization is complete.

### Example

```java
public class CoreApp extends Application {
   @Override
   public void onCreate() {
      super.onCreate();
      MobileCore.initialize(this, "ENVIRONMENT_ID", o -> {
          Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
      });
   }
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func initialize(appId: String, _ completion: (() -> Void)? = nil)
```

* _appId_ The mobile property environment ID configured from the Data Collection UI.
* _completion_ An Optional callback triggered once initialization is complete.

### Example

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  MobileCore.initialize(appId: "ENVIRONMENT_ID") {
      print("AEP Mobile SDK is initialized")
  }
  ...
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(initializeWithAppId:completion:)
public static func initialize(appId: String, _ completion: (() -> Void)? = nil) 
```

* _appId_ The mobile property environment ID configured from the Data Collection UI.
* _completion_ An Optional callback triggered once initialization is complete.

### Example

```objc
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [AEPMobileCore initializeWithAppId:@"ENVIRONMENT_ID" completion:^{
      NSLog(@"AEP Mobile SDK is initialized");
  }];
  ...
}
```

* **InitOptions**: Allow customization of the default initialization behavior. Refer [InitOptions](#initoptions).

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void initialize(
            @NonNull final Application application,
            @NonNull final InitOptions initOptions,
            @Nullable final AdobeCallback<?> completionCallback)
```

* _application_ The Android Application instance.
* _initOptions_ The [InitOptions](#initoptions) to configure the SDK.
* _completionCallback_ An Optional [AdobeCallback](#adobecallback) triggered once initialization is complete.

### Example

```java
public class CoreApp extends Application {
   @Override
   public void onCreate() {
      super.onCreate();

      // Use InitOptions to disable automatic lifecycle tracking.
      InitOptions initOptions = InitOptions.configureWithAppID("ENVIRONMENT_ID")
      initOptions.lifecycleAutomaticTrackingEnabled = false
      MobileCore.initialize(this, initOptions, o -> {
          Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
      });
   }
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func initialize(options: InitOptions, _ completion: (() -> Void)? = nil)
```

* _options_ The [InitOptions](#initoptions) to configure the SDK.
* _completion_ An Optional callback triggered once initialization is complete.

### Example

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // Use InitOptions to disable automatic lifecycle tracking.
  let options = InitOptions(appId: "ENVIRONMENT_ID")
  options.lifecycleAutomaticTrackingEnabled = false

  MobileCore.initialize(options: options) {
      print("AEP Mobile SDK is initialized")
  }
  ...
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(initializeWithOptions:completion:)
public static func initialize(options: InitOptions, _ completion: (() -> Void)? = nil)        
```

* _options_ The [InitOptions](#initoptions) to configure the SDK.
* _completion_ An Optional callback triggered once initialization is complete.

### Example

```objc
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Use InitOptions to disable automatic lifecycle tracking.
    AEPInitOptions *options = [[AEPInitOptions alloc] initWithAppId:@"ENVIRONMENT_ID"];
    options.lifecycleAutomaticTrackingEnabled = NO;

    [AEPMobileCore initializeWithOptions:options completion:^{
        NSLog(@"AEP Mobile SDK is initialized");
    }];
    ...
}
```

## log

This is the API used to log from the SDK.

This API was deprecated in v2.0.0 of the Mobile Core extension. Use the `com.adobe.marketing.mobile.services.Log` instead.
### Android Java

<CodeBlock slots="heading, code" repeat="2" />

The `MobileCore` logging APIs use the `android.util.Log` APIs to log messages to Android. Based on the `LoggingMode` that is passed to `MobileCore.log()`, the following Android method is called:

* `LoggingMode.VERBOSE` uses `android.util.Log.v`
* `LoggingMode.DEBUG` uses `android.util.Log.d`
* `LoggingMode.WARNING` uses `android.util.Log.w`
* `LoggingMode.ERROR` uses `android.util.Log.e`

All log messages from the Adobe Experience SDK to Android use the same log tag of `AdobeExperienceSDK`. For example, if logging an error message is using `MobileCore.log()`, the call to `android.util.Log.e` looks like `Log.e("AdobeExperienceSDK", tag + " - " + message)`.

### Syntax

```java
public static void log(final LoggingMode mode, final String tag, final String message)
```

### Example

```java
MobileCore.log(LoggingMode.DEBUG, "MyClassName", "Provided data was null");
```

**Output**

```text
D/AdobeExperienceSDK: MyClassName - Provided data was null
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `Log.error(label:_ message:_)`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

### Syntax

```swift
public static func trace(label: String, _ message: String) {
public static func debug(label: String, _ message: String)
public static func warning(label: String, _ message: String) {
public static func error(label: String, _ message: String) {
```

### Example

```swift
Log.trace(label: "testLabel", "Test message")
Log.debug(label: "testLabel", "Test message")
Log.warning(label: "testLabel", "Test message")
Log.error(label: "testLabel", "Test message")
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="3" />

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `[AEPLog errorWithLabel: _ message:_]`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

### Syntax

```swift
@objc(traceWithLabel:message:)
public static func trace(label: String, _ message: String)

@objc(debugWithLabel:message:)
public static func debug(label: String, _ message: String)

@objc(warningWithLabel:message:)
public static func warning(label: String, _ message: String)

@objc(errorWithLabel:message:)
public static func error(label: String, _ message: String)
```

### Example

```objectivec
[AEPLog traceWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog debugWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog warningWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog errorWithLabel:@"testLabel" message:@"testMessage"];
```

\<!--- <Variant platform="react-native" api="log" repeat="6"/>

#### JavaScript

The log messages from the Adobe Experience SDK are printed to the Log facility and use a common format that contains the tag `ACPMobileLogLevel`.

### Example

```jsx
ACPCore.log(ACPMobileLogLevel.ERROR, "React Native Tag", "React Native Message");
```

Note: `ACPMobileLogLevel` contains the following getters:

```jsx
const ERROR = "ACP_LOG_LEVEL_ERROR";
const WARNING = "ACP_LOG_LEVEL_WARNING";
const DEBUG = "ACP_LOG_LEVEL_DEBUG";
const VERBOSE = "ACP_LOG_LEVEL_VERBOSE";
``` --->

\<!--- React Native

<Tabs query="platform=react-native&api=log"/> ---\>

## registerEventListener

An EventListener can be registered with MobileCore to be notified when Events matching a type and source are dispatched.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void registerEventListener(@NonNull final String eventType, @NonNull final String eventSource, @NonNull final AdobeCallback<Event> callback)
```

### Example

```java
MobileCore.registerEventListener(EventType.CONFIGURATION, EventSource.RESPONSE_CONTENT, new AdobeCallback<Event>() {
    @Override
    public void call(Event value) {
        // handle event
    }
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func registerEventListener(type: String, source: String, listener: @escaping EventListener)
```

### Example

```swift
MobileCore.registerEventListener(type: EventType.configuration, source: EventSource.responseContent, listener: { event in
   // handle event
})
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(registerEventListenerWithType:source:listener:)
public static func registerEventListener(type: String, source: String, listener: @escaping EventListener)
```

### Example

```objectivec
[AEPMobileCore registerEventListenerWithType: type source: source listener:^(AEPEvent * _Nonnull event) {
   // handle event
}];
```

## registerExtension

Extensions can be incrementally registered with Mobile Core using the `registerExtension` API.

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of Mobile Core extension.

Use [registerExtensions](#registerextensions) to register desired extensions and boot up the SDK for event processing. Calling `MobileCore.start()` API is no longer required when using `MobileCore.registerExtensions()`.
### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static boolean registerExtension(@NonNull final Class<? extends Extension> extensionClass, @Nullable final ExtensionErrorCallback<ExtensionError> errorCallback)
```

### Example

```java
MobileCore.registerExtension(Signal.EXTENSION, errorCallback -> {
  // handle callback                   
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func registerExtension(_ exten: Extension.Type, _ completion: (() -> Void)? = nil)
```

### Example

```swift
MobileCore.registerExtension(Lifecycle.self) {
    // handle completion
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(registerExtension:completion:)
public static func registerExtension(_ exten: Extension.Type, _ completion: (() -> Void)? = nil)
```

### Example

```objectivec
[AEPMobileCore registerExtension:AEPMobileLifecycle.class completion:^{
   // handle completion
}];
```

## registerExtensions

Extensions are registered with Mobile Core so that they can dispatch and listen for events.
This API can be used to register desired extensions and boot up the SDK for event processing. Calling `MobileCore.start()` API is deprecated starting Mobile Core v2.0.0 and is no longer required when using `MobileCore.registerExtensions()`.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

The following code snippets demonstrate how Lifecycle, Signal, Profile, Edge, and other extensions are imported and registered.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void registerExtensions(@NonNull final List<Class<? extends Extension>> extensions, @Nullable final AdobeCallback<?> completionCallback)
```

### Example

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Edge;
import com.adobe.marketing.mobile.edge.consent.Consent;
import com.adobe.marketing.mobile.edge.identity.Identity;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
...
import android.app.Application;
...
public class MainApp extends Application {

    // Set up the preferred Environment File ID from your mobile property configured in Data Collection UI
    private static final String ENVIRONMENT_FILE_ID = "YOUR_ENVIRONMENT_FILE_ID";

    @Override
    public void onCreate() {
        super.onCreate();

        MobileCore.setApplication(this);
        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);

        List<Class<? extends Extension>> extensions = Arrays.asList(
                Lifecycle.EXTENSION,
                Signal.EXTENSION,
                UserProfile.EXTENSION
                Edge.EXTENSION,
                Consent.EXTENSION,
                EdgeIdentity.EXTENSION);
        MobileCore.registerExtensions(extensions, o -> {
            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
        });
    }
}
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

### Example

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Signal.self, Lifecycle.self, UserProfile.self, Edge.self, AEPEdgeIdentity.Identity.self, Consent.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
  ...
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(registerExtensions:completion:)
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

### Example

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, AEPMobileLifecycle.class, AEPMobileUserProfile.class, AEPMobileEdge.class, AEPMobileEdgeIdentity.class, AEPMobileEdgeConsent.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```

\<!--- <Variant platform="react-native" api="register-extension" repeat="5"/>

For React Native apps, initialize the SDK using native code in your `AppDelegate` (iOS) and `MainApplication` (Android).

#### iOS

```objectivec
#import "ACPCore.h"
#import "ACPUserProfile.h"
#import "ACPIdentity.h"
#import "ACPLifecycle.h"
#import "ACPSignal.h"
...
@implementation AppDelegate
-(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [ACPCore setLogLevel:ACPMobileLogLevelDebug];
    [ACPCore configureWithAppId:@"<your_environment_id_from_Launch>"];
    [ACPUserProfile registerExtension];
    [ACPIdentity registerExtension];
    [ACPLifecycle registerExtension];
    [ACPSignal registerExtension];

    const UIApplicationState appState = application.applicationState;
    [ACPCore start:^{
      // only start lifecycle if the application is not in the background
      if (appState != UIApplicationStateBackground) {
        [ACPCore lifecycleStart:nil];
      }
    }];
    ...
  return YES;
}

@end
```

#### Android

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Identity;
import com.adobe.marketing.mobile.InvalidInitException;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
...
import android.app.Application;
...
public class MainApplication extends Application implements ReactApplication {
  ...
  @Override
  public void onCreate(){
    super.onCreate();
    ...
    MobileCore.setApplication(this);
    MobileCore.setLogLevel(LoggingMode.DEBUG);
    MobileCore.setWrapperType(WrapperType.REACT_NATIVE);

    try {
      UserProfile.registerExtension();
      Identity.registerExtension();
      Lifecycle.registerExtension();
      Signal.registerExtension();
      MobileCore.start(new AdobeCallback () {
          @Override
          public void call(Object o) {
            MobileCore.configureWithAppID("<your_environment_id_from_Launch>");
         }
      });
    } catch (InvalidInitException e) {
      ...
    }
  }
}
```

\<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/>

### Flutter

#### Dart

For Flutter apps, initialize the SDK using native code in your `AppDelegate` and `MainApplication` in iOS and Android, respectively.

The initialization code is located in the [Flutter ACPCore Github README](https://github.com/adobe/flutter_acpcore). ---\>
 ---\>

## resetIdentities

The `resetIdentities` method requests that each extension resets the identities it owns and each extension responds to this request uniquely. For more details, check the `resetIdentities` API reference on each of the extensions you use.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
void resetIdentities();
```

### Example

```java
MobileCore.resetIdentities();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func resetIdentities()
```

### Example

```swift
MobileCore.resetIdentities()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objectivec
@objc(resetIdentities)
static func resetIdentities()
```

### Example

```objectivec
[AEPMobileCore resetIdentities];
```

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via [Signals](signals/index.md), and is removed at uninstall.

For more information about identity in Mobile Core, please read the documentation on the [identity APIs](identity/api-reference.md#setadvertisingidentifier).

## setAppGroup

You can use the `setAppGroup` method to set the app group, which is used to share user defaults and files among the containing app and the extension apps. Please note that this method is **only** supported on iOS versions of Mobile Core.

<InlineAlert variant="info" slots="text"/>

This API _must_ be called in `AppDidFinishLaunching` and before any other interactions with the Adobe Experience SDK have happened. Only the first call to this function will have any effect.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func setAppGroup(_ group: String?)
```

### Example

```swift
MobileCore.setAppGroup("appGroupId")
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
@objc(setAppGroup:)
public static func setAppGroup(_ group: String?)
```

### Example

```objectivec
[AEPMobileCore setAppGroup:@"app-group-id"];
```

## setApplication

When building Android applications, the `android.app.Application` reference must be passed to Mobile SDK, which allows Mobile SDK to access the `android.app.Context` and monitor the lifecycle of the Android application.

<InlineAlert variant="warning" slots="text"/>

Android applications must call `MobileCore.setApplication()` before calling any other Mobile SDK API. This can be skipped if you are using simplified initialization with the [initialize](#initialize) API.

You can use the `setApplication` method to pass the Android `Application` instance to Mobile SDK. Please note that this method is **only** supported on Android versions of Mobile Core.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void setApplication(@NonNull final Application app)
```

### Example

```java
public class CoreApp extends Application {

   @Override
   public void onCreate() {
      super.onCreate();
      MobileCore.setApplication(this);

      List<Class<? extends Extension>> extensions = Arrays.asList(
                Lifecycle.EXTENSION, Signal.EXTENSION, UserProfile.EXTENSION...);
      MobileCore.registerExtensions(extensions, o -> {
          Log.d(LOG_TAG, "AEP Mobile SDK is initialized");
      });
   }
}
```

## setLogLevel

The logging APIs allow log messages to be tagged and filtered with the Mobile SDK log messages. This allows application developers to filter the logged messages based on the current logging mode.

Application developers can use the `setLogLevel` method to filter the log messages that are coming from the Mobile SDK.

From least to most verbose, the order of Mobile SDK logging modes is as follows:

* ERROR
* WARNING
* DEBUG
* VERBOSE / TRACE

When debugging on iOS, you can use `LogLevel.verbose` to enable all the logging messages that are coming from Mobile SDK and partner extensions. Similarly, on Android, you can use `LoggingMode.VERBOSE` to enable all the logging messages that are coming from Mobile SDK and partner extensions.

In a production application, you should use a less verbose logging mode, such as error-level logging.

By default, Mobile SDK logging mode is set to `LoggingMode.ERROR` for Android and `LogLevel.error`on iOS.

<InlineAlert variant="info" slots="text"/>

On **Android**, Mobile SDK uses the `android.util.Log` class to log messages.<br/><br/>On **iOS**, Mobile SDK uses `NSLog` to messages to Apple System Log facility.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void setLogLevel(@NonNull LoggingMode mode)
```

### Example

```java
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;

MobileCore.setLogLevel(LoggingMode.VERBOSE);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
 public static func setLogLevel(_ level: LogLevel)
```

### Example

```swift
import AEPCore
import AEPServices

  MobileCore.setLogLevel(.trace)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```swift
 @objc(setLogLevel:)
 public static func setLogLevel(_ level: LogLevel)
```

### Example

```objectivec
@import AEPCore;
@import AEPServices;

 [AEPMobileCore setLogLevel: AEPLogLevelTrace];
```

\<!--- <Variant platform="react-native" api="set-log-level" repeat="5"/>

#### Javascript

### Syntax

```jsx
(void) setLogLevel: (ACPMobileLogLevel) logLevel;
```

### Example

```jsx
import {ACPMobileLogLevel} from '@adobe/react-native-acpcore';
ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
```

\<!--- React Native

<Tabs query="platform=react-native&api=set-log-level"/>

### Flutter

#### Dart

### Syntax

```dart
(void) setLogLevel: (ACPMobileLogLevel) logLevel;
```

### Example

```dart
import 'package:flutter_acpcore/src/acpmobile_logging_level.dart';
FlutterACPCore.setLogLevel(ACPLoggingLevel.VERBOSE);
``` --->
 ---\>

## setPrivacyStatus

You can use the `setPrivacyStatus` API to set the privacy status. For more information about privacy in Mobile Core, please see [Privacy and GDPR](../../../resources/privacy-and-gdpr.md#setprivacystatus) API's.

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void setPushIdentifier(@Nullable final String pushIdentifier);
```

* _pushIdentifier_  is a string that contains the device token for push notifications.

### Example

```java
//Retrieve the token from either GCM or FCM, and pass it to the SDK
MobileCore.setPushIdentifier(token);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func setPushIdentifier(_ deviceToken: Data?)
```

### Example

```swift
MobileCore.setPushIdentifier(deviceToken)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
 @objc(setPushIdentifier:)
 public static func setPushIdentifier(_ deviceToken: Data?)
```

### Example

```objectivec
 [AEPMobileCore setPushIdentifier:deviceToken];
```

## setSmallIconResourceID / setLargeIconResourceID

You can set the small and large icons that will be used for notifications that are created by the SDK. The small icon appears in the status bar and is the secondary image that is displayed when the user sees the complete notification in the notification center. The large icon is the primary image that is displayed when the user sees the complete notification in the notification center. Please note that this method is **only** supported on Android versions of Mobile Core.

### Android Java

<CodeBlock slots="heading, code" repeat="4" />

#### setSmallIconResourceID

### Syntax

```java
public static void setSmallIconResourceID(int resourceID)
```

### Example

```java
 MobileCore.setSmallIconResourceID(R.mipmap.ic_launcher_round);
```

#### setLargeIconResourceID

### Syntax

```java
public static void setLargeIconResourceID(int resourceID)
```

### Example

```java
 MobileCore.setLargeIconResourceID(R.mipmap.ic_launcher_round);
```

## setWrapperType

You can use the `setWrapperType` API to set the wrapper type when the SDK is being used in a cross-platform environment.

The wrapper type can be set to one of the follwing types: `NONE`, `REACT_NATIVE`, `FLUTTER`, `CORDOVA`, `UNITY`, `XAMARIN`.
### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void setWrapperType(@NonNull final WrapperType wrapperType)
```

### Example

```java
MobileCore.setWrapperType(WrapperType.REACT_NATIVE);
```

The wrapper type can be set to one of the follwing types: `none`, `reactNative`, `flutter`, `cordova`, `unity`, `xamarin`.
### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func setWrapperType(_ type: WrapperType)
```

### Example

```swift
MobileCore.setWrapperType(.flutter)
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```objc
@objc(setWrapperType:)
public static func setWrapperType(_ type: WrapperType)
```

### Example

```objectivec
[AEPMobileCore setWrapperType:AEPWrapperTypeFlutter];
```

## start

<InlineAlert variant="warning" slots="text"/>

This is an Android only API and has been deprecated starting in v2.0.0 of the Mobile Core extension.
Use [registerExtensions](#registerextensions) to register desired extensions and boot up the SDK for event processing. Calling `MobileCore.start()` API is no longer required when using `MobileCore.registerExtensions()`.

The `start` API triggers Mobile Core to start event processing. This should be used after the desired set of extensions have been registered using `MobileCore.registerExtension()`  or `<EXTENSION_NAME>.registerExtension()`. A call to `start` will wait for any outstanding registrations to complete and then start event processing. You can use the callback to kickoff additional operations immediately after any operations kicked off during registration. This method should not be invoked more than once in your app.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void start(@Nullable final AdobeCallback<?> completionCallback)
```

### Example

```java
import com.adobe.marketing.mobile.AdobeCallback;
import com.adobe.marketing.mobile.Lifecycle;
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.Signal;
import com.adobe.marketing.mobile.UserProfile;
...
import android.app.Application;
...
public class MyApp extends Application {
  ...
  @Override
  public void onCreate(){
    super.onCreate();

    MobileCore.setApplication(this);

    UserProfile.registerExtension();
    Lifecycle.registerExtension();
    Signal.registerExtension();
    MobileCore.start(new AdobeCallback () {
        @Override
        public void call(Object o) {
          // implement callback
        }
    });
  }
}
```

## trackAction

Actions are events that occur in your application. You can use the `trackAction` method to track and measure an action. Each action has one or more corresponding metrics that are incremented each time the event occurs. For example, you can use an action to track new subscriptions, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You want to use the `trackAction` method when you want to track an occurring event. In addition to the action name, you can also send context data with each `trackAction` call.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, this method sends an Adobe Analytics action tracking hit with the provided optional context data.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public static void trackAction(@NonNull final String action, @Nullable final Map<String, String> contextData)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```java
Map<String, String> additionalContextData = new HashMap<String, String>();
additionalContextData.put("customKey", "value");
MobileCore.trackAction("loginClicked", additionalContextData);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

### Example

```swift
 MobileCore.track(action: "action name", data: ["key": "value"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objc
 @objc(trackAction:data:)
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

### Example

```objectivec
  [AEPMobileCore trackAction:@"action name" data:@{@"key":@"value"}];
```

\<!--- <Variant platform="react-native" api="track-action" repeat="6"/>

#### Javascript

### Syntax

```jsx
trackAction(action?: String, contextData?: { string: string });
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```jsx
ACPCore.trackAction("action name", {"key": "value"});
```

\<!--- React Native

<Tabs query="platform=react-native&api=track-action"/>

### Flutter

#### Dart

### Syntax

```dart
Future<void> trackAction (String action, {Map<String, String> contextData});
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```dart
FlutterACPCore.trackAction("action name",  data: {"key": "value"});
``` --->
 ---\>

## trackState

States represent screens or views in your application. The `trackState` method needs to be called every time a new state is displayed in your application. For example, this method should be called when a user navigates from the home page to the news feed. This method sends an Adobe Analytics state tracking hit with optional context data.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, the `trackState` method increments page views and an Adobe Analytics state tracking hit with the provided optional context data.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

In Android, `trackState` is typically called every time a new `Activity` is loaded.

### Syntax

```java
public static void trackState(@NonNull final String state, @Nullable final Map<String, String> contextData)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```java
Map<String, String> additionalContextData = new HashMap<String, String>();        
additionalContextData.put("customKey", "value");
MobileCore.trackState("homePage", additionalContextData);
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

### Example

```swift
 MobileCore.track(state: "state name", data: ["key": "value"])
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="4" />

### Syntax

```objc
 @objc(trackState:data:)
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

### Example

```objectivec
  [AEPMobileCore trackState:@"state name" data:@{@"key":@"value"}];
```

\<!--- <Variant platform="react-native" api="track-state" repeat="6"/>

#### Javascript

### Syntax

```jsx
trackState(state?: String, contextData?: { string: string });
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```jsx
ACPCore.trackState("state name", {"key": "value"});
```

\<!--- React Native

<Tabs query="platform=react-native&api=track-state"/>

### Flutter

#### Dart

### Syntax

```dart
Future<void> trackState (String state, {Map<String, String> contextData});
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

### Example

```dart
FlutterACPCore.trackState("state name",  data: {"key1: "value"})
``` --->
 ---\>

## updateConfiguration

You can update the configuration programmatically by passing configuration keys and values to override the existing configuration using `updateConfiguration` API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#updateconfiguration).

## Public classes

### AdobeCallback

The `AdobeCallback` class (Android) provides the interface to receive results when the asynchronous APIs perform the requested action.

### Android Java

```java
public interface AdobeCallback<T> {    
    void call(final T value);
}
```

### AdobeCallbackWithError

The `AdobeCallbackWithError` class provides the interface to receive results or an error when the asynchronous APIs perform the requested action.

When using this class, if the request cannot be completed within the default timeout or an unexpected error occurs, the request is stopped and the fail method is called with the corresponding `AdobeError` or `AEPError`.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```java
public interface AdobeCallbackWithError<T> extends AdobeCallback<T> {
    void fail(final AdobeError error);
}
```

### Example

```java
MobileCore.getPrivacyStatus(new AdobeCallbackWithError<MobilePrivacyStatus>() {
  @Override
  public void fail(final AdobeError error) {
    if (error == AdobeError.UNEXPECTED_ERROR) {
      // handle unexpected error
    } else if (error == AdobeError.CALLBACK_TIMEOUT) {
      // handle timeout error
    } else if (error == AdobeError.CALLBACK_NULL) {
      // handle null callback error
    } else if (error == AdobeError.EXTENSION_NOT_INITIALIZED) {
      // handle extension not initialized error
    } else if (error == AdobeError.SERVER_ERROR) {
      // handle server error
    } else if (error == AdobeError.NETWORK_ERROR) {
      // handle network error
    } else if (error == AdobeError.INVALID_REQUEST) {
      // handle invalid request error
    } else if (error == AdobeError.INVALID_RESPONSE) {
      // handle invalid response error
    }
  }

  @Override
  public void call(final MobilePrivacyStatus value) {
    // use MobilePrivacyStatus value
  }
});
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

### Example

```swift
MobileCore.getSdkIdentities { (content, error) in
    if let error = error, let aepError = error as? AEPError {
        switch aepError {
        case .unexpected:
          // Handle unexpected error
        case .callbackTimeout:
          // Handle callback timeout error
        case .callbackNil:
          // Handle callback being nil error
        case .none:
          // no error
        case .serverError:
          // handle server error
        case .networkError:
          // handle network error
        case .invalidRequest:
          // handle invalid request error
        case .invalidResponse:
          // handle invalid response error
        case .errorExtensionNotInitialized:
          // handle extension not initialized error
        @unknown default:
          // handle unknown error
        }
    }
    ...
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="1" />

### Example

```objectivec
[AEPMobileCore getSdkIdentities:^(NSString * _Nullable content, NSError * _Nullable error) {
    if (error) {
        if (error.code == AEPErrorUnexpected) {
          // Handle unexpected error
        } else if (error.code == AEPErrorCallbackTimeout) {
          // Handle callback timeout error
        } else if (error.code == AEPErrorCallbackNil) {
          // Handle callback being nil error
        } else if (error.code == AEPErrorNone) {
          // no error     
        } else if (error.code == AEPErrorServerError) {
          // handle server error
        } else if (error.code == AEPErrorNetworkError) {
          // handle network error
        } else if (error.code == AEPErrorInvalidRequest) {
          // handle invalid request error
        } else if (error.code == AEPErrorInvalidResponse) {
          // handle invalid response error  
        } else if (error.code == AEPErrorErrorExtensionNotInitialized) {
          // handle extension not intialized error  
        }
    }
    ...
}];
```

### AdobeError

The `AdobeError` class (Android) shows the errors that can be passed to an `AdobeCallbackWithError`:

* `UNEXPECTED_ERROR` - An unexpected error occurred.
* `CALLBACK_TIMEOUT` - The timeout was met.
* `CALLBACK_NULL` - The provided callback function is null.
* `EXTENSION_NOT_INITIALIZED` - The extension is not initialized.
* `SERVER_ERROR` - There was a server error.
* `NETWORK_ERROR` - There was a network error.
* `INVALID_REQUEST` - There was an invalid request.
* `INVALID_RESPONSE` - There was an invalid response.

### AEPError

The `AEPError` enum (iOS) shows the errors that can be passed to a completion handler callback from any API which uses one:

* `case unexpected` - An unexpected error occured.
* `case callbackTimeout` - The timeout was met.
* `case callbackNil` -  The provided callback function is nil.
* `case none` -  There was no error, used when an error return type is required but there was no error.
* `case serverError` - There was a server error.
* `case networkError` - There was a network error.
* `case invalidRequest` - There was an invalid request.
* `case invalidResponse` - There was an invalid response.
* `case errorExtensionNotInitialized` - The extension is not initialized.

### InitOptions

The InitOptions class defines the options for initializing the AEP SDK. It currently supports the following options:

* `appID` – The App ID used to retrieve remote configurations from Adobe servers.
* `filePath` – The location of a configuration file, either stored locally or within the application’s assets.
* `lifecycleAutomaticTrackingEnabled` – A boolean flag to enable or disable automatic lifecycle tracking (default: true).
* `lifecycleAdditionalContextData` – A map containing extra context data to be sent with the lifecycle start event.
* `appGroup` (iOS only) – A string representing the App Group identifier for sharing data between app extensions and the main application.

For usage details, refer to the InitOptions class on GitHub for [Android](https://github.com/adobe/aepsdk-core-android/blob/main/code/core/src/main/java/com/adobe/marketing/mobile/InitOptions.kt) and [iOS](https://github.com/adobe/aepsdk-core-ios/blob/main/AEPCore/Sources/core/InitOptions.swift).

## Additional information

To learn what context data is, please read the [documentation on context data](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html).
