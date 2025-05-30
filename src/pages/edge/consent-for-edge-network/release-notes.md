---
title: Consent for Edge Network release notes
description: The release notes for the Consent for Edge Network mobile extension.
keywords:
- Consent for Edge Network
- Edge Network
- Release notes
---

# Release notes

## March 28, 2025

### React Native EdgeConsent 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 4, 2025

### Flutter EdgeConsent 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 10, 2025

### Android EdgeConsent 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

## June 6, 2024

### React Native EdgeConsent 6.0.2

* Updated typescript files to support strict null checks.

## May 13, 2024

### Flutter EdgeConsent 4.0.2

* Update environment dependencies in pubspec.

## April 24, 2024

### React Native EdgeConsent 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter EdgeConsent 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter EdgeConsent 4.0.0

Major version update for [Consent for Edge Network](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedgeconsent) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 12, 2024

### React Native EdgeConsent 6.0.0

Major version update for [Consent](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edgeconsent) for Edge Network for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 2, 2024

### Android EdgeConsent 3.0.0

Major version update for [Consent for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

## March 20, 2024

### iOS EdgeConsent 5.0.0

Major version update for [Consent for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 7, 2024

### iOS EdgeConsent 4.0.1

* Added max versions to Platform dependencies in podspec.

## June 1, 2023

### iOS Consent 4.0.0

Major version update for [Consent for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## March 1, 2023

### iOS AEPEdgeConsent 1.1.0

* Added tvOS support.

## January 31, 2023

### Android Consent 2.0.0

* Major version update for [Consent for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeconsent-android).

## April 8, 2022

### iOS AEPEdgeConsent 1.0.1

* Updates timestamp in Consent requests to use fractional seconds.

## March 11, 2022

### Android Consent 1.0.1

* Updates timestamp in Consent requests to use fractional seconds.

## April 12, 2021

### Consent tags Extension

You can now find the `Consent` extension in the tags extensions catalog for mobile properties.

## April 5, 2021

### iOS & Android Consent 1.0.0

The Adobe Experience Platform Consent (AEPEdgeConsent) mobile extension is now available in iOS and Android! This extension enables consent preferences collection from your mobile app when using the Adobe Experience Platform Mobile SDK and the Edge Network extension.
