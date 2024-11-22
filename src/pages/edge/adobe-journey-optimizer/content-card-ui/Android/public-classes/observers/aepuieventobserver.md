---
title: AepUIEventObserver
description: This document contains information on the AepUIEventObserver interface.
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

# AepUIEventObserver

Interface for observing events related to Adobe Experience Platform UI components. This interface defines a mechanism for handling various types of events triggered by lifecycle changes or user interactions with UI elements, such as display, dismiss, or user interaction events.

## Interface Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
interface AepUIEventObserver {
    fun onEvent(event: UIEvent<*, *>)
}
```

## Methods

### onEvent

Called when an event related to a UI template occurs.

### Parameters

* _event_ - The event to handle. Implementers can provide specific logic based on the type of UIEvent

### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
fun onEvent(event: UIEvent<*, *>)
```
