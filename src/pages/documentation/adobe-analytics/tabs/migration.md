<Variant platform="aep-swift" api="clear-queue" repeat="1"/>

```swift
static func clearQueue()
```

<Variant platform="aep-objc" api="clear-queue" repeat="1"/>

```objc
+ (void) clearQueue;
```

<Variant platform="acp-objc" api="clear-queue" repeat="1"/>

```objc
+ (void) clearQueue;
```

<Variant platform="aep-swift" api="extension-version" repeat="1"/>

```swift
static var extensionVersion: String
```

<Variant platform="aep-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="acp-objc" api="extension-version" repeat="1"/>

```objc
+ (nonnull NSString*) extensionVersion;
```

<Variant platform="aep-swift" api="get-queue-size" repeat="1"/>

```swift
static func getQueueSize(completion: @escaping (Int, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-queue-size" repeat="1"/>

```objc
+ (void) getQueueSize:^(NSInteger queueSize, NSError * _Nullable error)completion;
```

<Variant platform="acp-objc" api="get-queue-size" repeat="1"/>

```objc
+ (void) getQueueSize: (nonnull void (^) (NSUInteger queueSize)) callback;

+ (void) getQueueSizeWithCompletionHandler: (nonnull void (^) (NSUInteger queueSize, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="get-tracking-identifier" repeat="1"/>

```swift
static func getTrackingIdentifier(completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-tracking-identifier" repeat="1"/>

```objc
+ (void) getTrackingIdentifier:^(NSString * _Nullable trackingIdentifier, NSError * _Nullable error)completion;
```

<Variant platform="acp-objc" api="get-tracking-identifier" repeat="1"/>

```objc
+ (void) getTrackingIdentifier: (nonnull void (^) (NSString* __nullable trackingIdentifier)) callback;

+ (void) getTrackingIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable trackingIdentifier, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="get-visitor-identifier" repeat="1"/>

```swift
static func getVisitorIdentifier(completion: @escaping (String?, Error?) -> Void)
```

<Variant platform="aep-objc" api="get-visitor-identifier" repeat="1"/>

```objc
+ (void) getVisitorIdentifier:^(NSString * _Nullable visitorIdentifier, NSError * _Nullable error)completion;
```

<Variant platform="acp-objc" api="get-visitor-identifier" repeat="1"/>

```objc
+ (void) getVisitorIdentifier: (nonnull void (^) (NSString* __nullable visitorIdentifier)) callback;

+ (void) getVisitorIdentifierWithCompletionHandler: (nonnull void (^) (NSString* __nullable visitorIdentifier, NSError* __nullable error)) completionHandler;
```

<Variant platform="aep-swift" api="send-queued-hits" repeat="1"/>

```swift
static func sendQueuedHits()
```

<Variant platform="aep-objc" api="send-queued-hits" repeat="1"/>

```objc
+ (void) sendQueuedHits;
```

<Variant platform="acp-objc" api="send-queued-hits" repeat="1"/>

```objc
+ (void) sendQueuedHits;
```

<Variant platform="aep-swift" api="set-visitor-identifier" repeat="1"/>

```swift
static func setVisitorIdentifier(visitorIdentifier: String)
```

<Variant platform="aep-objc" api="set-visitor-identifier" repeat="1"/>

```objc
+ (void) setVisitorIdentifier:(NSString * _Nonnull) visitorIdentifier;
```

<Variant platform="acp-objc" api="set-visitor-identifier" repeat="1"/>

```objc
+ (void) setVisitorIdentifier: (nonnull NSString*) visitorIdentifier;
```
