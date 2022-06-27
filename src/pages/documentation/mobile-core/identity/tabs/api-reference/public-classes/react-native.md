#### JavaScript

**ACPVisitorID**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```jsx
import {ACPVisitorID} from '@adobe/react-native-acpcore';

var visitorId = new ACPVisitorID(idOrigin?: string, idType: string, id?: string, authenticationState?: ACPMobileVisitorAuthenticationState);
```

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```jsx
import {ACPMobileVisitorAuthenticationState} from '@adobe/react-native-acpcore';

var state = ACPMobileVisitorAuthenticationState.AUTHENTICATED;
//var state = ACPMobileVisitorAuthenticationState.LOGGED_OUT;
//var state = ACPMobileVisitorAuthenticationState.UNKNOWN;
```