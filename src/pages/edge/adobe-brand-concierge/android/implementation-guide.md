---
title: Brand Concierge implementation guide (Android)
description: Integrate and customize the Brand Concierge extension in your Android app.
keywords:
- Brand Concierge
- Android
- Implementation
---

# Brand Concierge Implementation Guide (Android)

The Brand Concierge extension embeds a conversational chat UI into your host app. It uses AEP SDK shared state from Mobile Core, Edge, and Edge Identity to configure and run a session.

The Brand Concierge UI has two integration approaches:

* **Managed Integration**: Provides a drop-in entry point to the chat interface and lets the Brand Concierge extension automatically manage it.
* **Custom Integration**: Embeds and manages the chat UI directly into your app's view hierarchy for dedicated chat screens or custom layouts.

Both approaches are available for Compose and XML/Views-based apps.

<HorizontalLine />

## Prerequisites

### Required SDK modules

Your app needs the following Experience Platform SDKs to be available and registered:

* [Mobile Core](https://github.com/adobe/aepsdk-core-android)
* [Edge Identity](https://github.com/adobe/aepsdk-edgeidentity-android)
* [Brand Concierge](https://github.com/adobe/aepsdk-concierge-android)

### Android version

* Minimum Android API level 24 (Android 7.0) or higher

### Permissions for speech to text (optional)

Speech to text uses Android Speech Recognition APIs and microphone APIs for voice input functionality. Add this permission to your app `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

The SDK handles permission requests internally when users interact with the microphone button.

<HorizontalLine />

## Installation

Add the dependencies to your app module's `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.adobe.marketing.mobile:concierge:3.+")
    implementation("com.adobe.marketing.mobile:core:3.5.0")
    implementation("com.adobe.marketing.mobile:edgeidentity:3.0.0")
}
```

Then sync your project with the Gradle files.

<HorizontalLine />

## Configuration

### Step 1: Register the Brand Concierge extension

Import and register the extensions in your `Application` class `onCreate()`:

```kotlin
import com.adobe.marketing.mobile.MobileCore
import com.adobe.marketing.mobile.concierge.Concierge
import com.adobe.marketing.mobile.edge.identity.Identity as EdgeIdentity
import android.app.Application

class MainApp : Application() {
    override fun onCreate() {
        super.onCreate()
        MobileCore.setApplication(this)
        MobileCore.initialize(this, "YOUR_APP_ID")
    }
}
```

Replace `YOUR_APP_ID` with your mobile property App ID from Adobe Data Collection. For full setup instructions see the [Adobe Experience Platform Mobile SDK getting started guide](/home/getting-started/index.md).

### Step 2: Validate the Brand Concierge configuration keys exist

If you set the Adobe Experience Platform SDK log level to trace:

```kotlin
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

you can then inspect the app logs to confirm that extension shared states are being set with the expected values.

Brand Concierge expects the following keys to be present in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain used by Brand Concierge requests)
* **`concierge.configId`**: String (datastream ID)
* **`concierge.region`**: String, optional (region identifier, e.g. `va6`, inserted into the Brand Concierge request path; omit to use the default unqualified endpoint)

The full Edge Identity `identityMap` (including the ECID) is read from the Edge Identity shared state and forwarded to Brand Concierge requests.

Another option for validation is to use Adobe Assurance. Refer to the [Mobile SDK validation guide](../../../home/getting-started/validate.md) for more information.

<HorizontalLine />

## Identities

Brand Concierge forwards the full Edge Identity `identityMap` on every chat and feedback request. The ECID is always included automatically. To send additional identities (for example, a hashed email, `CRMID`, or a custom namespace), set them using the Identity for Edge Network extension's [`updateIdentities`](/edge/identity-for-edge-network/api-reference.md#updateidentities) API. These identities are forwarded verbatim, so lowercasing and hashing are the app's responsibility.

Namespace priority and identity graph rules are configured server-side in Adobe Experience Platform; the SDK does not interpret or relabel namespaces.

<HorizontalLine />

## Authentication

If your backend requires proof of the user's identity, register a `ConciergeAuthTokenProvider` to supply an app-minted authentication token. Brand Concierge attaches it to every chat and feedback request until the provider is cleared.

```kotlin
import com.adobe.marketing.mobile.concierge.Concierge
import com.adobe.marketing.mobile.concierge.ConciergeAuthTokenProvider

Concierge.setAuthTokenProvider(ConciergeAuthTokenProvider {
    // Return the current token, or null to send the turn without one
    myAuthTokenCache.getCurrentToken()
})
```

Register the provider once, typically alongside extension registration in your `Application.onCreate()`. Pass `null` to `setAuthTokenProvider` to clear a previously registered provider.

* `provideToken()` is called once per turn (chat and feedback) on a background thread — the token is never cached, so refreshed or rotated tokens are picked up on the next turn. It may block briefly to refresh the token; the SDK bounds the wait (3 seconds by default) and sends the turn without a token if `provideToken()` doesn't return in time.
* Returning `null` or a blank value, or throwing, sends the turn without a token rather than failing it — the token is never merged into the identity payload or sent as a request header.
* To use a different wait budget than the 3-second default (for example if your token mint is consistently slower or faster), pass `timeoutMillis` to `setAuthTokenProvider`:

```kotlin
Concierge.setAuthTokenProvider(
    ConciergeAuthTokenProvider { myAuthTokenCache.getCurrentToken() },
    timeoutMillis = 5000L
)
```

<HorizontalLine />

## Data handoff

Use `Concierge.sendDataHandoff(...)` when your app needs to hand the SDK data that did not originate in the chat UI, for example, the result of a native checkout flow that completed outside of chat. The SDK forwards the data to the Brand Concierge agent pipeline and renders its response through the active chat transcript without requiring the user to type or say a chat message.

<InlineAlert variant="info" slots="text"/>

**Prerequisite**: Keep a configured `ConciergeChat` or `ConciergeChatView` rendered with a non-empty `surfaces` list while calling this API. The active chat session provides both the routing surfaces and the transcript that receives the service response. A handoff made without an active chat session fails with `NO_ACTIVE_SESSION`.

```kotlin
import com.adobe.marketing.mobile.concierge.Concierge

Concierge.sendDataHandoff(
    routingHint = "successful-checkout",
    xdmFields = mapOf(
        "commerce" to mapOf(
            "order" to mapOf(
                "purchaseID" to orderId,
                "priceTotal" to 129.99,
                "currencyCode" to "USD"
            )
        )
    ),
    localMessage = "Your order is confirmed!"
) { accepted, rejectReason ->
    // accepted == true  -> Brand Concierge completed and rendered the response.
    // accepted == false -> validation or delivery failed; inspect rejectReason before retrying.
}
```

### `Concierge.sendDataHandoff(routingHint, xdmFields, localMessage, completion)`

* **`routingHint`**: A string consumed only by Brand Concierge's current phrase-based router (for example, `"successful-checkout"`). The end user never sees it, and it is not conversational content. Defaults to an empty string; pass an empty or blank string when the XDM fields alone determine routing, and the SDK forwards it as an empty service query. Because it is the first parameter, `@JvmOverloads` generates no Java overload that omits it. Java callers pass `""` explicitly, and Kotlin callers use named arguments.
* **`xdmFields`** *(required)*: Arbitrary XDM-shaped data merged into the root of the outbound XDM object alongside the SDK-owned identity map. Use nested Kotlin maps and lists, for example `mapOf("commerce" to mapOf("order" to mapOf("purchaseID" to "123")))`. The map must be non-empty, every key must be a `String`, and values must be JSON-safe: `String`, `Boolean`, finite `Int`, `Long`, `Float`, or `Double`, or maps and lists containing those values. Do not use `identityMap` as a top-level key because the SDK owns and populates it.
* **`localMessage`**: Optional text for a local, non-networked chat message distinct from the data forwarded to Brand Concierge. The SDK renders it immediately before an accepted handoff starts, as an agent-attributed message rather than a user message.
* **`completion`**: Optional `ConciergeDataHandoffCallback`, called exactly once on a background thread. `accepted` is `true` only after Brand Concierge completes a response stream with renderable content. When `accepted` is `false`, `rejectReason` is a typed `ConciergeDataHandoffRejectReason`:

| Reject reason | Meaning |
| --- | --- |
| `MISSING_EVENT_DATA` | No payload reached the extension. This indicates an internal wiring issue and is not normally caller-triggered. |
| `INVALID_ROUTING_HINT_TYPE` | `routingHint` was not a string in the underlying event payload. A missing or blank `routingHint` is accepted, not rejected. |
| `MISSING_XDM_FIELDS` | `xdmFields` was missing from the underlying event payload. |
| `INVALID_XDM_FIELDS_TYPE` | `xdmFields` was not a map in the underlying event payload. |
| `EMPTY_XDM_FIELDS` | `xdmFields` was empty. |
| `INVALID_XDM_FIELD_KEY` | `xdmFields` contained a key that was not a string. |
| `RESERVED_KEY_COLLISION` | `xdmFields` used an SDK-reserved top-level key such as `identityMap`. |
| `INVALID_XDM_FIELD_VALUE` | `xdmFields` contained a value that cannot be serialized as JSON. |
| `NO_ACTIVE_SESSION` | No rendered Concierge chat session was available to receive the handoff. |
| `CHAT_IN_PROGRESS` | A chat turn or another handoff is active or waiting. Retry after it completes. |
| `DELIVERY_FAILED` | Brand Concierge returned an error or the service request could not complete. |
| `EMPTY_RESPONSE` | Brand Concierge completed without any text, cards, or CTAs to render. |
| `DELIVERY_TIMEOUT` | Brand Concierge did not complete within the handoff delivery timeout. |
| `NO_RESPONSE` | The extension did not respond, for example because the request timed out. |

Chat messages use a finite FIFO queue. Data handoffs never join that queue: if a chat message or another handoff is active or waiting, the SDK immediately reports `CHAT_IN_PROGRESS` and does not render `localMessage` or call the service. Retry the handoff after the active request completes. After an accepted handoff starts, delivery failures, empty responses, and timeouts do not add an error message to the transcript. An already-rendered `localMessage` remains visible, and the host app owns any failure UI based on the completion result.

<HorizontalLine />

## Integration

### Managed Integration

Use this when you want to provide a drop-in entry point to the chat interface and let the Brand Concierge extension automatically manage it.

This mode:

* Shows the configured trigger when the Brand Concierge extension is ready (ECID and Concierge configuration available)
* Opens chat as a full-screen dialog when the trigger is invoked
* Handles dismissal (back press, close button, gestures) automatically

#### Jetpack Compose

The `ConciergeChat` composable can be configured with a UI element (button, floating action button, or any custom element) of your choice to act as a trigger to launch the chat interface. Pass the list of surface URLs via **`surfaces`**.

```kotlin
@Composable
fun MyScreen() {
    val viewModel = viewModel<ConciergeChatViewModel>()
    val surfaces = listOf("web://example.com/your-surface.html")
    
    // Your app content
    // ... other views ...
    
    ConciergeChat(
        viewModel = viewModel,
        surfaces = surfaces
    ) { showChat ->
        // Your trigger button/view that launches ConciergeChat
        MyTriggerButton(onClick = { showChat() }) 
    }
}
```

#### XML/Views

For non-Compose apps, the SDK provides `ConciergeChatView` that wraps the Compose chat UI and can be included in XML layouts.

> **Note:** The activity hosting `ConciergeChatView` must have `android:windowSoftInputMode="adjustResize"` added in the app's `AndroidManifest.xml` to ensure the chat input field remains visible when the keyboard is shown:
>
> ```xml
> <activity
>     android:name=".YourActivity"
>     android:windowSoftInputMode="adjustResize" />
> ```

**Step 1: Add the view to your XML layout**

```xml
<com.adobe.marketing.mobile.concierge.ui.chat.ConciergeChatView
    android:id="@+id/concierge_chat"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

**Step 2: Bind with a trigger view in your Activity/Fragment**

```kotlin
class XmlActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Load optional theme
        val theme = ConciergeThemeLoader.load(this, "myTheme.json")
        
        // Create a trigger button of your choice
        val triggerButton = Button(this).apply {
            text = "Start Chat"
            textSize = 18f
            setPadding(32, 16, 32, 16)
        }
        
        // Obtain the ConciergeChatView and bind the triggerButton
        val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)
        val surfaces = listOf("web://example.com/your-surface.html")
        chatView.bind(
            lifecycleOwner = this,
            viewModelStoreOwner = this,
            surfaces = surfaces,
            theme = theme,  // Optional: apply custom theme
            triggerView = triggerButton
        )
    }
}
```

<HorizontalLine />

### Custom Integration

Use this when you want to embed the chat interface directly into your app's view hierarchy for more flexibility. This is useful for dedicated chat screens or custom layouts.

In this mode, you should:

* Ensure that the necessary components (ECID, Configuration) are ready before making this visible. You can check readiness by observing `ConciergeStateRepository.instance.state`.
* Manage the logic to control what happens when the chat interface is dismissed when notified via `onClose`.

#### Jetpack Compose

Set surfaces via **`surfaces`** and ensure the extension is ready (configuration, ECID, and surfaces) before showing the chat.

```kotlin
@Composable
fun YourChatScreen() {
    val viewModel = viewModel<ConciergeChatViewModel>()
    val conciergeState by ConciergeStateRepository.instance.state.collectAsStateWithLifecycle()
    val surfaces = listOf("web://example.com/your-surface.html")
    // Set surfaces so they are available for the chat session
    ConciergeStateRepository.instance.setSessionSurfaces(surfaces)
    val ready = conciergeState.configurationReady &&
        conciergeState.experienceCloudId != null &&
        conciergeState.surfaces.isNotEmpty()
    
    if (ready) {
        ConciergeChat(
            viewModel = viewModel,
            onClose = {
                // your logic on close or back press
            }
        )
    } else {
        // Show your intermediate loading state or wait for SDK to be ready
    }
}
```

#### XML/Views

> **Note:** The activity hosting `ConciergeChatView` must have `android:windowSoftInputMode="adjustResize"` added in the app's `AndroidManifest.xml` to ensure the chat input field remains visible when the keyboard is shown:
>
> ```xml
> <activity
>     android:name=".YourActivity"
>     android:windowSoftInputMode="adjustResize" />
> ```

**Step 1: Add the view to your XML layout**

```xml
<com.adobe.marketing.mobile.concierge.ui.chat.ConciergeChatView
    android:id="@+id/concierge_chat"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

