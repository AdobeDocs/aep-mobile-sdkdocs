<Variant platform="android" function="register" repeat="5"/>

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