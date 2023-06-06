# Release Notes

## June 5, 2023

### iOS Campaign Classic 4.0.0

Major version update for [Adobe Campaign Classic workflows](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
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
