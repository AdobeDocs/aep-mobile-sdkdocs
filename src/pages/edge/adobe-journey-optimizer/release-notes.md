---
title: Adobe Journey Optimizer release notes
description: The release notes for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Release notes
---

# Release notes

## December 19, 2024

### React Native Messaging 6.0.5

* Fixed an issue with in-app messages not being displayed when a MessagingDelegate is set.

## November 1, 2024

### iOS Messaging 5.5.0

* Introduced the `getContentCardUI` API to create and display the UI for templated content cards, supported on iOS 15 and above.
* Added new property "priority" to "Proposition" class which represents the priority entered in the AJO UI for the corresponding campaign.

## October 2, 2024

### Android Messaging 3.2.1

* SDK updated to support conflict resolution for in-app messaging:
  * In-app messages are loaded in priority order
  * When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event

## September 30, 2024

### iOS Messaging 5.4.0

* SDK updated to support conflict resolution for in-app messaging:
  * In-app messages are loaded in priority order
  * When a message display is suppressed due to a priority conflict or due to app developer decision it is recorded as an edge event

## September 3, 2024

### iOS Messaging 5.3.0

* Two updates made to support out-of-the-box Content Card templates, coming soon via the new `AEPSwiftUI` library:
  * Writes a disqualify event to event history when a content card is dismissed
  * Removes dismissed content card from in-memory container holding qualified content cards

## August 19, 2024

### Android Messaging 3.2.0

* Deprecated `ContentCard` class and its related APIs.

### iOS Messaging 5.2.0

* Updated some logging around push message tracking to be more useful.
* Deprecated `ContentCard` class and its related APIs.

## July 9, 2024

### iOS Messaging 5.1.1

* Fixed a regression introduced in 5.0.0 that was preventing cached in-app messages from displaying on launch.

## June 26, 2024

### Android Messaging 3.1.0

