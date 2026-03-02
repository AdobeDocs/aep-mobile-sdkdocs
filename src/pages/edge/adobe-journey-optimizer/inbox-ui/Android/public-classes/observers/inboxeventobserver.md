---
title: InboxEventObserver
description: Implementation of AepInboxEventObserver for handling inbox-level and item-level events.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Observers
- Inbox UI
- Android
---

# InboxEventObserver

Implementation of [AepInboxEventObserver](./aepinboxeventobserver.md) for handling inbox-level events and delegating item-level events to content card observers.

- **Handles inbox events**: Automatically tracks inbox display events and sends them to Adobe Journey Optimizer
- **Delegates item events**: Forwards content card events (display, interact, dismiss) to provided observers
- **Prevents duplicates**: Ensures inbox display events are only tracked once per state instance

## Constructor

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
InboxEventObserver(vararg itemEventObservers: AepUIEventObserver)
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| itemEventObservers | vararg [AepUIEventObserver](../../../../content-card-ui/Android/public-classes/observers/aepuieventobserver.md) | Zero or more observers that handle item-level events. Each observer's `onEvent` is called for every item-level event. |

## Methods

### onEvent

Inherited from `AepUIEventObserver`. Delegates item-level events to all provided observers.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun onEvent(event: UIEvent<*, *>)
```

### onInboxEvent

Handles inbox-level events. Currently handles `InboxEvent.Display` by tracking the inbox proposition.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun onInboxEvent(event: InboxEvent)
```
