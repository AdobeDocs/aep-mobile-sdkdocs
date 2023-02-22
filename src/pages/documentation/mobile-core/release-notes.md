# Release Notes

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
