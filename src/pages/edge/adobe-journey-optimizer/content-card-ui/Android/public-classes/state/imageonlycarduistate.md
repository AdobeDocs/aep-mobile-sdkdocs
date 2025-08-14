---
title: ImageOnlyCardUIState
description: This document contains information on the ImageOnlyCardUIState.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Image Only Template
- Android
---

# ImageOnlyCardUIState

Class which implements [AepCardUIState](./aepcarduistate.md) and represents the UI state of an image-only template card.

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class ImageOnlyCardUIState(
    override val dismissed: Boolean = false,
    override val displayed: Boolean = false
) : AepCardUIState()
```

## Public Properties

| Property    | Type    | Description                                    |
| ----------- | ------- | ---------------------------------------------- |
| `dismissed` | Boolean | Indicates whether the card has been dismissed. |
| `displayed` | Boolean | Indicates whether the card has been displayed. |
