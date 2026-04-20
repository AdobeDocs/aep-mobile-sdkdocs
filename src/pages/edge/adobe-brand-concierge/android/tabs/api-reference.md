---
noIndex: true
---

<Variant platform="kotlin-compose" api="managed" repeat="5"/>

**Syntax**

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

* _viewModel_ *(required)* - A `ConciergeChatViewModel` instance. Obtain via `viewModel<ConciergeChatViewModel>()`.
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _modifier_ - Optional `Modifier` to apply to the composable.
* _handleLink_ - Optional `LinkHandler` callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* _content_ *(required)* - A composable lambda that receives a `showChat` function. Call `showChat()` from your trigger UI to open the chat.

**Example**

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

<Variant platform="kotlin-xml" api="managed" repeat="5"/>

**Syntax**

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

* _lifecycleOwner_ *(required)* - The `LifecycleOwner` (typically your `Activity` or `Fragment`).
* _viewModelStoreOwner_ *(required)* - The `ViewModelStoreOwner` (typically your `Activity` or `Fragment`).
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _theme_ - Optional `ConciergeThemeData` to apply to the chat UI.
* _handleLink_ - Optional callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* _triggerView_ *(required)* - The `View` that launches the chat when clicked.

**Example**

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

<Variant platform="kotlin-compose" api="custom" repeat="5"/>

**Syntax**

```kotlin
@Composable
fun ConciergeChat(
    viewModel: ConciergeChatViewModel,
    onClose: () -> Unit,
    modifier: Modifier = Modifier,
    handleLink: LinkHandler? = null
)
```

* _viewModel_ *(required)* - A `ConciergeChatViewModel` instance. Obtain via `viewModel<ConciergeChatViewModel>()`.
* _onClose_ *(required)* - Callback invoked when the user dismisses the chat (back press, close button, or gesture).
* _modifier_ - Optional `Modifier` to apply to the composable.
* _handleLink_ - Optional `LinkHandler` callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.

**Example**

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

<Variant platform="kotlin-xml" api="custom" repeat="5"/>

**Syntax**

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

* _lifecycleOwner_ *(required)* - The `LifecycleOwner` (typically your `Activity` or `Fragment`).
* _viewModelStoreOwner_ *(required)* - The `ViewModelStoreOwner` (typically your `Activity` or `Fragment`).
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _theme_ - Optional `ConciergeThemeData` to apply to the chat UI.
* _handleLink_ - Optional callback invoked when a link is tapped in the chat. Return `true` to claim the URL; return `false` to let the SDK handle it with its default behavior.
* _onClose_ *(required)* - Callback invoked when the user dismisses the chat.

**Example**

```kotlin
val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)

chatView.bind(
    lifecycleOwner = this,
    viewModelStoreOwner = this,
    surfaces = listOf("web://example.com/your-surface.html"),
    onClose = { finish() }
)
```

<Variant platform="kotlin" api="theme-loader-load" repeat="5"/>

**Syntax**

```kotlin
@JvmStatic fun load(context: Context, filename: String): ConciergeThemeData?
```

* _context_ *(required)* - An Android `Context` used to access the `assets` directory.
* _filename_ *(required)* - The filename of the JSON theme file (including the `.json` extension).

**Example**

```kotlin
val theme = ConciergeThemeLoader.load(context, "my-theme.json")
    ?: ConciergeThemeLoader.default()
```

<Variant platform="kotlin" api="theme-loader-default" repeat="4"/>

**Syntax**

```kotlin
@JvmStatic fun default(): ConciergeThemeData
```

**Example**

```kotlin
val theme = ConciergeThemeLoader.default()
```
