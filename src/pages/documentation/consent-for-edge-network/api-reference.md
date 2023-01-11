import Tabs from './tabs/api-reference.md'

# API Reference

## extensionVersion

The extensionVersion() API returns the version of the client-side Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios-aep&api=extension-version"/>

React Native

<Tabs query="platform=react-native&api=extension-version"/>

## getConsents

Retrieves the current consent preferences stored in the Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=get-consents"/>

iOS

<Tabs query="platform=ios-aep&api=get-consents"/>

React Native

<Tabs query="platform-react-native&api=get-consents"/>

## registerExtension

Registers the Edge Consent extension with the Mobile Core SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios-aep&api=register-extension"/>

React Native

<Tabs query="platform=react-native&api=register-extension"/>

## updateConsents

Merges the existing consents with the given consents. Duplicate keys will take the value of those passed in the API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=update-consents"/>

iOS

<Tabs query="platform=ios-aep&api=update-consents"/>

React Native

<Tabs query="platform=react-native&api=update-consents"/>