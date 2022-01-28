---
title: Add Analytics - Flutter
---

<TextBlock slots="heading, text" hasCodeBlock/>

### Flutter

1. Install Analytics.

   Instructions on installing the Analytics SDK in Flutter can be found in the [official Flutter documentation](https://pub.dev/packages/flutter_acpanalytics#-installing-tab-).

2. Import the extension.

   ```dart
   import 'package:flutter_acpanalytics/flutter_acpanalytics.dart';
   ```

3. Get the extension version.

   ```dart
   String version = await FlutterACPAnalytics.extensionVersion;
   ```