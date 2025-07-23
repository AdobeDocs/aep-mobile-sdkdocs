---
title: Adobe Campaign Classic release notes
description: The release notes for the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Release notes
---

# Release notes

## June 11, 2025

### Android Campaign Classic 3.1.4

* Fixed the handling of negative 32-bit broadlog IDs.

## March 28, 2025

### React Native Campaign Classic 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Added support for the React Native New Architecture via interop layer

## February 10, 2025

### Android Campaign Classic 3.1.3

* Added support for the new `MobileCore.initialize` API introduced in Core.
* Updated the Notification Builder dependency to version 3.0.3 to resolve an issue that occurred when no image was provided in an input box push template notification.

## September 10, 2024

### Android Campaign Classic 3.1.2

* Update notification builder dependency to 3.0.2 to resolve an issue with push template dismiss actions.

## August 20, 2024

### Android Campaign Classic 3.1.1

* Removed unused `app_name` string resource to prevent conflicts with resources defined by the app.
* Add support for 64-bit broadlog id.
* Update notification builder dependency to 3.0.1 to resolve issues with out-of-the-box push templates.

## June 21, 2024

### Android Campaign Classic 3.1.0

Add support for out-of-the-box push notifications:

* Basic
* Carousel
* Product Catalog
* Product Rating
* Input Box
* Multi Icon
* Zero Bezel
* Timer

## June 6, 2024

### React Native Campaign Classic 6.0.2

* Updated typescript files to support strict null checks.

## May 31, 2024

### Android Campaign Classic 2.1.8

* Fix clipped carousel captions which was occurring on smaller devices.

## May 22, 2024

### Android Campaign Classic 2.1.7

* Add support for dark mode with out of the box push template notifications. Dark mode is supported on API29+ only and any custom color modifications made to the push payload will override the dark/light mode colors.
* Removed the SCHEDULE_EXACT_ALARM permission from the Campaign Classic extension. This permission must be added to the app manifest if exact scheduling is needed for remind later notifications. If an API less than S / 31 is in use, or the exact alarm permission wasn't granted to the app, then an inexact alarm is used instead. Inexact scheduling will display the scheduled notification within a 1 hour window starting with the given timestamp.

## April 29, 2024

### Android Campaign Classic 2.1.6

* Fixed a bug that caused Activity to restart when processing push notification click URIs.
* Fixed a bug to prevent images from being cropped in carousel push template.

## April 2, 2024

### Android Campaign Classic 3.0.0

Major version update for [Campaign Classic](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.8 and higher.
* Removed the out-of-the-box push template handling code. This functionality will be available in a future Core 3.x release.

## March 20, 2024

### iOS Campaign Classic 5.0.0

Major version update for [Campaign Classic](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 11, 2024

### Android Campaign Classic 2.1.5

* Re-add parsing of the `adb_icon` key value pair from the push template payload. The value will be used to locate and then set a notification small icon from the app's bundle if the `adb_small_icon` key value pair is not present in the push payload.

## February 28, 2024

### iOS Campaign Classic 4.0.1

* Added max versions to Platform dependencies in podspec

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
