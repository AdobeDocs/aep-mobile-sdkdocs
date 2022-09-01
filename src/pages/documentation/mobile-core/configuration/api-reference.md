import ClearUpdatedConfigurationIosAEP from './tabs/api-reference/clear-updated-configuration/ios-aep.md'
import ClearUpdatedConfigurationAndroid from './tabs/api-reference/clear-updated-configuration/android.md'
import ConfigureWithAppIdIosACP from './tabs/api-reference/configure-with-app-id/ios-acp.md'
import ConfigureWithAppIdIosAEP from './tabs/api-reference/configure-with-app-id/ios-aep.md'
import ConfigureWithAppIdAndroid from './tabs/api-reference/configure-with-app-id/android.md'
import ConfigureWithAppIdUnity from './tabs/api-reference/configure-with-app-id/unity.md'
import ConfigureWithAppIdXamarin from './tabs/api-reference/configure-with-app-id/xamarin.md'
import ConfigureWithFileInAssetsAndroid from './tabs/api-reference/configure-with-file-in-assets/android.md'
import ConfigureWithFileInPathIosACP from './tabs/api-reference/configure-with-file-in-path/ios-acp.md'
import ConfigureWithFileInPathIosAEP from './tabs/api-reference/configure-with-file-in-path/ios-aep.md'
import ConfigureWithFileInPathAndroid from './tabs/api-reference/configure-with-file-in-path/android.md'
import ConfigureWithFileInPathXamarin from './tabs/api-reference/configure-with-file-in-path/xamarin.md'
import ExtensionVersionIosACP from './tabs/api-reference/extension-version/ios-acp.md'
import ExtensionVersionIosAEP from './tabs/api-reference/extension-version/ios-aep.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import ExtensionVersionCordova from './tabs/api-reference/extension-version/cordova.md'
import ExtensionVersionFlutter from './tabs/api-reference/extension-version/flutter.md'
import ExtensionVersionReactNative from './tabs/api-reference/extension-version/react-native.md'
import ExtensionVersionUnity from './tabs/api-reference/extension-version/unity.md'
import ExtensionVersionXamarin from './tabs/api-reference/extension-version/xamarin.md'
import UpdateConfigurationIosACP from './tabs/api-reference/update-configuration/ios-acp.md'
import UpdateConfigurationIosAEP from './tabs/api-reference/update-configuration/ios-aep.md'
import UpdateConfigurationAndroid from './tabs/api-reference/update-configuration/android.md'
import UpdateConfigurationCordova from './tabs/api-reference/update-configuration/cordova.md'
import UpdateConfigurationFlutter from './tabs/api-reference/update-configuration/flutter.md'
import UpdateConfigurationReactNative from './tabs/api-reference/update-configuration/react-native.md'
import UpdateConfigurationUnity from './tabs/api-reference/update-configuration/unity.md'
import UpdateConfigurationXamarin from './tabs/api-reference/update-configuration/xamarin.md'

# Configuration API reference

## clearUpdatedConfiguration

<InlineAlert variant="info" slots="text"/>

This API is only available in Android and iOS (AEP 3.x).

You can clear any programmatic updates made to the configuration via the `clearUpdatedConfiguration` API. This will clear programmatic updates to configuration made via the `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict:)`(iOS) API. It will also clear any updates to the `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS)  made via `setPrivacyStatus(privacyStatus)`(Android)/ `setPrivacyStatus(_ status:)`(iOS).

 Here are some examples of scenarios:

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict:)`(iOS) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithAppId(appId)`(Android)/ `configureWith(appId:)`(iOS)

* `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS)

* `configureWithFileInAssets(fileName)`(Android) -> `updateConfiguration(configMap)`(Android) -> `clearUpdatedConfiguration()`: In this example, you end up with the initial configuration set via `configureWithFileInAssets(fileName)`(Android)

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android) -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS) -> `clearUpdatedConfiguration()` -> `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict)`(iOS): In this example, the configuration will be the most recently updated configuration and will not have any keys from the first update unless they are included in the most recent update.

* `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android) -> `setPrivacyStatus(privacyStatus)`(Android)/ `setPrivacyStatus(_ status:)`(iOS) -> `clearUpdatedConfiguration()`: In this example, the configuration will have the initial `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS) set via `configureWithAppId(appId)`(Android)/`configureWith(appId:)`(iOS) or `configureWithFileInPath(filePath)`(Android)/ `configureWith(filePath:)`(iOS) or `configureWithFileInAssets(fileName)`(Android).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android 

<ClearUpdatedConfigurationAndroid/>

iOS (AEP 3.x)

<ClearUpdatedConfigurationIosAEP/>

## configureWithAppID

This API causes the SDK to download the configuration for the provided app ID and apply the configuration to the current session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="5"/>

Android

<ConfigureWithAppIdAndroid/>

iOS (AEP 3.x)

<ConfigureWithAppIdIosAEP/>

iOS (ACP 2.x)

<ConfigureWithAppIdIosACP/>

Unity

<ConfigureWithAppIdUnity/>

Xamarin

<ConfigureWithAppIdXamarin/>

## configureWithFileInAssets

<InlineAlert variant="info" slots="text"/>

This API is only available in Android and was added in Android was added in Android Core version 1.7.0.

You can bundle a JSON configuration file in the app's Assets folder to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./#configure-with-app-id-per-environment) approach.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<ConfigureWithFileInAssetsAndroid/>

## configureWithFileInPath

You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./#configure-with-app-id-per-environment) approach. FIX LINK

To pass in a bundled path and file name:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<ConfigureWithFileInPathAndroid/>

iOS (AEP 3.x)

<ConfigureWithFileInPathIosAEP/>

iOS (ACP 2.x)

<ConfigureWithFileInPathIosACP/>

Xamarin

<ConfigureWithFileInPathXamarin/>

## extensionVersion

The `extensionVersion()` API returns the version of the Configuration extension.

To get the version of the Configuration extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

React Native

<ExtensionVersionReactNative/>

Flutter

<ExtensionVersionFlutter/>

Cordova

<ExtensionVersionCordova/>

Unity

<ExtensionVersionUnity/>

Xamarin

<ExtensionVersionXamarin/>

## updateConfiguration

You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration.

<InlineAlert variant="info" slots="text"/>

Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values.

<InlineAlert variant="warning" slots="text"/>

Do not use this API to update the `build.environment` key or any key with an environment prefix, because it can lead to unexpected behaviors. For more information, read [Environment-aware configuration properties](./#environment-aware-configuration-properties). (FIX LINK)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<UpdateConfigurationAndroid/>

iOS (AEP 3.x)

<UpdateConfigurationIosAEP/>

iOS (ACP 2.x)

<UpdateConfigurationIosACP/>

React Native

<UpdateConfigurationReactNative/>

Flutter

<UpdateConfigurationFlutter/>

Cordova

<UpdateConfigurationCordova/>

Unity

<UpdateConfigurationUnity/>

Xamarin

<UpdateConfigurationXamarin/>
