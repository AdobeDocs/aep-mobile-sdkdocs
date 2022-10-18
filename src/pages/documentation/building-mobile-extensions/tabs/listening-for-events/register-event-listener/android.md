#### Java

Event listeners in Android are registered by using the `registerEventListener` method of the `ExtensionApi` interface. You can access this interface by using the `getApi` method in `Extension`. The following example shows how to register the listener from your extension constructor.

```java
import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionApi;

public class MyExtension extends Extension {

    public MyExtension(final ExtensionApi moduleApi) {
        super(moduleApi);

        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                // something went wrong, the listener couldn't be registered
            }
        };
        getApi().registerEventListener("com.adobe.eventType.hub",
                "com.adobe.eventSource.sharedState", MyListener.class, errorCallback);
    }

    @Override
    public final String getName() {
        return "my.company";
    }

    @Override
    public final String getVersion() {
        return "1.0.0";
    }

    @Override
    public final void onUnregistered() {
        // extension unregistered successfully - perform cleanup
    }
}
```