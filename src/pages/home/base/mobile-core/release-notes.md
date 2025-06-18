---
title: Mobile Core release notes
description: The release notes for the Mobile Core extensions.
keywords:
- Mobile Core
- Release notes
---

# Release notes

## June 17, 2025

### iOS Core 5.5.1

* Fixed an issue causing incorrect rule evaluation of `notContains` and `notEquals` conditions when checking against multiple values.
* Exposed `Decodable.fromDictionary` helper method in AEPServices.

## June 11, 2025

### Android Core 3.4.1

* Added edge-to-edge support for in-app messages when enforced by the device OS.
* Fixed an issue causing incorrect rule evaluation of `notContains` and `notEquals` conditions when checking against multiple values.
* Disabled WebSQL for in-app message web views.
* Improved stability when processing Activity intent extras.

## May 12, 2025

### Android Core 3.4.0

* Added support of "Max width" and "Fit to content" for in-app messages via`InAppMessageSettings`.

### iOS Core 5.5.0

* Fixed issue where `MobileCore.initialize` registered multiple Analytics extensions.
* Removed call to `CTCarrier` API for iOS 16+ as Apple deprecated it without replacement. Calling `SystemInfoService.getMobileCarrierName` on iOS 16 and above will now always return nil.
* Added support for "Fit to content" in `FullscreenMessage`.
* Added support of "Max width" and "Fit to content" for in-app messages via `MessageSettings`.

## March 28, 2025

### React Native Core 7.0.0

* Added `MobileCore.initializeWithAppId` and `MobileCore.initialize` APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Updated to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.

## March 4, 2025

### Flutter Core 5.0.0

* Add `MobileCore.initializeWithAppId` and `MobileCore.initialize` APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Update to use BOM [(Bill of Materials)](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom) for Android SDK dependencies.
* Add Error handling for NSError.
* Update tests to handle the deprecation warning for `setMockMethodCallHandler`.

## February 25, 2025

### Android Core 3.3.1

* Allow disabling callback timeout when using `MobileCore.dispatch` API.
* Restrict override `FloatingButton` presentable with app theme.

## February 14, 2025

### iOS Core 5.4.0

