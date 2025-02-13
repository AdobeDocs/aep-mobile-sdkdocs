---
title: ContentCardMapper
description: This document contains information regarding the usage of the Content Card Mapper.
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

# ContentCardMapper

Singleton class used to store a mapping between valid [ContentCardSchemaData](../../../public-classes/content-card-schema-data.md#android-interface) and unique proposition IDs. The schema data is used when sending proposition track requests to Adobe Journey Optimizer.

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
class ContentCardMapper private constructor() {
    private val contentCardSchemaDataMap: MutableMap<String, ContentCardSchemaData> = HashMap()

    companion object {
        @JvmStatic
        val instance: ContentCardMapper by lazy { ContentCardMapper() }
    }
}
```

## Methods

### getContentCardSchemaData

Returns a `ContentCardSchemaData` object for the given proposition ID.

### Parameters

* _propositionId_ - the proposition ID to use as a key in the `ContentCardSchemaData` map.

### Returns

The `ContentCardSchemaData` for the given proposition ID, or null if not found.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
fun getContentCardSchemaData(propositionId: String): ContentCardSchemaData?
```
