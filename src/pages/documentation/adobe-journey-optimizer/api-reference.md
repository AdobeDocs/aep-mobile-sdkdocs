import ExtensionVersionIos from './tabs/api-reference/extension-version/ios.md'
import ExtensionVersionAndroid from './tabs/api-reference/extension-version/android.md'
import HandleNotificationResponseIos from './tabs/api-reference/handle-notification-response/ios.md'
import HandleNotificationResponseAndroid from './tabs/api-reference/handle-notification-response/android.md'
import PayloadKeysIos from './tabs/api-reference/payload-keys/ios.md'
import PayloadKeysAndroid from './tabs/api-reference/payload-keys/android.md'
import RegisterExtensionIos from './tabs/api-reference/register-extension/ios.md'
import RegisterExtensionAndroid from './tabs/api-reference/register-extension/android.md'
import SetPushIdentifierIos from './tabs/api-reference/set-push-identifier/ios.md'
import SetPushIdentifierAndroid from './tabs/api-reference/set-push-identifier/android.md'
import AddPushTrackingDetailsAndroid from './tabs/api-reference/add-push-tracking-details/android.md'
import MessagingPushPayloadAndroid from './tabs/api-reference/messaging-push-payload/android.md'
import PublicApisAndroid from './tabs/api-reference/public-apis/android.md'

# Adobe Journey Optimizer API reference

## extensionVersion

The extensionVersion API returns the library version.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<ExtensionVersionAndroid/>

#### iOS

<ExtensionVersionIos/>

## handleNotificationResponse

The handleNotificationResponse function transmits the push notification interaction feedback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<HandleNotificationResponseAndroid/>

#### iOS

<HandleNotificationResponseIos/>

## registerExtension

The registerExtension API lets you register your extension with the [Mobile Core](../mobile-core/index.md).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

#### Android

<RegisterExtensionAndroid/>

#### iOS

<RegisterExtensionIos/>

## setPushIdentifier

<InlineAlert variant="info" slots="text"/>

Although this API is provided in Mobile Core, the use of this API is required and leveraged by the Adobe Journey Optimizer extension to sync provided push tokens with Adobe Experience Platform services.

The setPushIdentifier API sets the push token, allowing you to sync it with Profile in Adobe Experience Platform.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<SetPushIdentifierAndroid/>

iOS

<SetPushIdentifierIos/>

## addPushTrackingDetails 

The addPushTrackingDetails API is used to update a pending intent with important information, such as messageId and Customer Journey information. 

<InlineAlert variant="help" slots="text"/>

Calling this API is mandatory, so the pending intent can be used while tracking push notification interactions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<AddPushTrackingDetailsAndroid/>

## Public classes

### MessagingPushPayload

`MessagePushPayload` is a helper class for extracting the data payload attributes from `RemoteMessage`, which are used while creating the push notification. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<MessagingPushPayloadAndroid/>

### Public APIs

Public APIs are used to get attributes from the push payload, which are used while creating the push notification.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<PublicApisAndroid/>

### Payload keys

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<PayloadKeysAndroid/>

iOS

<PayloadKeysIos/>
