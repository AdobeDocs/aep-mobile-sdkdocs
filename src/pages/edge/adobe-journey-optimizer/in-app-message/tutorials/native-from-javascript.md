---
title: Native handling of JavaScript events
description: A guide explaining how you can handle JavaScript events from in-app message interactions natively within your application.
keywords:
- Adobe Journey Optimizer
- Guide
- JavaScript event
- Messaging
- Messaging delegate
- PresentationDelegate
- Tutorial
---

import Tabs from './tabs/native-from-javascript.md'

# Native handling of JavaScript events

You can handle events from in-app message interactions natively within your application by completing the following steps:

* [Implement and assign a `PresentationDelegate`/`MessagingDelegate`](#implement-and-assign-a-presentationdelegate-messagingdelegate)
* [Register a JavaScript handler for your In-App Message](#register-a-javascript-handler-for-your-in-app-message)
* [Post the JavaScript message from your In-App Message](#post-the-javascript-message-from-your-in-app-message)

## Implement and assign a `PresentationDelegate`/ `MessagingDelegate`

To register a JavaScript event handler with a `Message` object, you will first need to implement and set a `PresentationDelegate` or `MessagingDelegate` (for older Android SDK versions and iOS SDK).

Please read the [tutorial](./messaging-delegate.md) for more detailed instructions on implementing and using a PresentationDelegate/ MessagingDelegate (for older Android SDK versions and iOS SDK).

## Register a JavaScript handler for your In-App Message

<TabsBlock orientation="horizontal" slots="heading, content" repeat="3"/>

Android 3.x

<Tabs query="platform=android3x&function=register"/>

Android 2.x (Older version)

<Tabs query="platform=android2x&function=register"/>

iOS

<Tabs query="platform=ios&function=register"/>

## Post the JavaScript message from your In-App Message

Now that the in-app message has been displayed, the final step is to post the JavaScript message.

Continuing from the previous example, the developer is going to post the `myInappCallback` message from their HTML, which will in turn call the handler previously configured:

### HTML

```html
<html>
    <head>
        <script type="text/javascript">
            function callNative(action) {
                try {
                    // the name of the message handler is the same name that must be registered in native code.
                    // in this case the message name is "myInappCallback"
                    webkit.messageHandlers.myInappCallback.postMessage(action);
                } catch(err) {
                    console.log('The native context does not exist yet'); }
                }
            </script>
    </head>
    <body>
        <button onclick="callNative('native callbacks are cool!')">Native callback!</button>
    </body>
</html>
```

(The above HTML is not representative of a valid in-app message, and is intended only to demonstrate how to post the JavaScript message).

When the user clicks the button inside of this in-app message, the handler configured in the previous step will be called. The handler will send an Experience Event tracking the interaction, and print the following message to the console:

```text
JavaScript body passed to native callback: native callbacks are cool!
```

## Examples

The test apps in this repository demonstrate calling native code from JavaScript:

* [Swift](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoApp)
* [Objective-C](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppObjC)
* [Kotlin](https://github.com/adobe/aepsdk-messaging-android/tree/main/code/testapp)
