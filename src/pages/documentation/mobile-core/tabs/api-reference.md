<Variant platform="android" api="collect-launch-info" repeat="2"/>

The Android SDK automatically registers an `Application.ActivityLifecycleCallbacks`and listens for `onActivityResumed`. When an activity is resumed, SDK collects the data from the activity. Currently, it is being used in the following scenarios:

* Tracking deep link clickthrough
* Tracking push message clickthrough
* Tracking Local Notification clickthrough

<Variant platform="ios" api="collect-launch-info" repeat="14"/>

#### Swift

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application(_:didFinishLaunchingWithOptions:)`
  * Extract `userInfo` from `url: UIApplication.LaunchOptionsKey`
* Tracking push message clickthrough
  * From `application(_:didReceiveRemoteNotification:fetchCompletionHandler:)`

**Syntax**

```swift
 public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```swift
 MobileCore.collectLaunchInfo(userInfo)
```

#### Objective-C

This method should be called to support the following use cases:

* Tracking deep link clickthroughs
  * From `application:didFinishLaunchingWithOptions`
  * Extract `userInfo` from `UIApplicationLaunchOptionsURLKey`
    * Tracking push message clickthrough
  * From `application:didReceiveRemoteNotification:fetchCompletionHandler:`

**Syntax**

```objc
@objc(collectLaunchInfo:)
public static func collectLaunchInfo(_ userInfo: [String: Any])
```

**Example**

```objc
 [AEPMobileCore collectLaunchInfo:launchOptions];
```

<Variant platform="android" api="collect-pii" repeat="5"/>

#### Java

**Syntax**

```java
public static void collectPII(@NonNull final Map<String, String> piiData);
```

**Example**

```java
Map<String, String> data = new HashMap<String, String>();
data.put("firstname", "customer");
//The rule to trigger a PII needs to be setup for this call
//to result in a network send
MobileCore.collectPII(data);
```

<Variant platform="ios" api="collect-pii" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func collectPii(_ data: [String: Any])
```

**Example**

```objectivec
MobileCore.collectPii(["key1" : "value1","key2" : "value2"]);
```

#### Objective-C

**Syntax**

```swift
 @objc(collectPii:)
 public static func collectPii(_ data: [String: Any])
```

**Example**

```objectivec
 [AEPMobileCore collectPii:data:@{@"key1" : @"value1",
                            @"key2" : @"value2"
                            }];
```

<!--- <Variant platform="react-native" api="collect-pii" repeat="10"/>

#### Javascript

**Syntax**

```jsx
ACPCore.collectPii(data: [String : String])
```

**Example**

```jsx
ACPCore.collectPii({"myPii": "data"});
```

#### Swift

**Syntax**

```swift
ACPCore.collectPii(data: [String : String])
```

**Example**

```objectivec
MobileCore.collectPii(["key1" : "value1","key2" : "value2"]);
``` --->

<Variant platform="android" api="dispatch-event" repeat="5"/>

#### Java

**Syntax**

```java
public static void dispatchEvent(@NonNull final Event event)
```

**Example**

```java
final Map<String, Object> eventData = new HashMap<>();
eventData.put("sampleKey", "sampleValue");

final Event sampleEvent = new Event.Builder("SampleEventName", "SampleEventType", "SampleEventSource")
                          .setEventData(eventData)
                          .build();

MobileCore.dispatchEvent(sampleEvent);
```

<Variant platform="ios" api="dispatch-event" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func dispatch(event: Event)
```

**Example**

```swift
let event = Event(name: "Sample Event Name", type: EventType.custom, source: EventType.custom, data: ["sampleKey": "sampleValue"])
MobileCore.dispatch(event: event)
```

#### Objective-C

**Syntax**

```objectivec
@objc(dispatch:)
public static func dispatch(event: Event)
```

**Example**

```objectivec
AEPEvent *event = [[AEPEvent alloc] initWithName:@"Sample Event Name" type:AEPEventType.custom source:AEPEventType.custom data:@{@"sampleKey": @"sampleValue"}];
[AEPMobileCore dispatch:event];
```

<Variant platform="android" api="dispatch-event-with-response-callback" repeat="5"/>

