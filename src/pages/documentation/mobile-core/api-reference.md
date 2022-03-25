import CollectLaunchInfoIosACP from './tabs/index/collect-launch-info/ios-acp.md'
import CollectLaunchInfoIosAEP from './tabs/index/collect-launch-info/ios-aep.md'
import CollectLaunchInfoAndroid from './tabs/index/collect-launch-info/android.md'
import CollectPiiIosACP from './tabs/index/collect-pii/ios-acp.md'
import CollectPiiIosAEP from './tabs/index/collect-pii/ios-aep.md'
import CollectPiiAndroid from './tabs/index/collect-pii/android.md'
import CollectPiiReactNative from './tabs/index/collect-pii/react-native.md'
import GetApplicationXamarin from './tabs/index/get-application/xamarin.md'
import GetApplicationAndroid from './tabs/index/get-application/android.md'
import GetLogLevelIosACP from './tabs/index/get-log-level/ios-acp.md'
import GetLogLevelIosAEP from './tabs/index/get-log-level/ios-aep.md'
import GetLogLevelAndroid from './tabs/index/get-log-level/android.md'
import GetLogLevelReactNative from './tabs/index/get-log-level/react-native.md'
import GetLogLevelUnity from './tabs/index/get-log-level/unity.md'
import GetLogLevelXamarin from './tabs/index/get-log-level/xamarin.md'
import GetSdkIdentitiesIosACP from './tabs/index/get-sdk-identities/ios-acp.md'
import GetSdkIdentitiesIosAEP from './tabs/index/get-sdk-identities/ios-aep.md'
import GetSdkIdentitiesAndroid from './tabs/index/get-sdk-identities/android.md'
import LogIosACP from './tabs/index/log/ios-acp.md'
import LogIosAEP from './tabs/index/log/ios-aep.md'
import LogAndroid from './tabs/index/log/android.md'
import LogReactNative from './tabs/index/log/react-native.md'
import LogXamarin from './tabs/index/log/xamarin.md'
import PublicClassesIosACP from './tabs/index/public-classes/ios-acp.md'
import PublicClassesIosAEP from './tabs/index/public-classes/ios-aep.md'
import PublicClassesAndroid from './tabs/index/public-classes/android.md'
import PublicClassesXamarin from './tabs/index/public-classes/xamarin.md'
import RegisterExtensionIosACP from './tabs/index/register-extension/ios-acp.md'
import RegisterExtensionIosAEP from './tabs/index/register-extension/ios-aep.md'
import RegisterExtensionAndroid from './tabs/index/register-extension/android.md'
import RegisterExtensionCordova from './tabs/index/register-extension/cordova.md'
import RegisterExtensionFlutter from './tabs/index/register-extension/flutter.md'
import RegisterExtensionReactNative from './tabs/index/register-extension/react-native.md'
import RegisterExtensionUnity from './tabs/index/register-extension/unity.md'
import RegisterExtensionXamarin from './tabs/index/register-extension/xamarin.md'
import RegisterUrlHandlerIosACP from './tabs/index/register-url-handler/ios-acp.md'
import ResetIdentitiesIosAEP from './tabs/index/reset-identities/ios-aep.md'
import ResetIdentitiesAndroid from './tabs/index/reset-identities/android.md'
import SetAppGroupIosACP from './tabs/index/set-app-group/ios-acp.md'
import SetAppGroupIosAEP from './tabs/index/set-app-group/ios-aep.md'
import SetAppGroupXamarin from './tabs/index/set-app-group/xamarin.md'
import SetApplicationXamarin from './tabs/index/set-application/xamarin.md'
import SetApplicationAndroid from './tabs/index/set-application/android.md'
import SetIconResourceIdXamarin from './tabs/index/set-icon-resource-id/xamarin.md'
import SetIconResourceIdAndroid from './tabs/index/set-icon-resource-id/android.md'
import SetLogLevelIosACP from './tabs/index/set-log-level/ios-acp.md'
import SetLogLevelIosAEP from './tabs/index/set-log-level/ios-aep.md'
import SetLogLevelAndroid from './tabs/index/set-log-level/android.md'
import SetLogLevelCordova from './tabs/index/set-log-level/cordova.md'
import SetLogLevelFlutter from './tabs/index/set-log-level/flutter.md'
import SetLogLevelReactNative from './tabs/index/set-log-level/react-native.md'
import SetLogLevelUnity from './tabs/index/set-log-level/unity.md'
import SetLogLevelXamarin from './tabs/index/set-log-level/xamarin.md'
import SetPushIdentifierIosACP from './tabs/index/set-push-identifier/ios-acp.md'
import SetPushIdentifierIosAEP from './tabs/index/set-push-identifier/ios-aep.md'
import SetPushIdentifierAndroid from './tabs/index/set-push-identifier/android.md'
import TrackActionIosACP from './tabs/index/track-action/ios-acp.md'
import TrackActionIosAEP from './tabs/index/track-action/ios-aep.md'
import TrackActionAndroid from './tabs/index/track-action/android.md'
import TrackActionCordova from './tabs/index/track-action/cordova.md'
import TrackActionFlutter from './tabs/index/track-action/flutter.md'
import TrackActionReactNative from './tabs/index/track-action/react-native.md'
import TrackActionUnity from './tabs/index/track-action/unity.md'
import TrackActionXamarin from './tabs/index/track-action/xamarin.md'
import TrackStateIosACP from './tabs/index/track-state/ios-acp.md'
import TrackStateIosAEP from './tabs/index/track-state/ios-aep.md'
import TrackStateAndroid from './tabs/index/track-state/android.md'
import TrackStateCordova from './tabs/index/track-state/cordova.md'
import TrackStateFlutter from './tabs/index/track-state/flutter.md'
import TrackStateReactNative from './tabs/index/track-state/react-native.md'
import TrackStateUnity from './tabs/index/track-state/unity.md'
import TrackStateXamarin from './tabs/index/track-state/xamarin.md'

