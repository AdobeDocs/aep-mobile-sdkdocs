---
title: Release notes
description: Release notes and changelogs for the Adobe Experience Platform Mobile SDKs.
Keywords:
- Release notes
---

# Release notes

## May 19, 2025

### React Native Places 7.0.1

* Updated `com.google.android.gms:play-services-location` from 16.0.0 to 21.2.0
* Added support for continuous native code generation in Expo

## May 13, 2025

### iOS Messaging 5.6.1

* Support for "fit to content" and "max width" in in-app messaging.

### Android BOM 3.12.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.11.0) | BOM (3.12.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:core** | **3.3.1** | **3.4.0**|
| **com.adobe.marketing.mobile:messaging** | **3.3.1** | **3.3.2**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:assurance | 3.0.6 | 3.0.6 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaign | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:edge | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:optimize | 3.5.0 | 3.5.0 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:target | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

### Android Messaging 3.3.2

* Added support for "fit to content" and "max width" in in-app messaging.
* Added gif support for push notifications on Android OS 14+ when using the Messaging extension to display push notifications.
* Fixed a logging error within the ContentCardUIProvider.

## May 12, 2025

### Android Core 3.4.0

* Added support of "Max width" and "Fit to content" for in-app messages via`InAppMessageSettings`.

### iOS Core 5.5.0

* Fixed issue where `MobileCore.initialize` registered multiple Analytics extensions.
* Removed call to `CTCarrier` API for iOS 16+ as Apple deprecated it without replacement. Calling `SystemInfoService.getMobileCarrierName` on iOS 16 and above will now always return nil.
* Added support for "Fit to content" in `FullscreenMessage`.
* Added support of "Max width" and "Fit to content" for in-app messages via `MessageSettings`.

## May 8, 2025

### iOS Optimize 5.5.0

* Added generateDisplayInteractionXdm public API for a list of offers.
* Added and unwrapped weak self in Optimize's onRegistered to avoid crash.

## May 7, 2025

### Android BOM 3.11.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.10.0) | BOM (3.11.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.4.0** | **3.5.0**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:assurance | 3.0.6 | 3.0.6 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaign | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:core | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:edge | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:messaging | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:target | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

### Android Optimize 3.5.0

* New API Available: Introduced `[List<Offer>. generateDisplayInteractionXdm()]` to generate the XDM with batched list of display proposition that can be used in events tracking using Edge extension API (i.e, `sendEvent()`).

## May 6, 2025

### React Native EdgeBridge 7.0.1

* Added support for tvOS.

## April 28, 2025

### Android BOM 3.10.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.9.2) | BOM (3.10.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.3.1** | **3.4.0**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:assurance | 3.0.6 | 3.0.6 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaign | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:core | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:edge | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:messaging | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:target | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

### Android Optimize 3.4.0

* Enhanced error handling: Added support for managing invalid requests gracefully.
* New API Available: Introduced `[List<Offer>.displayed()]` to track batched display proposition events for multiple offers displayed simultaneously on a screen.

### iOS Optimize 5.4.0

* Added processing of listeners asynchronously inside serial queue to solve race condition issue.
* Added a new API to support display tracking of multiple offers.

## March 28, 2025

### React Native Core 7.0.0

* Added `MobileCore.initializeWithAppId` and `MobileCore.initialize` APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Assurance 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native EdgeBridge 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native EdgeConsent 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Campaign Classic 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Added support for the React Native New Architecture via interop layer

### React Native EdgeIdentity 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Target 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native UserProfile 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Messaging 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Places 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Optimize 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

### React Native Edge 7.0.0

* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 13, 2025

### Android BOM 3.9.2

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.9.1) | BOM (3.9.2) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.3.0** | **3.3.1**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:assurance | 3.0.6 | 3.0.6 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaign | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:core | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:edge | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:messaging | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:target | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

## March 11, 2025

### Android Optimize 3.3.1

* Added capability to configure timeout value for the Update Proposition API via Adobe Journey Optimizer - Decisioning card in Mobile Tags property.

