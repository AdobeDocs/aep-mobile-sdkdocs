import Tabs from './tabs/index.md'

# Adobe Journey Optimizer

The [Adobe Journey Optimizer](https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html) extension for Adobe Experience Platform Mobile SDKs powers push and in-app notifications for your mobile apps. This extension helps you collects user push tokens and manages interaction measurement with Adobe Experience Platform services.

The following documentation details how to use the extension and required configurations to get started with push and in-app notifications for Adobe Journey Optimizer for Adobe Experience Platform services, app stores, and your apps.

## Before starting

1. Read the tutorial on [getting started with push configuration](https://experienceleague.adobe.com/docs/journey-optimizer/using/get-started/configuration/push-config/push-gs.html) to learn how to configure push channels in Adobe Journey Optimizer.
2. [Update your app's Datastream](#update-datastream-with-profile-dataset) in [Adobe Experience Platform Data Collection](https://experience.adobe.com/#/data-collection/)
3. Integrate with following extensions:
   * [Mobile Core](../mobile-core/index.md)
   * [Adobe Experience Platform Edge Network](../edge-network/index.md)
   * [Identity for Edge Network](../identity-for-edge-network/index.md)

### Update Datastream with a Profile dataset

Navigate to a previously configured Datastream by following the instructions in the [configure datastreams tutorial](../getting-started/configure-datastreams.md) in [Adobe Experience Platform Data Collection](https://experience.adobe.com/#/data-collection/) and select **Add Service**. In the service dropdown select **Adobe Experience Platform**.

* In the **Event Dataset** dropdown, select a dataset previously created in the [Adobe Experience Platform](https://experience.adobe.com/#/platform) UI.
* In the **Profile Dataset** dropdown, select the **AJO Push Profile Dataset**.
* Ensure the **Personalized Destinations** box is checked.
* Ensure the **Adobe Journey Optimizer** box is checked.
* Select **Save** after making these selections.

![](./assets/index/update-datastream.png)

## Set up a mobile property in Adobe Data Collection

To learn how to create the mobile property, please read the tutorial on [creating a mobile property](../getting-started/create-a-mobile-property.md)

Now that a mobile property is created, we can add then setup the Adobe Journey Optimizer extension.

## Setup Adobe Journey Optimizer extension

### Configure extension in the Data Collection UI

Go to the [Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection/), select mobile property and navigate to **Extensions** from the left navigation panel:

1. Navigate to the **Catalog** tab, locate the **Adobe Journey Optimizer** extension, and select **Install**
2. Select the pre-created **AJO Push Tracking Event Dataset** from the **Event Dataset** dropdown.
3. Select **Save**.
4. Follow the publishing process to update SDK configuration.

<InlineAlert variant="info" slots="text"/>

The datasets selected should use a schema that uses the "Push Notification Tracking" XDM field group. The pre-created CJM Push Tracking Dataset contains this XDM field group in its schema definition. For more information, please read the tutorial on [setting up schemas and datasets](../../getting-started/setup-schemas-and-datasets.md).

![](./assets/index/configuration.png)

### Implement extension in mobile app

Follow these steps to integrate the Adobe Journey Optimizer extension.

#### Import the extension

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=import"/>

iOS

<Tabs query="platform=ios&task=import"/>

#### Register the extension with Mobile Core

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

#### Sync the user push token with Adobe

If your app will be using AJO powered push notifications, you will need to sync the push token with Adobe Experience Platform by using the `MobileCore.setPushIdentifier` API.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=sync"/>

iOS

<Tabs query="platform=ios&task=sync"/>

## Configuration keys

You can update the SDK configuration, including the Messaging configuration values, programatically by using the following information.

| Key | Required | Description | Data Type | Operating System |
| :--- | :--- | :--- | :--- | :--- |
| messaging.eventDataset | Yes | Experience Event Dataset ID which can be found from Experience Platform | String | Android/iOS |
| messaging.useSandbox | No | A variable that lets the `apnsSandbox` environment be used for receiving push notifications. More details can be found in the [messaging documentation](https://github.com/adobe/aepsdk-messaging-ios/blob/main/Documentation/sources/getting-started.md#using-an-apns-sandbox-push-environment) | Boolean | iOS |

## Guides and How-tos

* [Track Push Interactions](api-reference.md#addpushtrackingdetails)
* [Programmatically control the display of in-app messages](./tutorials/messaging-delegate.md)
* [Call native code from the JavaScript of an in-app message](./tutorials/native-from-javascript.md)
* [Execute JavaScript code in an in-app message from native code](./tutorials/javascript-from-native.md)
* [Handle URL clicks from an in-app message](./tutorials/handle-clicks.md)

### Other public classes, methods, and enums

* [Public classes and enums](./public-classes.md)

### Troubleshooting

* [Validate in-app messaging using AEPAssurance SDK extension and the Assurance UI](./tutorials/validate-messages.md)
