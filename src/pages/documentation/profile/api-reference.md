import Tabs from './tabs/api-reference.md'

# API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Profile extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/> --->

## getUserAttributes

The `getUserAttributes()` API gets the user profile attributes with the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-user-attributes"/>

iOS

<Tabs query="platform=ios&api=get-user-attributes"/>

## registerExtension

<InlineAlert variant="warning" slots="text"/>

This API is only available in Android and is deprecated starting in version 2.0.0 of the UserProfile extension. Use [`MobileCore.registerExtensions()`](../api-reference.md#registerextensions) API instead.

Registers the Profile extension with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## removeUserAttribute

<InlineAlert variant="warning" slots="text"/>

This API is only available in Android and is deprecated starting in version 2.0.0 of the UserProfile extension. Use [`removeUserAttributes`](#removeuserattributes) API instead.

Deprecated as of 2.0.0. Please use the [removeUserAttributes](#removeuserattributes) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=remove-user-attribute"/>

## removeUserAttributes

Removes the user profile attributes for the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=remove-user-attributes"/>

iOS

<Tabs query="platform=ios&api=remove-user-attributes"/>

## updateUserAttribute

<InlineAlert variant="warning" slots="text"/>

This API is only available in Android and is deprecated starting in version 2.0.0 of the UserProfile extension. Use [`updateUserAttributes`](#updateuserattributes) API instead.

Sets the user profile attributes key and value and allows you to create or update a user profile attribute.

Remember the following information:

- If the attribute does not exist, it will be created.
- If the attribute exists, the value will be updated.
- A null attribute value removes the attribute.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=update-user-attribute"/>

## updateUserAttributes

Sets the user profile attributes key and value.

Allows you to create/update a batch of user profile attributes:

- String, Integer, Boolean, Double, Array, Map are valid type of user profile attributes.
- Custom objects cannot be saved as a `UserProfile` attribute.
- If the attribute does not exist, it is created.
- If the attribute already exists, the value is updated.
- A null attribute value will remove the attribute.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-user-attributes"/>

iOS

<Tabs query="platform=ios&api=update-user-attributes"/>
