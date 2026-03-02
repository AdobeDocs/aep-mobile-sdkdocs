---
title: Displaying Inbox
description: This tutorial explains how to fetch and display an Inbox in your Android application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Tutorial
- Inbox UI
- Content Cards
- Android
---

# Displaying Inbox

This tutorial explains how to fetch and display an Inbox in your Android application.

## Pre-requisites

[Integrate and register AEPMessaging extension](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer/#implement-extension-in-mobile-app) in your app.

## Overview

The Inbox is a pre-built UI component that displays content cards in a unified container. Unlike individual content cards, the Inbox automatically manages loading states, error handling, empty states, and card layout based on server-side configuration from [Adobe Journey Optimizer](https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html).

## Fetch Inbox settings and Content Cards

To fetch the inbox settings and content cards for the surfaces configured in [Adobe Journey Optimizer](https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html) campaigns, call the [updatePropositionsForSurfaces](https://developer.adobe.com/client-sdks/edge/adobe-journey-optimizer/code-based/api-reference/#updatepropositionsforsurfaces) API. It's recommended to batch requests for multiple surfaces in a single API call when possible. The returned inbox settings and content cards are cached in-memory by the Messaging extension and persist through the application's lifecycle.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val surfaces = mutableListOf<Surface>()
surfaces.add(Surface("inbox"))
Messaging.updatePropositionsForSurfaces(surfaces)
```

<InlineAlert variant="info" slots="text"/>

This API call fetches the inbox and its content from the server and caches it locally. You should call this early in your app lifecycle (e.g., in your Application class or when the user logs in) to ensure content is available when the inbox is displayed.

## Create MessagingInboxProvider

To display an Inbox, first create a `MessagingInboxProvider` with your configured surface. This provider is responsible for fetching inbox content and managing the inbox state through reactive updates.

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import com.adobe.marketing.mobile.messaging.MessagingInboxProvider
import com.adobe.marketing.mobile.messaging.Surface

val surface = Surface("inbox")
val inboxProvider = MessagingInboxProvider(surface)
```

The `MessagingInboxProvider` provides the following APIs:
- `getInboxUI()` - Returns a [Flow](https://developer.android.com/kotlin/flow) of `InboxUIState` representing the current state of the inbox.
- `refresh()` - Manually refreshes the inbox content by fetching new propositions.

<InlineAlert variant="info" slots="text"/>

The Inbox automatically handles layout (vertical/horizontal), styling, and unread indicators based on server-side configuration from Adobe Journey Optimizer campaigns.

## Retrieve Inbox State

To retrieve the inbox state, call `getInboxUI()` on the provider. This returns a Flow of `InboxUIState` objects that represent different states of the inbox:

- `InboxUIState.Loading` - Content is being fetched
- `InboxUIState.Success` - Content was successfully loaded
- `InboxUIState.Error` - An error occurred while fetching content

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.adobe.marketing.mobile.aepcomposeui.state.InboxUIState
import com.adobe.marketing.mobile.messaging.MessagingInboxProvider
import com.adobe.marketing.mobile.messaging.Surface
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class InboxViewModel : ViewModel() {
    private val inboxProvider = MessagingInboxProvider(Surface("inbox"))

    // Convert Flow to StateFlow for easier consumption in Compose
    val inboxUIState: StateFlow<InboxUIState> = inboxProvider.getInboxUI()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000),
            initialValue = InboxUIState.Loading
        )

    // Function to manually refresh the inbox
    fun refresh() {
        viewModelScope.launch {
            inboxProvider.refresh()
        }
    }
}
```

<InlineAlert variant="info" slots="text"/>

Only content cards for which the user has qualified are returned. Client-side rules are defined in the Adobe Journey Optimizer campaign.

## Display Inbox in Compose UI

The Inbox user interface is implemented using Jetpack Compose. To display the inbox, use the `AepInbox` composable with the `InboxUIState` from your ViewModel:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.adobe.marketing.mobile.aepcomposeui.components.AepInbox
import com.adobe.marketing.mobile.aepcomposeui.style.InboxUIStyle
import com.adobe.marketing.mobile.messaging.InboxEventObserver

@Composable
fun InboxScreen(viewModel: InboxViewModel = viewModel()) {
    // Collect the inbox state from ViewModel
    val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()

    // Create an observer to handle inbox and item events
    val observer = remember { InboxEventObserver() }

    // Display the inbox with default styling
    AepInbox(
        uiState = inboxUIState,
        inboxStyle = InboxUIStyle.Builder().build(),
        observer = observer
    )
}
```

## Display Inbox in View-based UI

To display an Inbox in a View-based (non-Compose) application, use `ComposeView` to embed the Compose UI within your Activity or Fragment:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.adobe.marketing.mobile.aepcomposeui.components.AepInbox
import com.adobe.marketing.mobile.aepcomposeui.style.InboxUIStyle
import com.adobe.marketing.mobile.messaging.InboxEventObserver

class InboxActivity : AppCompatActivity() {

    private val viewModel: InboxViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create ComposeView programmatically or inflate from XML
        val composeView = ComposeView(this).apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                val inboxUIState = viewModel.inboxUIState.collectAsStateWithLifecycle().value
                val observer = remember { InboxEventObserver() }

                AepInbox(
                    uiState = inboxUIState,
                    inboxStyle = InboxUIStyle.Builder().build(),
                    observer = observer
                )
            }
        }

        setContentView(composeView)
    }
}
```

## Refreshing Inbox Data

Inbox provides ways to refresh content cards:

### Programmatic Refresh

You can programmatically refresh the Inbox using the `refresh()` method on the provider:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// In your ViewModel
fun refresh() {
    // Fetch latest content from server
    Messaging.updatePropositionsForSurfaces(listOf(surface))
    // Update the inbox UI with new content
    viewModelScope.launch {
        inboxProvider.refresh()
    }
}

// Call from your UI
Button(onClick = { viewModel.refresh() }) {
    Text("Refresh Inbox")
}
```

