---
title: Adobe Experience Platform Assurance overview
description: An overview for the Adobe Experience Platform Assurance mobile extension.
keywords:
- Adobe Experience Platform Assurance
- Product overview
---

import Tabs from './tabs/index.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Adobe Experience Platform Assurance extension

This extension enables capabilities for [Adobe Experience Platform Assurance](https://experienceleague.adobe.com/docs/experience-platform/assurance/home.html).

To get started with Assurance in your app, you'll need to:

1. Install the AEP Assurance extension in the [Data Collection UI](https://experience.adobe.com/#/data-collection)
2. Add AEP Assurance SDK extension library to your app
   1. Import AEP Assurance into your app
   2. Register and implement extension APIs

## Install the AEP Assurance extension in the Data Collection UI

Go to the [Experience Platform Data Collection UI](https://experience.adobe.com/#/data-collection/) and select your mobile property:

1. In the Data Collection UI, select the **Extensions** tab.
2. On the **Catalog** tab, locate the **AEP Assurance** extension, and select **Install**.
3. Follow the publishing process to update the Mobile SDK configuration.

![](./assets/index/assurance-extension.png)

## Add the Assurance extension to your app

### Include Assurance extension as an app dependency

Add MobileCore and Assurance extensions as dependencies to your project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

### Initialize Adobe Experience Platform SDK with Assurance Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](/src/pages/home/getting-started/get-the-sdk/#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

<InitializeSDK query="componentClass=TabsBlock"/>
