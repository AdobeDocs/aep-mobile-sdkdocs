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

The `AepUI` interface represents a UI component that can be rendered using the Adobe Experience Platform compose UI library. The Experience Platform compose UI library currently supports rendering the following UI template:

* `SmallImageUI` which renders `Small Image template`
* `LargeImageUI` which renders `Large Image template`
* `ImageOnlyUI` which renders `Image Only template`

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

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

#### Returns

A template of type `T` which is an implementation of the  `AepUITemplate` interface.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
fun getTemplate(): T
```

### getState

Retrieves the current state of the UI component.

#### Returns

A state of type `S` which is a subclass of the  `AepCardUIState` class.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
fun getState(): S
```

### updateState

Updates the state of the UI component with a new state.

#### Parameters

* _newState_ - The new state of type `S` to update within the UI component.

##### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
fun updateState(newState: S)
```

## Implementing Classes

### ImageOnlyUI

Implementation of the [AepUI](#AepUI) interface used in rendering a UI for a [ImageOnlyTemplate](./ui-models/imageonlytemplate.md).

**Class Definition**

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class ImageOnlyUI(
    private val template: ImageOnlyTemplate,
    state: ImageOnlyCardUIState
) : AepUI<ImageOnlyTemplate, ImageOnlyCardUIState>
```

### LargeImageUI

Implementation of the [AepUI](#AepUI) interface used in rendering a UI for a [LargeImageTemplate](./ui-models/largeimagetemplate.md).

**Class Definition**

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class LargeImageUI(
    private val template: LargeImageTemplate,
    state: LargeImageCardUIState
) : AepUI<LargeImageTemplate, LargeImageCardUIState>
```

### SmallImageUI

Implementation of the [AepUI](#AepUI) interface used in rendering a UI for a [SmallImageTemplate](./ui-models/smallimagetemplate.md).

#### Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class SmallImageUI(
    private val template: SmallImageTemplate,
    state: SmallImageCardUIState
) : AepUI<SmallImageTemplate, SmallImageCardUIState>
```