# Event Transactions view

## Overview

The Event Transactions view in Assurance enables you to validate and debug your Edge Network client implementation, and see the upstream validation results in near real time.

## Set up Adobe Experience Platform Assurance for Edge Network

To get started, complete the following steps:

1. [Set up Adobe Experience Platform Assurance](../set-up.md).
2. Ensure that you have implemented the latest versions of the Assurance and Edge Network extensions in your app.
3. To view your events, from the left side menu select the **Event Transactions** under the **ADOBE EXPERIENCE PLATFORM EDGE** section.
  If you do not see this option, select **Configure** from the bottom left of the window, add the **Event Transactions** view and select **Save**.

## Guide

### The event processing flow

![Event transactions view](./assets/event-transactions/event-transactions-view.png)

At a high-level the Event Transactions view displays 3 columns in the order of the event processing flow:

- **CLIENT-SIDE**  - This column represents the events processed or received client-side, accessible to the Mobile SDK. This includes the events that were collected based on an API call, such as `Edge.sendEvent`, or the response handles received by the client from the Edge Network server. Examples of client-side events:
  - AEP Request Event represents the experience event sent through the AEP Edge extension and contains the XDM and free-form data.
  - AEP Response Event Handle represents the event handle received from Experience Edge in response to an AEP Request Event.
  - AEP Error Response may be seen in case of an error, for example if the XDM payload could not be processed or if one of the upstream services returned an error or warning.
- **EDGE NETWORK** - This column indicates the event was received server-side by the Edge Network through a network request.
- **UPSTREAM** - This column displays the events received by the configured upstream services, including detailed information about the processing and/or validation results for the incoming event.
Please note that this column is dynamic and may display different type of information depending on two factors:
  - Your datastream configuration and the services you have enabled.
  - The type of events sent to the Edge Network.

### Configuration settings

You can check the currently used datastream identifier by selecting the info tooltip next to the EDGE NETWORK column header.
