---
title: Release notes
description: Release notes and changelogs for the Adobe Experience Platform Mobile SDKs.
Keywords:
- Release notes
---

# Release notes

## April 1, 2024

### Android Assurance 3.0.0

Major version update for Adobe Experience Platform Mobile Assurance SDK on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Migrated SDK UI components to Jetpack Compose.

### Android UserProfile 3.0.0

Major version update for Adobe Experience Platform Mobile User Profile SDK on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Removed deprecated `UserProfile.updateUserAttribute` API. Use the `UserProfile.updateUserAttributes` API instead.
* Removed deprecated `UserProfile.removeUserAttribute` API. Use the `UserProfile.removeUserAttributes` API instead.

### Android Signal 3.0.0

Major version update for [Signal](https://developer.adobe.com/client-sdks/home/base/mobile-core/signal/) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android Lifecycle 3.0.0

Major version update for [Lifecycle](https://developer.adobe.com/client-sdks/home/base/mobile-core/lifecycle/) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android Identity 3.0.0

Major version update for [Identity](https://developer.adobe.com/client-sdks/home/base/mobile-core/identity/) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android Core 3.0.0

Major version update of Adobe Experience Platform Core Android SDK is live!

Please note that the current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher. 
* Migrated UI service to use Jetpack Compose.
* Removed deprecated `MobileCore.registerExtension(...)` and `MobileCore.start()` APIs. Use the `MobileCore.registerExtensions(...)` API for registering extensions and initializing the SDK instead.
* Removed `MobileCore.setMessagingDelegate`, `MobileCore.getMessagingDelegate` APIs which were used to control the display of in-app messages. Migrate to `com.adobe.marketing.mobile.services.ui.PresentationDelegate` and use `ServiceProvider.getUIService().setPresentationDelegate` API instead.
* Removed other APIs related to extension development which were deprecated in 2.0.0.
* Added an enhancement to prevent network retries when the device's network is offline

## March 20, 2024

### iOS Mobile Core 5.x and compatible extensions

New major version of the Mobile Core SDK for iOS has been released along with updates to other extensions. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0 (for extensions which support tvOS).
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Include a privacy manifest for AEPCore and AEPServices.

Note that all these extensions must be updated together.

* iOS Mobile Core 5.0.0
* iOS Signal 5.0.0
* iOS Lifecycle 5.0.0
* iOS Identity 5.0.0
* iOS Profile 5.0.0
* iOS Adobe Experience Platform Assurance 5.0.0
* iOS Adobe Experience Platform Edge Network 5.0.0
* iOS Adobe Journey Optimizer 5.0.0
* iOS Adobe Journey Optimizer - Decisioning 5.0.0
* iOS Consent for Edge Network 5.0.0
* iOS Identity for Edge Network 5.0.0
* iOS Media for Edge Network 5.0.0
* iOS Edge Bridge 5.0.0
* iOS Adobe Analytics 5.0.0
* iOS Adobe Analytics - Media Analytics for Audio & Video 5.0.0
* iOS Adobe Audience Manager 5.0.0
* iOS Adobe Campaign Standard 5.0.0
* iOS Adobe Campaign Classic 5.0.0
* iOS Adobe Target 5.0.0
* iOS Places Service 5.0.0

To learn how Apple's privacy related announcements made in WWDC of 2023 affect the Mobile SDK, please read the guide on [iOS privacy manifest and related changes](../../resources/privacy-manifest.md).

For help on moving to these versions, and information on deprecated APIs please see:

* [Migration guide](../../resources/migration/ios/index.md)

### iOS UserProfile 5.0.0

Major version update for [User Profile](../base/profile/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Assurance 5.0.0

Major version update for [Adobe Experience Platform Assurance](../base/assurance/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Messaging 5.0.0

Major version update for [Adobe Journey Optimizer](../../edge/adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Added [`handleNotificationResponse(_:urlHandler:closure:)`](./../../edge/adobe-journey-optimizer/api-reference/#handlenotificationresponse) API to provide more control over URL handling from `UNNotificationResponse` objects.
  * Removed deprecated public API `Messaging.handleNotificationResponse(_:applicationOpened:withCustomActionId:)`.
  * Removed public API `Messaging.handleNotificationResponse(_:closure:)` API.
* Added support for [Code Based Experiences](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based).
  * Added public API [`Messaging.updatePropositionsForSurfaces(_)`](./../../edge/adobe-journey-optimizer/code-based/api-reference/#updatepropositionsforsurfaces).
  * Added public API [`Messaging.getPropositionsForSurfaces(_:completion:)`](./../../edge/adobe-journey-optimizer/code-based/api-reference/#getpropositionsforsurfaces).

### iOS Optimize 5.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](../../edge/adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Renamed class `Proposition` to `OptimizeProposition`.

### iOS EdgeConsent 5.0.0

Major version update for [Consent for Edge Network](../../edge/consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS EdgeMedia 5.0.0

Major version update for [Adobe Streaming Media for Edge Network](../../edge/media-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS EdgeBridge 5.0.0

Major version update for [Edge Bridge](../../solution/adobe-analytics/migrate-to-edge-network.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Updated Edge Bridge data format to enhance support for migrating to sending data via Edge Network to Adobe Analytics and reduce the effort required for mapping data to XDM.
* If you are currently using Edge Bridge version 4.0.0 and you are mapping data to XDM in your datastream, adjustments will be necessary when adopting version 5.0.0. For more details, please review the [migration](../../resources/migration/ios/migrate-to-5x.md) documentation.

### iOS Analytics 5.0.0

Major version update for [Adobe Analytics](../../solution/adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Media 5.0.0

Major version update for [Adobe Analytics - Media Analytics workflows](../../solution/adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Audience 5.0.0

Major version update for [Adobe Audience Manager](../../solution/adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Campaign Classic 5.0.0

Major version update for [Campaign Classic](../../solution/adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Campaign Standard 5.0.0

Major version update for [Campaign Standard](../../solution/adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS Target 5.0.0

Major version update for [Target](../../solution/adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Fixed a bug when using Target Preview on device that caused the floating button to remain visible when a preview selection was active.

### iOS Places 5.0.0

Major version update for [Places](../../solution/places/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Fixes a bug where limit was not being respected in calls to `getNearbyPointsOfInterest`.

## March 19, 2024

### iOS Core 5.0.0

Major version update of Adobe Experience Platform Core iOS SDKs are live! It contains the following extensions:

* Core 5.0.0
* Identity 5.0.0
* Signal 5.0.0
* Lifecycle 5.0.0

Please note that the current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Include a privacy manifest for AEPCore and AEPServices.

### iOS Edge 5.0.0

Major version update for [Edge Network](../../edge/edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

### iOS EdgeIdentity 5.0.0

Major version update for [Identity for Edge Network](../../edge/identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0 and tvOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.

## March 12, 2024

### Android BOM 2.9.6

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.5) | BOM (2.9.6) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.4** | **2.1.5**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:core | 2.6.2 | 2.6.2 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## March 11, 2024

### Android Campaign Classic 2.1.5

* Re-add parsing of the `adb_icon` key value pair from the push template payload. The value will be used to locate and then set a notification small icon from the app's bundle if the `adb_small_icon` key value pair is not present in the push payload.

## March 8, 2024

### iOS UserProfile 4.0.1

* Fix an issue where dependency versions did not have an upper bound restriction.

## March 7, 2024

### Roku SDK 1.1.0

* Streaming Media for Edge Network
  * Added new APIs and configuration for tracking media.
  * Customizable ping interval.
* Added support to create multiple instances of the SDK.
* Support non-xdm data in `SendEvent` API
* A comprehensive [migration guide](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/media-migration.md) to transition from [Adobe Media SDK](https://github.com/Adobe-Marketing-Cloud/media-sdks/tree/master/sdks/roku) to [Adobe Experience Platform Roku SDK](https://github.com/adobe/aepsdk-roku).

### iOS Assurance 4.1.2

* Fix an issue where dependency versions did not have an upper bound restriction.

### iOS Analytics 4.0.1

* Added max versions to Platform dependencies in podspec.

### iOS EdgeConsent 4.0.1

* Added max versions to Platform dependencies in podspec.

## March 6, 2024

### iOS EdgeMedia 4.0.1

* Added max versions to Platform dependencies in podspec.

### iOS EdgeIdentity 4.0.1

* Added max versions to Platform dependencies in podspec.

### iOS Edge 4.3.1

* Added max versions to Platform dependencies in podspec.

### iOS EdgeBridge 4.1.1

* Added max versions to Platform dependencies in podspec.

### iOS Media 4.0.2

* Added max versions to Platform dependencies in podspec.

### iOS Audience 4.0.1

* Added max versions to Platform dependencies in podspec.

### Android BOM 2.9.5

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.4) | BOM (2.9.5) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:messaging** | **2.2.0** | **2.2.1**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:core | 2.6.2 | 2.6.2 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## March 5, 2024

### Android Messaging 2.2.1

* Handle a null network connection exception which was causing the Messaging extension to fail to be registered.

## February 29, 2024

### Android BOM 2.9.4

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.3) | BOM (2.9.4) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.3** | **2.1.4**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:core | 2.6.2 | 2.6.2 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## February 28, 2024

### iOS Messaging 4.1.1

* Added max versions to Platform dependencies in podspec

### iOS Campaign Standard 4.0.1

* Added max versions to Platform dependencies in podspec

### iOS Optimize 4.0.3

* Added max versions to Platform dependencies in podspec

### iOS Campaign Classic 4.0.1

* Added max versions to Platform dependencies in podspec

### iOS Target 4.0.4

* Added max versions to Platform dependencies in podspec

### Android Campaign Classic 2.1.4

* Add support for setting a large notification icon from a bundled drawable or a remote image url.
* Use the defined Push Template action URI for carousel items that do not have an action URI.
* Fix a NPE seen when a tag string was not provided for a basic template notification.

## February 27, 2024

### iOS Places 4.1.1

* Added max versions to Platform dependencies in podspec

## February 15, 2024

### iOS Core 4.2.3

* Fix podspec dependencies not being restricted to current major version.
* Fixed an issue that was allowing in-app messages without content to be displayed.

## February 6, 2024

### Android BOM 2.9.3

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.2) | BOM (2.9.3) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.2** | **2.1.3**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:core | 2.6.2 | 2.6.2 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## February 2, 2024

### Android Campaign Classic 2.1.3

* Fix key value pair extraction from a push notification data payload. Push data payload values are preferred over push notification payload values.

## February 1, 2024

### Android BOM 2.9.2

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.1) | BOM (2.9.2) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **2.2.0** | **2.2.1**|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.1** | **2.1.2**|
| **com.adobe.marketing.mobile:target** | **2.0.2** | **2.0.3**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:core | 2.6.2 | 2.6.2 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## January 30, 2024

### Android Assurance 2.2.1

* Fixed an issue that caused large Assurance events to be sent with malformed payload.

## January 29, 2024

### Android Campaign Classic 2.1.2

* Fix notification sticky behavior

## January 26, 2024

### Android BOM 2.9.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.0) | BOM (2.9.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.6.1** | **2.6.2**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### Android Core 2.6.2

* Add array support for token replacement in the launch rules engine.
* The code used to fix issues on Android 8/8.1 has been restricted from execution on other Android OS versions.

### iOS Target 4.0.3

* Fixed an issue where Target response tokens were not returned in `TargetRequest`'s `contentWithDataCallback` callback when using `retrieveLocationContent` API.

The response tokens should be parsed as `[String: Any]`. For details, see usage example for [retrieveLocationContent](../../solution/adobe-target/api-reference.md#retrievelocationcontent) API.

### Android Target 2.0.3

* Fixed an issue where Target response tokens were not returned in `TargetRequest`'s `AdobeTargetDetailedCallback` callback when using `retrieveLocationContent` API.

The response tokens should be parsed as `Map<String: Object>`. For details, see usage example for [retrieveLocationContent](../../solution/adobe-target/api-reference.md#retrievelocationcontent) API.

## January 25, 2024

### React Native Edge library 5.1.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
This release updates dependencies on native Edge Network SDK to minimum v4.3.0 (iOS) and v2.4.0 (Android).
Refer to API doc [here](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edge#sendevent).

## January 23, 2024

### Android BOM 2.9.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.8.1) | BOM (2.9.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.0.1** | **2.1.1**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:core | 2.6.1 | 2.6.1 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## January 22, 2024

### iOS Core 4.2.2

* Add array support for token replacement in the launch rules engine.
* Fixed a caching issue that could cause display problems when two or more in-app messages were being triggered by identical conditions.

### Android Campaign Classic 2.1.1

* Fixed a bug with manual carousel buttons

## January 19, 2024

### Android Campaign Classic 2.1.0

* Added support for out-of-the-box push notifications:
  * Basic notifications, including remind me later and call-to-action functionality
  * Manual and automatic image carousels of three to five items

See a full description of the new [push template payloads](./../../solution/adobe-campaign-classic/push-templates).

## January 17, 2024

### iOS Assurance 4.1.1

* Fixed a race condition which could happen when the Assurance session is terminated.

## January 8, 2024

### iOS Media 4.0.1

* Fixes configuration handling where the Collection API Server with first-party domain and /va path was not accepted.

## January 4, 2024

### iOS Core 4.2.1

* Reverts storage for tvOS back to UserDefaults.

## December 13, 2023

### Android BOM 2.8.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.8.0) | BOM (2.8.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.6.0** | **2.6.1**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### Android Core 2.6.1

* Fixed an issue where failure to create a webview for displaying an in-app message would cause the UI to be blocked.

## November 15, 2023

### Android BOM 2.8.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.7.0) | BOM (2.8.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.5.1** | **2.6.0**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### Android Core 2.6.0

* Fixed the UI takeover behavior for in-app messages. When UI takeover is disabled, taps outside the in-app webview no longer dismiss the message.

## October 31, 2023

### iOS Core 4.2.0

* Migrates storage from UserDefaults to iOS file system.

<InlineAlert variant="info" slots="text"/>

Downgrading from this version of Core is unsupported, as it will cause undefined behavior.

<InlineAlert variant="warning" slots="text"/>

Please do not use this release for tvOS. Use the 4.2.1 release instead.

## October 30, 2023

### Android BOM 2.7.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.6.0) | BOM (2.7.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.5.0** | **2.5.1**|
| **com.adobe.marketing.mobile:edge** | **2.3.0** | **2.4.0**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### Android Core 2.5.1

* Fixed a resource leak in `StreamUtils`.
* Fixed a crash when displaying in-app messages.

## October 27, 2023

### iOS Edge 4.3.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
* Improved logging on connection failure.

### Android Edge 2.4.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
* Improved logging on connection failure.

## October 24, 2023

### Android BOM 2.6.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.5.1) | BOM (2.6.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **2.1.1** | **2.2.0**|
| **com.adobe.marketing.mobile:target** | **2.0.1** | **2.0.2**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:core | 2.5.0 | 2.5.0 |
| com.adobe.marketing.mobile:edge | 2.3.0 | 2.3.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:optimize | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## October 19, 2023

### iOS Assurance 4.1.0

* Fixed a mismatch in the client and sessionID keys
* Added support for receiving large `AssuranceEvents`.

### Android Assurance 2.2.0

* Added support for receiving large `AssuranceEvents`.
* Fixed an issue that caused incorrect manifest contents being sent in the clientInfo event.

## October 13, 2023

### Android BOM 2.5.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.5.0) | BOM (2.5.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **2.0.1** | **2.0.2**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:core | 2.5.0 | 2.5.0 |
| com.adobe.marketing.mobile:edge | 2.3.0 | 2.3.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## October 12, 2023

### iOS Target 4.0.2

* Access to containers in `TargetState` is now synchronized in order to prevent possible runtime exceptions.

## October 5, 2023

### Android Optimize 2.0.2

* Added support for enforcing events' order for `updatePropositions` and `getPropositions` APIs in the extension. A `getPropositions` API invocation will be resolved only after any prior `updatePropositions` API requests are completed irrespective of the async API behavior.

## October 4, 2023

### iOS Optimize 4.0.2

* Added support for enforcing events' order for `updatePropositions` and `getPropositions` APIs in the extension. A `getPropositions` API invocation will be resolved only after any prior `updatePropositions` API requests are completed irrespective of the async API behavior.

## October 3, 2023

### Android BOM 2.5.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.4.1) | BOM (2.5.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.4.0** | **2.5.0**|
| **com.adobe.marketing.mobile:messaging** | **2.1.4** | **2.2.0**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.3.0 | 2.3.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## September 28, 2023

### Android Core 2.5.0

* Added getter APIs `getLargeIconResourceID` and `getSmallIconResourceID` to MobileCore for retrieving the icon resource IDs set from the application.

### iOS Messaging 4.1.0

* Added new notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse` and an optional callback the returns `PushTrackingStatus` enum.
  * This API will automatically handle the click behaviour (OPENAPP, WEBURL, DEEPLINK) defined for the notification.
* Deprecated the notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse`, `applicationOpened`, and `customActionId`.
* Fixed a bug on notification tracking API `handleNotificationResponse` to stop sending tracking hits to edge servers when the notification does not contain tracking information.

### Android Messaging 2.2.0

* Introduced `MessagingServices` class to automatically build, display, track, and handle defined click behaviour on notifications from Adobe Journey Optimizer.
* Fixed a bug on notification tracking API `handleNotificationResponse` to stop sending tracking hits to edge servers when the notification does not contain tracking information.

## September 26, 2023

### Android BOM 2.4.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.4.0) | BOM (2.4.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaign** | **2.0.5** | **2.0.6**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:core | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edge | 2.3.0 | 2.3.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## September 21, 2023

### Android Campaign 2.0.6

* Updated the minimum Core dependency version to 2.3.1 to resolve a local notification display issue.

## September 14, 2023

### AEP React Native Core 5.0.1

* Updated the docs to call out trackAction/trackState are supported through Edge Network or Edge Bridge extensions.

## September 5, 2023

### Android BOM 2.4.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.3.0) | BOM (2.4.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:edge** | **2.2.0** | **2.3.0**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.5 | 2.0.5 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:core | 2.4.0 | 2.4.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## September 1, 2023

### iOS Edge 4.2.0

* Added the ability to request a "completion" event when making an experience event request. The `contentComplete` event is dispatched after the request connection is closed.

### Android Edge 2.3.0

* Added the ability to request a "completion" event when making an experience event request. The `contentComplete` event is dispatched after the request connection is closed.

## August 30, 2023

### Android BOM 2.3.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.2.0) | BOM (2.3.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.3.1** | **2.4.0**|
| **com.adobe.marketing.mobile:optimize** | **2.0.0** | **2.0.1**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.5 | 2.0.5 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:places | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### iOS Core 4.1.0

* Fixed a bug where the in-app message was not displayed correctly when there was a change in device orientation.
* Fixed a bug where the cached appId could overwrite the one set with `MobileCore.configureWithAppId()` before extension registration.
* Added the `contentComplete` event source constant for Edge workflows.

### Android Core 2.4.0

* Fixed a bug where floating button was not being displayed properly after being dismissed.
* Fixed a bug where `MobileCore.updateConfiguration()` was not updating configuration key for the correct environment.
* Added the `contentComplete` event source constant for Edge workflows.

### Android Optimize 2.0.1

* Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.

### iOS Optimize 4.0.1

* Fixed an issue where Optimize SDK extension was not correctly verifying a set configuration state before processing proposition requests.

## August 9, 2023

### Android BOM 2.2.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.1.0) | BOM (2.2.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.3.0** | **2.3.1**|
| **com.adobe.marketing.mobile:places** | **2.0.0** | **2.1.0**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.1.1 | 2.1.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.5 | 2.0.5 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.2.0 | 2.2.0 |
| com.adobe.marketing.mobile:edgebridge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgemedia | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

## August 8, 2023

### iOS Places 4.1.0 and Android Places 2.1.0

* Added support for forwarding location entry and exit events to Adobe Experience Platform. For more information, refer to the [Places Service event forwarding to Adobe Experience Platform](../../solution/places/places-to-platform.md) guide.

### Android Core 2.3.1

* Fixed an issue with displaying local notifications.

## August 7, 2023

### Roku SDK 1.0.0

This is the first stable release of the Roku SDK, which exposes APIs to help developers to integrate the Adobe Experience Platform solutions with the Roku channel.

Features:

* **Adobe Experience Platform Edge Network integration:** Seamlessly send data to the Edge Network, and get greater control over data interactions by optionally registering a callback for Edge response handles.

* **Automated ECID and ImplementationDetails attachment:** Experience more efficient tracking and integration as ECID (Experience Cloud ID) and Implementation details are now automatically appended to every XDM Experience Event request.

* **Custom identity synchronization:** Personalize user experiences effectively by syncing Custom Identities with each XDM Experience Event request. Unlock the potential of the Edge Network while maintaining tailored interactions.

For more information, refer to the documentation below:

* [Getting Started](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/getting-started.md)
* [API Reference](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/api-reference.md)
* [Sample App](https://github.com/adobe/aepsdk-roku/blob/main/sample/simple-videoplayer-channel/README.md)

## July 26, 2023

### Android BOM 2.1.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/2.1.0)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header="Expand">

| Extension artifact | BOM (2.0.1) | BOM (2.1.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:edgemedia** |  | **2.0.0** |
| **com.adobe.marketing.mobile:analytics** | **2.0.2** | **2.0.3**|
| **com.adobe.marketing.mobile:assurance** | **2.1.0** | **2.1.1**|
| **com.adobe.marketing.mobile:campaign** | **2.0.4** | **2.0.5**|
| **com.adobe.marketing.mobile:core** | **2.2.3** | **2.3.0**|
| **com.adobe.marketing.mobile:edge** | **2.1.0** | **2.2.0**|
| **com.adobe.marketing.mobile:edgebridge** | **2.0.0** | **2.1.0**|
| **com.adobe.marketing.mobile:edgeidentity** | **2.0.0** | **2.0.1**|
| **com.adobe.marketing.mobile:lifecycle** | **2.0.3** | **2.0.4**|
| **com.adobe.marketing.mobile:target** | **2.0.0** | **2.0.1**|
| **com.adobe.marketing.mobile:userprofile** | **2.0.0** | **2.0.1**|
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:places | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |

</AccordionItem>

</Accordion>

### Android Analytics 2.0.3

* Added `a.systemLocale` to Lifecycle hits.

### Android Core 2.3.0

* Added the DeviceInforming.getSystemLocale() API, which returns the locale set by the user in the system.
* Implemented database recovery in SQLiteDataQueue for cases where adding or removing an entry fails due to unexpected errors.
* Fixed an issue with the rounded corners and placement of in-app messages on Android 21/22.
* Fixed a bug where the cached appId could overwrite the one set with MobileCore.configureWithAppId() before extension registration.

### Android Lifecycle 2.0.4

* Lifecycle extension now includes the system locale, indicating the device's preferred locale, in its published shared state.
* Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.

### Android UserProfile 2.0.1

* Updated POM file with the Apache 2 license.

## July 25, 2023

### Android EdgeIdentity 2.0.1

* Added validation to ignore `IdentityItem`s with an empty ID value.
* Fixed an issue where the `getUrlVariables` API may fail to generate a response on Android 6 (API 23) devices.

## July 21, 2023

### iOS Edge 4.1.0

* Added support for chaining related events.
* Fixed location of event index when decoding network response errors and warnings.

### iOS EdgeBridge 4.1.0

* Added support for chaining related events.

### Android Edge 2.2.0

* Added support for chaining related events.
* Fixed location of event index when decoding network response errors and warnings.

### Android EdgeBridge 2.1.0

* Added support for chaining related events.
* Updated POM file with the Apache 2 license URL.

## July 20, 2023

### Android Assurance 2.1.1

* Added support for chained events.

## July 12, 2023

### Android Campaign 2.0.5

* Fixed a bug where a bundled asset was not being used in a fullscreen message when the remote image URL was inaccessible.

## July 11, 2023

### iOS Target 4.0.1 and Android Target 2.0.1

* Fixed a bug in which a Target Response containing JSON Array content was rejected.

## June 29, 2023

### Android BOM 2.0.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/2.0.1)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header="Expand">

| Extension artifact | BOM (2.0.0) | BOM (2.0.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.2.2** | **2.2.3**|
| com.adobe.marketing.mobile:analytics | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:assurance | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgebridge | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:places | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:userprofile | 2.0.0 | 2.0.0 |

</AccordionItem>

</Accordion>

### Android Core 2.2.3

* Fixed handling of back button press in in-app messages.
* Resolved a crash that occurred when dismissing in-app messages.

## June 20, 2023

### AEP React Native libraries 5.0.0

The following React Native libraries have been upgraded to use the version 4 of the Adobe Experience Platform Mobile SDK for iOS. Starting with this release, all React Native libraries that share the same major version are compatible with each other.

* [@adobe/react-native-aepcore:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepcore/v/5.0.0)
* [@adobe/react-native-aepassurance:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepassurance/v/5.0.0)
* [@adobe/react-native-aepuserprofile:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepuserprofile/v/5.0.0)
* [@adobe/react-native-aepedge:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedge/v/5.0.0)
* [@adobe/react-native-aepedgebridge:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedgebridge/v/5.0.0)
* [@adobe/react-native-aepedgeconsent:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedgeconsent/v/5.0.0)
* [@adobe/react-native-aepedgeidentity:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedgeidentity/v/5.0.0)
* [@adobe/react-native-aepoptimize:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepoptimize/v/5.0.0)
* [@adobe/react-native-aepplaces:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepplaces/v/5.0.0)
* [@adobe/react-native-aeptarget:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aeptarget/v/5.0.0)
* [@adobe/react-native-aepcampaignclassic:5.0.0](https://www.npmjs.com/package/@adobe/react-native-aepcampaignclassic/v/5.0.0)

## June 19, 2023

### Android BOM 2.0.0

* Align the major version to match the current major version of the MobileCore extension for Android. Please refer to the [major version alignment document](../../resources/major-version-alignment.md).
* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/2.0.0)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header="Expand">

| Extension artifact | BOM (1.0.1) | BOM (2.0.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.2.1** | **2.2.2**|
| com.adobe.marketing.mobile:analytics | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:assurance | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:edge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgebridge | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:identity | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:lifecycle | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:places | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:userprofile | 2.0.0 | 2.0.0 |

</AccordionItem>

</Accordion>

## June 15, 2023

### Android Core 2.2.2

* Fixed an issue in Android API 22 and below where the in-app message would sometimes take over the screen, rendering the app unresponsive.
* Fixed an issue where the onShow method in FullscreenMessageDelegate and MessagingDelegate was being notified multiple times after displaying an in-app message.
* Improved the handling of in-app messages during orientation changes.

## June 12, 2023

### Android BOM 1.0.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/1.0.1)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header="Expand">

| Extension artifact | BOM (1.0.0) | BOM (1.0.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.0.0** | **2.0.1**|
| **com.adobe.marketing.mobile:core** | **2.2.0** | **2.2.1**|
| **com.adobe.marketing.mobile:identity** | **2.0.2** | **2.0.3**|
| **com.adobe.marketing.mobile:lifecycle** | **2.0.2** | **2.0.3**|
| com.adobe.marketing.mobile:analytics | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:assurance | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.4 | 2.0.4 |
| com.adobe.marketing.mobile:edge | 2.1.0 | 2.1.0 |
| com.adobe.marketing.mobile:edgebridge | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:messaging | 2.1.4 | 2.1.4 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:places | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:target | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:userprofile | 2.0.0 | 2.0.0 |

</AccordionItem>

</Accordion>

### Android Core 2.2.1

* Updated EventDataUtils to drop entries with unsupported values during cloning instead of throwing an exception.
* Fixed a crash when displaying in-app messages.
* Fixed rounded corners when displaying in-app messages.
* Fixed an issue where the shared state published by Event Hub was mutable.

### Android Lifecycle 2.0.3

* Fixed an issue where session start time (`starttimestampmillis`) was shared in seconds instead of milliseconds in Lifecycle shared state.
* Fixed an issue where session start time (`starttimestampmillis`), previous session start time (`previoussessionstarttimestampmillis`), and previous session pause time (`previoussessionpausetimestampmillis`) were shared in seconds instead of milliseconds in Lifecycle response event.

### Android Identity 2.0.3

* Added debug logs around ECID generation.

## June 9, 2023

### iOS Mobile Core 4.x and compatible extensions

New major version of the Mobile Core SDK for iOS has been released along with updates to other extensions. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0 (for extensions which support tvOS).
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

Note that all these extensions must be updated together.

* iOS Mobile Core 4.0.0
* iOS Signal 4.0.0
* iOS Lifecycle 4.0.0
* iOS Identity 4.0.0
* iOS Profile 4.0.0
* iOS Adobe Experience Platform Assurance 4.0.0
* iOS Adobe Experience Platform Edge Network 4.0.0
* iOS Identity for Edge Network 4.0.0
* iOS Consent for Edge Network 4.0.0
* iOS Media for Edge Network 4.0.0 (Initial release)
* iOS Edge Bridge 4.0.0
* iOS Adobe Journey Optimizer 4.0.0
* iOS Adobe Journey Optimizer - Decisioning 4.0.0
* iOS Places Service 4.0.0
* iOS Adobe Analytics 4.0.0
* iOS Adobe Analytics - Media Analytics for Audio & Video 4.0.0
* iOS Adobe Target 4.0.0
* iOS Adobe Campaign Standard 4.0.0
* iOS Adobe Campaign Classic 4.0.0
* iOS Adobe Audience Manager 4.0.0

## June 7, 2023

### iOS Target 4.0.0

Major version update for [Adobe Target](../../solution/adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Audience 4.0.0

 Major version update for [Adobe Audience Manager](../../solution/adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Media 4.0.0

Major version update for [Adobe Analytics - Media Analytics workflows](../../solution/adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Fixed an issue that prevented timer from firing when called from background thread.

## June 6, 2023

### Android Edge Media 2.0.0

Initial release of the [Adobe Streaming Media for Edge Network](../../edge/media-for-edge-network/index.md) extension for Android which sends data about audio and video consumption on your streaming applications to the Adobe Experience Platform Edge Network. This enables capabilities for measurement, analysis, and activation with media data across the Adobe Experience Cloud solutions.

### iOS Edge Media 4.0.0

Initial release of the [Adobe Streaming Media for Edge Network](../../edge/media-for-edge-network/index.md) extension for iOS which sends data about audio and video consumption on your streaming applications to the Adobe Experience Platform Edge Network. This enables capabilities for measurement, analysis, and activation with media data across the Adobe Experience Cloud solutions.

### iOS Places 4.0.0

Major version update for [Adobe Experience Platform Location Service](../../solution/places/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Analytics 4.0.0

Major version update for [Adobe Analytics](../../solution/adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Resolved an issue with retrieving post-processed data in Assurance for track calls with empty state.
* Added `a.systemLocale` to Lifecycle hits.

## June 5, 2023

### iOS Campaign Classic 4.0.0

Major version update for [Adobe Campaign Classic workflows](../../solution/adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Updated the extension to dispatch a Campaign Response Content event containing the device registration status.

### iOS Campaign Standard 4.0.0

Major version update for [Adobe Campaign Standard workflows](../../solution/adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS UserProfile 4.0.0

Major version update for [User Profile](../base/profile/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## June 2, 2023

### iOS Edge Bridge 4.0.0

Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Messaging 4.0.0

Major version update for [Adobe Journey Optimizer](../../edge/adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Optimize 4.0.0

Major version update for [Adobe Journey Optimizer - Decisioning](../../edge/adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Added support for using the Optimize SDK extension in [App Extensions](https://developer.apple.com/app-extensions/).

## June 1, 2023

### iOS Consent 4.0.0

Major version update for [Consent for Edge Network](../../edge/consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](../../edge/identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Edge 4.0.0

Major version update for [Edge Network](../../edge/edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Removed deprecated class `XDMFormatters`. Use functions `getISO8601UTCDateWithMilliseconds()` and `getISO8601FullDate()` in Date class extension from AEPServices module instead.
* Fixed issue where empty "payload" array was not included in events dispatched after receiving Edge Network response.

### iOS Assurance 4.0.0

Major version update for [Adobe Experience Platform Assurance](../base/assurance/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Core 4.0.0

Major version update of Adobe Experience Platform Core iOS SDKs are live! It contains the following extensions:

* Core 4.0.0
* Identity 4.0.0
* Signal 4.0.0
* Lifecycle 4.0.0

Please note that the current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Added `SystemInfoService.getSystemLocaleName()` API which returns the locale by combining device's preferred language and selected region (as set by the user on the system).
* Lifecycle extension adds `systemlocale` denoting device's preferred locale to its published shared state.
* Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.

### iOS RulesEngine 4.0.0

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.

### Android BOM 1.0.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/1.0.0)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header="Expand">

| Extension artifact | BOM (1.0.0-beta1) | BOM (1.0.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.1.1** | **2.2.0**|
| **com.adobe.marketing.mobile:lifecycle** | **2.0.1** | **2.0.2**|
| **com.adobe.marketing.mobile:campaign** | **2.0.2** | **2.0.4**|
| **com.adobe.marketing.mobile:assurance** | **2.0.1** | **2.1.0**|
| **com.adobe.marketing.mobile:edge** | **2.0.0** | **2.1.0**|
| **com.adobe.marketing.mobile:messaging** | **2.1.1** | **2.1.4**|
| com.adobe.marketing.mobile:identity | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:signal | 2.0.1 | 2.0.1 |
| com.adobe.marketing.mobile:userprofile | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:optimize | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:edgebridge | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:places | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:analytics | 2.0.2 | 2.0.2 |
| com.adobe.marketing.mobile:media | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |

</AccordionItem>

</Accordion>

## May 31, 2023

### Android Campaign Classic 2.0.1

* Updated the extension to dispatch a Campaign Response Content event containing the device registration status.

## May 25, 2023

### Android Campaign Standard 2.0.4

* Update the AEPCore dependency to version 2.2.0 to resolve a WebView transparency issue and fix message frequency rules for Campaign Standard in-app messages.

## May 23, 2023

### Android Core 2.2.0

* Added support for chaining related events.
* Added a new `evaluateEvent` API in the `LaunchRulesEngine` class that returns matching consequences without processing them.
* Fixed a bug where a non-transparent background was visible behind a message webview.
* Fixed the back button functionality to allow for the dismissal of a displayed in-app message using the device's back button.
* Fixed in-app message redraw on device orientation change.
* Fixed a memory leak with the in-app message webview.

### Android Lifecycle 2.0.2

* Chain the events dispatched by the Lifecycle extension to their corresponding request events.

### Android Messaging 2.1.4

* Handle in-app interaction tracking for back button presses.

## May 19, 2023

### iOS Assurance 3.1.2

* Added support for chaining related events.

## May 15, 2023

### iOS Core 3.9.0

* Added support for chaining related events.
* Chain the events dispatched by the Lifecycle extension to their corresponding request events.
* Added a new `evaluate` API in the `LaunchRulesEngine` class that returns matching consequences without processing them.
* Fixed an issue that caused shared state events to be dispatched out of order.
* Fixed an issue that captured event history before processing rules.

## May 4, 2023

### Android Campaign Standard 2.0.3

* Adds support for URL-encoded URLs with query parameters used to configure in-app message clickthrough destination.

## April 28, 2023

### Android Messaging 2.1.3

* Fixed a bug causing in-app message display experience events to be sent even when MessagingDelegate suppressed their display.

### iOS Messaging 1.1.4

* Fixed a bug causing in-app message display experience events to be sent even when MessagingDelegate suppressed their display.

## April 25, 2023

### Android Assurance 2.1.0

* Added a new API for quick connect capability.
* Fixed an issue causing pure Jetpack Compose apps implementing Assurance to add XML color attributes.
* Switched to use vector support library to reduce SDK size.

## April 24, 2023

### Android Mobile Core 2.1.3

* In-app messages with content overflow now correctly scroll when the message is not observing gestures.
* Opacity is now correctly calculated for in-app message takeovers.
* In-app messages will no longer intermittently cause a crash when being displayed on Android 7.
* Fixed a race condition when querying the event history database.

### Android Messaging 2.1.2

* Fixed a bug causing a crash when incorrectly formatted URLs were used in custom HTML messages.

## April 14, 2023

### Android Mobile Core 2.1.2

* Fixed an issue that prevented some in-app messaging show frequency rules from working correctly.
* Improved evaluation of logical operators in rules engine.

## April 11, 2023

### Android Edge 2.1.0

* Added support to overwrite the Edge request path with a custom path to support Edge requests for the Media Analytics service.

## April 10, 2023

### Android BOM 1.0.0-beta1

The initial public beta release of the [Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/1.0.0-beta1) (BOM) artifact for Android is now available.

## April 6, 2023

### Flutter Edge Bridge plugin 1.0.0

The Adobe Experience Platform Edge Bridge Flutter plugin is now available.

With this release, the extension enables a drop-in solution for converting generated events from the Mobile Core track APIs (trackAction and trackState) into Edge Network events.

* [flutter_aepedgebridge@1.0.0](https://pub.dev/packages/flutter_aepedgebridge)

## April 5, 2023

### React Native Edge Bridge library 1.0.0

The Adobe Experience Platform Edge Bridge React Native library is now available.

With this release, the extension enables a drop-in solution for converting generated events from the Mobile Core track APIs (trackAction and trackState) into Edge Network events.

* [@adobe/react-native-aepedgebridge:1.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedgebridge/v/1.0.0)

## April 6, 2023

### iOS Assurance 3.1.1

* Fixed a bug that was causing sessions to not be terminated properly in the Quick Connect flow.

## March 31, 2023

### Android Mobile Core 2.1.1

* Fixed crash during Core boot when migrating the data from v4 Mobile SDK.
* Updated POM file with the Apache 2 license URL.

### Android Identity 2.0.2

* Fixed an issue where Identity could block the processing of requests when the first loaded configuration had incorrect format.
* Updated POM file with the Apache 2 license URL.

## March 28, 2023

### iOS Core 3.8.2

* Fixed some crashes which can happen on shutdown.

## March 27, 2023

### Android Analytics 2.0.2

* Fixed a bug that was causing the "Unavailable" status to be shown in Adobe Analytics view in Assurance for some track events sent soon after app launch.

## March 21, 2023

### iOS Assurance 3.1.0

* Added an API for a new quick connect capability for quick start workflows that will go beta soon.
* Security improvements

## March 20, 2023

### iOS Messaging 1.1.3

* Drop minimum supported version of iOS to 10.0 to align with minimum supported version in AEPCore.

## March 17, 2023

### iOS Core 3.8.1

* Revert changes to minimum supported version of iOS and tvOS back to 10.0.

## March 16, 2023

### Android Messaging 2.1.1

* Messaging extension now processes in-app message responses from multiple upstream services.

## March 15, 2023

### iOS Messaging 1.1.2

* Messaging extension now processes in-app message responses from multiple upstream services.

### iOS RulesEngine 1.2.2

* Revert changes to minimum supported version of iOS and tvOS back to 10.0.

## March 14, 2023

### Android Mobile Core 2.1.0

* Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.

## March 13, 2023

### iOS Core 3.8.0

* Updated the minimum supported versions to iOS 11.0, tvOS 11.0.
* Added support for overriding internal logging service with customer-provided implementation.
* Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.

### iOS RulesEngine 1.2.1

* Updated the minimum supported versions to iOS 11.0, tvOS 11.0.

## March 9, 2023

### AEP React Native libraries

* Updated all the AEP React Native libraries to use MobileCore 2.x for Android and compatible extensions.

The following npms have been published:

* [@adobe/react-native-aepcore:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepcore/v/2.0.0)
* [@adobe/react-native-aepassurance:4.0.0](https://www.npmjs.com/package/@adobe/react-native-aepassurance/v/4.0.0)
* [@adobe/react-native-aepuserprofile:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepuserprofile/v/2.0.0)
* [@adobe/react-native-aepedge:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedge/v/2.0.0)
* [@adobe/react-native-aeedgeidentity:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aeedgeidentity/v/2.0.0)
* [@adobe/react-native-aepedgeconsent:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepedgeconsent/v/2.0.0)
* [@adobe/react-native-aepmessaging:1.0.0](https://www.npmjs.com/package/@adobe/react-native-aepmessaging/v/1.0.0)
* [@adobe/react-native-aepoptimize:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepoptimize/v/2.0.0)
* [@adobe/react-native-aepplaces:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepplaces/v/2.0.0)
* [@adobe/react-native-aeptarget:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aeptarget/v/2.0.0)
* [@adobe/react-native-aepcampaignclassic:2.0.0](https://www.npmjs.com/package/@adobe/react-native-aepcampaignclassic/v/2.0.0)

## March 6, 2023

### iOS Places 3.0.3

* Fixed the friendly name for the extension to be `Places` instead of fully qualified extension name.
* Updated `nearbyPois` in shared state to be an array of POI objects (represented as dictionaries).

### Android Messaging 2.1.0

* Fixed in-app message deeplink processing.
* Added a default implementation for `Message.getAutoTrack` to resolve an issue with the Message interface not matching the previous Message class.

## March 2, 2023

### iOS Target 3.3.1

* `target.previewEnabled` configuration setting is no longer required to enable preview mode in Target iOS SDK. If not configured, the default value here will be set to true.

### AEP Flutter Plugins 2.0.0

* Updated all the AEP Flutter plugins to use MobileCore 2.x for Android and compatible extensions.
* Fixed issues where async calls were not properly completed.

The following plugins have been published:

* [flutter_aepcore@2.0.0](https://pub.dev/packages/flutter_aepcore)
* [flutter_aepassurance@2.0.0](https://pub.dev/packages/flutter_aepassurance)
* [flutter_aepedge@2.0.0](https://pub.dev/packages/flutter_aepedge)
* [flutter_aepedgeidentity@2.0.0](https://pub.dev/packages/flutter_aepedgeidentity)
* [flutter_aepedgeconsent@2.0.0](https://pub.dev/packages/flutter_aepedgeconsent)

### AEP Flutter User Profile 1.0.0

* Added the initial release for [flutter_aepuserprofile@1.0.0](https://pub.dev/packages/flutter_aepuserprofile)

## March 1, 2023

### iOS EdgeConsent 1.1.0

* Added tvOS support.

## February 28, 2023

### iOS Edge 1.6.0

* Added tvOS support.

### iOS EdgeIdentity 1.2.0

* Added tvOS support.
* Identity map no longer accepts identity items with an empty string value for ID.

## February 27, 2023

### Android Assurance 2.0.1

* Contents of the application manifest (AndroidManifest.xml) are now included in the `clientInfo` event.

### iOS Messaging 1.1.1

* Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.

### Android Messaging 2.0.2

* Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.
* Fixes an issue where only the first in-app message present in a payload was being loaded into the rules engine.

## February 23, 2023

New major version of the Mobile Core SDK for Android has been released along with updates to other extensions to take advantage of the new features and improvements. These improvements include:

* Android SDKs updated to have similar architecture to iOS Swift SDKs.
* All extensions open-sourced.
* Integration with Kotlin apps improved.
* AndroidX support added.
* Security improvements added.

Note that all these extensions must be updated together.

* Android Mobile Core 2.0.1
* Android Signal 2.0.1
* Android Lifecycle 2.0.1
* Android Identity 2.0.1
* Android Profile 2.0.0
* Android Adobe Experience Platform Assurance 2.0.0
* Android Adobe Experience Platform Edge Network 2.0.0
* Android Identity for Edge Network 2.0.0
* Android Consent for Edge Network 2.0.0
* Android Edge Bridge 2.0.0
* Android Adobe Journey Optimizer 2.0.1
* Android Adobe Journey Optimizer - Decisioning 2.0.0
* Android Places Service 2.0.0
* Android Adobe Analytics 2.0.1
* Android Adobe Analytics - Media Analytics for Audio & Video 3.0.0
* Android Adobe Target 2.0.0
* Android Adobe Campaign Standard 2.0.2
* Android Adobe Campaign Classic 2.0.0
* Android Adobe Audience Manager 2.0.0

For help on moving to these versions, and information on deprecated APIs please see:

* [Migration guide](../../resources/migration/android/migrate-to-2x.md)
* [Migration FAQ](../../resources/migration/android/migrate-to-2x.md#frequently-asked-questions)

## February 17, 2023

### Android Analytics 2.0.1

* Made the extension compatible with Kotlin 1.4.
* Analytics shared state is made available on boot-up if there are any previously stored identifiers.
* Shared state is only updated when an identifier is set and not on get requests.

### Android Campaign Standard 2.0.2

* Made the extension compatible with Kotlin 1.4.

## February 13, 2023

### Android Edge 1.4.1

* Improves error handling when processing `Edge.sendEvent` requests by catching and logging unexpected `RuntimeException` instances thrown from within caller's `EdgeCallback` handler implementation.

## February 9, 2023

### Android Mobile Core 2.0.1

* Fixed issue causing large delays in configuration download retries.
* Fixed issue causing backdrop opacity being set incorrectly in `MessageSettings`.
* Updated `MessagingDelegate` to mirror the implementation of the iOS SDK, and exposed `Message` interface for app developers to access InternalMessage objects created by Messaging extension.
* Fixed issue with javadoc generation.
* Improved resource handling after network connection attempts.
* Improved database handling during fresh installation scenarios.

### Android Signal 2.0.1

* Fixed issue with javadoc generation.

### Android Lifecycle 2.0.1

* Fixed issue with javadoc generation.

### Android Identity 2.0.1

* Fixed issue with javadoc generation.

### Android Messaging 2.0.1

* Updates the Core dependency to 2.0.1, which resolves inconsistencies between the Android and iOS MessagingDelegate classes.

### Android Campaign Standard 2.0.1

* Updates Mobile Core dependency to 2.0.1 which includes stability fixes.

### Android Target 2.0.0

* Major version update for [Adobe Target](../../solution/adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-target-android).

Please note that the following improvements have been made in the current release:

1. The below APIs have been renamed for alignment with the Adobe Target Mobile SDK for iOS:

* `locationsDisplayed` is now `displayedLocations`
* `locationClicked` is now `clickedLocation`

2. The public classes `TargetRequest`, `TargetPrefetch`, `TargetOrder`, `TargetProduct` and `TargetParameters` are consolidated under the `target` subpackage and require updating the import statements as shown below:

```java
import com.adobe.marketing.mobile.target.TargetRequest;
import com.adobe.marketing.mobile.target.TargetPrefetch;
import com.adobe.marketing.mobile.target.TargetOrder;
import com.adobe.marketing.mobile.target.TargetProduct;
import com.adobe.marketing.mobile.target.TargetParameters;
```

3. The previously deprecated Target APIs and classes have been removed. For more information, please read this section on the [deprecated APIs and the recommended alternative APIs](https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-target/deprecated-apis/).

### iOS Messaging 1.1.0

* Adds support for Adobe Journey Optimizer powered in-app messages.

## February 3, 2023

### Android Analytics 2.0.0

* Major version update for [Adobe Analytics](../../solution/adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-analytics-android/).

### Android Audience 2.0.0

* Major version update for [Adobe Audience Manager](../../solution/adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-audience-android).

### Android Media 3.0.0

* Major version update for [Adobe Analytics - Media Analytics workflows](../../solution/adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-media-android).

### Android Messaging 2.0.0

* Major version update for [Adobe Journey Optimizer](../../edge/adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-messaging-android).

### Android Places 2.0.0

* Major version update for [Adobe Experience Platform Location Service](../../solution/places/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-places-android).

Please note that the following improvements have been made in the current release:

1. The `getNearbyPointsOfInterest` API without the errorCallback has been removed. Alternatively, use the below overloaded API which provides both successCallback and errorCallback:

```java
public static void getNearbyPointsOfInterest(final Location location,
      final int limit,
      final AdobeCallback<List<PlacesPOI>> successCallback,
      final AdobeCallback<PlacesRequestError> errorCallback)
```

2. The public classes `PlacesAuthorizationStatus`, `PlacesPOI`, and `PlacesRequestError` are consolidated under the `places` subpackage and require updating the import statements as shown below:

```java
import com.adobe.marketing.mobile.places.PlacesAuthorizationStatus;
import com.adobe.marketing.mobile.places.PlacesPOI;
import com.adobe.marketing.mobile.places.PlacesRequestError;
```

## February 2, 2023

### Android Optimize 2.0.0

* Major version update for [Adobe Journey Optimizer - Decisioning](../../edge/adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This extension library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-optimize-android/).

### Android Campaign Standard 2.0.0

* Major version update for [Adobe Campaign Standard workflows](../../solution/adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaign-android).

## February 1, 2023

### Android Edge Bridge 2.0.0

* Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgebridge-android).

## January 31, 2023

### Android Assurance 2.0.0

* Major version update for [Adobe Experience Platform Assurance](../base/assurance/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-assurance-android).

### Android Campaign Classic 2.0.0

* Major version update for [Adobe Campaign Classic workflows](../../solution/adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaignclassic-android).

Please note that the `registerDevice` API, similar to iOS, no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests.

### Android Consent 2.0.0

* Major version update for [Consent for Edge Network](../../edge/consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeconsent-android).

### Android Edge 2.0.0

* Major version update for [Edge Network](../../edge/edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edge-android).

### Android EdgeIdentity 2.0.0

* Major version update for [Identity for Edge Network](../../edge/identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeidentity-android).

### Android UserProfile 2.0.0

* Major version update for [User Profile](../base/profile/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-userprofile-android).
* The following APIs have been deprecated and will be removed in a future release:

  | Deprecated API | Recommended Alternative |
  | -------------- | ----------------------- |
  | `UserProfile.updateUserAttribute()` | `UserProfile.updateUserAttributes()` |
  | `UserProfile.removeUserAttribute()` | `UserProfile.removeUserAttributes()` |

## January 30, 2023

### Adobe Experience Platform Android Core SDKs

The brand new Adobe Experience Platform Core Android SDKs are live! It is [open sourced on GitHub](https://github.com/adobe/aepsdk-core-android), containing the following extensions:

* Core 2.0.0
* Identity 2.0.0
* Signal 2.0.0
* Lifecycle 2.0.0

<InlineAlert variant="info" slots="text"/>

The `registerExtension` API for each extension is deprecated in the latest version of the mobile SDK. You can call the `MobileCore.registerExtensions` API instead of registering the extensions separately. See the [Migration Guide](../../resources/migration/android/migrate-to-2x.md) for more details.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.
