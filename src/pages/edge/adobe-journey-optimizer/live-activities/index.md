---
title: Live Activities
description: This document guides you to integrating Live Activities in your iOS application using the Adobe Journey Optimizer Messaging extension.
keywords:
- Adobe Journey Optimizer
- Guide
- Live Activities
- iOS
- ActivityKit
---

# Live Activities

This document guides you through integrating [Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities) in your iOS application using the Adobe Journey Optimizer Messaging extension.

Live Activities display up-to-date information from your app on the Lock Screen and in the Dynamic Island, helping users stay informed about events or tasks in real time. With the Messaging extension, you can register your app's Live Activity types so that Adobe Journey Optimizer can remotely start and update Live Activities via push notifications.

<InlineAlert variant="info" slots="text"/>

Live Activities are supported on iOS 16.1 and above. Push-to-start support requires iOS 17.2 or newer, and broadcast push support requires iOS 18 or newer.

## Prerequisites

| Feature | iOS version | Xcode version | Description |
| --- | --- | --- | --- |
| Live Activities (local start) | iOS 16.1+ | Xcode 14.1+ | App starts a Live Activity locally |
| Push token updates | iOS 16.1+ | Xcode 14.1+ | Server can update an existing Live Activity |
| Push-to-start tokens | iOS 17.2+ | Xcode 15.2+ | Server can start a Live Activity remotely |
| Broadcast push support | iOS 18.0+ | Xcode 16.0+ | One push updates multiple Live Activities |

* Dependencies: AEPCore, AEPMessaging, AEPMessagingLiveActivity, ActivityKit

## API reference

* [Live Activities APIs](./api-reference.md)

## Tutorial

* [Live Activities implementation tutorial](./tutorial.md)

## Public Classes and Protocols

* [Protocol - LiveActivityAttributes](./public-classes/live-activity-attributes.md)
* [Class - LiveActivityData](./public-classes/live-activity-data.md)
* [Enum - LiveActivityOrigin](./public-classes/live-activity-origin.md)
* [Protocol - LiveActivityAssuranceDebuggable](./public-classes/live-activity-assurance-debuggable.md)
