#### Dart

**ACPVisitorID**

This is an identifier to be used with the Adobe Experience Cloud Identity Service and it contains the origin, the identifier type, the identifier, and the authentication state of the visitor ID.

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';


class ACPMobileVisitorId {
  String get idOrigin;
  String get idType;
  String get identifier;
  ACPMobileVisitorAuthenticationState get authenticationState;
};
```

**ACPMobileVisitorAuthenticationState**

This is used to indicate the authentication state for the current `VisitorID`.

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

enum ACPMobileVisitorAuthenticationState {UNKNOWN, AUTHENTICATED, LOGGED_OUT};
```