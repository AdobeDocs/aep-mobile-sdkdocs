---
title: AepUIContentProvider
description: This document contains information on the AepUIContentProvider interface.
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

# AepUIContentProvider

Responsible for retrieving and refreshing data as required by the UI.

Classes implementing this interface will define a strategy to provide content for rendering the UI.

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
interface AepUIContentProvider {
    @Deprecated("Use getUIContent instead", ReplaceWith("getUIContent"))
    suspend fun getContent(): Flow<Result<List<AepUITemplate>>>
    fun getUIContent(): Flow<Result<List<AepUITemplate>>>
    suspend fun refreshContent()
}
```

## Methods

### getUIContent

Retrieves the content for the UI. Content is fetched lazily when the returned flow is collected.

#### Returns

The content for the UI as a [Flow](https://developer.android.com/kotlin/flow) of [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) containing a list of [AepUITemplate](../ui-models/aepuitemplate.md)s.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun getUIContent(): Flow<Result<List<AepUITemplate>>>
```

### getContent (Deprecated)

<InlineAlert variant="warning" slots="text"/>

**Deprecated** — use [getUIContent](#getuicontent) instead. This suspend overload eagerly fetches content before returning the flow and requires a coroutine call site to obtain the flow reference.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Deprecated("Use getUIContent instead", ReplaceWith("getUIContent"))
suspend fun getContent(): Flow<Result<List<AepUITemplate>>>
```

### refreshContent

Refreshes the content for the UI. Implementations should update the data into the flow returned by [getUIContent](#getuicontent).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun refreshContent()
```