#### Java

**Syntax**

```java
public static void dispatchEventWithResponseCallback(@NonNull final Event event, final long timeoutMS, @NonNull final AdobeCallbackWithError<Event> responseCallback)
```

**Example**

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

<Variant platform="ios" api="dispatch-event-with-response-callback" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func dispatch(event: Event, timeout: TimeInterval = 1, responseCallback: @escaping (Event?) -> Void)
```

**Example**

```swift
let event = Event(name: "My Event", type: EventType.custom, source: EventType.custom, data: ["sampleKey": "sampleValue"])
MobileCore.dispatch(event: event) { (responseEvent) in
    // handle responseEvent
}
```

#### Objective-C

**Syntax**

```objectivec
@objc(dispatch:timeout:responseCallback:)
public static func dispatch(event: Event, timeout: TimeInterval = 1, responseCallback: @escaping (Event?) -> Void)
```

**Example**

```objectivec
AEPEvent *event = [[AEPEvent alloc] initWithName:@"My Event" type:AEPEventType.custom source:AEPEventType.custom data:@{@"sampleKey": @"sampleValue"}];
[AEPMobileCore dispatch:event responseCallback:^(AEPEvent * _Nullable responseEvent) {
    // handle responseEvent
}];
```


<Variant platform="android" api="get-application" repeat="6"/>

#### Java

`MobileCore.getApplication` will return `null` if the `Application` object was destroyed or if `MobileCore.setApplication` was not previously called.

**Syntax**

```java
@Nullable
public static Application getApplication()
```

**Example**

```java
Application app = MobileCore.getApplication();
if (app != null) {
    ...
}
```

<Variant platform="android" api="get-log-level" repeat="5"/>

#### Java

**Syntax**

```java
@NonNull
public static LoggingMode getLogLevel()
```

**Example**

```java
LoggingMode mode = MobileCore.getLogLevel();
```

<Variant platform="ios" api="get-log-level" repeat="12"/>

The logLevel getter has been deprecated. To get the log level in the Swift AEP 3.x SDKs, please use `Log.logFilter` instead.

#### Swift

**Syntax**

```swift
public static var logFilter: LogLevel
```

This variable is part of the `Log` class within `AEPServices`.

**Example**

```swift
var logLevel = Log.logFilter
```

#### Objective-C

**Syntax**

```objectivec
@objc public static var logFilter: LogLevel
```

**Example**

```objectivec
AEPLogLevel logLevel = [AEPLog logFilter];
```

<!--- <Variant platform="react-native" api="get-log-level" repeat="3"/>

#### Javascript

**Example**

```jsx
ACPCore.getLogLevel().then(level => console.log("AdobeExperienceSDK: Log Level = " + level));
``` --->

<Variant platform="android" api="get-sdk-identities" repeat="6"/>

#### Java

**Syntax**

```java
void getSdkIdentities(@NonNull AdobeCallback<String> callback);
```

* _callback_ is invoked with the SDK identities as a JSON string. If an instance of  `AdobeCallbackWithError` is provided, and you are fetching the attributes from the Mobile SDK, the timeout value is 5000ms. If the operation times out or an unexpected error occurs, the `fail` method is called with the appropriate `AdobeError`.

**Example**

```java
MobileCore.getSdkIdentities(new AdobeCallback<String>() {
    @Override
    public void call(String value) {
        // handle the json string
    }
});
```

<Variant platform="ios" api="get-sdk-identities" repeat="12"/>

#### Swift

**Syntax**

```swift
static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

**Example**

```swift
 MobileCore.getSdkIdentities { (content, error) in
     // handle completion
 }
```

#### Objective-C

**Syntax**

```objectivec
 @objc(getSdkIdentities:)
 static func getSdkIdentities(completion: @escaping (String?, Error?) -> Void)
```

* _callback_ is invoked with the SDK identities as a JSON string.
* _completionHandler_ is invoked with the SDK identities as a JSON string, or _error_ if an unexpected error occurs or the request times out. The default timeout is 1000ms.

**Example**

```objectivec
 [AEPMobileCore getSdkIdentities:^(NSString * _Nullable content, NSError * _Nullable error) {
     if (error) {
       // handle error here
     } else {
       // handle the retrieved identities
     }
 }];
```

