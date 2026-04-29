---
title: InboxEvent
description: Sealed class representing different types of inbox-level events.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Observers
- Inbox UI
- Android
---

# InboxEvent

Represents different types of inbox-level events triggered by lifecycle changes or user interactions with the inbox container. All inbox events include the current [InboxUIState](../inboxuistate.md) when the event occurred.

`InboxEvent` represents events on the inbox as a whole, as opposed to [UIEvent](../../../../content-card-ui/Android/public-classes/uievent.md) which represents events on individual cards (display, dismiss, interact).

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
sealed class InboxEvent(open val inboxUIState: InboxUIState)
```

## Display

Event indicating that the inbox has been displayed to the user.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class Display(override val inboxUIState: InboxUIState.Success) : InboxEvent(inboxUIState)
```

#### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| inboxUIState | [InboxUIState.Success](../inboxuistate.md) | The success state of the inbox UI when the display event occurred. |
