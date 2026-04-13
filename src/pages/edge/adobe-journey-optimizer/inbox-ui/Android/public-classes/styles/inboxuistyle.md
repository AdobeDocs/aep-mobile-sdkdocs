---
title: InboxUIStyle
description: This document contains information on the InboxUIStyle class.
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

# InboxUIStyle

Class representing the style for the Inbox composable. Use the `Builder` class to create an instance with custom styling options.

## Builder Methods

| Method | Parameter Type | Description |
| ------ | -------------- | ----------- |
| headingStyle | [AepTextStyle](../../../content-card-ui/Android/public-classes/styles/aeptextstyle.md) | Style for the inbox heading text. |
| lazyColumnStyle | [AepLazyColumnStyle](./aeplazycolumnstyle.md) | Style for vertical layout (LazyColumn). |
| lazyRowStyle | [AepLazyRowStyle](./aeplazyrowstyle.md) | Style for horizontal layout (LazyRow). |
| emptyMessageStyle | [AepTextStyle](../../../content-card-ui/Android/public-classes/styles/aeptextstyle.md) | Style for empty state message text. |
| emptyImageStyle | [AepImageStyle](../../../content-card-ui/Android/public-classes/styles/aepimagestyle.md) | Style for empty state image. |
| unreadIconStyle | [AepImageStyle](../../../content-card-ui/Android/public-classes/styles/aepimagestyle.md) | Style for unread indicator icon. |
| unreadIconAlignment | [Alignment](https://developer.android.com/reference/kotlin/androidx/compose/ui/Alignment) | Position of unread indicator on cards. |
| unreadBgColor | [AepColor](../../../../content-card-ui/Android/public-classes/ui-models/aepcolor.md) | Background color for unread cards with light and dark theme support. |
| loadingView | @Composable () -> Unit | Custom loading view composable. |
| errorView | @Composable () -> Unit | Custom error view composable. |

## Usage Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxStyle = InboxUIStyle.Builder()
    .headingStyle(AepTextStyle(
        modifier = Modifier.fillMaxWidth().padding(16.dp),
        textStyle = TextStyle(
            fontWeight = FontWeight.Bold,
            fontSize = 24.sp
        )
    ))
    .lazyColumnStyle(AepLazyColumnStyle(
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ))
    .unreadBgColor(AepColor(
        light = Color(0xFFE3F2FD),
        dark = Color(0xFF1E3A5F)
    ))
    .loadingView {
        CircularProgressIndicator()
    }
    .build()
```
