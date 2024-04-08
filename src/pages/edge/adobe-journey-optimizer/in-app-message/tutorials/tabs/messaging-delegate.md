<Variant platform="android3x" function="register" repeat="8"/>

On Android 3.x, you must implement the `PresentationDelegate` interface to be alerted of in-app message events. The `AEPUIService` class, which implements the `UIService` interface, maintains an optional property that holds reference to the `PresentationDelegate`.

#### Kotlin

```kotlin
// accessed via the public class ServiceProvider which contains a getter for the UIService implementation
interface UIService {
    fun setPresentationDelegate(presentationDelegate: PresentationDelegate)
}
```

On Android 3.x, the custom implementation of `PresentationDelegate` is registered with the `UIService` by accessing it using the `ServiceProvider`.

#### Kotlin

```kotlin
val myPresentationDelegate = CustomDelegate()
ServiceProvider.getInstance().uiService.setPresentationDelegate(myPresentationDelegate)
```

#### Java

```java
CustomDelegate myPresentationDelegate = new CustomDelegate();
ServiceProvider.getInstance().getUIService().setPresentationDelegate(myPresentationDelegate);
```

<Variant platform="android2x" function="register" repeat="5"/>

On Android 2.x and older, the delegate is registered with the Adobe Service Provider. The `ServiceProvider` class maintains an optional property that holds reference to the `FullscreenMessaageDelegate`.

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

<Variant platform="android3x" function="messaging-delegate" repeat="10"/>

The `PresentationDelegate` interface extends the `PresentationListener` and `PresentationLever` interfaces. It is available in the `com.adobe.marketing.mobile.services.ui` package.

#### PresentationDelegate interface

**Kotlin**

```kotlin
/**
 * A delegate that can be used to observe and control the lifecycle of [Presentation]'s managed by the SDK.
 */
interface PresentationDelegate : PresentationListener, PresentationLever
```

#### PresentationListener interface

**Kotlin**

```kotlin
/**
 * A listener for observing the lifecycle of presentations managed by the SDK.
 */
interface PresentationListener {
    /**
     * Invoked when a the presentable is shown.
     * @param presentable the [Presentable] that was shown
     */
    fun onShow(presentable: Presentable<*>)

    /**
     * Invoked when a presentable is hidden.
     * @param presentable the [Presentable] that was hidden
     */
    fun onHide(presentable: Presentable<*>)

    /**
     * Invoked when a presentable is dismissed.
     * @param presentable the [Presentable] that was dismissed
     */
    fun onDismiss(presentable: Presentable<*>)

    /**
     * Invoked when the content in the presentable is loaded.
     * @param presentable the [Presentable] into which that was loaded
     * @param presentationContent optional [PresentationContent] that was loaded into the presentable
     */
    fun onContentLoaded(presentable: Presentable<*>, presentationContent: PresentationContent?)

    /**
     * Defines the types of content that can be loaded into a [Presentable].
     */
    sealed class PresentationContent {
        /**
         * Content loaded from a URL.
         * @param url the URL from which the content was loaded
         */
        class UrlContent(val url: String) : PresentationContent()
    }
}
```

#### PresentationLever interface

**Kotlin**

```kotlin
/**
 * A gating mechanism for implementers to restrict the display of a [Presentable] based on specific
 * set of conditions.
 */
interface PresentationLever {
    /**
     * Returns true if [presentable] can be shown, false otherwise.
     * @param presentable the [Presentable] to check if it can be shown
     * @return true if [presentable] can be shown, false otherwise
     */
    fun canShow(presentable: Presentable<*>): Boolean
}
```

<Variant platform="android2x" function="messaging-delegate" repeat="3"/>

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

<Variant platform="android3x" function="using-object" repeat="5"/>

The `Message` class has the business logic related to the in-app message to perform actions like sending tracking events on interactions and suppress tracking. The class that implements `PresentationDelegate` will receive a `Presentable` object, which is the Mobile Core class containing in-app message view. You will need to get the `Message` object associated with `Presentable` object using  the `MessagingUtils.getMessageForPresentable(Presentable)` .

