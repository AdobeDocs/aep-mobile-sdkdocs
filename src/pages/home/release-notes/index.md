---
title: Release notes
description: Release notes and changelogs for the Adobe Experience Platform Mobile SDKs.
Keywords:
- Release notes
---

# Release notes

## December 6, 2024

### Android Optimize 3.2.2

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis. Ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* Updated getPropositions API to return cached propositions immediately if there are no pending updatePropositions calls for the requested list of decision scopes.
* getPropositions and onPropositionsUpdate enabled to receive Simulated events from Assurance.

### iOS Optimize 5.2.0

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis. Ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* getPropositions and onPropositionsUpdate enabled to receive Simulated events from Assurance.

## November 21, 2024

### iOS Notification Content Extension ui-5.1.2

* Fixed a bug that caused dark/light image to be switched when the app enters background.

## November 5, 2024

### iOS Notification Content Extension ui-5.1.1

* Implemented image caching for Content Card images, resolving the issue where images fail to load when reappearing after the app is relaunched from the background.

## November 1, 2024

### iOS Messaging 5.5.0

* Introduced the `getContentCardUI` API to create and display the UI for templated content cards, supported on iOS 15 and above.
* Added new property "priority" to "Proposition" class which represents the priority entered in the AJO UI for the corresponding campaign.

## October 29, 2024

### Android BOM 3.5.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.5.0) | BOM (3.5.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **3.0.3** | **3.0.4**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:core | 3.2.0 | 3.2.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.2.1 | 3.2.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:optimize | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android BOM 2.9.10

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.9) | BOM (2.9.10) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **2.2.1** | **2.2.2**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.1.8 | 2.1.8 |
| com.adobe.marketing.mobile:core | 2.6.4 | 2.6.4 |
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

### Android Assurance 3.0.4

* Fixed an issue causing incorrect application details to be sent in the `client` event.

### Android Assurance 2.2.2

* Fixed an issue causing incorrect application details to be sent in the `client` event.

## October 16, 2024

### iOS Edge 5.0.3

* Adds 507 as recoverable error code and applies valid retry-after timeout values on next retry if provided on the response, otherwise applies default timeout.

### iOS Core 5.3.1

* Updated `responseHttpHeader(forKey:)` in `HttpConnection` struct to ensure case-insensitive header field lookups.

## October 8, 2024

### Android BOM 3.5.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.4.0) | BOM (3.5.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.0.2** | **3.1.0**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:core | 3.2.0 | 3.2.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.2.1 | 3.2.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Optimize 3.1.0

* Added a new `updatePropositions` API to support completion callback with retrieved propositions and errors (if any).

## October 3, 2024

### Android BOM 3.4.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.3.2) | BOM (3.4.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **3.1.2** | **3.2.0**|
| **com.adobe.marketing.mobile:messaging** | **3.2.0** | **3.2.1**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:optimize | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### iOS Optimize 5.1.0

* Added a new `updatePropositions` API to support completion callback with retrieved propositions and errors (if any).
* Updated `getPropositions` API to return cached propositions immediately if there are no pending `updatePropositions` calls for the requested list of decision scopes.
* Changed `Offer.score` data type from Integer to Double to fix a bug where offers having decimal score were being dropped.

## October 2, 2024

### Android Messaging 3.2.1

* SDK updated to support conflict resolution for in-app messaging:
  * In-app messages are loaded in priority order
  * When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event

## October 1, 2024

### Android Core 3.2.0

* Added new constants to `AEPError`.
* Added the `SuppressedByAppDeveloper` constant to indicate that the in-app message was not displayed because it was rejected by the app developer via the `PresentationDelegate`.

## September 30, 2024

### iOS Messaging 5.4.0

* SDK updated to support conflict resolution for in-app messaging:
  * In-app messages are loaded in priority order
  * When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event

## September 27, 2024

### iOS Core 5.3.0

* Added an `onError` method to the `FullscreenMessageDelegate` to notify of the reason when an in-app message fails to display.

## September 13, 2024

### Roku SDK 1.3.0

#### Consent Support

