---
title: Add Analytics - Unity
---


<TextBlock slots="heading, text" hasCodeBlock/>

### C#

1. After importing the [ACPAnalytics.unitypackage](https://github.com/adobe/unity-acpanalytics/blob/master/bin/ACPAnalytics-0.0.1-Unity.zip), add the Analytics extension for Unity.

   ```csharp
   using com.adobe.marketing.mobile;
   ```

2. Get the extension version.

   ```csharp
   ACPAnalytics.extensionVersion();
   ```