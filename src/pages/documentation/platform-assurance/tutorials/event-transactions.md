# Event Transactions view

## Overview of Event Transactions view in Assurance

The Event Transactions view in Adobe Experience Platform Assurance enables you to validate and debug your Edge Network client implementation, and see the upstream validation results in near real time.

## Set up Assurance for Edge Network

To get started, complete the following steps:

1. [Set up Assurance](../set-up.md).
2. Ensure that you have implemented the latest versions of the Assurance and Edge Network extensions in your app.
3. To view your events, from the left side menu select the **Event Transactions** under the **Adobe Experience Platform Edge** section.
  If you do not see this option, select **Configure** from the bottom left of the window, add the **Event Transactions** view and select **Save**.

## Get started using the view

In this section, get familiar with the Event Transaction view and learn how to use it efficiently for end to end validation on Edge Network workflows.

### Event processing flow

![Event transactions view](./assets/event-transactions/event-transactions-view.png)

The Event Transactions view displays three columns in the order of the event processing flow:

- **Client-side**  - This column represents the events processed or received client-side, accessible to the Mobile SDK. This includes the events that were collected based on an API call, such as `Edge.sendEvent`, or the response handles received by the client from the Edge Network server. Examples of client-side events:
  - AEP Request Event represents the event sent through the Edge extension and contains the XDM and free-form data.
  - AEP Response Event Handle represents the event handle received from Edge Network in response to an AEP Request Event. A request event may receive none, one or multiple response event handles.
  - AEP Error Response may be seen in case of an error, for example if the XDM payload could not be processed or if one of the upstream services returned an error or warning.
- **Edge Network** - This column indicates the event was received server-side by the Edge Network through a network request, and what data or metadata it contained.
- **Upstream** - This column displays the events received by the configured upstream services, including detailed information about the processing and/or validation results for the incoming event.
Please note that this column is dynamic and may display different type of information depending on two main factors:
  - Your datastream configuration and the services you have enabled.
  - The type of events sent to the Edge Network.

### Inspect events

The collection of events displayed in the Event Transactions view provides information about the format and content of the data being processed at each state, as well as insightful details about any warnings or errors encountered while data is being processed upstream. The view helps narrowing down the debugging information at the event/request level and identifying errors early on in the development cycle.

#### Expand the event details

To inspect an event, simply select the desired one from the view. This action expands the `Event Details` view on the right side of the screen.
Nested data is displayed in a tree format. You can inspect nested key-values by selecting the **+** (plus) button in front of the key name.

![Event details](./assets/event-transactions/event-details.png)

#### Inspect warning or errors

Each event name is prefixed with an icon, which indicates the high-level status of the event processing for that stage:

* If the event was processed successfully, a green check mark is being displayed.
* If warnings or errors have been detected, a warning sign is being displayed. Select the respective event to learn more about the cause of the error in the `Event Details` view.

### Configuration settings

You can check the currently used datastream identifier by selecting the info tooltip next to the EDGE NETWORK column header.

![Show the datastream ID](./assets/event-transactions/show-datastream-id.png)

<InlineAlert variant="info" slots="text"/>

When multiple clients connect to the same Assurance session and different datastream IDs are used, you will see all of them displayed here. However, this does not mean you current implementation uses multiple datastreams, only current identifier set in the app is being used for processing new events. If you test more complicated use-cases with different configuration settings and multiple clients connected, you may use separate Assurance sessions for simplification.
