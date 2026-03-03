---
title: Live Activities - API Reference
description: This document lists the public APIs available in the Messaging extension for implementing Live Activities with Adobe Journey Optimizer.
keywords:
- Adobe Journey Optimizer
- API reference
- Messaging
- Live Activities
- iOS
- ActivityKit
---

import Tabs from './tabs/api-reference.md'

# Live Activities - API reference

This document lists the public APIs available in the Messaging extension for implementing Live Activities with Adobe Journey Optimizer.

## registerLiveActivities

The `registerLiveActivities` API registers one or more Live Activity attribute types with the Messaging extension. Once registered, the extension automatically:

* Collects push-to-start tokens (iOS 17.2+)
* Collects Live Activity update tokens
* Manages lifecycle events and tracking
* Forwards tokens to Adobe Experience Platform

This enables Adobe Journey Optimizer to remotely start and update Live Activities via push notifications.

This API must be called after the Messaging extension has been registered with `MobileCore`. You should register all of your app's `LiveActivityAttributes` types that you want to be managed by Adobe Journey Optimizer.

<InlineAlert variant="info" slots="text"/>

When registering multiple types, their push-to-start tokens are automatically batched together and dispatched in a single event, improving efficiency.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&api=register-live-activities"/>
