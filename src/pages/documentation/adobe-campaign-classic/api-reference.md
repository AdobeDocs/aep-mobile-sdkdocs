import ExtensionVersionIos from './tabs/api-reference/extension-version/ios.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import RegisterDeviceIos from './tabs/api-reference/register-device/ios.md'
import RegisterDeviceAndroid from './tabs/api-reference/register-device/android.md'
import TrackNotificationClickIos from './tabs/api-reference/track-notification-click/ios.md'
import TrackNotificationClickAndroid from './tabs/api-reference/track-notification-click/android.md'
import TrackNotificationReceiveIos from './tabs/api-reference/track-notification-receive/ios.md'
import TrackNotificationReceiveAndroid from './tabs/api-reference/track-notification-receive/android.md'

# Adobe Campaign Classic API reference

## extensionVersion

The `extensionVersion` API returns the version of the Campaign Classic extension that is registered with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<ExtensionVersionAndroid/>

#### iOS (ACP 2.x)

<ExtensionVersionIos/>

## registerDevice

The `registerDevice` API lets you register a user device with Campaign Classic.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<RegisterDeviceAndroid/>

#### iOS (ACP 2.x)

<RegisterDeviceIos/>

## trackNotificationReceive

The `trackNotificationReceive` API sends the received push notification's tracking information to the configured Adobe Campaign Classic server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<TrackNotificationReceiveAndroid/>

#### iOS (ACP 2.x)

<TrackNotificationReceiveIos/>

## trackNotificationClick

The `trackNotificationClick` API sends the clicked push notification's tracking information to the configured Adobe Campaign Classic server. This API can be used to send tracking information when the notification is clicked, which may result in the application being opened. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<TrackNotificationClickAndroid/>

#### iOS (ACP 2.x)

<TrackNotificationClickIos/>

