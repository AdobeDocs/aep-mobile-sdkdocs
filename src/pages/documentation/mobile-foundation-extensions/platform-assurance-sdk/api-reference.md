import Tabs from './tabs/api-reference.md'

# Assurance API reference

## extensionVersion

Returns the current version of the AEP Assurance extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

Registers the Assurance extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## startSession

The `startSession` API needs to be called to begin a AEP Assurance session. When called, the Mobile SDK displays a PIN authentication overlay to begin a session.

<InlineAlert variant="info" slots="text"/>

You may call this API when the app launches with a URL (see code snippet below for sample usage)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=start-session"/>

iOS

<Tabs query="platform=ios&api=start-session"/>

<!--- React Native

<Tabs query="platform=react-native&api=start-session"/>

Flutter

<Tabs query="platform=flutter&api=start-session"/> --->
