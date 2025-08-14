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

Messaging extension implementation of [AepUIContentProvider](./aepuicontentprovider.md). `ContentCardUIProvider` is responsible for fetching and managing the content for a given surface. It uses Adobe Messaging APIs to retrieve propositions and transform them into UI templates for display.

## Methods

### getContent

Retrieves a flow of AepUITemplate lists for the given surface. The flow emits updates whenever new content is fetched.

#### Returns

A [Flow](https://developer.android.com/kotlin/flow) of [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) containing lists of [AepUITemplate](../ui-models/aepuitemplate.md)s.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override suspend fun getContent(): Flow<Result<List<AepUITemplate>>>
```

### getContentCardUI

Retrieves a [Flow](https://developer.android.com/kotlin/flow) of [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) which contains a list of AepUI instances for the given surface. This function initiates the content fetch using [getContent](#getcontent) and then returns a flow of AepUI instances that represent the UI templates. The flow emits updates whenever new content is fetched or any changes occur.

#### Returns

A [Flow](https://developer.android.com/kotlin/flow) of [Result](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) that emits a list of AepUI instances.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun getContentCardUI(): Flow<Result<List<AepUI<*, *>>>>
```

### refreshContent

Updates the flow returned by [getContent](#getContent) with the latest cached content cards for the given surface.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override suspend fun refreshContent()
```
