#### Java

The best place to register your extension on Android is in the `onCreate` method of your `Application` class.

<InlineAlert variant="info" slots="text"/>

Some registration errors, such as sending a null extension class as parameter, are synchronous and occur immediately. Other errors, like undefined names, name conflicts, or type checking issues, might occur asynchronously and are reported through the `onUnexpectedError` callback before the extension is unregistered.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.ExtensionError;
import com.adobe.marketing.mobile.ExtensionErrorCallback;
...
@Override
public void onCreate() {
    super.onCreate();
    MobileCore.setApplication(this);

    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("Extensions", String.format("An error occurred while registering the MyCustomExtension %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
            }
        };
    if (!MobileCore.registerExtension(MyCustomExtension.class, errorCallback)) {
        Log.e("Extensions", "Failed to register the MyCustomExtension extension");
    }

    ...
    MobileCore.start(null);
}
```