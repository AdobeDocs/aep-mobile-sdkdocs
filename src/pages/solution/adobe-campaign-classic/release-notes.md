---
title: Adobe Campaign Classic release notes
description: The release notes for the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Release notes
---

# Release notes

## February 28, 2024

### iOS Campaign Classic 4.0.1

- Added max versions to Platform dependencies in podspec

### Android Campaign Classic 2.1.4

* Add support for setting a large notification icon from a bundled drawable or a remote image url.
* Use the defined Push Template action URI for carousel items that do not have an action URI.
* Fix a NPE seen when a tag string was not provided for a basic template notification.

## February 2, 2024

### Android Campaign Classic 2.1.3

* Fix key value pair extraction from a push notification data payload. Push data payload values are preferred over push notification payload values.

## January 29, 2024

### Android Campaign Classic 2.1.2

* Fix notification sticky behavior

## January 22, 2024

### Android Campaign Classic 2.1.1

* Fixed a bug with manual carousel buttons

## January 19, 2024

### Android Campaign Classic 2.1.0

* Added support for out-of-the-box push notifications:
  * Basic notifications, including remind me later and call-to-action functionality
  * Manual and automatic image carousels of three to five items

See a full description of the new [push template payloads](./push-templates).

## June 5, 2023

### iOS Campaign Classic 4.0.0

Major version update for [Adobe Campaign Classic workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Updated the extension to dispatch a Campaign Response Content event containing the device registration status.

## May 31, 2023

### Android Campaign Classic 2.0.1

* Updated the extension to dispatch a Campaign Response Content event containing the device registration status.

## January 31, 2023

### Android Campaign Classic 2.0.0

* Major version update for [Adobe Campaign Classic workflows](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaignclassic-android).

Please note that the `registerDevice` API, similar to iOS, no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests.

## September 1, 2022

### iOS Campaign Classic 3.0.0

* Initial release to support [Adobe Campaign Classic workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS in Swift. This extension library is available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaignclassic-ios/).
