---
title: Add Analytics - Xamarin
---

<TextBlock slots="heading, text" hasCodeBlock/>

### C#

1. After adding the iOS or Android ACPAnalytics NuGet package, add the Analytics extension.

   ```csharp
   using Com.Adobe.Marketing.Mobile;
   ```

2. Get the extension version.

   ```csharp
   ACPAnalytics.ExtensionVersion();
   ```