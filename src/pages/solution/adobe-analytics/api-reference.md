---
title: Adobe Analytics API reference
description: An API reference for the Adobe Analytics mobile extension.
keywords:
- Adobe Analytics
- API reference
---

# Analytics API reference

## clearQueue

Force delete, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void clearQueue()
```

#### Example

```java
Analytics.clearQueue();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Analytics.clearQueue();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func clearQueue()
```

#### Example

```swift
Analytics.clearQueue()
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objc
+ (void) clearQueue;
```

#### Example

```objc
[AEPMobileAnalytics clearQueue];
```

## extensionVersion

The `extensionVersion()` API returns the version of the Analytics extension that is registered with the Mobile Core extension.

To get the version of the Analytics extension, use the following code sample:

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static String extensionVersion()
```

#### Example

```java
String analyticsExtensionVersion = Analytics.extensionVersion();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
val extensionVersion = Analytics.extensionVersion();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static var extensionVersion: String
```

#### Example

```swift
let version = Analytics.extensionVersion
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (nonnull NSString*) extensionVersion;
```

#### Example

```objectivec
NSString *version = [AEPMobileAnalytics extensionVersion];
```

## getQueueSize

Retrieves the total number of Analytics hits in the tracking queue.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getQueueSize(@NonNull final AdobeCallback<Long> callback)
```

#### Example

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

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

Please use the [getQueueSizeWithCompletionHandler](#getqueuesizewithcompletionhandler) API instead.

## getQueueSizeWithCompletionHandler

Retrieves the total number of Analytics hits in the tracking queue. Invoke the callback with NSError if an unexpected error occurs or the request times out.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getQueueSize(completion: @escaping (Int, Error?) -> Void)
```

#### Example

```swift
Analytics.getQueueSize { (queueSize, error) in
    // Handle error (if non-nil) or use queueSize.
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void)getQueueSize:^(NSInteger, NSError * _Nullable)completion
```

#### Example

```objectivec
[AEPMobileAnalytics getQueueSize:^(NSInteger queueSize, NSError * _Nullable error) {
    // Handle error (if non-nil) or use queueSize.
 }];
```

