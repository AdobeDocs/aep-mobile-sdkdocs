import Tabs from './tabs/api-reference.md'

# API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Profile extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios-aep&api=extension-version"/>

React Native

<Tabs query="platform=react-native&api=extension-version"/>

## getUserAttributes

The `getUserAttributes()` API gets the user profile attributes with the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=get-user-attributes"/>

iOS

<Tabs query="platform=ios-aep&api=get-user-attributes"/>

React Native

<Tabs query="platform=react-native&api=get-user-attributes"/>

## registerExtension

Registers the Profile extension with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios-aep&api=register-extension"/>

React Native

<Tabs query="platform=react-native&api=register-extension"/>

## removeUserAttribute

Removes the user profile attribute for the given key.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=remove-user-attribute"/>

## removeUserAttributes

Removes the user profile attributes for the given keys.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=remove-user-attributes"/>

iOS

<Tabs query="platform=android&api=remove-user-attributes"/>

React Native

<Tabs query="platform=android&api=remove-user-attributes"/>

## updateUserAttribute

Sets the user profile attributes key and value and allows you to create or update a user profile attribute.

Remember the following information:

* If the attribute does not exist, it will be created.
* If the attribute exists, the value will be updated.
* A null attribute value removes the attribute.

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

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=update-user-attributes"/>

iOS

<Tabs query="platform=android&api=update-user-attributes"/>

React Native

<Tabs query="platform=react-native&api=update-user-attributes"/>