* The SDK now allows [configuring default consent](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/api-reference.md#configure-default-consent).
* Added a [setConsent](https://github.com/adobe/aepsdk-roku/blob/main/Documentation/api-reference.md#setconsent) API for collecting user consent preferences.

#### Other Changes

* Adds support for persisting the `locationHint` and other states returned by the Edge Network, using them to enhance the user experience by ensuring more consistent routing and improved session continuity.

## September 12, 2024

### Android BOM 3.3.2

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.3.1) | BOM (3.3.2) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **3.1.1** | **3.1.2**|
| **com.adobe.marketing.mobile:notificationbuilder** | **3.0.1** | **3.0.2**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:core | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.2.0 | 3.2.0 |
| com.adobe.marketing.mobile:optimize | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

## September 10, 2024

### Android Campaign Classic 3.1.2

* Update notification builder dependency to 3.0.2 to resolve an issue with push template dismiss actions.

### Android Notification Builder 3.0.2

* Add `aep` prefix to notification builder string resources to prevent conflicts with resources defined by the app.
*  Fix intent actions to allow tracker activities to correctly handle received intents.

## September 4, 2024

### AEPSwiftUI 5.1.0-beta

Initial release of `AEPSwiftUI` framework for Adobe Experience Platform Mobile SDKs on iOS. The `AEPSwiftUI` framework provides out-of-the-box UI components for use with Adobe Journey Optimizer content cards.

The first release includes a single template - [SmallImageTemplate](https://github.com/adobe/aepsdk-ui-ios/tree/v5.1.0-beta/Frameworks/AEPSwiftUI/Documentation)

## September 3, 2024

### iOS Notification Content Extension 5.0.1

* Removed left and right scroll buttons on auto carousel notifications.

### Android BOM 3.3.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.3.0) | BOM (3.3.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **3.1.1** | **3.1.2**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.1 | 3.1.1 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.2.0 | 3.2.0 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:optimize | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Core 3.1.2

* Added screen reader support for in-app messages.

### iOS Messaging 5.3.0

* Two updates made to support out-of-the-box Content Card templates, coming soon via the new `AEPSwiftUI` library:
  * Writes a disqualify event to event history when a content card is dismissed
  * Removes dismissed content card from in-memory container holding qualified content cards

## August 20, 2024

### Android BOM 3.3.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.2.2) | BOM (3.3.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **3.0.1** | **3.0.3**|
| **com.adobe.marketing.mobile:campaign** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:campaignclassic** | **3.1.0** | **3.1.1**|
| **com.adobe.marketing.mobile:messaging** | **3.1.0** | **3.2.0**|
| **com.adobe.marketing.mobile:notificationbuilder** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:optimize** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:places** | **3.0.0** | **3.0.1**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:core | 3.1.1 | 3.1.1 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Campaign Classic 3.1.1

* Removed unused `app_name` string resource to prevent conflicts with resources defined by the app.
* Add support for 64-bit broadlog id.
* Update notification builder dependency to 3.0.1 to resolve issues with out-of-the-box push templates.

### Android Campaign Standard 3.0.1

* Removed unused `app_name` string resource to prevent conflicts with resources defined by the app.
* Fixed an Android Campaign Standard 2.x datastore migration issue.

### Android Optimize 3.0.2

* Fixed thread safety for map updates that happen when `updatePropositions` API was called repeatedly.
* Fixed issue where `Offer` could not be created for default content item when `getPropostions` API was called.

### Android Notification Builder 3.0.1

* Fixed timer notification background color.
* Updated optional fields within the multi-icon push template.
* Fixed issues seen with lower level Android API. See https://github.com/adobe/aepsdk-ui-android/pull/64 for details.

## August 19, 2024

### Android Places 3.0.1

* Removed unused `app_name` string resource to prevent conflicts with resources defined by the app.

### Android Messaging 3.2.0

* Deprecated `ContentCard` class and its related APIs.

### iOS Messaging 5.2.0

* Updated some logging around push message tracking to be more useful.
* Deprecated `ContentCard` class and its related APIs.

## August 16, 2024

### Android Assurance 3.0.3

* Removed `app_name` string resource to prevent conflicts with resources defined by the app.

## August 12, 2024

### Android Assurance 3.0.2

* Added localization support.

### iOS Assurance 5.0.1

* Add localization support.

## July 19, 2024

### Android BOM 3.2.2

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.2.1) | BOM (3.2.2) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **3.1.0** | **3.1.1**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Core 3.1.1

* Fixed an issue causing in-app messages to cast a shadow.
* Fixed an issue causing in-app messages to be slightly transparent by default.
* Improved in-app message handling in immersive mode.

## July 9, 2024

### iOS Messaging 5.1.1

* Fixed a regression introduced in 5.0.0 that was preventing cached in-app messages from displaying on launch.

## June 28, 2024

### Android BOM 3.2.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.2.0) | BOM (3.2.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:analytics** | **3.0.0** | **3.0.1**|
| com.adobe.marketing.mobile:assurance | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:core | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

## June 27, 2024

### iOS Analytics 5.0.2

* Fixed a bug where Places region ID and name were not included in the Analytics request if the Places data contained non-string values.

### Android Analytics 3.0.1

* Fixed a bug where Places region ID and name were not included in the Analytics request if the Places data contained non-string values.

## June 26, 2024

### Android BOM 3.2.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.1.0) | BOM (3.2.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:messaging** | **3.0.0** | **3.1.0**|
| com.adobe.marketing.mobile:analytics | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:assurance | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:core | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Messaging 3.1.0

* Added support for [Content Cards](https://github.com/adobe/aepsdk-messaging-android/blob/main/Documentation/sources/propositions/content-card.md).
* Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced.
* Added listener for debug event to support future Assurance workflows.

### iOS Messaging 5.1.0

* Added support for [Content Cards](https://github.com/adobe/aepsdk-messaging-ios/blob/main/Documentation/sources/propositions/developer-documentation/classes/content-card.md).
* Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced.
* Added listener for debug event to support future Assurance workflows.

## June 24, 2024

### Android Core 2.6.4

* Fixed strict mode violations that happened during SDK initialization.
* Added checks to prevent SDK initialization when the device is in direct boot mode.

### Android BOM 2.9.9

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.8) | BOM (2.9.9) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.6** | **2.1.8**|
| **com.adobe.marketing.mobile:core** | **2.6.3** | **2.6.4**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
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

## June 21, 2024

### Android BOM 3.1.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.0.3) | BOM (3.1.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:notificationbuilder** |  | **3.0.0** |
| **com.adobe.marketing.mobile:campaignclassic** | **3.0.0** | **3.1.0**|
| **com.adobe.marketing.mobile:core** | **3.0.2** | **3.1.0**|
| com.adobe.marketing.mobile:analytics | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:assurance | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Campaign Classic 3.1.0

Add support for out-of-the-box push notifications:

* Basic
* Carousel
* Product Catalog
* Product Rating
* Input Box
* Multi Icon
* Zero Bezel
* Timer

### Android Notification Builder 3.0.0

This is the initial release of AEP Notification Builder. Added support for out-of-the-box push notifications:

* Basic
* Carousel
* Product Catalog
* Product Rating
* Input Box
* Multi Icon
* Zero Bezel
* Timer

### iOS Core 5.2.0

* Added a new EventSource constant (`com.adobe.eventSource.debug`) and utility methods.
* Added support for in-app message HTML content to control its background transparency.
* Fixed data races in EventHub and Services and implemented additional stability fixes.

## June 20, 2024

### Android Core 3.1.0

* Added support for in-app message HTML content to control its background transparency.
* Enhanced Presentable re-attachment workflow for new Activity launch scenarios.
* Added a new EventSource constant (`com.adobe.eventSource.debug`) and utility methods.
* Added checks to prevent SDK initialization when device is in direct boot mode.

## June 6, 2024

### React Native EdgeConsent 6.0.2

* Updated typescript files to support strict null checks.

### React Native UserProfile 6.0.2

* Updated typescript files to support strict null checks.

### React Native Target 6.0.2

* Updated typescript files to support strict null checks.

### React Native Places 6.0.2

* Updated typescript files to support strict null checks.

### React Native Optimize 6.0.2

* Updated typescript files to support strict null checks.

### React Native Messaging 6.0.2

* Updated typescript files to support strict null checks.

### React Native EdgeIdentity 6.0.2

* Updated typescript files to support strict null checks.

### React Native EdgeBridge 6.0.2

* Updated typescript files to support strict null checks.

### React Native Edge 6.0.2

* Updated typescript files to support strict null checks.

### React Native Campaign Classic 6.0.2

* Updated typescript files to support strict null checks.

### React Native Assurance 6.0.2

* Updated typescript files to support strict null checks.

### React Native Core 6.0.2

* Updated typescript files to support strict null checks.

## June 4, 2024

### Android BOM 3.0.3

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.0.2) | BOM (3.0.3) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:core** | **3.0.1** | **3.0.2**|
| com.adobe.marketing.mobile:analytics | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:lifecycle | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Core 3.0.2

* Fixed strict mode violations that happened during SDK initialization.

### Android Assurance 3.0.1

* Fixed an issue where the Assurance floating button was not immediately shown in a reconnection scenario.
* Fixed an issue where the QuickConnect device registration status check job was not terminated when the connection attempt is cancelled.
* Disabled content and file access from `WebView`.

## May 31, 2024

### Android Campaign Classic 2.1.8

* Fix clipped carousel captions which was occurring on smaller devices.

### iOS Media 5.0.1

* Fixed an issue in Media hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.

### iOS Audience 5.0.1

* Fixed an issue in Audience hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.

## May 28, 2024

### iOS Analytics 5.0.1

* Fixed an issue in Analytics hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.

### iOS Edge 5.0.2

* Fixed an issue in Edge hit processor and now it retries hits on recoverable URLErrors shared by Mobile Core.

## May 23, 2024

### Android BOM 3.0.2

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.0.1) | BOM (3.0.2) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:identity** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:lifecycle** | **3.0.0** | **3.0.1**|
| com.adobe.marketing.mobile:analytics | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:assurance | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:optimize | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Lifecycle 3.0.1