**Step 2: Bind in your Activity/Fragment**

```kotlin
class XmlActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Load optional theme
        val theme = ConciergeThemeLoader.load(this, "myTheme.json")
        
        // Obtain the chat view and bind
        val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)
        val surfaces = listOf("web://example.com/your-surface.html")
        chatView.bind(
            lifecycleOwner = this,
            viewModelStoreOwner = this,
            surfaces = surfaces,
            theme = theme,  // Optional: apply custom theme
            onClose = { finish() }
        )
    }
}
```

### Theme Customization

The Brand Concierge chat interface can be customized by loading the theme file from the `assets` directory of your app using `ConciergeThemeLoader`.

```kotlin
@Composable
fun MyScreen() {
    val context = LocalContext.current

    val theme = remember {
        ConciergeThemeLoader.load(context, "myTheme.json")
            ?: ConciergeThemeLoader.default()
    }
    
    ConciergeTheme(theme = theme) {
        ConciergeChat(/* ... */)
    }
}
```

More information regarding theme customization can be found in the [Style guide (Android)](/edge/adobe-brand-concierge/android/style-guide.md).

<HorizontalLine />

### Deep Links and App Links

#### Required manifest entries

**1. Register your app as an App Link handler (all API levels)**

Add an `<intent-filter>` with `android:autoVerify="true"` to the activity in your `AndroidManifest.xml` that should handle your domain's URLs. This triggers Android's domain verification against your domain's `assetlinks.json` file, which is what makes your app the verified handler. Without this, the Concierge extension's App Link check will always fall back to the in-app WebView.

