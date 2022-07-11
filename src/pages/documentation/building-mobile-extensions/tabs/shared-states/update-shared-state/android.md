#### Java

```java
@Override
public void hear(final Event event) {
    Map<String, Object> customElement = new HashMap<String, Object>();
    customElement.put("customInt", 125);
    customElement.put("customString", "example");
    Map<String, Object> customData = new HashMap<String, Object>();
    customData.put("customElement", customElement);
    Map<String, Object> newEventData = new HashMap<String, Object>();
    newEventData.put("customData", customData);

    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.d("MyListener", String.format("An error occurred while setting the shared state %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    getApi().setSharedEventState(newEventData, event, errorCallback);
    ...
}
```