---
title: ContentCardUIProvider
description: This document contains information on the ContentCardUIProvider interface.
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

# ContentCardUIProvider

Messaging extension implementation of [AepUIContentProvider](./aepuicontentprovider.md). `ContentCardUIProvider` fetches and manages content for a given surface and exposes card lists through [getContentCardUIFlow](#getcontentcarduiflow). When you render cards with [ContentCardEventObserver](../observers/contentcardeventobserver.md) and pass this provider as the optional second argument, the same flow can emit updated lists after interactions (for example dismiss) without calling [refreshContent](#refreshcontent).

## Methods

### getContentCardUIFlow

Retrieves a Flow of Result containing AepUI instances for the given surface, which only emits values when there is an active collector. Content is fetched lazily when the flow is collected. The flow continues to emit updates when [refreshContent](#refreshcontent) is called or when card UI events are processed via [ContentCardEventObserver](../observers/contentcardeventobserver.md).

#### Returns

A [Flow](https://developer.android.com/kotlin/flow) that emits a [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) containing a list of [AepUI](../aepui.md) instances.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun getContentCardUIFlow(): Flow<Result<List<AepUI<*, *>>>>
```

### getContentCardUI (Deprecated)

<InlineAlert variant="warning" slots="text"/>

**Deprecated** — use [getContentCardUIFlow](#getcontentcarduiflow) instead. This suspend overload eagerly fetches content before returning the flow and requires a coroutine call site to obtain the flow reference.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Deprecated("Use getContentCardUIFlow() instead.")
suspend fun getContentCardUI(): Flow<Result<List<AepUI<*, *>>>>
```

### refreshContent

Fetches the latest content cards for the given surface and pushes the update to all active collectors of [getContentCardUIFlow](#getcontentcarduiflow).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override suspend fun refreshContent()
```

### getUIContent

Retrieves a Flow of Result containing [AepUITemplate](../ui-models/aepuitemplate.md) instances for the given surface, which only emit values when there is an active collector.. Content is fetched lazily when the flow is collected. The flow continues to emit updates when [refreshContent](#refreshcontent) is called.

Prefer [getContentCardUIFlow](#getcontentcarduiflow) when rendering with Compose UI components, as it emits `AepUI` instances ready for use with card composables.

#### Returns

A [Flow](https://developer.android.com/kotlin/flow) that emits a [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) containing a list of [AepUITemplate](../ui-models/aepuitemplate.md) instances.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun getUIContent(): Flow<Result<List<AepUITemplate>>>
```

### getContent (Deprecated)

<InlineAlert variant="warning" slots="text"/>

**Deprecated** — use [getUIContent](#getuicontent) instead. This suspend overload eagerly fetches content before returning the flow and requires a coroutine call site to obtain the flow reference.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Deprecated("Use getUIContent instead", ReplaceWith("getUIContent"))
override suspend fun getContent(): Flow<Result<List<AepUITemplate>>>
```
