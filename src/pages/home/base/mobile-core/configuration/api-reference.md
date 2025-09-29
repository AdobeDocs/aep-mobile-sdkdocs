---
title: Mobile Core Configuration API reference
description: An API reference for the Mobile Core Configuration extension.
keywords:
- API reference
- Configuration for Mobile Core
- Configuration
- Mobile Core
---

import Tabs from './tabs/api-reference.md'

# Configuration API reference

## clearUpdatedConfiguration

You can clear any programmatic updates made to the configuration via the `clearUpdatedConfiguration` API. This will clear programmatic updates to configuration made via the [updateConfiguration](#updateconfiguration) API. It will also clear any updates to the `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS)  made via [setPrivacyStatus](../../../../resources/privacy-and-gdpr.md/#setprivacystatus).

Here are some scenarios based on the order of calls:

1. [configureWithAppId](#configurewithappid)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithAppId`.

1. [configureWithFileInPath](#configurewithfileinpath)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithFileInPath`.

1. [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets)
2. [updateConfiguration](#updateconfiguration)
3. clearUpdatedConfiguration
4. [updateConfiguration](#updateconfiguration)

Result: In this example, the configuration will be the most recently updated configuration and will not have any keys from the first update unless they are included in the most recent update.

1. [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets)
2. [setPrivacyStatus](../../../../resources/privacy-and-gdpr.md/#setprivacystatus)
3. clearUpdatedConfiguration

Result: In this example, the configuration will have the initial `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS) set via [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=clear-updated-configuration"/>

iOS

<Tabs query="platform=ios&api=clear-updated-configuration"/>

## configureWithAppID

You can use this API to download and apply the remote configuration for the provided app ID to the current session. Once downloaded, the configuration is stored in the local cache to prevent unnecessary downloads. The configuration is fetched only if remote changes are detected.

<InlineAlert variant="info" slots="text"/>

The SDK attempts to refresh the configuration on every cold launch to ensure it stays up to date with the remote configuration.

When you configure a mobile property, a unique environment ID is generated that the SDK uses to retrieve your configuration. The remote configuration is available when an app configuration is created and published to a given environment.

<InlineAlert variant="success" slots="text"/>

As best practice, you should configure a mobile property in the Data Collection UI and use environment IDs to configure your application. Follow the steps in the tutorial on [setting up a mobile property](../../../getting-started/create-a-mobile-property.md) if you need to create a new Experience Platform App.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=configure-with-app-id"/>

iOS

<Tabs query="platform=ios&api=configure-with-app-id"/>

## configureWithFileInAssets

<InlineAlert variant="info" slots="text"/>

This API is only available in Android.

You can use this API to load the configuration from the JSON configuration file in the app's Assets folder.

<InlineAlert variant="warning" slots="text"/>

This will replace any configuration previously loaded during app launch or with the [configureWithAppID](#configurewithappid) API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-assets"/>

## configureWithFileInPath

You can use this API to load the configuration from the bundled JSON configuration file in your app package.

<InlineAlert variant="warning" slots="text"/>

This will replace any configuration previously loaded during app launch or with the [configureWithAppID](#configurewithappid) API.

To pass in a bundled path and file name:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-path"/>

iOS

<Tabs query="platform=ios&api=configure-with-file-in-path"/>

## extensionVersion

The `extensionVersion()` API returns the version of the Configuration extension.

To get the version of the Configuration extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## updateConfiguration

You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration.

<InlineAlert variant="info" slots="text"/>

Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values.

<InlineAlert variant="warning" slots="text"/>

Do not use this API to update the `build.environment` key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read [Environment-aware configuration properties](/src/pages/home/base/mobile-core/configuration/index.md#environment-aware-configuration-properties).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-configuration"/>

iOS

<Tabs query="platform=ios&api=update-configuration"/>

<!--- React Native

<Tabs query="platform=react-native&api=update-configuration"/>

Flutter

<Tabs query="platform=flutter&api=update-configuration"/> --->
