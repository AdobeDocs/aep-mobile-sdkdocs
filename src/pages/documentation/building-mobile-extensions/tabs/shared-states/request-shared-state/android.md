#### Java

```java
@Override
public void hear(final Event event) {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyListener", String.format("An error occurred while retrieving the shared state for configuration %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    Map<String, Object> configurationSharedState = parentModule.getSharedEventState("com.adobe.module.configuration", event, errorCallback);
    Log.d("MyListener", String.format("The configuration when event %s was sent was: %s", event.getName(), configurationSharedState));
    ...
}
```