---
title: Mobile Core Identity extension overview
description: An overview for the Mobile Core Identity extension.
keywords:
- Identity for Mobile Core
- Identity
- Mobile Core
- Product overview
---

import Tabs from './tabs/index.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Identity

The Identity for Experience Cloud ID Service extension enables your app with the Experience Cloud ID (ECID). This service helps with the synchronization of Adobe and other customer identifiers.

Include the Identity extension in your application when using any of the following Adobe Solution extensions:

   * [Adobe Analytics](../../../../solution/adobe-analytics/index.md)
   * [Adobe Audience Manager](../../../../solution/adobe-audience-manager/index.md)
   * [Adobe Campaign Standard](../../../../solution/adobe-campaign-standard/index.md)
   * [Adobe Media Analytics](../../../../solution/adobe-media-analytics/index.md)
   * [Adobe Target](../../../../solution/adobe-target/index.md)

If your application uses the [Edge Network extension](../../../../edge/edge-network/index.md), then it must include the [Identity for Edge Network extension](../../../../edge/identity-for-edge-network/index.md). The Identity for Edge Network extension does not replace the Identity for Experience Cloud ID Service extension and both may be required in an application. See the [FAQ](../../../../edge/identity-for-edge-network/faq.md) for more information.

When using third party extensions, check with the extension developer to understand if the Identity extension is a required dependency.

<InlineAlert variant="warning" slots="text"/>

On web or other platforms, there might situations where this extension might not be required, and the implementation of this SDK extension on mobile apps is required.

To get started with Identity, complete the following steps:

1. Add the **Identity** extension to your app.
2. Implement the SDK APIs to complete the following tasks:
   * Update customer IDs.
   * Append Adobe visitor data to a URL string.
   * Return customer IDs.
   * Retrieve Experience Cloud IDs.
   * Set advertising IDs.
   * Set the device notification for push notifications.

## Add the Identity extension to your app

### Include Identity extension as an app dependency

Add Identity extensions as dependencies to your project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

### Initialize Adobe Experience Platform SDK with Identity Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](/src/pages/home/getting-started/get-the-sdk/#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

<InitializeSDK query="componentClass=TabsBlock"/>

<InlineAlert variant="info" slots="text"/>

Previously known as MCID/MID/MCMID, the Experience Cloud ID (ECID) is a 38 character ID that uniquely identifies each visitor in the Adobe Experience Platform.

After the configuration is complete, an ECID is generated and, where applicable, is included on all Analytics and Audience Manager hits. Other IDs, such as custom and automatically-generated IDs, continue to be sent with each hit.
