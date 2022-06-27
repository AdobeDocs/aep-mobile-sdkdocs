#### Java

**Syntax**

```java
public static void syncIdentifier(final String identifierType,
                                  final String identifier,
                                  final VisitorID.AuthenticationState authenticationState);
```

* _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* _identifier (String)_ contains the `identifier value`, and this parameter should not be null or empty.
* _authenticationState (AuthenticationState)_ indicates the authentication state of the user and contains one of the [VisitorID.AuthenticationState](#public-classes) values.

**Example**

```java
Identity.syncIdentifier("idType",
                        "idValue",
                        VisitorID.AuthenticationState.AUTHENTICATED);
```