* Added new [`MobileCore.initialize`](../mobile-core/api-reference.md#initialize) APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Fixed issue where in-app message scrolling was disabled when gestures were nil or empty.
* Allow disabling callback timeout when using `MobileCore.dispatch` API.

## February 10, 2025

### Android Signal 3.0.1

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Lifecycle 3.0.2

* Added support for the new `MobileCore.initialize` API introduced in Core.

### Android Identity 3.0.2

* Added support for the new MobileCore.initialize API introduced in Core.

### Android Core 3.3.0

* Added new [`MobileCore.initialize`](../mobile-core/api-reference.md#initialize) APIs to simplify AEP SDK initialization by enabling automatic extension registration and lifecycle tracking.
* Fixed an issue where certain HTTP request timeouts were incorrectly configured.

## January 16, 2025

### iOS Core 5.3.2

* Fixed an issue where in-app message was not reframed in split screen mode.

## October 16, 2024

### iOS Core 5.3.1

* Updated `responseHttpHeader(forKey:)` in `HttpConnection` struct to ensure case-insensitive header field lookups.

## October 1, 2024

### Android Core 3.2.0

* Added new constants to `AEPError`.
* Added the `SuppressedByAppDeveloper` constant to indicate that the in-app message was not displayed because it was rejected by the app developer via the `PresentationDelegate`.

## September 27, 2024

### iOS Core 5.3.0

* Added an `onError` method to the `FullscreenMessageDelegate` to notify of the reason when an in-app message fails to display.

## September 3, 2024

### Android Core 3.1.2

* Added screen reader support for in-app messages.

## July 19, 2024

### Android Core 3.1.1

* Fixed an issue causing in-app messages to cast a shadow.
* Fixed an issue causing in-app messages to be slightly transparent by default.
* Improved in-app message handling in immersive mode.

## June 24, 2024

### Android Core 2.6.4

* Fixed strict mode violations that happened during SDK initialization.
* Added checks to prevent SDK initialization when the device is in direct boot mode.

## June 21, 2024

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

### React Native Core 6.0.2

* Updated typescript files to support strict null checks.

## June 4, 2024

### Android Core 3.0.2

* Fixed strict mode violations that happened during SDK initialization.

## May 23, 2024

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

### iOS Core 5.1.0

* Added a new constant and a utility method to AEPServices to detect if `URLError` is recoverable.
* Lifecycle extension now computes the `xdm:isUpgrade` metric in the `application.launch` event when either CFBundleShortVersionString or CFBundleVersion changes.
* Fixed an issue in the Signal and Identity extensions that caused the hit processor to drop queued hits when the device's network was offline.
* Fixed an edge case where `a.push.optin=false` event may be sent to Analytics even when `MobileCore.setPushIdentifier()` API is not used.
* Fixed data races in ExtensionContainer, ApplicationSystemInfoService, DiskCacheService, and FileSystemNamedCollection.

## May 20, 2024

### iOS Core 4.2.4

* Fixed a race condition when accessing sharedStateName inside ExtensionContainer.

## May 13, 2024

### Flutter Core 4.0.2

* Update environment dependencies in pubspec.

### Android Core 2.6.3

* Enhanced error handling in the `collectLaunchInfo` API to catch exceptions when retrieving bundled data from an Activity.

## April 24, 2024

### React Native Core 6.0.1

* Added namespace support to the Android module.

## April 23, 2024

### Flutter Core 4.0.1

* Added namespace support to the Android module.

## April 16, 2024

### Flutter Core 4.x and compatible plugins

A new major version of the [Adobe Experience Platform Core Flutter Plugin](https://github.com/adobe/aepsdk-react-native/tree/main/packages/core) has been released along with updates to other plugins. The current release includes the following changes:

* Updated to use Experience Platform Android `3.x` SDKs.
* Updated to use Experience Platform iOS `5.x` SDKs, which include the `privacy manifest`.
* Updated `MobileCore.dispatchEventWithResponseCallback` API with a timeout parameter.

Note that all these plugins must be updated together.

* flutter_aepcore@4.0.0
* flutter_aepuserprofile:4.0.0
* flutter_aepassurance:4.0.0
* flutter_aepedge:4.0.0
* flutter_aepedgeidentity:4.0.0
* flutter-aepedgeconsent:4.0.0
* flutter-aepedgebridge:4.0.0
* flutter-aepmessaging:4.0.0

To learn how Apple's privacy related announcements made in WWDC of 2023 affect the Mobile SDK, please read the guide on [iOS privacy manifest requirements](https://developer.adobe.com/client-sdks/resources/privacy-manifest).

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

## April 1, 2024

### Android Signal 3.0.0

Major version update for [Signal](./signal/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* The SDK is now compatible with Kotlin 1.8 and higher.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

### Android Lifecycle 3.0.0

Major version update for [Lifecycle](./lifecycle/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.

### Android Identity 3.0.0

Major version update for [Identity](./identity/index.md) for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:

* Updated the minimum supported Android API level to 21.
* Removed deprecated `registerExtension` API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead.
* Added an enhancement to prevent network retries when the device's network is offline.

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

## February 15, 2024

### iOS Core 4.2.3

* Fix podspec dependencies not being restricted to current major version.
* Fixed an issue that was allowing in-app messages without content to be displayed.

## January 26, 2024

### Android Core 2.6.2

* Add array support for token replacement in the launch rules engine.
* The code used to fix issues on Android 8/8.1 has been restricted from execution on other Android OS versions.

## January 22, 2024

### iOS Core 4.2.2

* Add array support for token replacement in the launch rules engine.
* Fixed a caching issue that could cause display problems when two or more in-app messages were being triggered by identical conditions.

## January 4, 2024

### iOS Core 4.2.1

* Reverts storage for tvOS back to UserDefaults.

## December 13, 2023

### Android Core 2.6.1

* Fixed an issue where failure to create a webview for displaying an in-app message would cause the UI to be blocked.

## November 15, 2023

### Android Core 2.6.0

* Fixed the UI takeover behavior for in-app messages. When UI takeover is disabled, taps outside the in-app webview no longer dismiss the message.

## October 31, 2023

### iOS Core 4.2.0

* Migrates storage from UserDefaults to iOS file system.

<InlineAlert variant="info" slots="text"/>

Downgrading from this version of Core is unsupported, as it will cause undefined behavior.

<InlineAlert variant="warning" slots="text"/>

Please do not use this release for tvOS. Use the 4.2.1 release instead.

## October 30, 2023

### Android Core 2.5.1

* Fixed a resource leak in `StreamUtils`.
* Fixed a crash when displaying in-app messages.

## September 28, 2023

### Android Core 2.5.0

* Added getter APIs `getLargeIconResourceID` and `getSmallIconResourceID` to MobileCore for retrieving the icon resource IDs set from the application.

## August 30, 2023

### iOS Core 4.1.0

* Fixed a bug where the in-app message was not displayed correctly when there was a change in device orientation.
* Fixed a bug where the cached appId could overwrite the one set with `MobileCore.configureWithAppId()` before extension registration.
* Added the `contentComplete` event source constant for Edge workflows.

### Android Core 2.4.0

* Fixed a bug where floating button was not being displayed properly after being dismissed.
* Fixed a bug where `MobileCore.updateConfiguration()` was not updating configuration key for the correct environment.
* Added the `contentComplete` event source constant for Edge workflows.

## August 8, 2023

### Android Core 2.3.1

* Fixed an issue with displaying local notifications.

## July 26, 2023

### Android Core 2.3.0

* Added the DeviceInforming.getSystemLocale() API, which returns the locale set by the user in the system.
* Implemented database recovery in SQLiteDataQueue for cases where adding or removing an entry fails due to unexpected errors.
* Fixed an issue with the rounded corners and placement of in-app messages on Android 21/22.
* Fixed a bug where the cached appId could overwrite the one set with MobileCore.configureWithAppId() before extension registration.

### Android Lifecycle 2.0.4

* Lifecycle extension now includes the system locale, indicating the device's preferred locale, in its published shared state.
* Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.

## June 29, 2023

### Android Core 2.2.3

* Fixed handling of back button press in in-app messages.
* Resolved a crash that occurred when dismissing in-app messages.

## June 15, 2023

### Android Core 2.2.2

* Fixed an issue in Android API 22 and below where the in-app message would sometimes take over the screen, rendering the app unresponsive.
* Fixed an issue where the onShow method in FullscreenMessageDelegate and MessagingDelegate was being notified multiple times after displaying an in-app message.
* Improved the handling of in-app messages during orientation changes.

## June 12, 2023

### Android Core 2.2.1

* Updated EventDataUtils to drop entries with unsupported values during cloning instead of throwing an exception.
* Fixed a crash when displaying in-app messages.
* Fixed rounded corners when displaying in-app messages.
* Fixed an issue where the shared state published by Event Hub was mutable.

### Android Lifecycle 2.0.3

* Fixed an issue where session start time (`starttimestampmillis`) was shared in seconds instead of milliseconds in Lifecycle shared state.
* Fixed an issue where session start time (`starttimestampmillis`), previous session start time (`previoussessionstarttimestampmillis`), and previous session pause time (`previoussessionpausetimestampmillis`) were shared in seconds instead of milliseconds in Lifecycle response event.

### Android Identity 2.0.3

* Added debug logs around ECID generation.

## June 1, 2023

### iOS Core 4.0.0

Major version update of Adobe Experience Platform Core iOS SDKs are live! It contains the following extensions:

* Core 4.0.0
* Identity 4.0.0
* Signal 4.0.0
* Lifecycle 4.0.0

Please note that the current release includes the following changes:

* Updated the minimum supported version to iOS 11.0 and tvOS 11.0.
* Include XCFrameworks built with Xcode 14.1 with the GitHub release.
* Added `SystemInfoService.getSystemLocaleName()` API which returns the locale by combining device's preferred language and selected region (as set by the user on the system).
* Lifecycle extension adds `systemlocale` denoting device's preferred locale to its published shared state.
* Lifecycle launch event now includes the application._dc.language XDM field, which signifies the device's preferred locale.

## May 23, 2023

### Android Core 2.2.0

* Added support for chaining related events.
* Added a new `evaluateEvent` API in the `LaunchRulesEngine` class that returns matching consequences without processing them.
* Fixed a bug where a non-transparent background was visible behind a message webview.
* Fixed the back button functionality to allow for the dismissal of a displayed in-app message using the device's back button.
* Fixed in-app message redraw on device orientation change.
* Fixed a memory leak with the in-app message webview.

### Android Lifecycle 2.0.2

* Chain the events dispatched by the Lifecycle extension to their corresponding request events.

## May 15, 2023

### iOS Core 3.9.0

* Added support for chaining related events.
* Chain the events dispatched by the Lifecycle extension to their corresponding request events.
* Added a new `evaluate` API in the `LaunchRulesEngine` class that returns matching consequences without processing them.
* Fixed an issue that caused shared state events to be dispatched out of order.
* Fixed an issue that captured event history before processing rules.

## April 24, 2023

### Android Mobile Core 2.1.3

* In-app messages with content overflow now correctly scroll when the message is not observing gestures.
* Opacity is now correctly calculated for in-app message takeovers.
* In-app messages will no longer intermittently cause a crash when being displayed on Android 7.
* Fixed a race condition when querying the event history database.

## April 14, 2023

### Android Mobile Core 2.1.2

* Fixed an issue that prevented some in-app messaging show frequency rules from working correctly.
* Improved evaluation of logical operators in rules engine.

## April 10, 2023

### Android BOM 1.0.0-beta1

The initial public beta release of the [Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom/1.0.0-beta1) (BOM) artifact for Android is now available.

## March 31, 2023

### Android Mobile Core 2.1.1

* Fixed crash during Core boot when migrating the data from v4 Mobile SDK.
* Updated POM file with the Apache 2 license URL.

### Android Identity 2.0.2

* Fixed an issue where Identity could block the processing of requests when the first loaded configuration had incorrect format.
* Updated POM file with the Apache 2 license URL.

## March 28, 2023

### iOS Core 3.8.2

* Fixed some crashes which can happen on shutdown.

## March 17, 2023

### iOS Core 3.8.1

* Revert changes to minimum supported version of iOS and tvOS back to 10.0.

## March 14, 2023

### Android Mobile Core 2.1.0

* Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.

## March 13, 2023

### iOS AEPCore 3.8.0

* Updated the minimum supported versions to iOS 11.0, tvOS 11.0.
* Added support for overriding internal logging service with customer-provided implementation.
* Added a new API to the LaunchRulesEngine class that enables adding new rules without replacing the existing ones.

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

## January 30, 2023

### Adobe Experience Platform Android Core SDKs

The brand new Adobe Experience Platform Core Android SDKs are live! It is [open sourced on GitHub](https://github.com/adobe/aepsdk-core-android), containing the following extensions:

* Core 2.0.0
* Identity 2.0.0
* Signal 2.0.0
* Lifecycle 2.0.0

<InlineAlert variant="info" slots="text"/>

The `registerExtension` API for each extension is deprecated in the latest version of the mobile SDK. You can call the `MobileCore.registerExtensions` API instead of registering the extensions separately. See the [Migration Guide](../../../resources/migration/android/migrate-to-2x.md) for more details.

## January 5, 2023

### iOS AEPCore 3.7.4

* Fixes an issue where Lifecycle launch events may set an invalid XDM `environment._dc.language` field when the device is set to specific locales.
* Fixes an issue where Lifecycle may set invalid negative times for metrics `daysSinceFirstLaunch`, `daysSinceLastLaunch`, and `daysSinceLastUpgrade`.
* Adds performance improvements to `FullscreenMessage.show`.

Released with sdk-core version 1.11.5

## November 11, 2022

### iOS AEPCore 3.7.3

* Fixed a bug in AEPIdentity where CustomerIdentities with the same type could cause a crash.

## October 27, 2022

### iOS AEPCore 3.7.2

* Added location hint result to EventSource keys for Edge.
* Fixed a bug preventing in-app messages from being dismissed in some situations.
* Added Target identities to MobileCore.getSDKIdentities response.

## August 10, 2022

### iOS AEPCore 3.7.1

* Made improvements to retry logic when downloading the remote Configuration fails
* Made changes in Identity to speed up boot up
* Fixed a bug where early events do not properly get processed by the rules engine
* Improved Objective-C naming for MessagingDelegate methods
* Updated UI classes to respect safe area when showing fullscreen messages

## June 16, 2022

### iOS AEPCore 3.7.0

* Added tvOS support.
* Fixed a few race conditions in the EventHub and MobileCore.
* Made changes in AEPIdentity to speed up boot.

## May 9, 2022

### iOS AEPCore 3.6.0

* Added support for using the Core SDK in [App Extensions.](https://developer.apple.com/app-extensions/)
* Added a new API to the Extension protocol for getting the latest non-pending shared state.
* Added support for using Bundled Rules.
* Added support for cached images for Fullscreen Messages.
* Fixed a bug preventing Fullscreen Messages from being dismissed in certain conditions.

## April 8, 2022

### iOS AEPCore 3.5.0

* Adds two APIs to `Date+Format` class. Method `getISO8601UTCDateWithMilliseconds` formats a Date to string as with fractional seconds and UTC time zone, while `getISO8601FullDate` formats a Date to string with date without time using the local time zone.
* Lifecycle foreground and background events for Edge Network now format timestamps with fractional seconds and UTC time zone.
* Updates the timestamp format for rule token `~timestampp` with fractional seconds and UTC time zone. This rule token is used to set the mobile property data element "Adobe Experience Platform Timestamp".
* Improves Signal logging by treating all 2xx network responses as success.
* Fixes bug where dispatched events failed due to use of single quotes in name.
* Fixes format of push token string by uppercasing characters.

## February 3, 2022

### iOS AEPServices 3.4.2

* Add `@objc` attribute to `messageSettings` in `FullscreenMessage`

## January 26, 2022

### iOS AEPCore 3.4.1

* Fixed AEPRulesEngine dependency in Package.swift

## January 20, 2022

### iOS AEPCore 3.4.0

* Added support for a new API `clearUpdatedConfiguration()`, see Configuration API reference for more details.
* Added support for optionally capturing event history on the device.
* Added support for triggering rules engine conditions based on event history.

### iOS AEPServices 3.4.0

* Expanded configuration options for Fullscreen Messages.
* Added support for delegating in-app message delivery.

## December 22, 2021

### iOS AEPCore 3.3.2

* Stability improvements for Configuration extension and full screen messages.
* Configuration now allows for empty appId to reset the previously set appId value.
* Logging improvements for extensions registration flow.
* The Event Hub shares wrapper type in its shared state.
* Adds new messaging event type and sources.
* Deprecates SystemInfoService getApplicationVersion API.

### iOS AEPIdentity 3.3.2

* Fixes a bug where Identity.getIdentifiers API failed to encode the identifiers.
* Fixes intermittent issue for GetUrlVariables and AppendToUrl APIs when custom Analytics identifiers are being used.

## November 9, 2021

### iOS AEPCore 3.3.1

* Fixed a bug where Date was not persisted correctly in iOS versions less than 13.

### iOS AEPLifecycle 3.3.1

* Added session start time to Lifecycle shared state.

### iOS AEPIdentity 3.3.1

* Fixed a bug where the default Experience Cloud ID server URL was not used when the `experienceCloud.server` configuration parameter was an empty string.

## September 3, 2021

### iOS AEPCore 3.3.0

* Added support for dispatch event rules consequence.

### iOS AEPLifecycle 3.3.0

* Lifecycle extension now dispatches two new events `applicationLaunch` and `applicationClose` which contain Mobile Lifecycle metrics in XDM format.
* Fixed an issue where application upgrades were detected based on changes in `CFBundleShortVersionString` instead of `CFBundleVersion`.

### Mobile Core Launch extension v2.1.20

* New `Foreground` and `Background` event types to be used in rules for triggering actions based on Mobile Application Lifecycle XDM events.

## August 18, 2021

### iOS AEPCore 3.2.4

* Fixed data race in `Event` and `ExtensionContainer` classes.
* Fixed a memory leak in `EventHub.registerResponseListener`.

## July 29, 2021

### iOS AEPCore 3.2.3

* Fixed an issue in the `PersistentHitQueue` where new hits can cause additional scheduled tasks.
* Improved handling of database errors in the `PersistentHitQueue`.

## June 30, 2021

### iOS AEPCore 3.2.2

* Remove double URL encoding of AEPIdentity identifiers.
* Prevent possible crash at shutdown in EventHub.

## June 21, 2021

### iOS AEPCore 3.2.1

* Update version for bundled AEPIdentity 3.2.1 release.

## iOS AEPIdentity 3.2.1

* Fixed a bug where `Identity.syncIdentifier` and `Identity.syncIdentifiers` APIs would ignore the authentication state settings.

## June 7, 2021

### iOS AEPCore 3.2.0

* Support for handling identities request `Event`'s in AEPIdentity
* Improve public visiblity of `RuleConsequence`
* Added `getDeviceModelNumber` to `SystemInfoService`
* Various additions to `ThreadSafeDictionary`
* Added the ability to make a network request with raw data that is not UTF encoded
* Fixed a bug where condition definitions that did not contain a value were not handled correctly
* Introduced an API to set button image data to the `FloatingButton`
* Added `optimize` `EventType`
* Introduced an API to hide the `FullscreenMessage`
* Fixed a bug where token \(~ timestampu\) was not expanded correctly
* Introduced `webViewDidFinishLoading` to `FullScreenMessageDelegate`

> Note: This release introduces breaking changes to the `NetworkService` and the `SystemInfoService`.

## May 6, 2021

### iOS AEPCore 3.1.3

* Update to use AEPRulesEngine 1.0.1.

### iOS AEPRulesEngine 1.0.1

* Fixed a Swift compatibility issue.

## April 29, 2021

### iOS AEPCore 3.1.2

* Fixed a bug where the URL session was not reused for the same host.
* Fixed a Swift compatibility issue.

### iOS AEPIdentity 3.1.2

* Fixed a bug where Identity was blocked on the first launch if the configuration was invalid.

## April 8, 2021

### iOS AEPCore 3.1.1

* Fixed a bug where incomplete eventhub shared state was created before the event hub has been started.

## April 1, 2021

### iOS AEPCore 3.1.0

* New API - `MobileCore.collectLaunchInfo()` - see API reference for more information.
* New API - `MobileCore.resetIdentities()` - see API reference for more information.
* Added multiple new values to `EventType` and `EventSource`.
* Fixed a bug causing regular listeners to receive paired response events.
* Fixed a bug preventing proper data migration from v4 and v5 SDK.
* The callback method passed to `MobileCore.registerEventListener` now runs on a background thread.
* Improved logging for dictionaries.
* The EventHub's shared state dictionary now uses the full name of each registered extension as its key.

### iOS AEPIdentity 3.1.0

* Fixed an issue where privacy status was not correctly loaded from persistence.
* Advertising ID can now correctly be set after having an initial value of "zeroes" or empty.

### iOS AEPServices 3.1.0

* Added support for UI Services.
* The Locale string used in HTTP Headers is now properly formatted.
* Fixed a bug that would sometimes prevent downloaded files from being properly unzipped.

## January 19, 2021

### Adobe Experience Platform iOS Core SDKs

The brand new Adobe Experience Platform Core iOS swift SDKs are live! It is [open sourced on GitHub](https://github.com/adobe/aepsdk-core-ios), containing the following extensions:

* AEPCore 3.0.0
* AEPServices 3.0.0
* AEPIdentity 3.0.0
* AEPSignal 3.0.0
* AEPLifecycle 3.0.0
* AEPRulesEngine 1.0.0
