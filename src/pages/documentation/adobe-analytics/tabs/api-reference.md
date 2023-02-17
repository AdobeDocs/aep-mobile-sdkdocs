<Variant platform="android" api="clear-queue" repeat="8"/>

#### Java

**Syntax**

```java
public static void clearQueue()
```

**Example**

```java
Analytics.clearQueue();
```

#### Kotlin

**Example**

```java
Analytics.clearQueue();
```

<Variant platform="ios" api="clear-queue" repeat="10"/>

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

<Variant platform="android" api="extension-version" repeat="8"/>

#### Java

**Syntax**

```java
public static String extensionVersion()
```

**Example**

```java
String analyticsExtensionVersion = Analytics.extensionVersion();
```

#### Kotlin

**Example**

```java
val extensionVersion = Analytics.extensionVersion();
```

<Variant platform="ios" api="extension-version" repeat="10"/>

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

<Variant platform="android" api="get-queue-size" repeat="8"/>

#### Java

**Syntax**

```java
public static void getQueueSize(@NonNull final AdobeCallback<Long> callback)
```

**Example**

```java
Analytics.getQueueSize(new AdobeCallbackWithError<Long>() {
    @Override
    public void fail(AdobeError adobeError) {
        // Handle the error
    }

    @Override
    public void call(Long size) {
        // Handle the queue size
    }
});
```

#### Kotlin

**Example**

```java
Analytics.getQueueSize(object: AdobeCallbackWithError<Long> {
    override fun call(size: Long?) {
        // Handle the queue size
    }

    override fun fail(error: AdobeError?) {
        // Handle the error
    }
})
```

<Variant platform="ios" api="get-queue-size" repeat="1"/>

Please use the [getQueueSizeWithCompletionHandler](#getqueuesizewithcompletionhandler) API instead.

<Variant platform="ios" api="get-queue-size-with-completion-handler" repeat="10"/>

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

<Variant platform="android" api="get-tracking-identifier" repeat="9"/>

#### Java

**Syntax**

```java
public static void getTrackingIdentifier(@NonNull final AdobeCallback<String> callback)
```

* _callback_ is invoked with the tracking Identifier string value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with analytics tracking identifier.

**Example**

```java
Analytics.getTrackingIdentifier(new AdobeCallbackWithError<String>() {
    @Override
    public void fail(AdobeError adobeError) {
        // Handle the error
    }

    @Override
    public void call(String s) {
        // Handle the Experience Cloud ID
    }
});
```

#### Kotlin

**Example**

```java
Analytics.getTrackingIdentifier(object: AdobeCallbackWithError<String> {
    override fun call(id: String?) {
        // Handle the Experience Cloud ID
    }

    override fun fail(error: AdobeError?) {
        // Handle the error
    }
})
```

<Variant platform="ios" api="get-tracking-identifier" repeat="1"/>

Please see the [getTrackingIdentifierWithCompletionHandler](#gettrackingidentifierwithcompletionhandler) section for using this API call.


<Variant platform="ios" api="get-tracking-identifier-with-completion-handler" repeat="10"/>

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

<Variant platform="android" api="get-visitor-identifier" repeat="9"/>

#### Java

**Syntax**

```java
public static void getVisitorIdentifier(@NonNull final AdobeCallback<String> callback)
```

* _callback_ is invoked with the visitor identifier value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with visitor identifier.

**Example**

```java
Analytics.getVisitorIdentifier(new AdobeCallbackWithError<String>() {
    @Override
    public void fail(AdobeError adobeError) {
        // Handle the error
    }

    @Override
    public void call(String s) {
        // Handle the Visitor ID
    }
});
```

#### Kotlin

**Example**

```java
Analytics.getVisitorIdentifier(object: AdobeCallbackWithError<String> {
    override fun call(id: String?) {
        // Handle the Visitor ID
    }

    override fun fail(error: AdobeError?) {
        // Handle the error
    }
})
```

<Variant platform="ios" api="get-visitor-identifier" repeat="1"/>

For more information on using this API call, please read [getVisitorIdentifierWithCompletionHandler](#getvisitoridentifierwithcompletionHandler).

<Variant platform="ios" api="get-visitor-identifier-with-completion-handler" repeat="10"/>

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

<Variant platform="android" api="register-extension" repeat="8"/>

#### Java

**Syntax**

```java
public static void registerExtension()
```

**Example**

```java
Analytics.registerExtension();
```

#### Kotlin

**Example**

```kotlin
Analytics.registerExtension()
```

<Variant platform="android" api="send-queued-hits" repeat="8"/>

#### Java

**Syntax**

```java
public static void sendQueuedHits()
```

**Example**

```java
Analytics.sendQueuedHits();
```

#### Kotlin

**Example**

```java
Analytics.sendQueuedHits();
```

<Variant platform="ios" api="send-queued-hits" repeat="10"/>

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

<Variant platform="android" api="set-visitor-identifier" repeat="9"/>

#### Java

**Syntax**

```java
public static void setVisitorIdentifier(@NonNull final String visitorID)
```

* _visitorIdentifier_ is the new value for the visitor identifier.

**Example**

```java
Analytics.setVisitorIdentifier("custom_identifier");
```

#### Kotlin

**Example**

```java
Analytics.setVisitorIdentifier("custom_identifier");
```

<Variant platform="ios" api="set-visitor-identifier" repeat="11"/>

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