* Added support for [Content Cards](https://github.com/adobe/aepsdk-messaging-android/blob/main/Documentation/sources/propositions/content-card.md).
* Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced.
* Added listener for debug event to support future Assurance workflows.

### iOS Messaging 5.1.0

* Added support for [Content Cards](https://github.com/adobe/aepsdk-messaging-ios/blob/main/Documentation/sources/propositions/developer-documentation/classes/content-card.md).
* Fixed a bug causing modified code-based experiences to be appended to the proposition offering, rather than being replaced.
* Added listener for debug event to support future Assurance workflows.

## June 6, 2024

### React Native Messaging 6.0.2

* Updated typescript files to support strict null checks.

## May 13, 2024

### Flutter Messaging 4.0.2

* Update environment dependencies in pubspec.

## April 24, 2024

### React Native Messaging 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter Messaging 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter Messaging 4.0.0

Major version update for [Adobe Journey Optimizer](https://github.com/adobe/aepsdk_flutter/tree/main/plugins/flutter_aepmessaging) for Adobe Experience Platform Flutter plugin compatible with Flutter Core 4.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Adds `onContentLoaded` to `MessagingDelegate` (Android Only).
* Updated `urlLoaded` from `MessagingDelegate` to iOS Only.

## April 12, 2024

### React Native Messaging 6.0.0

Major version update for [Adobe Journey Optimizer](https://github.com/adobe/aepsdk-react-native/tree/main/packages/messaging) for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs.
* Adds `onContentLoaded` to `MessagingDelegate` (Android Only).
* Updated `urlLoaded` from `MessagingDelegate` to iOS Only.

## April 3, 2024

### Android Messaging 3.0.0

Major version update for [Adobe Journey Optimizer](./index.md) for Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Migrated the in-app message feature to use Jetpack Compose based UI Services from MobileCore 3.0.0.
* Adds support for code-based experiences.
* Fixed a bug that caused Activity restarts when processing push notification click URIs.

## March 20, 2024

Major version update for [Adobe Journey Optimizer](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 12.0.
* Include XCFrameworks built with Xcode 15.0.1 with the GitHub release.
* Added [`handleNotificationResponse(_:urlHandler:closure:)`](./api-reference/#handlenotificationresponse) API to provide more control over URL handling from `UNNotificationResponse` objects.
  * Removed deprecated public API `Messaging.handleNotificationResponse(_:applicationOpened:withCustomActionId:)`.
  * Removed public API `Messaging.handleNotificationResponse(_:closure:)` API.
* Added support for [Code Based Experiences](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/code-based-experience/get-started-code-based).
  * Added public API [`Messaging.updatePropositionsForSurfaces(_)`](./code-based/api-reference/#updatepropositionsforsurfaces).
  * Added public API [`Messaging.getPropositionsForSurfaces(_:completion:)`](./code-based/api-reference/#getpropositionsforsurfaces).

## March 5, 2024

### Android Messaging 2.2.1

* Handle a null network connection exception which was causing the Messaging extension to fail to be registered.

## February 28, 2024

### iOS Messaging 4.1.1

* Added max versions to Platform dependencies in podspec

## September 28, 2023

### iOS Messaging 4.1.0

* Added new notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse` and an optional callback the returns `PushTrackingStatus` enum.
  * This API will automatically handle the click behaviour (OPENAPP, WEBURL, DEEPLINK) defined for the notification.
* Deprecated the notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse`, `applicationOpened`, and `customActionId`.
* Fixed a bug on notification tracking API `handleNotificationResponse` to stop sending tracking hits to edge servers when the notification does not contain tracking information.

### Android Messaging 2.2.0

* Introduced `MessagingServices` class to automatically build, display, track, and handle defined click behaviour on notifications from Adobe Journey Optimizer.
* Fixed a bug on notification tracking API `handleNotificationResponse` to stop sending tracking hits to edge servers when the notification does not contain tracking information.

## June 2, 2023

### iOS Messaging 4.0.0

Major version update for [Adobe Journey Optimizer](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## May 23, 2023

### Android Messaging 2.1.4

* Handle in-app interaction tracking for back button presses.

## April 28, 2023

### Android Messaging 2.1.3

* Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.

### iOS Messaging 1.1.4

* Fixed a bug causing in-app message display Experience Events to be sent even when MessagingDelegate suppressed their display.

## April 24, 2023

### Android Messaging 2.1.2

* Fixed a bug causing a crash when incorrectly formatted URLs were used in custom HTML messages.

## March 20, 2023

### iOS Messaging 1.1.3

* Drop minimum supported version of iOS to 10.0 to align with minimum supported version in AEPCore.

## March 16, 2023

### Android Messaging 2.1.1

* Messaging extension now processes in-app message responses from multiple upstream services.

## March 15, 2023

### iOS Messaging 1.1.2

* Messaging extension now processes in-app message responses from multiple upstream services.

## March 6, 2023

### Android Messaging 2.1.0

* Fixed in-app message deeplink processing.
* Added a default implementation for `Message.getAutoTrack` to resolve an issue with the Message interface not matching the previous Message class.

## February 27, 2023

### iOS Messaging 1.1.1

* Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.

### Android Messaging 2.0.2

* Fixes an issue where loaded in-app message rules were not cleared when an empty in-app message payload is received from Adobe Journey Optimizer.
* Fixes an issue where only the first in-app message present in a payload was being loaded into the rules engine.

## February 9, 2023

### iOS Messaging 1.1.0

* Adds support for Adobe Journey Optimizer powered in-app messages.

### Android Messaging 2.0.1

* Updates the Core dependency to 2.0.1, which resolves inconsistencies between the Android and iOS MessagingDelegate classes.

## February 3, 2023

### Android Messaging 2.0.0

* Major version update for [Adobe Journey Optimizer](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-messaging-android).
* Adds support for Adobe Journey Optimizer powered in-app messages.

## June 17, 2021

### iOS Messaging 1.0.0

* The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on iOS! This extension enables push notifications and measurement for Adobe Journey Optimizer.

### Adobe Journey Optimizer Launch Extension

* You can now find the `Adobe Journey Optimizer` extension in the Launch extensions catalog for mobile properties.

## June 16, 2021

### Android Messaging 1.0.0

* The Adobe Experience Platform Messaging (AEPMessaging) mobile extension is now available on Android! This extension enables push notifications and measurement for Adobe Journey Optimizer.
