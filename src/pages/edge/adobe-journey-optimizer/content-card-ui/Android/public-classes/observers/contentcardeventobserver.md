---
title: ContentCardEventObserver
description: This document contains information on the ContentCardEventObserver class.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
- Android
---

# ContentCardEventObserver

Messaging implementation of [AepUIEventObserver](./aepuieventobserver.md) for handling content card events.

### Parameters

The primary constructor takes two optional parameters.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| callback | [ContentCardUIEventListener](../contentcarduieventlistener.md)? | Optional listener for display, dismiss, and interact callbacks. |
| provider | [ContentCardUIProvider](../content-provider/contentcarduiprovider.md)? | Optional provider for the same surface as your card list. When non-null, the Messaging SDK updates the provider-backed flow after callback handling so collectors of [getContentCardUIFlow](../content-provider/contentcarduiprovider.md#getcontentcarduiflow) see changes such as dismiss without calling `refreshContent`. Use the **same** instance you pass to `getContentCardUIFlow()`. |

## Behavior

For each event, the observer runs Messaging’s template-specific handling (including your `callback` when provided), then notifies `provider` when it is non-null. If you only need callbacks and your UI does not depend on the provider’s flow, you may omit `provider`. If you collect cards from `ContentCardUIProvider`, pass that provider so the list stays in sync when card state changes.

## Methods

### onEvent

Called when an event related to a Content Card UI template occurs.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun onEvent(event: UIEvent<*, *>)
```
