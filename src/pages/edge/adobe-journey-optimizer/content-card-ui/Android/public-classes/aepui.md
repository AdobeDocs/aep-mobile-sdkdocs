---
title: AepUI
description: This document contains information regarding the AepUI interface and its implementations.
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

# AepUI

The `AepUI` interface represents a UI component that can be rendered using the Adobe Experience Platform (AEP) compose UI library. The AEP compose UI library currently supports rendering the following UI template:

`SmallImageUI` which renders `Small Image template`

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
sealed interface AepUI<T : AepUITemplate, S : AepCardUIState> {
    fun getTemplate(): T
    fun getState(): S
    fun updateState(newState: S)
}
```

## Methods

### getTemplate

Retrieves the template associated with this UI component.

### Returns

A template of type `T` which is an implementation of the  `AepUITemplate` interface.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
fun getTemplate(): T
```

### getState

Retrieves the current state of the UI component.

### Returns

A state of type `S` which is a subclass of the  `AepCardUIState` class.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
fun getState(): S
```

### updateState

Updates the state of the UI component with a new state.

### Parameters

* _newState_ - The new state of type `S` to update within the UI component.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
fun updateState(newState: S)
```

## Implementing Classes

## SmallImageUI

Implementation of the [AepUI](#AepUI) interface used in rendering a UI for a [SmallImageTemplate](./ui-models/smallimagetemplate.md).

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
class SmallImageUI(
    private val template: SmallImageTemplate,
    state: SmallImageCardUIState
) : AepUI<SmallImageTemplate, SmallImageCardUIState>
```

## Methods

### getTemplate

Retrieves the template associated with the small image UI.

### Returns

The small image template.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
override fun getTemplate(): SmallImageTemplate
```

### getState

Retrieves the current state of the small image UI.

### Returns

The current `SmallImageCardUIState`.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
override fun getState(): SmallImageCardUIState
```

### updateState

Updates the current state of the `SmallImageUI`.

### Parameters

* _newState_ - The new state of type `SmallImageCardUIState` to update within the UI component.

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

``` kotlin
override fun updateState(newState: SmallImageCardUIState)
```
