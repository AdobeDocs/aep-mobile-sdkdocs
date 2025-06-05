---
title: Mobile Core Signal API reference
description: An API reference for the Mobile Core Signal extension.
keywords:
- API reference
- Mobile Core
- Signal
- Signal for Mobile Core
---

import Tabs from './tabs/api-reference.md'

# Signal API reference

## extensionVersion

The `extensionVersion()` API returns the version of the Signal extension that is registered with the Mobile Core extension.

To get the version of the Signal extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=extension-version"/>

iOS

<Tabs query="platform=ios&api=extension-version"/>

<!--- React Native

<Tabs query="platform=react-native&api=extension-version"/>

Flutter

<Tabs query="platform=flutter&api=extension-version"/> --->

## registerExtension

<InlineAlert variant="warning" slots="header, text1"/>

This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension.

Use [`MobileCore.registerExtensions()`](../mobile-core/api-reference.md#registerextensions) API instead.

Registers the Signal extension with the Mobile Core.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&api=register-extension"/>

<!--- React Native

<Tabs query="platform=react-native&api=register-extension"/> --->

## collectPii

The Signal extension can be used to handle `collectPii` rules. For more information, see the [collectPii](../api-reference.md#collectpii) API.
