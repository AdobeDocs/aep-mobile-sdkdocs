---
title: AepInboxContentProvider
description: This document contains information on the AepInboxContentProvider interface.
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

# AepInboxContentProvider

Responsible for retrieving and refreshing data as required by the inbox UI.

Classes implementing this interface will define a strategy to provide content for rendering the inbox UI.

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
interface AepInboxContentProvider {
    fun getInboxUI(): Flow<InboxUIState>
    suspend fun refresh()
}
```

## Methods

### getInboxUI

Retrieves the Inbox content and updates the state as a flow.

#### Returns

The content for the Inbox as a [Flow](https://developer.android.com/kotlin/flow) of [InboxUIState](../inboxuistate.md).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun getInboxUI(): Flow<InboxUIState>
```

### refresh

Refreshes the Inbox content and updates the data into the flow returned by [getInboxUI](#getinboxui).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun refresh()
```

