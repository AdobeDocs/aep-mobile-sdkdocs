#### Java

**Example**

```java
final String extensionName = "com.example.MyExtension";
...
ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
    @Override
    public void error(final ExtensionError errorCode) {
        MobileCore.log(LoggingMode.WARNING, extensionName, String.format("An error occurred while registering extension, %s",
                                                                                     errorCode.getErrorName()));
    }
};
MobileCore.registerExtension(MyExtension.class, errorCallback);
```