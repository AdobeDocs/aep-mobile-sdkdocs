---
title: Adobe Journey Optimizer API reference
description: An API reference for the Adobe Journey Optimizer (AJO) mobile extension.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
---

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

<InlineAlert variant="warning" slots="text"/>

Deprecated as of 2.0.0. Please use the [MobileCore.registerExtensions](../mobile-core/api-reference.md#registerextensions) API instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>
