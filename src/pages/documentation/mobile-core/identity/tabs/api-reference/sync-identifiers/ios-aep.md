#### Swift

**Syntax**

```swift
@objc(syncIdentifiers:)
static func syncIdentifiers(identifiers: [String: String]?)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids)
```

#### Objective-C

**Syntax**
```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids];
```