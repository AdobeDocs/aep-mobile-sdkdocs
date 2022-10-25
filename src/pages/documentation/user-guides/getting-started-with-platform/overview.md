# Getting started with Adobe Experience Platform

This tutorial illustrates how you may send Experience Data Model (XDM) commerce events to Adobe Experience Platform via Experience Edge using the AEP Edge extension in a sample application, provided to you in iOS (Swift) and Android.

The demo mobile application has multiple tabs. For this exercise, the `Edge` and `Assurance` tabs will be used, demonstrating XDM commerce events in a mobile application.

## Prerequisites for this tutorial

* Access to Adobe Experience Platform
* Access to Data Collection UI dashboard
* Access to Adobe Experience Platform Assurance
* Minimal Swift/Android development knowledge
* General knowledge about the Adobe Experience Platform Mobile SDKs

## Initialize Adobe Experience Platform for data collection

To start collecting data in Adobe Experience Platform, you need to create an XDM schema and a dataset. Follow these steps to get started:

1. In the browser, navigate to [Adobe Experience Platform](https://experience.adobe.com/platform) and login with your credentials.
2. Create an XDM Schema as follows:
   * From the left panel, select Schemas
   * Select `Create schema`
   * Select `XDM Experience event`
   * Add the following existing field groups:
     * Environment Details
     * Commerce Details
   * Set a name for this schema and click `Save`.

![](./assets/overview/xdm-schema-example.png)

**Note:** Please note that the selected sandbox is Prod.

3. Create a dataset from the schema as follows:
   * From the left panel, select Datasets
   * Select `Create dataset from schema`
   * Select the schema you previously created
   * Select `Next`
   * Set a name for this dataset and select `Finish`.

## Generate a Datastream identifier

The SDK requires a configuration identifier that ensures the implementation matches the server-side Datastream configuration and data is routed/received to/from the correct destination.

To create a configuration identifier use the following steps:

1. If your organization is enabled for multiple sandboxes, in [Adobe Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection) first select the sandbox from the top right corner. For more details about sandboxes, please read the [sandboxes overview](https://experienceleague.adobe.com/docs/experience-platform/sandbox/home.html).
2. From the left panel select `Datastreams`, then select `New Datastream`.
3. Provide a name and description, select `Save` and then proceed to next step to set up the services. 

![](./assets/overview/create-datastream.png)

1. To send events to Adobe Experience Platform, enable the `Adobe Experience Platform` section as shown below:
   
   - Select `Add service` and from the drop-down select `Adobe Experience Platform`.
   
   * For the `Event Dataset`, select the XDM dataset you created in [Initialize Adobe Experience Platform for data collection](../../edge-network/index.md).
   * Click `Save`.

![](./assets/overview/enable-datastreams.png)

## Configure the tags property

As a prerequisite, the Adobe Experience Platform Edge extension requires the successful implementation of the Adobe Experience Platform Mobile SDK - [Mobile Core](../../mobile-core/index.md).

Experience Edge extension relies on the [Mobile Core](../../mobile-core/index.md) for the transmission of events, managing identity (ECID), and triggering client-side rules based on XDM.

1. First, follow the steps in the [set up a mobile property tutorial](../../getting-started/create-a-mobile-property.md) in the Data Collection UI.
2. Install the `Adobe Experience Platform Edge` extension from the Catalog.
3. In the configuration view, from `Edge Configuration`  section select the `Datastream` configuration you created in the `Generate a Datastream identifier` step and click `Save`.
4. Install the `AEP Assurance` extension from the Catalog.
5. Go to the Publishing Flow menu, select the development library you created and click `Add All Changed Resources`.
6. Click `Save & Build for Development` to publish the changes in the **Development** environment.

## Download the sample application and the AEP mobile extensions 

### Swift

Download the iOS Swift Sample application from [GitHub - beta-assignment-1](https://github.com/adobe/aepsdk-sample-app-ios/releases/tag/beta-assignment-1), then follow the steps described in [AEP SDK Sample App Swift - Installation](https://github.com/adobe/aepsdk-sample-app-ios/tree/beta-assignment-1#installation).

* Navigate to the `Swift` directory, and run the following command from terminal: `pod install`.
* Open the Xcode workspace by running the command `open AEPSampleApp.xcworkspace`.
* Run the `AEPSampleApp` target on the simulator of your choice.

## Set up the configuration

In the [Data Collection UI](https://experience.adobe.com/#/data-collection/), go to the **Environments** tab in the previously created mobile property created in [the previous step](#configure-the-tags-property) and select the Development icon (![img](./assets/overview/development-icon.png)). Find the **Environment File ID** at the top and copy it.

Set the `LAUNCH_ENVIRONMENT_FILE_ID` to the copied Environment File ID in the `MainApp` (Android) / `AppDelegate` (iOS) class.

## Use the sample application

### Adobe Experience Platform Edge extension and XDM objects

This application uses the Adobe Experience Platform Edge extension for sending XDM formatted data to the Adobe Experience Edge Network and so to Adobe Experience Platform. The XDM data is modelled based on the XDM Schemas you have configured in Adobe Experience Platform.

The sample app includes automatically generated source classes for the XDM Objects that define the commerce field group configured in the previous step. To explore these, check the `MobileSDKCommerceSchema` class and its usages in `EdgeViewController.swift` (iOS) / `EdgeTab.java` (Android).

### Commerce events

In the sample app, click on the `Edge` tab that demonstrates the Commerce field group usage. In the `XDM Commerce Example` section there are two buttons:

* Add to cart
* Purchase

When the `Purchase` button is clicked, a new XDM Commerce Purchase Experience Event is created and sent to the Adobe Experience Edge Network.

```json
{
  "events": [
    {
      "xdm": {
        "_id": "F6BB7EE3-C411-4597-A97F-36A49035DCED",
        "eventType": "commerce.purchases",
        "timestamp": "2020-10-09T00:18:18Z",
        "productListItems": [
          {
            "quantity": 1,
            "currencyCode": "USD",
            "priceTotal": 34.76,
            "SKU": "SHOES123",
            "name": "Shoes"
          },
          {
            "quantity": 2,
            "currencyCode": "USD",
            "priceTotal": 30.6,
            "SKU": "HAT567",
            "name": "Hat"
          }
        ],
        "commerce": {
          "order": {
            "priceTotal": 65.36,
            "currencyCode": "USD",
            "payments": [
              {
                "paymentAmount": 65.36,
                "paymentType": "Credit card"
              }
            ]
          },
          "purchases": {
            "value": 1
          }
        }
      }
    }
  ]
}
```

### Using Adobe Experience Platform Assurance

AEP Assurance (formerly known as Project Griffon) is a product from Adobe that lets you inspect, validate, and debug data collection and experiences for your mobile application. The demo app is set up to use the AEP Assurance mobile extension, which allows you to view the events being sent through the AEP Mobile SDK.

1. Visit [](https://experience.adobe.com/assurance) and login with your Adobe credentials.
2. Create a new Session:
   * Select `Create Session` in the top right.
   * In the `Create New Session` dialog, review the instructions, and then select `Start`.
   * When asked for the **Base URL**, enter `sampleapp://` , then click `Next`.
3. After starting an Assurance session, click on the the Session Details button on the right corner of the Assurance page and copy the session link.

   If you are using a real device, you can also use the `Scan QR Code` functionality. You can then skip to step 6.

   ![](./assets/overview/commerces-session-details.png)

4. Go to the sample application that is installed on your device, and click on the `Assurance` tab.
5. Paste the **Assurance Session URL** that you copied from Assurance, and click `Connect`.

   ![](./assets/overview/commerce-assurance-login.png)

6. Enter the PIN from Assurance and click `Connect`.

   ![](./assets/overview/commerce-assurance-connection.png)

7. Once connected to Assurance, you will see a Platform icon in red color on the top right corner of the app view. The color of the Platform icon becomes gray if the connectivity to Assurance server is lost for any reason. In this case, you want to reconnect to continue to see the session in the UI.
8. In the Assurance session, you should now start seeing events populating the Events List. When clicking the `Purchase` button from the `Edge` tab, you should see the Experience events sent to Experience Edge. For more details, refer to [Event types handled by the AEP Mobile extension](../../edge-network/validation.md).

   To check the XDM Experience event was successfully validated, check that the `validation for the given event was successful` message is present in the `service com.adobe.streaming.validation` event.

## Queries in Adobe Experience Platform

After using the sample demo application to view products and checkout items in a cart, the XDM Experience Events containing the commerce data are sent to Adobe Experience Platform through Experience Edge.

<InlineAlert variant="info" slots="text"/>

It may take up to 15-20 minutes before the data shows up in Adobe Experience Platform.

Query the dataset which stores the commerce data by doing the following:

1. Log in to [Adobe Experience Platform](https://experience.adobe.com/platform) using your Adobe credentials.
2. Select your Adobe Experience Cloud Organization to the organization ID used to configure the demo application.
3. On the navigation panel, under Data Management, select Datasets and select the dataset you created at the beginning of this tutorial. From the right panel, copy the `Table name` value.
4. From the left panel, select **Queries**.
5. Select the **Overview** tab, then select **Create query**.
6. In the text box, enter a SQL query against your dataset table.

   ```sql
   SELECT * FROM paste_your_table_name_here WHERE eventType = 'commerce.purchases' LIMIT 10
   ```

7. Select the "Play" icon to run the query. The results will appear in the **Results** tab at the bottom.

<InlineAlert variant="info" slots="text"/>

You can save this query and run it later when needed.

## Implement Add to cart XDM events

For this exercise, implement the "Add to cart functionality" in the sample application. Navigate to `EdgeViewController.swift` (iOS) / `EdgeTab.java`(Android) and implement the `sendAddToCartXDMEvent` function. The recommended eventType is `commerce.productListAdds`.

<InlineAlert variant="info" slots="text"/>

Use the `sendPurchaseXDMEvent` as an example and Assurance to validate that the XDM Experience Event is properly formatted.

## Next steps

If you would like to explore other XDM schemas for your mobile use-case, find more details in the [Adobe Experience Platform - Experience Edge](../../edge-network/index.md) page.

To learn more about Experience Data Model (XDM), schemas, datasets, and field groups, read [XDM System overview](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html).

## Other tutorials

### Sample XDM implementation

To see a sample XDM implementation, please read the [sample XDM Implementation tutorial](./sample-xdm-implementation.md).

### Rules and XDM events

To learn more about the rules used for XDM events, please read the [rules and XDM events tutorial](./rules-and-xdm-events.md).

