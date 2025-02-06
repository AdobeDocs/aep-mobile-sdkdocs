---
title: Adobe Journey Optimizer release notes
description: The release notes for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer Decisioning
- Release notes
---

# Release notes

## December 6, 2024

### Android Optimize 3.2.2

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* Updated getPropositions API to return cached propositions immediately if there are no pending updatePropositions calls for the requested list of decision scopes.
* Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.

### iOS Optimize 5.2.0

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.

## October 8, 2024

### Android Optimize 3.1.0

* Added a new `updatePropositions` API to support completion callback with retrieved propositions and errors (if any).

## October 3, 2024

### iOS Optimize 5.1.0

* Added a new `updatePropositions` API to support completion callback with retrieved propositions and errors (if any).
* Updated `getPropositions` API to return cached propositions immediately if there are no pending `updatePropositions` calls for the requested list of decision scopes.
* Changed `Offer.score` data type from Integer to Double to fix a bug where offers having decimal score were being dropped.

## August 20, 2024

### Android Optimize 3.0.2

* Fixed thread safety for map updates that happen when `updatePropositions` API was called repeatedly.
* Fixed issue where `Offer` could not be created for default content item when `getPropostions` API was called.

## June 6, 2024

### React Native Optimize 6.0.2

* Updated typescript files to support strict null checks.

## May 21, 2024

### iOS Optimize 5.0.1

* Fixed a crash that happens when `updateProposition` API was called repeatedly. 

### Android Optimize 3.0.1

* Fixed a bug where Optimize SDK was considering Target mbox decision scope strings as invalid and not including them in personalization requests.

## May 18, 2024

### iOS Optimize 4.0.4

* Fixed a crash that happens when `updateProposition` API was called repeatedly. 

## April 24, 2024

### React Native Optimize 6.0.1

* Added namespace support to the Android module.

## April 12, 2024

### React Native Optimize 6.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](https://github.com/adobe/aepsdk-react-native/tree/main/packages/optimize) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 3, 2024

### Android Optimize 3.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Renamed class `Proposition` to `OptimizeProposition`.

## March 20, 2024

### iOS Optimize 5.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](../../edge/adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Renamed class `Proposition` to `OptimizeProposition`.

## February 28, 2024

### iOS Optimize 4.0.3

* Added max versions to Platform dependencies in podspec

## October 5, 2023

### Android Optimize 2.0.2

* Added support for enforcing events' order for `updatePropositions` and `getPropositions` APIs in the extension. A `getPropositions` API invocation will be resolved only after any prior `updatePropositions` API requests are completed irrespective of the async API behavior.

## October 4, 2023

### iOS Optimize 4.0.2

* Added support for enforcing events' order for `updatePropositions` and `getPropositions` APIs in the extension. A `getPropositions` API invocation will be resolved only after any prior `updatePropositions` API requests are completed irrespective of the async API behavior.

## August 30, 2023

### Android Optimize 2.0.1

* Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.

### iOS Optimize 4.0.1

* Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.

## June 2, 2023

### iOS Optimize 4.0.0

Major version update for [Adobe Journey Optimizer - Decisioning](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Added support for using the Optimize SDK extension in [App Extensions](https://developer.apple.com/app-extensions/).

## February 2, 2023

### Android Optimize 2.0.0

* Major version update for [Adobe Journey Optimizer - Decisioning](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-optimize-android).

## October 10, 2022

### Android Optimize 1.0.1

* Fixed an issue where Base64 encoding the JSON string, created using the `activityId` and `placementId` provided in the `DecisionScope` constructor, introduced a newline character in the encoded scope string.

## June 10, 2022

### Adobe Journey Optimizer - Decisioning extension 1.0.0

`Adobe Journey Optimizer - Decisioning` extension is now available in the extensions catalog on the Data Collection UI for mobile Tag Properties. No configuration is necessary for this extension.  

## June 9, 2022

### Android Optimize 1.0.0

The `Adobe Experience Platform Mobile SDK - Optimize` extension is now available for Android!

This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning.

**Key Features**

With this release, the extension provides APIs that you can use to:

* Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning.
* Track user interactions with those offers.

## May 27, 2022

### iOS AEPOptimize 1.0.0

The `Adobe Experience Platform Mobile SDK - Optimize` mobile extension is now available for iOS!

This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning.

**Key Features**

With this release, the extension provides APIs that you can use to:

* Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning.
* Track user interactions with those offers.
