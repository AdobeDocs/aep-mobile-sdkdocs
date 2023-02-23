import Tabs from './tabs/api-reference.md'

# Lifecycle API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Lifecycle extension that is registered with the Mobile Core extension.

To get the version of the Lifecycle extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## lifecycleStart

Starts the collection of lifecycle data.

**For Analytics use case:** Use this API to start a new lifecycle session or resume a previously paused lifecycle session. If a previously paused session timed out, then a new session is created. If a current session is running, then calling this method does nothing.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Foreground](./event-reference.md#lifecycle-application-foreground) event when the application is launched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=lifecycle-start"/>

iOS

<Tabs query="platform=ios&api=lifecycle-start"/>

<!--- React Native

<Tabs query="platform=react-native&api=lifecycle-start"/> --->

## lifecyclePause

Pauses the collection of lifecycle data.

**For Analytics use case:** Use this API to pause the collection of lifecycle data.

**For Platform use case:** Use this API to dispatch a [Lifecycle Application Background](./event-reference.md#lifecycle-application-background) event when the application closes.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=lifecycle-pause"/>

iOS

<Tabs query="platform=ios&api=lifecycle-pause"/>

<!--- React Native

<Tabs query="platform=react-native&api=lifecycle-pause"/> --->

## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../../api-reference.md#registerextensions) API instead.

Registers the Lifecycle extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/> --->
