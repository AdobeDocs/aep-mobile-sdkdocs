---
title: Release notes
description: Release notes and changelogs for the Adobe Experience Platform Mobile SDKs.
Keywords:
- Release notes
---

# Release notes

## September 5, 2023

### Android BOM  2.4.0

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

### Android BOM  2.3.0

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

* Added support for forwarding location entry and exit events to Adobe Experience Platform. For more information, refer to the [Places Service event forwarding to Adobe Experience Platform](/places/places-to-platform.md) guide.

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

* Align the major version to match the current major version of the MobileCore extension for Android. Please refer to the [major version alignment document](../resources/major-version-alignment.md).
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

Major version update for [Adobe Target](../adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Audience 4.0.0

 Major version update for [Adobe Audience Manager](../adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Media 4.0.0

Major version update for [Adobe Analytics - Media Analytics workflows](../adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Fixed an issue that prevented timer from firing when called from background thread.

## June 6, 2023

### Android Edge Media 2.0.0

Initial release of the [Adobe Streaming Media for Edge Network](../media-for-edge-network/index.md) extension for Android which sends data about audio and video consumption on your streaming applications to the Adobe Experience Platform Edge Network. This enables capabilities for measurement, analysis, and activation with media data across the Adobe Experience Cloud solutions.

### iOS Edge Media 4.0.0

Initial release of the [Adobe Streaming Media for Edge Network](../media-for-edge-network/index.md) extension for iOS which sends data about audio and video consumption on your streaming applications to the Adobe Experience Platform Edge Network. This enables capabilities for measurement, analysis, and activation with media data across the Adobe Experience Cloud solutions.

### iOS Places 4.0.0

Major version update for [Adobe Experience Platform Location Service](../places/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Analytics 4.0.0

Major version update for [Adobe Analytics](../adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Resolved an issue with retrieving post-processed data in Assurance for track calls with empty state.
* Added `a.systemLocale` to Lifecycle hits.

## June 5, 2023

### iOS Campaign Classic 4.0.0

Major version update for [Adobe Campaign Classic workflows](../adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Updated the extension to dispatch a Campaign Response Content event containing the device registration status.

### iOS Campaign Standard 4.0.0

Major version update for [Adobe Campaign Standard workflows](../adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS UserProfile 4.0.0

Major version update for [User Profile](../profile/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## June 2, 2023

### iOS Edge Bridge 4.0.0

Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Messaging 4.0.0

Major version update for [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Optimize 4.0.0

Major version update for [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Added support for using the Optimize SDK extension in [App Extensions](https://developer.apple.com/app-extensions/).

## June 1, 2023

### iOS Consent 4.0.0

Major version update for [Consent for Edge Network](../consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](../identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

### iOS Edge 4.0.0

Major version update for [Edge Network](../edge-network/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Removed deprecated class `XDMFormatters`. Use functions `getISO8601UTCDateWithMilliseconds()` and `getISO8601FullDate()` in Date class extension from AEPServices module instead.
* Fixed issue where empty "payload" array was not included in events dispatched after receiving Edge Network response.

### iOS Assurance 4.0.0

Major version update for [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

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

* [Migration guide](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-android)
* [Migration FAQ](../faq.md#migrating-to-android-mobile-core-2x-and-compatible-extensions)

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

* Major version update for [Adobe Target](../adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-target-android).

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

* Major version update for [Adobe Analytics](../adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-analytics-android/).

### Android Audience 2.0.0

* Major version update for [Adobe Audience Manager](../adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-audience-android).

### Android Media 3.0.0

* Major version update for [Adobe Analytics - Media Analytics workflows](../adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-media-android).

### Android Messaging 2.0.0

* Major version update for [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-messaging-android).

### Android Places 2.0.0

* Major version update for [Adobe Experience Platform Location Service](../places/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-places-android).

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

* Major version update for [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This extension library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-optimize-android/).

### Android Campaign Standard 2.0.0

* Major version update for [Adobe Campaign Standard workflows](../adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaign-android).

## February 1, 2023

### Android Edge Bridge 2.0.0

* Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgebridge-android).

## January 31, 2023

### Android Assurance 2.0.0

* Major version update for [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-assurance-android).

### Android Campaign Classic 2.0.0

* Major version update for [Adobe Campaign Classic workflows](../adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaignclassic-android).

Please note that the `registerDevice` API, similar to iOS, no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests.

### Android Consent 2.0.0

* Major version update for [Consent for Edge Network](../consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeconsent-android).

### Android Edge 2.0.0

* Major version update for [Edge Network](../edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edge-android).

### Android EdgeIdentity 2.0.0

* Major version update for [Identity for Edge Network](../identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeidentity-android).

### Android UserProfile 2.0.0

* Major version update for [User Profile](../profile/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-userprofile-android).
* The following APIs have been deprecated and will be removed in a future release:

  | Deprecated API                      | Recommended Alternative              |
  | ----------------------------------- | ------------------------------------ |
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

The `registerExtension` API for each extension is deprecated in the latest version of the mobile SDK. You can call the `MobileCore.registerExtensions` API instead of registering the extensions separately. See the [Migration Guide](https://developer.adobe.com/client-sdks/previous-versions/documentation/migrate-to-android) for more details.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

## October 26, 2022

### AEP Flutter plugins for Edge Network

The following AEP Flutter plugins have been published:

* [flutter_aepedge@1.0.0](https://pub.dev/packages/flutter_aepedge)
* [flutter_aepedgeidentity@1.0.0](https://pub.dev/packages/flutter_aepedgeidentity)
* [flutter_aepedgeconsent@1.0.0](https://pub.dev/packages/flutter_aepedgeconsent)

## October 25, 2022

### iOS AEPEdgeBridge 1.0.0

The `Adobe Experience Platform Mobile SDK - Edge Bridge` extension is now available for iOS!

With this release, the extension enables a drop-in solution for converting Core track API (trackAction & trackState) generated events into Edge Network events. This extension may be used to easily route existing track calls, that may have been implemented for Adobe Analytics, to Edge Network. The configured Data Collection datastream for the mobile application can define a mapping of the track event's `contextdata` to an XDM schema using [Data Prep for Data Collection](https://experienceleague.adobe.com/docs/platform-learn/data-collection/edge-network/data-prep.html) to route data to Adobe Analytics, Adobe Experience Platform, or to 3rd party vendors via server-side event forwarding.

For an end-to-end guide on how to use the extension, see the [Edge Bridge tutorial](https://github.com/adobe/aepsdk-edgebridge-ios/blob/main/Documentation/tutorials/edge-bridge-tutorial.md).

## October 24, 2022

### Android Edge Bridge 1.0.0

The `Adobe Experience Platform Mobile SDK - Edge Bridge` extension is now available for Android!

With this release, the extension enables a drop-in solution for converting Core track API (trackAction & trackState) generated events into Edge Network events. This extension may be used to easily route existing track calls, that may have been implemented for Adobe Analytics, to Edge Network. The configured Data Collection datastream for the mobile application can define a mapping of the track event's `contextdata` to an XDM schema using [Data Prep for Data Collection](https://experienceleague.adobe.com/docs/platform-learn/data-collection/edge-network/data-prep.html) to route data to Adobe Analytics, Adobe Experience Platform, or to 3rd party vendors via server-side event forwarding.

For an end-to-end guide on how to use the extension, see the [Edge Bridge tutorial](https://github.com/adobe/aepsdk-edgebridge-android/blob/main/Documentation/tutorials/edge-bridge-tutorial.md).

## October 19, 2022

### iOS AEPEdge 1.5.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

### Android Edge 1.4.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

## October 11, 2022

### iOS AEPPlaces 3.0.2

* Non-string values in Point of Interest metadata are now correctly handled.

## June 30, 2022

### iOS AEPAnalytics 3.2.0

* Added tvOS support.

### iOS AEPMedia 3.1.0

* Added tvOS support.

## June 16, 2022

### iOS AEPCore 3.7.0

* Added tvOS support.
* Fixed a few race conditions in the EventHub and MobileCore.
* Made changes in AEPIdentity to speed up boot.

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

## June 7, 2022

### iOS AEPEdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.

### Android EdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.
* Internal fixes for IdentityMap deserialization.

## June 2, 2022

### iOS AEPEdge 1.4.1

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Internal updates to use URLComponents builder for Edge endpoints.

### Android Edge 1.3.2

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Updates internal network stack to use Mobile Core's ServiceProvider Network Service, reducing overall extension code size.

## May 27, 2022

### iOS AEPOptimize 1.0.0

The `Adobe Experience Platform Mobile SDK - Optimize` extension is now available for iOS!

This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning.

**Key Features**

With this release, the extension provides APIs that you can use to:

* Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning.
* Track user interactions with those offers.

## May 26, 2022

### iOS AEPTarget 3.1.3

* Fixed an issue where the Target display notification was not being sent to the server, upon invoking `displayedLocations` API, if a prior prefetch call did not return profile state token for the mbox.

## May 18, 2022

### iOS AEPAudience 3.0.4

* Fixed an issue where lifecycle data was included in signalWithData requests.

## May 12, 2022

### iOS AEPAnalytics 3.1.0

* Added support for using the Analytics Extension in [App Extensions](https://developer.apple.com/app-extensions/)

## May 9, 2022

### iOS AEPCore 3.6.0

* Added support for using the Core SDK in [App Extensions.](https://developer.apple.com/app-extensions/)
* Added a new API to the Extension protocol for getting the latest non-pending shared state.
* Added support for using Bundled Rules.
* Added support for cached images for Fullscreen Messages.
* Fixed a bug preventing Fullscreen Messages from being dismissed in certain conditions.

### iOS AEPAudience 3.0.3

* Fixed integration with Lifecycle extension to send lifecycle metrics when a new app session is started.

## April 12, 2022

### AEP React Native plugins

The following AEP SDK React Native plugins have been published:

* @adobe/react-native-aepcore@1.0.0
* @adobe/react-native-aepuserprofile@1.0.0
* @adobe/react-native-aepassurance@3.0.0
* @adobe/react-native-aepedge@1.0.0
* @adobe/react-native-aepedgeconsent@1.0.0
* @adobe/react-native-aepedgeidentity@1.0.0

For more details, see the documentation and release notes in the [aepsdk-react-native repository](https://github.com/adobe/aepsdk-react-native).

## April 8, 2022

### iOS AEPCore 3.5.0

* Adds two APIs to `Date+Format` class. Method `getISO8601UTCDateWithMilliseconds` formats a Date to string as with fractional seconds and UTC time zone, while `getISO8601FullDate` formats a Date to string with date without time using the local time zone.
* Lifecycle foreground and background events for Edge Network now format timestamps with fractional seconds and UTC time zone.
* Updates the timestamp format for rule token `~timestampp` with fractional seconds and UTC time zone. This rule token is used to set the mobile property data element "Adobe Experience Platform Timestamp".
* Improves Signal logging by treating all 2xx network responses as success.
* Fixes bug where dispatched events failed due to use of single quotes in name.
* Fixes format of push token string by uppercasing characters.

### iOS AEPEdge 1.4.0

* Updates timestamp in Experience Events to use fractional seconds.
* Deprecates APIs `XDMFormatters.dateToISO8601String` and `XDMFormatters.dateToFullDateString`. Use the `Date` extension methods `getISO8601UTCDateWithMilliseconds` and `getISO8601FullDate` instead, provided by the AEPServices module within the AEPCore extension.

### iOS AEPEdgeConsent 1.0.1

* Updates timestamp in Consent requests to use fractional seconds.

## April 1, 2022

### iOS AEPEdgeIdentity 1.0.1

* Synchronized updates and reads on the Identity for Edge Network shared state to avoid any race conditions.

### Adobe Experience Platform Edge Network tag extension v1.1.9

* UI updates for the Datastream configuration section to enable the sandbox aware datastreams support. If more than one sandbox is used, a sandbox picker is displayed to allow for datastreams selection across sandboxes.

* Auto-complete in the UI for default third party domain based on company name for Edge Network data collection. The domain configuration is now required, while existing configurations will continue to use the default edge.adobedc.net domain.

### Adobe Journey Optimizer tag extension v0.0.16

* UI updates to support the new datastream selections in the AEP Edge Network extension.

## March 31, 2022

### iOS AEPAnalytics 3.0.4

* Fixed `getTrackingIdentifier` and `getVisitorIdentifier` APIs to `return nil` instead of `AEPError.unexpected` error when AID/VID values are not found in persistence.

## February 22, 2022

### iOS Assurance 3.0.1

* Add support for transmitting large events.
* Assurance extension now prompts an error message when attempting to connect to a deleted session.
* Improved logging for troubleshooting.
* Fixed an issue to ensure that event collection stops on session disconnection.

## February 9, 2022

### iOS Campaign Standard 3.0.1

* Fixed an issue with the Campaign message tracking URL being incorrectly built.

## February 3, 2022

### iOS AEPServices 3.4.2

* Add `@objc` attribute to `messageSettings` in `FullscreenMessage`

## January 26, 2022

### iOS AEPCore 3.4.1

* Fixed AEPRulesEngine dependency in Package.swift

## January 21, 2022

### iOS AEPEdge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

### Android AEPEdge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

## January 20, 2022

### iOS AEPCore 3.4.0

* Added support for a new API `clearUpdatedConfiguration()`, see Configuration API reference for more details.
* Added support for optionally capturing event history on the device.
* Added support for triggering rules engine conditions based on event history.

### iOS AEPServices 3.4.0

* Expanded configuration options for Fullscreen Messages.
* Added support for delegating in-app message delivery.
