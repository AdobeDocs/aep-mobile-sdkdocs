#### Dart

This method forces the library to send all hits in the offline queue, regardless of how many hits are currently queued.

**Syntax**

```dart
Future<void> sendQueuedHits();
```

**Example**

```dart
FlutterACPAnalytics.sendQueuedHits();
```