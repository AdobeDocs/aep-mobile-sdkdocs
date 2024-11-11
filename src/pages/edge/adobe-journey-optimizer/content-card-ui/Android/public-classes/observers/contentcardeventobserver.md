---
title: ContentCardEventObserver
description: This document contains information on the ContentCardEventObserver class.
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

# ContentCardEventObserver

Messaging implementation of [AepUIEventObserver](./aepuieventobserver.md) for handling content card events.

#### Class Parameters

- _callback_ - An optional [ContentCardUIEventListener](../contentcarduieventlistener.md) to invoke when a content card event occurs.

## Methods

### onEvent

Called when an event related to a Content Card UI template occurs.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
override fun onEvent(event: UIEvent<*, *>)
```
