#### Dart

To append visitor information to the URL that is being used to open the web view, call [appendVisitorInfoForUrl](api-reference.md#appendtourl-appendvisitorinfoforurl):

```dart
String result = "";

try {
  result = await FlutterACPIdentity.appendToUrl("www.example.com");
} on PlatformException {
  log("Failed to append URL");
}
```

Alternately, starting with SDK version 1.0.0-beta.1, you can call [getUrlVariables](api-reference.md#geturlvariables) and build your own URL:

```dart
String result = "";

try {
  result = await FlutterACPIdentity.urlVariables;
} on PlatformException {
  log("Failed to get url variables");
}
```