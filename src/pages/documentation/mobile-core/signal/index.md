import Tabs from './tabs/index.md'

# Signal

The Signal extension allows marketers to send a "signal" to their apps through the Adobe Experience Platform Mobile SDKs. This signal might tell the Mobile SDKs or the apps to complete tasks, such as send PII-labeled data, to trigger a postback to a third-party ad-network and open an app deep link or URL. To ensure that signals are sent or are activated, the marketers need to configure triggers and traits in the Data Collection UI.

The Signal extension allows you to send postbacks to third-party endpoints and open URLs, such as web URLs or application deep links, when using rules actions in the Data Collection UI.

To send PII data to external destinations, the `PII` action can trigger the Rules Engine when certain triggers and traits match. When setting a rule, you can also set the `PII` action for a Signal event. The `collectPii` API can then be used to trigger the rule and send the PII data to a remote server.

To get started with Signal extension, complete the following steps:

1. Add the **Signal** extension to your app.
2. Define the necessary rules in the Data Collection UI. 
3. (Optional) When using Send PII actions in the Data Collection UI, implement the APIs to collect PII data and send it to the configured third party destination.

For more information about creating and configuring a rule in the Data Collection UI, see [Rules](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/rules.html).

## Watch the video

<Media slots="video"/>

<https://www.youtube.com/watch?v=r-z9ivQjzOY>

## Add the Signal extension to your app

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is not recommended for production apps. Refer to this [page](../../manage-gradle-dependencies.md) for managing gradle dependencies.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

<!--- React Native

<Tabs query="platform=react-native&task=add"/>

Flutter

<Tabs query="platform=flutter&task=add"/> --->

## Register the Signal extension

The `MobileCore.registerExtensions()` API can be used to register the Signal extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

To register the Signal extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

<!--- React Native

<Tabs query="platform=react-native&task=register"/>

Flutter

<Tabs query="platform=flutter&task=register"/> --->

## Implement the Mobile SDK to send PII data to external destinations

To send PII data to external destinations, the `PII` action can trigger the Rules Engine when the configured triggers and traits match. When creating a rule, you can set the `PII` action for a Signal event, so that `collectPii` can trigger the rule and send the `PII` data.

For more information about `collectPii` and its usage, see [collectPii](../api-reference.md#collect-pii).

For more information about how to configure the Signal postbacks in the Data Collection UI, see [Signal extension and Rules Engine integration](../../user-guides/rules-engine-integration).
