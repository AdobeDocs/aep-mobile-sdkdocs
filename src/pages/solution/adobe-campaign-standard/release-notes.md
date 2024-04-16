---
title: Adobe Campaign Standard release notes
description: The release notes for the Adobe Campaign Standard mobile extension.
keywords:
- Adobe Campaign Standard
- Release notes
---

# Release notes

## April 12, 2024

### React Native Campaign Standard 6.0.0

Major version update for [Campaign Classic](https://github.com/adobe/aepsdk-react-native/tree/main/packages/campaignclassic) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs

## April 2, 2024

### Android Campaign Standard 3.0.0

Major version update for [Campaign Standard](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Migrated Campaign SDK to use Jetpack Compose based UI Services from MobileCore 3.0.0
* Moved code to create and track local notifications from Mobile Core to Campaign.

## March 20, 2024

### iOS Campaign Standard 5.0.0

Major version update for [Campaign Standard](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## February 28, 2024

### iOS Campaign Standard 4.0.1

* Added max versions to Platform dependencies in podspec

## September 21, 2023

### Android Campaign 2.0.6

* Updated the minimum Core dependency version to 2.3.1 to resolve a local notification display issue.

## July 12, 2023

### Android Campaign 2.0.5

* Fixed a bug where a bundled asset was not being used in a fullscreen message when the remote image URL was inaccessible.

## June 5, 2023

### iOS Campaign Standard 4.0.0

Major version update for [Adobe Campaign Standard workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## May 25, 2023

### Android Campaign Standard 2.0.4

* Update the AEPCore dependency to version 2.2.0 to resolve a WebView transparency issue and fix message frequency rules for Campaign Standard in-app messages.

## May 4, 2023

### Android Campaign Standard 2.0.3

* Adds support for URL-encoded URLs with query parameters used to configure in-app message clickthrough destination.

## February 17, 2023

### Android Campaign Standard 2.0.2

* Made the extension compatible with Kotlin 1.4.

## February 9, 2023

### Android Campaign Standard 2.0.1

* Updates Mobile Core dependency to 2.0.1 which includes stability fixes.

## February 2, 2023

### Android Campaign Standard 2.0.0

* Major version update for [Adobe Campaign Standard workflows](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaign-android).

## February 9, 2022

### iOS Campaign Standard 3.0.1

* Fixed an issue with the Campaign message tracking URL being incorrectly built.

## June 8, 2021

### iOS Campaign Standard 3.0.0

* Initial release to support [Adobe Campaign Standard workflows](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This extension library is [available as an open source project on GitHub](https://github.com/adobe/aepsdk-campaign-ios).
