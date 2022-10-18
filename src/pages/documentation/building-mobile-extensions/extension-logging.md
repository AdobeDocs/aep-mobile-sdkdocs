import Tabs from './tabs/extension-logging.md'

# Extension logging

It is recommended that you use the Experience Platform SDK logging API to print a message from the extension code. The Experience Platform SDKs provide the `setLogLevel` API, which is used to set one of the following logging modes:

* VERBOSE
* DEBUG
* WARNING
* ERROR 

If the current logging mode is less than verbose, the message is not printed by the Experience Platform SDKs. When debugging and testing your extension, you can set the logging mode to verbose to see all the messages flowing through the Experience Platform SDK.

The Experience Platform SDK uses the extension name as the log tag for the Adobe extensions, so that the application developer can filter the logs for a mobile extension. A similar approach can be implemented by a partner extension as seen in the examples below:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=logging"/>

iOS

<Tabs query="platform=ios&task=logging"/>

## Additional information

To learn more, please read the [Mobile SDK logging documentation](../mobile-core/api-reference.md#log).