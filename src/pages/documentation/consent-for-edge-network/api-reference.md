import Tabs from './tabs/api-reference.md'

# API Reference

## extensionVersion

The extensionVersion() API returns the version of the client-side Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=extension-version"/>

## getConsents

Retrieves the current consent preferences stored in the Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-consents"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=get-consents"/>

## registerExtension

Registers the Edge Consent extension with the Mobile Core SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=register-extension"/>

## updateConsents

Merges the existing consents with the given consents. Duplicate keys will take the value of those passed in the API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-consents"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=update-consents"/>

