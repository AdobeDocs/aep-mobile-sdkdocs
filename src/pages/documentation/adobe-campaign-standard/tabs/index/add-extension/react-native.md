You'll need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Campaign Standard extension, you'll need to install the [Core extension](../mobile-core/indexs.md). Follow these steps to get started:

1. Create a React Native project.

```bash
react-native init MyReactApp
```

1. Install and link the `@adobe/react-native-acpcampaign` package.

```bash
npm install @adobe/react-native-acpcampaign
react-native link @adobe/react-native-acpcampaign
```

1. Import the extension from `@adobe/react-native-acpcampaign`.

```bash
import {ACPCampaign} from '@adobe/react-native-acpcampaign';
```