---
title: Live Activities implementation tutorial
description: This document describes how to register and manage Live Activities using the Adobe Journey Optimizer extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Live Activities
- iOS
- ActivityKit
- Tutorial
---

import Tabs from './tabs/tutorial.md'

# Live Activities implementation tutorial

This document describes how to register and manage Live Activities using the Adobe Journey Optimizer extension.

## Pre-requisites

1. [Integrate and register Messaging extension](../../index.md#implement-extension-in-mobile-app) in your app.
2. Ensure your app targets iOS 16.1 or newer.
3. For push-to-start token support, ensure your app targets iOS 17.2 or newer.
4. Configure your app to support Live Activities by following [Apple's Live Activities documentation](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities).

## Define your LiveActivityAttributes

Before registering Live Activities with the Messaging extension, you need to define your attribute types that conform to the `LiveActivityAttributes` protocol. This protocol extends Apple's `ActivityAttributes` and adds Adobe Experience Platform integration data.

Each Live Activity type must include:

* **`liveActivityData`** (required): Contains Adobe Experience Platform-specific data
  * For individual users: `LiveActivityData(liveActivityID: "unique-id")`
  * For broadcast channels: `LiveActivityData(channelID: "channel-id")` (iOS 18+)
* **Static attributes**: Custom properties that do not change during the Live Activity lifecycle
* **`ContentState`**: Defines dynamic data that can be updated (must conform to `Codable` and `Hashable`)

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=define-activity-attributes"/>

## Register Live Activity types

After defining your `LiveActivityAttributes` types, register them with the Messaging extension using the [registerLiveActivities](./api-reference.md#registerliveactivities) API. This enables:

* Automatic push-to-start token collection (iOS 17.2+)
* Automatic Live Activity update token collection
* Lifecycle management and event tracking

Call this API after the Messaging extension has been registered with `MobileCore`, typically in your app's initialization code (e.g., `AppDelegate`).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=register-live-activities"/>

## Start a Live Activity

You can start a Live Activity using Apple's ActivityKit APIs. Once started, if you've registered the activity type with the Messaging extension, the push-to-start token will automatically be sent to Adobe Experience Platform.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=start-live-activity"/>

## Update a Live Activity via push notification

Once a Live Activity is started and its push-to-start token has been sent to Adobe Experience Platform, Adobe Journey Optimizer can send push notifications to update the Live Activity's content.

Configure your push notification payload in Adobe Journey Optimizer with the following structure:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=push-payload"/>

## End a Live Activity

You can end a Live Activity using Apple's ActivityKit APIs or via a push notification from Adobe Journey Optimizer.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=end-live-activity"/>

## Best practices

* **Register early**: Call `registerLiveActivities` during app initialization, after registering the Messaging extension.
* **Register all types**: Register all `ActivityAttributes` types that you want Adobe Journey Optimizer to manage.
* **Handle token updates**: The Messaging extension automatically monitors and sends push-to-start tokens to Adobe Experience Platform. No additional code is required.
* **Test on device**: Live Activities require a physical device for testing. They do not work in the iOS Simulator.
* **Monitor token lifecycle**: Push-to-start tokens are generated when a Live Activity starts and become invalid when the activity ends.
