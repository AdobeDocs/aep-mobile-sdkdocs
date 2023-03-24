---
title: Adobe Journey Optimizer release notes
description: The release notes for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Release notes
---

# Release Notes

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
