---
title: Listening to Inbox Events
description: This tutorial explains how to listen to events from the Inbox in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Tutorial
- Events
- Inbox UI
- Content Cards
- Android
---

# Listening to Inbox Events

This tutorial explains how to listen to events from the Inbox in your application.

## Overview

The Messaging extension provides ways to monitor:

- **Inbox-Level Events**: Track inbox display events using `InboxEventObserver`
- **Inbox State Changes**: Track loading, success, and error states of the inbox container
- **Content Card Events**: Listen to user interactions with individual cards within the inbox

## Inbox-Level Events

The `AepInbox` composable requires an `AepInboxEventObserver` to handle inbox-level events such as when the inbox is displayed. The Messaging extension provides `InboxEventObserver` which implements this interface and automatically tracks inbox display events.

### Using InboxEventObserver

Pass an `InboxEventObserver` to the `AepInbox` composable:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxScreen(viewModel: InboxViewModel) {
    val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()
    
    // Create observer - automatically handles inbox events
    val observer = remember { InboxEventObserver() }

    AepInbox(
        uiState = inboxUIState,
        inboxStyle = InboxUIStyle.Builder().build(),
        observer = observer
    )
}
```

The `InboxEventObserver` automatically:
- Tracks inbox display events when the inbox is shown
- Prevents duplicate display events for the same inbox state
- Sends tracking data to Adobe Journey Optimizer

## Inbox State Changes

The `InboxUIState` sealed interface represents the different states of the inbox. By collecting the state flow from `MessagingInboxProvider`, you can respond to state transitions.

### InboxUIState Types

| State | Description |
|-------|-------------|
| `InboxUIState.Loading` | The inbox is fetching content from the device cache |
| `InboxUIState.Success` | Content loaded successfully (may contain cards or be empty) |
| `InboxUIState.Error` | An error occurred while loading content |

### Observing State Changes

Use the Flow returned by `getInboxUI()` to observe state changes:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
class InboxViewModel : ViewModel() {
    private val inboxProvider = MessagingInboxProvider(Surface("inbox"))

    val inboxUIState: StateFlow<InboxUIState> = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )
}
```

### Responding to State Changes in UI

You can respond to state changes directly in your composable:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
@Composable
fun InboxScreen(viewModel: InboxViewModel) {
    val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()

    // Respond to state changes
    LaunchedEffect(inboxUIState) {
        when (inboxUIState) {
            is InboxUIState.Loading -> {
                Log.d("Inbox", "Loading inbox...")
            }
            is InboxUIState.Success -> {
                val successState = inboxUIState as InboxUIState.Success
                Log.d("Inbox", "Loaded ${successState.items.size} cards")
            }
            is InboxUIState.Error -> {
                val errorState = inboxUIState as InboxUIState.Error
                Log.e("Inbox", "Error: ${errorState.error.message}")
            }
        }
    }

    val observer = remember { InboxEventObserver() }

    AepInbox(
        uiState = inboxUIState,
        inboxStyle = InboxUIStyle.Builder().build(),
        observer = observer
    )
}
```

### Accessing Success State Data

When the inbox loads successfully, `InboxUIState.Success` contains:

- `template`: The inbox template with heading, layout, and styling information
- `items`: List of `AepUI` objects representing the content cards

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
when (val state = inboxUIState) {
    is InboxUIState.Success -> {
        val cardCount = state.items.size
        val heading = state.template.heading
        val layout = state.template.layout
        
        // Check if inbox is empty
        if (state.items.isEmpty()) {
            Log.d("Inbox", "Inbox is empty")
        }
    }
    // ...
}
```

### Handling Errors

When an error occurs, `InboxUIState.Error` contains the throwable with error details:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
when (val state = inboxUIState) {
    is InboxUIState.Error -> {
        val errorMessage = state.error.message ?: "Unknown error"
        
        // Show error UI or retry
        showErrorDialog(errorMessage) {
            viewModel.refresh()
        }
    }
    // ...
}
```

## Content Card Events

Individual content cards within the inbox emit events when users interact with them. To listen to these events:

1. Implement a `ContentCardUIEventListener` to handle card events
2. Wrap it in a `ContentCardEventObserver`
3. Pass the `ContentCardEventObserver` to `InboxEventObserver`

### Example

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.ContentCardEventObserver
import com.adobe.marketing.mobile.messaging.ContentCardUIEventListener
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxScreen(viewModel: InboxViewModel) {
    val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()
    
    // Create the card event listener
    val cardCallback = remember { 
        object : ContentCardUIEventListener {
            override fun onDisplay(aepUI: AepUI<*, *>) {
                // Handle card display
            }
            
            override fun onInteract(
                aepUI: AepUI<*, *>,
                interactionId: String?,
                actionUrl: String?
            ): Boolean {
                // Handle card interaction
                return false
            }
            
            override fun onDismiss(aepUI: AepUI<*, *>) {
                // Handle card dismissal
            }
        }
    }
    
    // Wrap in ContentCardEventObserver
    val contentCardObserver = remember { ContentCardEventObserver(cardCallback) }
    
    // Pass to InboxEventObserver which handles inbox display and delegates card events
    val observer = remember { InboxEventObserver(contentCardObserver) }

    AepInbox(
        uiState = inboxUIState,
        inboxStyle = InboxUIStyle.Builder().build(),
        observer = observer
    )
}
```

For detailed information on content card events, implementing `ContentCardUIEventListener`, and handling actionable URLs, see [Listening to Content Card Events](../../../content-card-ui/Android/tutorial/listening-content-card-events.md).

## Best Practices

1. **Always Provide an Observer**: The `AepInbox` composable requires an `AepInboxEventObserver`. At minimum, use `InboxEventObserver()` to enable automatic inbox display tracking:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val observer = remember { InboxEventObserver() }
```

2. **Avoid Heavy Work in Event Handlers**: Event handlers are called on the main thread. Keep them lightweight and dispatch heavy work to background threads.

3. **Use remember for Observers**: Wrap your observer instances in `remember` to avoid recreating them on recomposition:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val cardCallback = remember { InboxCardCallback() }
val contentCardObserver = remember { ContentCardEventObserver(cardCallback) }
val observer = remember { InboxEventObserver(contentCardObserver) }
```

4. **Handle Errors Gracefully**: Provide user-friendly error messages and retry options when the inbox fails to load.

