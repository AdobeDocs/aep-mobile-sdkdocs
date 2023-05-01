import Tabs from './tabs/index.md'

# Platform Services

The Platform Services are provided by the Adobe Experience Platform Mobile SDKs as part of the Mobile Core extension. These services provide shared functionality throughout the SDK that can be shared by extensions. For example, services provide shared functionality for networking, data queuing, and caching. For more information on services provided by the SDK please see the documentation in our [iOS](https://github.com/adobe/aepsdk-core-ios/blob/main/Documentation/Services/README.md) and [Android](https://github.com/adobe/aepsdk-core-ios/tree/main/Documentation/Services) repositories.

## Accessing services

The MobileCore extension provides a shared `ServiceProvider`, responsible for maintaining the current set of provided services and any potential service overrides.

Some services provide wrapper classes. For example, the `Log` class is a wrapper around the `LoggingService`. However, in some cases, a wrapper class may not exist, and you may need to access a service directly from the `ServiceProvider`. The recommended way to do this is through a computed variable or directly through the `ServiceProvider` when required. This ensures that if the service is overridden, the service consumer always uses the correct service implementation.

For example, the following code snippet shows how to access `CacheService`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=access"/>

iOS

<Tabs query="platform=ios&task=access"/>

## Overriding services

The SDK allows overriding some services with your custom implemetation. This section walks through the steps necessary to create a custom `Logging` service, and register it with the SDK.

<InlineAlert variant="info" slots="text"/>

Use caution when overriding services. Changes to behavior for a given service can have unintended consequences throughout the SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=override"/>

iOS

<Tabs query="platform=ios&task=override"/>
