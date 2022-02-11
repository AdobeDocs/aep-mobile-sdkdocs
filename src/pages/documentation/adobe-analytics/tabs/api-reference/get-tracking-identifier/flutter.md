#### Dart

**Syntax**

```dart
Future<String> getTrackingIdentifier;
```

**Example**

```dart
String trackingId;

try {
    trackingId = await FlutterACPAnalytics.trackingIdentifier;
} on PlatformException {
    log("Failed to get the tracking identifier");
}
```