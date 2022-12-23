import Tabs from './tabs/api-reference.md'

# Signal API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Signal extension that is registered with the Mobile Core extension.

To get the version of the Signal extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios-aep&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## registerExtension

Registers the Signal extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios-aep&api=register-extension"/>

<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/> --->

## collectPII

The Signal extension can be used to handle `collectPII` rules. For more information, see the [collectPII](../api-reference.md#collectpii) API.

