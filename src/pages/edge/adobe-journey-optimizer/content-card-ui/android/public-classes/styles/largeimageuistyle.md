---
title: LargeImageUIStyle
description: This document contains information on the LargeImageUIStyle class.
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

# LargeImageUIStyle

<InlineAlert variant="info" slots="text"/>

LargeImageUIStyle is only available in AEP SDK BOM version 3.15.0+.

Class representing the style for a large image Adobe Experience Platform UI.

![Large Image Card Composeable Layout](<../../../assets/Android/large-image-card-layout.png>)

## Public Properties

| Property                 | Type                                                         | Description                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cardStyle`              | [AepCardStyle](../../../android/public-classes/styles/aepcardstyle.md)                            | The style for the card.                                      |
| `rootColumnStyle`        | [AepColumnStyle](../../../android/public-classes/styles/aepcolumnstyle.md)                        | The style for the root column.                               |
| `imageStyle`             | [AepImageStyle](../../../android/public-classes/styles/aepimagestyle.md)                          | The style for the image.                                     |
| `textColumnStyle`        | [AepColumnStyle](../../../android/public-classes/styles/aepcolumnstyle.md)                        | The style for the column containing the title, body and buttons. |
| `titleTextStyle`         | [AepTextStyle](../../../android/public-classes/styles/aeptextstyle.md)                            | The text style for the title.                                |
| `bodyTextStyle`          | [AepTextStyle](../../../android/public-classes/styles/aeptextstyle.md)                            | The text style for the body.                                 |
| `buttonRowStyle`         | [AepRowStyle](../../../android/public-classes/styles/aeprowstyle.md)                              | The style for the row containing the buttons.                |
| `buttonStyle`            | Array<[AepButtonStyle](../../../android/public-classes/styles/aepbuttonstyle.md)>                 | The style for the buttons.                                   |
| `dismissButtonStyle`     | [AepIconStyle](../../../android/public-classes/styles/aepiconstyle.md)                            | The style for the dismiss button.                            |
| `dismissButtonAlignment` | [Alignment](https://developer.android.com/reference/kotlin/androidx/compose/ui/Alignment) | The alignment for the dismiss button.                        |

## Customization

The `LargeImageUIStyle` is created using a builder. Here's an example:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val largeImageStyle = LargeImageUIStyle.Builder()
    .cardStyle(AepCardStyle(modifier = Modifier.width(420.dp)))
    .imageStyle(AepImageStyle(contentScale = ContentScale.Fit))
    .titleAepTextStyle(AepTextStyle())
    .bodyAepTextStyle(AepTextStyle())
    .buttonRowStyle(AepRowStyle())
    .build()
```