# Mobile Core API reference

## collectLaunchInfo

You can provide the user information to the SDK from various launch points in your application.

<InlineAlert variant="info" slots="text"/>

If the Adobe Analytics extension is enabled in your SDK, collecting this launch data results in an Analytics request being sent. Other extensions in the SDK might use the collected data, for example, as a rule condition for an In-App Message.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<CollectLaunchInfoAndroid/>

iOS (AEP 3.x)

<CollectLaunchInfoIosAEP/>

iOS (ACP 2.x)

<CollectLaunchInfoIosACP/>

## collectPii

The `collectPii` method lets the SDK to collect sensitive or personally identifiable information (PII).

<InlineAlert variant="warning" slots="text"/>

Although this method enables the collection of sensitive data, no data is sent to any Adobe or other third-party endpoints. To send the data to an endpoint, use a PII type postback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<CollectPiiAndroid/>

iOS (AEP 3.x)

<CollectPiiIosAEP/>

iOS (ACP 2.x)

<CollectPiiIosACP/>

React Native

<CollectPiiReactNative/>

## getApplication

You can use the `getApplication` method to get the previously set Android `Application` instance. The `Application` instance is mainly provided for third-party extensions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<GetApplicationAndroid/>

Xamarin

<GetApplicationXamarin/>

## getLogLevel

This API gets the current log level being used in the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="6"/>

Android

<GetLogLevelAndroid/>

iOS (AEP 3.x)

<GetLogLevelIosAEP/>

iOS (ACP 2.x)

<GetLogLevelIosACP/>

React Native

<GetLogLevelReactNative/>

Unity

<GetLogLevelUnity/>

Xamarin

<GetLogLevelXamarin/>

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