## March 7, 2025

### iOS EdgeBridge 5.1.0

* Added tvOS support

## March 6, 2025

### iOS Optimize 5.3.0

* Added capability to configure timeout value for the Update Proposition API via Adobe Journey Optimizer - Decisioning card in Mobile Tags property.

### Adobe Journey Optimizer - Decisioning extension 1.1.0

Added configuration capability to the Adobe Journey Optimizer - Decisioning extension in the Tags UI for mobile Tag Properties.

Users can now configure:

* Request timeout - Set the amount of time (in seconds) to wait for a response from the decisioning services before timing out.

## March 4, 2025

### Flutter Core 5.0.0

* Add `MobileCore.initializeWithAppId` and `MobileCore.initialize` APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Add Error handling for NSError.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter EdgeConsent 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter EdgeIdentity 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter EdgeBridge 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter Edge 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter Messaging 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter Assurance 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

### Flutter UserProfile 5.0.0

* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 25, 2025

### Android BOM 3.9.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.9.0) | BOM (3.9.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:assurance** | **3.0.5** | **3.0.6**|
| **com.adobe.marketing.mobile:campaign** | **3.0.2** | **3.0.3**|
| **com.adobe.marketing.mobile:core** | **3.3.0** | **3.3.1**|
| **com.adobe.marketing.mobile:edge** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:target** | **3.0.1** | **3.0.2**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:messaging | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:optimize | 3.3.0 | 3.3.0 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

### Android Edge 3.0.2

* Added support for recoverable error codes from Edge Network.

### Android Core 3.3.1

* Allow disabling callback timeout when using `MobileCore.dispatch` API.
* Restrict override `FloatingButton` presentable with app theme.

### Android Target 3.0.2

* Added checks to prevent crashes caused by unhandled exceptions in user callbacks.

### Android Campaign Standard 3.0.3

* Added null checks to prevent crashes on extension registration.

### Android Assurance 3.0.6

* Fixed an issue that prevented a connection error message from being displayed.

## February 24, 2025

### iOS Notification Content Extension 5.0.2

* Added support for custom URL handling for click interactions in notification templates.

## February 17, 2025

### React Native Optimize 6.1.0

* **[Breaking Change]** Updated Offer Score data type of  from `Integer` to `Double` .
* To prevent build issues in **6.0.x**, upgrade `@adobe/react-native-aepoptimize` to **6.1.0 or later**.

### Android BOM 3.9.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.8.0) | BOM (3.9.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.2.4** | **3.3.0**|
| com.adobe.marketing.mobile:analytics | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:assurance | 3.0.5 | 3.0.5 |
| com.adobe.marketing.mobile:audience | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:campaign | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:campaignclassic | 3.1.3 | 3.1.3 |
| com.adobe.marketing.mobile:core | 3.3.0 | 3.3.0 |
| com.adobe.marketing.mobile:edge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgebridge | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeconsent | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgeidentity | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:edgemedia | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:identity | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:lifecycle | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:media | 3.1.2 | 3.1.2 |
| com.adobe.marketing.mobile:messaging | 3.3.1 | 3.3.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.3 | 3.0.3 |
| com.adobe.marketing.mobile:places | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:signal | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:target | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:userprofile | 3.0.1 | 3.0.1 |

</AccordionItem>

</Accordion>

### Android Optimize 3.3.0

* **[Breaking Change]** Updated Offer Score data type of from `Integer` to `Double`.
* Optimize SDK only listens to preview events if it contains `debug` object with `eventType` as `com.adobe.eventType.edge` and `eventSource` as `personalization:decisions`.

## February 14, 2025

### iOS Core 5.4.0