* Lifecycle extension now computes the `xdm:isUpgrade` metric in the `application.launch` event when either versionName or versionCode changes.

### Android Identity 3.0.1

* Fixed an edge case where `a.push.optin=false` event may be sent to Analytics even when `MobileCore.setPushIdentifier()` API is not used.

### Android Core 3.0.1

* Fixed an issue with scrollability in in-app messages with overflowing content.
* Fixed an issue where the PresentationDelegate was not notified of all URLs opened by an in-app message.
* Fixed an issue where UI components were not adapting to orientation changes when the activity hosting the composable restricts configuration change.
* Enhanced error handling in the collectLaunchInfo API to catch exceptions when retrieving bundled data from an Activity.
* Simplified coroutine scope management in UI services.

## May 22, 2024

### Android Campaign Classic 2.1.7

* Add support for dark mode with out of the box push template notifications. Dark mode is supported on API29+ only and any custom color modifications made to the push payload will override the dark/light mode colors.
* Removed the SCHEDULE_EXACT_ALARM permission from the Campaign Classic extension. This permission must be added to the app manifest if exact scheduling is needed for remind later notifications. If an API less than S / 31 is in use, or the exact alarm permission wasn't granted to the app, then an inexact alarm is used instead. Inexact scheduling will display the scheduled notification within a 1 hour window starting with the given timestamp.

