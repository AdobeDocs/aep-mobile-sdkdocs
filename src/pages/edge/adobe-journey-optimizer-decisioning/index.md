---
title: Adobe Journey Optimizer Decisioning overview
description: An overview for the Adobe Journey Optimizer Decisioning mobile extension.
keywords:
- Adobe Journey Optimizer Decisioning
- Product overview
---

import Tabs from './tabs/index.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Adobe Journey Optimizer - Decisioning Extension

The Adobe Journey Optimizer - Decisioning extension powers real-time personalization workflows using Adobe Journey Optimizer - Offer Decisioning or Adobe Target in mobile apps via the Edge Network. It helps deliver personalized decisions to your app and enables tracking user interactions with the proposed decisions.

## Prerequisites

Before starting, make sure the following steps are completed.

* Your organization is provisioned for edge decisioning.
* If using Adobe Target, Target activities are set up in your desired workspace in your organization on Target UI. For more details, see the [Target activities guide](https://experienceleague.adobe.com/docs/target/using/activities/target-activities-guide.html).
* If using Journey Optimizer - Offer Decisioning, decisions are set up in your desired sandbox in your organization on Experience Platform UI. For more details, see the [create decisions guide](https://experienceleague.adobe.com/docs/offer-decisioning/using/create-manage-activities/create-offer-activities.html).

## Adobe Experience Platform Data Collection setup

### Configure the Datastream for Adobe Target and/or Journey Optimizer - Offer Decisioning

On [Experience Platform Data Collection](https://experience.adobe.com/#/data-collection/), navigate to **Data Collection** > **Datatreams** using the left navigation panel. Select an existing datastream or create a new datastream. For more details, see the [configure datastreams guide](../../home/getting-started/configure-datastreams.md).

1. In the datastream, click on the desired environment from the list. Make sure **Adobe Experience Platform** section is enabled and configured with the required information like **Sandbox** and **Event Dataset**.
2. For Journey Optimizer - Offer Decisioning, navigate to **Adobe Experience Platform** section and enable **Offer Decisioning** checkbox.
![Datastream configuration - Offer Decisioning](./assets/index/configuration-offer-decisioning.png)
3. For Adobe Target, navigate to **Adobe Target** section and enable it. Specify the configuration. For more information on the configuration settings, refer to the [Administer Target Overview](https://experienceleague.adobe.com/docs/target/using/administer/administrating-target.html).
![Datastream configuration - Adobe Target](./assets/index/configuration-adobe-target.png)
1. Click **Save**.

### Configure Adobe Journey Optimizer - Decisioning extension in Tag property for Mobile

On [Experience Platform Data Collection](https://experience.adobe.com/#/data-collection/), navigate to **Data Collection** > **Tags** using the left navigation panel. Select an existing mobile tag property or create a new property.

1. In your mobile property, navigate to **Extensions** in the left navigation panel and click on the **Catalog** tab.
2. In the extensions Catalog, search or locate the **Adobe Journey Optimizer - Decisioning** extension, and click **Install**.
3. Since an extension configuration is not necessary, click **Save**.
4. Follow the publishing process to update SDK configuration. For more details, see the [publish the configuration guide](../../home/getting-started/create-a-mobile-property.md#publish-the-configuration).

![Adobe Journey Optimizer - Decisioning extension configuration](./assets/index/configuration.png)

## Add the Adobe Journey Optimizer - Decisioning extension to your app

<InlineAlert variant="warning" slots="text"/>

For the AEPOptimize APIs to work properly, you need to integrate Mobile Core and Edge extensions in your mobile app. For more details see, documentation on [Mobile Core](../../home/base/mobile-core/index.md) and [Adobe Experience Platform Edge Network](../../edge/edge-network/index.md).

### Include the Optimize extension as an app dependency

Add MobileCore, Edge and Optimize extensions as dependencies to your project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

### Initialize Adobe Experience Platform SDK with Optimize Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](/src/pages/home/getting-started/get-the-sdk/#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

<InitializeSDK query="componentClass=TabsBlock"/>

## Adobe Journey Optimizer - Offer Decisioning

### DecisionScope

The `DecisionScope` public class provides a constructor to create a scope object using the activityId, placementId, and optional itemCount. The decision scope activity and placement information can be obtained from the decision on the Experience Platform UI.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=decisionscope"/>

iOS

<Tabs query="platform=ios&task=decisionscope"/>

Alternately, another of the class's constructor can be used to create a scope object using the encoded decision scope. The encoded scope can also be read directly from the decision on the Experience Platform UI.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=encodedscope"/>

iOS

<Tabs query="platform=ios&task=encodedscope"/>

## Adobe Target

### Target location

The `DecisionScope` public class provides a designated initializer which can be used to create a Target location (or mbox).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=target-location"/>

iOS

<Tabs query="platform=ios&task=target-location"/>

### Target Parameters

Target Parameters can be sent in a personalization query request to the Experience Edge network by adding them in `data` dictionary when calling the `updatePropositions` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=target-parameters"/>

iOS

<Tabs query="platform=ios&task=target-parameters"/>

### Target Third Party ID

To use Target Third Party ID in the Experience Edge mobile workflows, the corresponding namespace needs to be configured in Experience Platform Data Collection.

1. On [Experience Platform Data Collection](https://experience.adobe.com/#/data-collection/), navigate to **Data Collection** > **Datatreams** using the left navigation panel.
2. Select your configured datastream and click on the desired environment from the list.
3. Navigate to **Adobe Target** section, specify the **Target Third Party ID Namespace**.
4. Click **Save**.

![Target Third Party ID configuration](./assets/index/target-tpid.png)

In your mobile application, integrate the Identity for Edge Network extension to add the Target Third Party ID in the Identity Map in the personalization query request to the Edge network when calling the `updatePropositions` API. For more details, see the [Identity for Edge Network - updateIdentities API](../../edge/identity-for-edge-network/api-reference.md#updateidentities).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=target-tpid"/>

iOS

<Tabs query="platform=ios&task=target-tpid"/>

### Target Audience Segmentation using Mobile Lifecycle Metrics

To send mobile Lifecycle metrics to Target for creating audiences, a rule needs to be set up on Experience Platform Data Collection to attach these metrics to the Edge personalization query requests. Follow the link to learn [how to target visitors using Custom Parameters in Adobe Target](https://experienceleague.adobe.com/docs/target/using/audiences/create-audiences/categories-audiences/custom-parameters.html).

#### Create a rule

On Experience Platform Data Collection, navigate to **Data Collection** > **Tags** using the left navigation panel. Select an existing mobile tag property or create a new property.

1. In your mobile property, navigate to **Rules** in the left navigation panel and click on **Create New Rule**. If there already are existing rules, you can click on **Add Rule** to add a new rule.
2. Provide a name for your rule. In the example here, the rule is named "Attach Mobile Lifecycle Metrics to Personalization Query Requests".

#### Select an event

1. Under the **Events** section, click on **Add**.
2. From the **Extension** dropdown list, select **Adobe Experience Platform Edge Network**.
3. From the **Event Type** dropdown list, select **AEP Request Event**.
4. On the right pane, click on **+** to specify **XDM Event Type** equals **personalization.request**.
5. Click on **Keep Changes**.

![Adobe Journey Optimizer - Decisioning extension Lifecycle rule Event Configuration](./assets/index/lifecycle-rule-event.png)

#### Define the action

1. Under the **Actions** section, click on **Add**.
2. From the **Extension** dropdown list, select **Mobile Core**.
3. From the **Action Type** dropdown list, select **Attach Data**.
4. On the right pane, specify the **JSON Payload** containing metrics of interest. An example JSON Payload containing all of the mobile Lifecycle metrics is shown below.
5. Click on **Keep Changes**.

![Adobe Journey Optimizer - Decisioning extension Lifecycle rule Action Configuration](./assets/index/lifecycle-rule-action.png)

```javascript
{
    "data": {
        "__adobe": {
            "target": {
                "a.appID": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.appid%}",
                "a.locale": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.locale%}",
                "a.RunMode": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.runmode%}",
                "a.Launches": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.launches%}",
                "a.DayOfWeek": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.dayofweek%}",
                "a.HourOfDay": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.hourofday%}",
                "a.OSVersion": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.osversion%}",
                "a.CrashEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.crashevent%}",
                "a.DeviceName": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.devicename%}",
                "a.Resolution": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.resolution%}",
                "a.CarrierName": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.carriername%}",
                "a.InstallDate": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.installdate%}",
                "a.LaunchEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.launchevent%}",
                "a.InstallEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.installevent%}",
                "a.UpgradeEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.upgradeevent%}",
                "a.DaysSinceLastUse": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.dayssincelastuse%}",
                "a.DailyEngUserEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.dailyenguserevent%}",
                "a.DaysSinceFirstUse": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.dayssincefirstuse%}",
                "a.PrevSessionLength": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.prevsessionlength%}",
                "a.MonthlyEngUserEvent": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.monthlyenguserevent%}",
                "a.DaysSinceLastUpgrade": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.dayssincelastupgrade%}",
                "a.LaunchesSinceUpgrade": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.launchessinceupgrade%}",
                "a.ignoredSessionLength": "{%~state.com.adobe.module.lifecycle/lifecyclecontextdata.ignoredsessionlength%}"
            }
        }
    }
}
```

#### Save the rule and republish the configuration

After you finish your rule configuration, verify the rule details are as shown below:

![Adobe Journey Optimizer - Decisioning extension Lifecycle rule Configuration](./assets/index/lifecycle-rule.png)

1. Click on **Save**.
2. [Republish your configuration](../../home/getting-started/create-a-mobile-property.md#publish-the-configuration) to the desired environment.

### Analytics for Target (A4T)

Set up the Analytics for Target (A4T) cross-solution integration by enabling the A4T campaigns to use Adobe Analytics as the reporting source for a Target activity. Subsequently, all reporting and segmentation for that activity is based on Analytics data collection. For more information, see [Adobe Analytics for Adobe Target (A4T)](https://experienceleague.adobe.com/docs/target/using/integrate/a4t/a4t.html).

Once Analytics is listed as the reporting source for an activity on Target UI, based on server-side or client-side logging appropriate actions need to be taken in the customer mobile apps to register impressions, visits/visitors and possibly conversions with Adobe Analytics.

When using server-side logging, [tracking methods](#proposition-tracking-using-direct-offer-class-methods) need to be implemented in the customer mobile apps for server-side data exchange to happen with Adobe Analytics. This is because Optimize mobile SDK operates in prefetch mode and display notifications are required to indicate scope content is rendered so Experience Edge should share relevant A4T payload with Adobe Analytics. In addition, content interactions need to be reported using click notifications and these may lead to additional A4T data exchange with Adobe Analytics.

<InlineAlert variant="info" slots="text"/>

**Server-side logging**: If Analytics is enabled and configured in your datastream for the desired environment, then it is considered server-side logging. In this case, the Experience Edge handles forwarding any Target A4T payloads to Adobe Analytics, upon tracking method calls, and no Analytics tokens are returned to the client.<br/>**Client-side logging**: If Analytics is disabled in your datastream for the desired environment, then it is considered client-side logging. In this case, Analytics tokens are returned to the client and it is the responsibility of the customer to extract and send the data to Adobe Analytics, if desired.

## Tracking

### Proposition tracking using direct Offer class methods

User interactions with the decision propositions can be tracked using the following public methods in the `Offer` class.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=proposition-tracking-offer"/>

iOS

<Tabs query="platform=ios&task=proposition-tracking-offer"/>

Upon calling these `Offer` methods, an Experience Event is sent to the Edge network with the proposition interaction data for the given offer.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=send-event-offer"/>

iOS

<Tabs query="platform=ios&task=send-event-offer"/>

### Proposition tracking using Edge extension API

For more advanced tracking use cases, additional public methods are available in the `Offer` and `Proposition`/`OptimizeProposition` classes. These methods can be used to generate XDM formatted data for `Experience Event - Proposition Interactions` and `Experience Event - Proposition Reference` field groups.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=proposition-tracking-edge"/>

iOS

<Tabs query="platform=ios&task=proposition-tracking-edge"/>

The Edge `sendEvent` API can then be used to send this tracking XDM data along with any additional XDM and freeform data to the Experience Edge network. Additionally, an override dataset can also be specified for tracking data. For more details, see [Edge - sendEvent API](../../edge/edge-network/api-reference.md#sendevent).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=send-event-edge"/>

iOS

<Tabs query="platform=ios&task=send-event-edge"/>

## Configuration keys

To update the SDK configuration programmatically, use the following information to change the Optimize extension configuration values. For more information, see the [programmatic updates to Configuration guide](../../home/base/mobile-core/configuration/api-reference.md#updateconfiguration).

| Key | Required | Description | Data Type |
| :--- | :--- | :--- | :--- |
| optimize.datasetId | No | Override dataset's Identifier which can be obtained from the Experience Platform UI. For more details see, [Datasets UI guide](https://experienceleague.adobe.com/docs/experience-platform/catalog/datasets/user-guide.html) | String |

<InlineAlert variant="info" slots="text"/>

If the override dataset is used for proposition tracking, make sure the corresponding schema definition contains the `Experience Event - Proposition Interaction` field group. For more information, see the [setup schemas and datasets guide](../../home/getting-started/set-up-schemas-and-datasets.md).
