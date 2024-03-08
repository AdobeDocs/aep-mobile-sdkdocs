---
title: Adobe Experience Platform Assurance release notes
description: The release notes for the Adobe Experience Platform Assurance mobile extension.
keywords:
- Adobe Experience Platform Assurance
- Release notes
---

# Release notes

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
