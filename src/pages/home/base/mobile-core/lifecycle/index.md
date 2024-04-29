---
title: Mobile Core Lifecycle extension overview
description: An overview for the Mobile Core Lifecycle extension.
keywords:
- Lifecycle
- Lifecycle for Mobile Core
- Mobile Core
- Product overview
---

import Tabs from './tabs/index.md'

# Lifecycle

Sessions contain information about the app's current lifecycle, such as the device information, the application install or upgrade information, the session start and pause times, the number of application launches, and additional context data that is provided by the developer through the `LifecycleStart` API. Session data is persisted, so it is available across application launches.

## Add Lifecycle to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=add"/>

iOS

<Tabs query="platform=ios&task=add"/>

<!--- React Native

<Tabs query="platform=react-native&task=add"/>

Flutter

<Tabs query="platform=flutter&task=add"/> --->

## Register Lifecycle with Mobile Core and add appropriate Start/Pause calls

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>

<!--- React Native

<Tabs query="platform=react-native&task=register"/> --->
