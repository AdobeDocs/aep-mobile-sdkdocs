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

## resetIdentities

The `MobileCore.resetIdentities` API is used to inform extensions to clear any identities that it owns. Starting with release 3.3.3 on Android and 5.6.3 on iOS, the Messaging extension handles the [MobileCore.resetIdentities](../../home/base/mobile-core/api-reference.md#resetidentities) API by clearing the push identifier from the Messaging extension. Using this API does not remove the push identifier from the server-side User Profile Graph.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=reset-identities"/>

iOS

<Tabs query="platform=ios&api=reset-identities"/>

<InlineAlert variant="info" slots="text"/>

Channel-specific APIs are listed in the corresponding API reference section.