This is useful for:
- Refreshing on button taps
- Auto-refreshing at intervals
- Refreshing after specific app events

### Automatic Refresh on Initial Load

The `getInboxUI()` method automatically calls `refresh()` when first collected, so you don't need to manually trigger the initial load. The flow will emit:
1. `InboxUIState.Loading` - Immediately upon collection
2. `InboxUIState.Success` or `InboxUIState.Error` - After the fetch completes

## Best Practices

1. **Pre-fetch Content**: As described in [Fetch Inbox settings and Content Cards](#fetch-inbox-settings-and-content-cards), call `updatePropositionsForSurfaces` early in your app lifecycle (e.g., Application class, splash screen, or after user login) to ensure content is cached and ready when the inbox is displayed.

2. **Use ViewModel**: Always manage the `MessagingInboxProvider` in a ViewModel to properly handle lifecycle and configuration changes. Use `SharingStarted.WhileSubscribed` when converting the Flow to StateFlow to properly handle configuration changes:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxUIState: StateFlow<InboxUIState> = inboxProvider.getInboxUI()
    .stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = InboxUIState.Loading
    )
```

3. **Wrap in Material Theme**: When displaying the inbox, wrap it in your app's Material Theme to ensure proper styling of UI components:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
AppTheme {
    AepInbox(
        uiState = inboxUIState,
        inboxStyle = InboxUIStyle.Builder().build(),
        observer = null
    )
}
```

4. **Use Lifecycle-aware Collection**: Use `collectAsStateWithLifecycle()` instead of `collectAsState()` to automatically stop collecting when the UI is not visible, improving app performance and battery life:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
val inboxUIState by viewModel.inboxUIState.collectAsStateWithLifecycle()
```

5. **Surface Naming**: Use descriptive surface paths that match your Adobe Journey Optimizer campaign configuration. Ensure the same surface string is used consistently between `updatePropositionsForSurfaces` and `MessagingInboxProvider`:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Use the same surface path in both places
val surface = Surface("inbox")
Messaging.updatePropositionsForSurfaces(listOf(surface))
val inboxProvider = MessagingInboxProvider(surface)
```

6. **Full Refresh Pattern**: When implementing a manual refresh (e.g., pull-to-refresh or refresh button), call both `updatePropositionsForSurfaces` to fetch fresh content from the server and then `refresh()` to update the UI:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
fun onRefreshClicked() {
    // Fetch latest content from server
    Messaging.updatePropositionsForSurfaces(listOf(surface))
    // Update the inbox UI with new content
    viewModelScope.launch {
        inboxProvider.refresh()
    }
}
```

7. **Reuse Provider**: Keep the `MessagingInboxProvider` instance alive as long as the Inbox view is visible. The provider maintains state and efficiently updates when content changes.

8. **Handle Multiple Surfaces**: If your app has multiple Inboxes (e.g., notifications, promotions), create separate providers with different surfaces:

<CodeBlock slots="heading, code" repeat="1" languages="Kotlin" />

#### Kotlin

```kotlin
// Notifications inbox
val notificationsProvider = MessagingInboxProvider(Surface("notifications"))

// Promotions inbox  
val promotionsProvider = MessagingInboxProvider(Surface("promotions"))
```

