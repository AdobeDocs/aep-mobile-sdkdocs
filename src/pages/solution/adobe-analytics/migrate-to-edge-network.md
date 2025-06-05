# Migrate from Analytics mobile extension to Adobe Experience Platform Edge Network

## Overview

Are you currently using the Adobe Analytics mobile extension and considering a migration to Edge Network? If so, you've come to the right place!

This guide outlines the available options for migrating to Edge Network and Analytics service:

* Implement the Edge Network extension using the `Edge.sendEvent` API.
* Implement the Edge Bridge extension using the `MobileCore.trackAction` and `MobileCore.trackState` APIs.

The **Edge Network extension** and its `sendEvent` API is the recommended implementation path for sending data to Analytics through Edge Network. It sends Experience Data Model (XDM) formatted data directly to Edge Network, which is well understood by Experience Platform and upstream services. That means the same XDM events can be used in Analytics and other powerful solutions within Experience Platform, such as Journey Optimizer, Journey Orchestration, and Server-Side Forwarding.

The **Edge Bridge extension** offers a drop in solution for migrating existing Analytics extension implementations using the `MobileCore.trackAction` / `MobileCore.trackState` APIs. Edge Bridge automatically routes those API calls to the Edge Network and the Adobe Analytics upstream service when enabled in the datastream configuration.

<InlineAlert variant="info" slots="text"/>

Edge Bridge only supports the Analytics drop-in migration case. If you are looking to migrate your Adobe Target implementation, please refer to the [Adobe Journey Optimizer Decisioning documentation](../../edge/adobe-journey-optimizer-decisioning/index.md) for more details.

## Extensions comparison

|       |  API for sending data | Extensions| XDM transform location |  Platform support with latest Mobile SDKs | Can send to other services (configurable in Datastreams)  |
| ----------- | ----------- |-----------|-----------|-----------|-----------|
| **Edge Network extension** | Edge.sendEvent | 1. Edge Network extension <br/> 2. Identity for Edge Network extension | Client-side| iOS, Android, tvOS, Flutter, React Native | Yes |
| **Edge Bridge extension** | MobileCore.trackAction <br/> MobileCore.trackState | 1. Edge Bridge extension <br/> 2. Edge Network extension <br/> 3. Identity for Edge Network extension| Not required for Analytics. <br/> Server-side Data Prep mapping to XDM in datastream if data is needed for other services. | iOS, Android, tvOS, Flutter, React Native | Yes |
| **Analytics extension** | MobileCore.trackAction <br/>  MobileCore.trackState | 1. Analytics extension <br/> 2. Identity for Experience Cloud ID Service extension | N/A| iOS, Android, tvOS <br/> (Not supported on Flutter, React Native)| N/A |

<InlineAlert variant="info" slots="text"/>

Other foundational extensions include the [Consent for Edge Network extension](../../edge/consent-for-edge-network/index.md) which enables consent preferences collection from your mobile app, and the [Assurance extension](../../home/base/assurance/index.md) for validating your app implementation.

### Workflow comparison

![compare workflows](./assets/index/compareWorkflows.png)

## Get started with the migration

