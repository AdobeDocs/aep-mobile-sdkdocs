---
noIndex: true
---

<Variant platform="swift" api="wrap" repeat="5"/>

**Syntax**

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

* _content_ _(required)_ - The SwiftUI content to wrap.
* _surfaces_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration. Defaults to `[]`.
* _title_ - Header title text shown at the top of the chat.
* _subtitle_ - Header subtitle text shown at the top of the chat.
* _hideButton_ - When `true`, hides the built-in floating button so chat can be triggered from custom host-app UI. Defaults to `false`.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

**Example**

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

<Variant platform="swift" api="show" repeat="5"/>

**Syntax**

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

* _surfaces_ _(required)_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation for voice input. If `nil`, the SDK creates the default speech capturer internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation for text-to-speech. If `nil`, text to speech is disabled.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

**Example**

```swift
Button("Chat") {
    Concierge.show(
        surfaces: ["web://example.com/your-surface.html"],
        title: "Concierge",
        subtitle: "Powered by Adobe"
    )
}
```

<Variant platform="swift" api="hide" repeat="4"/>

**Syntax**

```swift
static func hide()
```

**Example**

```swift
Concierge.hide()
```

<Variant platform="swift" api="present" repeat="5"/>

**Syntax**

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

* _on presentingViewController_ _(required)_ - The `UIViewController` that will host the chat UI as a child view controller, filling its view.
* _surfaces_ _(required)_ - Surface identifiers sent to the Brand Concierge server to resolve the chat configuration.
* _title_ - Header title text shown at the top of the chat for this session.
* _subtitle_ - Header subtitle text shown at the top of the chat for this session.
* _speechCapturer_ - Custom `SpeechCapturing` implementation for voice input. If `nil`, the SDK creates the default speech capturer internally.
* _textSpeaker_ - Custom `TextSpeaking` implementation for text-to-speech. If `nil`, text to speech is disabled.
* _handleLink_ - Optional callback invoked before the SDK's default link routing. Return `true` to claim the URL; return `false` to let the SDK handle it normally.

**Example**

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

<Variant platform="swift" api="theme-loader-load" repeat="5"/>

**Syntax**

```swift
public static func load(from filename: String, in bundle: Bundle = .main) -> ConciergeTheme?
```

* _filename_ _(required)_ - The name of the JSON theme file (without the `.json` extension).
* _bundle_ - The bundle to search for the file. Defaults to `.main`.

**Example**

```swift
let theme = ConciergeThemeLoader.load(from: "my-theme", in: .main)
    ?? ConciergeThemeLoader.default()
```

<Variant platform="swift" api="theme-loader-default" repeat="4"/>

**Syntax**

```swift
public static func `default`() -> ConciergeTheme
```

**Example**

```swift
let theme = ConciergeThemeLoader.default()
```
