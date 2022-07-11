#### Java

You can have this code in an application's `Activity` or in one of your extension's API classes:

```java
// how to dispatch a paired event with an associated response callback
ExtensionErrorCallback<ExtensionError> errorCallback = new         ExtensionErrorCallback<ExtensionError>() {
    @Override
    public void error(final ExtensionError errorCode) {
        Log.w("dispatchEventCallback", String.format("An error occurred when dispatching event, %s", errorCode.getErrorName()));
    }
};

AdobeCallback<Event> responseEventCallback = new AdobeCallback<Event>() {
    @Override
    public void call(final Event value) {
        Log.d("dispatchEventCallback", String.format("Response event received, type %s and source %s",
                                                     value.getType(), value.getSource()));
    }
};
Event event = new Event.Builder("dispatchEventWithResponseCallback", "com.myCompany.eventType.custom", "com.myCompany.eventSource.request").build();
MobileCore.dispatchEventWithResponseCallback(event, responseEventCallback, errorCallback);
...
```

Register a listener for this event type and source in `MyExtension.java`:

```java
// register a listener for a the request event type and source
protected MyExtension(ExtensionApi extensionApi) {
        super(extensionApi);

        getApi().registerEventListener("com.myCompany.eventType.custom", "com.myCompany.eventSource.request", MyListener.class, null);
}
...
```

Dispatch a response event when the request is received in the `hear` method of your listener in `MyListener.java`:

```java
public class MyListener extends ExtensionListener {

    protected MyListener(final ExtensionApi extension, final String type, final String source) {
        super(extension, type, source);
    }

    @Override
    public void hear(Event event) {
        ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
            @Override
            public void error(final ExtensionError errorCode) {
                Log.w(getParentExtension().getName(), String.format("An error occurred when dispatching event, %s",
                        errorCode.getErrorName()));
            }
        };
        Event responseEvent = new Event.Builder("response event", "com.myCompany.eventType.custom", "com.myCompany.eventSource.response").build();

        // sending a paired response event for the request event
        MobileCore.dispatchResponseEvent(responseEvent, event, errorCallback);
    }

    @Override
    protected MyExtension getParentExtension() {
        return (MyExtension)super.getParentExtension();
    }

    ...
}
```