| Steps  |  Edge Network extension | Edge Bridge extension |
| ----------- | ----------- | ----------- |
| 1. [Set up an XDM schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html). Experience Data Model (XDM) is the open and publicly documented data model standard created by Adobe to standardize data collection, and is used across applications that leverage Experience Platform. <br/> **NOTE:** Take advantage of [automatic Analytics variable mapping](https://experienceleague.adobe.com/docs/analytics/implementation/aep-edge/variable-mapping.html) of XDM fields to Analytics dimensions by using the Adobe managed XDM schemas for Lifecycle, Media, Commerce, and more.| ✅  |  |
| 2. [Configure a datastream](https://experienceleague.adobe.com/docs/experience-platform/edge/datastreams/overview.html). A datastream is the server-side configuration used when implementing the Experience Platform Mobile SDK. | ✅  | ✅ |
| 3. **Add the Adobe Analytics service** to your datastream. The datastream controls both whether and how data is sent to Adobe Analytics. You will need your Analytics report suite ID (RSID) for this step.  | ✅ | ✅ |
| 4. **Install the *Edge Network* and *Identity for Edge Network extensions*** in the mobile property (tag) in Data Collection UI, and set the datastream in the Edge Network extension configuration. |  ✅ | ✅ |
| 5. **In your app code**, register the **Edge Network** and **Identity for Edge Network extensions** and set your mobile tag property configuration. | ✅ | ✅ |
| 5b. **In your app code**, also register the **Edge Bridge extension** with registering *Edge Network* and *Identity for Edge Network extensions*. |  | ✅ |
| 6. **Remove the Analytics extension** dependency and extension registration from your mobile app code. <br/> **NOTE:** You should still keep the Analytics extension installed in the mobile property (tag) to ensure published versions of your app (pre-migration) continue to work seamlessly. |  ✅ | ✅ |
| 7 .**Use Edge.sendEvent API** to send data in XDM format to Edge Network based on the schema you have defined. |  ✅ |  |
| 8. **Keep existing MobileCore.trackAction / MobileCore.trackState API calls** to send data in context data format to Experience Platform.|  | ✅ |
| 9. **(Optional) Map your context data to XDM** in Data Prep for Data Collection if required for other services. Not required for Analytics. <br/> **Note:** Mapping using Data Prep for Data Collection requires an [XDM schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html) to be configured for your datastream.| | ✅ |

### Implement the Edge Network extension

To learn about the end to end Edge Network extension implementation process, follow the tutorials below:

* [iOS tutorial](https://github.com/adobe/aepsdk-edge-ios/tree/main/Documentation/Tutorials)
* [Android tutorial](https://github.com/adobe/aepsdk-edge-android/tree/main/Documentation/Tutorials)

### Implement the Edge Bridge extension

To learn about the end to end Edge Bridge extension implementation process, follow the tutorials below:

* [iOS tutorial](https://github.com/adobe/aepsdk-edgebridge-ios/tree/main/Documentation/tutorials)
* [Android tutorial](https://github.com/adobe/aepsdk-edgebridge-android/tree/main/Documentation/tutorials)
  
## Other migration considerations

### Not yet on latest Mobile SDK?

If you are not using the latest version of the Mobile SDK (IE: v4 Mobile SDK or the ACP-prefixed Mobile SDK), you should first migrate to the [latest version](../../home/current-sdk-versions.md), and then continue with this guide.

### Consent for Edge Network extension

The Consent for Edge Network mobile extension enables consent preference collection from your mobile app when using the Experience Platform Mobile SDK and Edge Network.

The privacy status setting (MobilePrivacyStatus.OPT_IN, OPT_OUT, UNKNOWN) set in the mobile tag property which is used by Adobe Experience Cloud mobile extensions (for example, Analytics and Target), are not read nor used by the Edge Network extensions. The Edge Network extensions rely on the Consent for Edge Network extension for this setting.

For more details, please refer to the [Consent for Edge Network extension documentation](../../edge/consent-for-edge-network/index.md).

### Identity consideration for the migration

When using Identity for Edge Network extension, the Mobile SDK automatically migrates an existing ECID (previously known as MID) to the new XDM IdentityMap format out of the box. If you are using custom identities with the `syncIdentifier` / `syncIdentifiers` APIs, you should consider migrating your IDs to the XDM format.

The previous Identity for Experience Cloud ID Service extension can be safely removed from the SDK registration process if there are no other extensions which depend on it. A list of dependent extensions may be found on the [Identity overview page](../../home/base/mobile-core/identity/index.md).

If you need further assistance, please contact [Adobe Experience Cloud customer care](https://experienceleague.adobe.com/?support-solution=General#support).

### Lifecycle for Edge Network

Lifecycle for Edge Network is part of the existing Lifecycle extension but formats the Lifecycle data in XDM to send to the Edge Network. It uses the same `MobileCore.lifecycleStart`/`MobileCore.lifecyclePause` APIs so there are no additional client-side changes required if you already have these APIs implemented in your application. However, there are a few important differences from Lifecycle used with Analytics.

To enable Lifecycle for Edge Network, a rule must be created in the application's Tags mobile property in Data Collection. The rule is required regardless if the application is using the Edge extension or the Edge extension with the Edge Bridge extension to send data to the Adobe Experience Platform. Use the following guide to [configure a rule to forward Lifecycle data to Platform](../../edge/lifecycle-for-edge-network/index.md#configure-a-rule-to-forward-lifecycle-data-to-platform).

Lifecycle for Edge Network dispatches an [Application Launch (Foreground)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-foreground) event on every app launch and an [Application Close (Background)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-background) event on every app close. With every app launch and app close being its own event, customers can define user sessions at reporting time instead of needing to change a client-side configuration to determine when sessions start and end.

The Analytics extension includes additional data with every hit sent, such as some Lifecycle data. The Edge Network extension is a general purpose extension handling a variety of use cases including Messaging, Optimize, and Consent. Certain data included in all Analytics hits are no longer supported in the Edge Network. The Lifecycle for Edge Network data is only sent during Lifecycle events.

For more details, please refer to the [Lifecycle for Edge Network migration reference](../../edge/lifecycle-for-edge-network/migration-reference.md) and the [Lifecycle for Edge Network extension documentation](../../edge/lifecycle-for-edge-network/index.md).

## Next steps

To learn more about latest versions available for the Edge Network and Edge Bridge extensions, see the [Current SDK versions page](../../home/current-sdk-versions.md).
