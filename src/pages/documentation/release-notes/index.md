---
description: Release notes and change logs for the Adobe Experience Platform Mobile SDKs.
---

# Release notes

## February 13, 2023

### Android Campaign Standard 1.0.10

* Fixed a crash which could occur when loading Campaign in-app messages.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

### Android Lifecycle 1.1.2

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.

Released with sdk-core version 1.11.5
