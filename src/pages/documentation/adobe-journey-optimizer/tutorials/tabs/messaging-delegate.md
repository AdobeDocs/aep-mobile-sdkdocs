<Variant platform="android" function="register" repeat="4"/>

On Android, the delegate is registered with the Adobe Service Provider. The `ServiceProvider` class maintains an optional property that holds reference to the `FullscreenMessaageDelegate`.

#### Java

```java
// defined in public class ServiceProvider 
public void setMessageDelegate(MessagingDelegate messageDelegate)
```
On Android, the delegate is registered with Mobile Core. The `MobileCore` contains a method to set the`MessagingDelegate` withing the `ServiceProvider` class.

```java
CustomDelegate myMessagingDelegate = new CustomDelegate();

MobileCore.setMessagingDelegate(myMessagingDelegate);
```

<Variant platform="ios" function="register" repeat="5"/>

On iOS, the delegate is registered with Mobile Core. The `MobileCore` framework maintains an optional property that holds reference to the `MessagingDelegate`.

#### Swift

```swift
/// defined in MobileCore.swift
@objc public static var messagingDelegate: MessagingDelegate?
```

Assuming that `InAppMessagingHandler` is a class that implements `MessagingDelegate`, execute the following code to set the delegate in `MobileCore`:

```swift
let myMessagingDelegate = InAppMessagingHandler()   

MobileCore.messagingDelegate = myMessagingDelegate
```



<Variant platform="android" function="messaging-delegate" repeat="3"/>

The `MessagingDelegate` interface, which is implemented in the `AEPServices` framework, is defined below:

#### Java

```java
/**
 * UI Message delegate which is used to listen for current message lifecycle events and control if
 * the message should be displayed.
 */
public interface MessagingDelegate {
    /**
     * Invoked when a message is displayed.
     *
     * @param message {@link FullscreenMessage} that is being displayed
     */
    default void onShow(final FullscreenMessage message) {
        Log.debug(ServiceConstants.LOG_TAG, "MessagingDelegate", "Fullscreen message shown.");
    }

    /**
     * Invoked when a message is dismissed.
     *
     * @param message {@link FullscreenMessage} that is being dismissed
     */
    default void onDismiss(final FullscreenMessage message) {
        Log.debug(ServiceConstants.LOG_TAG, "MessagingDelegate", "Fullscreen message dismissed.");
    }

    /**
     * Used to determine if a message should be shown.
     *
     * @param message {@link FullscreenMessage} that is about to get displayed
     * @return true if the message should be displayed, false otherwise
     */
    boolean shouldShowMessage(final FullscreenMessage message);

    /**
     * Called when the {@link FullscreenMessage} loads a url.
     *
     * @param url {@code String} being loaded by the {@code FullscreenMessage}
     * @param message {@link FullscreenMessage} loading a url {@code String}
     */
    default void urlLoaded(final String url, final FullscreenMessage message) {
        Log.debug(
                ServiceConstants.LOG_TAG,
                "MessagingDelegate",
                "Fullscreen message loaded url: %s",
                url);
    }
}
```

<Variant platform="ios" function="messaging-delegate" repeat="3"/>

On iOS, the `MessagingDelegate` protocol, which is implemented in the `AEPServices` framework, is defined below:

#### Swift

```swift
/// UI Message delegate which is used to listen for current message lifecycle events
@objc(AEPMessagingDelegate)
public protocol MessagingDelegate {
    /// Invoked when a message is displayed
    /// - Parameters:
    ///     - message: UIMessaging message that is being displayed
    @objc(onShow:)
    func onShow(message: Showable)

    /// Invoked when a message is dismissed
    /// - Parameters:
    ///     - message: UIMessaging message that is being dismissed
    @objc(onDismiss:)
    func onDismiss(message: Showable)

    /// Used to find whether messages should be shown or not
    ///
    /// IMPORTANT! - this method is called on a background thread. 
    /// Any direct interactions with the Message's WKWebView made by the delegate
    /// should be dispatched back to the main thread.
    ///
    /// - Parameters:
    ///     - message: UIMessaging message that is about to get displayed
    /// - Returns: true if the message should be shown else false
    @objc(shouldShowMessage:)
    func shouldShowMessage(message: Showable) -> Bool

    /// Called when `message` loads a URL
    /// - Parameters:
    ///     - url: the `URL` being loaded by the `message`
    ///     - message: the Message loading a `URL`
    @objc(urlLoaded:byMessage:)
    optional func urlLoaded(_ url: URL, byMessage message: Showable)
}
```

<Variant platform="android" function="using-object" repeat="4"/>

The user interface methods (except for `onShowFailure()`) in a `MessagingDelegate` implementation will be passed an `AEPMessage` object. An `AEPMessage` object is the Android Core implementation of the `FullscreenMessage` interface. It contains a reference to the parent `Message` class and is your primary way to interact with the message.

A reference to the `AEPMessage` object can be obtained by calling `fullscreenMessage.getParent()` . An example of how to access the `Message` in the `onShow` delegate method can be seen below:

#### Java

