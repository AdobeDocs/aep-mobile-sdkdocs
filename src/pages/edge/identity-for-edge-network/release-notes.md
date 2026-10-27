---
title: Identity for Edge Network release notes
description: The release notes for the Identity for Edge Network mobile extension.
keywords:
- Edge Network
- Identity for Edge Network
- Release notes
---

# Release notes

## October 27, 2026

### Identity Tags extension 2.1.2

* Fixes the **details** link in the extension configuration view, which returned a 404. It now opens the [Identity for Edge Network](index.md) documentation.

## October 21, 2026

### Android EdgeIdentity 3.2.0

* Added the `updateOperationalData` API to send operational data, such as the timezone and push tokens, to the Edge Network independent of collect consent. Only values allowed by a Tags rule with a forward operational data consequence are sent.
* Added deduplication for the timezone and push token, so values are sent only when they change. It can be disabled with the `edgeidentity.optimizeOperationalProfileDataSync` configuration setting.
* Added an `Operational Data Sync Result` event reporting the status of each `updateOperationalData` request, and an `Operational data confirmed` event that sends confirmed tokens to the Messaging extension.
* Updated `updateProfileAttributes` handling to create the Edge Identity XDM shared state only when the timezone changes.
* **Dependency:** AEPCore 3.11.0 or later is required.
* **Dependency:** AEPEdge 3.2.0 or later is required to send operational data to the Edge Network.
* This release and its required dependencies are included in [Android BOM 3.25.0](../../home/release-notes/index.md#android-bom-3250).

### iOS EdgeIdentity 5.2.0

* Added the `updateOperationalData` API to send operational data, such as the timezone, push token and Live Activity push-to-start tokens, to the Edge Network independent of collect consent. Only values allowed by a Tags rule with a forward operational data consequence are sent.
* Added deduplication for the timezone, push token and Live Activity push-to-start tokens, so values are sent only when they change. It can be disabled with the `edgeidentity.optimizeOperationalProfileDataSync` configuration setting.
* Added an `Operational Data Sync Result` event reporting the status of each `updateOperationalData` request, and an `Operational data confirmed` event that sends confirmed tokens to the Messaging extension.
* Updated `updateProfileAttributes` handling to create the Edge Identity XDM shared state only when the timezone changes.
* **Dependency:** AEPCore 5.13.0 or later is required.
* **Dependency:** AEPEdge 5.3.0 or later is required to send operational data to the Edge Network.

## October 19, 2026

### Identity Tags extension 2.1.1

* Adds **Optimize syncing operational profile data**, saved as the boolean `edgeidentity.optimizeOperationalProfileDataSync` configuration key. The Tags UI selects it by default. When selected, the timezone, push token and Live Activity push-to-start tokens are sent only when they change.
* Adds the **Sync Operational Data** rule event under **Attributes**. The SDK triggers it when your app calls `updateOperationalData`, and on iOS when Adobe Journey Optimizer syncs Live Activity tokens.
* Adds the **Forward Operational Data to Edge Network** rule action. Select Timezone, Push token or Live Activity tokens to forward. App ID and platform are always included.
* Requires Android Identity for Edge Network 3.2.0, Edge Network 3.2.0 and Mobile Core 3.11.0, or iOS Identity for Edge Network 5.2.0, Edge Network 5.3.0 and Mobile Core 5.13.0, or later.

See the [configuration](index.md#configure-the-identity-extension-in-the-data-collection-ui) and [operational data sync](index.md#sync-operational-data-to-the-edge-network) instructions.

## July 8, 2026

### iOS EdgeIdentity 5.1.0

* Added support for processing `updateProfileAttributes` events dispatched by AEPCore, including `timeZone` profile attribute sync to Edge.
*  **Dependency:** AEPCore 5.10.0 or later  is required for profile attribute updates.

## July 7, 2026

### Android EdgeIdentity 3.1.0

* Added profile attributes update functionality for syncing user timeZone 

## March 28, 2025

### React Native EdgeIdentity 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 4, 2025

### Flutter EdgeIdentity 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 10, 2025

### Android EdgeIdentity 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

## June 6, 2024

### React Native EdgeIdentity 6.0.2

* Updated typescript files to support strict null checks.

## May 13, 2024

### Flutter EdgeIdentity 4.0.2

* Update environment dependencies in pubspec.

## April 24, 2024

### React Native EdgeIdentity 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter EdgeIdentity 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedgeidentity) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 12, 2024

### React Native EdgeIdentity 6.0.0

Major version update for [Identity for Edge Network](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edgeidentity) Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 2, 2024

### Android EdgeIdentity 3.0.0

Major version update for [Identity for Edge Network](index.md) Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

## March 19, 2024

### iOS EdgeIdentity 5.0.0

Major version update for [Identity for Edge Network](index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 6, 2024

### iOS EdgeIdentity 4.0.1

* Added max versions to Platform dependencies in podspec.

## July 25, 2023

### Android EdgeIdentity 2.0.1

* Added validation to ignore `IdentityItem`s with an empty ID value.
* Fixed an issue where the `getUrlVariables` API may fail to generate a response on Android 6 (API 23) devices.

## June 1, 2023

### iOS EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## February 28, 2023

### iOS AEPEdgeIdentity 1.2.0

* Added tvOS support.
* Identity map no longer accepts identity items with an empty string value for ID.

## January 31, 2023

### Android EdgeIdentity 2.0.0

* Major version update for [Identity for Edge Network](index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeidentity-android).

## June 7, 2022

### iOS AEPEdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.

### Android EdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.
* Internal fixes for IdentityMap deserialization.

## April 1, 2022

### iOS AEPEdgeIdentity 1.0.1

* Synchronized updates and reads on the Identity for Edge Network shared state to avoid any race conditions.

## April 13, 2021

### Identity tags Extension

You can now find the `Identity` extension in the tags extensions catalog for mobile properties.

## April 8, 2021

### iOS & Android EdgeIdentity 1.0.0

The Adobe Experience Platform Identity (AEPEdgeIdentity) mobile extension is now available on iOS and Android! This extension enables handling of user identity data from a mobile app when using the Adobe Experience Platform SDK and the Edge Network extension.
