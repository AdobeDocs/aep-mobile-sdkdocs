# Validate in-app messaging using Adobe Experience Platform Assurance

This guide will walk you through steps necessary to ensure your app is properly configured for in-app messaging with Adobe Journey Optimizer (AJO).

- [Complete prerequisites for your app](#prerequisites)
- [Validate the correct extensions are registered](#validate-the-correct-extensions-are-registered)
- [Validate the event requesting message definitions](#validate-the-event-requesting-message-definitions)
- [Validate the event containing a message definition response](#validate-the-event-containing-a-message-definition-response)

## Prerequisites

- Your app must have the **AEPMessaging** SDK extension installed. Integrate **AEPMessaging** by following the guide on [setting up AEPMessaging SDK](../setup.md).

- This troubleshooting guide uses validation provided by the **AEPAssurance** extension and the **Adobe Assurance UI**. Integrate **AEPAssurance** in your application by following the [Adobe Experience Platform Assurance installation guide](../../platform-assurance/index.md).

## Validate the correct extensions are registered

Ensure that your app has registered all necessary AEP SDK extensions by doing the following:

1. Launch your application with an **AEPAssurance** session active

2. In the Assurance UI, click on **Shared States** in the left-rail navigation

3. Click the **+** button next to the row with a **State Path** of **com.adobe.module.eventhub**

4. Open the **extensions** object and validate that each of the required extensions exist, ensuring it meets the minimum version requirements. The table below shows the minimum versions required for in-app messaging dependencies:

| Extension (iOS) | Min. Version (iOS) | Extension (Android) | Min. Version (Android) |
| --------------- | -----------------: | ------------------- | ---------------------: |
| AEPCore | 3.7.4 | core | 2.0.1 |
| AEPEdge | 1.1.0 | edge | 2.0.0 |
| AEPEdgeIdentity | 1.0.0 | edgeidentity | 2.0.0 |
| AEPMessaging | 1.1.0 | messaging | 2.0.1 |

<InlineAlert variant="info" slots="text"/>

If your app uses the [Edge Consent extension](../../consent-for-edge-network/index.md), the device must be consenting (i.e. - a consent value of `Yes`) in order to download in-app messages.

A sample view in the Assurance UI can be seen below:

![correct extensions registered](./assets/validate-messages/message-configuration.png)

## Validate the event requesting message definitions

When the AEPMessaging extension has finished registration with the AEP SDK and a valid configuration exists, it will automatically initiate a network request to fetch message definitions from the remote.

Completing the following steps will validate that your app is making the necessary request to retrieve in-app message definitions:

1. Launch your application with an **AEPAssurance** session active

2. In the Assurance UI, click on **Events** in the left-rail navigation

3. In the event list, select the event with type **Retrieve message definitions**

![Retrieve message definitions](./assets/validate-messages/message-request.png)

4. Expand the **Payload** section in the right window and ensure the correct **surface** is being used. The **surface** URI represents a collection of messages specific for your application and is identifiable based on its bundle identifier. The format for the URI will be `mobileapp://APP_BUNDLE_IDENTIFIER`.  From the screenshot above, the surface in use is `mobileapp://com.adobe.MessagingDemoApp`.

## Validate the event containing a message definition response

After the request from the previous step returns, the **AEPEdge** extension will dispatch a response event containing data returned by the remote server.

Complete the following steps to validate a response containing in-app messages:

1. Launch your application with an **AEPAssurance** session active

2. In the Assurance UI, click on **Events** in the left-rail navigation

3. In the event list, select the event with type **AEP Response Event Handle**. There will likely be several events with this type - ensure the one selected has an **AEPExtensionEventSource** of `personalization:decisions`

![AEP Response Event Handle](./assets/validate-messages/message-response.png)

4. Expand the **Payload** section in the right window. Each entry in the **payload** array contains the rule for a single in-app message that has been previously published in AJO and is now live. The full path to find a message definition is:

    ```
    ACPExtensionEventData.payload.N.items.0.data.content
    ```

    To find definitions for other live in-app messages, follow the above path for each object in the **payload** array.
    
    ![AEP Response Event Handle Payload](./assets/validate-messages/message-response-payload.png)

## Use the In-App Messaging Assurance UI plugin

Once all of the above validation sections are complete, you can use the **In-App Messaging** plugin view in the Assurance UI to further debug your app.

#### Install the In-App Messaging plugin

<InlineAlert variant="info" slots="text"/>

If you have already installed the **In-App Messaging** plugin in your Assurance UI setup, skip this section.

1. In the Assurance UI, click on **Configure** button at the bottom of the left-rail navigation

2. Search for the row named **In-App Messaging** under the **ADOBE JOURNEY OPTIMIZER (BETA)** heading, and click the **+** button on its right

3. Click the **Save** button

![Install the In-App Messaging plugin](./assets/validate-messages/install-iam-plugin.png)

#### Inspecting a downloaded message

Using the IAM plugin you can do the following for each message downloaded by the client:

- In the **Rules** tab - view the rules defining when the message will be shown to the user
- In the **History** tab - review a history of client events, including a comparison between the event's contents and the message's triggering criteria
- In the **Message Preview** window - see a preview of the message's html
- In the **Message Behavior** window - review message behavior, including its supported gestures and animations
- In the **Message Behavior** window - review message size and positioning properties
- Clicking the **Simulate on Device** button - trigger the currently selected message, causing it to be displayed on the connected client

    ![Inspecting a downloaded message](./assets/validate-messages/iam-simulation.png)

## FAQs

### Q: What do I do when one of the required extensions is missing?

**A:** Ensure that each required extension is linked to your project and registered by `MobileCore`. For more information, please read the [Mobile Core API reference](../../mobile-core/api-reference.md#registerextensions).

### Q: Why can't I find an event named `Retrieve message definitions`?

**A:** Ensure that each of the required extensions is at the minimum required version.

### Q: I see an `AEP Error Response` event, is that a problem?

**A:** If you open the EventData and the `detail` key has a value of "The Decisioning Package was not found.", this likely means the Messaging extension was unable to find the messages for your app. Check the below items to try and resolve the issue:

* Make sure that messages have been published in the AJO Campaigns UI for your app surface
* Make sure that the bundle identifier (iOS) or package name (Android) matches the value used for your app surface
* Make sure that the **environment** and **sandbox** being used in AJO matches those being used to configure the app
* Make sure that your Adobe organization is provisioned for Offers on Edge (this may require contacting your account manager)

### Q: Why don't I see any messages in my `AEP Response Event Handle` event?

**A:** In the [Adobe Journey Optimizer UI](https://experience.adobe.com/#/@/journey-optimizer/home), make sure that there are in-app messages with a **Live** status for your application.

### Q: Why aren't there any messages to select in the `In-App Messaging` Assurance UI plugin?

**A:** The `In-App Messaging` plugin view will only be populated when there are messages returned in the `AEP Response Event Handle` event.
