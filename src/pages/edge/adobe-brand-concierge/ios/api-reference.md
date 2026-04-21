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

### Swift

* **_content_** - The SwiftUI content to wrap.
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration. Defaults to `[]`.
* _title_ - Header title text shown at the top of the chat.
* _subtitle_ - Header subtitle text shown at the top of the chat.
* _hideButton_ - When `true`, hides the built-in floating button so chat can be triggered from custom host-app UI. Defaults to `false`.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

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

### Example

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

### Swift

* **_surfaces_** - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation for voice input. If `nil`, the SDK creates the default speech capturer internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation for text-to-speech. If `nil`, text to speech is disabled.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

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

### Example

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

### Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
static func hide()
```

### Example

```swift
Concierge.hide()
```

## present

Embeds the chat UI as a child view controller into an existing `UIViewController`. Use this for UIKit-based apps.

### Swift

* **_on presentingViewController_** - The `UIViewController` that will host the chat UI as a child view controller, filling its view.
* **_surfaces_** - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation for voice input. If `nil`, the SDK creates the default speech capturer internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation for text-to-speech. If `nil`, text to speech is disabled.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

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

### Example

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

## ConciergeThemeLoader.load

Loads a `ConciergeTheme` from a JSON file in a bundle. Returns `nil` if the file cannot be found or parsed.

### Swift

* **_filename_** - The name of the JSON theme file (without the `.json` extension).
* _bundle_ - The bundle to search for the file. Defaults to `.main`.

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func load(from filename: String, in bundle: Bundle = .main) -> ConciergeTheme?
```

### Example

```swift
let theme = ConciergeThemeLoader.load(from: "my-theme", in: .main)
    ?? ConciergeThemeLoader.default()
```

## ConciergeThemeLoader.default

Returns the built-in default `ConciergeTheme`.

### Swift

<CodeBlock slots="heading, code" repeat="2" />

### Syntax

```swift
public static func `default`() -> ConciergeTheme
```

### Example

```swift
let theme = ConciergeThemeLoader.default()
```
