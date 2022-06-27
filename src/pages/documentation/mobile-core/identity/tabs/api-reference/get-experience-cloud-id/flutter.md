#### Dart

**Syntax**

```dart
Future<String> experienceCloudId;
```

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.experienceCloudId;
} on PlatformException {
  log("Failed to get experienceCloudId");
}
```