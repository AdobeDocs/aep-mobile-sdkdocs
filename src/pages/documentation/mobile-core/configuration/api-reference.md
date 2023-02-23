import Tabs from './tabs/api-reference.md'

# Configuration API reference

## clearUpdatedConfiguration

You can clear any programmatic updates made to the configuration via the `clearUpdatedConfiguration` API. This will clear programmatic updates to configuration made via the `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict:)`(iOS) API. It will also clear any updates to the `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS)  made via `setPrivacyStatus(privacyStatus)`(Android)/ `setPrivacyStatus(_ status:)`(iOS).

 Here are some examples of scenarios:

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict:)`(iOS) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithAppId(appId)`(Android)/ `configureWith(appId:)`(iOS)

* `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS)

* `configureWithFileInAssets(fileName)`(Android) -> `updateConfiguration(configMap)`(Android) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithFileInAssets(fileName)`(Android)

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS) -> `clearUpdatedConfiguration()` -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS): In this example, the configuration will be the most recently updated configuration and will not have any keys from the first update unless they are included in the most recent update.

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android) -> `setPrivacyStatus(privacyStatus)`(Android)/ `setPrivacyStatus(_ status:)`(iOS) -> `clearUpdatedConfiguration()`: In this example, the configuration will have the initial `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS) set via `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android).

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

You can bundle a JSON configuration file in the app's Assets folder to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](../#configure-with-app-id-per-environment) approach.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=configure-with-file-in-assets"/>

## configureWithFileInPath

You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](../#configure-with-app-id-per-environment) approach.

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