<Variant platform="android" api="log" repeat="11"/>

This API was deprecated in v2.0.0 of the Mobile Core extension. Use the `com.adobe.marketing.mobile.services.Log` instead.

#### Java

The `MobileCore` logging APIs use the `android.util.Log` APIs to log messages to Android. Based on the `LoggingMode` that is passed to `MobileCore.log()`, the following Android method is called:

* `LoggingMode.VERBOSE` uses `android.util.Log.v`
* `LoggingMode.DEBUG` uses `android.util.Log.d`
* `LoggingMode.WARNING` uses `android.util.Log.w`
* `LoggingMode.ERROR` uses `android.util.Log.e`

All log messages from the Adobe Experience SDK to Android use the same log tag of `AdobeExperienceSDK`. For example, if logging an error message is using `MobileCore.log()`, the call to `android.util.Log.e` looks like `Log.e("AdobeExperienceSDK", tag + " - " + message)`.

**Syntax**

```java
public static void log(final LoggingMode mode, final String tag, final String message)
```

**Example**

```java
MobileCore.log(LoggingMode.DEBUG, "MyClassName", "Provided data was null");
```

**Output**

```text
D/AdobeExperienceSDK: MyClassName - Provided data was null
```

<Variant platform="ios" api="log" repeat="12"/>

#### Swift

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `Log.error(label:_ message:_)`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

**Syntax**

```swift
public static func trace(label: String, _ message: String) {
public static func debug(label: String, _ message: String)
public static func warning(label: String, _ message: String) {
public static func error(label: String, _ message: String) {
```

**Example**

```swift
Log.trace(label: "testLabel", "Test message")
Log.debug(label: "testLabel", "Test message")
Log.warning(label: "testLabel", "Test message")
Log.error(label: "testLabel", "Test message")
```

#### Objective-C

The log messages from the Adobe Experience SDK are printed to the Apple System Log facility and use a common format that contains the tag `AEP SDK`. For example, if logging an error message using `[AEPLog errorWithLabel: _ message:_]`, the printed output looks like `[AEP SDK ERROR <label>]: message`.

**Syntax**

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

**Example**

```objectivec
[AEPLog traceWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog debugWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog warningWithLabel:@"testLabel" message:@"testMessage"];
[AEPLog errorWithLabel:@"testLabel" message:@"testMessage"];
```

<!--- <Variant platform="react-native" api="log" repeat="6"/>

#### JavaScript

The log messages from the Adobe Experience SDK are printed to the Log facility and use a common format that contains the tag `ACPMobileLogLevel`.

**Example**

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

<Variant platform="android" api="register-event-listener" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerEventListener(@NonNull final String eventType, @NonNull final String eventSource, @NonNull final AdobeCallback<Event> callback)
```

**Example**

```java
MobileCore.registerEventListener(EventType.CONFIGURATION, EventSource.RESPONSE_CONTENT, new AdobeCallback<Event>() {
    @Override
    public void call(Event value) {
        // handle event
    }
});
```

<Variant platform="ios" api="register-event-listener" repeat="10"/>


#### Swift

**Syntax**

```swift
public static func registerEventListener(type: String, source: String, listener: @escaping EventListener)
```

**Example**

```swift
MobileCore.registerEventListener(type: EventType.configuration, source: EventSource.responseContent, listener: { event in
   // handle event 
})
```

#### Objective-C

**Syntax**

```objc
@objc(registerEventListenerWithType:source:listener:)
public static func registerEventListener(type: String, source: String, listener: @escaping EventListener)
```

**Example**

```objectivec
[AEPMobileCore registerEventListenerWithType: type source: source listener:^(AEPEvent * _Nonnull event) {
   // handle event
}];
```

<Variant platform="android" api="register-extension" repeat="5"/>

#### Java

**Syntax**

```java
public static boolean registerExtension(@NonNull final Class<? extends Extension> extensionClass, @Nullable final ExtensionErrorCallback<ExtensionError> errorCallback)
```

**Example**

```java
MobileCore.registerExtension(Signal.EXTENSION, errorCallback -> {
  // handle callback                   
});
```

<Variant platform="ios" api="register-extension" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func registerExtension(_ exten: Extension.Type, _ completion: (() -> Void)? = nil)
```