* Added new [`MobileCore.initialize`](../base/mobile-core/api-reference.md#initialize) APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Fixed issue where in-app message scrolling was disabled when gestures were nil or empty.
* Allow disabling callback timeout when using `MobileCore.dispatch` API.

## February 11, 2025

### iOS Optimize 5.2.1

* Fixed a bug where JSON object array without key was not getting parsed in Offer class.
* Added support of checking debug object's eventType and eventSource while processing debug events.

## February 10, 2025

### Android BOM 3.8.0

* Starting with this BOM version, AEP SDKs offer simplified initialization. For more information, refer to the [`MobileCore.initialize`](../base/mobile-core/api-reference.md#initialize) API.
* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.7.0) | BOM (3.8.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:analytics** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:assurance** | **3.0.4** | **3.0.5**|
| **com.adobe.marketing.mobile:audience** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:campaign** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:campaignclassic** | **3.1.2** | **3.1.3**|
| **com.adobe.marketing.mobile:core** | **3.2.0** | **3.3.0**|
| **com.adobe.marketing.mobile:edge** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:edgebridge** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:edgeconsent** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:edgeidentity** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:edgemedia** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:identity** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:lifecycle** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:media** | **3.1.1** | **3.1.2**|
| **com.adobe.marketing.mobile:messaging** | **3.3.0** | **3.3.1**|
| **com.adobe.marketing.mobile:notificationbuilder** | **3.0.2** | **3.0.3**|
| **com.adobe.marketing.mobile:optimize** | **3.2.3** | **3.2.4**|
| **com.adobe.marketing.mobile:places** | **3.0.1** | **3.0.2**|
| **com.adobe.marketing.mobile:signal** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:target** | **3.0.0** | **3.0.1**|
| **com.adobe.marketing.mobile:userprofile** | **3.0.0** | **3.0.1**|

</AccordionItem>

</Accordion>

### Android Optimize 3.2.4

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Campaign Classic 3.1.3

* Added support for the new `MobileCore.initialize` API introduced in Core.
* Updated the Notification Builder dependency to version 3.0.3 to resolve an issue that occurred when no image was provided in an input box push template notification.

### Android EdgeMedia 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android EdgeConsent 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Messaging 3.3.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Target 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android UserProfile 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Analytics 3.0.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Campaign Standard 3.0.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Media 3.1.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Edge 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Places 3.0.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Audience 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android EdgeBridge 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Assurance 3.0.5

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android EdgeIdentity 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Notification Builder 3.0.3

* Fixed a display issue that occurs when no image is provided in an input box push template notification.

### Android Signal 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Lifecycle 3.0.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Identity 3.0.2

* Added support for the new MobileCore.initialize API introduced in Core.

### Android Core 3.3.0

* Added new [`MobileCore.initialize`](../base/mobile-core/api-reference.md#initialize) APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Fixed an issue where certain HTTP request timeouts were incorrectly configured.

## February 6, 2025

### Android BOM 3.7.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.6.1) | BOM (3.7.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:messaging** | **3.2.1** | **3.3.0**|
| **com.adobe.marketing.mobile:optimize** | **3.2.2** | **3.2.3**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.4 | 3.0.4 |
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
| com.adobe.marketing.mobile:media | 3.1.1 | 3.1.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Messaging 3.3.0

* Introduced support for out-of-the-box content card UI rendering using the new `ContentCardUIProvider.getContentCardUI()` API to create and display the views for templated content cards.
* Added support to display an in-app message when the app is opened by a push notification interaction. To support this workflow, new `updatePropositionsForSurfaces(List<Surface> surfaces, AdobeCallback<Boolean> callback)`API has been added to fetch propositions for the provided surfaces with an optional completion handler that provides a boolean status.

### Android Optimize 3.2.3

* Added support for the Array type in the JSON structure of Offer Content.

## January 31, 2025

### Android BOM 3.6.1

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.6.0) | BOM (3.6.1) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:media** | **3.1.0** | **3.1.1**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.4 | 3.0.4 |
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
| com.adobe.marketing.mobile:messaging | 3.2.1 | 3.2.1 |
| com.adobe.marketing.mobile:notificationbuilder | 3.0.2 | 3.0.2 |
| com.adobe.marketing.mobile:optimize | 3.2.2 | 3.2.2 |
| com.adobe.marketing.mobile:places | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:signal | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:target | 3.0.0 | 3.0.0 |
| com.adobe.marketing.mobile:userprofile | 3.0.0 | 3.0.0 |

</AccordionItem>

</Accordion>

### Android Media 3.1.1

* Fixed database access-related resource leaks.

## January 16, 2025

### iOS Messaging 5.6.0

* Fixed a bug that caused dark/light image to be switched when the app enters background.
* The schemaData property, representing the associated `ContentCardSchemaData` of `ContentCardUI`, is now publicly accessible.
* Added API `updatePropositionsForSurfaces(_:completion:)` to fetch propositions for the provided surfaces with an optional completion handler that provides a boolean status.

### iOS Core 5.3.2

* Fixed an issue where in-app message was not reframed in split screen mode.

## January 14, 2025

### React Native new architecture Support

* **Updated Places Module Name**  
  Added compatibility for the new architecture in the Places React Native module.  

* **New sample app with new architecture enabled**  
  Enabled the new architecture in the Sample App.  
  **Link:** [AEPSampleAppNewArchEnabled](https://github.com/adobe/aepsdk-react-native/tree/main/apps/AEPSampleAppNewArchEnabled)  

* **New architecture Compatibility Testing**  
  Tested new architecture enabled sample app with Adobe Experience Platform Mobile React Native modules via interop layer (new architecture not supported for Adobe Campaign Classic).

### React Native Places 6.0.3

* Added new architecture compatibility to the Places React Native module.

## January 7, 2025

### Android BOM 3.6.0

* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.

<Accordion>

<AccordionItem header='Expand'>

| Extension artifact | BOM (3.5.1) | BOM (3.6.0) |
|-----|-----|-----|
| **com.adobe.marketing.mobile:optimize** | **3.1.0** | **3.2.2**|
| com.adobe.marketing.mobile:analytics | 3.0.1 | 3.0.1 |
| com.adobe.marketing.mobile:assurance | 3.0.4 | 3.0.4 |
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

## December 19, 2024

### React Native Messaging 6.0.5

* Fixed an issue with in-app messages not being displayed when a MessagingDelegate is set.

## December 6, 2024

### Android Optimize 3.2.2

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* Updated getPropositions API to return cached propositions immediately if there are no pending updatePropositions calls for the requested list of decision scopes.
* Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.

### iOS Optimize 5.2.0

* Added timeout (in seconds) parameter to updatePropositions and getPropositions APIs to enable timeout configuration in both the apis ensuring that the operation either completes within the given time frame or returns an error indicating a timeout.
* Added support for debug events and enabled getPropositions and onPropositionsUpdate to receive Simulated events from Assurance.

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
* The SDK is now compatible with Kotlin 1.8 and higher.
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
* The SDK is now compatible with Kotlin 1.8 and higher.
* Removed the out-of-the-box push template handling code. This functionality will be available in a future Core 3.x release.

### Android Campaign Standard 3.0.0

Major version update for [Campaign Standard](../../solution/adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.8 and higher.
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
* The SDK is now compatible with Kotlin 1.8 and higher.
* Migrated UI service to use Jetpack Compose.
* Removed deprecated `MobileCore.registerExtension(...)` and `MobileCore.start()` APIs. Use the `MobileCore.registerExtensions(...)` API for registering extensions and initializing the SDK instead.
* Removed `MobileCore.setMessagingDelegate`, `MobileCore.getMessagingDelegate` APIs which were used to control the display of in-app messages. Migrate to `com.adobe.marketing.mobile.services.ui.PresentationDelegate` and use `ServiceProvider.getUIService().setPresentationDelegate` API instead.
* Removed other APIs related to extension development which were deprecated in 2.0.0.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Signal 3.0.0

Major version update for [Signal](../base/mobile-core/signal/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.8 and higher.
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
* The SDK is now compatible with Kotlin 1.8 and higher.
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
