import Tabs from './tabs/api-reference.md'

# Adobe Journey Optimizer API reference

## extensionVersion

The extensionVersion API returns the library version.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## handleNotificationResponse

The handleNotificationResponse function transmits the push notification interaction feedback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=handle-notification-response"/>

iOS

<Tabs query="platform=ios&api=handle-notification-response"/>


## registerExtension

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-extension"/>

iOS

<Tabs query="platform=ios&api=register-extension"/>


## setPushIdentifier

<InlineAlert variant="info" slots="text"/>

Although this API is provided in Mobile Core, the use of this API is required and leveraged by the Adobe Journey Optimizer extension to sync provided push tokens with Adobe Experience Platform services.

The setPushIdentifier API sets the push token, allowing you to sync it with Profile in Adobe Experience Platform.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=set-push-identifier"/>

iOS

<Tabs query="platform=ios&api=set-push-identifier"/>


## addPushTrackingDetails 

The addPushTrackingDetails API is used to update a pending intent with important information, such as messageId and Customer Journey information. 

<InlineAlert variant="help" slots="text"/>

Calling this API is mandatory, so the pending intent can be used while tracking push notification interactions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=add-push-tracking-details"/>

## Public classes

### MessagingPushPayload

`MessagePushPayload` is a helper class for extracting the data payload attributes from `RemoteMessage`, which are used while creating the push notification. 

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=messaging-push-payload"/>

### Public APIs

Public APIs are used to get attributes from the push payload, which are used while creating the push notification.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=public-apis"/>

### Payload keys

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=payload-keys"/>

iOS

<Tabs query="platform=ios&api=payload-keys"/>