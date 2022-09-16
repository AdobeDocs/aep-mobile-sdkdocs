#### Java

```java
@Override
public void onUnregistered() {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyExtension", String.format("An error occurred while retrieving the shared state for configuration %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    Map<String, Object> configurationSharedState = getApi().getSharedEventState("com.adobe.module.configuration", null, errorCallback);
    Log.d("MyExtension", String.format("Latest configuration was: %s", configurationSharedState));
    ...
}
```