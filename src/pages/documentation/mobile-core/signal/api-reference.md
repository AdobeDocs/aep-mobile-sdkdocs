import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import RegisterExtensionIosACP from './tabs/api-reference/register-extension/ios-acp.md'
import RegisterExtensionIosAEP from './tabs/api-reference/register-extension/ios-aep.md'
import RegisterExtensionAndroid from './tabs/api-reference/register-extension/android.md'

# Signal API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Signal extension that is registered with the Mobile Core extension.

To get the version of the Signal extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

## registerExtension

Registers the Signal extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<RegisterExtensionAndroid/>

iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

iOS (ACP 2.x)

<RegisterExtensionIosACP/>

## CollectPII API

The Signal extension can be used to handle `collectPII` rules. For more information, see the [collectPII](../api-reference.md#collectpii) API.

