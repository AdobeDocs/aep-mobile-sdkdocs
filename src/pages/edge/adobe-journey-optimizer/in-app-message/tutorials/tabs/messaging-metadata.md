<Variant platform="android3x" function="metadata" repeat="5"/>

The following example shows retrieving custom metadata using the `Message.getMetadata()` API. The example uses the `canShow` method of the `PresentationDelegate`, however you may retrieve the custom metadata anywhere within the delegate where the `Message` object is available.

#### Kotlin

```kotlin
var currentMessagePresentable: Presentable<InAppMessage>? = null

override fun canShow(presentable: Presentable<*>): Boolean {
  if (presentable.getPresentation() !is InAppMessage) {
    return
  }
  currentMessagePresentable = presentable as Presentable<InAppMessage>

  // Get the Message object
  val message = MessagingUtils.getMessageForPresentable(currentMessagePresentable)
  // Retrieve the custom metadata as type Map<String, Any>
  val metadata = message?.metadata
}
```

#### Java

```java
Presentable<InAppMessage> currentMessagePresentable = null;

@Override
public void canShow(Presentable<?> presentable) {
    if (!(presentable.getPresentation() instanceof InAppMessage)) {
      return;
    }
    currentMessagePresentable = (Presentable<InAppMessage>) presentable;

    // Get the Message object
    Message message = MessagingUtils.getMessageForPresentable(currentMessagePresentable);

    // Retrieve the custom metadata
    if (message != null) {
        Map<String, Object> metadata = message.getMetadata();
    }
}
```

<Variant platform="android2x" function="metadata" repeat="3"/>

The following example shows retrieving custom metadata using the `Message.getMetadata()` API. The example uses the `shouldShowMessage` method of the `PresentationDelegate`, however you may retrieve the custom metadata anywhere within the delegate where the `Message` object is available.

#### Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  Message message = (Message) fullscreenMessage.getParent();
  
  // Retrieve the custom metadata
  if (message != null) {
    Map<String, Object> metadata = message.getMetadata();
  }
}
```

<Variant platform="ios" function="metadata" repeat="3"/>

The following example shows retrieving custom metadata using the `Message.metadata` API. The example uses the `shouldShowMessage` method of the `MessageDelegate`, however you may retrieve the custom metadata anywhere within the delegate where the `Message` object is available.

#### Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {    
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent

    // Retrieve the custom metadata
    let metadata = message.metadata

    return true
}
```
