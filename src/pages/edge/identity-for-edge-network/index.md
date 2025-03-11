---
title: Identity for Edge Network overview
description: An overview for the Identity for Edge Network mobile extension.
keywords:
- Edge Network
- Identity for Edge Network
- Product overview
---

import Tabs from './tabs/index.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Identity for Edge Network

The Identity for Edge Network mobile extension enables identity management, including the Experience Cloud ID (ECID), from your mobile app when using the Adobe Experience Platform Mobile SDK and the [Edge Network extension](../edge-network/index.md).

Use the Identity for Edge Network extension when including the Edge Network extension into an application. The Identity for Edge Network extension is not used with Adobe Solution extensions, which must use the [Identity for Experience Cloud ID Service extension](../../home/base/mobile-core/identity/index.md).

## Configure the Identity extension in the Data Collection UI

1. In Data Collection UI, in your mobile property, select the **Extensions** tab.
2. On the **Catalog** tab, locate or search for the **Identity** extension, and select **Install**.
3. There are no configuration settings for **Identity**.
4. Select **Save**.
5. Follow the publishing process to update SDK configuration.

![Identity for Edge Network extension configuration](./assets/index/configuration.png)

## Add the Identity extension to your app

<InlineAlert variant="info" slots="text"/>

The following instructions are for configuring an application using Adobe Experience Platform Edge mobile extensions. If an application will include both Edge Network and Adobe Solution extensions, both the Identity for Edge Network and Identity for Experience Cloud ID Service extensions are required. Find more details in the [frequently asked questions](./faq.md).

<InlineAlert variant="info" slots="text"/>

When using the [`setAdvertisingIdentifier`](./api-reference.md#setadvertisingidentifier) API, see the setup guide for [Consent for Edge Network](../consent-for-edge-network/index.md) for instructions on setting up the extension and profile schema for proper usage.

### Include Identity extension as an app dependency

Add MobileCore, Edge extensions as dependencies to your project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

### Initialize Adobe Experience Platform SDK with Edge Identity Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](/src/pages/home/getting-started/get-the-sdk/#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

<InitializeSDK query="componentClass=TabsBlock"/>


## Advertising identifier

The Identity for Edge Network extension compares the previously stored advertising identifier value with the new value received from the [`setAdvertisingIdentifier`](./api-reference.md#setadvertisingidentifier) API and handles the following scenarios:

Ad tracking enabled - when the new value sent to the API is:

* A valid UUID string (example: `"a127a99e-50be-4d87-bf6f-6ab9541c105b"`)

Process:

1. Updates the client side XDM `IdentityMap` with the new value for IDFA/GAID, which is included in subsequent [XDM Experience events](../edge-network/xdm-experience-events.md). For more details, see the [standard Identity namespaces](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html#standard).
2. Sends a [consent update event](https://experienceleague.adobe.com/docs/experience-platform/xdm/data-types/consents.html) with ad ID consent preferences set to `yes` (only when a valid ad ID is absent from the `IdentityMap` and the Edge Consent extension is registered and properly configured).

Ad tracking disabled - Given a valid ad ID already exists in the `IdentityMap`, and the new value sent to the API is:

* `null`/`nil`
* Empty string (`""`)
* All-zeros string (`"00000000-0000-0000-0000-000000000000"`)  

Process:

1. Removes the ad ID from the client side XDM `IdentityMap`, which is removed from subsequent [XDM Experience events](../edge-network/xdm-experience-events.md).
2. Sends a [consent update event](https://experienceleague.adobe.com/docs/experience-platform/xdm/data-types/consents.html) with ad ID consent preferences set to `no` (only when the Edge Consent extension is registered and properly configured).

No operations are executed when no changes are detected between the previously stored and new ad ID value.
