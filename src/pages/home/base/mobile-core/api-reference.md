---
title: Mobile Core API reference
description: An API reference for the Mobile Core extensions.
keywords:
- API reference
- Mobile Core
---

import Tabs from './tabs/api-reference.md'

# Mobile Core API reference

## clearUpdatedConfiguration

Programmatic updates made to the configuration can be cleared via the `clearUpdatedConfiguration` API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#clearupdatedconfiguration).

## collectMessageInfo

User interactions with local or push notifications can be tracked by invoking the `collectMessageInfo` API. Please refer to [this page](../../../solution/adobe-campaign-standard/index.md#tracking-local-and-push-notification-message-interactions) for more information about tracking local and push notification message interactions.

## collectLaunchInfo

You can provide the user information to the SDK from various launch points in your application.

<InlineAlert variant="info" slots="text"/>

If the Adobe Analytics extension is enabled in your SDK, collecting this launch data results in an Analytics request being sent. Other extensions in the SDK might use the collected data, for example, as a rule condition for an In-App Message.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=collect-launch-info"/>

iOS

<Tabs query="platform=ios&api=collect-launch-info"/>

## collectPii

The `collectPii` method lets the SDK to collect sensitive or personally identifiable information (PII).

<InlineAlert variant="warning" slots="text"/>

Although this method enables the collection of sensitive data, no data is sent to any Adobe or other third-party endpoints. To send the data to an endpoint, use a PII type postback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=collect-pii"/>

iOS

<Tabs query="platform=ios&api=collect-pii"/>

<!--- React Native

<Tabs query="platform=react-native&api=collect-pii"/> --->

## configureWithAppId

The `configureWithAppId` API can be used to download the configuration for the provided app ID and apply the configuration to the current session. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithappid).

## configureWithFileInAssets

You can bundle a JSON configuration file in the app's assets folder and use `configureWithFileInAssets` API to replace or complement the configuration that was downloaded using the [`configureWithAppId`](#configurewithappid) API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithfileinassets).

## configureWithFileInPath

