<Variant platform="android3x" task="obtain" repeat="5"/>

In the `onShow` function of the `PresentationDelegate`, obtain a reference to the `InAppMessageEventHandler` for use in Javascript interactions.

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
}
```

<Variant platform="android2x" task="obtain" repeat="3"/>

On Android, the web view is represented as `WebView`.  

#### Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  // access to the whole message from the parent
  Message message = (Message) fullscreenMessage.getParent();
      
  WebView webView = message.getWebView();
  
  ...
}
```

<Variant platform="ios" task="obtain" repeat="3"/>

On iOS, the web view is represented as `WKWebView`.  

#### Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {
    // access to the whole message from the parent
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent

    let messageWebView = message?.view as? WKWebView

    ...
}
```

<Variant platform="android3x" task="call" repeat="6"/>

With a reference to the `InAppMessageEventHandler`, the instance method `evaluateJavascript(String, AdobeCallback<String>)` can now be leveraged to call a JavaScript method.

Further details of this API are explained in the [Android](https://developer.android.com/reference/android/webkit/WebView#evaluateJavascript(java.lang.String,%20android.webkit.ValueCallback%3Cjava.lang.String%3E)) documentation - the example below is provided for the purpose of demonstration:

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
  eventHandler?.evaluateJavascript("startTimer()") { content ->
    // do something with the content
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
  if (eventHandler != null) {
    eventHandler.evaluateJavascript("startTimer()", s -> {
    // do something with the content
    });
  }
}
```

<Variant platform="android2x" task="call" repeat="4"/>

With a reference to the `WebView`, the instance method `public void evaluateJavascript(@NonNull String script, @Nullable ValueCallback<String> resultCallback)` can now be leveraged to call a JavaScript method.

Further details of this API are explained in the [Android documentation](https://developer.android.com/reference/android/webkit/WebView#evaluateJavascript(java.lang.String,%20android.webkit.ValueCallback%3Cjava.lang.String%3E)) - the example below is provided for the purpose of demonstration:

#### Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  // access to the whole message from the parent
  Message message = (Message) fullscreenMessage.getParent();
      
  WebView webView = message.getWebView();
  // webview operations must be run on the ui thread
  webView.post(new Runnable() {
    @Override
    public void run() {
      webView.evaluateJavascript("startTimer()", new ValueCallback<String>() {
        @Override
        public void onReceiveValue(String s) {
          // do something with the content
        }
      });
    }
  });
  
  ...
}
```

<Variant platform="ios" task="call" repeat="4"/>

With a reference to the `WKWebView`, the instance method `evaluateJavaScript(_:completionHandler:)` can now be leveraged to call a JavaScript method.

Further details of this API are explained in the [Apple documentation](https://developer.apple.com/documentation/webkit/wkwebview/1415017-evaluateJavaScript) - the example below is provided for the purpose of demonstration:

#### Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {
    // access to the whole message from the parent
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent

    // the `shouldShowMessage` delegate method is called on a background thread.
    // need to dispatch code that uses the webview back to the main thread.
    DispatchQueue.main.async {
        let messageWebView = message?.view as? WKWebView

        messageWebView?.evaluateJavaScript("startTimer();") { result, error in
            if error != nil {
                // handle error
                return
            }

            if result != nil {
                // do something with the result
            }
        }                
    }

    ...
}
```
