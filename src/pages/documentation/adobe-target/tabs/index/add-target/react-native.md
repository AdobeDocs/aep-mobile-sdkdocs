#### JavaScript

1. Install Target.

   ```javascript
    npm install @adobe/react-native-acptarget
    react-native link @adobe/react-native-acptarget
   ```

2. Import the extension and related libraries.

   ```javascript
    import {ACPTarget, ACPTargetPrefetchObject, ACPTargetRequestObject, ACPTargetOrder, ACPTargetProduct, ACPTargetParameters} from '@adobe/react-native-acptarget';
   ```

3. Get the extension version.

   ```javascript
    ACPTarget.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPTarget version: " + version));
   ```