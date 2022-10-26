import Tabs from './tabs/index.md'

# Platform Services

The Platform Services are provided by the Adobe Experience Platform Mobile SDKs as part of the Mobile Core extension. These services provide shared functionality throughout the SDK that can be shared by extensions. For example, services provide shared functionality for networking, data queuing, caching, and more.

<InlineAlert variant="info" slots="text"/>

This feature is only available in [Android Core 1.8.0](../../release-notes/2021.md#android-core-1-8-0) or later and [iOS Core 3.0.0](../../release-notes/2021.md#adobe-experience-platform-ios-core-sdks) or later.

| Service  | Android SDK | iOS SDK |
| :------- | :---------- | :------ |
| [Networking](./network-service.md) | Core 1.8.0 + | AEPCore 3.0.0 + |
| [DataQueue](./data-queue-service.md) | Core 1.8.0 + | AEPCore 3.0.0 + |
| [SystemInfoService/DeviceInforming](./system-device-info-service.md) | Core 1.8.0 + | AEPCore 3.0.0 + |

## Accessing services

The MobileCore extension provides a shared `ServiceProvider`, responsible for accessing the current set of provided services.

The following code snippet shows how to access `Network Service`  as an example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=access"/>

iOS

<Tabs query="platform=ios&task=access"/>

## Override network stack

This section walks through the steps necessary to create a custom network override, and register it with the SDK.

<InlineAlert variant="info" slots="text"/>

This feature is only available in Android Core version 1.8.0 or later and iOS Core version 2.6.0 or later.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=override"/>

iOS

<Tabs query="platform=ios&task=override"/>
