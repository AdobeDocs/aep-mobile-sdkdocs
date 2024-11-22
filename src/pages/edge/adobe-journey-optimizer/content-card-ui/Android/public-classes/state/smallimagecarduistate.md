---
title: SmallImageCardUIState
description: This document contains information on the SmallImageCardUIState.
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

# SmallImageCardUIState

Class which implements [AepCardUIState](./aepcarduistate.md) and represents the UI state of a Small Image template card.

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
data class SmallImageCardUIState(
    override val dismissed: Boolean = false,
    override val displayed: Boolean = false
) : AepCardUIState()
```

## Public Properties

| Property    | Type    | Description                                    |
| ----------- | ------- | ---------------------------------------------- |
| `dismissed` | Boolean | Indicates whether the card has been dismissed. |
| `displayed` | Boolean | Indicates whether the card has been displayed. |
