---
title: AepCardUIState
description: This document contains information on the AepCardUIState.
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

# AepCardUIState

Class representing the state of an Adobe Experience Platform card. This class includes the properties `dismissed` and `displayed` which are common across different card states.

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
open class AepCardUIState(
    open val dismissed: Boolean = false,
    open val displayed: Boolean = false
)
```

## Public Properties

| Property    | Type    | Description                                    |
| ----------- | ------- | ---------------------------------------------- |
| `dismissed` | Boolean | Indicates whether the card has been dismissed. |
| `displayed` | Boolean | Indicates whether the card has been displayed. |
