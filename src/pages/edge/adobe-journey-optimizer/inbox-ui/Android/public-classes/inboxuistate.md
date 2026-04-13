---
title: InboxUIState
description: This document contains information on the InboxUIState sealed interface.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Customizing UI
- Inbox UI
- Content Cards
- Android
---

# InboxUIState

Sealed interface representing different states for the Inbox UI.

## States

### Loading

Indicates that the inbox is currently fetching content from the device cache.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
object Loading : InboxUIState
```

### Success

Indicates that the inbox content was loaded successfully. Contains the inbox template and list of content cards.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class Success(
    val template: InboxTemplate,
    val items: List<AepUI<*, *>>
) : InboxUIState
```

#### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| template | [InboxTemplate](./inboxtemplate.md) | The properties to be used for rendering the inbox (heading, layout, capacity, etc.). |
| items | `List<AepUI<*, *>>` | List of [AepUI](../../../content-card-ui/Android/public-classes/aepui.md) elements representing content cards to display in the inbox. |

### Error

Indicates that an error occurred while loading inbox content.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class Error(
    val error: Throwable
) : InboxUIState
```

#### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| error | Throwable | The throwable that caused the error. |

## Usage Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()

when (inboxUIState) {
    is InboxUIState.Loading -> {
        // Show loading indicator
    }
    is InboxUIState.Success -> {
        val successState = inboxUIState as InboxUIState.Success
        val cardCount = successState.items.size
        val heading = successState.template.heading
        // Render inbox with cards
    }
    is InboxUIState.Error -> {
        val errorState = inboxUIState as InboxUIState.Error
        // Show error message: errorState.error.message
    }
}
```
