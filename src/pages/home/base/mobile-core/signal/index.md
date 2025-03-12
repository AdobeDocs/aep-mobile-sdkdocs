---
title: Mobile Core Signal overview
description: An overview for the Mobile Core Signal extension.
keywords:
- Mobile Core
- Product overview
- Signal
- Signal for Mobile Core
---

import Tabs from './tabs/index.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Signal

The Signal extension allows marketers to send a "signal" to their apps through the Adobe Experience Platform Mobile SDKs. This signal might tell the Mobile SDKs or the apps to complete tasks, such as send PII-labeled data, to trigger a postback to a third-party ad-network and open an app deep link or URL. To ensure that signals are sent or are activated, the marketers need to configure triggers and traits in the Data Collection UI.

The Signal extension allows you to send postbacks to third-party endpoints and open URLs, such as web URLs or application deep links, when using rules actions in the Data Collection UI.

To send PII data to external destinations, the `PII` action can trigger the Rules Engine when certain triggers and traits match. When setting a rule, you can also set the `PII` action for a Signal event. The `collectPii` API can then be used to trigger the rule and send the PII data to a remote server.

To get started with Signal extension, complete the following steps:

1. Add the **Signal** extension to your app.
2. Define the necessary rules in the Data Collection UI.
3. (Optional) When using Send PII actions in the Data Collection UI, implement the APIs to collect PII data and send it to the configured third party destination.

For more information about creating and configuring a rule in the Data Collection UI, see [Rules](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html).

## Add the Signal extension to your app

### Include Signal extension as an app dependency

Add MobileCore, Signal extensions as dependencies to your project.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Kotlin<br/>(Android)

<Tabs query="platform=android-kotlin&task=add"/>

Groovy<br/>(Android)

<Tabs query="platform=android-groovy&task=add"/>

CocoaPods<br/>(iOS)

<Tabs query="platform=ios-pods&task=add"/>

### Initialize Adobe Experience Platform SDK with Signal Extension

Next, initialize the SDK by registering all the solution extensions that have been added as dependencies to your project with Mobile Core. For detailed instructions, refer to the [initialization](/src/pages/home/getting-started/get-the-sdk/#2-add-initialization-code) section of the getting started page.

Using the `MobileCore.initialize` API to initialize the Adobe Experience Platform Mobile SDK simplifies the process by automatically registering solution extensions and enabling lifecycle tracking.

<InitializeSDK query="componentClass=TabsBlock"/>

## Implement the Mobile SDK to send PII data to external destinations

To send PII data to external destinations, the `PII` action can trigger the Rules Engine when the configured triggers and traits match. When creating a rule, you can set the `PII` action for a Signal event, so that `collectPii` can trigger the rule and send the `PII` data.

For more information about `collectPii` and its usage, see [collectPii](../api-reference.md#collectpii).

For more information about how to configure the Signal postbacks in the Data Collection UI, see [Signal extension and Rules Engine integration](rules-engine-integration.md).
