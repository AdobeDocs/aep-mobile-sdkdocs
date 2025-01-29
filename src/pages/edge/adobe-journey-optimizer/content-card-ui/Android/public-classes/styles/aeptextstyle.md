---
title: AepTextStyle
description: This document contains information on the AepTextStyle class.
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

# AepTextStyle

Class representing the style of an AEPText composable.

## Public Properties

| Property    | Type                                                         | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `modifier`  | [Modifier](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier)? | The modifier to be applied to the text.                      |
| `textStyle` | [TextStyle](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/TextStyle)? | The style configuration for the text such as color, font, and line height. |
| `overflow`  | [TextOverflow](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/style/TextOverflow?hl=en)? | The overflow strategy for the text.                          |
| `softWrap`  | Boolean?                                                     | Whether the text should break at soft line breaks.           |
| `maxLines`  | Int?                                                         | The maximum number of lines to display.                      |
| `minLines`  | Int?                                                         | The minimum number of lines to display.                      |
