#### C#

**Syntax**

```csharp
public static void SyncIdentifier(string identifierType, string identifier, ACPAuthenticationState authState)
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPAuthenticationState)_ value indicating authentication state for the user and contains one of the following [ACPAuthenticationState](#public-classes) values.

**Example**

```text
ACPIdentity.SyncIdentifier("idType1", "idValue1", ACPIdentity.ACPAuthenticationState.AUTHENTICATED);
```