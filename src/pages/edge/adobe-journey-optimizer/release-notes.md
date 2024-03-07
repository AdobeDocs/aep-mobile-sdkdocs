---
title: Adobe Journey Optimizer release notes
description: The release notes for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Release notes
---

# Release notes

## February 28, 2024

### iOS Messaging 4.1.1

- Added max versions to Platform dependencies in podspec

## September 28, 2023

### iOS Messaging 4.1.0

* Added new notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse` and an optional callback the returns `PushTrackingStatus` enum.
    * This API will automatically handle the click behaviour (OPENAPP, WEBURL, DEEPLINK) defined for the notification.
* Deprecated the notification tracking API `handleNotificationResponse` with parameters `UNNotificationResponse`, `applicationOpened`, and `customActionId`.
*  Fixed a bug on notification tracking API `handleNotificationResponse` to stop sending tracking hits to edge servers when the notification does not contain tracking information.

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
