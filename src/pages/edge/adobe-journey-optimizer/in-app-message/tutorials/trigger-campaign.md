---
title: Trigger Adobe Journey Optimizer campaigns using send data to platform events
description: A guide explaining how to trigger Adobe Journey Optimizer campaigns by using send data to platform events.
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

This guide explains how to setup then trigger Adobe Journey Optimizer campaigns by using the `send data to platform event` trigger available on the Adobe Journey Optimizer UI.

## Prerequisites

* Intermediate knowledge of AJO in-app message or content card campaign creation. Documentation regarding these two campaign types is available at:
  * https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/in-app/create-in-app 
  * https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/content-card/create-content-card

## AJO Campaign setup

1. Create a scheduled campaign containing an in-app message action. 
   ![send-data-event-in-app-action](../assets/trigger-campaign/send-data-event-in-app-action.png)
2. In-app campaigns (as well as content cards) support rule based triggers. For this example, we will create a campaign containing an in-app message action which we will be triggered using the *"Send data to platform event"*. Click *"Edit Triggers"* and setup a *"Send data to Platform"* event trigger with a condition of *"XDM value"*. The created condition will be satisfied by a defined key value pair. The key value pair must be present within an Experience event request sent by your app. For this example, we will use a key of "status" and a value of "signedIn" to show our in-app message when a user has signed in to our app
   ![send-data-event-define-rule](../assets/trigger-campaign/send-data-event-define-rule.png)
3. The completed in-app campaign with the *"Send data to platform event"* trigger setup will look like:
   ![send-data-event-trigger-setup](../assets/trigger-campaign/send-data-event-trigger-setup.png)
4. Review and activate the campaign after the in-app action content authoring is complete. 

## Trigger the campaign using the send data to platform event

To trigger an Adobe Journey Optimizer campaign, you need to send an Experience event to the Experience Platform. This event should contain the data that matches your campaign's trigger conditions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=send-event"/>

iOS

<Tabs query="platform=ios&function=send-event"/>

## Limitations

Triggering with a value within an array is **not** currently supported, e.g. the Experience event contains:

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

The values within the maps / dictionaries in the list **cannot** be used in a trigger.

```text
(Sent data to Platform event happens) AND (XDM value productlistitems.0.sku = 1234)
```

