---
title: InboxTemplate
description: This document contains information on the InboxTemplate data class.
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

# InboxTemplate

Data class containing the properties for rendering the inbox container, as configured in Adobe Journey Optimizer.

## Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| heading | [AepText](../../../content-card-ui/Android/public-classes/ui-models/aeptext.md) | The heading text displayed at the top of the inbox. |
| layout | [AepInboxLayout](#aepinboxlayout) | The layout orientation of the inbox (`VERTICAL` or `HORIZONTAL`). |
| capacity | Int | The maximum number of content cards to display in the inbox. |
| emptyMessage | [AepText](../../../content-card-ui/Android/public-classes/ui-models/aeptext.md)? | The message to display when the inbox is empty. |
| emptyImage | [AepImage](../../../content-card-ui/Android/public-classes/ui-models/aepimage.md)? | The image to display when the inbox is empty. |
| isUnreadEnabled | Boolean | Whether unread indicators are enabled for content cards. |
| unreadBgColor | [AepColor](../../../content-card-ui/Android/public-classes/ui-models/aepcolor.md)? | The background color for unread cards with light and dark theme support. |
| unreadIcon | [AepImage](../../../content-card-ui/Android/public-classes/ui-models/aepimage.md)? | The icon to display as the unread indicator. |
| unreadIconAlignment | [Alignment](https://developer.android.com/reference/kotlin/androidx/compose/ui/Alignment)? | The alignment position of the unread icon on cards. |

## Class Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
data class InboxTemplate(
    val heading: AepText,
    val layout: AepInboxLayout,
    val capacity: Int,
    val emptyMessage: AepText? = null,
    val emptyImage: AepImage? = null,
    val isUnreadEnabled: Boolean = false,
    val unreadBgColor: AepColor? = null,
    val unreadIcon: AepImage? = null,
    val unreadIconAlignment: Alignment? = null
)
```

## AepInboxLayout

Enum representing the layout orientation of the inbox.

| Value | Description |
| ----- | ----------- |
| VERTICAL | Cards are displayed in a vertical scrolling list (LazyColumn). |
| HORIZONTAL | Cards are displayed in a horizontal scrolling list (LazyRow). |

## Usage Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
when (val state = inboxUIState) {
    is InboxUIState.Success -> {
        val template = state.template
        
        // Access inbox configuration
        val headingText = template.heading
        val isVertical = template.layout == AepInboxLayout.VERTICAL
        val maxCards = template.capacity
        val showUnreadIndicators = template.isUnreadEnabled
        
        // Check if inbox is empty
        if (state.items.isEmpty()) {
            // Display template.emptyMessage and template.emptyImage
        }
    }
}
```
