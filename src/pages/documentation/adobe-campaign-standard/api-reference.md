import Tabs from './tabs/api-reference.md'

# Adobe Campaign Standard API reference

## extensionVersion

Returns the running version of the Campaign Standard extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## registerExtension

Registers the Campaign Standard extension with the Mobile Core.

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>

## resetLinkageFields

Clears previously stored linkage fields in the mobile SDK and triggers a Campaign rules download request to the configured Campaign server.

This method unregisters any previously registered rules with the Rules Engine and clears cached rules from the most recent rules download.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset-linkage-fields"/>

iOS

<Tabs query="platform=ios&api=reset-linkage-fields"/>

## setLinkageFields

Sets the Campaign linkage fields (CRM IDs) in Mobile SDK to be used for downloading personalized messages from Campaign.

The set linkage fields are stored as a base64 encoded JSON string in memory and they are sent in a custom HTTP header `X-InApp-Auth`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-linkage-fields"/>

iOS

<Tabs query="platform=ios&api=set-linkage-fields"/>
