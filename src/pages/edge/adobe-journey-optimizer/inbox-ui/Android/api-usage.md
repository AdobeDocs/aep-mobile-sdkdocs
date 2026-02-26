---
title: Inbox UI API Usage
description: Learn how to use the Messaging extension APIs to implement inbox with UI.
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

# API Reference

This document provides information on how to use the Messaging APIs to retrieve and display inbox views in your application.

## getInboxUI

The `getInboxUI` method retrieves a flow of [InboxUIState](./public-classes/inboxuistate.md) for the provided surface. The `InboxUIState` represents the current state of the inbox (Loading, Success, or Error) and includes the inbox template and content cards to be rendered using the [AepInbox](./public-classes/aepinbox.md) composable.

<InlineAlert variant="info" slots="text"/>

Calling this API will not download the inbox configuration or content cards from Adobe Journey Optimizer; it will only retrieve the data that is already downloaded and cached by the Messaging extension. You **must** call [`updatePropositionsForSurfaces`](../../code-based/api-reference.md#updatepropositionsforsurfaces) API from the AEPMessaging extension with the desired surfaces prior to calling this API.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun getInboxUI(): Flow<InboxUIState>
```

## refresh

The `refresh` method refreshes the Inbox content by fetching new inbox and content cards propositions from the device cache and updating the flow returned by `getInboxUI`. This will cause all collectors of the flow to receive the updated inbox state.

<InlineAlert variant="info" slots="text"/>

`getInboxUI` automatically loads initial content when first collected, so this method is only needed for manual refresh operations (e.g., pull-to-refresh or refresh button).

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
suspend fun refresh()
```

## Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.compose.runtime.remember
import com.adobe.marketing.mobile.Messaging
import com.adobe.marketing.mobile.messaging.MessagingInboxProvider
import com.adobe.marketing.mobile.messaging.Surface
import com.adobe.marketing.mobile.messaging.InboxEventObserver
import com.adobe.marketing.mobile.aepcomposeui.components.AepInbox
import com.adobe.marketing.mobile.aepcomposeui.state.InboxUIState

// Download the inbox and content cards for inbox surface using Messaging extension
val surfaces = mutableListOf<Surface>()
val surface = Surface("inbox")
surfaces.add(surface)
Messaging.updatePropositionsForSurfaces(surfaces)

// Initialize the MessagingInboxProvider
val inboxProvider = MessagingInboxProvider(surface)

// Get the inbox state within a view model
class InboxViewModel : ViewModel() {
    private val inboxProvider = MessagingInboxProvider(Surface("inbox"))
    
    val inboxUIState: StateFlow<InboxUIState> = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )
    
    fun refresh() {
        viewModelScope.launch {
            // Fetch latest content from server
            Messaging.updatePropositionsForSurfaces(listOf(Surface("inbox")))
            // Update the inbox UI with new content
            inboxProvider.refresh()
        }
    }
}

// Display the inbox in your composable
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

