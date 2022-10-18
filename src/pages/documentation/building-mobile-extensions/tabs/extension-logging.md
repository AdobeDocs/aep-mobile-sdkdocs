<Variant platform="android" task="logging" repeat="3"/>

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

<Variant platform="ios" task="logging" repeat="3"/>

#### Objective-C

**Example**

```objectivec
NSString* extensionName = @"com.example.MyExtension";
...

NSError *error = nil;
if ([ACPCore registerExtension:[MyExtension class] error:&error]) {
    [ACPCore log:ACPMobileLogLevelDebug tag:extensionName message:@"MyExtension was successfully registered"];
} else {
    [ACPCore log:ACPMobileLogLevelWarning tag:extensionName message:@"An error occurred while attempting to register MyExtension"];
}
```