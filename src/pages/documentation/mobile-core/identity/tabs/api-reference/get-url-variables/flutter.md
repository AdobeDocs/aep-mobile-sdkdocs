#### Dart

**Syntax**

```dart
 Future<String> urlVariables;
```

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
```