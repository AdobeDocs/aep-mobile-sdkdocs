---
title: ContentCardUIEventListener
description: This document contains information on implementing the ContentCardUIEventListener.
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

# ContentCardUIEventListener

Interface to handle different callback events which can occur for a displayed content card.

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
interface ContentCardUIEventListener {
    fun onDisplay(aepUI: AepUI<*, *>,)
    fun onDismiss(aepUI: AepUI<*, *>,)
    fun onInteract(aepUI: AepUI<*, *>, interactionId: String?, actionUrl: String?): Boolean
}
```

## Methods

### onDisplay

Callback to invoke when a content card is displayed.

#### Parameters

* _aepUI_ - The [AepUI](./aepui.md) instance that was displayed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun onDisplay(aepUI: AepUI<*, *>,)
```

### onDismiss

Callback to invoke when a content card is dismissed.

#### Parameters

* _aepUI_ - The [AepUI](./aepui.md) instance that was dismissed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun onDismiss(aepUI: AepUI<*, *>,)
```

### onInteract

Callback to invoke when a content card is interacted with.

#### Parameters

* _aepUI_ - The [AepUI](./aepui.md) instance that was interacted with.
* _interactionId_ - An optional string identifier for the interaction event.
* _actionUrl_ - An optional URL associated with the interaction.

#### Returns

A boolean value indicating whether the interaction event was handled. Return `true` if the client app has handled the `actionUrl` associated with the interaction. Return `false` if the SDK should handle the `actionUrl`.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun onInteract(aepUI: AepUI<*, *>, interactionId: String?, actionUrl: String?): Boolean
```
