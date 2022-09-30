import AddDependenciesIosACP from './tabs/get-the-sdk/add-dependencies/ios-acp.md'
import AddDependenciesIosAEP from './tabs/get-the-sdk/add-dependencies/ios-aep.md'
import AddDependenciesAndroid from './tabs/get-the-sdk/add-dependencies/android.md'
import AddInitializationCodeIosACP from './tabs/get-the-sdk/add-initialization-code/ios-acp.md'
import AddInitializationCodeIosAEP from './tabs/get-the-sdk/add-initialization-code/ios-aep.md'
import AddInitializationCodeAndroid from './tabs/get-the-sdk/add-initialization-code/android.md'
import GetTheSdkIosACP from './tabs/get-the-sdk/get-the-sdk/ios-acp.md'
import GetTheSdkIosAEP from './tabs/get-the-sdk/get-the-sdk/ios-aep.md'
import GetTheSdkAndroid from './tabs/get-the-sdk/get-the-sdk/android.md'

# Get the Experience Platform SDK

The Adobe Experience Platform SDK is available for Apple iOS (includes iOS, iPadOS, and tvOS) via [Cocoapods](https://cocoapods.org/) and for Google Android via [Gradle](https://gradle.org).

Follow the directions below to include the SDK into your mobile application.

<InlineAlert variant="info" slots="text"/>

For iOS and Android projects, the recommended approach for integrating the SDK is to use supported dependency and package managers as listed for each platform such as Maven and Cocoapods. SDKs are also available for download on [GitHub](https://github.com/Adobe-Marketing-Cloud/acp-sdks/).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<GetTheSdkAndroid/>

iOS (AEP 3.x)

<GetTheSdkIosAEP/>

iOS (ACP 2.x)

<GetTheSdkIosACP/>

## Installation instructions

If you cannot access the **Mobile Install Instructions** dialog box in the Data Collection UI, complete the following sections to get the Adobe Experience Platform SDK. If you already completed the steps in the Mobile Install Instructions dialog box, no need to complete these steps.

### 1. Add dependencies to your project

Each extension needs to be added as a dependency to the mobile application project. The following examples will add the Mobile Core and Profile extensions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<AddDependenciesAndroid/>

iOS (AEP 3.x)

<AddDependenciesIosAEP/>

iOS (ACP 2.x)

<AddDependenciesIosACP/>

### 2. Add initialization code

Next you'll need to import SDK libraries into your project and register them for initialization. Extensions are registered with Mobile Core so that they can dispatch and listen for events.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

The following code snippets demonstrate how you can import and register the Mobile Core and Profile extensions. You can also see, for reference, how Identity, Lifecycle, Signal, Profile, and other extensions are imported and registered.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<AddInitializationCodeAndroid/>

iOS (AEP 3.x)

<AddInitializationCodeIosAEP/>

iOS (ACP 2.x)

<AddInitializationCodeIosACP/>

### 3. Ensure app permissions (Android only)

For Android, the SDK requires standard [network connection](https://developer.android.com/training/basics/network-ops/connecting) permissions in your manifest to send data, collect cellular provider, and record offline tracking calls.

To enable these permissions, add the following lines to your `AndroidManifest.xml` file, located in your app's application project directory:

```markup
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Watch the Video

<Media slots="video"/>

<https://www.youtube.com/watch?v=K99NwR6Y08E>

## Additional information

* [How to use Gradle for Android](https://docs.gradle.org/current/userguide/userguide.html)
* [How to use CocoaPods for iOS ](https://guides.cocoapods.org/using/using-cocoapods)
* [Current SDK Versions](../upgrade-platform-sdks/current-sdk-versions.md)

## Get help

* Visit the SDK [community forum](https://forums.adobe.com/community/experience-cloud/platform/launch/sdk) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance

