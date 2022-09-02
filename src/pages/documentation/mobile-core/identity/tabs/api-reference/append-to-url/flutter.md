#### Dart

**Syntax**

```dart
Future<String> appendToUrl (String url);
```

* _url_ is the URL to which the visitor information needs to be appended. If the visitor information is nil or empty, the URL is returned as is.

**Example**

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("https://example.com");
} on PlatformException {
  log("Failed to append URL");
}
```