---
title: Datastream config override for Edge events using Rules.
description: This guide provides instructions on overriding datastream ID and datastream configuration for Edge Network Requests that are not initiated by the sendEvent API, all accomplished through Tags Rules.
keywords:
- Edge Network
- Datastream config overrides
- Datastream ID override
- Guide
---

# Overriding datastream ID and configuration for Edge network requests using Tags rules

By default, all Edge requests are sent to the datastream configuration specified in the Adobe Experience Platform Edge Network extension configuration settings. This tutorial will offer examples demonstrating how to customize this configuration on a per-event basis

<InlineAlert variant="info" slots="text"/>

Starting with `Edge` extension version **2.4.0** (Android) and **4.3.0** (iOS), the `sendEvent` API supports optional datastream overrides. For detailed information, please refer to the [sendEvent API reference](./api-reference.md#sendEvent).

## Datastream configuration overrides in Edge based extensions using rules

Let's consider a situation where you are working with **Lifecycle For Edge Network** and you want to override the datastream ID and datastream configuration for Lifecycle events routed through the Edge Network. Follow these steps to achieve that:

1. Navigate to the **DataCollection UI** and go to **Tags** select your mobile property.

2. Add a new rule for your mobile property:

    a. Provide a descriptive name for your Rule.

    b. Under the **If** section in the **Events** category, add 2 Events.

    c. Configure the first event as Lifecycle start event. Set the `Extension` to **"Adobe Experience Platform Edge Network"** and the `Event Type` to **"AEP Request Event"**. Click the plus button `Add XDM Event Type` and set the condition to **equals** with value **"application.launch"**.

    ![Add XDM Event Type](../assets/configOverrides/add-xdm-event-type.png)

    ![Sample rule configuration application.launch event](../assets/configOverrides/if-event-application-launch.png)

    d. For the second event, configure Lifecycle pause event in a similar manner. Set the `Extension` to **"Adobe Experience Platform Edge Network"** and the `Event Type` to **"AEP Request Event"**. Click the plus button to `Add XDM Event Type` and set the condition to **equals** with value **"application.close"**.

    ![Sample rule configuration application.close event](../assets/configOverrides/if-event-application-close.png)

    d. Save the event configuration and return to the Rule Editor UI.

    e. In the **Then** section under **Actions** add a new Action.

    f. In the Action configuration view, set the **Extension** to "Mobile Core" and the **Action Type** to "Attach Data."

    g. Now, add the JSON payload for your `datastream ID override` and `datastream config override` in the following format:

    **Payload Format for datastream ID override:**

    ```json
    {
        "config" : {
            "datastreamIdOverride" : "<Your_Datastream_ID>"
        }
    }
    ```

    **Sample Payload for datastream ID override:**

    ```json
    {
        "config": {
            "datastreamIdOverride": "SampleDatastreamID"
        }
    }
    ```

    ![Action configuration - Datastream ID override payload ](../assets/configOverrides/datastream-id-override-payload.png)

    **Payload Format for datastream config overrides:**

    ```json
    {
        "config" : {
            "datastreamConfigOverride" : {
                "<Your_Config_Key>" : "<Your_Config_Value>"
            }
        }
    }
    ```

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
    ![Action configuration - Datastream ID override payload ](../assets/configOverrides/datastream-config-override-payload.png)

    h. **Save** the Action configuration and return to the Rule Editor UI. Your rule should look like this:

    ![File Rules configuration](../assets/configOverrides/final-rule-configoverrides.png)

    i. **Save** this Rule, **publish** the new Tags library with all the changes, and your rule will be set and ready. Now, all Media Edge Requests will be sent with the overridden datastream ID and Datastream Config Overrides.
