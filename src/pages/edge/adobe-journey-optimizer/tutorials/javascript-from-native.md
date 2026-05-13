---
title: Execute JavaScript methods from native code
description: A tutorial that explains how to execute JavaScript in an in-app message from native code.
keywords: 
- Adobe Journey Optimizer
- Guide
- JavaScript event
- Messaging
- Messaging delegate
- Tutorial
---

# Execute JavaScript methods from native code

You can execute JavaScript in an in-app message from native code by completing the following steps:

* [Implement and assign a `MessagingDelegate`](#implement-and-assign-a-messagingdelegate)
* [Obtain a reference to the web view](#obtain-a-reference-to-the-web-view)
* [Call the JavaScript method](#call-the-javascript-method)

## Implement and assign a `MessagingDelegate`

To register a JavaScript event handler with a `Message` object, you will first need to implement and set a `MessagingDelegate`.

For more detailed instructions on implementing and using a MessagingDelegate, please read the [tutorial on using MessagingDelegate](messaging-delegate.md).

## Obtain a reference to the web view

In the `shouldShowMessage` function of the `MessagingDelegate`, get a reference to the web view used by the message.

On Android, the web view is represented as `WebView`.

### Android Java

```java
@Override
public boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {
  // access to the whole message from the parent
  Message message = (Message) fullscreenMessage.getParent();
      
  WebView webView = message.getWebView();
  
  ...
}
```

On iOS, the web view is represented as `WKWebView`.

### iOS Swift

```swift
func shouldShowMessage(message: Showable) -> Bool {
    // access to the whole message from the parent
    let fullscreenMessage = message as? FullscreenMessage
    let message = fullscreenMessage?.parent

    let messageWebView = message?.view as? WKWebView

    ...
}
```

## Call the JavaScript method

With a reference to the `WebView`, the instance method `public void evaluateJavascript(@NonNull String script, @Nullable ValueCallback<String> resultCallback)` can now be leveraged to call a JavaScript method.

Further details of this API are explained in the [Android documentation](https://developer.android.com/reference/android/webkit/WebView#evaluateJavascript(java.lang.String,%20android.webkit.ValueCallback%3Cjava.lang.String%3E)) - the example below is provided for the purpose of demonstration:

### Android Java

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

With a reference to the `WKWebView`, the instance method `evaluateJavaScript(_:completionHandler:)` can now be leveraged to call a JavaScript method.

Further details of this API are explained in the [Apple documentation](https://developer.apple.com/documentation/webkit/wkwebview/1415017-evaluateJavaScript) - the example below is provided for the purpose of demonstration:

### iOS Swift

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

## Examples

The test apps in this repository demonstrate executing JavaScript code from an in-app message's webview:

* [Swift](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoApp)
* [Objective-C](https://github.com/adobe/aepsdk-messaging-ios/tree/main/TestApps/MessagingDemoAppObjC)
* [Kotlin](https://github.com/adobe/aepsdk-messaging-android/tree/main/code/testapp)
