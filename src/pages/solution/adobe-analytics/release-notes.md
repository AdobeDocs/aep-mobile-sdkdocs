---
title: Adobe Analytics release notes
description: The release notes for the Adobe Analytics mobile extension.
keywords:
- Adobe Analytics
- Release notes
---

# Release notes

## April 2, 2024

### Android Analytics 3.0.0

Major version update for [Adobe Analytics](https://developer.adobe.com/client-sdks/solution/adobe-analytics/) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

## March 20, 2024

### iOS Analytics 5.0.0

Major version update for [Adobe Analytics](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 7, 2024

### iOS Analytics 4.0.1

* Added max versions to Platform dependencies in podspec.

## July 26, 2023

### Android Analytics 2.0.3

* Added `a.systemLocale` to Lifecycle hits.

## June 6, 2023

### iOS Analytics 4.0.0

Major version update for [Adobe Analytics](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Resolved an issue with retrieving post-processed data in Assurance for track calls with empty state.
* Added `a.systemLocale` to Lifecycle hits.

## March 27, 2023

### Android Analytics 2.0.2

* Fixed a bug that was causing the "Unavailable" status to be shown in Adobe Analytics view in Assurance for some track events sent soon after app launch.

## February 17, 2023

### Android Analytics 2.0.1

* Made the extension compatible with Kotlin 1.4.
* Analytics shared state is made available on boot-up if there are any previously stored identifiers.
* Shared state is only updated when an identifier is set and not on get requests.

## February 3, 2023

### Android Analytics 2.0.0

* Major version update for [Adobe Analytics](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-analytics-android/).

## June 30, 2022

### iOS AEPAnalytics 3.2.0

* Added tvOS support.

## March 31, 2022

### iOS AEPAnalytics 3.0.4

* Fixed `getTrackingIdentifier` and `getVisitorIdentifier` APIs to `return nil` instead of `AEPError.unexpected` error when AID/VID values are not found in persistence.

## October 25, 2021

### iOS AEPAnalytics 3.0.3

* Add support for `MobileCore.resetIdentities()` API. When this API is called, the Analytics identifiers and the Analytics hits queue are cleared.
* Removed retrieval and generation of Analytics tracking identifier (AID). Existing AID values stored on the device will continue to be loaded and used, however new visitors will not be assigned an AID value.

## September 8, 2021

### iOS AEPAnalytics 3.0.2

* Fixed an issue where entire context data dictionary in track request was dropped if any of its key had non string value.

## April 1, 2021

### iOS AEPAnalytics 3.0.1

* Added support to handle internal analytics track request events
* Refactored code and updated doc comments

## February 26, 2021

### iOS AEPAnalytics 3.0.0

* Initial release to support [Adobe Analytics](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This library is available as an [open sourced project on GitHub](https://github.com/adobe/aepsdk-analytics-ios/).
