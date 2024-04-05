---
title: Adobe Campaign Classic API reference
description: An API reference for the Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- API reference
---

import Alerts from '/src/pages/resources/alerts.md'
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

<Alerts query="platform=android-register-extension&componentClass=InlineNestedAlert"/>

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## trackNotificationReceive

The `trackNotificationReceive` API sends the received push notification's tracking information to the configured Adobe Campaign Classic server.

<InlineAlert variant="success" slots="text"/>

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-notification-receive"/>

iOS

<Tabs query="platform=ios&api=track-notification-receive"/>

## trackNotificationClick

The `trackNotificationClick` API sends the clicked push notification's tracking information to the configured Adobe Campaign Classic server. This API can be used to send tracking information when the notification is clicked, which may result in the application being opened.

<InlineAlert variant="success" slots="text"/>

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-notification-click"/>

iOS

<Tabs query="platform=ios&api=track-notification-click"/>

## Other public classes

<InlineAlert variant="warning" slots="text"/>

Push template functionality and the following public classes are only available in Adobe Campaign Classic Android SDK version from 2.1.0 through the next major version release.

### AEPMessagingService

#### handleRemoteMessage

Allows the Adobe Campaign Classic extension to automatically create and dispatch a `Notification` based on the template included in the provided `RemoteMessage` object.

<InlineAlert variant="success" slots="text" />

If you are using the `AEPMessagingService.handleRemoteMessage` API, you should not call `CampaignClassic.trackNotificationReceive` or `CampaignClassic.trackNotificationClick`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=handle-remote-message" />

### AEPPushTemplateBroadcastReceiver

This class is required to be public, but has no APIs that need to be called by the app developer.

### CampaignPushTrackerActivity

This class is required to be public, but has no APIs that need to be called by the app developer.
