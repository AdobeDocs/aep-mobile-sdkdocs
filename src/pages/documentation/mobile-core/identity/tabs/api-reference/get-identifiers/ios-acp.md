<InlineAlert variant="info" slots="text"/>

Method `getIdentifiersWithCompletionHandler` was added in ACPCore version 2.5.0 and ACPIdentity version 2.2.0.

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

#### Swift

**Syntax**

```swift
static func getIdentifiers(_ callback: @escaping ([ACPMobileVisitorId]?) -> Void)
static func getIdentifiersWithCompletionHandler(_ completionHandler: @escaping ([ACPMobileVisitorId]?, Error?) -> Void)
```

* _callback_ is invoked after the customer identifiers are available.
* _completionHandler_ is invoked with _visitorIDs_ after the customer identifiers are available, or _error_ if an unexpected error occurs or the request times out. The returned `NSError` contains the [ACPError](../api-reference.md#acperror) code of the specific error. The default timeout of 500ms.

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