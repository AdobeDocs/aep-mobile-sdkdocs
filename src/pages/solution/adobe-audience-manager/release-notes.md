---
title: Adobe Audience Manager release notes
description: The release notes for the Adobe Audience Manager mobile extension.
keywords:
- Adobe Audience Manager
- Release notes
---

# Release notes

## April 2, 2024

### Android Audience 3.0.0

Major version update for [Adobe Audience Manager](https://developer.adobe.com/client-sdks/solution/adobe-audience-manager/) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

## March 20, 2024

### iOS Audience 5.0.0

Major version update for [Adobe Audience Manager](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 6, 2024

### iOS Audience 4.0.1

* Added max versions to Platform dependencies in podspec.

## June 7, 2023

### iOS Audience 4.0.0

 Major version update for [Adobe Audience Manager](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## February 3, 2023

### Android Audience 2.0.0

* Major version update for [Adobe Audience Manager](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-audience-android).

## May 18, 2022

### iOS AEPAudience 3.0.4

* Fixed an issue where lifecycle data was included in signalWithData requests.

## May 9, 2022

### iOS AEPAudience 3.0.3

* Fixed integration with Lifecycle extension to send lifecycle metrics when a new app session is started.

## Jul 13, 2021

### iOS AEPAudience 3.0.2

* Added support to handle the MobileCore.resetIdentities() API.

## April 1, 2021

### iOS AEPAudience 3.0.1

* Updated syncedVisitorIds implementation to a map
* Fixed access modifier for two classes

## January 29, 2021

### iOS Audience 3.0.0

* Initial release to support [Adobe Audience](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This extension library is available as an [open sourced project on GitHub](https://github.com/adobe/aepsdk-audience-ios/).