```xml
<activity android:name=".YourActivity" ...>
    <intent-filter android:autoVerify="true" android:exported="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" android:host="yourdomain.com" />
    </intent-filter>
</activity>
```

**2. Package visibility for Android 11 or higher**

Add the following `<queries>` block to your `AndroidManifest.xml`. Without it, the Concierge extension cannot use `PackageManager.resolveActivity()` to detect the App Link handler on API 30 or higher, and App Links will silently fall back to the in-app WebView on that API level.

```xml
<!-- Required for PackageManager.resolveActivity() on Android 11+ to detect
     which app handles VIEW intents for http/https URLs. -->
<queries>
    <intent>
        <action android:name="android.intent.action.VIEW" />
        <data android:scheme="https" />
    </intent>
    <intent>
        <action android:name="android.intent.action.VIEW" />
        <data android:scheme="http" />
    </intent>
</queries>
```

#### Chat message link handling

The Concierge extension automatically opens links when your app is the verified handler for the URL's domain (e.g., listed in the domain's assetlinks.json). If your app is not the handler, the link opens in the in-app WebView overlay.

**Default link handling flow:** host `handleLink` callback (if provided) → App Link check → WebView overlay.

To customize this behavior, provide a `handleLink` callback. Return `true` if your app handled the link; return `false` to have the Brand Concierge extension handle the link with its default behavior (trying to open it as an App Link first, then using the WebView overlay).

