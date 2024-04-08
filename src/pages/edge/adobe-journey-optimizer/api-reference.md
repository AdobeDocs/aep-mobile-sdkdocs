---
title: Adobe Journey Optimizer API reference
description: An API reference for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
---

import Alerts from '/src/pages/resources/alerts.md'
import Tabs from './tabs/api-reference.md'

# Adobe Journey Optimizer API reference

## extensionVersion

The extensionVersion API returns the library version.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

## registerExtension

<Alerts query="platform=android-register-extension&componentClass=InlineNestedAlert"/>

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

## handleNotificationResponse

The handleNotificationResponse function transmits the push notification interaction feedback.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=handle-notification-response"/>

iOS

<Tabs query="platform=ios&api=handle-notification-response"/>

## addPushTrackingDetails

The addPushTrackingDetails API is used to update a pending intent with important information, such as messageId and Customer Journey information.

<InlineAlert variant="help" slots="text"/>

Calling this API is mandatory, so the pending intent can be used while tracking push notification interactions.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=add-push-tracking-details"/>

iOS

<Tabs query="platform=iOS&api=add-push-tracking-details"/>

## refreshInAppMessages

Calling refreshInAppMessages API will force the Messaging extension to get an updated definition of messages from the remote.

<CodeBlock slots="heading, code" repeat="4" languages="Kotlin, Java, Swift, ObjC" />

#### Android

```kotlin
Messaging.refreshInAppMessages()
```

#### Android

```java
Messaging.refreshInAppMessages();
```

#### iOS

```swift
Messaging.refreshInAppMessages()
```

#### iOS

```objc
[AEPMobileMessaging refreshInAppMessages];
```
