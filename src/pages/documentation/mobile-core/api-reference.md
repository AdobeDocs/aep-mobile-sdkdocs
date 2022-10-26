import Tabs from './tabs/api-reference.md'

# Mobile Core API reference

## collectLaunchInfo

You can provide the user information to the SDK from various launch points in your application.

<InlineAlert variant="info" slots="text"/>

If the Adobe Analytics extension is enabled in your SDK, collecting this launch data results in an Analytics request being sent. Other extensions in the SDK might use the collected data, for example, as a rule condition for an In-App Message.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=collect-launch-info"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=collect-launch-info"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=collect-launch-info"/>

## collectPii

The `collectPii` method lets the SDK to collect sensitive or personally identifiable information (PII).

<InlineAlert variant="warning" slots="text"/>

Although this method enables the collection of sensitive data, no data is sent to any Adobe or other third-party endpoints. To send the data to an endpoint, use a PII type postback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=collect-pii"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=collect-pii"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=collect-pii"/>

React Native

<Tabs query="platform=react-native&api=collect-pii"/>

## getApplication

You can use the `getApplication` method to get the previously set Android `Application` instance. The `Application` instance is mainly provided for third-party extensions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-application"/>

Xamarin

<Tabs query="platform=xamarin&api=get-application"/>

## getLogLevel

This API gets the current log level being used in the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="6"/>

Android

<Tabs query="platform=android&api=get-log-level"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-log-level"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-log-level"/>

React Native

<Tabs query="platform=react-native&api=get-log-level"/>

Unity

<Tabs query="platform=unity&api=get-log-level"/>

Xamarin

<Tabs query="platform=xamarin&api=get-log-level"/>

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

You must call the API below and retrieve identities stored in the SDK, **before** the user opts out.<br/><br/>This API does **not** include the identities stored in the Edge Identity extension. To retrieve the identities from the Edge Identity extension, use [getIdentities](../identity-for-edge-network/api-reference.md#getidentities).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=get-sdk-identities"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-sdk-identities"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=get-sdk-identities"/>

## log

This is the API used to log from the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

Android

<Tabs query="platform=android&api=log"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=log"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=log"/>

React Native

<Tabs query="platform=react-native&api=log"/>

Xamarin

<Tabs query="platform=xamarin&api=log"/>

## registerExtension(s)

Extensions are registered with Mobile Core so that they can dispatch and listen for events.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

The following code snippets demonstrate how you can import and register the Mobile Core and Profile extensions. You can also see, for reference, how Identity, Lifecycle, Signal, Profile, and other extensions are imported and registered.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=register-extension"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=register-extension"/>

React Native

<Tabs query="platform=react-native&api=register-extension"/>

Flutter

<Tabs query="platform=flutter&api=register-extension"/>

Cordova

<Tabs query="platform=cordova&api=register-extension"/>

Unity

<Tabs query="platform=unity&api=register-extension"/>

Xamarin

<Tabs query="platform=xamarin&api=register-extension"/>

## registerURLHandler 

Mobile SDK allows you to add a callback function that is triggered before the [`open url`](./rules-engine/index.md#consequence-types) action occurs. If the callback function returns **Yes**, the SDK does not complete the `open url` action. If the callback function returns **No**, the SDK completes the `open url` action.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=register-url-handler"/>

## resetIdentities

The `resetIdentities` method requests that each extension resets the identities it owns and each extension responds to this request uniquely. For more details, check the `resetIdentities` API reference on each of the extensions you use.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset-identities"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=reset-identities"/>

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via [Signals](signals/index.md), and is removed at uninstall.

For more information about identity in Mobile Core, please read the documentation on the [identity APIs](identity/api-reference.md#setadvertisingidentifier).

## setAppGroup

You can use the `setAppGroup` method to set the app group, which is used to share user defaults and files among the containing app and the extension apps. Please note that this method is **only** supported on iOS versions of Mobile Core.

<InlineAlert variant="info" slots="text"/>

This API _must_ be called in `AppDidFinishLaunching` and before any other interactions with the Adobe Experience SDK have happened. Only the first call to this function will have any effect.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=set-app-group"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=set-app-group"/>

Xamarin

<Tabs query="platform=xamarin&api=set-app-group"/>

## setApplication

When building Android applications, the `android.app.Application` reference must be passed to Mobile SDK, which allows Mobile SDK to access the `android.app.Context` and monitor the lifecycle of the Android application. 

<InlineAlert variant="warning" slots="text"/>

Android applications must call `MobileCore.setApplication()` before calling any other Mobile SDK API.

You can use the `setApplication` method to pass the Android `Application` instance to Mobile SDK. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-application"/>

Xamarin

<Tabs query="platform=xamarin&api=set-application"/>

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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=set-log-level"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=set-log-level"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=set-log-level"/>

React Native

<Tabs query="platform=react-native&api=set-log-level"/>

Flutter

<Tabs query="platform=flutter&api=set-log-level"/>

Cordova

<Tabs query="platform=cordova&api=set-log-level"/>

Unity

<Tabs query="platform=unity&api=set-log-level"/>

Xamarin

<Tabs query="platform=xamarin&api=set-log-level"/>

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=set-push-identifier"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=set-push-identifier"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=set-push-identifier"/>

## setSmallIconResourceID / setLargeIconResourceID 

You can set the small and large icons that will be used for notifications that are created by the SDK. The small icon appears in the status bar and is the secondary image that is displayed when the user sees the complete notification in the notification center. The large icon is the primary image that is displayed when the user sees the complete notification in the notification center. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-icon-resource-id"/>

Xamarin

<Tabs query="platform=xamarin&api=set-icon-resource-id"/>

## trackAction

Actions are events that occur in your application. You can use the `trackAction` method to track and measure an action. Each action has one or more corresponding metrics that are incremented each time the event occurs. For example, you can use an action to track new subscriptions, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You want to use the `trackAction` method when you want to track an occurring event. In addition to the action name, you can also send context data with each `trackAction` call.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, this method sends an Adobe Analytics action tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=track-action"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=track-action"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=track-action"/>

React Native

<Tabs query="platform=react-native&api=track-action"/>

Flutter

<Tabs query="platform=flutter&api=track-action"/>

Cordova

<Tabs query="platform=cordova&api=track-action"/>

Unity

<Tabs query="platform=unity&api=track-action"/>

Xamarin

<Tabs query="platform=xamarin&api=track-action"/>

## trackState

States represent screens or views in your application. The `trackState` method needs to be called every time a new state is displayed in your application. For example, this method should be called when a user navigates from the home page to the news feed. This method sends an Adobe Analytics state tracking hit with optional context data.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, the `trackState` method increments page views and an Adobe Analytics state tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<Tabs query="platform=android&api=track-state"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=track-state"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=track-state"/>

React Native

<Tabs query="platform=react-native&api=track-state"/>

Flutter

<Tabs query="platform=flutter&api=track-state"/>

Cordova

<Tabs query="platform=cordova&api=track-state"/>

Unity

<Tabs query="platform=unity&api=track-state"/>

Xamarin

<Tabs query="platform=xamarin&api=track-state"/>

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=public-classes"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=public-classes"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=public-classes"/>

Xamarin

<Tabs query="platform=xamarin&api=public-classes"/>

## Additional information

To learn what context data is, please read the [documentation on context data](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html).

