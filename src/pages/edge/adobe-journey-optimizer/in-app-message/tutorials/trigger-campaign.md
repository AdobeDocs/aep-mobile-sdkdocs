---
title: Trigger Adobe Journey Optimizer campaigns using send data to Experience Platform events
description: A guide explaining how to trigger Adobe Journey Optimizer campaigns by using send data to Experience Platform events.
keywords:
- Adobe Journey Optimizer
- Guide
- Campaign
- Messaging
- Platform
- Tutorial
---

import Tabs from './tabs/trigger-campaign.md'

# Trigger Adobe Journey Optimizer campaigns using the send data to platform event

This guide explains how to set up, then trigger Adobe Journey Optimizer campaigns by using the `send data to platform event` trigger available in the Adobe Journey Optimizer UI.

## Prerequisites

* Intermediate knowledge of AJO in-app message or content card campaign creation. Documentation regarding these two campaign types is available at:
  * https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/in-app/create-in-app
  * https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/content-card/create-content-card

## AJO Campaign setup

1. Create a scheduled campaign containing an in-app message action.
   ![send-data-event-in-app-action](../assets/trigger-campaign/send-data-event-in-app-action.png)
2. In-app campaigns (as well as content cards) support rule based triggers. For this example, we will create a campaign containing an in-app message action which will be triggered using the *"Send data to platform event"*. Click *"Edit Triggers"* and setup a *"Send data to Platform"* event trigger with a condition of *"XDM value"*. The created condition will be satisfied by a defined key value pair. The key value pair must be present within an Experience event request sent by your app. For this example, we will use a key of "status" and a value of "signedIn" to show our in-app message when a user has signed in to our app.
   ![send-data-event-define-rule](../assets/trigger-campaign/send-data-event-define-rule.png)
3. The completed in-app campaign with the *"Send data to platform event"* trigger setup will look like:
   ![send-data-event-trigger-setup](../assets/trigger-campaign/send-data-event-trigger-setup.png)
4. Review and activate the campaign after the in-app action content authoring is complete.

## Trigger the campaign using the send data to platform event

To trigger an Adobe Journey Optimizer campaign, you need to send an Experience event to Experience Platform. This event should contain the data that matches your campaign's trigger conditions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=send-event"/>

iOS

<Tabs query="platform=ios&function=send-event"/>

## Triggers using values within arrays in event data

You can use a key-value pair within an array in the event data by specifying its full path along with its index in the array. Please see the [Event data key flattening](../../../../home/base/mobile-core/rules-engine/technical-details.md#event-data-key-flattening) section for more information.

For example, you can trigger an in-app message when an event sent to Experience Platform has the key-value pair `"sku": "1234"` in the `productlistitems` array in its event data.

```json
"xdm": {
     "productlistitems": [
          {
              "sku": "1234"
          },
          {
              "sku": "4567"
          }
       ]
},
```

In this case, the condition can be specified as:

```text
(Sent data to Platform event happens) AND (XDM value productlistitems.0.sku = 1234)
```
