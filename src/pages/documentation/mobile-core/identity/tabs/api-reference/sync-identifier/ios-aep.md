#### Swift

**Syntax**

```swift
@objc(syncIdentifierWithType:identifier:authenticationState:)
static func syncIdentifier(identifierType: String, identifier: String, authenticationState: MobileVisitorAuthenticationState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifierType` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* The _authenticationState (MobileVisitorAuthenticationState)_ value indicates the authentication state for the user and contains one of the [MobileVisitorAuthenticationState](#public-classes) values.

**Example**

```swift
Identity.syncIdentifier(identifierType: "idType",
                            identifier: "idValue",
                        authentication: .unknown)
```

#### Objective-C

**Syntax**

```objectivec
+ (void) syncIdentifierWithType: (NSString * _Nonnull identifierType)
										 identifier: (NSString * _Nonnull identifier)
								 authentication: (enum AEPAuthenticationState authenticationState);
```

**Example**

```objectivec
[AEPMobileIdentity syncIdentifierWithType:@"idType"
                               identifier:@"idValue"
                      authenticationState:AEPMobileVisitorAuthStateUnknown];
```