### iOS Core 5.1.0

* Added a new constant and a utility method to AEPServices to detect if `URLError` is recoverable.
* Lifecycle extension now computes the `xdm:isUpgrade` metric in the `application.launch` event when either CFBundleShortVersionString or CFBundleVersion changes.
* Fixed an issue in the Signal and Identity extensions that caused the hit processor to drop queued hits when the device's network was offline.
* Fixed an edge case where `a.push.optin=false` event may be sent to Analytics even when `MobileCore.setPushIdentifier()` API is not used.
* Fixed data races in ExtensionContainer, ApplicationSystemInfoService, DiskCacheService, and FileSystemNamedCollection.

## May 21, 2024

### Android BOM 3.0.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.0.0) | BOM (3.0.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.0.0** | **3.0.1**|
| com.adobe.marketing.mobile:analytics | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:assurance | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:audience | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaign | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:campaignclassic | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:core | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgebridge | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:edgemedia | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:identity | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:lifecycle | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:media | 3.1.0 | 3.1.0 |
| com.adobe.marketing.mobile:messaging | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:places | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### iOS Optimize 5.0.1

* Fixed a crash that happens when `updateProposition` API was called repeatedly.

### Android Optimize 3.0.1

* Fixed a bug where Optimize SDK was considering Target mbox decision scope strings as invalid and not including them in personalization requests.

## May 20, 2024

### iOS Core 4.2.4

* Fixed a race condition when accessing sharedStateName inside ExtensionContainer.

## May 18, 2024

### iOS Optimize 4.0.4

* Fixed a crash that happens when `updateProposition` API was called repeatedly.

## May 13, 2024

### Flutter Edge 4.1.0

* Added support to customize datastream configurations on a per-event basis using the sendEvent API.
* Update environment dependencies in pubspec.

### Flutter UserProfile 4.0.2

* Update environment dependencies in pubspec.

### Flutter Messaging 4.0.2

* Update environment dependencies in pubspec.

### Flutter EdgeIdentity 4.0.2

* Update environment dependencies in pubspec.

