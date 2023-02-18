import Tabs from './tabs/index.md'

# Identity

The Identity extension enables your app with the Experience Cloud ID (ECID). This service helps with the synchronization of Adobe and other customer identifiers.

<InlineAlert variant="warning" slots="text"/>

On web or other platforms, there might situations where this extension might not be required, and the implementation of this SDK extension on mobile apps is required.

To get started with Identity, complete the following steps:

1. Add the **Identity** extension to your app.
2. Implement the SDK APIs to complete the following tasks:
   - Update customer IDs.
   - Append Adobe visitor data to a URL string.
   - Return customer IDs.
   - Retrieve Experience Cloud IDs.
   - Set advertising IDs.
   - Set the device notification for push notifications.

## Add the Identity extension to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

<!--- React Native
<Tabs query="platform=react-native&task=add"/>
Flutter
<Tabs query="platform=flutter&task=add"/> --->

## Register the Identity extension

The `MobileCore.registerExtensions()` API can be used to register the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

To register the Identity extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

<!--- React Native
<Tabs query="platform=react-native&task=register"/>
Flutter
<Tabs query="platform=flutter&task=register"/> --->

<InlineAlert variant="info" slots="text"/>

Previously known as MCID, the Experience Cloud ID (ECID) is a 38 character ID that uniquely identifies each visitor in the Adobe Experience Platform.

After the configuration is complete, an ECID is generated and, where applicable, is included on all Analytics and Audience Manager hits. Other IDs, such as custom and automatically-generated IDs, continue to be sent with each hit.

## Visitor tracking between an app and the mobile web

If your app opens mobile web content, you need to ensure that visitors are not identified separately as they move between the native and mobile web.

### Visitor IDs in apps

The Mobile SDK generates a unique visitor ID when the app is installed. This ECID is stored in persistent memory on the mobile device and is sent with every hit. The ECID is removed when the user uninstalls the app or when the user sets the Mobile SDK global privacy status to `optedout`.

<InlineAlert variant="info" slots="text"/>

When the Mobile SDK privacy status is set to `optedout`, and the ECID is removed, a new unique visitor ID (ECID) is generated when the user sets the global privacy status to `optedin`.

<InlineAlert variant="info" slots="text"/>

App visitor IDs persist through upgrades.

### Visitor IDs in the mobile web

Typical mobile web implementations use the same standard analytics `s_code.js` or `AppMeasurement.js` that is used in desktop sites. The JavaScript libraries have their own methods of generating unique visitor IDs, which causes a different visitor ID to be generated when you open mobile web content from your app.

To use the same visitor ID in the app and mobile web and pass the visitor ID to the mobile web in the URL, complete the following steps:

### Implementing visitor tracking between an app and the mobile web

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=implement"/>

iOS

<Tabs query="platform=ios&task=implement"/>

<!--- React Native

<Tabs query="platform=react-native&task=implement"/>

Flutter

<Tabs query="platform=flutter&task=implement"/> --->

The ID service code on the destination domain extracts the ECID from the URL instead of sending a request to Adobe for a new ID. The ID service code on the destination page uses this ECID to track the visitor. On hits from the mobile web content, verify that the `mid` parameter exists on each hit, and that this value matches the `mid`value that is being sent by the app code.
