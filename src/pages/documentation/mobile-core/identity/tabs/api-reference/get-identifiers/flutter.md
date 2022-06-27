#### Dart

**Syntax**

```dart
 Future<List<ACPMobileVisitorId>> identifiers;
```

**Example**

```dart
List<ACPMobileVisitorId> result;

try {
  result = await FlutterACPIdentity.identifiers;
} on PlatformException {
  log("Failed to get identifiers");
}
```