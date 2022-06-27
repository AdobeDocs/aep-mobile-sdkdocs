#### JavaScript

**Syntax**

```jsx
syncIdentifiersWithAuthState(identifiers?: {string: string}, authenticationState: string);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* The _authenticationState (ACPMobileVisitorAuthenticationState)_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

ACPIdentity.syncIdentifiersWithAuthState({"id1": "identifier1"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```