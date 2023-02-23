---
description: Release notes and change logs for the Adobe Experience Platform Mobile SDKs.
---

# Release notes

## February 23, 2023

New major version of the Mobile Core SDK for Android has been released along with updates to other extensions to take advantage of the new features and improvements. These improvements include:

* Android SDKs updated to have similar architecture to iOS Swift SDKs.
* All extensions open-sourced.
* Integration with Kotlin apps improved.
* AndroidX support added.
* Security improvements added.

Note that all these extensions must be updated together. Flutter and React plugins not yet updated with these versions, but coming soon.
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

* Major version update for [Adobe Target](../adobe-target/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-target-android).

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

### iOS Messaging 1.1.0

* Adds support for Adobe Journey Optimizer powered in-app messages.

## February 3, 2023

### Android Analytics 2.0.0

* Major version update for [Adobe Analytics](../adobe-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-analytics-android/).

### Android Audience 2.0.0

* Major version update for [Adobe Audience Manager](../adobe-audience-manager/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-audience-android).

### Android Media 3.0.0

* Major version update for [Adobe Analytics - Media Analytics workflows](../adobe-media-analytics/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-media-android).

### Android Messaging 2.0.0

* Major version update for [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-messaging-android).
* Adds support for Adobe Journey Optimizer powered in-app messages.

## February 2, 2023

### Android Optimize 2.0.0

* Major version update for [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This extension library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-optimize-android/).

### Android Campaign Standard 2.0.0

* Major version update for [Adobe Campaign Standard workflows](../adobe-campaign-standard/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaign-android).

## February 1, 2023

### Android Edge Bridge 2.0.0

* Major version update for Edge Bridge for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgebridge-android).

## January 31, 2023

### Android Assurance 2.0.0

* Major version update for [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-assurance-android).

### Android Campaign Classic 2.0.0

* Major version update for [Adobe Campaign Classic workflows](../adobe-campaign-classic/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-campaignclassic-android).

Please note that the `registerDevice` API, similar to iOS, no longer provides a callback method for registration status since a `false` value cannot be accurately used as a signal to retry requests.

### Android Consent 2.0.0

* Major version update for [Consent for Edge Network](../consent-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeconsent-android).

### Android Edge 2.0.0

* Major version update for [Edge Network](../edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edge-android).

### Android EdgeIdentity 2.0.0

