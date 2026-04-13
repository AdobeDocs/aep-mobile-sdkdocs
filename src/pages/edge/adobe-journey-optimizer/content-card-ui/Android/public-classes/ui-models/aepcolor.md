---
title: AepColor
description: This document contains information on the AepColor UI model.
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

# AepColor

Data class representing colors for both light and dark themes in Experience Platform UI components.

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `light` | [Color](https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color) | The color to use in light theme mode. |
| `dark` | [Color](https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color)? | The color to use in dark theme mode. |

## Usage Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.uimodels.AepColor
import androidx.compose.ui.graphics.Color

val unreadBgColor = AepColor(
    light = Color(0xFFE3F2FD), // Light blue for light theme
    dark = Color(0xFF1E3A5F)   // Dark blue for dark theme
)
```
