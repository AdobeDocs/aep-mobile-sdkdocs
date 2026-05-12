---
title: Brand Concierge implementation guide (iOS)
description: Integrate and customize the Brand Concierge extension in your iOS app.
keywords:
- Brand Concierge
- iOS
- Implementation
---

# Brand Concierge Implementation Guide (iOS)

The Brand Concierge UI is presented in two steps:

* **Enable UI presentation** by wrapping your SwiftUI root with `Concierge.wrap(...)`
* **Open the chat** by calling `Concierge.show(...)`

Internally, `Concierge.show(...)` dispatches an event in the Adobe Experience Platform Mobile SDK that the Concierge extension handles to build a `ConciergeConfiguration`, then the SwiftUI overlay presents `ChatView`.

<HorizontalLine />

## Prerequisites

### Required SDK modules

Your app needs the following Experience Platform SDKs to be available and registered:

* **AEPCore** (MobileCore; Configuration shared state from `configureWith(appId:)`)
* **AEPEdgeIdentity**
* **AEPBrandConcierge**

### iOS version

* Minimum iOS 15.0+

### Permissions for speech to text (optional)

Speech to text uses iOS Speech and microphone APIs. Add these to your app `Info.plist`:

* **`NSMicrophoneUsageDescription`**
* **`NSSpeechRecognitionUsageDescription`**

The SDK handles permission requests internally when the user taps the microphone button; no additional permission-request code is required from the host app.

<HorizontalLine />

## Installation

Add Brand Concierge alongside the other AEP SDK extensions using Swift Package Manager, CocoaPods, or by adding the XCFramework directly.

### Swift Package Manager

To add the package from Xcode, select **File -> Add Package Dependencies…** and enter `https://github.com/adobe/aepsdk-concierge-ios.git`.

To add it via a `Package.swift` file instead, add the package to your dependencies:

```swift
dependencies: [
    .package(url: "https://github.com/adobe/aepsdk-concierge-ios.git", .upToNextMajor(from: "5.0.0")),
    .package(url: "https://github.com/adobe/aepsdk-core-ios.git", .upToNextMajor(from: "5.7.0")),
    .package(url: "https://github.com/adobe/aepsdk-edgeidentity-ios.git", .upToNextMajor(from: "5.0.0"))
]
```

Then add the products to the target's dependencies:

```swift
.product(name: "AEPBrandConcierge", package: "aepsdk-concierge-ios"),
.product(name: "AEPCore", package: "aepsdk-core-ios"),
.product(name: "AEPEdgeIdentity", package: "aepsdk-edgeidentity-ios"),
```

### CocoaPods

Add the following to the app's `Podfile`:

```ruby
pod 'AEPBrandConcierge', '~> 5.0'
pod 'AEPCore', '~> 5.7'
pod 'AEPEdgeIdentity', '~> 5.0'
```

Then run `pod install`.

### Binaries

To add the XCFramework directly, run the following from the repository root:

```bash
make archive
```

This generates `AEPBrandConcierge.xcframework` under the `build` folder. Drag and drop it into your app target in Xcode.

<HorizontalLine />

## Configuration

### Step 1: Register the Brand Concierge extension

Import the required frameworks and register the extensions in `application(_:didFinishLaunchingWithOptions:)` in your `AppDelegate`:

```swift
import AEPBrandConcierge
import AEPCore
import AEPEdgeIdentity
import UIKit

class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions _: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let extensions = [
            Concierge.self,
            Identity.self
        ]

        MobileCore.registerExtensions(extensions) {
            MobileCore.configureWith(appId: "YOUR_APP_ID")
        }

        return true
    }
}
```

Replace `YOUR_APP_ID` with your mobile property App ID from Adobe Data Collection. For full setup instructions see the [Adobe Experience Platform Mobile SDK getting started guide](/src/pages/home/getting-started/).

### Step 2: Validate the Brand Concierge configuration keys

If you set the Adobe Experience Platform SDK log level to trace:

```swift
MobileCore.setLogLevel(.trace)
```

you can then inspect the app logs to confirm that extension shared states are being set with the expected values.

Brand Concierge expects the following keys in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain for Concierge requests)
* **`concierge.configId`**: String (datastream ID)

The ECID is read from the Edge Identity shared state. Surfaces are not a Configuration key; they are supplied per session via the `surfaces:` parameter on `Concierge.wrap(...)`, `Concierge.show(...)`, or `Concierge.present(on:...)`.

Another option for validation is to use Adobe Assurance. Refer to the [Mobile SDK validation guide](../../../home/getting-started/validate.md) for more information.

<HorizontalLine />

## Optional styling

### Theme injection (recommended)

The Brand Concierge chat interface can be customized by loading a theme JSON and applying it above `Concierge.wrap(...)` so both the floating button and the overlay use it. The UI reads styling from the SwiftUI environment value `conciergeTheme`:

