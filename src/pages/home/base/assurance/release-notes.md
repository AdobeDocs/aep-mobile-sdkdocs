---
title: Adobe Experience Platform Assurance release notes
description: The release notes for the Adobe Experience Platform Assurance mobile extension.
keywords:
- Adobe Experience Platform Assurance
- Release notes
---

# Release notes

## June 11, 2025

### Android Assurance 3.0.7

* Removed device orientation restrictions for Assurance screens.

## March 28, 2025

### React Native Assurance 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 4, 2025

### Flutter Assurance 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 25, 2025

### Android Assurance 3.0.6

* Fixed an issue that prevented a connection error message from being displayed.

## February 10, 2025

### Android Assurance 3.0.5

* Added support for the new `MobileCore.initialize` API introduced in Core.

## October 29, 2024

### Android Assurance 3.0.4

* Fixed an issue causing incorrect application details to be sent in the `client` event.

### Android Assurance 2.2.2

* Fixed an issue causing incorrect application details to be sent in the `client` event.

## August 16, 2024

### Android Assurance 3.0.3

* Removed `app_name` string resource to prevent conflicts with resources defined by the app.

## August 12, 2024

### Android Assurance 3.0.2

* Added localization support.

### iOS Assurance 5.0.1

* Add localization support.

## June 6, 2024

### React Native Assurance 6.0.2

* Updated typescript files to support strict null checks.

## June 4, 2024

### Android Assurance 3.0.1

* Fixed an issue where the Assurance floating button was not immediately shown in a reconnection scenario.
* Fixed an issue where the QuickConnect device registration status check job was not terminated when the connection attempt is cancelled.
* Disabled content and file access from `WebView`.

## May 13, 2024

### Flutter Assurance 4.0.2

* Update environment dependencies in pubspec.

## April 24, 2024

### React Native Assurance 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter Assurance 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter Assurance 4.0.0

Major version update for [Assurance](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepassurance) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 12, 2024

### React Native Assurance 6.0.0

Major version update for [Assurance](https://github.com/adobe/aepsdk-react-native/tree/main/packages/assurance) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 1, 2024

### Android Assurance 3.0.0

Major version update for [Adobe Experience Platform Assurance](./index.md) on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.8 and higher.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Migrated SDK UI components to Jetpack Compose.

## March 20, 2024

### iOS Assurance 5.0.0

Major version update for [Adobe Experience Platform Assurance](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 7, 2024

### iOS Assurance 4.1.2

* Fix an issue where dependency versions did not have an upper bound restriction.

## January 30, 2024

### Android Assurance 2.2.1

* Fixed an issue that caused large Assurance events to be sent with malformed payload.

## January 17, 2024

### iOS Assurance 4.1.1

* Fixed a race condition which could happen when the Assurance session is terminated.

## October 19, 2023

### iOS Assurance 4.1.0

* Fixed a mismatch in the client and sessionID keys
* Added support for receiving large `AssuranceEvents`.

### Android Assurance 2.2.0

* Added support for receiving large `AssuranceEvents`.
* Fixed an issue that caused incorrect manifest contents being sent in the clientInfo event.

## July 20, 2023

### Android Assurance 2.1.1

* Added support for chained events.

## June 1, 2023

### iOS Assurance 4.0.0

Major version update for [Adobe Experience Platform Assurance](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## May 19, 2023

### iOS Assurance 3.1.2

* Added support for chaining related events.

## April 25, 2023

### Android Assurance 2.1.0

* Added a new API for quick connect capability.
* Fixed an issue causing pure Jetpack Compose apps implementing Assurance to add XML color attributes.
* Switched to use vector support library to reduce SDK size.

## April 6, 2023

### iOS Assurance 3.1.1

* Fixed a bug that was causing sessions to not be terminated properly in the Quick Connect flow.

## March 21, 2023

### iOS Assurance 3.1.0

* Added an API for a new quick connect capability for quick start workflows that will go beta soon.
* Security improvements

## February 27, 2023

### Android Assurance 2.0.1

* Contents of the application manifest (AndroidManifest.xml) are now included in the `clientInfo` event.

## January 31, 2023

### Android Assurance 2.0.0

* Major version update for [Adobe Experience Platform Assurance](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-assurance-android).

## February 22, 2022

### iOS Assurance 3.0.1

* Add support for transmitting large events.
* Assurance extension now prompts an error message when attempting to connect to a deleted session.
* Improved logging for troubleshooting.
* Fixed an issue to ensure that event collection stops on session disconnection.

## June 28, 2021

### iOS Assurance 3.0.0

* Initial release to support [Adobe Experience Platform Assurance](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This library is available as an [open sourced project on GitHub](https://github.com/adobe/aepsdk-assurance-ios).
