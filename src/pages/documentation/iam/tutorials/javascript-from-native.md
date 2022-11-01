import Tabs from './tabs/javascript-from-native.md'

# Execute JavaScript methods from native code

You can execute JavaScript in an in-app message from native code by completing the following steps:

- [Implement and assign a `MessagingDelegate`](#implement-and-assign-a-messagingdelegate)
- [Obtain a reference to the web view](#obtain-a-reference-to-the-web-view)
- [Call the JavaScript method](#call-the-JavaScript-method)

## Implement and assign a `MessagingDelegate`

To register a JavaScript event handler with a `Message` object, you will first need to implement and set a `MessagingDelegate`.

For more detailed instructions on implementing and using a MessagingDelegate, please read the [tutorial on using MessagingDelegate](./messaging-delegate.md).

## Obtain a reference to the web view

In the `shouldShowMessage` function of the `MessagingDelegate`, get a reference to the web view used by the message.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=obtain"/>

iOS

<Tabs query="platform=ios&task=obtain"/>

## Call the JavaScript method

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=call"/>

iOS

<Tabs query="platform=ios&task=call"/>

## Examples

The test apps in this repository demonstrate executing JavaScript code from an in-app message's webview:

- [Swift](https://github.com/adobe/aepsdk-messaging-ios/tree/staging/TestApps/MessagingDemoApp)
- [Objective-C](https://github.com/adobe/aepsdk-messaging-ios/tree/staging/TestApps/MessagingDemoAppObjC)