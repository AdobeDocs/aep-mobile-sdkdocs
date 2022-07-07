import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import GetUserAttributesAndroid from './tabs/api-reference/get-user-attributes/android.md'
import GetUserAttributesIosAEP from './tabs/api-reference/get-user-attributes/ios-aep.md'
import GetUserAttributesIosACP from './tabs/api-reference/get-user-attributes/ios-acp.md'
import RegisterExtensionAndroid from './tabs/api-reference/register-extension/android.md'
import RegisterExtensionIosAEP from './tabs/api-reference/register-extension/ios-aep.md'
import RegisterExtensionIosACP from './tabs/api-reference/register-extension/ios-acp.md'
import RemoveUserAttributeAndroid from './tabs/api-reference/remove-user-attribute/android.md'
import RemoveUserAttributeIosAEP from './tabs/api-reference/remove-user-attribute/ios-aep.md'
import RemoveUserAttributeIosACP from './tabs/api-reference/remove-user-attribute/ios-acp.md'
import RemoveUserAttributesAndroid from './tabs/api-reference/remove-user-attributes/android.md'
import RemoveUserAttributesIosAEP from './tabs/api-reference/remove-user-attributes/ios-aep.md'
import RemoveUserAttributesIosACP from './tabs/api-reference/remove-user-attributes/ios-acp.md'
import UpdateUserAttributeAndroid from './tabs/api-reference/update-user-attribute/android.md'
import UpdateUserAttributeIosAEP from './tabs/api-reference/update-user-attribute/ios-aep.md'
import UpdateUserAttributeIosACP from './tabs/api-reference/update-user-attribute/ios-acp.md'
import UpdateUserAttributesAndroid from './tabs/api-reference/update-user-attributes/android.md'
import UpdateUserAttributesIosAEP from './tabs/api-reference/update-user-attributes/ios-aep.md'
import UpdateUserAttributesIosACP from './tabs/api-reference/update-user-attributes/ios-acp.md'

# API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Profile extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

## getUserAttributes

The `getUserAttributes()` API gets the user profile attributes with the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<GetUserAttributesAndroid/>

iOS (AEP 3.x)

<GetUserAttributesIosAEP/>

iOS (ACP 2.x)

<GetUserAttributesIosACP/>

## registerExtension

Registers the Profile extension with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<RegisterExtensionAndroid/>

iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

iOS (ACP 2.x)

<RegisterExtensionIosACP/>

## removeUserAttribute

Removes the user profile attribute for the given key.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<RemoveUserAttributeAndroid/>

iOS (AEP 3.x)

<RemoveUserAttributeIosAEP/>

iOS (ACP 2.x)

<RemoveUserAttributeIosACP/>

## removeUserAttributes

Removes the user profile attributes for the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<RemoveUserAttributesAndroid/>

iOS (AEP 3.x)

<RemoveUserAttributesIosAEP/>

iOS (ACP 2.x)

<RemoveUserAttributesIosACP/>

## updateUserAttribute

Sets the user profile attributes key and value and allows you to create or update a user profile attribute.

Remember the following information:

* If the attribute does not exist, it will be created.
* If the attribute exists, the value will be updated.
* A null attribute value removes the attribute.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<UpdateUserAttributeAndroid/>

iOS (AEP 3.x)

<UpdateUserAttributeIosAEP/>

iOS (ACP 2.x)

<UpdateUserAttributeIosACP/>

## updateUserAttributes

Sets the user profile attributes key and value.

Allows you to create/update a batch of user profile attributes:

* String, Integer, Boolean, Double, Array, Map are valid type of user profile attributes.
* Custom objects cannot be saved as a `UserProfile` attribute.
* If the attribute does not exist, it is created.
* If the attribute already exists, the value is updated.
* A null attribute value will remove the attribute.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<UpdateUserAttributesAndroid/>

iOS (AEP 3.x)

<UpdateUserAttributesIosAEP/>

iOS (ACP 2.x)

<UpdateUserAttributesIosACP/>