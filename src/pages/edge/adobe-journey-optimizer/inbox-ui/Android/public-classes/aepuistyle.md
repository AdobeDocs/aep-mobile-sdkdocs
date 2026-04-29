---
title: AepUIStyle
description: This document contains information on the AepUIStyle class.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Customizing UI
- Inbox UI
- Content Cards
- Android
---

# AepUIStyle

Class that encapsulates the style configuration for all supported types of Experience Platform UI content content card components. This class is used when displaying content cards within the inbox to apply consistent styling across different card types.

## Public Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| smallImageUIStyle | [SmallImageUIStyle](../../../content-card-ui/Android/public-classes/styles/smallimageuistyle.md) | The style configuration for small image content cards. |
| largeImageUIStyle | [LargeImageUIStyle](../../../content-card-ui/Android/public-classes/styles/largeimageuistyle.md) | The style configuration for large image content cards. |
| imageOnlyUIStyle | [ImageOnlyUIStyle](../../../content-card-ui/Android/public-classes/styles/imageonlyuistyle.md) | The style configuration for image-only content cards. |

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class AepUIStyle(
    val smallImageUIStyle: SmallImageUIStyle = SmallImageUIStyle.Builder().build(),
    val largeImageUIStyle: LargeImageUIStyle = LargeImageUIStyle.Builder().build(),
    val imageOnlyUIStyle: ImageOnlyUIStyle = ImageOnlyUIStyle.Builder().build()
)
```

## Usage

The `AepUIStyle` is used to customize the appearance of individual content cards within the inbox. Each property controls the styling for a specific card template type.

### Basic Usage

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Use default styles for all card types
val cardStyle = AepUIStyle()

AepInbox(
    uiState = inboxUIState,
    itemsStyle = cardStyle,
    observer = observer
)
```

### Custom Styling

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Customize styles for each card type
val smallImageStyle = SmallImageUIStyle.Builder()
    .cardStyle(AepCardStyle(
        modifier = Modifier.fillMaxWidth().padding(8.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ))
    .titleAepTextStyle(AepTextStyle(
        textStyle = TextStyle(
            fontWeight = FontWeight.Bold,
            fontSize = 18.sp
        )
    ))
    .build()

val largeImageStyle = LargeImageUIStyle.Builder()
    .cardStyle(AepCardStyle(
        modifier = Modifier.fillMaxWidth().padding(8.dp)
    ))
    .imageStyle(AepImageStyle(
        contentScale = ContentScale.Crop
    ))
    .build()

val imageOnlyStyle = ImageOnlyUIStyle.Builder()
    .cardStyle(AepCardStyle(
        modifier = Modifier.fillMaxWidth().padding(8.dp)
    ))
    .imageStyle(AepImageStyle(
        modifier = Modifier.fillMaxSize()
    ))
    .build()

val cardStyle = AepUIStyle(
    smallImageUIStyle = smallImageStyle,
    largeImageUIStyle = largeImageStyle,
    imageOnlyUIStyle = imageOnlyStyle
)

AepInbox(
    uiState = inboxUIState,
    itemsStyle = cardStyle,
    observer = observer
)
```

### Styling Specific Card Types

If your inbox only contains specific card types, you can customize only those styles:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Only customize small image cards, use defaults for others
val cardStyle = AepUIStyle(
    smallImageUIStyle = SmallImageUIStyle.Builder()
        .cardStyle(AepCardStyle(
            colors = CardDefaults.cardColors(
                containerColor = Color(0xFFF5F5F5)
            )
        ))
        .build()
)
```