```java
@Override
public void onShow(FullscreenMessage fullscreenMessage) {
  Message message = (Message) fullscreenMessage.getParent();
  System.out.println("message was shown: " + message.id);
}
```

<Variant platform="ios" function="using-object" repeat="6"/>

Each of the methods implemented in the `MessagingDelegate` will be passed a [`Showable`](https://github.com/adobe/aepsdk-core-ios/blob/main/AEPServices/Sources/ui/Showable.swift) object. In the AEPMessaging SDK, the class implementing `Showable` is [`FullscreenMessage`](https://github.com/adobe/aepsdk-core-ios/blob/main/AEPServices/Sources/ui/fullscreen/FullscreenMessage.swift). A `FullscreenMessage` object is wrapped in the [`Message`](../public-classes-enums.md) class, and is your primary way to interact with the message.

To get a reference to the `Message` object:

1. Convert the `Showable` message parameter to `FullscreenMessage`
2. Access the `parent` variable (note that `parent` is variable defined in `FullscreenMessage+Message.swift`, an extension in the AEPMessaging framework)

An example of how to access the `Message` in the `onShow` delegate method can be seen below:

#### Swift

```swift
func onShow(message: Showable) {
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent
    print("message was shown \(message?.id ?? "undefined")")
}
```

<Variant platform="android" function="controlling-message" repeat="7"/>

If a custom  `MessagingDelegate` has been set in the `ServiceProvider`, this delegate's `shouldShowMessage` method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning `true` if the message should be shown, or `false` if the message should be suppressed.

An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app can be seen below:

#### Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
   if (someOtherWorkflowStatus == "inProgress") {
        return false;
    }
    return true;
}
```

Another option is to store a reference to the  `FullscreenMessage` object, and call the `show()` method on it at a later time.

Continuing with the above example, after you have stored the message that was triggered initially, you can choose to show it upon completion of the other workflow:

```java
Message currentMessage = null;
String anotherWorkflowStatus;

public void otherWorkflowFinished() {
    anotherWorkflowStatus = "complete";
    currentMessage.show();
}

@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
   if (someOtherWorkflowStatus.equals("inProgress")) {
     // store the current message for later use
     currentMessage = (Message) fullscreenMessage.getParent();
     return false;
   }
  
  return true;
}
```

<Variant platform="ios" function="controlling-message" repeat="7"/>

If a `MessagingDelegate` has been provided to `MobileCore`, the delegate's `shouldShowMessage` method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning `true` if the message should be shown, or `false` if the message should be suppressed.

An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app can be seen below:

#### Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {
    if someOtherWorkflowStatus == "inProgress" {
        return false
    }

    return true
}
```

Another option is to store a reference to the `Message` object, and call the `show()` method on it at a later time.

Continuing with the above example, after you have stored the message that was triggered initially, you can choose to show it upon completion of the other workflow:

```swift
var currentMessage: Message?

func otherWorkflowFinished() {
    anotherWorkflowStatus = "complete"
    currentMessage?.show()
}

func shouldShowMessage(message: Showable) -> Bool {
    if someOtherWorkflowStatus == "inProgress" {        
        let fullscreenMessage = message as? FullscreenMessage

        // store the current message for later use
        currentMessage = fullscreenMessage?.parent

        return false
    }

    return true
}
```

<Variant platform="android" function="integrate-message" repeat="4"/>

If you would like to manually integrate the `View` that contains the UI for an in-app message, you can do so by accessing the `WebView` directly in a `MessagingDelegate` method.  

In the example below, you can decide whether or not the in-app message should be directly integrated into your existing UI. If so, you capture a reference to the message's `WebView` and return `false` to prevent the message from being shown by the SDK:

#### Java

```java
private Message currentMessage = null;
private boolean shouldIntegrateMessageDirectly = true;
private MessageWebView inAppMessageView;

@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  if (shouldIntegrateMessageDirectly) {
    this.currentMessage = (Message) fullscreenMessage.getParent();
    
    // cast to MessageWebView to access the startInAppMessage function
    inAppMessageView = (MessageWebView) currentMessage.getWebView();
    
    return false;
  }
  
  return true;
}
```

<Variant platform="ios" function="integrate-message" repeat="4"/>

If you would like to manually integrate the `View` that contains the UI for an in-app message, you can do so by accessing the `WKWebView` directly in a `MessagingDelegate` method.  

IMPORTANT! - The `shouldShowMessage` delegate method is called on a background thread. Any direct interactions with the Message's `WKWebView` made by the delegate should be dispatched back to the main thread.

In the example below, you can decide whether or not the in-app message should be directly integrated into your existing UI. If so, you capture a reference to the message's `WKWebView` and return `false` to prevent the message from being shown by the SDK:

#### Swift

```swift
var inAppMessageView: WKWebView?

func shouldShowMessage(message: Showable) -> Bool {    
    if shouldIntegrateMessageDirectly {
        let fullscreenMessage = message as? FullscreenMessage
        let message = fullscreenMessage?.parent

        inAppMessageView = message?.view as? WKWebView

        return false
    }

    return true
}
```