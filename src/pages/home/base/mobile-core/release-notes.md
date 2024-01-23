---
title: Mobile Core release notes
description: The release notes for the Mobile Core extensions.
keywords:
- Mobile Core
- Release notes
---

# Release notes

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
