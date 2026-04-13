---
title: AepInbox
description: This document contains information on the AepInbox composable.
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

# AepInbox

`AepInbox` is a Jetpack Compose composable that renders an Inbox UI based on the provided [InboxUIState](./inboxuistate.md). It automatically handles different states (Loading, Success, Error) and renders the appropriate UI for each state.

## Function Definition

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Composable
fun AepInbox(
    uiState: InboxUIState,
    inboxStyle: InboxUIStyle = InboxUIStyle.Builder().build(),
    itemsStyle: AepUIStyle = AepUIStyle(),
    observer: AepInboxEventObserver
)
```

## Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| uiState | [InboxUIState](./inboxuistate.md) | The current state of the Inbox UI. This determines what content is rendered:<br/>- `InboxUIState.Loading` - Displays the loading view<br/>- `InboxUIState.Success` - Displays the inbox with content cards<br/>- `InboxUIState.Error` - Displays the error view |
| inboxStyle | [InboxUIStyle](./styles/inboxuistyle.md) | _(optional)_ The style to customize the inbox container appearance, including heading, layout, empty state views, and unread indicators. Defaults to a standard inbox style. |
| itemsStyle | [AepUIStyle](./aepuistyle.md) | _(optional)_ The style to customize individual content cards within the inbox. This allows styling of different card types ([SmallImageUIStyle](../../../content-card-ui/Android/public-classes/styles/smallimageuistyle.md), [LargeImageUIStyle](../../../content-card-ui/Android/public-classes/styles/largeimageuistyle.md), [ImageOnlyUIStyle](../../../content-card-ui/Android/public-classes/styles/imageonlyuistyle.md)). Defaults to a standard card style. |
| observer | [AepInboxEventObserver](./observers/aepinboxeventobserver.md) | _(required)_ An event observer that handles inbox-level events internally (such as inbox display tracking) and allows apps to listen to content card events (Display, Interact, Dismiss). Use [InboxEventObserver](./observers/inboxeventobserver.md) which automatically handles inbox tracking and can optionally delegate card events to your [ContentCardUIEventListener](../../../content-card-ui/Android/public-classes/contentcarduieventlistener.md). |

## Behavior

The `AepInbox` composable automatically:

1. **Handles State Changes**: Responds to changes in `InboxUIState` and renders the appropriate UI
2. **Supports Layouts**: Renders inbox in vertical or horizontal layouts based on `InboxTemplate.layout`
3. **Manages Empty States**: Displays custom empty message and image when no content cards are available
4. **Applies Unread Styling**: Automatically applies unread background colors to unread content cards based on theme (light/dark) and configuration
5. **Wraps in Material Theme**: Provides Material Theme context for proper rendering of text and other Material components

## Example Usage

<InlineAlert variant="warning" slots="header, text" />

Do not embed AepInbox inside an unbounded container/lazy layout that scrolls in the same direction

`AepInbox` uses a `LazyColumn` for vertical layouts and a `LazyRow` for horizontal layouts. The orientation is set when the inbox campaign is authored and published on Adobe Journey Optimizer UI. Embedding `AepInbox` inside an unbounded container/lazy layout that scrolls in the same direction — such as a `LazyColumn` for a vertical scrolling inbox or a `LazyRow` for a horizontal scrolling inbox — causes a runtime crash (`IllegalStateException: Vertically/Horizontally scrollable component was measured with an infinity maximum constraints`).

### Basic Usage

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Composable
fun InboxScreen(viewModel: InboxViewModel = viewModel()) {
    val inboxUIState by viewModel.inboxUIState.collectAsState()
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            observer = viewModel.observer
        )
    }
}
```

### With Custom Styling

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Composable
fun CustomInboxScreen(viewModel: InboxViewModel = viewModel()) {
    val inboxUIState by viewModel.inboxUIState.collectAsState()
    
    val inboxStyle = remember {
        InboxUIStyle.Builder()
            .headingStyle(AepTextStyle(
                textStyle = TextStyle(
                    fontWeight = FontWeight.Bold,
                    fontSize = 24.sp
                )
            ))
            .unreadBgColor(AepColor(
                light = Color(0xFFE3F2FD),
                dark = Color(0xFF1E3A5F)
            ))
            .build()
    }
    
    val cardStyle = remember {
        AepUIStyle(
            smallImageUIStyle = SmallImageUIStyle.Builder()
                .cardStyle(AepCardStyle(
                    elevation = CardDefaults.cardElevation(
                        defaultElevation = 4.dp
                    )
                ))
                .build()
        )
    }
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            inboxStyle = inboxStyle,
            itemsStyle = cardStyle,
            observer = viewModel.observer
        )
    }
}
```

### With Content Card Event Listener

To listen to content card events (display, interact, dismiss), implement [ContentCardUIEventListener](../../../content-card-ui/Android/public-classes/contentcarduieventlistener.md) and pass it to the `InboxEventObserver` in your ViewModel:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.adobe.marketing.mobile.aepcomposeui.AepUI
import com.adobe.marketing.mobile.messaging.ContentCardEventObserver
import com.adobe.marketing.mobile.messaging.ContentCardUIEventListener
import com.adobe.marketing.mobile.messaging.InboxEventObserver
import com.adobe.marketing.mobile.messaging.MessagingInboxProvider
import com.adobe.marketing.mobile.messaging.Surface
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.stateIn

// In ViewModel - observer survives configuration changes
class InboxViewModel : ViewModel() {
    private val cardEventListener = object : ContentCardUIEventListener {
        override fun onDisplay(aepUI: AepUI<*, *>) {
            // Called when a content card is displayed
        }
        
        override fun onInteract(
            aepUI: AepUI<*, *>,
            interactionId: String?,
            actionUrl: String?
        ): Boolean {
            // Called when user taps on a card or button
            // Handle custom deep links
            actionUrl?.let { url ->
                handleDeepLink(url)
                return true // Return true to indicate URL was handled
            }
            
            // Return false to let SDK handle the URL (open in browser)
            return false
        }
        
        override fun onDismiss(aepUI: AepUI<*, *>) {
            // Called when user dismisses a card
        }
    }
    
    val inboxProvider = MessagingInboxProvider(Surface("inbox"))
    
    val observer = InboxEventObserver(
        inboxProvider,
        ContentCardEventObserver(cardEventListener)
    )

    val inboxUIState = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )
}

@Composable
fun InboxWithEventsScreen(viewModel: InboxViewModel = viewModel()) {
    val inboxUIState by viewModel.inboxUIState.collectAsState()
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            observer = viewModel.observer
        )
    }
}
```

For detailed information on the `ContentCardUIEventListener` callbacks, see [ContentCardUIEventListener](../../../content-card-ui/Android/public-classes/contentcarduieventlistener.md).
