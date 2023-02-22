---
description: Release notes and change logs for the Adobe Experience Platform Mobile SDKs.
---

# Release notes

## February 13, 2023

### Android Edge 1.4.1

* Improves error handling when processing `Edge.sendEvent` requests by catching and logging unexpected `RuntimeException` instances thrown from within caller's `EdgeCallback` handler implementation.

## February 9, 2023

### iOS AEPMessaging 1.1.0

* Adds support for Adobe Journey Optimizer powered in-app messages.

### Android AEPMessaging 2.0.1

* Updates the AEPCore dependency to 2.0.1 which resolves inconsistencies between the Android and iOS MessagingDelegate classes.

## February 3, 2023

### Android AEPMessaging 2.0.0

* Adds support for Adobe Journey Optimizer powered in-app messages.
* Adds support for AEP 2.x extensions. Note, AEPMessaging 2.0.0 is not backwards compatible with the ACP 1.x extensions.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

### Android Lifecycle 1.1.2

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.

Released with sdk-core version 1.11.5
