---
title: Identity for Edge Network release notes
description: The release notes for the Identity for Edge Network mobile extension.
keywords:
- Edge Network
- Identity for Edge Network
- Release notes
---

# Release notes

## March 6, 2024

### iOS EdgeIdentity 4.0.1

- Added max versions to Platform dependencies in podspec.

## July 25, 2023

### Android EdgeIdentity 2.0.1

* Added validation to ignore `IdentityItem`s with an empty ID value.
* Fixed an issue where the `getUrlVariables` API may fail to generate a response on Android 6 (API 23) devices.

## June 1, 2023

### iOS EdgeIdentity 4.0.0

Major version update for [Identity for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## February 28, 2023

### iOS AEPEdgeIdentity 1.2.0

* Added tvOS support.
* Identity map no longer accepts identity items with an empty string value for ID.

## January 31, 2023

### Android EdgeIdentity 2.0.0

* Major version update for [Identity for Edge Network](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeidentity-android).

## June 7, 2022

### iOS AEPEdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.

### Android EdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.
* Internal fixes for IdentityMap deserialization.

## April 1, 2022

### iOS AEPEdgeIdentity 1.0.1

* Synchronized updates and reads on the Identity for Edge Network shared state to avoid any race conditions.

## April 13, 2021

### Identity tags Extension

You can now find the `Identity` extension in the tags extensions catalog for mobile properties.

## April 8, 2021

### iOS & Android EdgeIdentity 1.0.0

The Adobe Experience Platform Identity (AEPEdgeIdentity) mobile extension is now available on iOS and Android! This extension enables handling of user identity data from a mobile app when using the Adobe Experience Platform SDK and the Edge Network extension.
