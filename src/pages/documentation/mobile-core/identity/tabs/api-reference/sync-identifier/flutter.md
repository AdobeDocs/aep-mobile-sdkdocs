#### Dart

**Syntax**

```dart
Future<void> syncIdentifier(String identifierType, String identifier, ACPMobileVisitorAuthenticationState authState);
```

* The _identifierType (String)_ contains the `identifier type`, and this parameter should not be null or empty. The allowed characters are [A-Za-z0-9_.]
* The _identifier (String)_ contains the `identifier` value, and this parameter should not be null or empty.

  If either the `identifier type` or `identifier` contains a null or an empty string, the identifier is ignored by the Identity extension.

* _authState (ACPMobileVisitorAuthenticationState_ value indicating authentication state for the user and contains one of the following [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifier("identifierType", "identifier", ACPMobileVisitorAuthenticationState.AUTHENTICATED);
```