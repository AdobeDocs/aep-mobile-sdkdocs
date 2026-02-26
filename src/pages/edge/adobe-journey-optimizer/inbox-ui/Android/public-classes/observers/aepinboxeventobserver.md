---
title: AepInboxEventObserver
description: Interface for observing inbox-level events in addition to item-level UI events.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Observers
- Inbox UI
- Android
---

# AepInboxEventObserver

Interface for observing inbox-level events in addition to item-level UI events. `AepInboxEventObserver` extends [AepUIEventObserver](../../../../content-card-ui/Android/public-classes/observers/aepuieventobserver.md) to add inbox-specific event handling. This allows implementations to handle both:
- **Individual item events**: Display, dismiss, and interact events for content cards
- **Inbox-level events**: Display events for the inbox container itself

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
interface AepInboxEventObserver : AepUIEventObserver {
    fun onInboxEvent(event: InboxEvent)
}
```

## Methods

### onInboxEvent

Called when an inbox-level event occurs. Implementations can use this to perform analytics tracking or other side effects for inbox events.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun onInboxEvent(event: InboxEvent)
```

#### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| event | [InboxEvent](./inboxevent.md) | The inbox event to handle. Currently supports `InboxEvent.Display`. |