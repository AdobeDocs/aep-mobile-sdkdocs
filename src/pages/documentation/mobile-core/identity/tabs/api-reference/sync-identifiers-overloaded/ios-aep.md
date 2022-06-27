#### Swift

**Syntax**

```swift
@objc(syncIdentifiers:authenticationState:)
static func syncIdentifiers(identifiers: [String: String]?, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifiers_ dictionary contains identifier type as the key and identifier as the value, both identifier type and identifier should be non empty and non nil values.

* The _authenticationState (MobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
let ids : [String: String] = ["idType1":"idValue1",
                              "idType2":"idValue2",
                              "idType3":"idValue3"];
Identity.syncIdentifiers(identifiers: ids, authenticationState: .authenticated)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifiers: (NSDictionary<NSString *, NSString *> * _Nullable identifiers)
				  authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
NSDictionary *ids = @{@"idType1":@"idValue1",
                      @"idType2":@"idValue2",
                      @"idType3":@"idValue3"};
[AEPMobileIdentity syncIdentifiers:ids authenticationState:AEPMobileVisitorAuthStateAuthenticated];
```