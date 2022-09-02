#### Java

In the following example, the extension is setting a default state in constructor.

```java
MyExtension(final ExtensionApi extensionApi) {
        super(extensionApi);

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
                Log.d("MyExtension", String.format("An error occurred while setting the shared state %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
            }
        };
        getApi().setSharedEventState(newEventData, null, errorCallback);
        ...
    }
```