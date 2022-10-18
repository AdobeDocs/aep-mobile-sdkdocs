import Tabs from './tabs/api-reference.md'

# Adobe Campaign Standard API reference

## extensionVersion

Returns the running version of the Campaign Standard extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=extension-version"/>

iOS (ACP 1.x)

<Tabs query="platform=ios-acp&api=extension-version"/>

React Native

<Tabs query="platform=react-native&api=extension-version"/>

## registerExtension

Registers the Campaign Standard extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=register-extension"/>

iOS (ACP 1.x)

<Tabs query="platform=ios-acp&api=register-extension"/>

React Native

<Tabs query="platform=react-native&api=register-extension"/>

## resetLinkageFields

Clears previously stored linkage fields in the mobile SDK and triggers a Campaign rules download request to the configured Campaign server.

This method unregisters any previously registered rules with the Rules Engine and clears cached rules from the most recent rules download.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=reset-linkage-fields"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=reset-linkage-fields"/>

iOS (ACP 1.x)

<Tabs query="platform=ios-acp&api=reset-linkage-fields"/>

React Native

<Tabs query="platform=react-native&api=reset-linkage-fields"/>

## setLinkageFields

Sets the Campaign linkage fields (CRM IDs) in the mobile SDK to be used for downloading personalized messages from Campaign.

The set linkage fields are stored as a base64 encoded JSON string in memory and they are sent in a custom HTTP header `X-InApp-Auth`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<Tabs query="platform=android&api=set-linkage-fields"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=set-linkage-fields"/>

iOS (ACP 1.x)

<Tabs query="platform=ios-acp&api=set-linkage-fields"/>

React Native

<Tabs query="platform=react-native&api=set-linkage-fields"/>

