---
title: Brand Concierge implementation guide (Android)
description: Integrate and customize the Brand Concierge extension in your Android app.
keywords:
- Brand Concierge
- Android
- Implementation
---

# Brand Concierge Implementation Guide (Android)

## Overview

The Brand Concierge extension provides an in-app conversational UI (a chat surface) that can be embedded into a host app with minimal UI wiring. The UI is connected to the Adobe Experience Platform by using AEP SDK shared state (Configuration + Edge Identity) to derive the service configuration needed to run a session and enable brand controlled experiences through configuration and theming.

The Brand Concierge UI is presented through two integration approaches:

* **Managed Integration**: Provide a drop-in entry point to the chat interface and let the Brand Concierge extension automatically manage it.
* **Custom Integration**: Embed and manage the chat UI directly into your app's view hierarchy for dedicated chat screens or custom layouts.

Both approaches are available for Compose and XML/Views-based apps.

---

## Prerequisites

### Required SDK modules

Your app needs these AEP SDK's available and registered:

* [Mobile Core](https://github.com/adobe/aepsdk-core-android)
* [Edge](https://github.com/adobe/aepsdk-edge-android)
* [Edge Identity](https://github.com/adobe/aepsdk-edgeidentity-android)
* [Brand Concierge](https://github.com/adobe/aepsdk-concierge-android)

### Android version

* Minimum Android API level 24 (Android 7.0) or higher

### Permissions (for speech input)

Speech to text uses Android Speech Recognition API + microphone API's for voice input functionality. Add this permission to your app `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

The SDK handles permission requests internally when users interact with the microphone button.

---

## Installation

Add the dependency to your app module's `build.gradle.kts` alongside the other AEP SDK extensions:

```kotlin
dependencies {
    implementation("com.adobe.marketing.mobile:concierge:3.0.0")
    implementation("com.adobe.marketing.mobile:core:3.5.0")
    implementation("com.adobe.marketing.mobile:edgeidentity:3.0.0")
}
```

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

If you set the Mobile SDK log level to trace (`MobileCore.setLogLevel(LoggingMode.VERBOSE)`), you can inspect the app logs to confirm that extension shared states are being set with the expected values.

Brand Concierge expects the following keys to be present in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain used by Brand Concierge requests)
* **`concierge.configId`**: String (datastream id)

ECID is read from Edge Identity shared state.

Another option for validation is to use Adobe Assurance. Refer to the [Mobile SDK validation guide](/src/pages/home/getting-started/validate/).

---

## Integration

### Managed Integration

Use this when you want to provide a drop-in entry point to the chat interface and let the Brand Concierge extension automatically manage it.

This mode:

* Shows the configured trigger when the Brand Concierge extension is ready (ECID + concierge configuration available)
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

### Theme Customization

Concierge chat interface can be customized by loading the theme file from `assets` directory of your app by using `ConciergeThemeLoader`.

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

More information regarding theme customization can be found in the [Style guide](./style-guide.md).
