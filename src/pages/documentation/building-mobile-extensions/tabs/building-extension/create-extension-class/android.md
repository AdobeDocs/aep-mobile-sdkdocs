#### Java

The `Extension` class has the following method that you must override:

* `getName`, which returns the name of the extension.

  Extension developers must prefix their extension names with the company name (for example, `com.myCompany.myExtension`). For more information about the naming constraints, see the [namespace conventions section](../index.md#namespace-conventions). The name that you use to register **cannot** conflict with other registered extensions or Adobe internal modules.

The name that you use to register cannot conflict with other registered extensions or Adobe internal modules. The extension name is considered case insensitive by the Mobile SDK.

<InlineAlert variant="info" slots="text"/>

All Adobe module names are prefixed with `com.adobe.module` and are considered reserved.

The `Extension` class has the following methods that you can optionally override and a member that provides access to the Event Hub:

* `getFriendlyName`: Returns a friendly name for your extension, usually referenced in logs.
* `getVersion`: Returns a version string for your extension.  The version string is only used for logging and is currently not validated for formatting.
* `onUnregistered`: Allows your extension to complete the cleanup that is required when the Adobe Experience Platform SDK unregisters your extension. Unregistration typically happens when you shutdown the app, but it can also occur when an extension is behaving badly. Examples of the extension behaving badly include taking too long to handle a callback or throwing an exception.
* `onUnexpectedError`: Allows you log additional information when the Adobe Experience  Platform SDK encounters an error that could not be returned immediately from a call into the Adobe Experience Platform SDK.   An example is an exception that is thrown on a worker thread. The exceptions are rare after your extension has been correctly implemented, but the exceptions might occur during development.
* `getApi`: Allows the extension developer to interact with the Event Hub to do various tasks including registering event listeners and managing the shared state. This method can be used at any time after the extension registration is complete. It may also be used by your listeners by calling  `super.getParentExtension().getApi()`.

<InlineAlert variant="info" slots="text"/>

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