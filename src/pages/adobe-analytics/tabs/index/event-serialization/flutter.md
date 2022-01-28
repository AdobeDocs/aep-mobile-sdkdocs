### Dart

**Syntax**

```dart
var contextData = {"eventN:serial number": "&&events"};
```

**Example**

```dart
// create a context data dictionary and add events
var contextData = {"event1:12341234": "&&events"};

// send the tracking call - use either a trackAction or trackState call.
// trackAction example:
FlutterACPCore.trackAction("Action Name",  data: contextData);
// trackState example:
FlutterACPCore.trackState("State Name",  data: contextData);
```