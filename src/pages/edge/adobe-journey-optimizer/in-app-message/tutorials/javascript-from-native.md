---
title: Execute JavaScript methods from native code
description: A tutorial that explains how to execute JavaScript in an in-app message from native code.
keywords: 
- Adobe Journey Optimizer
- Guide
- JavaScript event
- Messaging
- Messaging delegate
- PresentationDelegate
- Tutorial
---

import Tabs from './tabs/javascript-from-native.md'

# Execute JavaScript methods from native code

You can execute JavaScript in an in-app message from native code by completing the following steps:

* [Implement and assign a `PresentationDelegate`/ `MessagingDelegate`](#implement-and-assign-a-presentationdelegate-messagingdelegate)
* [Obtain a reference to the web view](#obtain-a-reference-to-the-inappmessageeventhandler-web-view)
* [Call the JavaScript method](#call-the-javascript-method)

## Implement and assign a `PresentationDelegate`/ `MessagingDelegate`

To register a JavaScript event handler with a `Message` object, you will first need to implement and set a `PresentationDelegate` or `MessagingDelegate` (for older Android SDK versions and iOS SDK) you are using.

Please read the [tutorial](./messaging-delegate.md) for more detailed instructions on implementing and using a PresentationDelegate/ MessagingDelegate (for older Android SDK versions and iOS SDK).

## Obtain a reference to the `InAppMessageEventHandler`/ web view

In the `shouldShowMessage` function of the `MessagingDelegate`, get a reference to the web view used by the message.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android 3.x

<Tabs query="platform=android3x&task=obtain"/>

Android 2.x (Older version)

<Tabs query="platform=android2x&task=obtain"/>

iOS

<Tabs query="platform=ios&task=obtain"/>

## Call the JavaScript method

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android 3.x

<Tabs query="platform=android3x&task=call"/>

Android 2.x (Older version)

<Tabs query="platform=android2x&task=call"/>

iOS

<Tabs query="platform=ios&task=call"/>

## Examples

The test apps in this repository demonstrate executing JavaScript code from an in-app message's webview:

* [Swift](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoApp)
* [Objective-C](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppObjC)
* [Kotlin](https://github.com/adobe/aepsdk-messaging-android/tree/main/code/testapp)
