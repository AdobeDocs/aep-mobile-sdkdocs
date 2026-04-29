---
title: InboxEventObserver
description: Implementation of AepInboxEventObserver for handling inbox-level and item-level events.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Observers
- Inbox UI
- Android
---

# InboxEventObserver

Implementation of [AepInboxEventObserver](./aepinboxeventobserver.md) for handling inbox-level events and delegating item-level events to content card observers.

* **Handles inbox events**: Automatically tracks inbox display events and sends them to Adobe Journey Optimizer
* **Delegates item events**: Forwards content card events (display, interact, dismiss) to the provided observer
* **Prevents duplicates**: Avoids sending redundant inbox display tracking for the same successful load (handled inside the Messaging SDK)

## Constructor

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
InboxEventObserver(
    provider: MessagingInboxProvider,
    itemEventObserver: AepUIEventObserver? = null
)
```

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| provider | [MessagingInboxProvider](../content-provider/messaginginboxprovider.md) | The provider that owns the inbox state. The observer will call `provider.updateInboxState()` to update the inbox state after handling events. |
| itemEventObserver | [AepUIEventObserver](../../../../content-card-ui/Android/public-classes/observers/aepuieventobserver.md)? | An optional observer that handles item-level events. When null, a default `ContentCardEventObserver` with null callback will be used. |

## Methods

### onEvent

Inherited from `AepUIEventObserver`. Delegates item-level events to all provided observers.

## Usage

### Basic Usage (No Custom Event Handling)

Create the observer in your ViewModel and pass it to `AepInbox`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.adobe.marketing.mobile.messaging.InboxEventObserver
import com.adobe.marketing.mobile.messaging.MessagingInboxProvider
import com.adobe.marketing.mobile.messaging.Surface
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.stateIn

class InboxViewModel : ViewModel() {
    val inboxProvider = MessagingInboxProvider(Surface("inbox"))
    
    val observer = InboxEventObserver(inboxProvider)

    val inboxUIState = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )
}

@Composable
fun InboxScreen(viewModel: InboxViewModel) {
    val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()

    AepInbox(
        uiState = inboxUIState,
        observer = viewModel.observer
    )
}
```

### With Content Card Event Handling

To handle content card events (display, interact, dismiss), pass a `ContentCardEventObserver` to the `InboxEventObserver`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.aepcomposeui.AepUI
import com.adobe.marketing.mobile.messaging.ContentCardEventObserver
import com.adobe.marketing.mobile.messaging.ContentCardUIEventListener
import com.adobe.marketing.mobile.messaging.InboxEventObserver

class InboxViewModel : ViewModel() {
    private val cardCallback = object : ContentCardUIEventListener {
        override fun onDisplay(aepUI: AepUI<*, *>) {
            Log.d("Inbox", "Card displayed: ${aepUI.getTemplate().id}")
        }
        
        override fun onInteract(
            aepUI: AepUI<*, *>,
            interactionId: String?,
            actionUrl: String?
        ): Boolean {
            Log.d("Inbox", "Card interacted: $interactionId")
            // Return true if you handled the action URL
            return false
        }
        
        override fun onDismiss(aepUI: AepUI<*, *>) {
            Log.d("Inbox", "Card dismissed: ${aepUI.getTemplate().id}")
        }
    }
    
    val inboxProvider = MessagingInboxProvider(Surface("inbox"))
    
    val observer = InboxEventObserver(
        inboxProvider,
        ContentCardEventObserver(cardCallback)
    )

    val inboxUIState = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = InboxUIState.Loading
        )
}
```

## Best Practices

1. **Create in ViewModel**: Keep one `MessagingInboxProvider` and one `InboxEventObserver(provider, …)` in the same `ViewModel` so state and event handling stay aligned across configuration changes.

2. **Avoid Heavy Work**: Event handlers run on the main thread. Keep them lightweight and dispatch heavy work to background threads.

3. **Single Observer Instance**: Use one `InboxEventObserver` per inbox surface and pass it to `AepInbox`; reuse the same provider instance for `getInboxUI()` and for the observer constructor argument.
