# Release Notes

Release notes and change logs for the Adobe Experience Platform Assurance extension

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
