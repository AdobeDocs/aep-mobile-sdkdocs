#### JavaScript

Install Audience Manager in your project.

```jsx
npm install @adobe/react-native-acpaudience
react-native link @adobe/react-native-acpaudience
```

Import the extension.

```jsx
import {ACPAudience} from '@adobe/react-native-acpaudience';
```

Ensure the extension version is correct.

```jsx
ACPAudience.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAudience version: " + version));
```