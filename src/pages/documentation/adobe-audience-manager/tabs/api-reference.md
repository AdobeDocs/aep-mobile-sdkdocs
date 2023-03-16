<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
String audienceExtensionVersion = Audience.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = Audience.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

#### Swift

**Syntax**

```swift
static var extensionVersion: String
```

**Example**

```swift
let audienceExtensionVersion  = Audience.extensionVersion()
```

#### Objective-C

**Syntax**

```objectivec
+ (nonnull NSString*) extensionVersion;
```

**Example**

```objectivec
NSString *audienceExtensionVersion = [AEPMobileAudience extensionVersion];
```

<Variant platform="android" api="get-visitor-profile" repeat="10"/>

This API returns the most recently obtained visitor profile. For easy access across multiple launches of your app, the visitor profile is saved in `SharedPreferences`. If no signal has been submitted, null is returned.

When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

#### Java

**Syntax**

```java
public static void getVisitorProfile(final AdobeCallback<Map<String, String>> adobeCallback)
```

**Example**

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // your own customized code
    }
};

Audience.getVisitorProfile(visitorProfileCallback);
```

#### Kotlin

**Example**

```java
Audience.getVisitorProfile { visitorProfile ->
    // provide code to process the visitorProfile
}
```

<Variant platform="ios" api="get-visitor-profile" repeat="11"/>

This API returns the most recently obtained visitor profile.

#### Swift

**Syntax**

```swift
static func getVisitorProfile(completion: @escaping ([String: String]?, Error?) -> Void)
```

**Example**

```swift
Audience.getVisitorProfile { (visitorProfile, error) in
   if error != nil {
    // handle the error here
   } else {
    // handle the retrieved visitorProfile here
   }
  }
```

#### Objective-C

**Syntax**

```objectivec
+  (void) getVisitorProfile:^(NSDictionary<NSString *,NSString *> * _Nullable, NSError * _Nullable)completion
```

**Example**

```objc
[AEPMobileAudience getVisitorProfile:^(NSDictionary<NSString *,NSString *> * _Nullable visitorProfile, NSError * _Nullable error) {
   if (error) {
    // handle the error here
   } else {
    // handle the returned visitorProfile dictionary here
   }
}];
```

<Variant platform="android" api="register-extension" repeat="8"/>

#### Java

**Syntax**

```java
public  static void registerExtension()
```

**Example**

```java
Audience.registerExtension();
```

#### Kotlin

**Example**

```java
Audience.registerExtension()
```

<Variant platform="android" api="reset" repeat="9"/>

This API resets the Audience Manager UUID and purges the current visitor profile from `android.content.SharedPreferences`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Java

**Syntax**

```java
public static void reset()
```

**Example**

```java
Audience.reset();
```

#### Kotlin

**Example**

```java
Audience.reset()
```

<Variant platform="ios" api="reset" repeat="11"/>

This API resets the Audience Manager UUID and purges the current visitor profile from `UserDefaults`. The Audience reset also clears the current in-memory DPID and DPUUID variables.

#### Swift

**Syntax**

```swift
static func reset()
```

**Example**

```swift
Audience.reset()
```

#### Objective-C

**Syntax**

```objectivec
+ (void) reset
```

**Example**

```objectivec
[AEPMobileAudience reset];
```

<Variant platform="android" api="signal-with-data" repeat="12"/>

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `SharedPreferences` and is sent by the SDK in all subsequent signal requests. If available, the ECID is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `SharedPreferences` and is updated with every signal call.

When an `AdobeCallbackWithError` is provided, an `AdobeError` can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with the visitor profile.

#### Java

**Syntax**

```java
public static void signalWithData(final Map<String, String> data, final AdobeCallback<Map<String, String>> callback)
```

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

**Example**

```java
AdobeCallback<Map<String, String>> visitorProfileCallback = new AdobeCallback<Map<String, String>>() {
    @Override
    public void call(final Map<String, String> visitorProfile) {
        // handle the returned visitorProfile here
    }
};
​
Map<String, String> traits = new HashMap<String, String>();
traits.put("trait", "xyz");
Audience.signalWithData(traits, visitorProfileCallback);
```
#### Kotlin

**Example**

```java
val traits: Map<String, String?> = mapOf(
    "trait1" to "value1",
    "trait2" to "value2"
)

Audience.signalWithData(traits) { visitorProfile ->
    // handle the returned visitorProfile
}
```

<Variant platform="ios" api="signal-with-data" repeat="13"/>

The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a closure.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `NSUserDefaults` and is sent by the SDK in all subsequent signal requests. If available, the Experience Cloud ID (MID) is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `NSUserDefaults` and is updated with every signal call.

#### Swift

**Syntax**

```swift
static func signalWithData(data: [String: String], completion: @escaping ([String: String]?, Error?) -> Void)
```

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

**Example**

```swift
Audience.signalWithData(data: ["trait": "trait value"]) { (traits, error) in
  if error != nil {
     // handle the error here
     } else {
     // handle the returned visitorProfile here
     }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) signalWithData:(NSDictionary<NSString *,NSString *> * _Nonnull) completion:^(NSDictionary<NSString *,NSString *> * _Nullable, NSError * _Nullable)completion
```

**Example**

```objectivec
NSDictionary *traits = @{@"key1":@"value1",@"key2":@"value2"};
[AEPMobileAudience signalWithData:traits completion:^(NSDictionary<NSString *,NSString *> * _Nullable visitorProfile, NSError* _Nullable error) {
  if (error) {
     // handle the error here
     } else {
     // handle the returned visitorProfile dictionary here
     }
}];
```
