#### C#

**iOS syntax**

```csharp
public static void SyncIdentifier (string identifierType, string identifier, ACPMobileVisitorAuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authenticationState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Android syntax**

```csharp
public unsafe static void SyncIdentifier (string identifierType, string identifier, VisitorID.AuthenticationState authenticationState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authenticationState (AuthenticationState)_ value indicating authentication state for the user and contains one of the following [VisitorID.AuthenticationState](#public-classes) values.

**iOS example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPMobileVisitorAuthenticationState.Authenticated);
```

**Android example**

```csharp
ACPIdentity.SyncIdentifier("idType1", "idValue1", VisitorID.AuthenticationState.Authenticated);
```