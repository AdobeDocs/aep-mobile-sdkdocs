#### Objective-C

The `ACPExtension` class has the following method that you must override:

* `name`: Returns the name of the extension.  
  Extension developers must prefix their extension names with the company name (for example, `com.myCompany.myExtension`). For more information about the naming constraints, please read the [namespace conventions section](./#namespace-conventions). The name that you use to register **cannot** conflict with other registered extensions or Adobe internal modules.

  All Adobe module names are prefixed with `com.adobe.module` and are considered reserved.

The `ACPExtension` class has the following methods that you can optionally override and a member that provides access to the Event Hub:

* `version`: Returns a version string for your extension. The version string is only used for logging and is currently not validated for formatting.
* `onUnregister`: Allows your extension to complete the cleanup that is required when the Adobe Experience Platform SDK unregisters your extension. Unregistration typically happens at app shutdown but can also occur when an extension is behaving badly. Examples of the extension behaving badly include taking too long to handle a callback or throwing an exception.
* `unexpectedError`: Allows you log additional information when the Adobe Experience Platform SDKs encounter an error that could not be returned immediately from a call into the SDK. An example is an exception that is thrown on a worker thread. The exceptions are rare after your extension has been correctly implemented, but the exceptions may occur during development.
* `api`: Allows the extension developer to interact with the Event Hub to do tasks such as registering event listeners and managing shared state.

  This method can be used at any time during or after init has been called on your extension. It may also be used by your listeners by using the extension member.

<InlineAlert variant="info" slots="text"/>

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