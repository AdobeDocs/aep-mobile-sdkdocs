---
title: Brand Concierge API reference (Android)
description: An API reference for the Brand Concierge Android extension.
keywords:
- Brand Concierge
- Android
- API reference
---

# Brand Concierge API reference (Android)

## Managed Integration

The SDK manages the chat lifecycle. Provide a trigger UI element — the SDK shows it when the extension is ready and opens the chat as a full-screen dialog when the trigger is invoked.

### Jetpack Compose

* **_viewModel_** - A `ConciergeChatViewModel` instance. Obtain via `viewModel<ConciergeChatViewModel>()`.
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _modifier_ - Optional `Modifier` to apply to the composable.
* _handleLink_ - Optional `LinkHandler` callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* **_content_** - A composable lambda that receives a `showChat` function. Call `showChat()` from your trigger UI to open the chat.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
@Composable
fun ConciergeChat(
    modifier: Modifier = Modifier,
    viewModel: ConciergeChatViewModel,
    surfaces: List<String>? = null,
    handleLink: LinkHandler? = null,
    content: @Composable (showChat: () -> Unit) -> Unit
)
```

### Example

```kotlin
@Composable
fun MyScreen() {
    val viewModel = viewModel<ConciergeChatViewModel>()

    ConciergeChat(
        viewModel = viewModel,
        surfaces = listOf("web://example.com/your-surface.html")
    ) { showChat ->
        MyTriggerButton(onClick = { showChat() })
    }
}
```

### XML/Views

* **_lifecycleOwner_** - The `LifecycleOwner` (typically your `Activity` or `Fragment`).
* **_viewModelStoreOwner_** - The `ViewModelStoreOwner` (typically your `Activity` or `Fragment`).
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _theme_ - Optional `ConciergeThemeData` to apply to the chat UI.
* _handleLink_ - Optional callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* **_triggerView_** - The `View` that launches the chat when clicked.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
fun bind(
    lifecycleOwner: LifecycleOwner,
    viewModelStoreOwner: ViewModelStoreOwner,
    surfaces: List<String>? = null,
    theme: ConciergeThemeData? = null,
    handleLink: ((String) -> Boolean)? = null,
    triggerView: View
)
```

### Example

```kotlin
val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)
val triggerButton = Button(this).apply { text = "Chat" }

chatView.bind(
    lifecycleOwner = this,
    viewModelStoreOwner = this,
    surfaces = listOf("web://example.com/your-surface.html"),
    triggerView = triggerButton
)
```

## Custom Integration

Embed the chat interface directly into your screen and manage its lifecycle yourself. Use this for dedicated chat screens or custom layouts where you control when chat appears and handle dismissal.

### Jetpack Compose

* **_viewModel_** - A `ConciergeChatViewModel` instance. Obtain via `viewModel<ConciergeChatViewModel>()`.
* **_onClose_** - Callback invoked when the user dismisses the chat (back press, close button, or gesture).
* _modifier_ - Optional `Modifier` to apply to the composable.
* _handleLink_ - Optional `LinkHandler` callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
@Composable
fun ConciergeChat(
    viewModel: ConciergeChatViewModel,
    onClose: () -> Unit,
    modifier: Modifier = Modifier,
    handleLink: LinkHandler? = null
)
```

### Example

```kotlin
@Composable
fun YourChatScreen() {
    val viewModel = viewModel<ConciergeChatViewModel>()
    val conciergeState by ConciergeStateRepository.instance.state.collectAsStateWithLifecycle()
    val surfaces = listOf("web://example.com/your-surface.html")

    ConciergeStateRepository.instance.setSessionSurfaces(surfaces)

    val ready = conciergeState.configurationReady &&
        conciergeState.experienceCloudId != null &&
        conciergeState.surfaces.isNotEmpty()

    if (ready) {
        ConciergeChat(
            viewModel = viewModel,
            onClose = { /* navigate back */ }
        )
    }
}
```

### XML/Views

* **_lifecycleOwner_** - The `LifecycleOwner` (typically your `Activity` or `Fragment`).
* **_viewModelStoreOwner_** - The `ViewModelStoreOwner` (typically your `Activity` or `Fragment`).
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _theme_ - Optional `ConciergeThemeData` to apply to the chat UI.
* _handleLink_ - Optional callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* **_onClose_** - Callback invoked when the user dismisses the chat.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
fun bind(
    lifecycleOwner: LifecycleOwner,
    viewModelStoreOwner: ViewModelStoreOwner,
    surfaces: List<String>? = null,
    theme: ConciergeThemeData? = null,
    handleLink: ((String) -> Boolean)? = null,
    onClose: () -> Unit
)
```

### Example

```kotlin
val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)

chatView.bind(
    lifecycleOwner = this,
    viewModelStoreOwner = this,
    surfaces = listOf("web://example.com/your-surface.html"),
    onClose = { finish() }
)
```

## ConciergeThemeLoader.load

Loads a `ConciergeThemeData` from a JSON file in the app's `assets` directory. Returns `null` if the file cannot be found or parsed.

### Kotlin

* **_context_** - An Android `Context` used to access the `assets` directory.
* **_filename_** - The filename of the JSON theme file (including the `.json` extension).

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
@JvmStatic fun load(context: Context, filename: String): ConciergeThemeData?
```

### Example

```kotlin
val theme = ConciergeThemeLoader.load(context, "my-theme.json")
    ?: ConciergeThemeLoader.default()
```

## ConciergeThemeLoader.default

Returns the built-in default `ConciergeThemeData`.

### Kotlin

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```kotlin
@JvmStatic fun default(): ConciergeThemeData
```

### Example

```kotlin
val theme = ConciergeThemeLoader.default()
```