### Flutter EdgeConsent 4.0.2

* Update environment dependencies in pubspec.

### Flutter EdgeBridge 4.0.2

* Update environment dependencies in pubspec.

### Flutter Assurance 4.0.2

* Update environment dependencies in pubspec.

### Flutter Core 4.0.2

* Update environment dependencies in pubspec.

### Android BOM 2.9.8

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.7) | BOM (2.9.8) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **2.6.2** | **2.6.3**|
| com.adobe.marketing.mobile:analytics | 2.0.3 | 2.0.3 |
| com.adobe.marketing.mobile:assurance | 2.2.1 | 2.2.1 |
| com.adobe.marketing.mobile:audience | 2.0.0 | 2.0.0 |
| com.adobe.marketing.mobile:campaign | 2.0.6 | 2.0.6 |
| com.adobe.marketing.mobile:campaignclassic | 2.1.6 | 2.1.6 |
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

### Android Core 2.6.3

* Enhanced error handling in the `collectLaunchInfo` API to catch exceptions when retrieving bundled data from an Activity.

## May 3, 2024

### Roku SDK 1.2.0

* Added support for Datastream overrides, allowing for more flexibility in configuring the Datastream.
* Added `getExperienceCloudId()` API, which enables developers to retrieve the Experience Cloud ID (ECID) from the SDK.

## May 2, 2024

### iOS Edge 5.0.1

* Edge requests now retrieve the configuration state at the time the requests are queued, instead of at the time the requests are sent.

## April 30, 2024

### Android BOM 2.9.7

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.6) | BOM (2.9.7) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.5** | **2.1.6**|
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

## April 29, 2024

### Android Campaign Classic 2.1.6

* Fixed a bug that caused Activity to restart when processing push notification click URIs.
* Fixed a bug to prevent images from being cropped in carousel push template.

### iOS Notification Content Extension 5.0.0

Initial release of `AEPNotificationContent` extension for Adobe Experience Platform Mobile SDKs on iOS.  The `AEPNotificationContent` extension is used in conjunction with `AEPCampaignClassic` to deliver templated push notifications.  

The first release includes the following templates:

* [Basic](../../resources/reference/push-notifications/templates/basic.md)
* [Carousel](../../resources/reference/push-notifications/templates/carousel.md)
* [Timer](../../resources/reference/push-notifications/templates/timer.md)

See the [documentation](../../resources/reference/push-notifications/index.md) for more information.

## April 24, 2024

### React Native Core 6.0.1

* Added namespace support to the Android module.

### React Native Optimize 6.0.1

* Added namespace support to the Android module.

### React Native Places 6.0.1

* Added namespace support to the Android module.

### React Native Target 6.0.1

* Added namespace support to the Android module.

### React Native UserProfile 6.0.1

* Added namespace support to the Android module.

### React Native Messaging 6.0.1

* Added namespace support to the Android module.

### React Native EdgeIdentity 6.0.1

* Added namespace support to the Android module.

### React Native Edge 6.0.1

* Added namespace support to the Android module.

### React Native EdgeBridge 6.0.1

* Added namespace support to the Android module.

### React Native EdgeConsent 6.0.1

* Added namespace support to the Android module.

### React Native Campaign Standard 6.0.1

* Added namespace support to the Android module.

### React Native Assurance 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter Core 4.0.1

* Added namespace support to the Android module.

### Flutter EdgeIdentity 4.0.1

* Added namespace support to the Android module.

### Flutter EdgeConsent 4.0.1

* Added namespace support to the Android module.

### Flutter EdgeBridge 4.0.1

* Added namespace support to the Android module.

### Flutter Edge 4.0.1

* Added namespace support to the Android module.

### Flutter Messaging 4.0.1

* Added namespace support to the Android module.

### Flutter UserProfile 4.0.1

* Added namespace support to the Android module.

### Flutter Assurance 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter Core 4.x and compatible plugins

