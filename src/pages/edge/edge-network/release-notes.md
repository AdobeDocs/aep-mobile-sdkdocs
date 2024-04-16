---
title: Adobe Experience Platform Edge Network release notes
description: The release notes for the Adobe Experience Platform Edge Network mobile extension.
keywords:
- Edge Network
- Release notes
---

# Release notes

## April 12, 2024

### React Native Edge 6.0.0

Major version update for [Edge Network](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edge) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs

## April 2, 2024

### Android Edge 3.0.0

Major version update for [Edge Network](./index.md) Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Removed deprecated function `Formatters.dateToISO8601String()`, replaced by `TimeUtils.getISO8601UTCDateWithMilliseconds()` in MobileCore.
* Removed deprecated function `Formatters.dateToShortDateString()`, replaced by `TimeUtils.getISO8601FullDate()` in MobileCore.
* Added an enhancement to prevent network retries when the device's network is offline.

## March 19, 2024

### iOS Edge 5.0.0

Major version update for [Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 6, 2024

### iOS Edge 4.3.1

* Added max versions to Platform dependencies in podspec.

## October 27, 2023

### iOS Edge 4.3.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
* Improved logging on connection failure.

### Android Edge 2.4.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
* Improved logging on connection failure.

## September 1, 2023

### iOS Edge 4.2.0

* Added the ability to request a "completion" event when making an experience event request. The `contentComplete` event is dispatched after the request connection is closed.

### Android Edge 2.3.0

* Added the ability to request a "completion" event when making an experience event request. The `contentComplete` event is dispatched after the request connection is closed.

## July 21, 2023

### iOS Edge 4.1.0

* Added support for chaining related events.
* Fixed location of event index when decoding network response errors and warnings.

### Android Edge 2.2.0

* Added support for chaining related events.
* Fixed location of event index when decoding network response errors and warnings.

## June 1, 2023

### iOS Edge 4.0.0

Major version update for [Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Removed deprecated class `XDMFormatters`. Use functions `getISO8601UTCDateWithMilliseconds()` and `getISO8601FullDate()` in Date class extension from AEPServices module instead.
* Fixed issue where empty "payload" array was not included in events dispatched after receiving Edge Network response.

## April 11, 2023

### Android Edge 2.1.0

* Added support to overwrite the Edge request path with a custom path to support Edge requests for the Media Analytics service.

## February 28, 2023

### iOS Edge 1.6.0

* Added tvOS support.

## February 13, 2023

### Android Edge 1.4.1

* Improves error handling when processing `Edge.sendEvent` requests by catching and logging unexpected `RuntimeException` instances thrown from within caller's `EdgeCallback` handler implementation.

## January 31, 2023

### Android Edge 2.0.0

* Major version update for [Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edge-android).

## October 19, 2022

### iOS Edge 1.5.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

### Android Edge 1.4.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

## June 2, 2022

### iOS Edge 1.4.1

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Internal updates to use URLComponents builder for Edge endpoints.

### Android Edge 1.3.2

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Updates internal network stack to use Mobile Core's ServiceProvider Network Service, reducing overall extension code size.

## April 8, 2022

### iOS Edge 1.4.0

* Updates timestamp in Experience Events to use fractional seconds.
* Deprecates APIs `XDMFormatters.dateToISO8601String` and `XDMFormatters.dateToFullDateString`. Use the `Date` extension methods `getISO8601UTCDateWithMilliseconds` and `getISO8601FullDate` instead, provided by the AEPServices module within the AEPCore extension.

## April 1, 2022

### Adobe Experience Platform Edge Network tag extension v1.1.9

* UI updates for the `Datastream configuration` section to enable the new sandbox aware datastreams. If more than one sandbox is used, a sandbox picker is displayed to allow for datastreams selection across sandboxes.

* Auto-complete in the UI for default third party domain based on company name for Edge Network data collection. The domain configuration is now required, while existing configurations will continue to use the default edge.adobedc.net domain.

## March 11, 2022

### Android Edge 1.3.1

* Updates timestamp in Experience Events to use fractional seconds.

## January 21, 2022

### iOS Edge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

### Android Edge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

## December 23, 2021

### Android Edge 1.2.0

* Adds XDM Implementation Details to each Experience Event sent to the Edge Network.

## December 22, 2021

### iOS Edge 1.2.0

* Adds XDM Implementation Details to each Experience Event sent to the Edge Network.
* Fixes generic network error format to conform to EdgeEventError type so they are dispatched back to the caller correctly.

## Sept 3, 2021

### Adobe Experience Platform Edge Network tag extension v1.0.12

* New `Forward to Edge Network` action to be used with Mobile Core Application Lifecycle events.

## Sept 2, 2021

### iOS Edge 1.1.2

* Edge Network Extension now honors the timestamp set in XDM payload of Experience Event. If no timestamp is set, then timestamp of `Edge.sendEvent()` API call is used.

### Android Edge 1.1.2

* Edge Network Extension now honors the timestamp set in XDM payload of Experience Event. If no timestamp is set, then timestamp of `Edge.sendEvent()` API call is used.

## June 10, 2021

### iOS Edge 1.1.1

* Development testing enhancements for Experience Edge.

### Android Edge 1.1.1

* Adds support for events persistence for use-cases with low network connectivity or unexpected network errors.
* Development testing enhancements for Experience Edge.

This SDK is compatible with Android Core 1.8.2 and above.

## April 8, 2021

### iOS Edge 1.1.0

* Integration with Edge Consent 1.0.0 and collect consent preferences enforcement on requests to AEP Edge Network.
* Adds required dependency on Edge Identity 1.0.0 that brings XDM IdentityMap support for custom identifiers.

### Android Edge 1.1.0

* Integration with Edge Consent 1.0.0 and collect consent preferences enforcement on requests to AEP Edge Network.
* Adds required dependency on Edge Identity 1.0.0 that brings XDM IdentityMap support for custom identifiers.

## January 19, 2021

### iOS Edge 1.0.0

The Adobe Experience Platform Edge Network (AEPEdge) tag extension is now available in iOS! This extension allows for sending XDM formatted data to Adobe Experience Platform and Adobe Experience Cloud solutions, by leveraging Experience Edge capabilities.

The included features with this release are:

* Ability to create XDM Experience Events and send them to Experience Edge Network. An optional Experience Edge response callback can be registered per event.
* The XDM Experience Events can be sent to individual Adobe Experience Platform datasets when a custom dataset identifier is set at event level.
* Events persistence.
* ECID is automatically attached on each XDM Experience Event request.
* Integration with AEPAssurance extension enabling new insights in Project Griffon about the XDM Experience Event processing and XDM data validation for an improved validation and debugging experience.
* Detailed warning/error messages are available through Project Griffon UI and logs.

Learn more about the AEP Edge extension in the open sourced [adobe/aepsdk-edge-ios](https://github.com/adobe/aepsdk-edge-ios) GitHub repository. The iOS SDK is available for installation through SPM, XCFramework and Cocoapods and can be used in Swift and Objective-C applications. This SDK is compatible with latest swift AEPCore 1.0.0.

### Android Edge 1.0.0

The Adobe Experience Platform Edge Network (Edge) tag extension is now available in Android! This extension allows for sending XDM formatted data to Adobe Experience Platform and Adobe Experience Cloud solutions, by leveraging Experience Edge capabilities.

The included features with this release are:

* Ability to create XDM Experience Events and send them to Experience Edge Network. An optional Experience Edge response callback can be registered per event.
* The XDM Experience Events can be sent to individual Adobe Experience Platform datasets when a custom dataset identifier is set at event level.
* ECID is automatically attached on each XDM Experience Event request.
* Integration with Assurance extension enabling new insights in Project Griffon about the XDM Experience Event processing and XDM data validation for an improved validation and debugging experience.
* Detailed warning/error messages are available through Project Griffon UI and logs.

This SDK is compatible with Android Core 1.5.7 and above.

### Adobe Experience Platform Edge Network mobile Extension 1.0.2

* Selector for the Edge Configuration.
* AEP Request Event with optional XDM event type is available for tag rules.
