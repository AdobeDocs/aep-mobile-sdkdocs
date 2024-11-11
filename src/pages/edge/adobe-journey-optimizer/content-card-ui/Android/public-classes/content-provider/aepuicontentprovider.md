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
    suspend fun getContent(): Flow<List<AepUITemplate>>
    suspend fun refreshContent()
}
```

## Methods

### getContent

Retrieves the content for the UI.

#### Returns

The content for the UI as a flow of [AepUITemplate](../ui-models/aepuitemplate.md)s.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun getContent(): Flow<List<AepUITemplate>>
```

### refreshContent

Refreshes the content for the UI. Implementations should update the data into the flow returned by [getContent](#getContent).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun refreshContent()
```