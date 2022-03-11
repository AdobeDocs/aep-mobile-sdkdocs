The `signalWithData` API sends Audience Manager a signal with traits and returns the matching segments for the visitor in a callback.

Audience Manager sends the AAM UUID in response in initial signal call. The AAM UUID is persisted in `NSUserDefaults` and is sent by the SDK in all subsequent signal requests. If available, the Experience Cloud ID (MID) is also sent in each signal request with the DPID and the DPUUID. The visitor profile that Audience Manager returns is saved in `NSUserDefaults` and is updated with every signal call.

<InlineAlert variant="info" slots="text"/>

The `signalWithData:withCompletionHandler` method was added in ACPAudience version 2.1.0.

#### Objective-C

**Syntax**

```objc
+ (void) signalWithData: (NSDictionary<NSString*, NSString*>* __nullable) data
                       callback: (nullable void (^) (NSDictionary* __nullable visitorProfile)) callback;

+ (void) signalWithData: (NSDictionary<NSString*, NSString*>* __nullable) data
                        withCompletionHandler:: (nullable void (^) (NSDictionary* __nullable visitorProfile, NSError* __nullable error)) completionHandler;
```

* `data` is the traits data for the current visitor.
* `callback` is the void method that is invoked with the visitor's profile as a parameter.

**Example**

```objc
NSDictionary *traits = @{@"key1":@"value1",@"key2":@"value2"};
[ACPAudience signalWithData:traits callback:^(NSDictionary* _Nullable visitorProfile){
  // handle the returned visitorProfile dictionary here
}];

[ACPAudience signalWithData:traits withCompletionHandler:^(NSDictionary * _Nullable visitorProfile, NSError * _Nullable error) {
  if (error) {
    // handle the error here
  } else {
    // handle the returned visitorProfile dictionary here
  }
}];
```

#### Swift

**Example**

```swift
ACPAudience.signal(withData: ["key1": "value1", "key2": "value2"], callback: { (visitorProfile) in
  // handle the visitorProfile here  
})

ACPAudience.signal(withData: ["key1": "value1", "key2": "value2"], withCompletionHandler: { (visitorProfile, error) in
  if let error = error {
    // handle error
  } else {
    // handle the returned visitorProfile here
  }    
})
```