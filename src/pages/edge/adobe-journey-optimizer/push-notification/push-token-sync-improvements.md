---
title: Push Token Sync Improvements
description: This guide provides information regarding push token sync optimizations made to prevent unnecessary network requests from being sent from your app.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- iOS
- Android

---
import Tabs from './tabs/push-token-sync-improvements.md'

# Push Token Sync Improvements

## Overview

Starting with the 3.3.3 release, the AEPMessaging extension SDK prevents unnecessary network requests from being sent when syncing push tokens. By default, the push token sync optimization will only send a network request if the token has changed since the last succesful sync request. This reduces unnecessary network traffic which can help improve app performance.

## Configuration

The `messaging.pushForceSync` configuration key allows you to control the push token synchronization behavior:

| Key | Required | Description | Data Type | Operating System |
| :--- | :--- | :--- | :--- | :--- |
| messaging.pushForceSync | No | Controls whether the push token should be synced with Adobe Journey Optimizer every time the `setPushIdentifier` API is called. Default value is `false`. | Boolean | Android/iOS |

## Force Sync Behavior

When `messaging.pushForceSync` is set to `true`:

* The push token will be synced with Adobe Journey Optimizer every time `setPushIdentifier` is called
* There is a one second timeout between succesful sync requests. This timeout ensures that multiple sync requests made at the same time which do not change the push token value will not result in redundant network requests. If the push token value in the request is different than the current token value, the timeout does not apply.

## Usage Scenarios

The AEPMessaging extension SDK will sync new push tokens when the `setPushIdentifier` API is called. While the usage of the `messaging.pushForceSync` configuration key should not be needed in normal app usage scenarios, it would be useful in some special scenarios such as:

* When datastream overrides are used to send push tokens to multiple datasets or datastreams.
* When changing the Edge configuration via the `edge.configId` configuration key to send push tokens to different datastreams.
* When changing the environment file ID passed to `MobileCore.configureWithAppID` to change the Edge configuration which can be used to send push tokens to different datastreams.

## Usage Example

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=usage-example"/>

iOS

<Tabs query="platform=ios&task=usage-example"/>
