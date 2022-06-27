#### Swift

**Syntax**

```swift
@objc(getIdentifiers:)
static func getIdentifiers(completion: @escaping ([Identifiable]?, Error?) -> Void)
```

* _completion_ is invoked with a list of  _Identifiable_ objects after the customer identifiers are available, or _Error_ if an unexpected error occurs or the request times out. The returned `Error` contains the [AEPError](../../api-reference.md#public-classes) code of the specific error.

**Example**

```swift
Identity.getIdentifiers { identifiers, error in
  if let error = error {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}
```

#### Objective-C

**Syntax**

```objectivec
+ (void) getIdentifiers: ^(NSArray<id<AEPIdentifiables>> * _Nullable identifiers, NSError * _Nullable error) completion;
```

**Example**

```objectivec
[[AEPMobileIdentity getIdentifiers:^(NSArray<id<AEPIdentifiable>> * _Nullable identifiers, NSError *error) {
  if (error) {
    // handle error here
  } else {
    // handle the retrieved identifiers here
  }
}];
```