<Variant platform="android3x" function="register" repeat="7"/>

In the `onShow` function of the `PresentationDelegate`, call `handleJavascriptMessage(String, AdobeCallback<String>)` to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches an `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a myInappCallback message:

#### Kotlin

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

#### Java

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

<Variant platform="android2x" function="register" repeat="5"/>

In the `shouldShowMessage` function of the `MessagingDelegate`, call `public void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)` to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches a `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a `myInappCallback` message:

#### Java

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

<Variant platform="ios" function="register" repeat="5"/>

In the `shouldShowMessage` function of the `MessagingDelegate`, call [`handleJavascriptMessage(_:withHandler)`](./class-message.md#handlejavascriptmessage_withhandler) to register your handler.

The name of the message you intend to pass from the JavaScript side should be specified in the first parameter.

The following example shows a handler that dispatches a `decisioning.propositionInteract` Experience Event natively when the JavaScript of the in-app message posts a `myInappCallback` message:

#### Swift

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
