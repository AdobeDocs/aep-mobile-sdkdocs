# Release Notes

## May 18, 2022

### iOS AEPAudience 3.0.4

* Fixed an issue where lifecycle data was included in signalWithData requests.

## May 9, 2022

### iOS AEPAudience 3.0.3

- Fixed integration with Lifecycle extension to send lifecycle metrics when a new app session is started.

## Jul 13, 2021

### iOS AEPAudience 3.0.2

* Added support to handle the MobileCore.resetIdentities() API.

## April 1, 2021

### iOS AEPAudience 3.0.1

* Updated syncedVisitorIds implementation to a map
* Fixed access modifier for two classes

## January 29, 2021

### iOS Audience 3.0.0

* Initial release to support [Adobe Audience](./index.md)  for Adobe Experience Platform Mobile SDKs for iOS in Swift. This extension library is available as an [open sourced project on Github](https://github.com/adobe/aepsdk-audience-ios/).

## January 20, 2021

### iOS Audience 2.3.0

* Added tvOS compatibility

## November 9, 2020

### Android Audience 1.1.0

* Added support for AdobeCallbackWithError for APIs getVisitorProfile, signalWithData.
* Added changes to publish Audience shared state on EventHub boot.

## July 17, 2020

### Android Audience 1.0.2

* Fixed an issue where UUID was not returned in getSdkIdentities API response.
* Fixed an issue where customer visitor IDs were missing from Audience signals.

### @adobe/react-native-acpaudience@1.1.2

* Updated to iOS Audience 2.0.2.
* Updated to Android Audience 1.0.2.