**Compose (ConciergeChat):**

```kotlin
val context = LocalContext.current
ConciergeChat(
    viewModel = viewModel,
    onClose = { finish() },
    handleLink = { url ->
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            context.startActivity(intent)
            true  // Handled
        } catch (e: ActivityNotFoundException) {
            false  // Fall back to WebView overlay
        }
    }
)
```

**XML (ConciergeChatView):**

```kotlin
chatView.bind(
    lifecycleOwner = this,
    viewModelStoreOwner = this,
    surfaces = surfaces,
    theme = theme,
    handleLink = { url ->
        try {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            startActivity(intent)
            true
        } catch (e: ActivityNotFoundException) {
            false
        }
    },
    onClose = { finish() }
)
```

When `handleLink` returns `true`, the SDK does not open the WebView overlay. When it returns `false` or is null, the SDK uses the default flow (trying to open it as an App Link first, then using the WebView overlay).

To close the chat when a deeplink is clicked, call `viewModel.closeConcierge()` inside your `handleLink` callback before returning `true`:

```kotlin
ConciergeChat(
    viewModel = viewModel,
    handleLink = { url ->
        if (url.startsWith("myapp://")) {
            viewModel.closeConcierge()
            // navigate to the deeplink destination
            true
        } else {
            false
        }
    }
) { showChat -> ... }
```

#### In-app WebView overlay link handling

Links clicked inside the in-app WebView overlay (for example, links on a product page) follow their own routing rules, independent of the `handleLink` callback:

* **http/https URLs**: If your app is the verified App Link handler for the domain, the URL is forwarded to your app. Otherwise it loads in the WebView.
* **Non-web schemes** (for example, `mailto:`, `tel:`, `sms:`, `myapp://`): Forwarded to the system via `Intent.ACTION_VIEW`.
* **Dangerous schemes** (`javascript:`, `file:`, `content:`, `intent:`, `data:`): Blocked.

No additional configuration is required for this behavior. App Link forwarding within the WebView uses the same domain verification as chat message link handling.

## Next steps

* [API reference (Android)](/edge/adobe-brand-concierge/android/api-reference.md) — Full parameter documentation for all public APIs.
* [Style guide (Android)](/edge/adobe-brand-concierge/android/style-guide.md) — Theme JSON reference and implementation status for Android.
