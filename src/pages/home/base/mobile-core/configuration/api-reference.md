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
2. [updateConfiguration](#updateConfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithAppId`.

1. [configureWithFileInPath](#configurewithfileinpath)
2. [updateConfiguration](#updateConfiguration)
3. clearUpdatedConfiguration

Result: You end up with the initial configuration set via `configureWithFileInPath`.

1. [configureWithAppId](#configurewithappid) or [configureWithFileInPath](#configurewithfileinpath) or [configureWithFileInAssets](#configurewithfileinassets)
2. [updateConfiguration](#updateConfiguration)
3. clearUpdatedConfiguration
4. [updateConfiguration](#updateConfiguration)

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

This API causes the SDK to download the configuration for the provided app ID and apply the configuration to the current session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=configure-with-app-id"/>

iOS

<Tabs query="platform=ios&api=configure-with-app-id"/>

## configureWithFileInAssets

<InlineAlert variant="info" slots="text"/>

This API is only available in Android.

You can bundle a JSON configuration file in the app's Assets folder to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./index.md#configure-with-app-id-per-environment) approach.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-assets"/>

## configureWithFileInPath

You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./index.md#configure-with-app-id-per-environment) approach.

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

Do not use this API to update the `build.environment` key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read [Environment-aware configuration properties](./index.md#environment-aware-configuration-properties).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=update-configuration"/>

iOS

<Tabs query="platform=ios&api=update-configuration"/>

<!--- React Native

<Tabs query="platform=react-native&api=update-configuration"/>

Flutter

<Tabs query="platform=flutter&api=update-configuration"/> --->
