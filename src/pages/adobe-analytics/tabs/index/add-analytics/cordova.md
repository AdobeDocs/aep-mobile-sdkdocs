---
title: Add Analytics - Cordova
---


<TextBlock slots="heading, text" hasCodeBlock/>

### Cordova

1. After creating your Cordova app and adding the Android and iOS platforms, add the Analytics extension.

   ```text
   cordova plugin add https://github.com/adobe/cordova-acpanalytics.git
   ```

2. Get the extension version.

   ```jsx
   ACPAnalytics.extensionVersion(function(version) {  
      console.log("ACPAnalytics version: " + version);
   }, function(error) {  
      console.log(error);  
   });
   ```