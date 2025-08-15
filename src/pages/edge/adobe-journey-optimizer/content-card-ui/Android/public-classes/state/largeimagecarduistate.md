---
title: LargeImageCardUIState
description: This document contains information on the LargeImageCardUIState.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Large Image Template
- Android
---

# LargeImageCardUIState

<InlineAlert variant="info" slots="text"/>

LargeImageCardUIState is only available in AEP SDK BOM version 3.15.0+.

Class which implements [AepCardUIState](./aepcarduistate.md) and represents the UI state of a Large Image template card.

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class LargeImageCardUIState(
    override val dismissed: Boolean = false,
    override val displayed: Boolean = false
) : AepCardUIState()
```

## Public Properties

| Property    | Type    | Description                                    |
| ----------- | ------- | ---------------------------------------------- |
| `dismissed` | Boolean | Indicates whether the card has been dismissed. |
| `displayed` | Boolean | Indicates whether the card has been displayed. |
