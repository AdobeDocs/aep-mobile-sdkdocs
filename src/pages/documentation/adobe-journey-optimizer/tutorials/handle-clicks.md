# Handle URL clicks from an in-app message

When a link is clicked in an in-app message, the `FullscreenMessageDelegate` is responsible for handling behavior.

If the scheme used in the link **is not** `adbinapp://`, the link will open in the containing WKWebView (iOS) or WebView (Android) - this is default behavior.

If the scheme used in the link **is** `adbinapp://`, the following behavior may occur:

* The in-app message is dismissed
* An interaction event is sent to Experience Edge
* The default animation is overridden
* The URL will be opened by the OS, potentially resulting in:
  * The link being opened by the device's default web browser
  * Opening of a deeplink

## Dismiss the in-app message

In order for the SDK to remove the view containing an in-app message from the UI, the clicked link must have a host of `dismiss`.

The example below is a link that will dismiss the current in-app message:

```
adbinapp://dismiss
```

## Send a message interaction event to Experience Edge

Adding a URL variable named `interaction` will cause the SDK to send an Experience Event to the Adobe Experience Edge.

The example below will dismiss the current in-app message and send a `decisioning.propositionInteract` event to edge with an action of `imageLiked`:

```
adbinapp://dismiss?interaction=imageLiked
```

## Override the default dismiss animation

Adding a URL variable named `animate` will cause the SDK to override the dismiss animation for the message.

The example below will dismiss the current in-app message, and override the animation so the message exits to the right side of the screen:

```
adbinapp://dismiss?animate=right
```

Below is a list of valid values for `animate`:

| Value | Description |
| ----- | ----------- |
| none | Message is removed with no animation |
| left | Message animates off the screen to the **left** when dismissed |
| right | Message animates off the screen to the **right** when dismissed |
| top | Message animates off the screen to the **top** when dismissed |
| bottom | Message animates off the screen to the **bottom** when dismissed |

If the value for `animate` is empty, or if it doesn't match one of the above valid values, an animation of `none` will be used.

## Open a link from the URL

If the value for a URL variable named `link` contains a valid URL, the SDK will open the link using the OS-defined API.

### Open location in the default web browser

If the provided URL does not contain a custom scheme, the URL will be loaded in the device's default web browser.  

The example below will dismiss the current in-app message, send a `decisioning.propositionInteract` event to edge with an action of `adobe`, and open the adobe.com website in the default web browser for the user's device:

```
adbinapp://dismiss?interaction=adobe&link=https%3A%2F%2Fwww.adobe.com%3Fkey%3Dvalue
```

<InlineAlert variant="warning" slots="text"/>

The `link` parameter must be URL encoded. If you are setting this value in the AJO message authoring UI, the value will automatically be encoded. If your message is custom HTML, you must encode the value manually.

### Open a deeplink

The example below will dismiss the current in-app message, then launch an app owned by the same developer which handles the scheme `myAppScheme`:

```
adbinapp://dismiss?link=myAppScheme://deeplinked
```

<InlineAlert variant="help" slots="text"/>

Android deeplinks require intent filters to be added in the app manifest to correctly handle deeplink URL's. Please see the Android developer documentation for more information: https://developer.android.com/training/app-links/deep-linking

<InlineAlert variant="help" slots="text"/>

iOS deeplinks require a custom url scheme to be setup in the application's `info` tab within Xcode to correctly handle deeplink URL's. Please see the Apple developer documenation for more information: https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app