A new major version of the [Adobe Experience Platform Core Flutter Plugin](https://github.com/adobe/aepsdk-react-native/tree/main/packages/core) has been released along with updates to other plugins. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs, which include the `privacy manifest`.
* Updated `MobileCore.dispatchEventWithResponseCallback` API with a timeout parameter.

Note that all these plugins must be updated together.

* flutter_aepcore:4.0.0
* flutter_aepuserprofile:4.0.0
* flutter_aepassurance:4.0.0
* flutter_aepedge:4.0.0
* flutter_aepedgeidentity:4.0.0
* flutter-aepedgeconsent:4.0.0
* flutter-aepedgebridge:4.0.0
* flutter-aepmessaging:4.0.0

To learn how Apple's privacy related announcements made in WWDC of 2023 affect the Mobile SDK, please read the guide on [iOS privacy manifest requirements](https://developer.adobe.com/client-sdks/resources/privacy-manifest).

### Flutter EdgeBridge 4.0.0

Major version update for [Edge Bridge](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedgebridge) for Adobe Experience Platform Flutter Plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Updated Edge Bridge data format to enhance support for migrating to sending data via Edge Network to Adobe Analytics and reduce the effort required for mapping data to XDM.
* If you are currently using Flutter Edge Bridge version 3.x  and you are mapping data to XDM in your datastream, adjustments will be necessary when adopting version 4.0.0.

### Flutter Messaging 4.0.0

Major version update for [Adobe Journey Optimizer](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepmessaging) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Adds `onContentLoaded` to `MessagingDelegate` (Android Only).
* Updated `urlLoaded` from `MessagingDelegate` to iOS Only.

### Flutter EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedgeidentity) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### Flutter EdgeConsent 4.0.0

Major version update for [Consent for Edge Network](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedgeconsent) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### Flutter Edge 4.0.0

Major version update for [Edge Network](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepedge) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### Flutter UserProfile 4.0.0

Major version update for [User Profile](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepuserprofile) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### Flutter Assurance 4.0.0

Major version update for [Assurance](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepassurance) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 12, 2024

### React Native Core 6.x and compatible libraries

A new major version of the [Adobe Experience Platform Core React Native library](https://github.com/adobe/aepsdk-react-native/tree/main/packages/core) has been released along with updates to other libraries. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs, which include the `privacy manifest`.
* Deprecated `MobileCore.log`API to align with the native platforms.
* Updated `MobileCore.dispatchEventWithResponseCallback` API with a timeout parameter.

Note that all these libraries must be updated together.

* @adobe/react-native-aepcore:6.0.0
* @adobe/react-native-aepuserprofile:6.0.0
* @adobe/react-native-aepedge:6.0.0
* @adobe/react-native-aeedgeidentity:6.0.0
* @adobe/react-native-aepedgeconsent:6.0.0
* @adobe/react-native-aepedgebridge:6.0.0
* @adobe/react-native-aepmessaging:6.0.0
* @adobe/react-native-aepassurance:6.0.0
* @adobe/react-native-aepoptimize:6.0.0
* @adobe/react-native-aepplaces:6.0.0
* @adobe/react-native-aeptarget:6.0.0
* @adobe/react-native-aepcampaignclassic:6.0.0

To learn how Apple's privacy related announcements made in WWDC of 2023 affect the Mobile SDK, please read the guide on [iOS privacy manifest requirements](https://developer.adobe.com/client-sdks/resources/privacy-manifest).

### React Native EdgeBridge 6.0.0

Major version update for [Edge Bridge](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edgebridge) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Updated Edge Bridge data format to enhance support for migrating to sending data via Edge Network to Adobe Analytics and reduce the effort required for mapping data to XDM.
* If you are currently using React Native Edge Bridge version 5.x  and you are mapping data to XDM in your datastream, adjustments will be necessary when adopting version 6.0.0.

### React Native Campaign Standard 6.0.0

Major version update for [Campaign Classic](https://github.com/adobe/aepsdk-react-native/tree/main/packages/campaignclassic) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Target 6.0.0

Major version update for [Target](https://github.com/adobe/aepsdk-react-native/tree/main/packages/target) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Places 6.0.0

Major version update for [Places](https://github.com/adobe/aepsdk-react-native/tree/main/packages/places) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Optimize 6.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](https://github.com/adobe/aepsdk-react-native/tree/main/packages/optimize) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Messaging 6.0.0

Major version update for [Adobe Journey Optimizer](https://github.com/adobe/aepsdk-react-native/tree/main/packages/messaging) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Adds `onContentLoaded` to `MessagingDelegate` (Android Only).
* Updated `urlLoaded` from `MessagingDelegate` to iOS Only.

### React Native EdgeConsent 6.0.0

Major version update for [Consent](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edgeconsent) for Edge Network for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native EdgeIdentity 6.0.0

Major version update for [Identity for Edge Network](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edgeidentity) Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Edge 6.0.0

Major version update for [Edge Network](https://github.com/adobe/aepsdk-react-native/tree/main/packages/edge) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native UserProfile 6.0.0

Major version update for [User Profile](https://github.com/adobe/aepsdk-react-native/tree/main/packages/userprofile) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

### React Native Assurance 6.0.0

Major version update for [Assurance](https://github.com/adobe/aepsdk-react-native/tree/main/packages/assurance) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.

## April 3, 2024

### Android Mobile Core 3.x and compatible extensions

New major version of the Mobile Core SDK for Android has been released along with updates to other extensions. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Added an enhancement to prevent network retries when the device's network is offline.
* Migrated UI service to use Jetpack Compose.

Note that all these extensions must be updated together.

* Android Mobile Core 3.0.0
* Android Signal 3.0.0
* Android Lifecycle 3.0.0
* Android Identity 3.0.0
* Android Profile 3.0.0
* Android Adobe Experience Platform Assurance 3.0.0
* Android Adobe Experience Platform Edge Network 3.0.0
* Android Adobe Journey Optimizer 3.0.0
* Android Adobe Journey Optimizer - Decisioning 3.0.0
* Android Consent for Edge Network 3.0.0
* Android Identity for Edge Network 3.0.0
* Android Media for Edge Network 3.0.0
* Android Edge Bridge 3.0.0
* Android Adobe Analytics 3.0.0
* Android Adobe Analytics - Media Analytics for Audio & Video 3.1.0
* Android Adobe Audience Manager 3.0.0
* Android Adobe Campaign Standard 3.0.0
* Android Adobe Campaign Classic 3.0.0
* Android Adobe Target 3.0.0
* Android Places Service 3.0.0

**Android BOM 3.0.0** has been released and is the recommended way to manage these dependencies.

For help on moving to these versions, and information on deprecated APIs please see:

* [Migration guide](../../resources/migration/android/migrate-to-3x.md)
* [Migration FAQ](../../resources/migration/android/migrate-to-3x.md#frequently-asked-questions)

### Android BOM 3.0.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (2.9.6) | BOM (3.0.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:analytics** | **2.0.3** | **3.0.0**|
| **com.adobe.marketing.mobile:assurance** | **2.2.1** | **3.0.0**|
| **com.adobe.marketing.mobile:audience** | **2.0.0** | **3.0.0**|
| **com.adobe.marketing.mobile:campaign** | **2.0.6** | **3.0.0**|
| **com.adobe.marketing.mobile:campaignclassic** | **2.1.5** | **3.0.0**|
| **com.adobe.marketing.mobile:core** | **2.6.2** | **3.0.0**|
| **com.adobe.marketing.mobile:edge** | **2.4.0** | **3.0.0**|
| **com.adobe.marketing.mobile:edgebridge** | **2.1.0** | **3.0.0**|
| **com.adobe.marketing.mobile:edgeconsent** | **2.0.0** | **3.0.0**|
| **com.adobe.marketing.mobile:edgeidentity** | **2.0.1** | **3.0.0**|
| **com.adobe.marketing.mobile:edgemedia** | **2.0.0** | **3.0.0**|
| **com.adobe.marketing.mobile:identity** | **2.0.3** | **3.0.0**|
| **com.adobe.marketing.mobile:lifecycle** | **2.0.4** | **3.0.0**|
| **com.adobe.marketing.mobile:media** | **3.0.0** | **3.1.0**|
| **com.adobe.marketing.mobile:messaging** | **2.2.1** | **3.0.0**|
| **com.adobe.marketing.mobile:optimize** | **2.0.2** | **3.0.0**|
| **com.adobe.marketing.mobile:places** | **2.1.0** | **3.0.0**|
| **com.adobe.marketing.mobile:signal** | **2.0.1** | **3.0.0**|
| **com.adobe.marketing.mobile:target** | **2.0.3** | **3.0.0**|
| **com.adobe.marketing.mobile:userprofile** | **2.0.1** | **3.0.0**|

</AccordionItem>

</Accordion>

### Android Messaging 3.0.0

Major version update for [Adobe Journey Optimizer](../../edge/adobe-journey-optimizer/index.md) for Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Migrated the in-app message feature to use Jetpack Compose based UI Services from MobileCore 3.0.0.
* Adds support for code-based experiences.
* Fixed a bug that caused Activity restarts when processing push notification click URIs.

### Android Optimize 3.0.0

Major version update for [Adobe Journey Optimizer - Decisioning Extension](../../edge/adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Renamed class `Proposition` to `OptimizeProposition`.

## April 2, 2024

### Android Edge 3.0.0

Major version update for [Edge Network](../../edge/edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Removed deprecated function `Formatters.dateToISO8601String()`, replaced by `TimeUtils.getISO8601UTCDateWithMilliseconds()` in MobileCore.
* Removed deprecated function `Formatters.dateToShortDateString()`, replaced by `TimeUtils.getISO8601FullDate()` in MobileCore.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android EdgeConsent 3.0.0

Major version update for [Consent for Edge Network](../../edge/consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android EdgeIdentity 3.0.0

Major version update for [Identity for Edge Network](../../edge/identity-for-edge-network/index.md) Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android EdgeMedia 3.0.0

Major version update for [Adobe Streaming Media for Edge Network](../../edge/media-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.

### Android EdgeBridge 3.0.0

Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Updated Edge Bridge data format to enhance support for migrating to sending data via Edge Network to Adobe Analytics and reduce the effort required for mapping data to XDM.
* If you are currently using Edge Bridge version 2.x and you are mapping data to XDM in your datastream, adjustments will be necessary when adopting version 3.0.0. For more details, please review the [migration](../../resources/migration/android/migrate-to-3x.md) documentation.

### Android Analytics 3.0.0

Major version update for [Adobe Analytics](../../solution/adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Media 3.1.0

Version update to 3.1.0 for [Adobe Analytics - Media Analytics workflows](../../solution/adobe-media-analytics/index.md) Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline and improved logging.

Please note that the version 3.0.0 of the Adobe Analytics - Media Analytics extension is compatible with Mobile Core 2.x. The increment to 3.1.0 was preferred for this release in order to synchronize all extensions to same major version.

### Android Audience 3.0.0

Major version update for [Adobe Audience Manager](../../solution/adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Campaign Classic 3.0.0

Major version update for [Campaign Classic](../../solution/adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed the out-of-the-box push template handling code. This functionality will be available in a future Core 3.x release.

### Android Campaign Standard 3.0.0

Major version update for [Campaign Standard](../../solution/adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Migrated Campaign SDK to use Jetpack Compose based UI Services from MobileCore 3.0.0
* Moved code to create and track local notifications from Mobile Core to Campaign.

### Android Target 3.0.0

Major version update for [Target](../../solution/adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Migrated Target Preview to use Jetpack Compose based UI Services from MobileCore 3.0.0

### Android Places 3.0.0

Major version update for [Places](../../solution/places/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

## April 1, 2024

### Android Core 3.0.0

Major version update of Adobe Experience Platform Core Android SDK is live!

Please note that the current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Migrated UI service to use Jetpack Compose.
* Removed deprecated `MobileCore.registerExtension(...)` and `MobileCore.start()` APIs. Use the `MobileCore.registerExtensions(...)` API for registering extensions and initializing the SDK instead.
* Removed `MobileCore.setMessagingDelegate`, `MobileCore.getMessagingDelegate` APIs which were used to control the display of in-app messages. Migrate to `com.adobe.marketing.mobile.services.ui.PresentationDelegate` and use `ServiceProvider.getUIService().setPresentationDelegate` API instead.
* Removed other APIs related to extension development which were deprecated in 2.0.0.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Signal 3.0.0

Major version update for [Signal](../base/mobile-core/signal/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Lifecycle 3.0.0

Major version update for [Lifecycle](../base/mobile-core/lifecycle/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android Identity 3.0.0

Major version update for [Identity](../base/mobile-core/identity/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android UserProfile 3.0.0

Major version update for [User Profile](../base/profile/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Removed deprecated `UserProfile.updateUserAttribute` API. Use the `UserProfile.updateUserAttributes` API instead.
* Removed deprecated `UserProfile.removeUserAttribute` API. Use the `UserProfile.removeUserAttributes` API instead.

### Android Assurance 3.0.0

Major version update for [Adobe Experience Platform Assurance](../base/assurance/index.md) on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.5 and higher.
* Removed deprecated `registerExtension` API. Use the `MobileCore.registerExtensions()` API for registering extensions and initializing the SDK instead.
* Migrated SDK UI components to Jetpack Compose.

## March 20, 2024

### iOS Mobile Core 5.x and compatible extensions

Starting May 7th, 2024, our iOS releases will include signed XCFrameworks. Additionally, we've updated all our 5.0.0 releases with signed XCFrameworks.

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
