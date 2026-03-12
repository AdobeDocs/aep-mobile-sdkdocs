---
title: Brand Concierge style guide (Android)
description: Theming and customization reference for the Brand Concierge Android SDK.
keywords:
- Brand Concierge
- Android
- Style guide
- Theming
---

# Brand Concierge Style Guide (Android)

This document provides a comprehensive reference for all styling properties supported by the Brand Concierge Android SDK. Themes are configured using JSON files that follow a web-compatible CSS variable format.

<InlineAlert variant="warning" slots="text"/>

**Implementation Status**: While the theme system parses all CSS variables for web compatibility, not all properties are currently used in the Android UI. See the [Implementation Status](#implementation-status) section for detailed information on which properties are actively rendered versus defined but unused.

---

## Overview

The theme configuration is loaded from a JSON file using `ConciergeThemeLoader.load(context, filename)`. The framework supports CSS-like variable names (prefixed with `--`) that are automatically mapped to native Kotlin properties.

### Loading a theme

```kotlin
// Load from app assets
val theme = ConciergeThemeLoader.load(context, "theme-default")

// Use default theme
val defaultTheme = ConciergeThemeLoader.default()
```

### Applying a theme

Apply the theme using the `ConciergeTheme` composable:

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import com.adobe.marketing.mobile.concierge.ui.theme.ConciergeTheme
import com.adobe.marketing.mobile.concierge.ui.theme.ConciergeThemeLoader

@Composable
fun MyApp() {
    val context = LocalContext.current
    
    val theme = remember {
        ConciergeThemeLoader.load(context, "my-theme") 
            ?: ConciergeThemeLoader.default()
    }
    
    ConciergeTheme(theme = theme) {
        // Your app content here
        // Concierge UI components will use the theme
    }
}
```

You can also load themes by filename directly:

```kotlin
@Composable
fun MyApp() {
    ConciergeTheme(themeFileName = "my-theme.json") {
        // Your app content here
    }
}
```

### Applying a theme in XML/Views

For XML-based apps using `ConciergeChatView`, pass the theme when binding:

```kotlin
val theme = ConciergeThemeLoader.load(this, "my-theme")
chatView.bind(
    lifecycleOwner = this,
    viewModelStoreOwner = this,
    surfaces = surfaces,
    theme = theme,
    onClose = { finish() }
)
```

**Important:** The `ConciergeTheme` composable provides theme tokens to all child composables through CompositionLocal.

### Default theming

* **When no theme is loaded** (`theme = null`): The SDK uses built-in light or dark colors based on the device's light/dark setting.
* **When a theme is loaded**: The theme JSON always takes precedence.

---

## JSON structure

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

## Value formats

### Colors

Colors are specified as hex strings. Supported formats: `#RRGGBB` (6 digit hex) and `#RRGGBBAA` (8 digit hex with alpha).

### Dimensions

Dimensions use CSS pixel units (e.g. `"52px"` and `"100%"`).

### Padding

Padding follows CSS shorthand: `8px`, `8px 16px`, `8px 16px 4px`, `8px 16px 4px 2px`.

### Shadows

Shadows use CSS box-shadow syntax: `offsetX offsetY blurRadius spreadRadius color`.

### Font Weights

| Value | Name | Android FontWeight |
|-------|------|--------------------|
| `100` | `ultraLight` | `W100` |
| `400` / `normal` | `regular` | `Normal` |
| `700` / `bold` | `bold` | `Bold` |

### Text Alignment

| Value | Compose Equivalent |
|-------|-------------------|
| `left` | `TextAlign.Start` |
| `center` | `TextAlign.Center` |
| `right` | `TextAlign.End` |

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

### Multimodal Carousel

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.multimodalCarousel.cardClickAction` | String | `"openLink"` | Action when carousel card is tapped. Currently "openLink" is the only option. |
| `behavior.multimodalCarousel.carouselStyle` | String | `"paged"` | Carousel scroll style. `"paged"` snaps to one item at a time with prev/next buttons and page indicator dots. `"scroll"` provides continuous horizontal scrolling. |

### Input

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.input.enableVoiceInput` | Bool | `false` | Enable voice input button |
| `behavior.input.disableMultiline` | Bool | `true` | Disable multiline text input |
| `behavior.input.showAiChatIcon` | Object? | `null` | AI chat icon configuration |

### Chat

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.chat.messageAlignment` | String | `"left"` | Message alignment (`"left"`, `"center"`, `"right"`) |
| `behavior.chat.messageWidth` | String | `"100%"` | Max message width |

### Product Card

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.productCard.cardStyle` | String | `"actionButton"` | Rendering style for product cards. `"actionButton"` shows an image, description text, and primary/secondary action buttons. `"productDetail"` shows an image, optional badge, title, subtitle, and price — the entire card is tappable. |

### Privacy Notice

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.privacyNotice.title` | String | `"Privacy Notice"` | Privacy dialog title |
| `behavior.privacyNotice.text` | String | `"Privacy notice text."` | Privacy notice content |

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
      "showAiChatIcon": null
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "productCard": {
      "cardStyle": "productDetail"
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
| `disclaimer.text` | String | (see below) | Disclaimer text with `{placeholders}` for links |
| `disclaimer.links` | Array | One default Terms link if empty | Array of link objects |
| `disclaimer.links[].text` | String | `""` | Link display text (e.g. `Terms` for `{Terms}`) |
| `disclaimer.links[].url` | String | `""` | Link URL |

To hide the disclaimer, omit the `disclaimer` key or set `disclaimer.text` to an empty string.

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

Localized UI strings use dot-notation keys. Key groups:

* **Welcome Screen:** `welcome.heading`, `welcome.subheading`
* **Input:** `input.placeholder`, `input.messageInput.aria`, `input.send.aria`, `input.aiChatIcon.tooltip`, `input.mic.aria`
* **Cards & Carousel:** `card.aria.select`, `carousel.prev.aria`, `carousel.next.aria`
* **System Messages:** `scroll.bottom.aria`, `error.network`, `loading.message`
* **Feedback Dialog:** `feedback.dialog.title.positive`, `feedback.dialog.title.negative`, `feedback.dialog.question.positive`, `feedback.dialog.question.negative`, `feedback.dialog.notes`, `feedback.dialog.submit`, `feedback.dialog.cancel`, `feedback.dialog.notes.placeholder`, `feedback.toast.success`, `feedback.thumbsUp.aria`, `feedback.thumbsDown.aria`

You should test text values on target devices before deployment.

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

You should have no more than four items in welcome examples and no more than five options each for feedback. Test values on target devices to ensure the UI looks as desired.

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

Visual styling uses CSS-like variable names under the `theme` object (`--property-name` format).

### Typography

| CSS Variable | Kotlin Property | Type | Default |
|--------------|-----------------|------|---------|
| `--font-family` | `typography.fontFamily` | String | `null` (system font) |
| `--line-height-body` | `typography.lineHeight` | Double | `1.0` |

### Colors (summary)

* **Primary**: `--color-primary`, `--color-text`
* **Surface**: `--main-container-background`, `--main-container-bottom-background`, `--message-blocker-background`
* **Messages**: `--message-user-background`, `--message-user-text`, `--message-concierge-background`, `--message-concierge-text`, `--message-concierge-link-color`
* **Buttons**: `--button-primary-background`, `--button-primary-text`, `--button-secondary-border`, `--button-secondary-text`, etc.
* **Input**: `--input-background`, `--input-text-color`, `--input-outline-color`, `--input-focus-outline-color`
* **Citations**: `--citations-background-color`, `--citations-text-color`
* **Feedback**: `--feedback-icon-btn-background`, `--feedback-icon-btn-hover-background`
* **Product Card**: `--product-card-background-color`, `--product-card-title-color`, `--product-card-subtitle-color`, `--product-card-price-color`, `--product-card-was-price-color`, `--product-card-badge-text-color`, `--product-card-badge-background-color`, `--product-card-outline-color`
* **Disclaimer**: `--disclaimer-color`

### Layout (summary)

* **Input**: `--input-height-mobile`, `--input-border-radius-mobile`, `--input-outline-width`, `--input-font-size`, `--input-button-height`, etc.
* **Messages**: `--message-border-radius`, `--message-padding`, `--message-max-width`
* **Chat**: `--chat-interface-max-width`, `--chat-history-padding`, `--message-blocker-height`
* **Cards**: `--border-radius-card`, `--multimodal-card-box-shadow`
* **Buttons**: `--button-height-s`
* **Feedback**: `--feedback-container-gap`, `--feedback-icon-btn-size-desktop`
* **Citations**: `--citations-text-font-weight`, `--citations-desktop-button-font-size`
* **Disclaimer**: `--disclaimer-font-size`, `--disclaimer-font-weight`
* **Welcome order**: `--welcome-input-order`, `--welcome-cards-order`
* **Product Cards**: `--product-card-width`, `--product-card-height`, `--product-card-border-radius`, `--product-card-title-font-size`, `--product-card-title-font-weight`, `--product-card-subtitle-font-size`, `--product-card-subtitle-font-weight`, `--product-card-price-font-size`, `--product-card-price-font-weight`, `--product-card-badge-font-size`, `--product-card-badge-font-weight`, `--product-card-was-price-text-prefix`, `--product-card-was-price-font-size`, `--product-card-was-price-font-weight`, `--product-card-text-spacing`, `--product-card-text-top-padding`, `--product-card-text-bottom-padding`, `--product-card-text-horizontal-padding`, `--product-card-carousel-spacing`, `--product-card-carousel-horizontal-padding`

For the full list of theme tokens and Kotlin property mappings, see the [Brand Concierge Android Documentation](https://github.com/adobe/aepsdk-concierge-android/tree/dev/Documentation) repository.

---

## Complete Example

Place the theme file in your app's `assets` directory (e.g. `assets/my-theme.json`) and load it with `ConciergeThemeLoader.load(context, filename)` as shown in the [overview](#overview). For XML/Views, pass the loaded theme into `ConciergeChatView.bind(...)`.

The example below includes all available theme tokens. When `behavior.productCard.cardStyle` is set to `"productDetail"`, the `--product-card-*` variables take effect.

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
      "showAiChatIcon": null
    },
    "chat": {
      "messageAlignment": "left",
      "messageWidth": "100%"
    },
    "productCard": {
      "cardStyle": "productDetail"
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
    "--product-card-border-radius": "8px",
    "--product-card-text-spacing": "8px",
    "--product-card-text-top-padding": "20px",
    "--product-card-text-bottom-padding": "12px",
    "--product-card-text-horizontal-padding": "12px",
    "--product-card-carousel-spacing": "12px",
    "--product-card-carousel-horizontal-padding": "4px"
  }
}
```

---

## Implementation Status

This section documents which properties are fully implemented, partially implemented, or not yet implemented in the Android SDK based on actual usage in composables. See the [Brand Concierge Android Documentation](https://github.com/adobe/aepsdk-concierge-android/blob/dev/Documentation/style-guide.md#implementation-status) for the canonical source.

### Legend

| Status | Description |
|--------|-------------|
| ✅ | Fully implemented — property is mapped and actively used in composables |
| ⚠️ | Defined but unused — property is parsed but not rendered in any composable |
| ❌ | Not supported — property exists in web JSON but is ignored by Android |

### Implementation Summary

**Overall:**

* **Colors:** ~70% implemented (most core colors used; hover states not applicable on Android)
* **Typography:** ~60% implemented (`fontFamily` not yet supported)
* **Layout:** ~15% implemented (only outline widths and font sizes currently used)
* **Behavior:** ~10% implemented (only `enableVoiceInput`, `carouselStyle`, and `cardStyle` functional)
* **Text/Copy:** ~50% implemented (main strings used; accessibility labels not yet wired)

**Key differences from web/iOS:**

* Hover states are parsed but not applicable on Android
* Box shadows are parsed but not rendered
* Most layout dimensions are hardcoded
* Accessibility (aria) labels are parsed but not yet connected to content descriptions

### Metadata

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `metadata.brandName` | ⚠️ | Parsed but not used | — |
| `metadata.version` | ⚠️ | Parsed but not used | — |
| `metadata.language` | ⚠️ | Parsed but not used | — |
| `metadata.namespace` | ⚠️ | Parsed but not used | — |

### Behavior

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `behavior.multimodalCarousel.cardClickAction` | ⚠️ | Parsed but not implemented in carousel | — |
| `behavior.multimodalCarousel.carouselStyle` | ✅ | Controls carousel scroll style (`"paged"` or `"scroll"`) | `ProductCarousel` |
| `behavior.productCard.cardStyle` | ✅ | Selects product card rendering (`"actionButton"` vs `"productDetail"`) | `ChatMessageItem` |
| `behavior.input.enableVoiceInput` | ✅ | Controls mic button visibility | `InputActionButtons` |
| `behavior.input.disableMultiline` | ⚠️ | Parsed but not implemented | — |
| `behavior.input.showAiChatIcon` | ⚠️ | Parsed but not implemented | — |
| `behavior.chat.messageAlignment` | ⚠️ | Parsed but not implemented | — |
| `behavior.chat.messageWidth` | ⚠️ | Parsed but not implemented | — |
| `behavior.privacyNotice.title` | ⚠️ | Parsed but not implemented | — |
| `behavior.privacyNotice.text` | ⚠️ | Parsed but not implemented | — |

### Disclaimer

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `disclaimer.text` | ✅ | Rendered below chat input; default used if omitted | `ConciergeDisclaimer` |
| `disclaimer.links` | ✅ | Placeholders in text replaced by tappable links | `ConciergeDisclaimer` |

### Text (Copy)

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `text["welcome.heading"]` | ✅ | Welcome screen title | `WelcomeCard` |
| `text["welcome.subheading"]` | ✅ | Welcome screen description | `WelcomeCard` |
| `text["input.placeholder"]` | ✅ | Input field hint text | `ChatTextField` |
| `text["input.messageInput.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["input.send.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["input.aiChatIcon.tooltip"]` | ⚠️ | Parsed but not implemented | — |
| `text["input.mic.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["card.aria.select"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["carousel.prev.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["carousel.next.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["scroll.bottom.aria"]` | ⚠️ | Parsed but scroll button not implemented | — |
| `text["error.network"]` | ⚠️ | Parsed but error uses hardcoded text | — |
| `text["loading.message"]` | ✅ | Loading animation text | `ConciergeThinking` |
| `text["feedback.dialog.title.positive"]` | ✅ | Feedback dialog title (positive) | `FeedbackDialog` |
| `text["feedback.dialog.title.negative"]` | ✅ | Feedback dialog title (negative) | `FeedbackDialog` |
| `text["feedback.dialog.question.positive"]` | ✅ | Feedback question (positive) | `FeedbackDialog` |
| `text["feedback.dialog.question.negative"]` | ✅ | Feedback question (negative) | `FeedbackDialog` |
| `text["feedback.dialog.notes"]` | ✅ | Feedback dialog notes label | `FeedbackDialog` |
| `text["feedback.dialog.submit"]` | ✅ | Submit button text | `FeedbackDialog` |
| `text["feedback.dialog.cancel"]` | ✅ | Cancel button text | `FeedbackDialog` |
| `text["feedback.dialog.notes.placeholder"]` | ✅ | Notes placeholder | `FeedbackDialog` |
| `text["feedback.toast.success"]` | ⚠️ | Parsed but toast not implemented | — |
| `text["feedback.thumbsUp.aria"]` | ⚠️ | Parsed but not used for accessibility | — |
| `text["feedback.thumbsDown.aria"]` | ⚠️ | Parsed but not used for accessibility | — |

### Arrays

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `arrays["welcome.examples"]` | ✅ | Suggested prompts on welcome screen | `WelcomeCard` → `PromptSuggestions` |
| `arrays["feedback.positive.options"]` | ✅ | Positive feedback category options | `FeedbackDialog` |
| `arrays["feedback.negative.options"]` | ✅ | Negative feedback category options | `FeedbackDialog` |

### Assets

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `assets.icons.company` | ⚠️ | Parsed but not rendered | — |

### Theme Tokens — Typography

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--font-family` | ⚠️ | Parsed but not implemented | — |
| `--line-height-body` | ✅ | Body text line height | All text via `ConciergeStyles.withThemeTypography` |
| `--input-font-size` | ✅ | Input field text size | `ChatTextField` |
| `--citations-desktop-button-font-size` | ✅ | Citation pill text size | `CircularCitation` |
| `--disclaimer-font-size` | ✅ | Disclaimer text size | `ConciergeDisclaimer` |
| `--disclaimer-font-weight` | ✅ | Disclaimer font weight | `ConciergeDisclaimer` |

### Theme Tokens — Colors

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--color-primary` | ✅ | Primary brand color | Product buttons, feedback submit, mic icon, thinking animation |
| `--color-text` | ✅ | Primary text color | `ChatHeader`, `WelcomeCard`, prompt suggestions |
| `--main-container-background` | ✅ | Main chat and welcome background | `ChatScreen`, `WelcomeCard` |
| `--main-container-bottom-background` | ✅ | Bottom container background | Input area, voice panel |
| `--message-blocker-background` | ⚠️ | Parsed but not used | — |
| `--message-user-background` | ✅ | User message bubble | `ChatMessageItem` |
| `--message-user-text` | ✅ | User message text | `ChatMessageItem` |
| `--message-concierge-background` | ✅ | AI bubble, feedback dialog | `ChatMessageItem`, `FeedbackDialog` |
| `--message-concierge-text` | ✅ | AI text, feedback UI, citations, footer | Multiple composables |
| `--message-concierge-link-color` | ✅ | Links in AI content and citations | `ExpandedCitations`, message links |
| `--button-primary-background` | ✅ | Primary button background | `ProductActionButtons` |
| `--button-primary-text` | ✅ | Primary button text | `ProductActionButtons` |
| `--button-primary-hover` | ⚠️ | Parsed; no hover on Android | — |
| `--button-secondary-border` | ✅ | Secondary button border | `ProductActionButtons` |
| `--button-secondary-text` | ✅ | Secondary button text | `ProductActionButtons` |
| `--button-secondary-hover` | ⚠️ | Parsed; no hover on Android | — |
| `--color-button-secondary-hover-text` | ⚠️ | Parsed; no hover on Android | — |
| `--submit-button-fill-color` | ✅ | Feedback submit button background | `FeedbackDialog` |
| `--submit-button-fill-color-disabled` | ⚠️ | Parsed; disabled state not implemented | — |
| `--color-button-submit` | ✅ | Submit/send/mic icon color | `FeedbackDialog`, `InputActionButtons` |
| `--color-button-submit-hover` | ⚠️ | Parsed; no hover on Android | — |
| `--button-disabled-background` | ⚠️ | Parsed; disabled state not implemented | — |
| `--input-background` | ✅ | Input field background | `ChatInputPanel` |
| `--input-text-color` | ✅ | Input field text color | `ChatTextField`, `FeedbackDialog` |
| `--input-outline-color` | ✅ | Input border color | `ChatInputPanel` |
| `--input-focus-outline-color` | ✅ | Input focused border color | `ChatInputPanel` |
| `--citations-background-color` | ✅ | Citation pill background | `CircularCitation` |
| `--citations-text-color` | ✅ | Citation pill text | `CircularCitation` |
| `--feedback-icon-btn-background` | ✅ | Thumbs up/down background | `FeedbackComponents` |
| `--feedback-icon-btn-hover-background` | ⚠️ | Parsed; no hover on Android | — |
| `--disclaimer-color` | ✅ | Disclaimer text color | `ConciergeDisclaimer` |

### Theme Tokens — Colors (Product Card)

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--product-card-background-color` | ✅ | Card background | `ExtendedProductCard` |
| `--product-card-title-color` | ✅ | Product title text color | `ExtendedProductCard` |
| `--product-card-subtitle-color` | ✅ | Product subtitle text color | `ExtendedProductCard` |
| `--product-card-price-color` | ✅ | Product price text color | `ExtendedProductCard` |
| `--product-card-was-price-color` | ✅ | Strikethrough "was" price color | `ExtendedProductCard` |
| `--product-card-badge-text-color` | ✅ | Badge label text color | `ExtendedProductCard` |
| `--product-card-badge-background-color` | ✅ | Badge background color | `ExtendedProductCard` |
| `--product-card-outline-color` | ✅ | Card border/outline color | `ExtendedProductCard` |

### Theme Tokens — Layout

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--input-height-mobile` | ⚠️ | Parsed but not used | — |
| `--input-border-radius-mobile` | ⚠️ | Parsed but not used | — |
| `--input-outline-width` | ✅ | Input border width | `ChatInputPanel` |
| `--input-focus-outline-width` | ✅ | Input focused border width | `ChatInputPanel` |
| `--input-font-size` | ✅ | Input text size | `ChatTextField` |
| `--input-button-height` | ⚠️ | Parsed but not used | — |
| `--input-button-width` | ⚠️ | Parsed but not used | — |
| `--input-button-border-radius` | ⚠️ | Parsed but not used | — |
| `--input-box-shadow` | ⚠️ | Parsed; shadows not rendered | — |
| `--message-border-radius` | ⚠️ | Parsed but not used | — |
| `--message-padding` | ⚠️ | Parsed but not used | — |
| `--message-max-width` | ⚠️ | Parsed but not used | — |
| `--chat-interface-max-width` | ⚠️ | Parsed but not used | — |
| `--chat-history-padding` | ⚠️ | Parsed but not used | — |
| `--chat-history-padding-top-expanded` | ⚠️ | Parsed but not used | — |
| `--chat-history-bottom-padding` | ⚠️ | Parsed but not used | — |
| `--message-blocker-height` | ⚠️ | Parsed but not used | — |
| `--border-radius-card` | ⚠️ | Parsed but not used | — |
| `--multimodal-card-box-shadow` | ⚠️ | Parsed; shadows not rendered | — |
| `--button-height-s` | ⚠️ | Parsed but not used | — |
| `--feedback-container-gap` | ⚠️ | Parsed but not used | — |
| `--feedback-icon-btn-size-desktop` | ⚠️ | Parsed but not used | — |
| `--citations-text-font-weight` | ⚠️ | Parsed but not used | — |
| `--citations-desktop-button-font-size` | ✅ | Citation text size | `CircularCitation` |
| `--disclaimer-font-size` | ✅ | Disclaimer text size | `ConciergeDisclaimer` |
| `--disclaimer-font-weight` | ✅ | Disclaimer font weight | `ConciergeDisclaimer` |
| `--welcome-input-order` | ⚠️ | Parsed; welcome layout not customizable | — |
| `--welcome-cards-order` | ⚠️ | Parsed; welcome layout not customizable | — |

### Theme Tokens — Layout (Product Card)

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--product-card-width` | ✅ | Card width | `ExtendedProductCard`, `ProductCarousel` |
| `--product-card-height` | ✅ | Card height | `ExtendedProductCard`, `ProductCarousel` |
| `--product-card-border-radius` | ✅ | Card corner radius | `ExtendedProductCard` |
| `--product-card-title-font-size` | ✅ | Title font size | `ExtendedProductCard` |
| `--product-card-title-font-weight` | ✅ | Title font weight | `ExtendedProductCard` |
| `--product-card-subtitle-font-size` | ✅ | Subtitle font size | `ExtendedProductCard` |
| `--product-card-subtitle-font-weight` | ✅ | Subtitle font weight | `ExtendedProductCard` |
| `--product-card-price-font-size` | ✅ | Price font size | `ExtendedProductCard` |
| `--product-card-price-font-weight` | ✅ | Price font weight | `ExtendedProductCard` |
| `--product-card-badge-font-size` | ✅ | Badge font size | `ExtendedProductCard` |
| `--product-card-badge-font-weight` | ✅ | Badge font weight | `ExtendedProductCard` |
| `--product-card-was-price-text-prefix` | ✅ | Text prefix before strikethrough "was" price | `ExtendedProductCard` |
| `--product-card-was-price-font-size` | ✅ | "Was" price font size | `ExtendedProductCard` |
| `--product-card-was-price-font-weight` | ✅ | "Was" price font weight | `ExtendedProductCard` |
| `--product-card-text-spacing` | ✅ | Vertical spacing between text elements | `ExtendedProductCard` |
| `--product-card-text-top-padding` | ✅ | Top padding above text section | `ExtendedProductCard` |
| `--product-card-text-bottom-padding` | ✅ | Bottom padding below text section | `ExtendedProductCard` |
| `--product-card-text-horizontal-padding` | ✅ | Horizontal padding on text area | `ExtendedProductCard` |
| `--product-card-carousel-spacing` | ✅ | Spacing between cards in carousel | `ProductCarousel` |
| `--product-card-carousel-horizontal-padding` | ✅ | Horizontal padding for carousel container | `ProductCarousel` |

### Unsupported CSS Variables

These web theme variables are **not supported** on Android:

| CSS Variable | Notes |
|--------------|-------|
| `--input-height` | Use `--input-height-mobile` instead |
| `--input-border-radius` | Use `--input-border-radius-mobile` instead |
| `--message-alignment` | Use `behavior.chat.messageAlignment` instead |
| `--message-width` | Use `behavior.chat.messageWidth` instead |

### Fallback Colors (not theme-configurable)

The following colors from `LightConciergeColors` / `DarkConciergeColors` are hardcoded and **cannot be set in JSON themes**:

| Color | Purpose |
|-------|---------|
| `secondary` | Secondary accent (currently unused) |
| `onSurfaceVariant` | Muted text and icons |
| `container` | Card and container backgrounds |
| `outline` | Borders and separators |
| `error` / `onError` | Error state |
| `onSurface` | Primary text on surfaces |

### Recommendations for theme authors

**Focus on:**

* **Colors:** `--color-primary`, `--color-text`, `--main-container-background`, `--main-container-bottom-background`, message colors, button colors, `--input-background`, `--input-text-color`, `--input-outline-color`, `--input-focus-outline-color`, disclaimer and citation colors, `--feedback-icon-btn-background`
* **Text keys:** `welcome.heading`, `welcome.subheading`, `input.placeholder`, `loading.message`, and all `feedback.dialog.*`
* **Behavior:** `behavior.input.enableVoiceInput` to control the mic button; `behavior.multimodalCarousel.carouselStyle` for carousel scroll style; `behavior.productCard.cardStyle` to enable extended product detail cards
* **Layout/typography:** `--input-outline-width`, `--input-focus-outline-width`, `--input-font-size`, `--disclaimer-font-size`, `--citations-desktop-button-font-size`, `--line-height-body`
* **Product cards (when `cardStyle` is `"productDetail"`):** all `--product-card-*` color and layout variables

**Can be skipped:**

* Hover and box-shadow properties
* Most layout dimensions (currently hardcoded)
* Disabled states
* Accessibility labels (not yet wired)
* Welcome ordering (`--welcome-input-order`, `--welcome-cards-order`)
* `--font-family` (not implemented)
