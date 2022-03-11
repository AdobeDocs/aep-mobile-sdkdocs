import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import ExtensionVersionReactNative from './tabs/api-reference/extension-version/react-native.md'
import ExtensionVersionFlutter from './tabs/api-reference/extension-version/flutter.md'
import ExtensionVersionCordova from './tabs/api-reference/extension-version/cordova.md'
import ExtensionVersionUnity from './tabs/api-reference/extension-version/unity.md'
import ExtensionVersionXamarin from './tabs/api-reference/extension-version/xamarin.md'
import GetVisitorProfileAndroid from './tabs/api-reference/get-visitor-profile/android.md'
import GetVisitorProfileIosAEP from './tabs/api-reference/get-visitor-profile/ios-aep.md'
import GetVisitorProfileIosACP from './tabs/api-reference/get-visitor-profile/ios-acp.md'
import GetVisitorProfileReactNative from './tabs/api-reference/get-visitor-profile/react-native.md'
import RegisterExtensionAndroid from './tabs/api-reference/register-extension/android.md'
import RegisterExtensionIos from './tabs/api-reference/register-extension/ios.md'
import RegisterExtensionReactNative from './tabs/api-reference/register-extension/react-native.md'
import ResetAndroid from './tabs/api-reference/reset/android.md'
import ResetIosAEP from './tabs/api-reference/reset/ios-aep.md'
import ResetIosACP from './tabs/api-reference/reset/ios-acp.md'
import ResetReactNative from './tabs/api-reference/reset/react-native.md'
import SignalWithDataAndroid from './tabs/api-reference/signal-with-data/android.md'
import SignalWithDataIosAEP from './tabs/api-reference/signal-with-data/ios-aep.md'
import SignalWithDataIosACP from './tabs/api-reference/signal-with-data/ios-acp.md'
import SignalWithDataReactNative from './tabs/api-reference/signal-with-data/react-native.md'

# Audience Manager API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Audience extension that is registered with the Mobile Core extension.

To get the version of the Audience extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

#### Android

<ExtensionVersionAndroid/>

#### iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

#### iOS (ACP 2.x)

<ExtensionVersionIosACP/>

#### React Native

<ExtensionVersionReactNative/>

#### Flutter

<ExtensionVersionFlutter/>

#### Cordova

<ExtensionVersionCordova/>

#### Unity

<ExtensionVersionUnity/>

#### Xamarin

<ExtensionVersionXamarin/>

## getVisitorProfile

This API returns the most recently obtained visitor profile. The visitor profile is saved in the SDK's local storage for access across multiple launches of your app. If no audience signal has been sent before, when this API is called, a null value is returned.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<GetVisitorProfileAndroid/>

#### iOS (AEP 3.x)

<GetVisitorProfileIosAEP/>

#### iOS (ACP 2.x)

<GetVisitorProfileIosACP/>

#### React Native

<GetVisitorProfileReactNative/>

## registerExtension

This API registers an extension class that was derived from `ACPExtension` with a unique name. This call validates the parameters to ensure that the name is not empty, the name is unique, and that the parent class is `ACPExtension`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

#### Android

<RegisterExtensionAndroid/>

#### iOS

<RegisterExtensionIos/>

#### React Native

<RegisterExtensionReactNative/>

## reset

This API helps you reset the Audience Manager UUID and purges the current visitor profile.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID, the DPID, the DPUUID and other Audience Manager identifiers, see [Index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html?lang=en).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<ResetAndroid/>

#### iOS (AEP 3.x)

<ResetIosAEP/>

#### iOS (ACP 2.x)

<ResetIosACP/>

#### React Native

<ResetReactNative/>

## signalWithData

This method is used to send a signal with traits to Audience Manager and get the matching segments returned in a block callback. Audience Manager sends the UUID in response to an initial signal call. The UUID is persisted on local SDK storage and is sent by the SDK to Audience Manager in all subsequent signal requests.

If you are using the Experience Cloud ID (ECID) Service (formerly MCID), the ECID and other custom identifiers for the same visitor are sent with each signal request. The visitor profile that is returned by Audience Manager is saved in SDK local storage and is updated with subsequent signal calls.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID and other Audience Manager identifiers, see the [index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html?lang=en).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<SignalWithDataAndroid/>

#### iOS (AEP 3.x)

<SignalWithDataIosAEP/>

#### iOS (ACP 2.x)

<SignalWithDataIosACP/>

#### React Native

<SignalWithDataReactNative/>
