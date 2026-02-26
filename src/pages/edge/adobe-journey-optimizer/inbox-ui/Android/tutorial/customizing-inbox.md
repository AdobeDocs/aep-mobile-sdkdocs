---
title: Customizing Inbox
description: This tutorial explains how to customize the appearance and behavior of the Inbox in your Android application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Tutorial
- Customizing UI
- Inbox UI
- Content Cards
- Android
---

# Customizing Inbox

This tutorial explains how to customize the appearance and behavior of the Inbox in your Android application.

## Overview

The `AepInbox` composable provides extensive customization options to match your app's design system. You can customize:

- **Inbox Container**: Heading, list layout, padding, and spacing
- **Custom Views**: Loading, error, and empty state views
- **Unread Indicators**: Icon style, alignment, and background color
- **Content Cards**: Individual card appearance through `AepUIStyle`

All customizations are applied using the `InboxUIStyle` builder and `AepUIStyle` when rendering the `AepInbox` composable.

## Customizing Inbox Container Style

The `InboxUIStyle` class provides a builder pattern to customize the inbox container appearance and custom views.

### Heading Style

Customize the heading text appearance using `AepTextStyle`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.style.AepTextStyle
import com.adobe.marketing.mobile.aepcomposeui.style.InboxUIStyle
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp

val headingStyle = AepTextStyle(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    textStyle = TextStyle(
        color = MaterialTheme.colorScheme.onSurface,
        fontWeight = FontWeight.Bold,
        fontSize = 24.sp,
        textAlign = TextAlign.Start
    )
)

val inboxStyle = InboxUIStyle.Builder()
    .headingStyle(headingStyle)
    .build()
```

### Vertical Layout (LazyColumn) Style

For vertical inbox layouts, customize the `LazyColumn` using `AepLazyColumnStyle`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.style.AepLazyColumnStyle
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.ui.Alignment

val lazyColumnStyle = AepLazyColumnStyle(
    modifier = Modifier
        .fillMaxSize()
        .background(Color.LightGray),
    contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
    verticalArrangement = Arrangement.spacedBy(12.dp),
    horizontalAlignment = Alignment.CenterHorizontally
)

val inboxStyle = InboxUIStyle.Builder()
    .lazyColumnStyle(lazyColumnStyle)
    .build()
```

### Horizontal Layout (LazyRow) Style

For horizontal inbox layouts, customize the `LazyRow` using `AepLazyRowStyle`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.style.AepLazyRowStyle

val lazyRowStyle = AepLazyRowStyle(
    modifier = Modifier
        .height(250.dp)
        .background(Color.DarkGray),
    contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
    horizontalArrangement = Arrangement.spacedBy(12.dp),
    verticalAlignment = Alignment.CenterVertically
)

val inboxStyle = InboxUIStyle.Builder()
    .lazyRowStyle(lazyRowStyle)
    .build()
```

## Custom Views

The Inbox provides hooks to replace the default loading, error, and empty state views with your own custom composables.

### Custom Loading View

Replace the default loading indicator with your own custom view:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxStyle = InboxUIStyle.Builder()
    .loadingView {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                CircularProgressIndicator(
                    modifier = Modifier.size(48.dp),
                    color = MaterialTheme.colorScheme.primary
                )
                Text(
                    text = "Loading your inbox...",
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
    .build()
```

### Custom Error View

Replace the default error view with your own custom view:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxStyle = InboxUIStyle.Builder()
    .errorView {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = Icons.Default.Warning,
                contentDescription = "Error",
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.error
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(
                text = "Unable to load inbox",
                style = MaterialTheme.typography.titleLarge,
                color = MaterialTheme.colorScheme.onSurface
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Please check your connection and try again",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center
            )
            Spacer(modifier = Modifier.height(24.dp))
            Button(onClick = { viewModel.refresh() }) {
                Text("Retry")
            }
        }
    }
    .build()
```

### Empty State Style

Customize the appearance of the empty state message and image:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val emptyMessageStyle = AepTextStyle(
    modifier = Modifier.padding(16.dp),
    textStyle = TextStyle(
        fontSize = 18.sp,
        color = Color.Gray,
        textAlign = TextAlign.Center
    )
)

val emptyImageStyle = AepImageStyle(
    modifier = Modifier.size(120.dp)
)

val inboxStyle = InboxUIStyle.Builder()
    .emptyMessageStyle(emptyMessageStyle)
    .emptyImageStyle(emptyImageStyle)
    .build()
```

## Unread Indicator Customization

Customize how unread messages are visually distinguished in the inbox.

### Unread Icon Style

Customize the unread indicator icon:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.style.AepImageStyle

val unreadIconStyle = AepImageStyle(
    modifier = Modifier
        .padding(8.dp)
        .size(24.dp)
)

val inboxStyle = InboxUIStyle.Builder()
    .unreadIconStyle(unreadIconStyle)
    .build()
```

### Unread Icon Alignment

Set the position of the unread indicator icon on the card:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.compose.ui.Alignment

val inboxStyle = InboxUIStyle.Builder()
    .unreadIconAlignment(Alignment.TopEnd) // TopStart, TopEnd, BottomStart, BottomEnd
    .build()
```

