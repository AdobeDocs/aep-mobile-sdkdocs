---
title: Add Analytics - React Native
---


<TextBlock slots="heading, text" hasCodeBlock/>

#### JavaScript

1. Install Adobe Analytics.

   ```bash
   npm install @adobe/react-native-acpanalytics
   ```

2. Link the module and the application.

   For React Native versions 0.6 and above, you can use the [CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) to link the module while building the app.

   For React Native versions less than or equal to 0.59, you can use the following scripts:

   ```bash
    react-native link @adobe/react-native-acpanalytics
   ```

   If you are using iOS and `cocoapods`, run:

   ```bash
    cd ios/ && pod install
   ```

3. Import the extension.

   ```jsx
    import {ACPAnalytics} from '@adobe/react-native-acpanalytics';
   ```

4. Get the extension version.

   ```jsx
    ACPAnalytics.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAnalytics version: " + version));
   ```