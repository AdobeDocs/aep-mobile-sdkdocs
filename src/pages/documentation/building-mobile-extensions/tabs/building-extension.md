<Variant platform="android" task="create" repeat="11"/>

#### Java

The `Extension` class has the following method that you must override:

* `getName`, which returns the name of the extension.

Extension developers must prefix their extension names with the company name (for example, `com.myCompany.myExtension`). For more information about the naming constraints, see the [namespace conventions section](../index.md#namespace-conventions). The name that you use to register **cannot** conflict with other registered extensions or Adobe internal modules.

The name that you use to register cannot conflict with other registered extensions or Adobe internal modules. The extension name is considered case insensitive by the Mobile SDK.

All Adobe module names are prefixed with `com.adobe.module` and are considered reserved.

The `Extension` class has the following methods that you can optionally override and a member that provides access to the Event Hub:

* `getFriendlyName`: Returns a friendly name for your extension, usually referenced in logs.
* `getVersion`: Returns a version string for your extension.  The version string is only used for logging and is currently not validated for formatting.
* `onUnregistered`: Allows your extension to complete the cleanup that is required when the Adobe Experience Platform SDK unregisters your extension. Unregistration typically happens when you shutdown the app, but it can also occur when an extension is behaving badly. Examples of the extension behaving badly include taking too long to handle a callback or throwing an exception.
* `onUnexpectedError`: Allows you log additional information when the Adobe Experience  Platform SDK encounters an error that could not be returned immediately from a call into the Adobe Experience Platform SDK.   An example is an exception that is thrown on a worker thread. The exceptions are rare after your extension has been correctly implemented, but the exceptions might occur during development.
* `getApi`: Allows the extension developer to interact with the Event Hub to do various tasks including registering event listeners and managing the shared state. This method can be used at any time after the extension registration is complete. It may also be used by your listeners by calling  `super.getParentExtension().getApi()`.

The `Extension` class provides access to the `ExtensionApi` interface through the `getApi` member.

#### Example

```java
import com.adobe.marketing.mobile.*;
class MyExtension extends Extension {

    public MyExtension(final ExtensionApi extensionApi) {
        super(extensionApi);
    }

    @Override
    public String getName() {
        return "my.company.com";
    }

    @Override
    public String getFriendlyName() {
        return "My Extension";
    }

    @Override
    public void onUnregistered() {
        // this method will be called when the extension is unregistered from the 
        // Event Hub in order for you to perform the necessary cleanup
    }
}
```

<Variant platform="ios" task="create" repeat="20"/>

#### Objective-C

The `ACPExtension` class has the following method that you must override:

* `name`: Returns the name of the extension.  
  Extension developers must prefix their extension names with the company name (for example, `com.myCompany.myExtension`). For more information about the naming constraints, please read the [namespace conventions section](../index.md#namespace-conventions). The name that you use to register **cannot** conflict with other registered extensions or Adobe internal modules.

All Adobe module names are prefixed with `com.adobe.module` and are considered reserved.

The `ACPExtension` class has the following methods that you can optionally override and a member that provides access to the Event Hub:

* `version`: Returns a version string for your extension. The version string is only used for logging and is currently not validated for formatting.
* `onUnregister`: Allows your extension to complete the cleanup that is required when the Adobe Experience Platform SDK unregisters your extension. Unregistration typically happens at app shutdown but can also occur when an extension is behaving badly. Examples of the extension behaving badly include taking too long to handle a callback or throwing an exception.
* `unexpectedError`: Allows you log additional information when the Adobe Experience Platform SDKs encounter an error that could not be returned immediately from a call into the SDK. An example is an exception that is thrown on a worker thread. The exceptions are rare after your extension has been correctly implemented, but the exceptions may occur during development.
* `api`: Allows the extension developer to interact with the Event Hub to do tasks such as registering event listeners and managing shared state.

This method can be used at any time during or after init has been called on your extension. It may also be used by your listeners by using the extension member.

The `ACPExtension` class provides access to the `ACPExtensionApi` interface through the API member.

#### Example

1. In Xcode, create a new file from the `Cocoa Touch Class` template and save it in your project.
2. Name this class `MyExtension` and ensure that this class is a member of `ACPExtension`.

The methods that are available for overriding are displayed in the following example:

**MyExtension.h**

```objectivec
#import "ACPExtension.h"

@interface MyExtension : ACPExtension
- (nullable NSString*) name;
- (nullable NSString*) version;
- (void) unexpectedError: (nonnull NSError*) error;
- (void) onUnregister;
@end
```

3. Provide an implementation for the `init` and `name` methods.

**MyExtension.m**

```objc
#import "MyExtension.h"

@implementation MyExtension
- (nullable NSString*) name {
    return @"com.myCompany.myExtension";
}

- (instancetype) init {
    if (self = [super init]) {
        // register your listeners here
    }

    return self;
}
@end
```

4. If you override the `init` method, call the default implementation of `onUnregister`.

```objc
- (void) onUnregister {
    [super onUnregister];
    // your cleanup code goes here
}
```

5. Review the error message that was logged by the default implementation of `unexpectedError`.

```objc
- (void) unexpectedError:(NSError *)error {
    [super unexpectedError];
     // your error handling code goes here
}
```

<Variant platform="android" task="register" repeat="4"/>

#### Java

The best place to register your extension on Android is in the `onCreate` method of your `Application` class.

Some registration errors, such as sending a null extension class as parameter, are synchronous and occur immediately. Other errors, like undefined names, name conflicts, or type checking issues, might occur asynchronously and are reported through the `onUnexpectedError` callback before the extension is unregistered.

```java
import com.adobe.marketing.mobile.MobileCore;
import com.adobe.marketing.mobile.ExtensionError;
import com.adobe.marketing.mobile.ExtensionErrorCallback;
...
@Override
public void onCreate() {
    super.onCreate();
    MobileCore.setApplication(this);

    ExtensionErrorCallback<ExtensionError> errorCallback = new ExtensionErrorCallback<ExtensionError>() {
        @Override
        public void error(final ExtensionError extensionError) {
            Log.e("Extensions", String.format("An error occurred while registering the MyCustomExtension %d %s", extensionError.getErrorCode(), extensionError.getErrorName()));
            }
        };
    if (!MobileCore.registerExtension(MyCustomExtension.class, errorCallback)) {
        Log.e("Extensions", "Failed to register the MyCustomExtension extension");
    }

    ...
    MobileCore.start(null);
}
```

<Variant platform="ios" task="register" repeat="4"/>

#### Objective-C

The best place to register your extension on iOS is in your AppDelegate's `application:didFinishLaunchingWithOptions:` method.

Some registration errors, such as undefined names, name conflicts, or type checking issues, occur immediately. Other errors might occur asynchronously and are reported through the `unexpectedError` callback before the extension is unregistered.

```objectivec
#import "ACPCore.h"
#import "MyExtension.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSError *error = nil;
    if ([ACPCore registerExtension:[MyExtension class] error:&error]) {
        NSLog(@"MyExtension was registered");
    } else {
        NSLog(@"Error registering MyExtension: %@ %d", [error domain], (int)[error code]);
    }

    ... // register other extensions
    [ACPCore start:^{
        dispatch_async(dispatch_get_main_queue(), ^{
            // SDK was initialized
         });
    }];
    return YES;
}

@end
```

<Variant platform="android" task="unregister" repeat="3"/>

#### Java

**Example**

```java
getApi().unregisterExtension();
```

<Variant platform="ios" task="unregister" repeat="3"/>

#### Objective-C

**Example**

```objc
[self.api unregisterExtension];
```