You can bundle a JSON configuration file in you app package and use `configureWithFileInPath` API to replace or complement the configuration that was downloaded using the [`configureWithAppId`](#configurewithappid) API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#configurewithfileinpath).

## dispatch / dispatchEvent

This method can be used to send an event through the Mobile Core for other extensions to consume.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=dispatch-event"/>

iOS

<Tabs query="platform=ios&api=dispatch-event"/>

## dispatch / dispatchEventWithResponseCallback

This method can be used to send an event through the Mobile Core for other extensions to consume. The provided event is used as a trigger and in return a response event is provided as a callback. The callback is invoked with a null event if the response could not be provided within the given timeout.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=dispatch-event-with-response-callback"/>

iOS

<Tabs query="platform=ios&api=dispatch-event-with-response-callback"/>

## getApplication

You can use the `getApplication` method to get the previously set Android `Application` instance. The `Application` instance is mainly provided for third-party extensions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=get-application"/>

## getLogLevel

This API gets the current log level being used in the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-log-level"/>

iOS

<Tabs query="platform=ios&api=get-log-level"/>

<!--- React Native

<Tabs query="platform=react-native&api=get-log-level"/> --->

## getPrivacyStatus

You can use the `getPrivacyStatus` API to retrieve the current privacy status. For more information about privacy in Mobile Core, please see [Privacy and GDPR](../../resources/privacy-and-gdpr.md#getprivacystatus)

## getSdkIdentities

The following SDK identities are locally stored:

* Company Context - IMS Org IDs
* Experience Cloud ID (MID)
* User IDs
* Integration codes (ADID, push IDs)
* Data source IDs (DPID, DPUUID)
* Analytics IDs (AVID, AID, VID, and associated RSIDs)
* Target legacy IDs (TNTID, TNT3rdpartyID)
* Audience Manager ID (UUID)

To retrieve data as a JSON string from the SDKs and send this data to your servers, use the `getSdkIdentities` method.

<InlineAlert variant="warning" slots="text"/>

You must call the API below and retrieve identities stored in the SDK, **before** the user opts out.<br/><br/>This API does **not** include the identities stored in the Edge Identity extension. To retrieve the identities from the Edge Identity extension, use [getIdentities](../../edge/identity-for-edge-network/api-reference.md#getidentities).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-sdk-identities"/>

iOS

<Tabs query="platform=ios&api=get-sdk-identities"/>

## initialize

<InlineAlert variant="info" slots="text" />

This API is available starting from Android version 3.3.0 and iOS version 5.4.0. To enable automatic extension registration on Android, use BOM version 3.8.0 or later.

This API initializes AEP SDKs by automatically registering all extensions bundled with the application and enabling automatic lifecycle tracking by default. The completion callback is triggered once the SDK is fully initialized, allowing event processing to begin.

Two versions of this API are available, which accept **app ID** or **InitOptions**:

- __app ID__: Configures the SDK with the provided mobile property environment ID configured from the Data Collection UI.
- __InitOptions__: Allow customization of the default initialization behavior. Refer [InitOptions](#initoptions).

This API eliminates the need to register extensions manually using [registerExtensions](#registerextensions) and manage lifecycle tracking with [lifecycleStart](lifecycle/api-reference.md#lifecyclestart) and [lifecyclePause](lifecycle/api-reference.md#lifecyclepause) APIs. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=initialize"/>

iOS

<Tabs query="platform=ios&api=initialize"/>

## log

This is the API used to log from the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=log"/>

iOS

<Tabs query="platform=ios&api=log"/>

<!--- React Native

<Tabs query="platform=react-native&api=log"/> --->

## registerEventListener

An EventListener can be registered with MobileCore to be notified when Events matching a type and source are dispatched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-event-listener"/>

iOS

<Tabs query="platform=ios&api=register-event-listener"/>

## registerExtension

Extensions can be incrementally registered with Mobile Core using the `registerExtension` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>

## registerExtensions

Extensions are registered with Mobile Core so that they can dispatch and listen for events.
This API can be used to register desired extensions and boot up the SDK for event processing. Calling `MobileCore.start()` API is deprecated starting Mobile Core v2.0.0 and is no longer required when using `MobileCore.registerExtensions()`.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

The following code snippets demonstrate how Lifecycle, Signal, Profile, Edge, and other extensions are imported and registered.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extensions"/>

iOS

<Tabs query="platform=ios&api=register-extensions"/>

<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/>

Flutter

<Tabs query="platform=flutter&api=register-extension"/> --->

## resetIdentities

The `resetIdentities` method requests that each extension resets the identities it owns and each extension responds to this request uniquely. For more details, check the `resetIdentities` API reference on each of the extensions you use.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset-identities"/>

iOS

<Tabs query="platform=ios&api=reset-identities"/>

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via [Signals](signals/index.md), and is removed at uninstall.

For more information about identity in Mobile Core, please read the documentation on the [identity APIs](identity/api-reference.md#setadvertisingidentifier).

## setAppGroup

You can use the `setAppGroup` method to set the app group, which is used to share user defaults and files among the containing app and the extension apps. Please note that this method is **only** supported on iOS versions of Mobile Core.

<InlineAlert variant="info" slots="text"/>

This API _must_ be called in `AppDidFinishLaunching` and before any other interactions with the Adobe Experience SDK have happened. Only the first call to this function will have any effect.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=set-app-group"/>

## setApplication

When building Android applications, the `android.app.Application` reference must be passed to Mobile SDK, which allows Mobile SDK to access the `android.app.Context` and monitor the lifecycle of the Android application.

<InlineAlert variant="warning" slots="text"/>

Android applications must call `MobileCore.setApplication()` before calling any other Mobile SDK API. This can be skipped if you are using simplified initialization with the [initialize](#initialize) API.

You can use the `setApplication` method to pass the Android `Application` instance to Mobile SDK. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=set-application"/>

## setLogLevel

The logging APIs allow log messages to be tagged and filtered with the Mobile SDK log messages. This allows application developers to filter the logged messages based on the current logging mode.

Application developers can use the `setLogLevel` method to filter the log messages that are coming from the Mobile SDK.

From least to most verbose, the order of Mobile SDK logging modes is as follows:

* ERROR
* WARNING
* DEBUG
* VERBOSE / TRACE

When debugging on iOS, you can use `LogLevel.verbose` to enable all the logging messages that are coming from Mobile SDK and partner extensions. Similarly, on Android, you can use `LoggingMode.VERBOSE` to enable all the logging messages that are coming from Mobile SDK and partner extensions.

In a production application, you should use a less verbose logging mode, such as error-level logging.

By default, Mobile SDK logging mode is set to `LoggingMode.ERROR` for Android and `LogLevel.error`on iOS.

<InlineAlert variant="info" slots="text"/>

On **Android**, Mobile SDK uses the `android.util.Log` class to log messages.<br/><br/>On **iOS**, Mobile SDK uses `NSLog` to messages to Apple System Log facility.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-log-level"/>

iOS

<Tabs query="platform=ios&api=set-log-level"/>

<!--- React Native

<Tabs query="platform=react-native&api=set-log-level"/>

Flutter

<Tabs query="platform=flutter&api=set-log-level"/> --->

## setPrivacyStatus

You can use the `setPrivacyStatus` API to set the privacy status. For more information about privacy in Mobile Core, please see [Privacy and GDPR](../../../resources/privacy-and-gdpr.md#setprivacystatus) API's.

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-push-identifier"/>

iOS

<Tabs query="platform=ios&api=set-push-identifier"/>

## setSmallIconResourceID / setLargeIconResourceID

You can set the small and large icons that will be used for notifications that are created by the SDK. The small icon appears in the status bar and is the secondary image that is displayed when the user sees the complete notification in the notification center. The large icon is the primary image that is displayed when the user sees the complete notification in the notification center. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=set-icon-resource-id"/>

## setWrapperType

You can use the `setWrapperType` API to set the wrapper type when the SDK is being used in a cross-platform environment.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-wrapper-type"/>

iOS

<Tabs query="platform=ios&api=set-wrapper-type"/>

## start

<InlineAlert variant="warning" slots="text"/>

This is an Android only API and has been deprecated starting in v2.0.0 of the Mobile Core extension.
Use [registerExtensions](#registerextensions) to register desired extensions and boot up the SDK for event processing. Calling `MobileCore.start()` API is no longer required when using `MobileCore.registerExtensions()`.

The `start` API triggers Mobile Core to start event processing. This should be used after the desired set of extensions have been registered using `MobileCore.registerExtension()`  or `<EXTENSION_NAME>.registerExtension()`. A call to `start` will wait for any outstanding registrations to complete and then start event processing. You can use the callback to kickoff additional operations immediately after any operations kicked off during registration. This method should not be invoked more than once in your app.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=start"/>

## trackAction

Actions are events that occur in your application. You can use the `trackAction` method to track and measure an action. Each action has one or more corresponding metrics that are incremented each time the event occurs. For example, you can use an action to track new subscriptions, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You want to use the `trackAction` method when you want to track an occurring event. In addition to the action name, you can also send context data with each `trackAction` call.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, this method sends an Adobe Analytics action tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-action"/>

iOS

<Tabs query="platform=ios&api=track-action"/>

<!--- React Native

<Tabs query="platform=react-native&api=track-action"/>

Flutter

<Tabs query="platform=flutter&api=track-action"/> --->

## trackState

States represent screens or views in your application. The `trackState` method needs to be called every time a new state is displayed in your application. For example, this method should be called when a user navigates from the home page to the news feed. This method sends an Adobe Analytics state tracking hit with optional context data.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, the `trackState` method increments page views and an Adobe Analytics state tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-state"/>

iOS

<Tabs query="platform=ios&api=track-state"/>

<!--- React Native

<Tabs query="platform=react-native&api=track-state"/>

Flutter

<Tabs query="platform=flutter&api=track-state"/> --->

## updateConfiguration

You can update the configuration programmatically by passing configuration keys and values to override the existing configuration using `updateConfiguration` API. For more information about configuration in Mobile Core, please refer to the [Configuration API reference](configuration/api-reference.md#updateconfiguration).

## Public classes

### AdobeCallback

The `AdobeCallback` class provides the interface to receive results when the asynchronous APIs perform the requested action.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=adobe-callback"/>

### AdobeCallbackWithError

The `AdobeCallbackWithError` class provides the interface to receive results or an error when the asynchronous APIs perform the requested action.

When using this class, if the request cannot be completed within the default timeout or an unexpected error occurs, the request is stopped and the fail method is called with the corresponding `AdobeError` or `AEPError`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=adobe-callback-with-error"/>

iOS

<Tabs query="platform=ios&api=adobe-callback-with-error"/>

### AdobeError

The `AdobeError` class shows the errors that can be passed to an `AdobeCallbackWithError`:

* `UNEXPECTED_ERROR` - An unexpected error occurred.
* `CALLBACK_TIMEOUT` - The timeout was met.
* `CALLBACK_NULL` - The provided callback function is null.
* `EXTENSION_NOT_INITIALIZED` - The extension is not initialized.
* `SERVER_ERROR` - There was a server error.
* `NETWORK_ERROR` - There was a network error.
* `INVALID_REQUEST` - There was an invalid request.
* `INVALID_RESPONSE` - There was an invalid response.

### AEPError

The `AEPError` enum shows the errors that can be passed to a completion handler callback from any API which uses one:

* `case unexpected` - An unexpected error occured.
* `case callbackTimeout` - The timeout was met.
* `case callbackNil` -  The provided callback function is nil.
* `case none` -  There was no error, used when an error return type is required but there was no error.
* `case serverError` - There was a server error.
* `case networkError` - There was a network error.
* `case invalidRequest` - There was an invalid request.
* `case invalidResponse` - There was an invalid response.
* `case errorExtensionNotInitialized` - The extension is not initialized.

### InitOptions 

The InitOptions class defines the options for initializing the AEP SDK. It currently supports the following options:

* `appID` – The App ID used to retrieve remote configurations from Adobe servers.
* `filePath` – The location of a configuration file, either stored locally or within the application’s assets.
* `lifecycleAutomaticTrackingEnabled` – A boolean flag to enable or disable automatic lifecycle tracking (default: true).
* `lifecycleAdditionalContextData` – A map containing extra context data to be sent with the lifecycle start event.
* `appGroup` (iOS only) – A string representing the App Group identifier for sharing data between app extensions and the main application.

For usage details, refer to the InitOptions class on GitHub for [Android](https://github.com/adobe/aepsdk-core-android/blob/main/code/core/src/main/java/com/adobe/marketing/mobile/InitOptions.kt) and [iOS](https://github.com/adobe/aepsdk-core-ios/blob/main/AEPCore/Sources/core/InitOptions.swift).

## Additional information

To learn what context data is, please read the [documentation on context data](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html).