## getTrackingIdentifier

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled as well as on [MobileCore.resetIdentities](#resetidentities) API call or on privacy status opt out.

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.\<br/\>\<br/\>Before using this API, see the documentation on identifying [unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

### Android Java

* _callback_ is invoked with the tracking Identifier string value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with analytics tracking identifier.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getTrackingIdentifier(@NonNull final AdobeCallback<String> callback)
```

#### Example

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

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

### iOS

Please see the [getTrackingIdentifierWithCompletionHandler](#gettrackingidentifierwithcompletionhandler) section for using this API call.

## getTrackingIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Starting with v1.2.9 (Android) / v3.0.3(iOS AEPAnalytics) / v2.5.1 (iOS ACPAnalytics) this API does not generate or retrieve a new tracking identifier (AID) for new visitors. For the visitors which have an AID previously generated will continue retrieve the AID value with this API, and new users will use the ECID (MID) value as the primary identity.\<br/\>\<br/\>Before you use this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Retrieves the Analytics tracking identifier that is generated for this app/device instance. This identifier is an app-specific, unique visitor ID that is generated at the initial launch and is stored and used after the initial launch. The ID is preserved between app upgrades and is removed when the app is uninstalled. Invoke the callback with NSError if an unexpected error occurs or the request times out.

<InlineAlert variant="info" slots="text"/>

If you have an [Experience Cloud ID](../../home/base/mobile-core/identity/api-reference.md#getexperiencecloudid) and have not yet configured a visitor ID grace period, the value returned by `getTrackingIdentifier` may be null.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getTrackingIdentifier(completion: @escaping (String?, Error?) -> Void)
```

#### Example

```swift
Analytics.getTrackingIdentifier { (trackingId, error) in
   // Handle the error (if non-nil) or use the trackingIdentifier value
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) getTrackingIdentifier:^(NSString * _Nullable, NSError * _Nullable)completion
```

#### Example

```objectivec
AEPMobileAnalytics getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error) {
   // Handle the error (if non-nil) or use the trackingIdentifier value
}];
```

## getVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, please read the documentation on [identifying unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier).

### Android Java

* _callback_ is invoked with the visitor identifier value. When an AdobeCallbackWithError is provided, an AdobeError can be returned in the eventuality of an unexpected error or if the default timeout (5000ms) is met before the callback is returned with visitor identifier.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void getVisitorIdentifier(@NonNull final AdobeCallback<String> callback)
```

#### Example

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

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

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

For more information on using this API call, please read [getVisitorIdentifierWithCompletionHandler](#getvisitoridentifierwithcompletionHandler).

## getVisitorIdentifierWithCompletionHandler

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

This API gets a custom Analytics visitor identifier, which has been set previously using [setVisitorIdentifier](#setvisitoridentifier). Callback with NSError if an unexpected error occurs or the request times out.

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func getVisitorIdentifier(completion: @escaping (String?, Error?) -> Void)
```

#### Example

```swift
Analytics.getVisitorIdentifier { (visitorIdentifier, error) in
   // Handle the error (if non-nil) or use the visitorIdentifier value
}
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) getVisitorIdentifier:^(NSString * _Nullable, NSError * _Nullable)completion
```

#### Example

```objectivec
[AEPMobileAnalytics getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier, NSError * _Nullable error) {
   // Handle the error (if non-nil) or use the visitorIdentifier value
}];
```

## registerExtension

<InlineAlert variant="warning" slots="text1, text2"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../../../home/base/mobile-core/api-reference.md#registerextensions) API instead.

Registers the Analytics extension with the Mobile Core SDK.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void registerExtension()
```

#### Example

```java
Analytics.registerExtension();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```kotlin
Analytics.registerExtension()
```

## resetIdentities

Clears the identities stored in the Analytics extension - `tracking identifier (AID)` and the `custom visitor identifiers (VID)` stored in the Analytics extension and force deletes, without sending to Analytics, all hits being stored or batched on the SDK.

<InlineAlert variant="info" slots="text"/>

Support for this API was added in: \<ul\>\<li\>Android Analytics version 1.2.9\</li\>\<li\>iOS AEPAnalytics version 3.0.3\</li\>\</ul\>\<br/\>See [MobileCore.resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities) for more details.

## sendQueuedHits

Sends all queued hits to Analytics, regardless of the current hit batch settings.

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

<InlineAlert variant="warning" slots="text"/>

Use caution when manually clearing the queue. This operation cannot be reverted.

### Android Java

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void sendQueuedHits()
```

#### Example

```java
Analytics.sendQueuedHits();
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Analytics.sendQueuedHits();
```

### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func sendQueuedHits()
```

#### Example

```swift
[AEPMobileAnalytics sendQueueHits];
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) sendQueueHits
```

#### Example

```objectivec
Analytics.sendQueuedHits()
```

## setVisitorIdentifier

<InlineAlert variant="warning" slots="text"/>

Before using this API, see [Identify unique visitors](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html).

Sets a custom Analytics visitor identifier. For more information, see [Custom Visitor ID](https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/visitorid.html).

### Android Java

* _visitorIdentifier_ is the new value for the visitor identifier.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```java
public static void setVisitorIdentifier(@NonNull final String visitorID)
```

#### Example

```java
Analytics.setVisitorIdentifier("custom_identifier");
```

### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

#### Example

```java
Analytics.setVisitorIdentifier("custom_identifier");
```

### iOS Swift

* _visitorIdentifier_ is the new value for the visitor identifier.

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```swift
static func setVisitorIdentifier(visitorIdentifier: String)
```

#### Example

```swift
Analytics.setVisitorIdentifier(visitorIdentifier:"custom_identifier")
```

### iOS Objective-C

<CodeBlock slots="heading, code" repeat="2" />

#### Syntax

```objectivec
+ (void) setVisitorIdentifier:(NSString * _Nonnull)
```

#### Example

```objectivec
[AEPMobileAnalytics setVisitorIdentifier:@"custom_identifier"];
```