#### Kotlin

```kotlin
var currentMessagePresentable: Presentable<InAppMessage>? = null
override fun onShow(presentable: Presentable<*>) {
    if (presentable.getPresentation() !is InAppMessage) {
        return
    }
    currentMessagePresentable = presentable as Presentable<InAppMessage>
    val message = MessagingUtils.getMessageForPresentable(currentMessagePresentable)
 }
 ```

#### Java

 ```java
Presentable<InAppMessage> currentMessagePresentable = null;
@Override
public void onShow(Presentable<?> presentable) {
    if (!(presentable.getPresentation() instanceof InAppMessage)) {
        return;
    }
    currentMessagePresentable = (Presentable<InAppMessage>) presentable;
    Message message = MessagingUtils.getMessageForPresentable(currentMessagePresentable);
}
 ```

<Variant platform="android2x" function="using-object" repeat="4"/>

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

<Variant platform="android3x" function="controlling-message" repeat="6"/>

If a custom `PresentationDelegate` implementation has been set in the `UIService`, the delegate's `canShow` method will be called prior to displaying an in-app message for which the end user has qualified. You are responsible for returning `true` if the message should be shown, or `false` if the message should be suppressed. If you returned `false` in the `canShow` method, you can store a reference to the Message object, and call the show() method on it at a later time.

An example of when you may choose to suppress an in-app message due to the status of some other workflow within the app and show it at a later time upon completion of the other workflow can be seen below:

#### Kotlin

```kotlin
var currentMessage: Message? = null
var anotherWorkflowStatus: String = "inProgress"

// Invoked prior to displaying Presentable to check if it can be shown
// if true is returned, the Presentable will be shown immediately
// if false is returned, the message will not be shown
override fun canShow(presentable: Presentable<*>): Boolean {
    // canShow is called for all Presentable types: Alert, FloatingButton, InAppMessage
    // check the type of Presentable before deciding the return value
    if (presentable.getPresentation() !is InAppMessage)
        return true

    if(anotherWorkflowStatus.equals("inProgress")) {
        val currentMessagePresentable = presentable as Presentable<InAppMessage>

        // optional : hold this reference for later use
        // access the Message for Presentable<InAppMessage>
        currentMessage = MessagingUtils.getMessageForPresentable(currentMessagePresentable)

        println("message was suppressed: ${currentMessage?.id}")
        currentMessage?.track("message suppressed", MessagingEdgeEventType.TRIGGER)

        return false
    }

    return true
}


fun otherWorkflowFinished() {
    anotherWorkflowStatus = "complete"
    currentMessage?.show()
}
```

#### Java

```java
Message currentMessage = null;
String anotherWorkflowStatus = "inProgress";

// Invoked prior to displaying Presentable to check if it can be shown
// if true is returned, the Presentable will be shown immediately
// if false is returned, the message will not be shown
@Override
public boolean canShow(Presentable<?> presentable) {
    // canShow is called for all Presentable types: Alert, FloatingButton, InAppMessage
    // check the type of Presentable before deciding the return value
    if (!(presentable.getPresentation() instanceof InAppMessage)) {
            return true;
    }

    if(anotherWorkflowStatus.equals("inProgress")) {
        Presentable<InAppMessage> currentMessagePresentable = (Presentable<InAppMessage>) presentable;

        // optional : hold this reference for later use
        // access the Message for Presentable<InAppMessage>
        currentMessage = MessagingUtils.getMessageForPresentable(currentMessagePresentable);
        if (currentMessage != null) {
            System.out.println("message was suppressed: " + currentMessage.getId());
            message.track("message suppressed", MessagingEdgeEventType.TRIGGER);
        }

        return false;
    }

    return true;
}

public void otherWorkflowFinished() {
    anotherWorkflowStatus = "complete";
    if (currentMessage != null) {
        currentMessage.show();
    }
}
```

<Variant platform="android2x" function="controlling-message" repeat="7"/>

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
