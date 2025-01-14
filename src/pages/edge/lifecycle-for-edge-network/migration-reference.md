---
title: Mobile Core Lifecycle for Edge Network migration reference
description: A reference for understanding the differences between Lifecycle for Edge Network vs Lifecycle for Analytics.
keywords:
- Lifecycle
- Lifecycle V2
- Lifecycle for Mobile Core
- Lifecycle for Platform
- Lifecycle for Edge Network
- Lifecycle Edge
- Lifecycle iOS
- Lifecycle Android
- Lifecycle for Analytics
- Product reference
---

# Lifecycle for Edge Network migration reference

The Lifecycle for Edge Network Mobile SDK extension enables collecting application lifecycle data including launches, installs, upgrades, and closes in addition to application and device dimensions such as the application identifier and device name and model. When used together with the Mobile SDK Edge Network extension, lifecycle events are sent to the Adobe Experience Platform Edge Network on each launch and close of the application.

The Lifecycle for Edge Network extension is built into the existing Lifecycle extension builded with Mobile Core and introduces new events to capture when an application is launched and closed. These events are separate and distinct from the Lifecycle events handled by the Analytics extension and are dispatched from different triggers and contain different metrics and dimensions. Both "Lifecycle for Edge Network" and "Lifecycle for Analytics" serve similar functions but behave in different ways. The changes made to the Lifecycle extension to support the Edge Network were done, in part, to support AJO and CJA features and provide greater flexibility at reporting time. The following outlines these changes to give you an understanding of the changes to your data when migrating from Lifecycle for Analytics to Lifecycle for Edge Network.

## Installing Lifecycle for Edge Network

The Mobile SDK Lifecycle for Edge Network extension is used together with the Mobile SDK Edge Network extension, and both must be included and registered in an application. A rule is required, however, to forward the Lifecycle events to the Edge Network extension. To configure and install Lifecycle for Edge Network, follow the instructions from the [overview page](../lifecycle-for-edge-network/index.md#configure-and-install-lifecycle-for-edge-network) to setup your XDM schema, add a rule to forward the Lifecycle Application Launch and Application Close events to the Edge Network, add the Edge Network extension to your application, and add Lifecycle and the required API calls to your application if not already done. The Lifecycle for Edge Network does not add any new APIs so application changes to migrate to the Edge Network from Analytics are minimal. To disable Lifecycle for Analytics, simply remove the Analytics extension from your application.

## Lifecycle events when using Edge

Lifecycle for Edge Network introduces two new events to the Mobile SDK, [Application Launch (Foreground)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-foreground) and [Application Close (Background)](../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-background). These events are dispatched each time an application is brought to the foreground and sent to the background respectively. This is a significant change from Lifecycle for Analytics which kept track of an internal session based on a configurable session timeout. This change will introduce more Lifecycle events to your reports, however knowing when a user launches and closes your application allows for more accurate user journeys.

The session timeout configuration set in the Mobile Core card in Tags is not used in Lifecycle for Edge Network. There is no concept of a session or how long a user must background the application before a new Lifecycle event is dispatched. Instead, Lifecycle events are simply dispatched when the application is launched and when the application is closed.

To understand this difference, take the following example. An application is using both Lifecycle for Edge Network and Lifecycle for Analytics. Mobile Core is configured with a session timeout of 300 seconds (5 minutes). The following chart displays when and how many events are dispatched from each path.

### Lifecycle events Edge Network vs Analytics

| **Application state** | **Edge Network event** | **Analytics event** |
| :--- | :--- | :--- |
| app launched | Application Launch (Foreground)  | Lifecycle Start and SessionInfo* |
| app sent to background | Application Close (Background) | no event, session paused |
| app launched after 3 minutes | Application Launch (Foreground) | no event, session resumed |
| app sent to background | Application Close (Background) | no event, session paused |
| app launched after 30 minutes | Application Launch (Foreground) | Lifecycle Start and SessionInfo* |

<InlineAlert variant="info" slots="text"/>

When using Lifecycle for Analytics, if the Analytics extension in Tags is configured with "backdate previous session info" and "offline enabled", then two events are dispatched on the start of a new session; one for the previous session info and one for the start of the new lifecycle session. If these configurations are not set, then only one event is dispatched for the start of the new lifecycle session.

As you can see in the previous scenario, Lifecycle for Edge Network provides richer details on how a user interacts with an application. This level of granularity comes at a cost of more events being sent to the Edge Network than was previously sent when using Analytic directly.

## Lifecycle data

Lifecycle for Edge Network formats data to XDM, conforming to the [AEP Mobile Lifecycle Details](https://github.com/adobe/xdm/blob/master/docs/reference/adobe/experience/aep-mobile-lifecycle-details.schema.md) field group. The field group contains three subgroups: application details which are the Lifecycle data, environment details about the system software, and device details about the user's device. This Lifecycle data sent to the Edge Network is different in a couple key ways from the data sent from the mobile Analytics extension.

1. Any metric or dimension which may be computed at reporting time from existing data is not included in Lifecycle for Edge Network events. This includes metrics such as number of launches, launches since upgrade, days since last use or launch, and dimensions such as events for daily or monthly user engagement, hour of day or day of week, and install date.
2. The Edge Network extension handles more than just tracking events, as such Lifecycle dimensions are not sent on non lifecycle experience events as they are when using the mobile Analytics extension. These dimensions include operating system, device name and resolution, carrier name, run mode, and the application identifier. If necessary, application developers may add these dimensions to specific Edge Network requests either manually when calling [Edge.sendEvent()](../edge-network/api-reference.md#sendevent) or by configuring an attach data rule in Tags.

Refer to the Lifecycle data reference documentation for a comparison between the [Lifecycle for Edge Network data](./metrics.md) and [Lifecycle for Analytics data](../../home/base/mobile-core/lifecycle/metrics.md).

<InlineAlert variant="info" slots="text"/>

The Adobe Experience Platform Edge Network automatically maps the Lifecycle XDM variables into Adobe Analytics with no additional configuration needed. When enabling the Analytic service in a datastream, the XDM Lifecycle variables for application, device, and environment are automatically mapped as defined in [XDM object variable mapping](https://experienceleague.adobe.com/en/docs/analytics/implementation/aep-edge/xdm-var-mapping).
