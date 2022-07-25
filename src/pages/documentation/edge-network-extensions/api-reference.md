# Edge Network API reference

## extensionVersion

Returns the version of the client-side Edge extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

## sendEvent

Sends an Experience event to Adobe Experience Platform Edge Network.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<SendEventAndroid/>

iOS (AEP 3.x)

<SendEventIosAEP/>

## registerExtension

Registers the Edge extension with the Mobile Core SDK.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<RegisterExtensionAndroid/>

iOS (AEP 3.x)

<RegisterExtensionIosAEP/>

{% tab title="Android" %}

{% endtab %}

{% tab title="iOS (AEP 3.x)" %}


{% endtab %}
{% endtabs %}

## resetIdentities

Resets current state of the AEP Edge extension and clears previously cached content related to current identity, if any.

See [MobileCore.resetIdentities](../mobile-core/api-reference.md#resetidentities) for more details.

## Public classes

### XDM Schema

The AEP Edge extension provides the Schema and Property interfaces (Android) / XDMSchema protocol (iOS) that can be used to define the classes associated with your XDM schema in Adobe Experience Platform.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<XdmSchemaAndroid/>

iOS (AEP 3.x)

<XdmSchemaIosAEP/>

### EdgeEventHandle

The `EdgeEventHandle` is a response fragment from Adobe Experience Platform Edge Network for a sent XDM Experience Event.
One event can receive none, one or multiple `EdgeEventHandle`(s) as response.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<EdgeEventHandleAndroid/>

iOS (AEP 3.x)

<EdgeEventHandleIosAEP/>

Use this class when calling the [sendEvent](#sendevent) API with EdgeCallback.

### ExperienceEvent

Experience Event is the event to be sent to Adobe Experience Platform Edge Network.
The XDM data is required for any Experience Event being sent using the Edge extension.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<ExperienceEventAndroid/>

iOS (AEP 3.x)

<ExperienceEventIosAEP/>

See [Edge Extension Usage](https://github.com/adobe/aepsdk-edge-ios/blob/main/docs/ExtensionUsage.md) for more examples.
