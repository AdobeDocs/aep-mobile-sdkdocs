#### Java

```java
public void loginButtonClicked() {
    // construct the event to dispatch 
    Map<String, String> contextData = new HashMap<String, String>();
    contextData.put("username", "example@mail.com");
    contextData.put("dayofweek", "Monday");
    Map<String, Object> analyticsAction = new HashMap<String, Object>();
    analyticsAction.put("action", "clickLogin");
    analyticsAction.put("contextdata", contextData);
    Event analyticsEvent = new Event.Builder("Login click event",
                "com.adobe.eventType.generic.track",
                "com.adobe.eventSource.requestContent")
                .setEventData(analyticsAction).build();

    // dispatch the analytics event
    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("loginButtonClicked", String.format("An error occurred while dispatching                 event %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
        }
    };
    MobileCore.dispatchEvent(analyticsEvent, errorCallback);
}
```