### Unread Background Color

Set a custom background color for unread cards that adapts to light and dark themes:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.uimodels.AepColor
import androidx.compose.ui.graphics.Color

val unreadBgColor = AepColor(
    light = Color(0xFFE3F2FD), // Light blue for light theme
    dark = Color(0xFF1E3A5F)   // Dark blue for dark theme
)

val inboxStyle = InboxUIStyle.Builder()
    .unreadBgColor(unreadBgColor)
    .build()
```

For detailed information on all available style classes and their properties, see [InboxUIStyle](../public-classes/styles/inboxuistyle.md).

## Customizing Content Cards

Individual content cards within the Inbox can be customized using `AepUIStyle`. This allows you to style different card types (SmallImage, LargeImage, ImageOnly) independently.

### Applying Content Card Styles

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.compose.runtime.remember
import com.adobe.marketing.mobile.aepcomposeui.style.AepCardStyle
import com.adobe.marketing.mobile.aepcomposeui.style.AepUIStyle
import com.adobe.marketing.mobile.aepcomposeui.style.SmallImageUIStyle
import com.adobe.marketing.mobile.aepcomposeui.style.LargeImageUIStyle
import com.adobe.marketing.mobile.aepcomposeui.style.ImageOnlyUIStyle
import com.adobe.marketing.mobile.messaging.InboxEventObserver

// Define card style
val cardStyle = AepCardStyle(
    modifier = Modifier
        .fillMaxWidth()
        .padding(horizontal = 16.dp, vertical = 8.dp)
)

// Create styles for each card type
val smallImageCardStyle = SmallImageUIStyle.Builder()
    .cardStyle(cardStyle)
    .titleAepTextStyle(AepTextStyle(
        textStyle = TextStyle(
            fontWeight = FontWeight.SemiBold,
            fontSize = 16.sp
        )
    ))
    .bodyAepTextStyle(AepTextStyle(
        textStyle = TextStyle(
            fontSize = 14.sp,
            color = Color.Gray
        )
    ))
    .build()

val largeImageCardStyle = LargeImageUIStyle.Builder()
    .cardStyle(cardStyle)
    .build()

val imageOnlyCardStyle = ImageOnlyUIStyle.Builder()
    .cardStyle(cardStyle)
    .build()

// Combine into AepUIStyle
val cardUIStyle = AepUIStyle(
    smallImageUIStyle = smallImageCardStyle,
    largeImageUIStyle = largeImageCardStyle,
    imageOnlyUIStyle = imageOnlyCardStyle
)

// Create an observer to handle inbox and item events
val observer = remember { InboxEventObserver() }

// Apply to AepInbox
AepInbox(
    uiState = inboxUIState,
    inboxStyle = inboxStyle,
    itemsStyle = cardUIStyle,
    observer = observer
)
```

For detailed information on customizing content cards, see [Customizing Content Card Templates](../../../content-card-ui/Android/tutorial/customizing-content-card-templates.md).

## Best Practices

### 1. Test Light and Dark Modes

Always test your customizations in both light and dark mode. Use `AepColor` for theme-aware colors:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val unreadBgColor = AepColor(
    light = Color(0xFFE3F2FD), // Light theme color
    dark = Color(0xFF1E3A5F)   // Dark theme color
)
```

### 2. Use Material Theme Colors

Leverage Material Theme for consistent styling that adapts to your app's theme:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val headingStyle = AepTextStyle(
    textStyle = TextStyle(
        color = MaterialTheme.colorScheme.onSurface,
        fontSize = MaterialTheme.typography.titleLarge.fontSize
    )
)
```

### 3. Keep Custom Views Lightweight

Avoid complex or heavy composables in custom loading, error, and empty views to maintain smooth performance.

### 4. Maintain Consistency

Keep your inbox customizations consistent with your app's overall design system by defining reusable style constants:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
object InboxDesignSystem {
    val cardPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp)
    val cardSpacing = 12.dp
    val headingFontSize = 22.sp
}
```

### 5. Remember Style Objects

Use `remember` for style objects that don't change to avoid unnecessary recomposition:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxScreen() {
    val inboxStyle = remember {
        InboxUIStyle.Builder()
            .headingStyle(headingStyle)
            .lazyColumnStyle(lazyColumnStyle)
            .build()
    }
    
    val observer = remember { InboxEventObserver() }
    
    AepInbox(
        uiState = inboxUIState,
        inboxStyle = inboxStyle,
        observer = observer
    )
}
```

### 6. Ensure Accessibility

Follow Android accessibility guidelines when customizing:

- Maintain sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Ensure touch targets are at least 48dp × 48dp
- Use semantic colors that convey meaning in both light and dark themes

### 7. Consider Screen Sizes

Design your inbox customizations to work across different screen sizes. Use responsive modifiers and avoid fixed widths:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val cardStyle = AepCardStyle(
    modifier = Modifier
        .fillMaxWidth()  // Adapts to screen width
        .padding(horizontal = 16.dp, vertical = 8.dp)
)
```

