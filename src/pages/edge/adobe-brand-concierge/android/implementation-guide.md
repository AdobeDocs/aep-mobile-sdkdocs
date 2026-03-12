---
title: Brand Concierge implementation guide (Android)
description: Integrate and customize the Brand Concierge extension in your Android app.
keywords:
- Brand Concierge
- Android
- Implementation
---

# Brand Concierge Implementation Guide (Android)

The Brand Concierge UI has two integration approaches:

* **Managed Integration**: Provides a drop-in entry point to the chat interface and lets the Brand Concierge extension automatically manage it.
* **Custom Integration**: Embeds and manages the chat UI directly into your app's view hierarchy for dedicated chat screens or custom layouts.

Both approaches are available for Compose and XML/Views-based apps.

---

## Prerequisites

### Required SDK modules

Your app needs the following Experience Platform SDKs to be available and registered:

* [Mobile Core](https://github.com/adobe/aepsdk-core-android)
* [Edge](https://github.com/adobe/aepsdk-edge-android)
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

---

## Configuration

### Step 1: Set up the Adobe Experience Platform Mobile SDK

Follow the [Adobe Experience Platform Mobile SDK getting started guide](/src/pages/home/getting-started/) to set up the base SDK integration used by Brand Concierge.

The required extensions are:

* AEPCore
* AEPEdge
* AEPEdgeIdentity
* AEPBrandConcierge

### Step 2: Validate the Brand Concierge configuration keys exist

If you set the Adobe Experience Platform SDK log level to trace:

```kotlin
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

you can then inspect the app logs to confirm that extension shared states are being set with the expected values.

Brand Concierge expects the following keys to be present in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain used by Brand Concierge requests)
* **`concierge.configId`**: String (datastream ID)

The ECID is read from the Edge Identity shared state.

Another option for validation is to use Adobe Assurance. Refer to the [Mobile SDK validation guide](/src/pages/home/getting-started/validate/) for more information.

---

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

---

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

### Deep Links and App Links

#### Required manifest entries

**1. Register your app as an App Link handler**

Add an `<intent-filter>` with `android:autoVerify="true"` to the activity in your `AndroidManifest.xml` that should handle your domain's URLs. This triggers Android's domain verification against your domain's `assetlinks.json` file. Without this, the Concierge extension's App Link check will always fall back to the in-app WebView.

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

**2. Package visibility (Android 11 and higher)**

Add the following `<queries>` block to your `AndroidManifest.xml`. Without it, the Concierge extension cannot use `PackageManager.resolveActivity()` to detect the App Link handler on API 30 or higher, and App Links will silently fall back to the in-app WebView.

```xml
<!-- Required for PackageManager.resolveActivity() on Android 11+ -->
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

#### Link handling

The Concierge extension automatically opens links when your app is the verified handler for the URL's domain. If your app is not the handler, the link opens in an in-app WebView overlay.

**Default link handling flow:** `handleLink` callback (if provided) → App Link check → WebView overlay.

To customize this behavior, provide a `handleLink` callback. Return `true` if your app handled the link; return `false` to fall back to the default behavior (App Link check, then WebView overlay).

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

---

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

More information regarding theme customization can be found in the [Style guide (Android)](/edge/adobe-brand-concierge/android/style-guide/).

## Next steps

* [Style guide (Android)](/edge/adobe-brand-concierge/android/style-guide/) — Theme JSON reference and implementation status for Android.