**Example**

```swift
MobileCore.registerExtension(Lifecycle.self) {
    // handle completion
}
```

#### Objective-C

**Syntax**

```objc
@objc(registerExtension:completion:)
public static func registerExtension(_ exten: Extension.Type, _ completion: (() -> Void)? = nil)
```

**Example**

```objectivec
[AEPMobileCore registerExtension:AEPMobileLifecycle.class completion:^{
   // handle completion
}];
```

<Variant platform="android" api="register-extensions" repeat="5"/>

#### Java

**Syntax**

```java
public static void registerExtensions(@NonNull final List<Class<? extends Extension>> extensions, @Nullable final AdobeCallback<?> completionCallback)
```

**Example**

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

<Variant platform="ios" api="register-extensions" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```swift
// AppDelegate.swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MobileCore.registerExtensions([Signal.self, Lifecycle.self, UserProfile.self, Edge.self, AEPEdgeIdentity.Identity.self, Consent.self], {
        MobileCore.configureWith(appId: "yourAppId")
    })
  ...
}
```

#### Objective-C

**Syntax**

```objc
@objc(registerExtensions:completion:)
public static func registerExtensions(_ extensions: [NSObject.Type], _ completion: (() -> Void)? = nil)
```

**Example**

```objectivec
// AppDelegate.m
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [AEPMobileCore registerExtensions:@[AEPMobileSignal.class, AEPMobileLifecycle.class, AEPMobileUserProfile.class, AEPMobileEdge.class, AEPMobileEdgeIdentity.class, AEPMobileEdgeConsent.class] completion:^{
    [AEPMobileCore configureWithAppId: @"yourAppId"];
  }];
  ...
}
```

