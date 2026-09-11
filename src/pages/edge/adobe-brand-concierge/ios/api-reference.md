---
title: Brand Concierge API reference (iOS)
description: An API reference for the Brand Concierge iOS extension.
keywords:
- Brand Concierge
- iOS
- API reference
---

# Brand Concierge API reference (iOS)

## wrap

Wraps a SwiftUI view with the Brand Concierge overlay and optional floating button. Call this once at the app's root to enable the chat overlay across the entire view hierarchy.

<InlineAlert variant="info" slots="text"/>

The `surfaces`, `title`, `subtitle`, and `handleLink` parameters on `wrap(...)` only apply when chat is triggered via the built-in floating button. When chat is triggered via `Concierge.show(...)` or `Concierge.present(on:...)`, the values passed to those APIs are used instead.

#### Syntax

```swift
static func wrap<Content: View>(
    _ content: Content,
    surfaces: [String] = [],
    title: String? = nil,
    subtitle: String? = nil,
    hideButton: Bool = false,
    handleLink: ((URL) -> Bool)? = nil
) -> some View
```

#### Parameters

* _content_ **required** - The SwiftUI content to wrap.
* _surfaces_ - Surface identifiers sent to the Brand Concierge server. Defaults to `[]`.
* _title_ - Header title text shown at the top of the chat.
* _subtitle_ - Header subtitle text shown at the top of the chat.
* _hideButton_ - When `true`, hides the built-in floating button. Defaults to `false`.
* _handleLink_ - Optional callback for link routing. Return `true` to claim the URL; return `false` to let the SDK handle it.

#### Example

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            Concierge.wrap(
                ContentView(),
                surfaces: ["web://example.com/your-surface.html"]
            )
        }
    }
}
```

## show

Opens the chat overlay for a new chat session. Requires the view hierarchy to have been wrapped with `Concierge.wrap(...)` first.

#### Syntax

```swift
static func show(
    surfaces: [String],
    title: String? = nil,
    subtitle: String? = nil,
    speechCapturer: SpeechCapturing? = nil,
    textSpeaker: TextSpeaking? = nil,
    handleLink: ((URL) -> Bool)? = nil
)
```

#### Parameters

* _surfaces_ **required** - Surface identifiers sent to the Brand Concierge server.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation. If `nil`, a default is created internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation. If `nil`, text-to-speech is disabled.
* _handleLink_ - Optional callback for link routing. Return `true` to claim the URL; return `false` to let the SDK handle it.

#### Example

```swift
Button("Chat") {
    Concierge.show(
        surfaces: ["web://example.com/your-surface.html"],
        title: "Concierge",
        subtitle: "Powered by Adobe"
    )
}
```

## hide

Dismisses the currently presented chat overlay.

#### Syntax

```swift
static func hide()
```

#### Example

```swift
Concierge.hide()
```

## present

Embeds the chat UI as a child view controller into an existing `UIViewController`. Use this for UIKit-based apps.

#### Syntax

```swift
static func present(
    on presentingViewController: UIViewController,
    surfaces: [String],
    title: String? = nil,
    subtitle: String? = nil,
    speechCapturer: SpeechCapturing? = nil,
    textSpeaker: TextSpeaking? = nil,
    handleLink: ((URL) -> Bool)? = nil
)
```

#### Parameters

* _on presentingViewController_ **required** - The `UIViewController` that will host the chat UI, filling its view.
* _surfaces_ **required** - Surface identifiers sent to the Brand Concierge server.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation. If `nil`, a default is created internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation. If `nil`, text-to-speech is disabled.
* _handleLink_ - Optional callback for link routing. Return `true` to claim the URL; return `false` to let the SDK handle it.

#### Example

```swift
import AEPBrandConcierge

final class MyViewController: UIViewController {
    @objc private func openChat() {
        Concierge.present(
            on: self,
            surfaces: ["web://example.com/your-surface.html"],
            title: "Concierge",
            subtitle: "Powered by Adobe"
        )
    }
}
```

## setAuthTokenProvider

Registers the provider the SDK consults for an auth token before every chat and feedback turn. Lets a host app attach its own opaque, app-minted authentication token to Brand Concierge conversation turns.

<InlineAlert variant="info" slots="text"/>

Supply only the opaque, app-minted token your backend expects — never a raw identity-provider (e.g. Auth0) token. The SDK attaches it verbatim as its own request-body field, never as an `Authorization` header and never merged into the identity payload, and never inspects or logs it.

#### Syntax

```swift
static func setAuthTokenProvider(
    timeout: TimeInterval = 3,
    _ provider: (@Sendable () async -> String?)?
)
```

#### Parameters

* _timeout_ - How long to await the provider before sending the turn without a token. Defaults to `3` seconds; raise it if minting the token may take longer.
* _provider_ **required** - An `async` closure returning the current token, or `nil` to clear a previously registered provider. The closure is consulted fresh on every turn (never cached) and works for both synchronous (`{ tokenCache.current }`) and asynchronous (`{ await tokenCache.freshToken() }`) callers. Returning `nil`/blank, or not returning within `timeout`, sends the turn without a token instead of failing it.

#### Example

```swift
Concierge.setAuthTokenProvider { [weak tokenCache] in
    await tokenCache?.freshToken()
}
```

## ConciergeThemeLoader.load

Loads a `ConciergeTheme` from a JSON file in a bundle. Returns `nil` if the file cannot be found or parsed.

#### Syntax

```swift
public static func load(from filename: String, in bundle: Bundle = .main) -> ConciergeTheme?
```

#### Parameters

* _filename_ **required** - The name of the JSON theme file (without the `.json` extension).
* _bundle_ - The bundle to search for the file. Defaults to `.main`.

#### Example

```swift
let theme = ConciergeThemeLoader.load(from: "my-theme", in: .main)
    ?? ConciergeThemeLoader.default()
```

## ConciergeThemeLoader.default

Returns the built-in default `ConciergeTheme`.

#### Syntax

```swift
public static func `default`() -> ConciergeTheme
```

#### Example

```swift
let theme = ConciergeThemeLoader.default()
```
