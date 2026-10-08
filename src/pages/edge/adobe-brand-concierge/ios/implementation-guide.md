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

Replace `YOUR_APP_ID` with your mobile property App ID from Adobe Data Collection. For full setup instructions see the [Adobe Experience Platform Mobile SDK getting started guide](/home/getting-started/index.md).

### Step 2: Validate the Brand Concierge configuration keys

If you set the Adobe Experience Platform SDK log level to trace:

```swift
MobileCore.setLogLevel(.trace)
```

you can then inspect the app logs to confirm that extension shared states are being set with the expected values.

Brand Concierge expects the following keys in the Configuration shared state:

* **`concierge.server`**: String (server host or base domain for Concierge requests)
* **`concierge.configId`**: String (datastream ID)
* **`concierge.region`**: String, optional (region segment inserted into the Concierge request path, for example, `va7`; omit to use the default region)

The full Edge Identity `identityMap` (including the ECID) is read from the Edge Identity shared state and forwarded to Brand Concierge requests. Surfaces are not a Configuration key; they are supplied per session via the `surfaces:` parameter on `Concierge.wrap(...)`, `Concierge.show(...)`, or `Concierge.present(on:...)`.

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

More information regarding theme customization can be found in the [Style guide (iOS)](/edge/adobe-brand-concierge/ios/style-guide.md).

<HorizontalLine />

## Identities

Brand Concierge forwards the full Edge Identity `identityMap` on every chat and feedback request. The ECID is always included automatically. To send additional identities (for example, `hashedEmail`, `CRMID`, or a custom namespace), set them using the Identity for Edge Network extension's [`updateIdentities`](/edge/identity-for-edge-network/api-reference.md#updateidentities) API. These identities are forwarded verbatim, so lowercasing and hashing are the app's responsibility.

Namespace priority and identity graph rules are configured server-side in Adobe Experience Platform; the SDK does not interpret or relabel namespaces.

<HorizontalLine />

## Authentication

If your backend requires proof of the user's identity, register a token provider to supply an app-minted authentication token. Brand Concierge attaches it to every chat and feedback request until the provider is cleared.

The provider closure is `async`, so it serves both synchronous and asynchronous integration styles with the same API:

```swift
import AEPBrandConcierge

// Synchronous: you keep the current token in memory.
Concierge.setAuthTokenProvider {
    myAuthTokenCache.currentToken // return the current token, or nil to send the turn without one
}

// Asynchronous: you mint or refresh the token on demand.
Concierge.setAuthTokenProvider {
    await myAuthTokenCache.freshToken()
}

// Raise the timeout if minting the token can take longer than the 3-second default.
Concierge.setAuthTokenProvider(timeout: 8) {
    await myAuthTokenCache.freshToken()
}
```

Register the provider once, typically alongside extension registration during app setup. Pass `nil` to `setAuthTokenProvider(_:)` to clear a previously registered provider.

* The provider is consulted once per turn (chat and feedback). The token is never cached, so refreshed or rotated tokens are picked up on the next turn. The SDK `await`s the closure on a background task, so it never blocks the UI, whether it returns instantly or performs asynchronous work.
* Returning `nil` or a blank value, or not returning within the timeout (`3` seconds by default; adjust with the `timeout:` parameter), sends the turn without a token rather than failing it, so a token that never resolves can't stall the conversation. The token travels as its own request-body field, never as an `Authorization` header, and is never merged into the identity payload.
* Supply only the opaque, app-minted token your backend expects. Never pass a raw Auth0 (or other identity provider) token. The SDK attaches the value verbatim and must never receive the underlying credential.

