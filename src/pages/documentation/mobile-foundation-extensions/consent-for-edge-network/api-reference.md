import Tabs from './tabs/api-reference.md'

# API Reference

## extensionVersion

The extensionVersion() API returns the version of the client-side Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getConsents

Retrieves the current consent preferences stored in the Consent extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-consents"/>

iOS

<Tabs query="platform=ios&api=get-consents"/>

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## updateConsents

Merges the existing consents with the given consents. Duplicate keys will take the value of those passed in the API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-consents"/>

iOS

<Tabs query="platform=ios&api=update-consents"/>

