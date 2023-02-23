import Tabs from './tabs/api-reference.md'

# Adobe Campaign Classic API reference

## extensionVersion

The `extensionVersion` API returns the version of the Campaign Classic extension that is registered with the Mobile Core extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## registerDevice

The `registerDevice` API lets you register a user device with Campaign Classic.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-device"/>

iOS

<Tabs query="platform=ios&api=register-device"/>

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## trackNotificationReceive

The `trackNotificationReceive` API sends the received push notification's tracking information to the configured Adobe Campaign Classic server.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-notification-receive"/>

iOS

<Tabs query="platform=ios&api=track-notification-receive"/>

## trackNotificationClick

The `trackNotificationClick` API sends the clicked push notification's tracking information to the configured Adobe Campaign Classic server. This API can be used to send tracking information when the notification is clicked, which may result in the application being opened. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-notification-click"/>

iOS

<Tabs query="platform=ios&api=track-notification-click"/>
