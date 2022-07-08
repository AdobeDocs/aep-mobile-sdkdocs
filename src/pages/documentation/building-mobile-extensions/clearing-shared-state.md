# Clearing a shared state

Shared states persist for the life of the application context, which results in the following potential concerns:

* Since data accumulates over time, you must manage the amount of data that you are saving. Currently, a rough guideline is that a maximum of 1000 shared state versions be saved, with each instance being a maximum of 10MB, and overall, a maximum of 1GB of memory consumed. These limits are evaluated over time and might change. To prevent poor app performance, if you exceed these limits, a violation may result in your extension being unregistered.
* If you are storing volatile or sensitive identifiers, you should ensure that the identifiers are cleaned up at certain stages, such as when you unregister yourself.    

<InlineAlert variant="info" slots="text"/>

You cannot store a user’s personally identifiable information in the shared state.

To manage identifiers, an API is available that clears the existing shared state for your extension without impacting other extensions. The following examples show you how to call this API in your `onUnregister` (iOS) / `onUnregistered` (Android) method.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<ClearSharedStateAndroid/>

iOS

<ClearSharedStateIos/>

