#### Dart

**Syntax**

```dart
Future<void> syncIdentifiersWithAuthState (Map<String, String> identifiers, ACPMobileVisitorAuthenticationState authState);
```

* The _identifiers_ dictionary contains identifiers, and each identifier contains an `identifier type` as the key and an `identifier` as the value.

  If any of the identifier pairs contains an empty or null value as the `identifier type`, then it will be ignored.

* The _authState_ (ACPMobileVisitorAuthenticationState)\_ indicates the authentication state of the user and contains one of the [ACPMobileVisitorAuthenticationState](#public-classes) values.

**Example**

```dart
import 'package:flutter_acpcore/src/acpmobile_visitor_id.dart';

FlutterACPIdentity.syncIdentifiersWithAuthState({"idType1":"idValue1", "idType2":"idValue2", "idType3":"idValue3"}, ACPMobileVisitorAuthenticationState.UNKNOWN);
```