* Major version update for [Identity for Edge Network](../identity-for-edge-network/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is already available as an [open source project on GitHub](https://github.com/adobe/aepsdk-edgeidentity-android).

### Android UserProfile 2.0.0

- Major version update for [User Profile](../profile/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an [open source project on GitHub](https://github.com/adobe/aepsdk-userprofile-android).
- The following APIs have been deprecated and will be removed in a future release:

  | Deprecated API                      | Recommended Alternative              |
  | ----------------------------------- | ------------------------------------ |
  | `UserProfile.updateUserAttribute()` | `UserProfile.updateUserAttributes()` |
  | `UserProfile.removeUserAttribute()` | `UserProfile.removeUserAttributes()` |

## January 30, 2023

### Adobe Experience Platform Android Core SDKs

The brand new Adobe Experience Platform Core Android SDKs are live! It is [open sourced on GitHub](https://github.com/adobe/aepsdk-core-android), containing the following extensions:

* Core 2.0.0
* Identity 2.0.0
* Signal 2.0.0
* Lifecycle 2.0.0

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

## October 26, 2022

### AEP Flutter plugins for Edge Network

The following AEP Flutter plugins have been published:

* [flutter_aepedge@1.0.0](https://pub.dev/packages/flutter_aepedge)
* [flutter_aepedgeidentity@1.0.0](https://pub.dev/packages/flutter_aepedgeidentity)
* [flutter_aepedgeconsent@1.0.0](https://pub.dev/packages/flutter_aepedgeconsent)

## October 25, 2022

### iOS AEPEdgeBridge 1.0.0

The `Adobe Experience Platform Mobile SDK - Edge Bridge` extension is now available for iOS!

With this release, the extension enables a drop-in solution for converting Core track API (trackAction & trackState) generated events into Edge Network events. This extension may be used to easily route existing track calls, that may have been implemented for Adobe Analytics, to Edge Network. The configured Data Collection datastream for the mobile application can define a mapping of the track event's `contextdata` to an XDM schema using [Data Prep for Data Collection](https://experienceleague.adobe.com/docs/platform-learn/data-collection/edge-network/data-prep.html) to route data to Adobe Analytics, Adobe Experience Platform, or to 3rd party vendors via server-side event forwarding.

For an end-to-end guide on how to use the extension, see the [Edge Bridge tutorial](https://github.com/adobe/aepsdk-edgebridge-ios/blob/main/Documentation/tutorials/edge-bridge-tutorial.md).

## October 24, 2022

### Android Edge Bridge 1.0.0

The `Adobe Experience Platform Mobile SDK - Edge Bridge` extension is now available for Android!

With this release, the extension enables a drop-in solution for converting Core track API (trackAction & trackState) generated events into Edge Network events. This extension may be used to easily route existing track calls, that may have been implemented for Adobe Analytics, to Edge Network. The configured Data Collection datastream for the mobile application can define a mapping of the track event's `contextdata` to an XDM schema using [Data Prep for Data Collection](https://experienceleague.adobe.com/docs/platform-learn/data-collection/edge-network/data-prep.html) to route data to Adobe Analytics, Adobe Experience Platform, or to 3rd party vendors via server-side event forwarding.

For an end-to-end guide on how to use the extension, see the [Edge Bridge tutorial](https://github.com/adobe/aepsdk-edgebridge-android/blob/main/Documentation/tutorials/edge-bridge-tutorial.md).

## October 19, 2022

### iOS AEPEdge 1.5.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

### Android Edge 1.4.0

* Adds support for persisting the location hint returned by the Edge Network for the duration of the session for an improved user experience. Includes new APIs `getLocationHint` and `setLocationHint` allowing hybrid applications to share the location hint across SDKs.

## October 11, 2022

### iOS AEPPlaces 3.0.2

* Non-string values in Point of Interest metadata are now correctly handled.

## June 30, 2022

### iOS AEPAnalytics 3.2.0

* Added tvOS support.

### iOS AEPMedia 3.1.0

* Added tvOS support.

## June 16, 2022

### iOS AEPCore 3.7.0

* Added tvOS support.
* Fixed a few race conditions in the EventHub and MobileCore.
* Made changes in AEPIdentity to speed up boot.

## June 10, 2022

### Adobe Journey Optimizer - Decisioning extension 1.0.0

`Adobe Journey Optimizer - Decisioning` extension is now available in the extensions catalog on the Data Collection UI for mobile Tag Properties. No configuration is necessary for this extension.  

## June 9, 2022

### Android Optimize 1.0.0

The `Adobe Experience Platform Mobile SDK - Optimize` extension is now available for Android!

This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning.

**Key Features**

With this release, the extension provides APIs that you can use to:

* Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning.
* Track user interactions with those offers.

## June 7, 2022

### iOS AEPEdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.

### Android EdgeIdentity 1.1.0

* Added the `getUrlVariables` API to support passing the visitor ID from a mobile app to a web view.
* Added support for advertising identifier and ad tracking consent collection.
* Internal fixes for IdentityMap deserialization.

## June 2, 2022

### iOS AEPEdge 1.4.1

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Internal updates to use URLComponents builder for Edge endpoints.

### Android Edge 1.3.2

* Updates the consent request to use "update" query operation in order to allow for incremental consent preferences changes.
* Updates internal network stack to use Mobile Core's ServiceProvider Network Service, reducing overall extension code size.

## May 27, 2022

### iOS AEPOptimize 1.0.0

The `Adobe Experience Platform Mobile SDK - Optimize` extension is now available for iOS!

This extension enables real-time personalization workflows in your mobile applications when using Adobe Target and/or Adobe Journey Optimizer Offer Decisioning.

**Key Features**

With this release, the extension provides APIs that you can use to:

* Fetch personalized offers from the decisioning services enabled in the datastreams e.g. Adobe Target, Adobe Journey Optimizer Offer Decisioning.
* Track user interactions with those offers.

## May 26, 2022

### iOS AEPTarget 3.1.3

* Fixed an issue where the Target display notification was not being sent to the server, upon invoking `displayedLocations` API, if a prior prefetch call did not return profile state token for the mbox.

## May 18, 2022

### iOS AEPAudience 3.0.4

* Fixed an issue where lifecycle data was included in signalWithData requests.

## May 12, 2022

### iOS AEPAnalytics 3.1.0

* Added support for using the Analytics Extension in [App Extensions](https://developer.apple.com/app-extensions/)

## May 9, 2022

### iOS AEPCore 3.6.0

* Added support for using the Core SDK in [App Extensions.](https://developer.apple.com/app-extensions/)
* Added a new API to the Extension protocol for getting the latest non-pending shared state.
* Added support for using Bundled Rules.
* Added support for cached images for Fullscreen Messages.
* Fixed a bug preventing Fullscreen Messages from being dismissed in certain conditions.

### iOS AEPAudience 3.0.3

- Fixed integration with Lifecycle extension to send lifecycle metrics when a new app session is started.

## April 12, 2022

### AEP React Native plugins

The following AEP SDK React Native plugins have been published:

 - @adobe/react-native-aepcore@1.0.0
 - @adobe/react-native-aepuserprofile@1.0.0
 - @adobe/react-native-aepassurance@3.0.0
 - @adobe/react-native-aepedge@1.0.0
 - @adobe/react-native-aepedgeconsent@1.0.0
 - @adobe/react-native-aepedgeidentity@1.0.0

For more details, see the documentation and release notes in the [aepsdk-react-native repository](https://github.com/adobe/aepsdk-react-native).

## April 8, 2022

### iOS AEPCore 3.5.0

* Adds two APIs to `Date+Format` class. Method `getISO8601UTCDateWithMilliseconds` formats a Date to string as with fractional seconds and UTC time zone, while `getISO8601FullDate` formats a Date to string with date without time using the local time zone.
* Lifecycle foreground and background events for Edge Network now format timestamps with fractional seconds and UTC time zone.
* Updates the timestamp format for rule token `~timestampp` with fractional seconds and UTC time zone. This rule token is used to set the mobile property data element "Adobe Experience Platform Timestamp".
* Improves Signal logging by treating all 2xx network responses as success.
* Fixes bug where dispatched events failed due to use of single quotes in name.
* Fixes format of push token string by uppercasing characters.

### iOS AEPEdge 1.4.0

* Updates timestamp in Experience Events to use fractional seconds.
* Deprecates APIs `XDMFormatters.dateToISO8601String` and `XDMFormatters.dateToFullDateString`. Use the `Date` extension methods `getISO8601UTCDateWithMilliseconds` and `getISO8601FullDate` instead, provided by the AEPServices module within the AEPCore extension.

### iOS AEPEdgeConsent 1.0.1

* Updates timestamp in Consent requests to use fractional seconds.

## April 1, 2022

### iOS AEPEdgeIdentity 1.0.1

* Synchronized updates and reads on the Identity for Edge Network shared state to avoid any race conditions.

### Adobe Experience Platform Edge Network tag extension v1.1.9

* UI updates for the Datastream configuration section to enable the sandbox aware datastreams support. If more than one sandbox is used, a sandbox picker is displayed to allow for datastreams selection across sandboxes.

* Auto-complete in the UI for default third party domain based on company name for Edge Network data collection. The domain configuration is now required, while existing configurations will continue to use the default edge.adobedc.net domain.

### Adobe Journey Optimizer tag extension v0.0.16

* UI updates to support the new datastream selections in the AEP Edge Network extension.

## March 31, 2022

### iOS AEPAnalytics 3.0.4

* Fixed `getTrackingIdentifier` and `getVisitorIdentifier` APIs to `return nil` instead of `AEPError.unexpected` error when AID/VID values are not found in persistence.

## February 22, 2022

### iOS Assurance 3.0.1

* Add support for transmitting large events.
* Assurance extension now prompts an error message when attempting to connect to a deleted session.
* Improved logging for troubleshooting.
* Fixed an issue to ensure that event collection stops on session disconnection.

## February 9, 2022

### iOS Campaign Standard 3.0.1

* Fixed an issue with the Campaign message tracking URL being incorrectly built.

## February 3, 2022

### iOS AEPServices 3.4.2

* Add `@objc` attribute to `messageSettings` in `FullscreenMessage`

## January 26, 2022

### iOS AEPCore 3.4.1

* Fixed AEPRulesEngine dependency in Package.swift

## January 21, 2022

### iOS AEPEdge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

### Android AEPEdge 1.3.0

* Allows setting a custom first-party domain that is used to interact with the mapped Adobe-provisioned Edge Network domain.

## January 20, 2022

### iOS AEPCore 3.4.0

* Added support for a new API `clearUpdatedConfiguration()`, see Configuration API reference for more details.
* Added support for optionally capturing event history on the device.
* Added support for triggering rules engine conditions based on event history.

### iOS AEPServices 3.4.0

* Expanded configuration options for Fullscreen Messages.
* Added support for delegating in-app message delivery.