```swift
let theme = ConciergeThemeLoader.load(from: "theme-default", in: .main) ?? ConciergeThemeLoader.default()

var body: some View {
    Concierge.wrap(AppRootView(), surfaces: ["my-surface"], hideButton: true)
        .conciergeTheme(theme)
}
```

More information regarding theme customization can be found in the [Style guide (iOS)](/edge/adobe-brand-concierge/ios/style-guide/).

<HorizontalLine />

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

`Concierge.show()` also accepts optional parameters:

* `speechCapturer`: A `SpeechCapturing` implementation for voice input (a default is created internally if not passed).
* `textSpeaker`: A `TextSpeaking` implementation for text-to-speech (off by default unless you supply one).
* `handleLink`: A callback invoked when a link is tapped in the chat. See [Link Handling](#link-handling) for details.

### Option B — Floating button (built-in)

Use this for a drop-in entry point:

```swift
Concierge.wrap(AppRootView(), surfaces: ["my-surface"]) // hideButton defaults to false
```

This shows a floating button in the bottom trailing corner; tapping it calls `Concierge.show(surfaces:)`.

`Concierge.wrap()` also accepts optional parameters:

* `title`: Title shown in the chat header.
* `subtitle`: Subtitle shown under the title.
* `handleLink`: A callback invoked when a link is tapped in the chat. See [Link Handling](#link-handling) for details.

### Closing the UI

Dismiss the overlay from code with:

```swift
Concierge.hide()
```

<HorizontalLine />

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

<HorizontalLine />

## Link Handling

### Universal Links

To have the SDK open http/https URLs natively in your app instead of the in-app WebView, configure [Associated Domains](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_associated-domains) for your app and host an `apple-app-site-association` file on your domain. When the domain is verified, tapping a link for that domain in the chat will navigate within your app instead of the WebView.

Alternatively, use the `handleLink` callback to intercept specific domains and handle them with custom navigation logic without requiring domain verification.

### Default behavior

When a user taps a link in the chat, the SDK routes it through `ConciergeLinkHandler` using the following flow:

1. **Custom scheme URLs** (e.g. `myapp://`, `mailto:`, `tel:`) — opened immediately via the system (deep link).
2. **http/https URLs** — the system is first asked to open the URL as a universal link. If the host app has registered the URL's domain via [Associated Domains](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_associated-domains), the app handles the navigation natively. Otherwise, the URL falls back to the in-app WebView overlay.

**Default link handling flow:** `handleLink` callback (if provided) -> deep link / universal link check -> WebView overlay.

### Custom link handling

All three public APIs accept an optional `handleLink` closure that is called before the SDK's default routing. Return `true` to claim the URL (the SDK takes no further action). Return `false` to let the SDK handle it normally.

**SwiftUI — `Concierge.wrap()`:**

```swift
Concierge.wrap(
    AppRootView(),
    surfaces: ["my-surface"],
    hideButton: true,
    handleLink: { url in
        if url.scheme == "myapp" {
            Concierge.hide()
            // Navigate to in-app destination
            return true
        }
        return false
    }
)
```

**SwiftUI — `Concierge.show()`:**

```swift
Concierge.show(
    surfaces: ["my-surface"],
    title: "Concierge",
    subtitle: "Powered by Adobe",
    handleLink: { url in
        if url.host == "myapp.example.com" {
            Concierge.hide()
            return true
        }
        return false
    }
)
```

**UIKit — `Concierge.present(on:)`:**

```swift
Concierge.present(
    on: self,
    surfaces: ["my-surface"],
    title: "Concierge",
    subtitle: "Powered by Adobe",
    handleLink: { url in
        if url.scheme == "myapp" {
            Concierge.hide()
            // Navigate using UIKit navigation
            return true
        }
        return false
    }
)
```

When `handleLink` returns `true`, the SDK does not open the WebView overlay or perform any further link routing. When it returns `false` or is not provided, the SDK uses the default flow (deep link check -> universal link check -> WebView overlay).

### In-app WebView overlay link handling

Links clicked inside the in-app WebView overlay (for example, links on a page that has already loaded in the overlay) follow their own routing rules, independent of the `handleLink` callback:

* **`http` / `https` / `about` URLs**: Loaded within the WebView.
* **Non-web schemes** (for example, `mailto:`, `tel:`, `sms:`, `myapp://`): The WebView cancels the navigation and forwards the URL to the system via `UIApplication.open`, which routes it to the appropriate handler app (Mail, Phone, Messages, a custom deep-link destination, etc.).

No additional configuration is required for this behavior. Universal-link forwarding for in-chat links (the `handleLink` -> universal link -> WebView fallback described above) applies only to links tapped in chat messages; it is not re-evaluated for links inside an already loaded WebView page.

<HorizontalLine />

## Next steps

* [API reference (iOS)](/edge/adobe-brand-concierge/ios/api-reference/) — Full parameter documentation for all public APIs.
* [Style guide (iOS)](/edge/adobe-brand-concierge/ios/style-guide/) — Theme JSON reference and implementation status for iOS.
