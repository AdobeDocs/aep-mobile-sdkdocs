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
            // Your app content here
            Text("Hello, World!"),
            surfaces: ["my-surface"]
        )
        .conciergeTheme(theme)  // Apply theme to the wrapper
        .onAppear {
            // Load custom theme from JSON file
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

Understanding the value formats used throughout this document.

### Colors

Colors are specified as hex strings:

```json
"--color-primary": "#EB1000"
"--message-user-background": "#EBEEFF"
```

Supported formats:

* `#RRGGBB` - 6 digit hex
* `#RRGGBBAA` - 8 digit hex with alpha

### Dimensions

Dimensions use CSS pixel units:

```json
{
  "--input-height-mobile": "52px",
  "--input-border-radius-mobile": "12px"
}
```

On iOS, prefer the `*-mobile` token names; `--input-height` and `--input-border-radius` without the suffix are not supported (see [Unsupported CSS Variables](#unsupported-css-variables)).

### Padding

Padding follows CSS shorthand syntax:

```json
"--message-padding": "8px 16px"
```

Formats:

* `8px` - All sides
* `8px 16px` - Vertical, horizontal
* `8px 16px 4px` - Top, horizontal, bottom
* `8px 16px 4px 2px` - Top, right, bottom, left

### Shadows

Shadows use CSS box-shadow syntax:

```json
"--input-box-shadow": "0 2px 8px 0 #00000014"
```

Format: `offsetX offsetY blurRadius spreadRadius color`

### Font Weights

Font weights use CSS numeric or named values:

| Value | Name |
|-------|------|
| `100` | `ultraLight` |
| `200` | `thin` |
| `300` | `light` |
| `400` / `normal` | `regular` |
| `500` | `medium` |
| `600` | `semibold` |
| `700` / `bold` | `bold` |
| `800` | `heavy` |
| `900` | `black` |

### Text Alignment

| Value | SwiftUI Equivalent |
|-------|-------------------|
| `left` | `.leading` |
| `center` | `.center` |
| `right` | `.trailing` |

---

## Metadata

Theme identification information.

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `metadata.brandName` | string | `""` | Brand/company name |
| `metadata.version` | string | `"0.0.0"` | Theme version |
| `metadata.language` | string | `"en-US"` | Locale identifier |
| `metadata.namespace` | string | `"brand-concierge"` | Theme namespace |

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

Feature toggles and interaction configuration.

### Multimodal Carousel

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.multimodalCarousel.cardClickAction` | string | `"openLink"` | Action when carousel card is tapped. Currently "openLink" is the only option available. |
| `behavior.multimodalCarousel.carouselStyle` | string | `"paged"` | Carousel scroll style. `"paged"` snaps to one item at a time with prev/next buttons and page indicator dots. `"scroll"` provides continuous horizontal scrolling. |

### Input

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.input.enableVoiceInput` | boolean | `false` | Enable voice input button |
| `behavior.input.disableMultiline` | boolean | `true` | Disable multiline text input |
| `behavior.input.showAiChatIcon` | object | `null` | AI chat icon configuration. Object with an `icon` property (SVG string or URL). |
| `behavior.input.sendButtonStyle` | string | `"default"` | Send button style. `"default"` shows a paper airplane icon. `"arrow"` shows a filled circle with an upward arrow. |
| `behavior.input.silenceThreshold` | number | `0.02` | Voice capture: RMS level (raw, before UI normalization) above which input counts as speech. Lower values detect quieter speech but may increase false “speech” detection. |
| `behavior.input.silenceDuration` | number | `2` | Voice capture: seconds of silence after speech is detected before recording stops automatically. |

### Chat

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.chat.messageAlignment` | string | `"left"` | Message alignment (`"left"`, `"center"`, `"right"`) |
| `behavior.chat.messageWidth` | string | `"100%"` | Max message width (e.g., `"100%"`, `"768px"`) |

### Product Card

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.productCard.cardStyle` | string | `"actionButton"` | Rendering style for product cards. `"actionButton"` shows an image, description text, and primary/secondary action buttons. `"productDetail"` shows an image, optional badge, title, subtitle, and price — the entire card is tappable. |

### Welcome Card

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.welcomeCard.closeButtonAlignment` | string | `"end"` | Close button placement on header. `"start"` places it before the title, `"end"` places it after (trailing). |
| `behavior.welcomeCard.promptFullWidth` | boolean | `true` | When `true`, prompt suggestions render as full-width cards with image thumbnails. When `false`, they render as compact chips. |
| `behavior.welcomeCard.promptMaxLines` | number | `3` | Maximum number of text lines shown in prompt suggestion cards. |
| `behavior.welcomeCard.contentAlignment` | string | `"top"` | Vertical alignment of welcome content. `"center"` centers content vertically, `"top"` aligns to top. |

### Feedback

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.feedback.displayMode` | string | `"modal"` | Feedback dialog display mode. `"modal"` renders inline as a Modal overlay; `"action"` renders as an action sheet-style layout. |
| `behavior.feedback.thumbsPlacement` | string | `"inline"` | Placement of thumbs up/down buttons. `"inline"` places them beside the sources accordion header. `"below"` places them below the header with a "Was this helpful?" label. |

### Citations

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.citations.showLinkIcon` | boolean | `false` | When `true`, shows an external link icon next to citation URLs in the sources list. |

### Privacy Notice

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.privacyNotice.title` | string | `"Privacy Notice"` | Privacy dialog title |
| `behavior.privacyNotice.text` | string | `"Privacy notice text."` | Privacy notice content |

### Example

```json
{
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink",
      "carouselStyle": "paged"
    },
    "input": {
      "enableVoiceInput": true,
      "disableMultiline": false,
      "showAiChatIcon": null,
      "sendButtonStyle": "default",
      "silenceThreshold": 0.02,
      "silenceDuration": 2
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "productCard": {
      "cardStyle": "productDetail"
    },
    "welcomeCard": {
      "closeButtonAlignment": "end",
      "promptFullWidth": true,
      "promptMaxLines": 3,
      "contentAlignment": "top"
    },
    "feedback": {
      "displayMode": "modal",
      "thumbsPlacement": "inline"
    },
    "citations": {
      "showLinkIcon": false
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

Legal disclaimer text with embedded links.

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `disclaimer.text` | string | `"AI responses may be inaccurate..."` | Disclaimer text with `{placeholders}` for links |
| `disclaimer.links` | array | `[]` | Array of link objects; each item has string properties `text` and `url`. |
| `disclaimer.links[].text` | string | `""` | Link display text (matches placeholder) |
| `disclaimer.links[].url` | string | `""` | Link URL |

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

Localized UI strings using dot-notation keys.

### ✅ Content Recommendations

While there are no strict requirements for character limits in many of these text fields, it is **_strongly_** recommended that the values be tested on target device(s) prior to deployment, ensuring the UI renders as desired.

### Header

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["header.title"]` | `""` | Header title text. When non-empty, overrides the programmatic `title` parameter passed to `ChatView`. |
| `text["header.subtitle"]` | `""` | Header subtitle text. When non-empty, overrides the programmatic `subtitle` parameter passed to `ChatView`. |

### Welcome Screen

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["welcome.heading"]` | `"Explore what you can do with Adobe apps."` | Welcome screen heading |
| `text["welcome.subheading"]` | `"Choose an option or tell us..."` | Welcome screen subheading |

### Input

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["input.placeholder"]` | `"Tell us what you'd like to do or create"` | Input field placeholder |
| `text["input.messageInput.aria"]` | `"Message input"` | Accessibility label for input |
| `text["input.send.aria"]` | `"Send message"` | Accessibility label for send button |
| `text["input.aiChatIcon.tooltip"]` | `"Ask AI"` | AI icon tooltip |
| `text["input.mic.aria"]` | `"Voice input"` | Accessibility label for mic button |

### Cards & Carousel

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["card.aria.select"]` | `"Select example message"` | Card selection accessibility |
| `text["carousel.prev.aria"]` | `"Previous cards"` | Previous button accessibility |
| `text["carousel.next.aria"]` | `"Next cards"` | Next button accessibility |

### System Messages

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["scroll.bottom.aria"]` | `"Scroll to bottom"` | Scroll button accessibility |
| `text["error.network"]` | `"I'm sorry, I'm having trouble..."` | Network error message |
| `text["loading.message"]` | `"Generating response from our knowledge base"` | Loading indicator text |

### Feedback Dialog

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["feedback.dialog.title.positive"]` | `"Your feedback is appreciated"` | Positive feedback dialog title |
| `text["feedback.dialog.title.negative"]` | `"Your feedback is appreciated"` | Negative feedback dialog title |
| `text["feedback.dialog.question.positive"]` | `"What went well? Select all that apply."` | Positive feedback question |
| `text["feedback.dialog.question.negative"]` | `"What went wrong? Select all that apply."` | Negative feedback question |
| `text["feedback.dialog.notes"]` | `"Notes"` | Notes section label |
| `text["feedback.dialog.submit"]` | `"Submit"` | Submit button text |
| `text["feedback.dialog.cancel"]` | `"Cancel"` | Cancel button text |
| `text["feedback.dialog.notes.placeholder"]` | `"Additional notes (optional)"` | Notes placeholder |
| `text["feedback.toast.success"]` | `"Thank you for the feedback."` | Success toast message |
| `text["feedback.thumbsUp.aria"]` | `"Thumbs up"` | Thumbs up accessibility |
| `text["feedback.thumbsDown.aria"]` | `"Thumbs down"` | Thumbs down accessibility |

### Sources & Feedback

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["sourcesLabel"]` | `"Sources"` | Label text for the sources accordion header |
| `text["feedbackHelpfulLabel"]` | `"Was this helpful?"` | Label shown above feedback thumbs when `behavior.feedback.thumbsPlacement` is `"below"` |

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

List-based configuration for examples and feedback options.

### Welcome Examples

> You shouldn't have more than four items in your provided welcome examples.
>
> Always test your values on device to ensure the UI looks as desired.

| JSON Key | Type | Description |
|----------|------|-------------|
| `arrays["welcome.examples"]` | array | Welcome screen example cards; each item is an object with `text`, optional `image`, and optional `backgroundColor` (hex string). |
| `arrays["welcome.examples"][].text` | string | Card display text |
| `arrays["welcome.examples"][].image` | string | Card image URL (optional; may be `null` or omitted). |
| `arrays["welcome.examples"][].backgroundColor` | string | Card background color as hex string (optional; may be `null` or omitted). |

### Feedback Options

> You shouldn't have more than five options available for feedback.
>
> Always test your values on device to ensure the UI looks as desired.

| JSON Key | Type | Description |
|----------|------|-------------|
| `arrays["feedback.positive.options"]` | array | Positive feedback checkbox options; array of strings. |
| `arrays["feedback.negative.options"]` | array | Negative feedback checkbox options; array of strings. |

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

Icon and image asset configuration.

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `assets.icons.company` | string | `""` | Company logo (SVG string or URL) |

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

Visual styling using CSS-like variable names. All properties in the `theme` object use the `--property-name` format.

### Typography

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--font-family` | `typography.fontFamily` | `String` | `""` (system font) | Font family name |
| `--line-height-body` | `typography.lineHeight` | `CGFloat` | `1.0` | Line height multiplier |

### Colors - Primary

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--color-primary` | `colors.primary.primary` | `Color` | `accentColor` | Primary brand color |
| `--color-text` | `colors.primary.text` | `Color` | `primary` | Primary text color |

### Colors - Surface

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--main-container-background` | `colors.surface.mainContainerBackground` | `Color` | `systemBackground` | Main container background |
| `--main-container-bottom-background` | `colors.surface.mainContainerBottomBackground` | `Color` | `systemBackground` | Bottom container background |
| `--message-blocker-background` | `colors.surface.messageBlockerBackground` | `Color` | `systemBackground` | Message blocker overlay |

### Colors - Messages

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--message-user-background` | `colors.message.userBackground` | `Color` | `secondarySystemBackground` | User message bubble background |
| `--message-user-text` | `colors.message.userText` | `Color` | `primary` | User message text color |
| `--message-concierge-background` | `colors.message.conciergeBackground` | `Color` | `systemBackground` | AI message bubble background |
| `--message-concierge-text` | `colors.message.conciergeText` | `Color` | `primary` | AI message text color |
| `--message-concierge-link-color` | `colors.message.conciergeLink` | `Color` | `accentColor` | Link color in AI messages |

### Colors - Buttons

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--button-primary-background` | `colors.button.primaryBackground` | `Color` | `accentColor` | Primary button background |
| `--button-primary-text` | `colors.button.primaryText` | `Color` | `white` | Primary button text |
| `--button-secondary-border` | `colors.button.secondaryBorder` | `Color` | `primary` | Secondary button border |
| `--button-secondary-text` | `colors.button.secondaryText` | `Color` | `primary` | Secondary button text |
| `--submit-button-fill-color` | `colors.button.submitFill` | `Color` | `clear` | Submit button fill |
| `--submit-button-fill-color-disabled` | `colors.button.submitFillDisabled` | `Color` | `clear` | Disabled submit button fill |
| `--color-button-submit` | `colors.button.submitText` | `Color` | `accentColor` | Submit button icon/text color |
| `--button-disabled-background` | `colors.button.disabledBackground` | `Color` | `clear` | Disabled button background |

### Colors - Input

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--input-background` | `colors.input.background` | `Color` | `white` | Input field background |
| `--input-text-color` | `colors.input.text` | `Color` | `primary` | Input text color |
| `--input-outline-color` | `colors.input.outline` | `Color?` | `nil` | Input border color |
| `--input-focus-outline-color` | `colors.input.outlineFocus` | `Color` | `accentColor` | Focused input border color |

### Colors - Input Icons

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--input-send-icon-color` | `colors.input.sendIconColor` | `Color?` | `nil` | Default send button icon tint |
| `--input-send-arrow-icon-color` | `colors.input.sendArrowIconColor` | `Color?` | `nil` | Arrow-style send button arrow color |
| `--input-send-arrow-background-color` | `colors.input.sendArrowBackgroundColor` | `Color?` | `nil` | Arrow-style send button circle background |
| `--input-mic-icon-color` | `colors.input.micIconColor` | `Color?` | `nil` | Mic button icon tint. Falls back to `--color-primary`. |
| `--input-mic-recording-icon-color` | `colors.input.micRecordingIconColor` | `Color?` | `nil` | Stop/recording button icon color. Falls back to white. |

### Colors - Welcome Prompts

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--welcome-prompt-background-color` | `colors.welcomePrompt.backgroundColor` | `Color?` | `nil` | Welcome prompt card background. Falls back to card's `backgroundColor` from `arrays["welcome.examples"]`. |
| `--welcome-prompt-text-color` | `colors.welcomePrompt.textColor` | `Color?` | `nil` | Welcome prompt text color. Falls back to `--color-text`. |

### Colors - Citations

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--citations-background-color` | `colors.citation.background` | `Color` | `systemGray3` | Citation pill background |
| `--citations-text-color` | `colors.citation.text` | `Color` | `primary` | Citation text color |

### Colors - Feedback

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--feedback-icon-btn-background` | `colors.feedback.iconButtonBackground` | `Color` | `clear` | Feedback button background |

### Colors - Product Card

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--product-card-background-color` | `colors.productCard.backgroundColor` | `Color` | `white` | Product card background |
| `--product-card-title-color` | `colors.productCard.titleColor` | `Color` | `primary` | Product title text color |
| `--product-card-subtitle-color` | `colors.productCard.subtitleColor` | `Color` | `primary` | Product subtitle text color |
| `--product-card-price-color` | `colors.productCard.priceColor` | `Color` | `primary` | Product price text color |
| `--product-card-was-price-color` | `colors.productCard.wasPriceColor` | `Color` | `secondary` | Strikethrough "was" price text color |
| `--product-card-badge-text-color` | `colors.productCard.badgeTextColor` | `Color` | `white` | Badge label text color |
| `--product-card-badge-background-color` | `colors.productCard.badgeBackgroundColor` | `Color` | `primary` | Badge background color |
| `--product-card-outline-color` | `colors.productCard.outlineColor` | `Color` | `clear` | Card border/outline color |

### Colors - CTA Button

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--cta-button-background-color` | `colors.ctaButton.background` | `Color` | `#EDEDED` | CTA button pill background |
| `--cta-button-text-color` | `colors.ctaButton.text` | `Color` | `#191F1C` | CTA button label text color |
| `--cta-button-icon-color` | `colors.ctaButton.iconColor` | `Color` | `#161313` | CTA button icon tint |

### Colors - Disclaimer

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--disclaimer-color` | `colors.disclaimer` | `Color` | `systemGray` | Disclaimer text color |

### Layout - Input

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--input-height-mobile` | `layout.inputHeight` | `CGFloat` | `52` | Input field height |
| `--input-border-radius-mobile` | `layout.inputBorderRadius` | `CGFloat` | `12` | Input field corner radius |
| `--input-outline-width` | `layout.inputOutlineWidth` | `CGFloat` | `2` | Input border width |
| `--input-focus-outline-width` | `layout.inputFocusOutlineWidth` | `CGFloat` | `2` | Focused input border width |
| `--input-font-size` | `layout.inputFontSize` | `CGFloat` | `16` | Input text font size |
| `--input-button-height` | `layout.inputButtonHeight` | `CGFloat` | `30` | Input button height |
| `--input-button-width` | `layout.inputButtonWidth` | `CGFloat` | `30` | Input button width |
| `--input-button-border-radius` | `layout.inputButtonBorderRadius` | `CGFloat` | `8` | Input button corner radius |
| `--input-box-shadow` | `layout.inputBoxShadow` | `Shadow` | `none` | Input field shadow |

### Layout - Messages

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--message-border-radius` | `layout.messageBorderRadius` | `CGFloat` | `10` | Message bubble corner radius |
| `--message-padding` | `layout.messagePadding` | `Padding` | `8px 16px` | Message content padding |
| `--message-max-width` | `layout.messageMaxWidth` | `CGFloat?` | `nil` | Max message width |

### Layout - Chat

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--chat-interface-max-width` | `layout.chatInterfaceMaxWidth` | `CGFloat` | `768` | Max chat interface width |
| `--chat-history-padding` | `layout.chatHistoryPadding` | `CGFloat` | `16` | Chat history horizontal padding. Applied per-message; also serves as the default fallback for `--product-card-carousel-horizontal-padding` when that property is not set. |
| `--chat-history-padding-top-expanded` | `layout.chatHistoryPaddingTopExpanded` | `CGFloat` | `8` | Top padding when expanded |
| `--chat-history-bottom-padding` | `layout.chatHistoryBottomPadding` | `CGFloat` | `12` | Bottom padding |
| `--message-blocker-height` | `layout.messageBlockerHeight` | `CGFloat` | `105` | Message blocker overlay height |

### Layout - Cards & Carousel

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--border-radius-card` | `layout.borderRadiusCard` | `CGFloat` | `16` | Card corner radius |
| `--multimodal-card-box-shadow` | `layout.multimodalCardBoxShadow` | `Shadow` | `0 1px 3px 0 #00000033` | Card shadow |

### Layout - Buttons

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--button-height-s` | `layout.buttonHeightSmall` | `CGFloat` | `30` | Small button height |

### Layout - Feedback

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--feedback-container-gap` | `layout.feedbackContainerGap` | `CGFloat` | `4` | Gap between feedback buttons |
| `--feedback-icon-btn-size-desktop` | `layout.feedbackIconButtonSize` | `CGFloat` | `44` | Feedback button hit target size |

### Layout - Citations

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--citations-text-font-weight` | `layout.citationsTextFontWeight` | `FontWeight` | `bold` | Citation text weight |
| `--citations-desktop-button-font-size` | `layout.citationsDesktopButtonFontSize` | `CGFloat` | `14` | Citation button font size |

### Layout - Disclaimer

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--disclaimer-font-size` | `layout.disclaimerFontSize` | `CGFloat` | `12` | Disclaimer font size |
| `--disclaimer-font-weight` | `layout.disclaimerFontWeight` | `FontWeight` | `regular` | Disclaimer font weight |

### Layout - Product Card

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--product-card-width` | `layout.productCardWidth` | `CGFloat` | `250` | Card width in points |
| `--product-card-height` | `layout.productCardHeight` | `CGFloat` | `300` | Card height in points |
| `--product-card-title-font-size` | `layout.productCardTitleFontSize` | `CGFloat` | `14` | Title font size |
| `--product-card-title-font-weight` | `layout.productCardTitleFontWeight` | `FontWeight` | `bold` | Title font weight |
| `--product-card-subtitle-font-size` | `layout.productCardSubtitleFontSize` | `CGFloat` | `12` | Subtitle font size |
| `--product-card-subtitle-font-weight` | `layout.productCardSubtitleFontWeight` | `FontWeight` | `regular` | Subtitle font weight |
| `--product-card-price-font-size` | `layout.productCardPriceFontSize` | `CGFloat` | `14` | Price font size |
| `--product-card-price-font-weight` | `layout.productCardPriceFontWeight` | `FontWeight` | `light` | Price font weight |
| `--product-card-badge-font-size` | `layout.productCardBadgeFontSize` | `CGFloat` | `12` | Badge font size |
| `--product-card-badge-font-weight` | `layout.productCardBadgeFontWeight` | `FontWeight` | `semibold` | Badge font weight |
| `--product-card-was-price-text-prefix` | `layout.productCardWasPriceTextPrefix` | `String` | `"was "` | Text prefix before the strikethrough "was" price |
| `--product-card-was-price-font-size` | `layout.productCardWasPriceFontSize` | `CGFloat` | `12` | "Was" price font size |
| `--product-card-was-price-font-weight` | `layout.productCardWasPriceFontWeight` | `FontWeight` | `regular` | "Was" price font weight |
| `--product-card-text-spacing` | `layout.productCardTextSpacing` | `CGFloat` | `8` | Vertical spacing between text elements (title, subtitle, price) |
| `--product-card-text-top-padding` | `layout.productCardTextTopPadding` | `CGFloat` | `20` | Top padding above the text section |
| `--product-card-text-bottom-padding` | `layout.productCardTextBottomPadding` | `CGFloat` | `12` | Bottom padding below the text section |
| `--product-card-text-horizontal-padding` | `layout.productCardTextHorizontalPadding` | `CGFloat` | `12` | Horizontal padding on both sides of the text area (does not apply to badge or image) |
| `--product-card-carousel-spacing` | `layout.productCardCarouselSpacing` | `CGFloat` | `12` | Horizontal spacing between cards in a scrolling carousel |
| `--product-card-carousel-horizontal-padding` | `layout.productCardCarouselHorizontalPadding` | `CGFloat?` | `nil` | Horizontal padding for the carousel container. When `nil`, falls back to `chatHistoryPadding`. |

### Layout - CTA Button

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--cta-button-border-radius` | `layout.ctaButtonBorderRadius` | `CGFloat` | `99` | Corner radius (keep ≥ 20 for pill shape) |
| `--cta-button-horizontal-padding` | `layout.ctaButtonHorizontalPadding` | `CGFloat` | `16` | Left/right inner padding |
| `--cta-button-vertical-padding` | `layout.ctaButtonVerticalPadding` | `CGFloat` | `12` | Top/bottom inner padding |
| `--cta-button-font-size` | `layout.ctaButtonFontSize` | `CGFloat` | `14` | Label font size |
| `--cta-button-font-weight` | `layout.ctaButtonFontWeight` | `FontWeight` | `regular` | Label font weight |
| `--cta-button-icon-size` | `layout.ctaButtonIconSize` | `CGFloat` | `16` | External link icon width/height |

### Layout - Welcome Screen Order

### Layout - Header

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--header-title-font-size` | `layout.headerTitleFontSize` | `CGFloat?` | `nil` | Header title font size. When `nil`, uses the default system `.title3` size. |

### Layout - Welcome Screen

| CSS Variable | Swift Property | Type | Default | Description |
|--------------|----------------|------|---------|-------------|
| `--welcome-input-order` | `layout.welcomeInputOrder` | `Int` | `3` | Input field display order |
| `--welcome-cards-order` | `layout.welcomeCardsOrder` | `Int` | `2` | Example cards display order |
| `--welcome-title-font-size` | `layout.welcomeTitleFontSize` | `CGFloat?` | `nil` | Welcome heading font size. When `nil`, defaults to `22`. |
| `--welcome-text-align` | `layout.welcomeTextAlign` | `String?` | `nil` | Welcome heading/body text alignment (`"left"`, `"center"`). When `nil`, defaults to left. |
| `--welcome-content-padding` | `layout.welcomeContentPadding` | `CGFloat?` | `nil` | Horizontal padding around welcome header content. |
| `--welcome-prompt-image-size` | `layout.welcomePromptImageSize` | `CGFloat?` | `nil` | Width and height of prompt suggestion thumbnail images. Defaults to `90`. |
| `--welcome-prompt-spacing` | `layout.welcomePromptSpacing` | `CGFloat?` | `nil` | Vertical spacing between prompt suggestion cards. |
| `--welcome-title-bottom-spacing` | `layout.welcomeTitleBottomSpacing` | `CGFloat?` | `nil` | Spacing below the welcome heading. Defaults to `10`. |
| `--welcome-prompts-top-spacing` | `layout.welcomePromptsTopSpacing` | `CGFloat?` | `nil` | Spacing above the prompt suggestions section. |
| `--welcome-prompt-padding` | `layout.welcomePromptPadding` | `CGFloat?` | `nil` | Padding around each prompt suggestion card. |
| `--welcome-prompt-corner-radius` | `layout.welcomePromptCornerRadius` | `CGFloat?` | `nil` | Corner radius of prompt suggestion cards. Falls back to `--border-radius-card`. |

---

## Complete Example

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
      "cardClickAction": "openLink",
      "carouselStyle": "paged"
    },
    "input": {
      "enableVoiceInput": true,
      "disableMultiline": false,
      "showAiChatIcon": null,
      "sendButtonStyle": "default",
      "silenceThreshold": 0.02,
      "silenceDuration": 2
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "productCard": {
      "cardStyle": "productDetail"
    },
    "welcomeCard": {
      "closeButtonAlignment": "end",
      "promptFullWidth": true,
      "promptMaxLines": 3,
      "contentAlignment": "top"
    },
    "feedback": {
      "displayMode": "modal",
      "thumbsPlacement": "inline"
    },
    "citations": {
      "showLinkIcon": false
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
    "feedback.dialog.cancel": "Cancel",
    "header.title": "",
    "header.subtitle": "",
    "sourcesLabel": "Sources",
    "feedbackHelpfulLabel": "Was this helpful?"
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
    "--citations-desktop-button-font-size": "12px",
    "--product-card-background-color": "#FFFFFF",
    "--product-card-title-color": "#292929",
    "--product-card-title-font-size": "14px",
    "--product-card-title-font-weight": "700",
    "--product-card-subtitle-color": "#292929",
    "--product-card-subtitle-font-size": "12px",
    "--product-card-subtitle-font-weight": "400",
    "--product-card-price-color": "#292929",
    "--product-card-price-font-size": "16px",
    "--product-card-price-font-weight": "300",
    "--product-card-was-price-color": "#6E6E6E",
    "--product-card-was-price-text-prefix": "was ",
    "--product-card-was-price-font-size": "12px",
    "--product-card-was-price-font-weight": "400",
    "--product-card-badge-text-color": "#FFFFFF",
    "--product-card-badge-background-color": "#000000",
    "--product-card-badge-font-size": "12px",
    "--product-card-badge-font-weight": "600",
    "--product-card-outline-color": "#00000000",
    "--product-card-width": "200px",
    "--product-card-height": "300px",
    "--product-card-text-spacing": "8px",
    "--product-card-text-top-padding": "20px",
    "--product-card-text-bottom-padding": "12px",
    "--product-card-text-horizontal-padding": "12px",
    "--product-card-carousel-spacing": "12px",
    "--product-card-carousel-horizontal-padding": "4px",
    "--cta-button-background-color": "#EDEDED",
    "--cta-button-text-color": "#191F1C",
    "--cta-button-icon-color": "#161313",
    "--cta-button-border-radius": "99px",
    "--cta-button-horizontal-padding": "16px",
    "--cta-button-vertical-padding": "12px",
    "--cta-button-font-size": "14px",
    "--cta-button-font-weight": "400",
    "--cta-button-icon-size": "16px",
    "--header-title-font-size": "18px",
    "--input-send-icon-color": "",
    "--input-send-arrow-icon-color": "",
    "--input-send-arrow-background-color": "",
    "--input-mic-icon-color": "",
    "--input-mic-recording-icon-color": "",
    "--welcome-prompt-background-color": "",
    "--welcome-prompt-text-color": "",
    "--welcome-title-font-size": "22px",
    "--welcome-text-align": "left",
    "--welcome-content-padding": "0px",
    "--welcome-prompt-image-size": "90px",
    "--welcome-prompt-spacing": "8px",
    "--welcome-title-bottom-spacing": "10px",
    "--welcome-prompts-top-spacing": "8px",
    "--welcome-prompt-padding": "0px",
    "--welcome-prompt-corner-radius": "16px"
  }
}
```

---

## Implementation Status

This section documents which properties are fully implemented, partially implemented, or not yet implemented in the iOS framework.

### Legend

| Status | Description |
|--------|-------------|
| ✅ | Fully implemented - property is mapped and actively used in views |
| ⚠️ | Defined but unused - property is parsed but not rendered in any view |
| ❌ | Not supported - property exists in web JSON but is ignored by iOS |

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
| `behavior.multimodalCarousel.carouselStyle` | ✅ | Controls carousel scroll style (paged vs scroll) in CarouselGroupView |
| `behavior.productCard.cardStyle` | ✅ | Selects product card rendering (actionButton vs productDetail) in ChatMessageView |
| `behavior.input.enableVoiceInput` | ✅ | Controls mic button visibility |
| `behavior.input.disableMultiline` | ✅ | Controls input line limit |
| `behavior.input.showAiChatIcon` | ⚠️ | Parsed and mapped to component but not rendered |
| `behavior.input.sendButtonStyle` | ✅ | Controls send button style (default vs arrow) in ComposerEditingView |
| `behavior.input.silenceThreshold` | ✅ | Voice capture: RMS threshold for speech vs silence in SpeechCapturer |
| `behavior.input.silenceDuration` | ✅ | Voice capture: auto-stop delay after silence in SpeechCapturer |
| `behavior.welcomeCard.closeButtonAlignment` | ✅ | Controls close button placement in ChatTopBar |
| `behavior.welcomeCard.promptFullWidth` | ✅ | Controls prompt card layout (full-width vs compact chip) in ChatMessageView |
| `behavior.welcomeCard.promptMaxLines` | ✅ | Controls max text lines in prompt cards |
| `behavior.welcomeCard.contentAlignment` | ✅ | Controls welcome content vertical alignment |
| `behavior.feedback.displayMode` | ✅ | Controls feedback presentation: `"modal"` (centered) vs `"action"` (action sheet) in FeedbackOverlayView |
| `behavior.feedback.thumbsPlacement` | ✅ | Controls thumbs placement (inline vs below) in SourcesListView |
| `behavior.citations.showLinkIcon` | ✅ | Controls external link icon visibility in SourceRowView |
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
| `text["header.title"]` | ✅ | Used in ChatTopBar, overrides programmatic title when non-empty |
| `text["header.subtitle"]` | ✅ | Used in ChatTopBar, overrides programmatic subtitle when non-empty |
| `text["sourcesLabel"]` | ✅ | Used in SourcesListView for accordion header label |
| `text["feedbackHelpfulLabel"]` | ✅ | Used in SourcesListView when thumbsPlacement is "below" |

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

### Theme Tokens - Typography

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--font-family` | ✅ | Used in ChatView, ComposerEditingView |
| `--line-height-body` | ✅ | Used in ChatMessageView for basic message bubble line spacing |

### Theme Tokens - Colors

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
| `--input-text-color` | ✅ | Used in ComposerEditingView via components.inputBar.textColor |
| `--input-outline-color` | ✅ | Used in ChatComposer via components.inputBar.border.color |
| `--input-focus-outline-color` | ✅ | Used in ChatComposer |
| `--citations-background-color` | ✅ | Used in MarkdownBlockView |
| `--citations-text-color` | ✅ | Used in MarkdownBlockView |
| `--feedback-icon-btn-background` | ✅ | Used in SourcesListView |
| `--disclaimer-color` | ✅ | Used in ComposerDisclaimer via components.disclaimer.textColor |
| `--input-send-icon-color` | ✅ | Used in ComposerSendButtonStyle |
| `--input-send-arrow-icon-color` | ✅ | Used in ComposerEditingView for arrow-style send button |
| `--input-send-arrow-background-color` | ✅ | Used in ComposerEditingView for arrow-style send button |
| `--input-mic-icon-color` | ✅ | Used in ComposerEditingView |
| `--input-mic-recording-icon-color` | ✅ | Used in ComposerEditingView for stop recording button |
| `--welcome-prompt-background-color` | ✅ | Used in ChatMessageView for prompt suggestion cards |
| `--welcome-prompt-text-color` | ✅ | Used in ChatMessageView for prompt suggestion text |

### Theme Tokens - Colors (CTA Button)

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--cta-button-background-color` | ✅ | Used in CtaButtonView |
| `--cta-button-text-color` | ✅ | Used in CtaButtonView |
| `--cta-button-icon-color` | ✅ | Used in CtaButtonView |

### Theme Tokens - Colors (Product Card)

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--product-card-background-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-title-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-subtitle-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-price-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-was-price-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-badge-text-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-badge-background-color` | ✅ | Used in ProductDetailCardView |
| `--product-card-outline-color` | ✅ | Used in ProductDetailCardView |

### Theme Tokens - Layout

| CSS Variable | Status | Notes |
|--------------|--------|-------|
| `--input-height-mobile` | ✅ | Used in ChatComposer |
| `--input-border-radius-mobile` | ✅ | Used in ChatComposer |
| `--input-outline-width` | ✅ | Used in ChatComposer via components.inputBar.border.width |
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
| `--chat-history-padding` | ✅ | Applied per-message in MessageListView; also used as fallback for carousel horizontal padding |
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
| `--disclaimer-font-size` | ✅ | Used in ComposerDisclaimer via components.disclaimer.fontSize |
| `--disclaimer-font-weight` | ✅ | Used in ComposerDisclaimer via components.disclaimer.fontWeight |
| `--welcome-input-order` | ⚠️ | Mapped but welcome layout not customizable |
| `--welcome-cards-order` | ⚠️ | Mapped but welcome layout not customizable |
| `--header-title-font-size` | ✅ | Used in ChatTopBar for header title font size |
| `--welcome-title-font-size` | ✅ | Used in ChatMessageView for welcome heading size |
| `--welcome-text-align` | ✅ | Used in ChatMessageView for welcome text alignment |
| `--welcome-content-padding` | ✅ | Used in ChatMessageView for welcome header padding |
| `--welcome-prompt-image-size` | ✅ | Used in ChatMessageView for prompt thumbnail dimensions |
| `--welcome-prompt-spacing` | ✅ | Used in MessageListView for spacing between prompt cards |
| `--welcome-title-bottom-spacing` | ✅ | Used in ChatMessageView for spacing below welcome heading |
| `--welcome-prompts-top-spacing` | ✅ | Used in MessageListView for spacing above prompts section |
| `--welcome-prompt-padding` | ✅ | Used in ChatMessageView for prompt card padding |
| `--welcome-prompt-corner-radius` | ✅ | Used in ChatMessageView for prompt card corner radius |
| `--product-card-width` | ✅ | Used in ProductDetailCardView, CarouselGroupView |
| `--product-card-height` | ✅ | Used in ProductDetailCardView, CarouselGroupView |
| `--product-card-title-font-size` | ✅ | Used in ProductDetailCardView |
| `--product-card-title-font-weight` | ✅ | Used in ProductDetailCardView |
| `--product-card-subtitle-font-size` | ✅ | Used in ProductDetailCardView |
| `--product-card-subtitle-font-weight` | ✅ | Used in ProductDetailCardView |
| `--product-card-price-font-size` | ✅ | Used in ProductDetailCardView |
| `--product-card-price-font-weight` | ✅ | Used in ProductDetailCardView |
| `--product-card-badge-font-size` | ✅ | Used in ProductDetailCardView |
| `--product-card-badge-font-weight` | ✅ | Used in ProductDetailCardView |
| `--product-card-was-price-text-prefix` | ✅ | Used in ProductDetailCardView |
| `--product-card-was-price-font-size` | ✅ | Used in ProductDetailCardView |
| `--product-card-was-price-font-weight` | ✅ | Used in ProductDetailCardView |
| `--product-card-text-spacing` | ✅ | Used in ProductDetailCardView |
| `--product-card-text-top-padding` | ✅ | Used in ProductDetailCardView |
| `--product-card-text-bottom-padding` | ✅ | Used in ProductDetailCardView |
| `--product-card-text-horizontal-padding` | ✅ | Used in ProductDetailCardView |
| `--product-card-carousel-spacing` | ✅ | Used in CarouselGroupView for spacing between cards |
| `--product-card-carousel-horizontal-padding` | ✅ | Used in MessageListView; falls back to `chatHistoryPadding` when not set |
| `--cta-button-border-radius` | ✅ | Used in CtaButtonView |
| `--cta-button-horizontal-padding` | ✅ | Used in CtaButtonView |
| `--cta-button-vertical-padding` | ✅ | Used in CtaButtonView |
| `--cta-button-font-size` | ✅ | Used in CtaButtonView |
| `--cta-button-font-weight` | ✅ | Used in CtaButtonView |
| `--cta-button-icon-size` | ✅ | Used in CtaButtonView |

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
