#### Java

Create a new Java class for your listener, extend the base class `ExtensionListener`, and implement the required constructor and hear method. You can also override the `getParentExtension` method to retrieve your custom extension class instead of the base `Extension` class.

```java
package com.test.company;

import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionListener;
import com.adobe.marketing.mobile.ExtensionApi;
import com.adobe.marketing.mobile.Event;

class MyListener extends ExtensionListener {
    protected MyListener(final ExtensionApi extension, final String type, final String source) {
        super(extension, type, source);
    }

    @Override
    public void hear(final Event event) {
        // run the event processing on its own executor in the parent extension class
        getParentExtension().handleConfigurationEvent(event);
    }

    @Override
    protected MyExtension getParentExtension() {
        return (MyExtension)super.getParentExtension();
    }
}
```

<InlineAlert variant="info" slots="text"/>

Create an executor in your `Extension` class for event processing and use it when one of your listeners is called. This way you do not have to worry about how long your event handler is taking.

```java
package com.test.company;

import android.util.Log;

import com.adobe.marketing.mobile.Event;
import com.adobe.marketing.mobile.Extension;
import com.adobe.marketing.mobile.ExtensionApi;
import com.adobe.marketing.mobile.ExtensionError;
import com.adobe.marketing.mobile.ExtensionErrorCallback;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MyExtension extends Extension {
    private final Object executorMutex = new Object();
    private ExecutorService executor;

    public MyExtension(final ExtensionApi moduleApi) {
        super(moduleApi);

        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError extensionError) {
                // something went wrong, the listener couldn't be registered
            }
        };
        getApi().registerEventListener("com.adobe.eventType.configuration",
            "com.adobe.eventSource.requestContent", MyListener.class, errorCallback);
    }

    @Override
    public final String getName() {
        return "my.test.company";
    }

    @Override
    public final String getVersion() {
        return "1.0.0";
    }

    @Override
    public final void onUnregistered() {
        // extension unregistered successfully - perform cleanup
    }

    void handleConfigurationEvent(final Event event) {
        getExecutor().execute(new Runnable() {
            @Override
            public void run() {
                Log.d(getName(), String.format("Started processing new event of type %s and source %s", event.getType(), event.getSource()));
                // do your processing here
            }
        });
    }

    private ExecutorService getExecutor() {
        synchronized (executorMutex) {
            if (executor == null) {
                executor = Executors.newSingleThreadExecutor();
            }

            return executor;
        }
    }
}
```