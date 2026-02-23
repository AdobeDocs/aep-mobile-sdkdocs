---
title: Brand Concierge style guide (iOS)
description: Theming and customization reference for the AEPBrandConcierge iOS SDK.
keywords:
- Brand Concierge
- iOS
- Style guide
- Theming
---

# Brand Concierge Style Guide (iOS)

This document provides a reference for styling properties supported by the AEPBrandConcierge framework. Themes are configured using JSON files that follow a web-compatible CSS variable format.

## Table of Contents

* [Overview](#overview)
* [JSON Structure](#json-structure)
* [Value Formats](#value-formats)
* [Metadata](#metadata)
* [Behavior](#behavior)
* [Disclaimer](#disclaimer)
* [Text (Copy)](#text-copy)
* [Arrays](#arrays)
* [Assets](#assets)
* [Theme Tokens](#theme-tokens)
* [Complete Example](#complete-example)
* [Implementation Status](#implementation-status)

---

## Overview

The theme configuration is loaded from a JSON file using `ConciergeThemeLoader.load(from:in:)`. The framework supports CSS-like variable names (prefixed with `--`) that are mapped to native Swift properties.

### Loading a Theme

```swift
// Load from app bundle
let theme = ConciergeThemeLoader.load(from: "theme-default", in: .main)

// Use default theme
let defaultTheme = ConciergeThemeLoader.default()
```

### Applying a Theme

Apply the theme using the `.conciergeTheme()` view modifier on your wrapped content:

```swift
import SwiftUI
import AEPBrandConcierge

struct ContentView: View {
    @State private var theme: ConciergeTheme = ConciergeThemeLoader.default()
    
    var body: some View {
        Concierge.wrap(
            Text("Hello, World!"),
            surfaces: ["my-surface"]
        )
        .conciergeTheme(theme)
        .onAppear {
            if let loadedTheme = ConciergeThemeLoader.load(from: "my-theme", in: .main) {
                theme = loadedTheme
            }
        }
    }
}
```

**Important:** The `.conciergeTheme()` modifier must be applied to the result of `Concierge.wrap()` so the theme is available to both the wrapper and the chat overlay.

---

## JSON Structure

The theme JSON file contains these top-level keys:

| Key | Description |
|-----|-------------|
| `metadata` | Theme identification and versioning |
| `behavior` | Feature toggles and interaction settings |
| `disclaimer` | Legal/disclaimer text configuration |
| `text` | Localized UI strings (copy) |
| `arrays` | Welcome examples and feedback options |
| `assets` | Icon and image assets |
| `theme` | Visual styling tokens (CSS variables) |

---

## Value Formats

* **Colors**: Hex strings (`#RRGGBB`, `#RRGGBBAA`).
* **Dimensions**: CSS pixel units (e.g. `"52px"`, `"12px"`).
* **Padding**: CSS shorthand (`8px`, `8px 16px`, etc.).
* **Shadows**: CSS box-shadow syntax.
* **Font weights**: Numeric (`100`–`900`) or names (`ultraLight`, `regular`, `bold`, etc.).
* **Text alignment**: `left` (`.leading`), `center`, `right` (`.trailing`).

---

## Metadata

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `metadata.brandName` | String | `""` | Brand/company name |
| `metadata.version` | String | `"0.0.0"` | Theme version |
| `metadata.language` | String | `"en-US"` | Locale identifier |
| `metadata.namespace` | String | `"brand-concierge"` | Theme namespace |

### Example

```json
{
  "metadata": {
    "brandName": "Concierge Demo",
    "version": "1.0.0",
    "language": "en-US",
    "namespace": "brand-concierge"
  }
}
```

---

## Behavior

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.multimodalCarousel.cardClickAction` | String | `"openLink"` | Action when carousel card is tapped |
| `behavior.input.enableVoiceInput` | Bool | `false` | Enable voice input button |
| `behavior.input.disableMultiline` | Bool | `true` | Disable multiline text input |
| `behavior.input.showAiChatIcon` | Object? | `null` | AI chat icon configuration |
| `behavior.chat.messageAlignment` | String | `"left"` | Message alignment (`"left"`, `"center"`, `"right"`) |
| `behavior.chat.messageWidth` | String | `"100%"` | Max message width |
| `behavior.privacyNotice.title` | String | `"Privacy Notice"` | Privacy dialog title |
| `behavior.privacyNotice.text` | String | `"Privacy notice text."` | Privacy notice content |

### Example

```json
{
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink"
    },
    "input": {
      "enableVoiceInput": true,
      "disableMultiline": false,
      "showAiChatIcon": null
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "privacyNotice": {
      "title": "Privacy Notice",
      "text": "Privacy notice text."
    }
  }
}
```

---

## Disclaimer

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `disclaimer.text` | String | (default disclaimer) | Disclaimer text with `{placeholders}` for links |
| `disclaimer.links` | Array | `[]` | Array of link objects (`text`, `url`) |

### Example

```json
{
  "disclaimer": {
    "text": "AI responses may be inaccurate. Check answers and sources. {Terms}",
    "links": [
      {
        "text": "Terms",
        "url": "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html"
      }
    ]
  }
}
```

---

## Text (Copy)

Localized UI strings use dot-notation keys. Key groups include: **Welcome Screen** (`welcome.heading`, `welcome.subheading`), **Input** (`input.placeholder`, `input.messageInput.aria`, `input.send.aria`, etc.), **Cards & Carousel** (`card.aria.select`, `carousel.prev.aria`, `carousel.next.aria`), **System Messages** (`scroll.bottom.aria`, `error.network`, `loading.message`), **Feedback Dialog** (e.g. `feedback.dialog.title.positive`, `feedback.dialog.submit`, `feedback.dialog.cancel`).

### Example

```json
{
  "text": {
    "welcome.heading": "Welcome to Brand Concierge!",
    "welcome.subheading": "I'm your personal guide to help you explore.",
    "input.placeholder": "How can I help?",
    "error.network": "I'm sorry, I'm having trouble connecting."
  }
}
```

---

## Arrays

It is recommended to have no more than four items in welcome examples and no more than five options each for feedback. Test values on device to ensure the UI looks as desired.

### Example

```json
{
  "arrays": {
    "welcome.examples": [
      {
        "text": "I'd like to explore templates to see what I can create.",
        "image": "https://example.com/template.png",
        "backgroundColor": "#F5F5F5"
      }
    ],
    "feedback.positive.options": [
      "Helpful and relevant recommendations",
      "Clear and easy to understand",
      "Other"
    ],
    "feedback.negative.options": [
      "Didn't understand my request",
      "Unhelpful or irrelevant information",
      "Other"
    ]
  }
}
```

---

## Assets

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `assets.icons.company` | String | `""` | Company logo (SVG string or URL) |

### Example

```json
{
  "assets": {
    "icons": {
      "company": ""
    }
  }
}
```

---

## Theme Tokens

Visual styling uses CSS-like variable names in the `theme` object (`--property-name` format).

### Typography

| CSS Variable | Swift Property | Type | Default |
|--------------|----------------|------|---------|
| `--font-family` | `typography.fontFamily` | String | `""` (system font) |
| `--line-height-body` | `typography.lineHeight` | CGFloat | `1.0` |

### Colors (summary)

* **Primary**: `--color-primary`, `--color-text`
* **Surface**: `--main-container-background`, `--main-container-bottom-background`, `--message-blocker-background`
* **Messages**: `--message-user-background`, `--message-user-text`, `--message-concierge-background`, `--message-concierge-text`, `--message-concierge-link-color`
* **Buttons**: `--button-primary-background`, `--button-primary-text`, `--button-secondary-border`, `--button-secondary-text`, `--submit-button-fill-color`, `--color-button-submit`, etc.
* **Input**: `--input-background`, `--input-text-color`, `--input-outline-color`, `--input-focus-outline-color`
* **Citations**: `--citations-background-color`, `--citations-text-color`
* **Feedback**: `--feedback-icon-btn-background`
* **Disclaimer**: `--disclaimer-color`

### Layout (summary)

* **Input**: `--input-height-mobile`, `--input-border-radius-mobile`, `--input-outline-width`, `--input-font-size`, `--input-button-height`, `--input-button-width`, `--input-button-border-radius`, `--input-box-shadow`
* **Messages**: `--message-border-radius`, `--message-padding`, `--message-max-width`
* **Chat**: `--chat-interface-max-width`, `--chat-history-padding`, `--chat-history-padding-top-expanded`, `--chat-history-bottom-padding`, `--message-blocker-height`
* **Cards**: `--border-radius-card`, `--multimodal-card-box-shadow`
* **Buttons**: `--button-height-s`
* **Feedback**: `--feedback-container-gap`, `--feedback-icon-btn-size-desktop`
* **Citations**: `--citations-text-font-weight`, `--citations-desktop-button-font-size`
* **Disclaimer**: `--disclaimer-font-size`, `--disclaimer-font-weight`
* **Welcome order**: `--welcome-input-order`, `--welcome-cards-order`

For the full list of theme tokens and Swift property mappings, see the [AEPBrandConcierge iOS Documentation](https://github.com/adobe/aepsdk-concierge-ios/tree/dev/Documentation) repository.

---

## Complete Example

Place the theme file in your app bundle (e.g. add `my-theme.json` to the project) and load it with `ConciergeThemeLoader.load(from:in:)` as shown in [Overview](#overview).

```json
{
  "metadata": {
    "brandName": "Concierge Demo",
    "version": "1.0.0",
    "language": "en-US",
    "namespace": "brand-concierge"
  },
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink"
    },
    "input": {
      "enableVoiceInput": true,
      "disableMultiline": false,
      "showAiChatIcon": null
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "privacyNotice": {
      "title": "Privacy Notice",
      "text": "Privacy notice text."
    }
  },
  "disclaimer": {
    "text": "AI responses may be inaccurate. Check answers and sources. {Terms}",
    "links": [
      {
        "text": "Terms",
        "url": "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html"
      }
    ]
  },
  "text": {
    "welcome.heading": "Welcome to Brand Concierge!",
    "welcome.subheading": "I'm your personal guide to help you explore.",
    "input.placeholder": "How can I help?",
    "input.messageInput.aria": "Message input",
    "input.send.aria": "Send message",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel"
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "I'd like to explore templates to see what I can create.",
        "image": "https://example.com/template.png",
        "backgroundColor": "#F5F5F5"
      }
    ],
    "feedback.positive.options": [
      "Helpful and relevant recommendations",
      "Clear and easy to understand",
      "Other"
    ],
    "feedback.negative.options": [
      "Didn't understand my request",
      "Unhelpful or irrelevant information",
      "Other"
    ]
  },
  "assets": {
    "icons": {
      "company": ""
    }
  },
  "theme": {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--font-family": "",
    "--color-primary": "#EB1000",
    "--color-text": "#131313",
    "--line-height-body": "1.75",
    "--main-container-background": "#FFFFFF",
    "--main-container-bottom-background": "#FFFFFF",
    "--message-blocker-background": "#FFFFFF",
    "--input-height-mobile": "52px",
    "--input-border-radius-mobile": "12px",
    "--input-background": "#FFFFFF",
    "--input-outline-color": null,
    "--input-outline-width": "2px",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#4B75FF",
    "--input-font-size": "16px",
    "--input-text-color": "#292929",
    "--input-button-height": "32px",
    "--input-button-width": "32px",
    "--input-button-border-radius": "8px",
    "--input-box-shadow": "0 2px 8px 0 #00000014",
    "--submit-button-fill-color": "#FFFFFF",
    "--submit-button-fill-color-disabled": "#C6C6C6",
    "--color-button-submit": "#292929",
    "--button-disabled-background": "#FFFFFF",
    "--button-primary-background": "#3B63FB",
    "--button-primary-text": "#FFFFFF",
    "--button-secondary-border": "#2C2C2C",
    "--button-secondary-text": "#2C2C2C",
    "--button-height-s": "30px",
    "--disclaimer-color": "#4B4B4B",
    "--disclaimer-font-size": "12px",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#EBEEFF",
    "--message-user-text": "#292929",
    "--message-concierge-background": "#F5F5F5",
    "--message-concierge-text": "#292929",
    "--message-concierge-link-color": "#274DEA",
    "--message-border-radius": "10px",
    "--message-padding": "8px 16px",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--chat-history-padding": "16px",
    "--chat-history-padding-top-expanded": "0",
    "--chat-history-bottom-padding": "0",
    "--message-blocker-height": "105px",
    "--border-radius-card": "16px",
    "--multimodal-card-box-shadow": "none",
    "--feedback-container-gap": "4px",
    "--feedback-icon-btn-background": "#FFFFFF",
    "--feedback-icon-btn-size-desktop": "32px",
    "--citations-text-font-weight": "700",
    "--citations-desktop-button-font-size": "12px"
  }
}
```

---

## Implementation Status

This section documents which properties are fully implemented, partially implemented, or not yet implemented in the iOS framework. See the [AEPBrandConcierge iOS style guide](https://github.com/adobe/aepsdk-concierge-ios/blob/dev/Documentation/Implementation/style-guide.md#implementation-status) for the canonical source.

### Legend

| Status | Description |
|--------|-------------|
| ✅ | Fully implemented — property is mapped and actively used in views |
| ⚠️ | Defined but unused — property is parsed but not rendered in any view |
| ❌ | Not supported — property exists in web JSON but is ignored by iOS |

### Metadata

| Property | Status | Notes |
|----------|--------|-------|
| `metadata.brandName` | ⚠️ | Parsed but not displayed in UI |
| `metadata.version` | ⚠️ | Parsed but not used |
| `metadata.language` | ⚠️ | Parsed but not used for localization |
| `metadata.namespace` | ⚠️ | Parsed but not used |

### Behavior

| Property | Status | Notes |
|----------|--------|-------|
| `behavior.multimodalCarousel.cardClickAction` | ⚠️ | Parsed but not implemented in carousel views |
| `behavior.input.enableVoiceInput` | ✅ | Controls mic button visibility |
| `behavior.input.disableMultiline` | ✅ | Controls input line limit |
| `behavior.input.showAiChatIcon` | ⚠️ | Parsed and mapped to component but not rendered |
| `behavior.chat.messageAlignment` | ✅ | Controls message horizontal alignment |
| `behavior.chat.messageWidth` | ✅ | Controls max message width |
| `behavior.privacyNotice.title` | ⚠️ | Parsed but no privacy dialog implemented |
| `behavior.privacyNotice.text` | ⚠️ | Parsed but no privacy dialog implemented |

### Disclaimer

| Property | Status | Notes |
|----------|--------|-------|
| `disclaimer.text` | ✅ | Rendered in ComposerDisclaimer |
| `disclaimer.links` | ✅ | Links are parsed and tappable |

### Text (Copy)

| Property | Status | Notes |
|----------|--------|-------|
| `text["welcome.heading"]` | ✅ | Used in ChatController for welcome message |
| `text["welcome.subheading"]` | ✅ | Used in ChatController for welcome message |
| `text["input.placeholder"]` | ✅ | Used in ComposerEditingView |
| `text["input.messageInput.aria"]` | ✅ | Used for accessibility |
| `text["input.send.aria"]` | ✅ | Used for accessibility |
| `text["input.aiChatIcon.tooltip"]` | ⚠️ | Parsed but AI icon not rendered |
| `text["input.mic.aria"]` | ✅ | Used for accessibility |
| `text["card.aria.select"]` | ✅ | Used in ChatMessageView |
| `text["carousel.prev.aria"]` | ✅ | Used in CarouselGroupView |
| `text["carousel.next.aria"]` | ✅ | Used in CarouselGroupView |
| `text["scroll.bottom.aria"]` | ⚠️ | Parsed but scroll button not implemented |
| `text["error.network"]` | ✅ | Used in ChatView |
| `text["loading.message"]` | ✅ | Used in ChatView placeholder |
| `text["feedback.dialog.title.positive"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.title.negative"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.question.positive"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.question.negative"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.notes"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.submit"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.cancel"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.dialog.notes.placeholder"]` | ✅ | Used in FeedbackOverlayView |
| `text["feedback.toast.success"]` | ⚠️ | Parsed but toast not implemented |
| `text["feedback.thumbsUp.aria"]` | ✅ | Used in SourcesListView |
| `text["feedback.thumbsDown.aria"]` | ✅ | Used in SourcesListView |

### Arrays

| Property | Status | Notes |
|----------|--------|-------|
| `arrays["welcome.examples"]` | ✅ | Used in ChatController |
| `arrays["feedback.positive.options"]` | ✅ | Used in FeedbackOverlayView |
| `arrays["feedback.negative.options"]` | ✅ | Used in FeedbackOverlayView |

### Assets

| Property | Status | Notes |
|----------|--------|-------|
| `assets.icons.company` | ⚠️ | Parsed but not rendered in any view |

### Theme Tokens — Typography

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--font-family` | ✅ | Used in ChatView, ComposerEditingView |
| `--line-height-body` | ✅ | Used in ChatView for global line spacing |

### Theme Tokens — Colors

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--color-primary` | ✅ | Used throughout UI |
| `--color-text` | ✅ | Used for text styling |
| `--main-container-background` | ✅ | Used in ChatView, ChatTopBar |
| `--main-container-bottom-background` | ✅ | Used in ChatComposer |
| `--message-blocker-background` | ✅ | Used in ChatView |
| `--message-user-background` | ✅ | Used in ChatMessageView |
| `--message-user-text` | ✅ | Used in ChatMessageView |
| `--message-concierge-background` | ✅ | Used in ChatMessageView, SourcesListView |
| `--message-concierge-text` | ✅ | Used in ChatMessageView |
| `--message-concierge-link-color` | ✅ | Used in SourceRowView |
| `--button-primary-background` | ✅ | Used in ConciergePressableButtonStyle |
| `--button-primary-text` | ✅ | Used in ConciergePressableButtonStyle |
| `--button-secondary-border` | ✅ | Used in ConciergePressableButtonStyle |
| `--button-secondary-text` | ✅ | Used in ConciergePressableButtonStyle |
| `--submit-button-fill-color` | ✅ | Used in ComposerSendButtonStyle |
| `--submit-button-fill-color-disabled` | ✅ | Used in ComposerSendButtonStyle |
| `--color-button-submit` | ✅ | Used in ComposerSendButtonStyle |
| `--button-disabled-background` | ✅ | Used in ConciergePressableButtonStyle |
| `--input-background` | ✅ | Used in ChatComposer (via components) |
| `--input-text-color` | ⚠️ | Mapped but text uses system colors |
| `--input-outline-color` | ⚠️ | Mapped but not rendered (only focus outline used) |
| `--input-focus-outline-color` | ✅ | Used in ChatComposer |
| `--citations-background-color` | ✅ | Used in MarkdownBlockView |
| `--citations-text-color` | ✅ | Used in MarkdownBlockView |
| `--feedback-icon-btn-background` | ✅ | Used in SourcesListView |
| `--disclaimer-color` | ⚠️ | Mapped but disclaimer uses primary.text |

### Theme Tokens — Layout

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--input-height-mobile` | ✅ | Used in ChatComposer |
| `--input-border-radius-mobile` | ✅ | Used in ChatComposer |
| `--input-outline-width` | ⚠️ | Mapped but not rendered |
| `--input-focus-outline-width` | ✅ | Used in ChatComposer |
| `--input-font-size` | ✅ | Used in ComposerEditingView |
| `--input-button-height` | ✅ | Used in ComposerSendButtonStyle |
| `--input-button-width` | ✅ | Used in ComposerSendButtonStyle |
| `--input-button-border-radius` | ✅ | Used in ComposerSendButtonStyle |
| `--input-box-shadow` | ✅ | Used in ChatComposer |
| `--message-border-radius` | ✅ | Used in ChatMessageView, SourcesListView |
| `--message-padding` | ✅ | Used in ChatMessageView |
| `--message-max-width` | ✅ | Used in ChatMessageView |
| `--chat-interface-max-width` | ✅ | Used in ChatView |
| `--chat-history-padding` | ✅ | Used in ChatView |
| `--chat-history-padding-top-expanded` | ✅ | Used in MessageListView |
| `--chat-history-bottom-padding` | ✅ | Used in MessageListView |
| `--message-blocker-height` | ✅ | Used in MessageListView |
| `--border-radius-card` | ✅ | Used in ChatMessageView |
| `--multimodal-card-box-shadow` | ✅ | Used in ChatMessageView |
| `--button-height-s` | ✅ | Used in ButtonView |
| `--feedback-container-gap` | ✅ | Used in SourcesListView |
| `--feedback-icon-btn-size-desktop` | ✅ | Used in SourcesListView |
| `--citations-text-font-weight` | ✅ | Used in ChatMessageView |
| `--citations-desktop-button-font-size` | ✅ | Used in ChatMessageView |
| `--disclaimer-font-size` | ⚠️ | Mapped but not used in views |
| `--disclaimer-font-weight` | ⚠️ | Mapped but not used in views |
| `--welcome-input-order` | ⚠️ | Mapped but welcome layout not customizable |
| `--welcome-cards-order` | ⚠️ | Mapped but welcome layout not customizable |

### Unsupported CSS Variables

The following CSS variables appear in web theme configurations but are **not supported** on iOS:

| CSS Variable | Notes |
|--------------|-------|
| `--input-height` | Use `--input-height-mobile` instead |
| `--input-border-radius` | Use `--input-border-radius-mobile` instead |
| `--color-button-submit-hover` | Hover states not applicable on iOS |
| `--button-primary-hover` | Hover states not applicable on iOS |
| `--button-secondary-hover` | Hover states not applicable on iOS |
| `--color-button-secondary-hover-text` | Hover states not applicable on iOS |
| `--feedback-icon-btn-hover-background` | Hover states not applicable on iOS |
| `--message-alignment` | Use `behavior.chat.messageAlignment` instead |
| `--message-width` | Use `behavior.chat.messageWidth` instead |
