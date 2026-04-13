---
title: MessagingInboxProvider
description: This document contains information on the MessagingInboxProvider class.
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

# MessagingInboxProvider

Messaging extension implementation of [AepInboxContentProvider](./aepinboxcontentprovider.md). `MessagingInboxProvider` is responsible for fetching the Inbox content for a given surface and managing the Inbox state through reactive updates when the content needs to be refreshed.

## Constructor

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
MessagingInboxProvider(surface: Surface)
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| surface | [Surface](../../../../public-classes/surface.md) | The surface to fetch inbox content for. |

## Methods

### getInboxUI

Retrieves the Inbox content and updates the state as a flow. This method automatically loads initial content when first collected.

#### Returns

A [Flow](https://developer.android.com/kotlin/flow) of [InboxUIState](../inboxuistate.md) representing the current state of the inbox.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun getInboxUI(): Flow<InboxUIState>
```

### refresh

Refreshes the Inbox content by fetching new inbox and content cards propositions from the device cache and updating the flow returned by [getInboxUI](#getinboxui). This will cause all collectors of the flow to receive the updated inbox.

Emits `InboxUIState.Loading` before fetching, then emits `InboxUIState.Success` or `InboxUIState.Error`.

<InlineAlert variant="info" slots="text"/>

`getInboxUI` automatically loads initial content when first collected, so you only need `refresh` for manual refresh (for example after `updatePropositionsForSurfaces`).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override suspend fun refresh()
```

## Usage Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class InboxViewModel : ViewModel() {
    private val inboxProvider = MessagingInboxProvider(Surface("inbox"))

    val inboxUIState: StateFlow<InboxUIState> = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )

    fun refresh() {
        viewModelScope.launch {
            inboxProvider.refresh()
        }
    }
}
```
