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

### Basic Usage

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxScreen(viewModel: InboxViewModel = viewModel()) {
    val inboxUIState by viewModel.inboxUIState.collectAsState()
    
    // Create an observer to handle inbox and item events
    val observer = remember { InboxEventObserver() }
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            observer = observer
        )
    }
}
```

### With Custom Styling

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.InboxEventObserver

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
    
    val observer = remember { InboxEventObserver() }
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            inboxStyle = inboxStyle,
            itemsStyle = cardStyle,
            observer = observer
        )
    }
}
```

### With Content Card Event Listener

To listen to content card events (display, interact, dismiss), implement [ContentCardUIEventListener](../../../content-card-ui/Android/public-classes/contentcarduieventlistener.md) and pass it through the observer chain:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.lifecycle.compose.collectAsState
import androidx.lifecycle.viewmodel.compose.viewModel
import com.adobe.marketing.mobile.aepcomposeui.AepUI
import com.adobe.marketing.mobile.messaging.ContentCardEventObserver
import com.adobe.marketing.mobile.messaging.ContentCardUIEventListener
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxWithEventsScreen(viewModel: InboxViewModel = viewModel()) {
    val inboxUIState by viewModel.inboxUIState.collectAsState()
    
    // Step 1: Implement ContentCardUIEventListener to handle card events
    val cardEventListener = remember {
        object : ContentCardUIEventListener {
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
                
                // Return false to let SDK handle the URL
                return false
            }
            
            override fun onDismiss(aepUI: AepUI<*, *>) {
                // Called when user dismisses a card
            }
        }
    }
    
    // Step 2: Wrap the listener in ContentCardEventObserver
    val contentCardObserver = remember { ContentCardEventObserver(cardEventListener) }
    
    // Step 3: Pass ContentCardEventObserver to InboxEventObserver
    // InboxEventObserver handles inbox-level events and delegates card events
    val observer = remember { InboxEventObserver(contentCardObserver) }
    
    MaterialTheme {
        AepInbox(
            uiState = inboxUIState,
            observer = observer
        )
    }
}
```

For detailed information on the `ContentCardUIEventListener` callbacks, see [ContentCardUIEventListener](../../../content-card-ui/Android/public-classes/contentcarduieventlistener.md).

