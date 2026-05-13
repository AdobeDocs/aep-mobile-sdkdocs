---
title: UIAction
description: This document contains information regarding UIAction and its action types.
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

# UIAction

Represents an action that can be performed on a UI component.

## Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
sealed class UIAction
```

## Click

Represents a click `UIAction` that can be performed on a UI component.

### Public Properties

| Property    | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| `id`        | String  | The unique identifier of the UI component.                   |
| `actionUrl` | String? | An optional URL to be opened when the UI component is clicked. |

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

``` kotlin
data class Click(val id: String, val actionUrl: String?) : UIAction()
```
