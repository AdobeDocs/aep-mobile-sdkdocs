---
title: Customizing Content Card Templates style
description: This document contains a tutorial on how to customize content card template's style.
keywords:
- Adobe Journey Optimizer
- Guide
- Messaging
- Tutorial
- Content Card
- UI
- Android
---

# Customizing Content Card Templates style

This tutorial explains how to customize the UI of content cards in your application.

## Overview

The Messaging extension provides a way to customize content cards by using [Compose modifiers](https://developer.android.com/develop/ui/compose/modifiers?hl=en) in conjunction with additional parameters provided when creating a style object. Refer to each individual style class to see the customizable settings available for each style.

## Setting custom style parameters when creating a `SmallImageUIStyle`

Perform the following steps to customize content card templates:

1. Create a style object with a `Modifier` passing in any additional customizations as part of the constructor parameters. If customizing an [AepButtonStyle](../public-classes/styles/aepbuttonstyle.md), for example, you may pass customizations such as the enabled state, elevation, shape, border, color, and padding alongside the `Modifier`.
2. Use the created style object when invoking the builder of the template style object (e.g. `SmallImageUIStyle`)

Below is an example implementation:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

### Kotlin

```kotlin
// create a custom style for the small image card in row
val smallImageCardStyleRow = SmallImageUIStyle.Builder()
	.cardStyle(AepCardStyle(modifier = Modifier.width(400.dp).height(200.dp)))
  .rootRowStyle(AepRowStyle(modifier = Modifier.fillMaxSize()))
	.imageStyle(AepImageStyle(modifier = Modifier.width(100.dp).height(100.dp)))
	.buttonRowStyle(AepRowStyle(modifier = Modifier.fillMaxSize()))
	.buttonStyle(
    arrayOf(
      Pair(
      AepButtonStyle(modifier = Modifier.padding(8.dp)),
      AepTextStyle(textStyle = TextStyle(color = Color.Green, fontSize = 16.sp)))))
	.dismissButtonStyle(AepIconStyle(modifier = Modifier.padding(8.dp)))
  .dismissButtonAlignment(Alignment.TopEnd)
	.textColumnStyle(AepColumnStyle(modifier = Modifier.fillMaxSize()))
	.bodyAepTextStyle(AepTextStyle(textStyle = TextStyle(Color.Yellow)))
	.titleAepTextStyle(AepTextStyle(textStyle = TextStyle(Color.Green)))
	.build()

// Create row with composables from AepUI instances
LazyRow {
  items(reorderedAepUIList) { aepUI ->                   
    when (aepUI) {
      is SmallImageUI -> {
        val state = aepUI.getState()
        if (!state.dismissed) 
        {
          SmallImageCard(ui = aepUI, 
                         style = smallImageCardStyleRow, // setting the custom style here
                         observer = ContentCardEventObserver(contentCardCallback))
        }
      }
    }
  }
}
```
