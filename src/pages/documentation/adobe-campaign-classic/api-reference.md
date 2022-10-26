import Tabs from './tabs/api-reference.md'

# Adobe Campaign Classic API reference

## extensionVersion

The `extensionVersion` API returns the version of the Campaign Classic extension that is registered with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=extension-version"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=extension-version"/>

## registerDevice

The `registerDevice` API lets you register a user device with Campaign Classic.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=register-device"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=register-device"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=register-device"/>

## trackNotificationReceive

The `trackNotificationReceive` API sends the received push notification's tracking information to the configured Adobe Campaign Classic server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=track-notification-receive"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=track-notification-receive"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=track-notification-receive"/>

## trackNotificationClick

The `trackNotificationClick` API sends the clicked push notification's tracking information to the configured Adobe Campaign Classic server. This API can be used to send tracking information when the notification is clicked, which may result in the application being opened. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android

<Tabs query="platform=android&api=track-notification-click"/>

iOS (AEP 3.x)

<Tabs query="platform=ios-aep&api=track-notification-click"/>

iOS (ACP 2.x)

<Tabs query="platform=ios-acp&api=track-notification-click"/>
