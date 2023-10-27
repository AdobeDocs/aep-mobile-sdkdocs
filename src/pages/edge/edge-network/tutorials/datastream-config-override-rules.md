---
title: Datastream config override for Edge events using Rules.
description: This guide provides instructions on overriding datastream ID and datastream configuration for Edge Network Requests that are not initiated by the sendEvent API, all accomplished through Tags Rules.
keywords:
- Edge Network
- Datastream config overrides
- Datastream ID override
- Guide
---

# Datastream config override for Edge events using Rules

By default, all **Edge Experience events** are sent to the datastream specified in the **Adobe Experience Platform Edge Network** extension configuration settings. This tutorial offers examples on demonstrating how to customize this configuration on a per-event basis

<InlineAlert variant="info" slots="text"/>

Starting with `Edge` extension version **2.4.0** (Android) and **4.3.0** (iOS), the `sendEvent` API supports optional datastream overrides. For detailed information, please refer to the [sendEvent API reference](./api-reference.md#sendEvent).

## Steps to add datastream config overrides for Lifecycle Edge events using rules

Let's add **datastream ID override** or **datastream config overrides** for `Lifecycle Edge` events of type **application.launch** and **application.close** by following the next steps.

### 1. Add a new rule for your mobile property

Give your rule an easily recognizable name in your list of rules.
In this example, the rule is named "Attach datastream config overrides Data to Lifecycle Edge events".

### 2. Configure Lifecycle Edge Events

Now we need to add two Lifecycle Edge events one of type **application.launch** and other of type **application.close**.

#### Configure Lifecycle Edge event of type application.launch

1. Under the **Events** section, select **Add**.
2. From the **Extension** dropdown list, select **Adobe Experience Platform Edge Network**.
3. From the **Event Type** dropdown list, select **AEP Request Event**.
4. On the right pane, click the plus button **Add XDM Event Type** and set the condition to **equals** with value **application.launch**.
5. Select **Keep Changes**.

![Sample rule configuration application.launch event](../assets/tutorial/configOverrides/if-event-application-launch.png)

#### Configure Lifecycle Edge event of type application.close

1. Under the **Events** section, select **Add**.
2. From the **Extension** dropdown list, select **Adobe Experience Platform Edge Network**.
3. From the **Event Type** dropdown list, select **AEP Request Event**.
4. On the right pane, click the plus button **Add XDM Event Type** and set the condition to **equals** with value **application.close**.
5. Select **Keep Changes**.

![Sample rule configuration application.close event](../assets/tutorial/configOverrides/if-event-application-close.png)

Save the event configuration and return to the Rule Editor UI.

### 3. Configure Attach Data Action

Based on the use case you can **either** attach payload for the **datastream ID override** or for the **datastream config overrides**

#### (Option 1) Configure the action to attach datastream ID override payload

1. Under the **Actions** section, select **Add**.
2. From the **Extension** dropdown list, select **Mobile Core**.
3. From the **Action Type** dropdown list, select **Attach Data**.
4. On the right pane, in the **JSON Payload** field, type the config overrides data that will be added to this event.

    **Sample Payload for datastream ID override:**

    ```json
    {
        "config": {
            "datastreamIdOverride": "SampleDatastreamID"
        }
    }
    ```

    ![Action configuration - Datastream ID override payload ](../assets/tutorial/configOverrides/datastream-id-override-payload.png)

5. Select **Keep Changes**.
6. Return to the Rule Editor UI.

**OR**

#### (Option 2) Configure the action to attach datastream config override payload

<InlineAlert variant="info" slots="text"/>

In order to use this feature, configuration overrides in this case event dataset override must be preset in the datastream configuration. Learn more about this [here](https://experienceleague.adobe.com/docs/experience-platform/datastreams/overrides.html?lang=en#event-dataset-overrides)

1. Under the **Actions** section, select **Add**.
2. From the **Extension** dropdown list, select **Mobile Core**.
3. From the **Action Type** dropdown list, select **Attach Data**.
4. On the right pane, in the **JSON Payload** field, type the config overrides data that will be added to this event.

    **Sample Payload for datastream config overrides:**

    ```json
    {
        "config": {
            "datastreamConfigOverride": {
                "com_adobe_experience_platform": {
                    "datasets": {
                        "event": {
                            "datasetId": "SampleEventDatasetIdOverride"
                        }
                    }
                }
            }
        }
    }
    ```

   ![Action configuration - Datastream ID override payload ](../assets/tutorial/configOverrides/datastream-config-override-payload.png)

5. Select **Keep Changes**.
6. Return to the Rule Editor UI.

### 4. Save the Rule and publish the updated library

Final Rule should look like this:
![File Rules configuration](../assets/tutorial/configOverrides/final-rule-configoverrides.png)

**Save** this Rule, **publish** the new Tags library with all the changes, and your rule will be set and ready. Now, Lifecycle Edge events of type **application.launch** and **application.close** will be sent with the overridden datastream ID or datastream config overrides payload.
