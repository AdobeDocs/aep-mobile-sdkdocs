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

<Variant platform="ios-aep" api="get-queue-size" repeat="1"/>

Please use the [getQueueSizeWithCompletionHandler](#getqueuesizewithcompletionhandler) API instead.


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