<!--- <Variant platform="react-native" api="register-extension" repeat="5"/>

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
  public void on Create(){
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

<Variant platform="flutter" api="register-extension" repeat="3"/>

#### Dart

For Flutter apps, initialize the SDK using native code in your `AppDelegate` and `MainApplication` in iOS and Android, respectively.

The initialization code is located in the [Flutter ACPCore Github README](https://github.com/adobe/flutter_acpcore). --->

<Variant platform="android" api="reset-identities" repeat="5"/>

#### Java

**Syntax**

```java
void resetIdentities();
```

**Example**

```java
MobileCore.resetIdentities();
```

<Variant platform="ios" api="reset-identities" repeat="10"/>

#### Swift

**Syntax**

```swift
static func resetIdentities()
```

**Example**

```swift
MobileCore.resetIdentities()
```

#### Objective-C

**Syntax**

```objectivec
@objc(resetIdentities)
static func resetIdentities()
```

**Example**

```objectivec
[AEPMobileCore resetIdentities];
```

<Variant platform="ios" api="set-app-group" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func setAppGroup(_ group: String?)
```

**Example**

```swift
MobileCore.setAppGroup("appGroupId")
```

#### Objective-C

**Syntax**

```swift
@objc(setAppGroup:)
public static func setAppGroup(_ group: String?)
```

**Example**

```objectivec
[AEPMobileCore setAppGroup:@"app-group-id"];
```

<Variant platform="android" api="set-application" repeat="5"/>

#### Java

**Syntax**

```java
public static void setApplication(@NonNull final Application app)
```

**Example**

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

<Variant platform="android" api="set-log-level" repeat="5"/>

#### Java

**Syntax**

```java
public static void setLogLevel(@NonNull LoggingMode mode)
```

**Example**

```java
import com.adobe.marketing.mobile.LoggingMode;
import com.adobe.marketing.mobile.MobileCore;

MobileCore.setLogLevel(LoggingMode.VERBOSE);
```

<Variant platform="ios" api="set-log-level" repeat="10"/>

#### Swift

**Syntax**

```swift
 public static func setLogLevel(_ level: LogLevel)
```

**Example**

```swift
import AEPCore
import AEPServices

  MobileCore.setLogLevel(.trace)
```

#### Objective-C

**Syntax**

```swift
 @objc(setLogLevel:)
 public static func setLogLevel(_ level: LogLevel)
```

**Example**

```objectivec
@import AEPCore;
@import AEPServices;

 [AEPMobileCore setLogLevel: AEPLogLevelTrace];
```

<!--- <Variant platform="react-native" api="set-log-level" repeat="5"/>

#### Javascript

**Syntax**

```jsx
(void) setLogLevel: (ACPMobileLogLevel) logLevel;
```

**Example**

```jsx
import {ACPMobileLogLevel} from '@adobe/react-native-acpcore';
ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
```

<Variant platform="flutter" api="set-log-level" repeat="5"/>

#### Dart

**Syntax**

```dart
(void) setLogLevel: (ACPMobileLogLevel) logLevel;
```

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_logging_level.dart';
FlutterACPCore.setLogLevel(ACPLoggingLevel.VERBOSE);
``` --->

<Variant platform="android" api="set-push-identifier" repeat="6"/>

#### Java

**Syntax**

```java
public static void setPushIdentifier(@Nullable final String pushIdentifier);
```

* _pushIdentifier_  is a string that contains the device token for push notifications.

**Example**

```java
//Retrieve the token from either GCM or FCM, and pass it to the SDK
MobileCore.setPushIdentifier(token);
```

<Variant platform="ios" api="set-push-identifier" repeat="10"/>

#### Swift

**Syntax**

```swift
public static func setPushIdentifier(_ deviceToken: Data?)
```

**Example**

```swift
MobileCore.setPushIdentifier(deviceToken)
```

#### Objective-C

**Syntax**

```objc
 @objc(setPushIdentifier:)
 public static func setPushIdentifier(_ deviceToken: Data?)
```

**Example**

```objectivec
 [AEPMobileCore setPushIdentifier:deviceToken];
```

<Variant platform="android" api="set-icon-resource-id" repeat="11"/>

#### Java

#### setSmallIconResourceID

**Syntax**

```java
public static void setSmallIconResourceID(int resourceID)
```

**Example**

```java
 MobileCore.setSmallIconResourceID(R.mipmap.ic_launcher_round);
```

#### setLargeIconResourceID

**Syntax**

```java
public static void setLargeIconResourceID(int resourceID)
```

**Example**

```java
 MobileCore.setLargeIconResourceID(R.mipmap.ic_launcher_round);
```

<Variant platform="android" api="set-wrapper-type" repeat="6"/>

The wrapper type can be set to one of the follwing types: `NONE`, `REACT_NATIVE`, `FLUTTER`, `CORDOVA`, `UNITY`, `XAMARIN`.

#### Java

**Syntax**

```java
public static void setWrapperType(@NonNull final WrapperType wrapperType)
```

**Example**

```java
MobileCore.setWrapperType(WrapperType.REACT_NATIVE);
```

<Variant platform="ios" api="set-wrapper-type" repeat="11"/>

The wrapper type can be set to one of the follwing types: `none`, `reactNative`, `flutter`, `cordova`, `unity`, `xamarin`.

#### Swift

**Syntax**

```swift
public static func setWrapperType(_ type: WrapperType)
```

**Example**

```swift
MobileCore.setWrapperType(.flutter)
```

#### Objective-C

**Syntax**

```objc
@objc(setWrapperType:)
public static func setWrapperType(_ type: WrapperType)
```

**Example**

```objectivec
[AEPMobileCore setWrapperType:AEPWrapperTypeFlutter];
```

<Variant platform="android" api="start" repeat="5"/>

#### Java

**Syntax**

```java
public static void start(@Nullable final AdobeCallback<?> completionCallback)
```

**Example**

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
  public void on Create(){
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

<Variant platform="android" api="track-action" repeat="6"/>

#### Java

**Syntax**

```java
public static void trackAction(@NonNull final String action, @Nullable final Map<String, String> contextData)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();
additionalContextData.put("customKey", "value");
MobileCore.trackAction("loginClicked", additionalContextData);
```

<Variant platform="ios" api="track-action" repeat="12"/>

#### Swift

**Syntax**

```swift
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```swift
 MobileCore.track(action: "action name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```objc
 @objc(trackAction:data:)
 static func track(action: String?, data: [String: Any]?)
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```objectivec
  [AEPMobileCore trackAction:@"action name" data:@{@"key":@"value"}];
```

<!--- <Variant platform="react-native" api="track-action" repeat="6"/>

#### Javascript

**Syntax**

```jsx
trackAction(action?: String, contextData?: { string: string });
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```jsx
ACPCore.trackAction("action name", {"key": "value"});
```

<Variant platform="flutter" api="track-action" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> trackAction (String action, {Map<String, String> contextData});
```

* _action_ contains the name of the action to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```dart
FlutterACPCore.trackAction("action name",  data: {"key": "value"});
``` --->

<Variant platform="android" api="track-state" repeat="7"/>

#### Java

In Android, `trackState` is typically called every time a new `Activity` is loaded.

**Syntax**

```java
public static void trackState(@NonNull final String state, @Nullable final Map<String, String> contextData)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```java
Map<String, String> additionalContextData = new HashMap<String, String>();        
additionalContextData.put("customKey", "value");
MobileCore.trackState("homePage", additionalContextData);
```

<Variant platform="ios" api="track-state" repeat="12"/>

#### Swift

**Syntax**

```swift
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```swift
 MobileCore.track(state: "state name", data: ["key": "value"])
```

#### Objective-C

**Syntax**

```objc
 @objc(trackState:data:)
 static func track(state: String?, data: [String: Any]?)
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on this hit.

**Example**

```objectivec
  [AEPMobileCore trackState:@"state name" data:@{@"key":@"value"}];
```

<!--- <Variant platform="react-native" api="track-state" repeat="6"/>

#### Javascript

**Syntax**

```jsx
trackState(state?: String, contextData?: { string: string });
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```jsx
ACPCore.trackState("state name", {"key": "value"});
```

<Variant platform="flutter" api="track-state" repeat="6"/>

#### Dart

**Syntax**

```dart
Future<void> trackState (String state, {Map<String, String> contextData});
```

* _state_ contains the name of the state to track.
* _contextData_ contains the context data to attach on the hit.

**Example**

```dart
FlutterACPCore.trackState("state name",  data: {"key1: "value"})
``` --->

<Variant platform="android" api="public-classes" repeat="13"/>

#### Java

#### AdobeCallback

The `AdobeCallback` class provides the interface to receive results when the asynchronous APIs perform the requested action.

```java
public interface AdobeCallback<T> {    
    void call(final T value);
}
```

#### AdobeCallbackWithError

The `AdobeCallbackWithError` class provides the interface to receive results or an error when the asynchronous APIs perform the requested action.

When using this class, if the request cannot be completed within the default timeout or an unexpected error occurs, the request is stopped and the fail method is called with the corresponding `AdobeError`.

```java
public interface AdobeCallbackWithError<T> extends AdobeCallback<T> {
    void fail(final AdobeError error);
}
```

#### AdobeError

The `AdobeError` class shows the errors that can be passed to an `AdobeCallbackWithError`:

* `UNEXPECTED_ERROR` - An unexpected error occurred.
* `CALLBACK_TIMEOUT` - The timeout was met.
* `CALLBACK_NULL` - The provided callback function is null.
* `EXTENSION_NOT_INITIALIZED` - The extension is not initialized.

**Example**

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
    }
  }

  @Override
  public void call(final MobilePrivacyStatus value) {
    // use MobilePrivacyStatus value
  }
});
```

<Variant platform="ios" api="public-classes" repeat="8"/>

#### AEPError

The `AEPError` enum shows the errors that can be passed to a completion handler callback from any API which uses one:

* `case unexpected` - An unexpected error occured.
* `case callbackTimeout` - The timeout was met.
* `case callbackNil` -  The provided callback function is nil.
* `case none` -  There was no error, used when an error return type is required but there was no error.
* `case serverError` - There was a server error.
* `case networkError` - There was a network error.
* `case invalidRequest` - There was an invalid request.
* `case invalidResponse` - There was an invalid response.
* `case errorExtensionNotInitialized` - The extension is not initialized.

**Example**

**Swift**

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

**Objective-C**

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