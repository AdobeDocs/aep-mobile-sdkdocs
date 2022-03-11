import ExtensionVersionReactNative from './tabs/api-reference/extension-version/react-native.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import RegisterExtensionReactNative from './tabs/api-reference/register-extension/react-native.md'
import RegisterExtensionIosAEP from './tabs/api-reference/register-extension/ios-aep.md'
import RegisterExtensionIosACP from './tabs/api-reference/register-extension/ios-acp.md'
import RegisterExtensionAndroid from './tabs/api-reference/register-extension/android.md'
import ResetLinkageFieldsReactNative from './tabs/api-reference/reset-linkage-fields/react-native.md'
import ResetLinkageFieldsIosAEP from './tabs/api-reference/reset-linkage-fields/ios-aep.md'
import ResetLinkageFieldsIosACP from './tabs/api-reference/reset-linkage-fields/ios-acp.md'
import ResetLinkageFieldsAndroid from './tabs/api-reference/reset-linkage-fields/android.md'
import SetLinkageFieldsReactNative from './tabs/api-reference/set-linkage-fields/react-native.md'
import SetLinkageFieldsIosAEP from './tabs/api-reference/set-linkage-fields/ios-aep.md'
import SetLinkageFieldsIosACP from './tabs/api-reference/set-linkage-fields/ios-acp.md'
import SetLinkageFieldsAndroid from './tabs/api-reference/set-linkage-fields/android.md'

# Adobe Campaign Standard API reference

## extensionVersion

Returns the running version of the Campaign Standard extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<ExtensionVersionAndroid/>

#### iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

#### iOS (ACP 1.x)

<ExtensionVersionIosACP/>

#### React Native

<ExtensionVersionReactNative/>

## registerExtension

Registers the Campaign Standard extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<RegisterExtensionAndroid/>

#### iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

#### iOS (ACP 1.x)

<RegisterExtensionIosACP/>

#### React Native

<RegisterExtensionReactNative/>

## resetLinkageFields

Clears previously stored linkage fields in the mobile SDK and triggers a Campaign rules download request to the configured Campaign server.

This method unregisters any previously registered rules with the Rules Engine and clears cached rules from the most recent rules download.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<ResetLinkageFieldsAndroid/>

#### iOS (AEP 3.x)

<ResetLinkageFieldsIosAEP/>

#### iOS (ACP 1.x)

<ResetLinkageFieldsIosACP/>

#### React Native

<ResetLinkageFieldsReactNative/>

## setLinkageFields

Sets the Campaign linkage fields (CRM IDs) in the mobile SDK to be used for downloading personalized messages from Campaign.

The set linkage fields are stored as a base64 encoded JSON string in memory and they are sent in a custom HTTP header `X-InApp-Auth`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

#### Android

<SetLinkageFieldsAndroid/>

#### iOS (AEP 3.x)

<SetLinkageFieldsIosAEP/>

#### iOS (ACP 1.x)

<SetLinkageFieldsIosACP/>

#### React Native

<SetLinkageFieldsReactNative/>

