---
title: Adobe Target release notes
description: The release notes for the Adobe Target mobile extension.
keywords:
- Adobe Target
- Release notes
---

# Release notes

## February 28, 2024

### iOS Target 4.0.4

- Added max versions to Platform dependencies in podspec

## January 26, 2024

### iOS Target 4.0.3

* Fixed an issue where Target response tokens were not returned in `TargetRequest`'s `contentWithDataCallback` callback when using `retrieveLocationContent` API.

The response tokens should be parsed as `[String: Any]`. For details, see usage example for [retrieveLocationContent](./api-reference.md#retrievelocationcontent) API.

### Android Target 2.0.3

* Fixed an issue where Target response tokens were not returned in `TargetRequest`'s `AdobeTargetDetailedCallback` callback when using `retrieveLocationContent` API.

The response tokens should be parsed as `Map<String: Object>`. For details, see usage example for [retrieveLocationContent](./api-reference.md#retrievelocationcontent) API.

## October 12, 2023

### iOS Target 4.0.2

* Access to containers in `TargetState` is now synchronized in order to prevent possible runtime exceptions.

## July 11, 2023

### iOS Target 4.0.1 and Android Target 2.0.1

* Fixed a bug in which a Target Response containing JSON Array content was rejected.

## June 7, 2023

### iOS Target 4.0.0

Major version update for [Adobe Target](./index.md) for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:

* Updated the minimum supported version to iOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.

## March 2, 2023

### iOS Target 3.3.1

* `target.previewEnabled` configuration setting is no longer required to enable preview mode in Target iOS SDK. If not configured, the default value here will be set to true.

## February 9, 2023

### Android Target 2.0.0

* Major version update for [Adobe Target](./index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-target-android).

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

## August 2, 2022

### Android Target 1.3.0

Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions.

* The `setSessionId` API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the `target.sessionTimeout` configuration setting. You can use this API in conjunction with `setTntId` API to set both of the value in the SDK.
* The `setTntId` API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID.
* The `getSessionId` and `getTntId` APIs can be used to retrieve the current Target session ID and tnt ID values respectively.

## July 29, 2022

### iOS Target 3.2.0

Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions.

* The `setSessionId` API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the `target.sessionTimeout` configuration setting.You can use this API in conjunction with `setTntId` API to set both of the value in the SDK.
* The `setTntId` API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID.
* The `getSessionId` and `getTntId` APIs can be used to retrieve the current Target session ID and tnt ID values respectively.

## May 26, 2022

### iOS Target 3.1.3

* Fixed an issue where the Target display notification was not being sent to the server, upon invoking `displayedLocations` API, if a prior prefetch call did not return profile state token for the mbox.

## November 19, 2021

### iOS Target 3.1.2

* Fixed an issue where the Target qaMode parameters were not being attached to the `retrieveLocationContent` API requests, once the Target preview selections were confirmed.

## October 22, 2021

### iOS Target 3.1.1

* Fixed an issue where the Target session ID was not being persisted in the local storage if the app was closed before session expiry.

### iOS Target 3.1.0

* `TargetRequest` class now provides a constructor with a new callback function named `contentWithDataCallback`. When implemented, this callback provides:
  * Target content; AND
  * Data payload dictionary containing one or more of response tokens, Analytics payload, click metric Analytics payload (if available in the Target retrieve location content response with/ without a prior prefetch call)

**Note**: This SDK extension, per previous behavior, will make requests to Adobe Analytics (if the Adobe Analytics extension is also implemented) with appropriate Target payloads for A4T functionality.

* Fixed an issue where the click notification was not being sent to Adobe Target for a retrieved mbox location upon the `clickedLocation` API call.
* Added support for sending the click conversion A4T payload to Adobe Analytics for A4T-enabled Target activities when the `clickedLocation` API is called.

## April 9, 2021

### iOS Target 3.0.0

* Initial release to support [Adobe Target](./index.md) for Adobe Experience Platform Mobile SDKs on iOS in Swift. This library is available as an [open source project on GitHub](https://github.com/adobe/aepsdk-target-ios).
