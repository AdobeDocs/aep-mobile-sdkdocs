#### Java

```java
@Override
public void onUnregistered() {
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.d("MyExtension", String.format("An error occurred while clearing the shared states %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    getApi().clearSharedEventStates(errorCallback);
}
```