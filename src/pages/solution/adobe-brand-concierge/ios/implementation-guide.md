---
title: Brand Concierge implementation guide (iOS)
description: Integrate and customize the Brand Concierge extension in your iOS app.
keywords:
- Brand Concierge
- iOS
- Implementation
---

# Brand Concierge Implementation Guide (iOS)

## Overview

Brand Concierge provides an in-app conversational UI (chat surface) that can be embedded into a host app with minimal UI wiring. The UI connects to Adobe Experience Platform using AEP SDK shared state (Configuration and Edge Identity) for session configuration and supports brand-controlled experiences through configuration and theming.

The Brand Concierge UI is presented in two steps:

* **Enable UI presentation** by wrapping your SwiftUI root with `Concierge.wrap(...)`
* **Open the chat** by calling `Concierge.show(...)`

Internally, `Concierge.show(...)` dispatches an event in the Adobe Experience Platform Mobile SDK that the Concierge extension handles to build a `ConciergeConfiguration`, then the SwiftUI overlay presents `ChatView`.

---

## Prerequisites

### Required SDK modules

Your app needs these AEP modules available and registered:

* **AEPCore** (MobileCore; Configuration shared state from `configureWith(appId:)`)
* **AEPEdge**
* **AEPEdgeIdentity**
* **AEPBrandConcierge**

### iOS version

* Minimum iOS 15.0+

### Permissions for speech to text (optional)

Speech to text uses iOS Speech and microphone APIs. Add these to your app `Info.plist`:

* **`NSMicrophoneUsageDescription`**
* **`NSSpeechRecognitionUsageDescription`**

---

## Configuration

### Step 1: Set up the Adobe Experience Platform Mobile SDK

Follow the [Adobe Experience Platform Mobile SDK getting started guide](/src/pages/home/getting-started/) to set up the base SDK integration used by Concierge.

The required extensions are:

* AEPCore
* AEPEdge
* AEPEdgeIdentity
* AEPBrandConcierge

### Step 2: Validate the Brand Concierge configuration keys

If you set the Mobile SDK log level to trace (`MobileCore.setLogLevel(.trace)`), you can inspect app logs to confirm extension shared states contain the expected values.

Brand Concierge expects the following keys in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain for Concierge requests)
* **`concierge.configId`**: String (datastream id)
* **`concierge.surfaces`**: Array of String (one or more surface names)

ECID is read from Edge Identity shared state.

You can also use [Adobe Assurance](/src/pages/home/getting-started/validate/) to validate configuration.

---

## Optional styling

### Theme injection (recommended)

The UI reads styling from the SwiftUI environment value `conciergeTheme`. Load a theme JSON and apply it above `Concierge.wrap(...)` so both the floating button and the overlay use it:

```swift
let theme = ConciergeThemeLoader.load(from: "theme-default", in: .main) ?? ConciergeThemeLoader.default()

var body: some View {
    Concierge.wrap(AppRootView(), surfaces: ["my-surface"], hideButton: true)
        .conciergeTheme(theme)
}
```

---

## Basic usage

### Option A — Manual API call (no floating button)

Use this when you want full control over where the entry point lives.

1. Wrap your root content and hide the built-in button:

```swift
Concierge.wrap(AppRootView(), surfaces: ["my-surface"], hideButton: true)
```

2. Trigger chat from your own UI:

```swift
Button("Chat") {
    Concierge.show(surfaces: ["my-surface"], title: "Concierge", subtitle: "Powered by Adobe")
}
```

Optional: provide **speech capture** (default is created internally if not passed) and **text to speech** by passing a `TextSpeaking` implementation (text to speech is off by default unless you supply one).

### Option B — Floating button (built-in)

Use this for a drop-in entry point:

```swift
Concierge.wrap(AppRootView(), surfaces: ["my-surface"]) // hideButton defaults to false
```

This shows a floating button in the bottom trailing corner; tapping it calls `Concierge.show(surfaces:)`.

### Closing the UI

Dismiss the overlay from code with:

```swift
Concierge.hide()
```

---

## UIKit usage

Use this when your app is UIKit-based and you want to present Concierge from a `UIViewController`.

### Present the chat UI

Call `Concierge.present(on:surfaces:title:subtitle:)` from the view controller that should host the chat:

```swift
import AEPBrandConcierge

final class MyViewController: UIViewController {
    @objc private func openChat() {
        Concierge.present(on: self, surfaces: ["my-surface"], title: "Concierge", subtitle: "Powered by Adobe")
    }
}
```

### Dismiss the chat UI

To dismiss the presented UI:

```swift
Concierge.hide()
```

---

## Next steps

* [Style guide](./style-guide.md) — Theme JSON reference and implementation status for iOS.
