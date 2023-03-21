---
description: This information can help you understand how to build your own extension.
---

# Building mobile extensions

To support customer-specific features, and allow for the greatest flexibility, Adobe Experience Platform Mobile SDK provides an interface that allows customers to integrate with the Mobile Core at a much lower level. This interface allows customers to define extensions, which are similar in capabilities to the [tag extensions](https://experienceleague.adobe.com/docs/experience-platform/tags/ui/extensions/overview.html). The Mobile Core allows all extensions to access the events and data being sent through the Experience Platform SDK.

Extensions allow customers to extend the Experience Platform SDKs with their own code. This includes listening for and dispatching events, reading the shared state of any registered extension, and sharing the state of the current extension. The application can use the extension to monitor for information that Adobe does not expose by default. It can also use the extension to modify Experience Platform SDK internal operations. For example, the application can use the extension to add additional data to messages that are sent or by sending data to other systems.

## Prerequisites to building an extension

Before you build an extension, complete the following tasks:

### Ensure that you are using the Adobe Experience Platform SDKs

  Extensions extend the behavior of these SDKs.

### Ensure that you can accomplish your goals only by using an extension

  To determine your goals, think about the following questions:

  * Do you need access to data that is not already exposed via the Adobe Experience Platform SDKs?    
  * Do you need to be notified when messages will be sent, or data is being collected by the Adobe Experience Platform SDKs?   
  * Do you need to add data to or modify data for outgoing messages?    
  * Do you need to expose data to other extensions or to rules processing?

  If your answer to any of these questions is **yes**, build the extension.

### Review the namespace conventions

Components or data that are provided by Adobe must be clearly distinguished from the components or data that are provided by external parties. Inconsistent naming conventions impact module naming, event type, source names, and event data keys.

The following naming rules apply for extensions:

* The `ADOBE_PREFIX` is `com.adobe`.
* The `THIRDPARTY_PREFIX` is `com.`. The prefix `com.adobe.*` is reserved for Adobe.
* Third parties must prefix their extension name and any custom event types or sources they create with the `THIRDPARTY_PREFIX` followed by their company name.
* By convention, Adobe will not prefix shared state keys or event data keys.  These names will be in the global namespace. For example: `mid`.
* Adobe internal module names follow the pattern `ADOBE_PREFIX.module.{moduleName}`. 
* Adobe event types follow the pattern `ADOBE_PREFIX.eventType.{eventType}`. 
* Adobe event sources follow the pattern `ADOBE_PREFIX.eventSource.{eventSource}`. 
* Shared state **names** (not **keys**) must equal the module name. 
* All constants will be named using `lowerCamelCase`, and cases are normalized internally to make comparisons case-insensitive. For example, if you use `Com.Adobe.moDule.AnAlytiCS` it will be internally converted to `com.adobe.module.analytics`. An exception to this rule is that shared state names that are used in rules are compared in a case-sensitive manner. This means that when registering an extension, the actual case is retained internally, so that rule comparison can succeed.

<InlineAlert variant="warning" slots="text"/>

You should use ASCII characters, even if your company name contains non-ASCII characters.

## Get started

For help on building your own extension, please see:
* [Building iOS Extension](https://github.com/adobe/aepsdk-core-ios/blob/main/Documentation/EventHub/BuildingExtensions.md)
* [Building Android Extension](https://github.com/adobe/aepsdk-core-android/blob/main/Documentation/EventHub/BuildingExtensions.md)
* [Building Tags Extension](https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/overview.html?lang=en)
