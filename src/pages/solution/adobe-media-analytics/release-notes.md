---
title: Adobe Analytics for Media API release notes
description: The release notes for the Adobe Analytics for Media mobile extension.
keywords:
- Adobe Analytics for Media
- Release notes
---


# Release notes

## April 2, 2024

### Android Media 3.1.0

Version update to 3.1.0 for [Adobe Analytics - Media Analytics workflows](https://developer.adobe.com/client-sdks/solution/adobe-media-analytics/) Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline and improved logging. 

Please note that the version 3.0.0 of the Adobe Analytics - Media Analytics extension is compatible with Mobile Core 2.x. The increment to 3.1.0 was preferred for this release in order to synchronize all extensions to same major version.

## March 20, 2024

### iOS Media 5.0.0

Major version update for [Adobe Analytics - Media Analytics workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 6, 2024

### iOS Media 4.0.2

* Added max versions to Platform dependencies in podspec.

## January 8, 2024

### iOS Media 4.0.1

* Fixes configuration handling where the Collection API Server with first-party domain and /va path was not accepted.

## June 7, 2023

### iOS Media 4.0.0

Major version update for [Adobe Analytics - Media Analytics workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Fixed an issue that prevented timer from firing when called from background thread.

## February 3, 2023

### Android Media 3.0.0

* Major version update for [Adobe Analytics - Media Analytics workflows](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-media-android).

## June 30, 2022

### iOS AEPMedia 3.1.0

* Added tvOS support.

### iOS AEPMedia 3.0.1

* Enabled debugging post processed data in Media Analytics Assurance workflow.

## May 5, 2021

### iOS AEPMedia 3.0.0

* Initial release to support [Adobe Analytics - Media Analytics workflows](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This extension library is [available as an open source project on GitHub](https://github.com/adobe/aepsdk-media-ios/).
