---
title: Identity for Edge Network frequently asked questions guide
description: A list of frequently asked questions about the Identity for Edge Network mobile extension.
keywords:
- Edge Network
- FAQ
- Frequently asked questions
- Identity for Edge Network
---

import Tabs from './tabs/faq.md'

# Frequently asked questions

## Q: I am using Edge and Adobe Solutions extensions, which Identity extension should I install and register?

A: Both.

When using both Adobe Experience Platform Edge and Adobe Solutions extensions, both Identity for Edge Network and Identity for Experience Cloud ID Service extensions can be registered with the Mobile SDK at the same time.

<InlineAlert variant="info" slots="text"/>

The following instructions are for configuring an application using both Edge Network and Adobe Solutions mobile extensions. If an application will include only Adobe Experience Platform Edge extensions, follow the instructions [here](./index.md#download-and-import-the-identity-extension).

### Download and import the Identity and Identity for Edge Network extensions

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=download"/>

iOS

<Tabs query="platform=ios&task=download"/>

### Register the Identity and Identity for Edge Network extensions with Mobile Core

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

## Q: Will an existing Experience Cloud ID (ECID) migrate to the Identity for Edge Network extension?

A: Yes.

If the application previously installed the Identity for Experience Cloud ID Service extension and upgrades to the Identity for Edge Network extension, the existing ECID value is migrated to the Identity for Edge Network extension on first launch of the application.

Note, however, if the Mobile SDK's privacy status was set to `optedOut` at the time the application is upgraded, the Identity for Experience Cloud ID Service extension will not have an ECID, as it was cleared. In this case, the Identity for Edge Network extension will generate a new ECID.

## Q: Why is the ECID 'primary' field set to 'false'?

A: The ECID starts as non-primary to allow other identifiers to take precedence, but Adobe Experience Platform automatically promotes it to primary when needed.

On the client, the ECID is sent with "primary" set to false to allow your app to designate other identifiers as primary. On the server, if no identifier has "primary" set to true, Adobe Experience Platform automatically sets the first ECID to "primary" value of true. This design gives you control over which identifier is most important for your business and ensures every event has a primary identifier, even if none is explicitly set.

## Q: What is the Experience Cloud ID (ECID) used by the SDK when using both AEP Edge extensions and Adobe Solutions extensions?

A: The Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension each manage their own ECID. However, the two ECIDs are synced as part of the XDM IdentityMap.

At first launch of the application after upgrading to the Identity for Edge Network extension, the existing ECID from the Identity for Experience Cloud ID Service extension is migrated to the Identity for Edge Network extension. In this case both extensions will have the same ECID value.

The [resetIdentities](./api-reference.md#resetidentities) API causes the Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension to independently generate new ECID values. After calling this API, the ECID used by each identity extension will be different.

Changing the privacy status to `optedOut` will clear the ECID value used by the Identity for Experience Cloud ID Service extension. Changing the privacy status back to `optedIn` will generate a new ECID used by the Identity for Experience Cloud ID Service extension. Privacy status changes do not change the ECID used by the Identity for Edge Network extension. Changing the privacy status will cause the ECID used by each identity extension to be different.

When each identity extension has a different ECID, the Identity for Edge Network extension will include the Identity for Experience Cloud ID Service ECID in its [IdentityMap](./api-reference.md#identitymap), and so the Adobe Experience Platform Identity Service will link the the two ECIDs in the customer's Identity Graph.

The following example shows an IdentityMap containing the ECIDs from both Identity for Edge Network extension and Identity for Experience Cloud ID Service extension. The ECID from the Identity for Edge Network extension is always listed first in the list of ECIDs.

```javascript
"identityMap" : {
      "ECID" : [
        {
          "id" : "73586628797489658169123381027155647197",
          "authenticatedState" : "ambiguous",
          "primary" : false
        },
        {
          "id" : "81117527655405132265917409409236407340",
          "authenticatedState" : "ambiguous",
          "primary" : false
        }
      ]
    }
```

## Q: I set privacy status to opted out, why do I see an ECID value when calling `Identity.getExperienceCloudId()`?

A: The Identity for Edge Network extension does not change its ECID based on privacy status changes.

<InlineAlert variant="info" slots="text"/>

The Identity for Edge Network extension and the Identity for Experience Cloud ID Service extension each manage their own ECID value and are generated independently of each other.

The Identity for Edge Network extension does not clear its stored identities or regenerate the ECID due to privacy status changes. Instead, use the [resetIdentities](./api-reference.md#resetidentities) API. Note this API does not clear the ECID but instead generates a new ECID.

Each identity extension has its own API to retrieve their respective ECIDs as well. Use [Identity.getExperienceCloudId](./api-reference.md#getexperiencecloudid) to get the Identity for Edge Network extension's ECID, and [Identity.getExperienceCloudId](../mobile-core/identity/api-reference.md#getexperiencecloudid) to get the Identity for Experience Cloud ID Service extension's ECID.

## Q: How can I get all the identifiers used by the SDK when using both Edge extensions and Adobe Solutions extensions?

A: Use both `getSdkIdentities` and `getIdentities`

To get the identifiers used by the Adobe Solutions extensions, call [getSdkIdentities](../../home/base/mobile-core/api-reference.md#getsdkidentities).

To get the identifiers used by the Edge extensions, call [getIdentities](./api-reference.md#getidentities).

## Q: How can I clear all the identifiers from the SDK when using both Edge extensions and Adobe Solutions extensions?

A: Set privacy status to `optedOut` and call `resetIdentities`

To clear the identifiers used by the Adobe Solutions extensions, call [setPrivacyStatus](../../resources/privacy-and-gdpr.md#set-and-get-privacy-status) and set the privacy status to `optedOut`.

To clear the identifiers used by the Edge extensions, call [resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities)

## Q: In what cases is the Experience Cloud ID (ECID) reset or cleared?

A: The Identity for the Edge Network extension does not automatically reset or clear the ECID. If you observe the ECID being reset, identify if it falls into one of the following cases:

* Cleared when the app is uninstalled.
* Reset using the [`resetIdentities`](../../home/base/mobile-core/api-reference.md#resetidentities) API.
* Reset when the app local persistence is cleared for any reason in the app implementation. To learn more, see where the [Mobile SDK stores identity data](../../../resources/faq.md#where-does-the-sdk-store-identities-and-preferences-on-the-app).

## Q: What steps are needed to generate a new Experience Cloud ID (ECID) for a user when using both Edge extensions and Adobe Solutions extensions?

A: Both identity extensions' ECID must be regenerated in sequence to avoid linking the old and new ECIDs in Adobe Experience Platform.

When using Real-time Customer Profile and Identity Service, the ECIDs from both identity extensions are linked together in the customer's Identity Graph. Care must be taken when regenerating new ECIDs such that the old and new ECIDs are not linked within the same Identity Graph.

Perform the following API calls to regenerate the ECIDs in sequence:

1. Set [privacy status](../../resources/privacy-and-gdpr.md#set-and-get-privacy-status) to `optedOut` to clear the ECID from the Identity direct service extension.
2. Call [resetIdentities](./api-reference.md#resetidentities) to regenerate a new ECID in the Identity for Edge Network extension.
3. Call [getExperienceCloudId](./api-reference.md#getexperiencecloudid) on the Identity for Edge Network extension. This ensures the new ECID is generated before continuing.
4. Set [privacy status](../../resources/privacy-and-gdpr.md#set-and-get-privacy-status) to `optedIn` to generate a new ECID in the Identity direct service extension.

After completing the above steps, each identity extension will have its own, different, ECID. The new ECIDs will get linked under a new Identity Graph for the customer.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=link"/>

iOS

<Tabs query="platform=ios&task=link"/>

## Q: Can I safely remove the Identity for Experience Cloud ID Service extension in an app if I am using the Edge Network extension?

If no other extension relies on the Identity for Experience Cloud ID Service extension, you can safely remove it. Please refer to the [Identity consideration document](../../solution/adobe-analytics/migrate-to-edge-network.md#identity-consideration-for-the-migration) for more information.

## Q: I am passing the ECID from to the WebView using `getUrlVariables` API, but the web interactions get a new ECID assigned, how do I fix this?

1. Ensure that the output from the `getUrlVariables` API includes accurate **ECID** and **Experience Cloud orgID** values. Please note that the orgID set up for the Mobile SDK must match the orgID configured in the Web SDK.
2. Make sure the timestamp (TS) included in the `getUrlVariables` result did not expire (that is, it is not older than 5 minutes since the time it was retrieved). For this reason, it is recommended that the result from `getUrlVariables` is not cached and reused in the app, but retrieved on demand before loading the WebView.
3. The query string returned by the `getUrlVariables` API is already encoded, so please ensure that you do not re-encode the generated query string.
4. If you are using Visitor ID and AppMeasurement, please make sure that you have the latest versions.

For further information, refer to the documentation on [mobile-to-web and cross-domain ID sharing](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/id-sharing.html?lang=en) and [handling WebViews](https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/app-implementation/web-views.html?lang=en#implementation).
