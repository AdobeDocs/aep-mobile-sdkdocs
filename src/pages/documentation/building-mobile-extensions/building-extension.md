import Tabs from './tabs/building-extension.md'

# Building an extension

## Prerequisites to building an extension

Before you build an extension, complete the following tasks:

* Ensure that you are using the Adobe Experience Platform SDKs.

  Extensions extend the behavior of these SDKs.

* Ensure that you can accomplish your goals only by using an extension.

  To determine your goals, think about the following questions:

  * Do you need access to data that is not already exposed via the Adobe Experience Platform SDKs?    
  * Do you need to be notified when messages will be sent, or data is being collected by the Adobe Experience Platform SDKs?   
  * Do you need to add data to or modify data for outgoing messages?    
  * Do you need to expose data to other extensions or to rules processing?

  If your answer to any of these questions is **yes**, build the extension.

* Ensure that you are using Objective-C on iOS or Java on Android.

  Extensions for iOS can currently only be built using Objective-C, and extensions on Android can currently only be built using Java.

* Ensure that you have already included the Adobe Experience Platform SDKs in your project.

## Implementing an Adobe Experience Platform SDK extension

To create a simple extension, complete the following procedures in the order in which they are listed:

### Create an extension class

The `ACPExtension`(iOS) or `Extension` (Android) class is the base class from which extensions must be derived. The `init` method (iOS) or the base `constructor` (Android) of your extension class is where you can extend the Adobe Experience Platform SDKs functionality by registering event listeners or by setting a default shared state that other modules can access.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=create"/>

iOS

<Tabs query="platform=ios&task=create"/>

### Registering your extension

After creating your extension class, you can register it by using the `ACPCore` (iOS) or `MobileCore` (Android) method `registerExtension`. During registration, the extension class that you passed will be used by the Adobe Experience Platform SDKs to create an instance of your extension that will be retained until your extension is unregistered.

<InlineAlert variant="info" slots="text"/>

Registration can be completed any time after the app is launched.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

#### Unregistering your extension

If your extension does not need to be active at all times, you can unregister your extension by using `unregisterExtension` from the `ACPExtensionApi` (iOS) / `ExtensionApi` (Android). This process allows you to have more granular resource control, but the listeners that you registered will be unregistered. If you overrode `onUnregister`, you should see a call into your implementation that allows you to clean up resources before the instance is released.

<InlineAlert variant="info" slots="text"/>

If you retained a reference to the extension instance (for example by storing `self` or `this` in a static variable), this is where you should clean it up.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=unregister"/>

iOS 

<Tabs query="platform=ios&task=unregister"/>
