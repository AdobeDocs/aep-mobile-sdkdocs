#### Java

**MyExtension.java**

```java
MyExtension(final ExtensionApi extensionApi) {
    super(extensionApi);
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("MyExtension", String.format("An error occurred while registering MySharedStateListener %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };

    getApi().registerEventListener("com.adobe.eventType.hub", "com.adobe.eventSource.sharedState", MySharedStateListener.class, errorCallback);
}
```

**MySharedStateListener.java**

```java
@Override
public void hear(final Event event) {
    Map<String, Object> eventData = event.getEventData();
    if (eventData == null) {
        return;
    }

    String stateOwner = (String) eventData.get("stateowner");
    if ("com.adobe.module.configuration".equals(stateOwner)) {
        // do something with the updated configuration information
    }
}
```