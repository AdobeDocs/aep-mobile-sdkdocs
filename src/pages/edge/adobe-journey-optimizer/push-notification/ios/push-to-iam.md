---
title: Display an in-message on push notification interaction
description: This document describes the steps that allow a designated in-app message to be shown to an end user when they interact with a push notification to open the app.
keywords:
- Adobe Journey Optimizer
- Messaging
- Push Notification
- In-App Messaging
- iOS
- API
- Push to In-App
---

# Display an in-message on push notification interaction

## Overview

This document describes the steps that allow a designated in-app message to be shown to an end user when they interact with a push notification to open the app.

## Pre-requisites

[Integrate and register Messaging extension](../../../index.md#implement-extension-in-mobile-app) in your app.

## Add a trigger in the in-app message campaign

1. In the Journey Optimizer UI, select the Campaign for the in-app message that needs to be shown when a push notification is interacted with.
2. Under the **Triggers** section, click on the **Edit triggers** button. Click on **Add Condition** and select the **Manual trigger** from the event dropdown. Click on **Add Condition** again and select **Custom trait** from the trait menu. Enter `adb_iam_id` as the key for the custom trait and an id that uniquely identifies the in-app message as the value. Make a note of this id as it will be used in the next section.

<InlineAlert variant="info" slots="text"/>

The above rule to show the in-app message when the app is opened from a push notification interaction can be combined with existing trigger rules based on other events using an **OR** operator.

![In-app campaign trigger for Push-to-inapp](./../../assets/push-notification/iam-trigger-p2i.png)

3. Click on **Done** to save the rule and review the changes by clicking on **Review to activate**

4. Click on **Request approval** to activate the campaign.

## Add the in-app message ID to the push notification data

1. In the Journey Optimizer UI, select the Campaign for the Push notification which opens the app and shows the in-app message from the previous step.
2. Click **Edit content** to modify the push notification payload. Under **Custom data** section, click on **Add Key/Value Pair**. Enter `adb_iam_id` in the key field and the unique in-app message ID from the previous section in the value field.

![Push campaign custom data for Push-to-inapp](./../../assets/push-notification/push-custom-data-p2i.png)

3. Click on **Review to activate** to save the changes.

4. Click on **Request approval** to activate the campaign.

## Track push notification interaction

After the application is opened by the user by clicking on the push notification, verify push notification interaction is being tracked using [handleNotificationResponse](./api-reference.md/#track-push-notification-interactions) API in the delegate implementing [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate).
