---
title: Mobile to web identity sharing
description: Learn how to add visitor tracking between an app and the mobile web.
keywords:
- Identity for Mobile Core
- Identity
- Mobile Core
- Tutorial
- Visitor tracking
- Troubleshooting
- Web application
- Mobile application
---

import Tabs from '../tabs/id-sharing.md'

# Mobile to web identity sharing

If your app opens mobile web content, you need to ensure that visitors are not identified separately as they move between the native and mobile web.

## Visitor IDs in apps

The Mobile SDK generates a unique visitor ID when the app is installed. This ECID is stored in persistent memory on the mobile device and is sent with every hit. The ECID is removed "when the user uninstalls the app, sets the Mobile SDK global privacy status to `optedout`, or calls the [resetIdentities](../api-reference/#resetidentities) API".

<InlineAlert variant="info" slots="text"/>

When the Mobile SDK privacy status is set to `optedout`, and the ECID is removed, a new unique visitor ID (ECID) is generated when the user sets the global privacy status to `optedin`.

<InlineAlert variant="info" slots="text"/>

App visitor IDs persist through upgrades.

## Visitor IDs in the mobile web

Typical mobile web implementations use one of the Adobe JavaScript libraries available for web platform, such as Adobe Experience Platform Web SDK, or `AppMeasurement.js`. These libraries have their own methods of generating unique visitor IDs, which causes a different visitor ID to be generated when you open mobile web content from your app.

To use the same visitor ID in the app and mobile web and pass the visitor ID to the mobile web in the URL, complete the following steps:

## Implementing visitor tracking between an app and the mobile web

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=implement"/>

iOS

<Tabs query="platform=ios&task=implement"/>

<!--- React Native

<Tabs query="platform=react-native&task=implement"/>

Flutter

<Tabs query="platform=flutter&task=implement"/> --->

The ID service code on the destination domain extracts the ECID from the URL instead of sending a request to Adobe for a new ID. The ID service code on the destination page uses this ECID to track the visitor. On hits from the mobile web content, verify that the `mid` parameter exists on each hit, and that this value matches the `mid`value that is being sent by the app code.

## Troubleshooting

To ensure that the visitor tracking was properly implemented, please verify the following conditions:

* Ensure that the output from the [`appendToUrl`](../api-reference.md#appendtourl--appendvisitorinfoforurl) or [`getUrlVariables`](../api-reference.md#geturlvariables) API includes accurate ECID and Experience Cloud orgID values. Please note that the orgID set up for the Mobile SDK **must** match the orgID configured in the web implementation.
* Ensure the timestamp (`TS`) included in the [`appendToUrl`](../api-reference.md#appendtourl--appendvisitorinfoforurl) or [`getUrlVariables`](../api-reference.md#geturlvariables) result did **not** expire. Since the results expire five minutes after retrieval, you should **not** cache and re-use the results in your application. Instead, please retrieve the result on demand before loading the WebView.
* Ensure you do **not** re-encode the generated query string. The query string returned by the [`getUrlVariables`](../api-reference.md#geturlvariables) API is already URL encoded.
  
Once you've confirmed the mobile setup, check your web implementation.

If you're using the Adobe Experience Platform Web SDK, ensure that you're using the latest version of Web SDK. For further information, please read the guide on [mobile-to-web and cross-domain ID sharing](https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/identity/id-sharing) in Web SDK.

If you're using the AppMeasurement.js library, ensure that you're using the latest version of the Visitor ID and the AppMeasurement libraries. For further information, please read the guide on the [overwriteCrossDomainMCIDAndAID API](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/configurations/overwrite-visitor-id) in Identity Service.
