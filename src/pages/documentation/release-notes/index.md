---
description: Release notes and change logs for the Adobe Experience Platform Mobile SDKs.
---

# Release notes

## February 13, 2023

### Android Edge 1.4.1

* Improves error handling when processing `Edge.sendEvent` requests by catching and logging unexpected `RuntimeException` instances thrown from within caller's `EdgeCallback` handler implementation.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

### Android Lifecycle 1.1.2

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.

Released with sdk-core version 1.11.5
