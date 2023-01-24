import Tabs from './tabs/enable-debug-logging.md'

# Debugging & lifecycle metrics

## Debug logging

Debug logging is an optional, but a recommended and critical SDK feature.

By enabling logging, you can ensure that the SDK is working as intended. The following table explains levels of logging available and the purpose they serve:

| Log Level | Description |
| :--- | :--- |
| Error | This is the default log level used by SDK. This log level provides the details about unrecoverable errors that occurred during SDK implementation. |
| Warning | In addition to the details from _Error_ log level, _Warning_ provides error information during SDK integration. This log level might indicate that a request has been made to the SDK, but the SDK might be unable to perform the requested task. For example, this log level might be used when catching an unexpected, but recoverable, exception and printing its message. |
| Debug | In addition to the details from the _Warning_ log level, _Debug_ also provides high-level information about how the SDK processes network requests/responses data. |
| Verbose | In addition to the details from the _Debug_ level, _Verbose_ provides detailed, low-level information about how the SDK processes database interactions and SDK events. |

<InlineAlert variant="warning" slots="text"/>

Using `Debug` or `Verbose` log levels may cause performance or security concerns. As a result, it is recommended that you use only `Error` or `Warning` log levels in production applications.

To enable debug logging, use the following methods:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=enable"/>

iOS

<Tabs query="platform=ios&task=enable"/>

<!-- React Native

<Tabs query="platform=react-native&task=enable"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=enable"/> -->

<!-- Cordova

<Tabs query="platform=cordova&task=enable"/>

Unity

<Tabs query="platform=unity&task=enable"/> -->

## Lifecycle metrics

Lifecycle metrics are an optional, but valuable feature provided by the Adobe Experience Platform SDK. It provides out-of-the-box, application lifecycle information about your app user. A complete list of available metrics is provided in the [lifecycle documentation](../mobile-core/lifecycle/index.md).

These metrics contain information on the app user's engagement lifecycle such as device information, install or upgrade information, and session start and pause times. You may also set additional lifecycle metrics.

<InlineAlert variant="warning" slots="text"/>

This section shows you how to collect lifecycle metrics. To view, and report on this data in those respective solutions, you need to set up [Adobe Analytics](../adobe-analytics/index.md) or other Experience Cloud solution extensions.

<InlineAlert variant="success" slots="text"/>

Lifecycle metrics are now available for Edge Network implementations. For more details about the XDM-based lifecycle metrics, see [Lifecycle for Edge Network](../lifecycle-for-edge-network/index.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=metrics"/>

iOS

<Tabs query="platform=ios&task=metrics"/>

<!-- React Native

<Tabs query="platform=react-native&task=metrics"/> -->

<!-- Flutter

<Tabs query="platform=flutter&task=metrics"/> -->

<!-- Cordova

<Tabs query="platform=cordova&task=metrics"/>

Unity

<Tabs query="platform=unity&task=metrics"/>

Xamarin

<Tabs query="platform=xamarin&task=metrics"/> -->


For more information, see the documentation on [Lifecycle metrics](../mobile-core/lifecycle/index.md).

