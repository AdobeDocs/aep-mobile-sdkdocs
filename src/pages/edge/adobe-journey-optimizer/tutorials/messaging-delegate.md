---
title: Programmatically control the display of in-app messages
description: A guide that explains how to use a Messaging delegate to programmatically control the display of in-app messages.
keywords:
- Adobe Journey Optimizer
- Guide
- In-app messages
- Messaging
- Tutorial
---

import Tabs from './tabs/messaging-delegate.md'

# Programmatically control the display of in-app messages

You can now implement a `MessagingDelegate` in order to be alerted when specific events occur during the lifecycle of an in-app message.

## Register the delegate

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=register"/>

iOS

<Tabs query="platform=ios&function=register"/>

## MessagingDelegate definition

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=messaging-delegate"/>

iOS

<Tabs query="platform=ios&function=messaging-delegate"/>

## Retrieve the `Message` object

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=using-object"/>

iOS

<Tabs query="platform=ios&function=using-object"/>

## Controlling when a message should be shown to the end user

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=controlling-message"/>

iOS

<Tabs query="platform=ios&function=controlling-message"/>

### Integrating the message into an existing UI

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&function=integrate-message"/>

iOS

<Tabs query="platform=ios&function=integrate-message"/>

## Examples

The test apps in this repository demonstrate using a `MessagingDelegate`:

* [Swift](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoApp)
* [Objective-C](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppObjC)
* [Kotlin](https://github.com/adobe/aepsdk-messaging-android/tree/main/code/testapp)

#### Further reading

* [More information on how to use the Message object](../public-classes.md)
* [Call native code from the JavaScript of an in-app message](./native-from-javascript.md)
* [Execute JavaScript code in an in-app message from native code](./javascript-from-native.md)