You must call the API below and retrieve identities stored in the SDK, **before** the user opts out.<br/><br/>This API does **not** include the identities stored in the Edge Identity extension. To retrieve the identities from the Edge Identity extension, use [getIdentities](https://github.com/Adobe-Marketing-Cloud/aep-sdks-documentation/tree/09dd71f04d377c356dd24aac9b89ed0fffc1cf63/using-mobile-extensions/adobe-edge-identity/adobe-edge-identity-api-reference.md#getidentities). (FIX LINK)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<GetSdkIdentitiesAndroid/>

iOS (AEP 3.x)

<GetSdkIdentitiesIosAEP/>

iOS (ACP 2.x)

<GetSdkIdentitiesIosACP/>

## log

This is the API used to log from the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

Android

<LogAndroid/>

iOS (AEP 3.x)

<LogIosAEP/>

iOS (ACP 2.x)

<LogIosACP/>

React Native

<LogReactNative/>

Xamarin

<LogXamarin/>

## registerExtension(s)

Extensions are registered with Mobile Core so that they can dispatch and listen for events.

<InlineAlert variant="warning" slots="text"/>

Extension registration is **mandatory**. Attempting to make extension-specific API calls without registering the extension will lead to undefined behavior.

The following code snippets demonstrate how you can import and register the Mobile Core and Profile extensions. You can also see, for reference, how Identity, Lifecycle, Signal, Profile, and other extensions are imported and registered.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<RegisterExtensionAndroid/>

iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

iOS (ACP 2.x)

<RegisterExtensionIosACP/>

React Native

<RegisterExtensionReactNative/>

Flutter

<RegisterExtensionFlutter/>

Cordova

<RegisterExtensionCordova/>

Unity

<RegisterExtensionUnity/>

Xamarin

<RegisterExtensionXamarin/>

## registerURLHandler 

FIX LINK

Mobile SDK allows you to add a callback function that is triggered before the [`open url`](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/mobile-core/rules-engine#consequence-types) action occurs. If the callback function returns **Yes**, the SDK does not complete the `open url` action. If the callback function returns **No**, the SDK completes the `open url` action.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS (ACP 2.x)

<RegisterUrlHandlerIosACP/>

## resetIdentities

The `resetIdentities` method requests that each extension resets the identities it owns and each extension responds to this request uniquely. For more details, check the `resetIdentities` API reference on each of the extensions you use.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<ResetIdentitiesAndroid/>

iOS (AEP 3.x)

<ResetIdentitiesIosAEP/>

## setAdvertisingIdentifier

The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via [Signals](signals/index.md), and is removed at uninstall.

For more information about identity in Mobile Core, please read the documentation on the [identity APIs](identity/api-reference.md#setadvertisingidentifier).

## setAppGroup

You can use the `setAppGroup` method to set the app group, which is used to share user defaults and files among the containing app and the extension apps. Please note that this method is **only** supported on iOS versions of Mobile Core.

<InlineAlert variant="info" slots="text"/>

This API _must_ be called in `AppDidFinishLaunching` and before any other interactions with the Adobe Experience SDK have happened. Only the first call to this function will have any effect.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

iOS (AEP 3.x)

<SetAppGroupIosAEP/>

iOS (ACP 2.x)

<SetAppGroupIosACP/>

Xamarin

<SetAppGroupXamarin/>

## setApplication

When building Android applications, the `android.app.Application` reference must be passed to Mobile SDK, which allows Mobile SDK to access the `android.app.Context` and monitor the lifecycle of the Android application. 

<InlineAlert variant="warning" slots="text"/>

Android applications must call `MobileCore.setApplication()` before calling any other Mobile SDK API.

You can use the `setApplication` method to pass the Android `Application` instance to Mobile SDK. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<SetApplicationAndroid/>

Xamarin

<SetApplicationXamarin/>

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

<ul><li>On **Android**, Mobile SDK uses the `android.util.Log` class to log messages.</li><li>On **iOS**, Mobile SDK uses `NSLog` to messages to Apple System Log facility.</li></ul>

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<SetLogLevelAndroid/>

iOS (AEP 3.x)

<SetLogLevelIosAEP/>

iOS (ACP 2.x)

<SetLogLevelIosACP/>

React Native

<SetLogLevelReactNative/>

Flutter

<SetLogLevelFlutter/>

Cordova

<SetLogLevelCordova/>

Unity

<SetLogLevelUnity/>

Xamarin

<SetLogLevelXamarin/>

## setPushIdentifier

This API sets the device token for push notifications in the SDK. If the current SDK privacy status is `optedout`, the push identifier is not set.

<InlineAlert variant="info" slots="text"/>

You should call `setPushIdentifier` on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, `null`/`nil` should be passed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<SetPushIdentifierAndroid/>

iOS (AEP 3.x)

<SetPushIdentifierIosAEP/>

iOS (ACP 2.x)

<SetPushIdentifierIosACP/>

## setSmallIconResourceID / setLargeIconResourceID 

You can set the small and large icons that will be used for notifications that are created by the SDK. The small icon appears in the status bar and is the secondary image that is displayed when the user sees the complete notification in the notification center. The large icon is the primary image that is displayed when the user sees the complete notification in the notification center. Please note that this method is **only** supported on Android versions of Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<SetIconResourceIdAndroid/>

Xamarin

<SetIconResourceIdXamarin/>

## trackAction

Actions are events that occur in your application. You can use the `trackAction` method to track and measure an action. Each action has one or more corresponding metrics that are incremented each time the event occurs. For example, you can use an action to track new subscriptions, every time an article is viewed, or every time a level is completed.

<InlineAlert variant="warning" slots="text"/>

You want to use the `trackAction` method when you want to track an occurring event. In addition to the action name, you can also send context data with each `trackAction` call.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, this method sends an Adobe Analytics action tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<TrackActionAndroid/>

iOS (AEP 3.x)

<TrackActionIosAEP/>

iOS (ACP 2.x)

<TrackActionIosACP/>

React Native

<TrackActionReactNative/>

Flutter

<TrackActionFlutter/>

Unity

<TrackActionUnity/>

Cordova

<TrackActionCordova/>

Xamarin

<TrackActionXamarin/>

## trackState

States represent screens or views in your application. The `trackState` method needs to be called every time a new state is displayed in your application. For example, this method should be called when a user navigates from the home page to the news feed. This method sends an Adobe Analytics state tracking hit with optional context data.

<InlineAlert variant="info" slots="text"/>

If you installed and configured the Adobe Analytics extension, the `trackState` method increments page views and an Adobe Analytics state tracking hit with the provided optional context data.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<TrackStateAndroid/>

iOS (AEP 3.x)

<TrackStateIosAEP/>

iOS (ACP 2.x)

<TrackStateIosACP/>

React Native

<TrackStateReactNative/>

Flutter

<TrackStateFlutter/>

Cordova

<TrackStateCordova/>

Unity

<TrackStateUnity/>

## Public classes

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<PublicClassAndroid/>

iOS (AEP 3.x)

<PublicClassIosAEP/>

iOS (ACP 2.x)

<PublicClassIosACP/>

Xamarin

<PublicClassXamarin/>

## Additional information

To learn what context data is, please read the [documentation on context data](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/contextdata.html?lang=en).

