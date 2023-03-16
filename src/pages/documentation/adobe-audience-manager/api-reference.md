import Tabs from './tabs/api-reference.md'

# Audience Manager API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Audience extension that is registered with the Mobile Core extension.

To get the version of the Audience extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## getVisitorProfile

This API returns the most recently obtained visitor profile. The visitor profile is saved in the SDK's local storage for access across multiple launches of your app. If no audience signal has been sent before, when this API is called, a null value is returned.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=get-visitor-profile"/>

iOS

<Tabs query="platform=ios&api=get-visitor-profile"/>

## registerExtension

This API registers an extension class that was derived from with a unique name. 

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## reset

This API helps you reset the Audience Manager UUID and purges the current visitor profile.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID, the DPID, the DPUUID and other Audience Manager identifiers, see [Index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset"/>

iOS

<Tabs query="platform=ios&api=reset"/>

## signalWithData

This method is used to send a signal with traits to Audience Manager and get the matching segments returned in a block callback. Audience Manager sends the UUID in response to an initial signal call. The UUID is persisted on local SDK storage and is sent by the SDK to Audience Manager in all subsequent signal requests.

If you are using the Experience Cloud ID (ECID) Service (formerly MCID), the ECID and other custom identifiers for the same visitor are sent with each signal request. The visitor profile that is returned by Audience Manager is saved in SDK local storage and is updated with subsequent signal calls.

<InlineAlert variant="info" slots="text"/>

For more information about the UUID and other Audience Manager identifiers, see the [index of IDs in Audience Manager](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=signal-with-data"/>

iOS

<Tabs query="platform=ios&api=signal-with-data"/>