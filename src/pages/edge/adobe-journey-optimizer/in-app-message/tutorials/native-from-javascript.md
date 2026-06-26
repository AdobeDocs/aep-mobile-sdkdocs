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

# Native handling of JavaScript events

You can handle events from in-app message interactions natively within your application by completing the following steps:

* [Implement and assign a `PresentationDelegate`/`MessagingDelegate`](#implement-and-assign-a-presentationdelegate-messagingdelegate)
* [Register a JavaScript handler for your In-App Message](#register-a-javascript-handler-for-your-in-app-message)
* [Post the JavaScript message from your In-App Message](#post-the-javascript-message-from-your-in-app-message)

## Implement and assign a `PresentationDelegate`/ `MessagingDelegate`

To register a JavaScript event handler with a `Message` object, you will first need to implement and set a `PresentationDelegate` or `MessagingDelegate` (for older Android SDK versions and iOS SDK).

Please read the [tutorial](messaging-delegate.md) for more detailed instructions on implementing and using a PresentationDelegate/ MessagingDelegate (for older Android SDK versions and iOS SDK).

## Register a JavaScript handler for your In-App Message

Android 3.x

In the `onShow` function of the `PresentationDelegate`, call `handleJavascriptMessage(String, AdobeCallback<String>)` to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches an `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a myInappCallback message:

### Android 3.x Kotlin

```kotlin
var eventHandler: InAppMessageEventHandler? = null
var currentMessagePresentable: Presentable<InAppMessage>? = null

override fun onShow(presentable: Presentable<*>) {
  if (presentable.getPresentation() !is InAppMessage) {
    return
  }
  currentMessagePresentable = presentable as Presentable<InAppMessage>
  eventHandler = currentMessagePresentable?.getPresentation()?.eventHandler
  // in-line handling of JavaScript calls
  eventHandler?.handleJavascriptMessage("myInappCallback") { content ->
    if (content != null) {
        println("JavaScript body passed to native callback: $content")
        val message: Message? = MessagingUtils.getMessageForPresentable(currentMessagePresentable)
        message?.track(content, MessagingEdgeEventType.INTERACT);
    }
  }
}
```

### Android 3.x Java

```java
InAppMessageEventHandler eventHandler = null;
Presentable<InAppMessage> currentMessagePresentable = null;

@Override
public void onShow(Presentable<?> presentable) {
    if (!(presentable.getPresentation() instanceof InAppMessage)) {
      return;
    }
    currentMessagePresentable = (Presentable<InAppMessage>) presentable;
    eventHandler = currentMessagePresentable.getPresentation().getEventHandler();
    // in-line handling of JavaScript calls
    eventHandler.handleJavascriptMessage("myInappCallback", content -> {
        if (content != null) {
            System.out.println("JavaScript body passed to native callback: " + content);
            Message message = MessagingUtils.getMessageForPresentable(currentMessagePresentable);
            if (message != null) {
                message.track(content, MessagingEdgeEventType.INTERACT);
            }
        }
    });
}
```

Android 2.x (Older version)

In the `shouldShowMessage` function of the `MessagingDelegate`, call `public void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)` to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches a `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a `myInappCallback` message:

### Android 2.x Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  Message message = (Message) fullscreenMessage.getParent();
  
  // in-line handling of JavaScript calls
  message.handleJavascriptMessage("myInappCallback", new AdobeCallback<String>() {
    @Override
    public void call(String content) {
      System.out.println("JavaScript body passed to native callback: " + content);
      message.track(content, MessagingEdgeEventType.IN_APP_INTERACT);
    }
  });
}
```

In the `shouldShowMessage` function of the `MessagingDelegate`, call [`handleJavascriptMessage(_:withHandler)`](../../public-classes/message.md#handlejavascriptmessage_withhandler) to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches a `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a `myInappCallback` message:

### iOS Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {    
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent

    // in-line handling of JavaScript calls
    message?.handleJavascriptMessage("myInappCallback") { content

        print("JavaScript body passed to native callback: \(content ?? "empty")")

        message?.track(content as? String, withEdgeEventType: .inappInteract)
    }

    return true
}
```

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
                  
                  	// for swift based apps
                  	webkit.messageHandlers.myInappCallback.postMessage(action);
                  
                    // for android based apps
                    myInappCallback.run(action);
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
