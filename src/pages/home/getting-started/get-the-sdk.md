---
title: Get the Adobe Experience Platform Mobile SDK
description: A guide that explains how to install the Adobe Experience Platform Mobile SDK in your application.
keywords: 
- Guide
- Installation
- Tutorial
---

import Tabs from './tabs/get-the-sdk.md'

# Get the Adobe Experience Platform Mobile SDK

The Adobe Experience Platform SDK is available for Apple iOS (includes iOS, iPadOS, and tvOS) via [Cocoapods](https://cocoapods.org/) and [Swift Package Manager](https://www.swift.org/package-manager/), and for Google Android via [Gradle](https://gradle.org).

Follow the directions below to include the SDK into your mobile application.

<InlineAlert variant="info" slots="text"/>

For iOS and Android projects, the recommended approach for integrating the SDK is to use supported dependency and package managers as listed for each platform such as Maven (Android), and Cocoapods or Swift Package Manager (iOS).

<InlineAlert variant="info" slots="text"/>

The SDK can also be downloaded for iOS and Android projects following the listed methods: <br/> 1. For iOS, XCFramework for different SDK extensions are also available for download from corresponding GitHub repositories. For example, Mobile Core and related extensions XCFramework zip file can be found on the GitHub by selecting [Releases](https://github.com/adobe/aepsdk-core-ios/releases). <br/>2. For Android, the aar is already available for download from Maven central. For example, Mobile Core extension aar file can be found under the corresponding [package](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/core/2.3.1/versions) by selecting [Browse](https://repo1.maven.org/maven2/com/adobe/marketing/mobile/core/2.3.1/).

1. Select the tag property you created earlier in the Data Collection UI.
2. In your tag property's details page, Select the **Environments** tab on the left nav. The **Environments** tab lists the different environments where you can publish, e.g. **Development**, **Staging**, and **Production**.
3. Select the install package icon (under **INSTALL** column) for the appropriate environment row. You should see a dialog box titled **Mobile Install Instructions**.
4. On the open dialog box, select the appropriate platform tab **Android** or **iOS**.
5. Copy the necessary dependencies and initialization code from the dialog box to your mobile application project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=get"/>

iOS

<Tabs query="platform=ios&task=get"/>

<!--  React Native

<Tabs query="platform=react-native&task=get"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=get"/> -->

## Installation instructions

If you cannot access the **Mobile Install Instructions** dialog box in the Data Collection UI, complete the following sections to get the Adobe Experience Platform SDK. If you already completed the steps in the Mobile Install Instructions dialog box, no need to complete these steps.

### 1. Add dependencies to your project

Each extension needs to be added as a dependency to the mobile application project. The following examples will add the Mobile Core and Profile extensions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add-dependencies"/>

iOS

<Tabs query="platform=ios&task=add-dependencies"/>

### 2. Add initialization code

Next, you'll need to initialize the SDK by registering all the solution extensions added as dependencies to your project with Mobile Core.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

<InlineAlert variant="warning" slots="text"/>

Currently, the Adobe Experience Platform SDKs do not support running under [Direct Boot](https://developer.android.com/training/articles/direct-boot) mode on Android devices. For Android applications configured to be run during Direct Boot mode, verify if the user has unlocked the devices by calling [UserManager.isUserUnlocked()](https://developer.android.com/reference/android/os/UserManager#isUserUnlocked()) before initializing the SDK.

There are two ways to achieve this:

#### a) Using MobileCore.initialize API (Recommended)

<InlineAlert variant="warning" slots="text" />

This API is available starting from **Android BOM version 3.8.0** and **iOS version 5.4.0**.

The `MobileCore.initialize` API provides a simple way to initialize AEP SDK. It automatically registers solution extensions and enables lifecycle tracking, eliminating the need for manual setup. Refer to the [API documentation](../base/mobile-core/api-reference.md#initialize) for additional configuration options.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add-simplified-initialization"/>

Java<br/>(Android)

<Tabs query="platform=android-java&task=add-simplified-initialization"/>

Swift<br/>(iOS)

<Tabs query="platform=ios-swift&task=add-simplified-initialization"/>

Objective-C<br/>(iOS)

<Tabs query="platform=ios-objc&task=add-simplified-initialization"/>

#### b) Manual Extension Registration using MobileCore.registerExtensions API

In older SDK versions, solution extensions must be manually imported and registered with MobileCore using the `MobileCore.registerExtensions` API.

The following code snippets show how to import and register the Mobile Core and Profile extensions, along with Identity, Lifecycle, Signal, and other extensions for reference.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add-initialization"/>

Java<br/>(Android)

<Tabs query="platform=android-java&task=add-initialization"/>

Swift<br/>(iOS)

<Tabs query="platform=ios-swift&task=add-initialization"/>

Objective-C<br/>(iOS)

<Tabs query="platform=ios-objc&task=add-initialization"/>

<!-- React Native

<Tabs query="platform=react-native&task=add-initialization"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=add-initialization"/> -->

### 3. Ensure app permissions (Android only)

For Android, the SDK requires standard [network connection](https://developer.android.com/training/basics/network-ops/connecting) permissions in your manifest to send data, collect cellular provider, and record offline tracking calls.

To enable these permissions, add the following lines to your `AndroidManifest.xml` file, located in your app's application project directory:

```markup
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Additional information

* [How to use Gradle for Android](https://docs.gradle.org/current/userguide/userguide.html)
* [How to use CocoaPods for iOS](https://guides.cocoapods.org/using/using-cocoapods)
* [How to use Swift Package Manager for iOS](https://www.swift.org/package-manager/#example-usage)
* [Current SDK Versions](../current-sdk-versions.md)

## Get help

* Visit the SDK [community forum](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform/ct-p/adobe-experience-platform-community) to ask questions
* Contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support) for immediate assistance
