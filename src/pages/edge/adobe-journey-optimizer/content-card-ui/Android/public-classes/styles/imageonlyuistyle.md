---
title: ImageOnlyUIStyle
description: This document contains information on the ImageOnlyUIStyle class.
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

# ImageOnlyUIStyle

Class representing the style for an image-only Adobe Experience Platform UI.

![Image Only Card Composeable Layout](<../../../assets/Android/image-only-card-layout.png>)

## Public Properties

| Property                 | Type                                                         | Description                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cardStyle`              | [AepCardStyle](./aepcardstyle.md)                            | The style for the card.                                      |
| `imageStyle`             | [AepImageStyle](./aepimagestyle.md)                          | The style for the image.                                     |
| `dismissButtonStyle`     | [AepIconStyle](./aepiconstyle.md)                            | The style for the dismiss button.                            |
| `dismissButtonAlignment` | [Alignment](https://developer.android.com/reference/kotlin/androidx/compose/ui/Alignment) | The alignment for the dismiss button.                        |

## Customization

The `ImageOnlyUIStyle` is created using a builder. Here's an example:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val imageOnlyStyle = ImageOnlyUIStyle.Builder()
    .cardStyle(AepCardStyle(modifier = Modifier.width(320.dp)))
    .imageStyle(AepImageStyle(contentScale = ContentScale.Fit))
    .build()
```