See [setAuthTokenProvider](/edge/adobe-brand-concierge/ios/api-reference.md#setauthtokenprovider) in the API reference for the full syntax.

<HorizontalLine />

## Data handoff

Sometimes the app needs to hand the SDK data that didn't originate from something the user typed or said in chat, for example, the result of a native checkout flow that completed entirely outside the chat UI. `Concierge.sendDataHandoff(...)` forwards that data directly into the agent pipeline (Brand Concierge / Product Advisor).

```swift
import AEPBrandConcierge

Concierge.sendDataHandoff(
    routingHint: "successful-checkout",
    xdmFields: [
        "commerce": ["order": ["purchaseID": orderId, "priceTotal": 129.99, "currencyCode": "USD"]]
    ],
    localMessage: "Your order is confirmed!"
) { result in
    // .success -> Brand Concierge completed the turn and its response was rendered.
    // .failure -> inspect the ConciergeDataHandoffError before retrying.
}
```

### `Concierge.sendDataHandoff(routingHint:xdmFields:localMessage:completion:)`

* **`routingHint`**: A keyword consumed only by Brand Concierge's current phrase-based router (for example, `"successful-checkout"`). The end user never sees it, and it is not conversational content. Defaults to empty, which is appropriate when `xdmFields` carries the routing context on its own.
* **`xdmFields`** *(required)*: Arbitrary XDM-shaped data merged into the root of the XDM object the SDK forwards alongside the routing hint. This is an ordinary nested dictionary, for example, `["commerce": ["order": ["purchaseID": "123"]]]`. It must be non-empty, JSON-serializable, and must not use `identityMap` as a top-level key (reserved by the SDK).
* **`localMessage`**: Optional text rendered immediately in the chat transcript as a local, non-networked message, distinct from the data forwarded to Brand Concierge. If `nil` or empty, nothing is shown locally; the conversation only gets whatever Product Advisor eventually replies with.
* **`completion`**: Optional closure called exactly once with the outcome, on the main actor, and always within 60 seconds. A handoff turn is bounded on both ends, so the callback can't be left hanging by a slow or stalled backend. It receives a `Result<Void, ConciergeDataHandoffError>`. `.success` means Brand Concierge completed the turn and its response was rendered into the transcript, not merely that the payload passed validation. On `.failure`, the error is a typed `ConciergeDataHandoffError`:

| Error | `code` | Meaning |
| --- | --- | --- |
| `missingEventData` | `missing_event_data` | No payload arrived at all. This is an internal wiring issue, not something a caller can trigger directly. |
| `emptyXdmFields` | `empty_xdm_fields` | `xdmFields` was empty. |
| `invalidXdmFieldValue` | `invalid_xdm_field_value` | `xdmFields` contained a value that isn't JSON-serializable. |
| `reservedKeyCollision` | `reserved_key_collision` | `xdmFields` used a reserved top-level key (for example, `identityMap`). |
| `noActiveSession` | `no_active_session` | No Concierge chat session was active, or the existing one had expired. Show or resolve a session, then retry. |
| `chatInProgress` | `chat_in_progress` | Another turn is already being processed. Nothing was started or rendered; retry once the chat is idle. |
| `deliveryFailed(String?)` | `delivery_failed` | Brand Concierge returned an error or the request couldn't be completed. Carries the underlying service detail when available. |
| `emptyResponse` | `empty_response` | The stream completed with no renderable content. |
| `deliveryTimeout` | `delivery_timeout` | The backend produced no response at all within 10 seconds, or the turn ran past its 60-second ceiling. A turn that is actively streaming is never cut off at the 10-second mark, so a slow but healthy reply still renders. The in-flight request is cancelled, so a retry starts a clean turn rather than racing the original. Distinct from `deliveryFailed` so a slow turn can be retried without retrying a rejected one. |
| `noResponse` | `no_response` | The extension itself never responded. This is an internal failure, distinct from the backend timing out, which reports `deliveryTimeout`. |

`code` is a public, stable identifier intended for analytics and crash reporting, so an app can report a failure without switching over every case. Codes are a stable contract and will not change for an existing case.

A failed handoff leaves **nothing** in the chat transcript: the streaming placeholder is removed and the chat returns to idle. A handoff is initiated by app code, not by the user, so an error bubble would appear unprompted for something the user never asked for. Any `localMessage` already rendered stays, since the user has seen it.

This means the app owns the failure UX. If a failed handoff needs to be visible, present it in app UI on `.failure`; the SDK will not show it. This is the inverse of a user-typed turn, where the SDK does render the failure because the user is waiting on a visible answer.

### Handling the result

The following example forwards checkout data into the existing Concierge conversation and handles each failure case:

```swift
Concierge.sendDataHandoff(
    routingHint: "successful-checkout",
    xdmFields: [
        "commerce": [
            "order": [
                "purchaseID": order.id
            ]
        ]
    ],
    localMessage: "Your order is confirmed!"
) { result in
    switch result {
    case .success:
        analytics.track("concierge_handoff_delivered")

    case .failure(let error):
        // `code` is stable, so reporting needs no per-case mapping.
        analytics.track("concierge_handoff_failed", ["code": error.code])

        switch error {
        case .chatInProgress, .deliveryTimeout:
            pendingHandoff = order          // safe to retry
        case .noActiveSession:
            Concierge.show(surfaces: surfaces)
            pendingHandoff = order
        case .deliveryFailed, .emptyResponse, .noResponse:
            // Nothing was rendered in the transcript, so the app owns this failure.
            showCheckoutBanner("We couldn't load your recommendations.")
        case .missingEventData, .emptyXdmFields, .invalidXdmFieldValue, .reservedKeyCollision:
            assertionFailure("Bad handoff payload: \(error.localizedDescription)")
        }
    }
}
```

The handoff requires an active Concierge session, but the chat does not need to be visible while the app is collecting checkout data. The checkout screen can be dismissed after submitting the handoff so the existing Concierge session displays the local message and the streamed Brand Concierge / Product Advisor response.

The callback completes after the forwarding stream finishes, reporting either the delivered response or the first error encountered along the way. A handoff submitted while another chat turn is still processing is rejected immediately with `ConciergeDataHandoffError.chatInProgress`; the SDK does not queue or retain it, and nothing is rendered for the rejected handoff, not even `localMessage`. The host app owns the retry and can resubmit the same handoff once the in-flight turn finishes, whether it succeeded or failed. An empty `routingHint` is allowed when the XDM fields provide the necessary routing context.

<HorizontalLine />

## Basic usage

Brand Concierge requires a list of **surface identifiers** to resolve the correct chat configuration on the Brand Concierge server. Every chat session is started with surfaces, either directly using `show(...)` or `present(on:...)`, or, when using the built-in floating button, using the value stored by `wrap(...)`. See the [API reference (iOS)](/edge/adobe-brand-concierge/ios/api-reference.md) for the full parameter list of each API.

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

Store "Get directions" links arrive as platform-neutral `geo:` URIs. iOS has no native `geo:` handler, so these are rewritten to an Apple Maps directions URL (`https://maps.apple.com/?daddr=...`) before the deep link / universal link check above runs — opening the Maps app via universal link, or falling back to the in-app WebView (for example, on the Simulator). This rewrite happens after `handleLink` is consulted, so a `handleLink` callback still sees the original `geo:` URL.

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

* [API reference (iOS)](/edge/adobe-brand-concierge/ios/api-reference.md) — Full parameter documentation for all public APIs.
* [Style guide (iOS)](/edge/adobe-brand-concierge/ios/style-guide.md) — Theme JSON reference and implementation status for iOS.
