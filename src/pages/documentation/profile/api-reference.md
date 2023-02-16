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

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>

## removeUserAttribute

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

<Tabs query="platform=android&api=remove-user-attributes"/>

## updateUserAttribute

Deprecated as of 2.0.0. Please use the [updateeUserAttributes](#updateuserattributes) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=update-user-attribute"/>

## updateUserAttributes

Sets the user profile attributes key and value.

Allows you to create/update a batch of user profile attributes:

* String, Integer, Boolean, Double, Array, Map are valid type of user profile attributes.
* Custom objects cannot be saved as a `UserProfile` attribute.
* If the attribute does not exist, it is created.
* If the attribute already exists, the value is updated.
* A null attribute value will remove the attribute.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-user-attributes"/>

iOS

<Tabs query="platform=android&api=update-user-attributes"/>
