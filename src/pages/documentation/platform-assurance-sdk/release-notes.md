# Release Notes

Release notes and change logs for the Adobe Experience Platform Assurance extension

## April 2, 2022

### iOS AEPAssurance 1.1.4

* Fixed a bug that caused Assurance to not connect to a session if your iOS app's `info.plist` contains a property of type `date`.

Note: This release pertains to Assurance mobile extension that works with ACPCore

## February 22, 2022

### iOS Assurance 3.0.1

* Add support for transmitting large events.
* Assurance extension now prompts an error message when attempting to connect to a deleted session.
* Improved logging for troubleshooting.
* Fixed an issue to ensure that event collection stops on session disconnection.

### Android Assurance 1.0.4

* Add support for transmitting large events.
* Assurance extension now prompts an error message when attempting to connect to a deleted session.
* Improved logging for troubleshooting.
* Fixed an issue to ensure that event collection stops on session disconnection.

## June 28, 2021

### iOS AEPAssurance 3.0.0

* Initial release to support [Adobe Experience Platform Assurance](./index.md) for Adobe Experience Platform Mobile SDKs for iOS in Swift. This library as available as an [open sourced project on Github](https://github.com/adobe/aepsdk-assurance-ios).

## June 17, 2021

### Android Assurance 1.0.3

* Assurance state is now properly shared when reconnecting to an established session.

## April 21, 2021

### Android Assurance 1.0.2

* Support for Shared States in XDM format when using the AEPEdge extension.
* Lifecycle install and launch hits are now captured for Adobe Analytics debugging.
* Sends extension-specific state events when connecting to a Griffon session.
* Better error handling when reaching activity or Griffon session limits.
* Various security fixes.

## November 24, 2020

### Android Assurance 1.0.1

* Fixed a bug that triggered ANR (Application not responsive) error while initializing webview.

## October 05, 2020

### Android Assurance 1.0.0

* General availability and release of [Adobe Experience Platform Assurance](./index.md) that enables capabilities of [Project Griffon](./index.md)
