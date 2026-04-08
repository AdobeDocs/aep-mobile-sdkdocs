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
    
    // Load theme from assets
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
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Load theme
        val theme = ConciergeThemeLoader.load(this, "my-theme")
        val surfaces = listOf("web://example.com/your-surface.html")
        
        val chatView = findViewById<ConciergeChatView>(R.id.concierge_chat)
        chatView.bind(
            lifecycleOwner = this,
            viewModelStoreOwner = this,
            surfaces = surfaces,
            theme = theme,
            onClose = { finish() }
        )
    }
}
```

**Important:** The `ConciergeTheme` composable provides theme tokens to all child composables through CompositionLocal.

### Default theming

* **When no theme is loaded** (`theme = null`): The SDK uses built-in light or dark colors (`LightConciergeColors` / `DarkConciergeColors`) based on the device’s light/dark setting.
* **When a theme is loaded** (`theme = <ConciergeThemeData>`): The theme JSON always takes precedence.

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
"--input-height-mobile": "52px"
"--input-border-radius-mobile": "12px"
```

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

| Value | Name | Android FontWeight |
|-------|------|--------------------|
| `100` | `ultraLight` | `W100` |
| `200` | `thin` | `W200` |
| `300` | `light` | `Light` |
| `400` / `normal` | `regular` | `Normal` |
| `500` | `medium` | `Medium` |
| `600` | `semibold` | `SemiBold` |
| `700` / `bold` | `bold` | `Bold` |
| `800` | `heavy` | `W800` |
| `900` | `black` | `Black` |

### Text Alignment

| Value | Compose Equivalent |
|-------|-------------------|
| `left` | `TextAlign.Start` |
| `center` | `TextAlign.Center` |
| `right` | `TextAlign.End` |

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
| `behavior.multimodalCarousel.carouselStyle` | string | `"paged"` | Carousel navigation style. `"paged"` = snap to item with prev/next buttons and page dots; `"scroll"` = continuous horizontal scroll with no paging controls. |

### Product Card

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.productCard.cardStyle` | string | `"actionButton"` | Product card layout. `"actionButton"` = image overlay with primary/secondary action buttons; `"productDetail"` = extended card with image, badge, name, subtitle, and price. |

### Input

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.input.enableVoiceInput` | boolean | `false` | Enable voice input button |
| `behavior.input.sendButtonStyle` | string | `"default"` | Send button style: `"default"` (paper airplane icon) or `"arrow"` (filled circle with upward arrow) |
| `behavior.input.disableMultiline` | boolean | `true` | Disable multiline text input |
| `behavior.input.showAiChatIcon` | object | `null` | AI chat icon configuration (JSON object). Present in shared theme JSON for web/iOS; ignored by the Android SDK. |

### Chat

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.chat.messageAlignment` | string | `"left"` | Message alignment (`"left"`, `"center"`, `"right"`) |
| `behavior.chat.messageWidth` | string | `"100%"` | Max message width (e.g., `"100%"`, `"768px"`) |

### Privacy Notice

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.privacyNotice.title` | string | `"Privacy Notice"` | Privacy dialog title |
| `behavior.privacyNotice.text` | string | `"Privacy notice text."` | Privacy notice content |

### Feedback

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.feedback.displayMode` | string | `"modal"` | Feedback dialog display mode. `"modal"` renders inline as a Modal overlay; `"action"` renders as an action sheet-style layout. |
| `behavior.feedback.thumbsPlacement` | string | `"inline"` | Thumbs up/down placement. `"inline"` places thumbs beside the sources label; `"below"` places them below the sources accordion with an optional label. |

### Citations

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.citations.showLinkIcon` | boolean | `false` | Show an external link icon next to citation URLs. |

### Welcome Card

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `behavior.welcomeCard.closeButtonAlignment` | string | `"end"` | Close button position: `"start"` (left of title) or `"end"` (right of title) |
| `behavior.welcomeCard.promptFullWidth` | boolean | `true` | `true` = full-width rows with image thumbnails; `false` = compact pill chips with icon |
| `behavior.welcomeCard.promptMaxLines` | number | `—` | Max lines for prompt text. When omitted, the Android SDK applies no limit. Set to `1` for uniform pill heights with ellipsis. |
| `behavior.welcomeCard.contentAlignment` | string | `"top"` | Welcome card vertical position: `"top"` (anchored to top) or `"center"` (vertically centered) |

> **Tip:** To hide the header subtitle, set `text["header.subtitle"]` to `""`. The subtitle is automatically hidden when its text is blank.

### Example

```json
{
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink",
      "carouselStyle": "scroll"
    },
    "productCard": {
      "cardStyle": "productDetail"
    },
    "input": {
      "enableVoiceInput": true,
      "sendButtonStyle": "default",
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
    },
    "feedback": {
      "displayMode": "action",
      "thumbsPlacement": "below"
    },
    "citations": {
      "showLinkIcon": true
    },
    "welcomeCard": {
      "closeButtonAlignment": "start",
      "promptFullWidth": false,
      "promptMaxLines": 1,
      "contentAlignment": "top"
    }
  }
}
```

---

## Disclaimer

Legal disclaimer text with embedded links.

| JSON Key | Type | Default | Description |
|----------|------|---------|-------------|
| `disclaimer.text` | string | `"AI responses may be inaccurate. Check answers and sources. {Terms}"` | Disclaimer text with `{placeholders}` for links |
| `disclaimer.links` | array | One default Terms link if empty | Array of link objects; each item has string properties `text` and `url`. |
| `disclaimer.links[].text` | string | `""` | Link display text (matches placeholder, e.g. `Terms` for `{Terms}`) |
| `disclaimer.links[].url` | string | `""` | Link URL (opened when the user taps the link) |

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

To hide the disclaimer, omit the `disclaimer` key from the theme or set `disclaimer.text` to an empty string.

---

## Text (Copy)

Localized UI strings using dot-notation keys.

### ✅ Content Recommendations

While there are no strict requirements for character limits in many of these text fields, it is **_strongly_** recommended that the values be tested on target device(s) prior to deployment, ensuring the UI renders as desired.

### Header

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["header.title"]` | `"Concierge"` | Header title text |
| `text["header.subtitle"]` | `"Powered by Adobe"` | Header subtitle text |

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

### Sources & Feedback Footer

| JSON Key | Default | Description |
|----------|---------|-------------|
| `text["sourcesLabel"]` | `"Sources"` | Accordion label for the sources/feedback section |
| `text["feedbackHelpfulLabel"]` | `"Was this helpful?"` | Label shown above feedback thumbs when `behavior.feedback.thumbsPlacement` is `"below"`. Set to `""` to hide. |

### Example

```json
{
  "text": {
    "welcome.heading": "Welcome to Brand Concierge!",
    "welcome.subheading": "I'm your personal guide to help you explore.",
    "input.placeholder": "How can I help?",
    "error.network": "I'm sorry, I'm having trouble connecting.",
    "loading.message": "Generating response from our knowledge base...",
    "feedbackHelpfulLabel": "Was this helpful?",
    "sourcesLabel": "Sources & Feedback",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.title.negative": "Your feedback is appreciated",
    "feedback.dialog.question.positive": "What went well? Select all that apply.",
    "feedback.dialog.question.negative": "What went wrong? Select all that apply.",
    "feedback.dialog.notes": "Notes",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Additional notes (optional)",
    "feedback.toast.success": "Thank you for the feedback."
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

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--font-family` | `typography.fontFamily` | `String` | `null` (system font) | Font family name |
| `--line-height-body` | `typography.lineHeight` | `Double` | `1.0` | Line height multiplier |

### Colors - Primary

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--color-primary` | `colors.primaryColors.primary` | `String` | `"#1976D2"` | Primary brand color (hex) |
| `--color-text` | `colors.primaryColors.text` | `String` | `"#000000"` | Primary text color (hex) |

### Colors - Surface

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--main-container-background` | `colors.surfaceColors.mainContainerBackground` | `String` | `"#FFFFFF"` | Main container background (hex) |
| `--main-container-bottom-background` | `colors.surfaceColors.mainContainerBottomBackground` | `String` | `"#FFFFFF"` | Bottom container background (hex) |
| `--message-blocker-background` | `colors.surfaceColors.messageBlockerBackground` | `String` | `"#FFFFFF"` | Message blocker overlay (hex) |

### Colors - Messages

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--message-user-background` | `colors.message.userBackground` | `String` | `"#E3F2FD"` | User message bubble background (hex) |
| `--message-user-text` | `colors.message.userText` | `String` | `"#000000"` | User message text color (hex) |
| `--message-concierge-background` | `colors.message.conciergeBackground` | `String` | `"#F5F5F5"` | AI message bubble background (hex) |
| `--message-concierge-text` | `colors.message.conciergeText` | `String` | `"#000000"` | AI message text color (hex) |
| `--message-concierge-link-color` | `colors.message.conciergeLink` | `String` | `"#1976D2"` | Link color in AI messages (hex) |

### Colors - Buttons

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--button-primary-background` | `colors.button.primaryBackground` | `String` | `"#1976D2"` | Primary button background (hex) |
| `--button-primary-text` | `colors.button.primaryText` | `String` | `"#FFFFFF"` | Primary button text (hex) |
| `--button-primary-hover` | `colors.button.primaryHover` | `String` | `"#1565C0"` | Primary button hover state (hex) |
| `--button-secondary-border` | `colors.button.secondaryBorder` | `String` | `"#1976D2"` | Secondary button border (hex) |
| `--button-secondary-text` | `colors.button.secondaryText` | `String` | `"#1976D2"` | Secondary button text (hex) |
| `--button-secondary-hover` | `colors.button.secondaryHover` | `String` | `"#E3F2FD"` | Secondary button hover state (hex) |
| `--color-button-secondary-hover-text` | `colors.button.secondaryHoverText` | `String` | `"#1976D2"` | Secondary button hover text (hex) |
| `--submit-button-fill-color` | `colors.button.submitFill` | `String` | `"#FFFFFF"` | Submit button fill (hex) |
| `--submit-button-fill-color-disabled` | `colors.button.submitFillDisabled` | `String` | `"#E0E0E0"` | Disabled submit button fill (hex) |
| `--color-button-submit` | `colors.button.submitText` | `String` | `"#1976D2"` | Submit button icon/text color (hex) |
| `--color-button-submit-hover` | `colors.button.submitTextHover` | `String` | `"#1565C0"` | Submit button hover color (hex) |
| `--button-disabled-background` | `colors.button.disabledBackground` | `String` | `"#E0E0E0"` | Disabled button background (hex) |
| `--cta-button-background-color` | `colors.ctaButton.background` | `String` | `"systemGray6"` | CTA button background color (hex) |
| `--cta-button-text-color` | `colors.ctaButton.text` | `String` | `"primary"` | CTA button label text color (hex) |
| `--cta-button-icon-color` | `colors.ctaButton.iconColor` | `String` | `"primary"` | CTA button icon color (hex) |

### Colors - Input

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--input-background` | `colors.input.background` | `String` | `"#FFFFFF"` | Input field background (hex) |
| `--input-text-color` | `colors.input.text` | `String` | `"#000000"` | Input text color (hex) |
| `--input-outline-color` | `colors.input.outline` | `String?` | `null` | Input border color (hex) |
| `--input-focus-outline-color` | `colors.input.outlineFocus` | `String` | `"#1976D2"` | Focused input border color (hex) |
| `--input-send-icon-color` | `colors.input.sendIconColor` | `String?` | `null` | Send button icon color (hex). Falls back to `onSurface` |
| `--input-send-arrow-icon-color` | `colors.input.sendArrowIconColor` | `String?` | `null` | Arrow send button icon (arrow) color (hex). Falls back to `onPrimary`. Only used when `sendButtonStyle` is `"arrow"` |
| `--input-send-arrow-background-color` | `colors.input.sendArrowBackgroundColor` | `String?` | `null` | Arrow send button circle background color (hex). Falls back to `sendIconColor` then `primary`. Only used when `sendButtonStyle` is `"arrow"` |
| `--input-mic-icon-color` | `colors.input.micIconColor` | `String?` | `null` | Mic button icon color (hex). Falls back to `primary` |
| `--input-mic-recording-icon-color` | `colors.input.micRecordingIconColor` | `String?` | `null` | Waveform animation color during voice recording (hex). Falls back to `onPrimary` |

### Colors - Welcome Prompts

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--welcome-prompt-background-color` | `colors.welcomePrompt.backgroundColor` | `String?` | `null` (falls back to surface) | Prompt pill background color (hex). Only applied if a per-prompt `backgroundColor` is not defined in the prompt configuration. |
| `--welcome-prompt-text-color` | `colors.welcomePrompt.textColor` | `String?` | `null` (falls back to `onSurface`) | Prompt pill text color (hex) |

### Colors - Circular Citations

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--citations-background-color` | `colors.citation.backgroundColor` | `String` | `"#E0E0E0"` | Citation pill background (hex) |
| `--citations-text-color` | `colors.citation.textColor` | `String` | `"#000000"` | Citation pill text color (hex). |

### Colors - Feedback

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--feedback-icon-btn-background` | `colors.feedback.iconButtonBackground` | `String` | `"#FFFFFF"` | Feedback button background (hex) |
| `--feedback-icon-btn-hover-background` | `colors.feedback.iconButtonHoverBackground` | `String` | `"#F5F5F5"` | Feedback button hover background (hex) |

### Colors - Disclaimer

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--disclaimer-color` | `colors.disclaimer` | `String` | `"#757575"` | Disclaimer text color (hex) |

### Colors - Extended Product Cards

Used when `behavior.productCard.cardStyle` is `"productDetail"`.

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--product-card-outline-color` | `cssLayout.productCardOutlineColor` | `String` | `"#E3E3E3"` | Card border stroke color (hex) |
| `--product-card-background-color` | `cssLayout.productCardBackgroundColor` | `String` | `"#FFFFFF"` | Card background (hex) |
| `--product-card-title-color` | `cssLayout.productCardTitleColor` | `String` | `"#191F1C"` | Title text color (hex) |
| `--product-card-subtitle-color` | `cssLayout.productCardSubtitleColor` | `String` | `"#4F4F4F"` | Subtitle text color (hex) |
| `--product-card-price-color` | `cssLayout.productCardPriceColor` | `String` | `"#191F1C"` | Price text color (hex) |
| `--product-card-badge-text-color` | `cssLayout.productCardBadgeTextColor` | `String` | `"#FFFFFF"` | Badge text color (hex) |
| `--product-card-badge-background-color` | `cssLayout.productCardBadgeBackgroundColor` | `String` | primary color | Badge background (hex) |
| `--product-card-was-price-color` | `cssLayout.productCardWasPriceColor` | `String` | `"#6E6E6E"` | "Was" price text color (hex) |

### Layout - Input

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--input-height-mobile` | `cssLayout.inputHeight` | `Double` | `52.0` | Input field height (dp) |
| `--input-border-radius-mobile` | `cssLayout.inputBorderRadius` | `Double` | `12.0` | Input field corner radius (dp) |
| `--input-outline-width` | `cssLayout.inputOutlineWidth` | `Double` | `2.0` | Input border width (dp) |
| `--input-focus-outline-width` | `cssLayout.inputFocusOutlineWidth` | `Double` | `2.0` | Focused input border width (dp) |
| `--input-font-size` | `cssLayout.inputFontSize` | `Double` | `16.0` | Input text font size (sp) |
| `--input-button-height` | `cssLayout.inputButtonHeight` | `Double` | `32.0` | Input button height (dp) |
| `--input-button-width` | `cssLayout.inputButtonWidth` | `Double` | `32.0` | Input button width (dp) |
| `--input-button-border-radius` | `cssLayout.inputButtonBorderRadius` | `Double` | `8.0` | Input button corner radius (dp) |
| `--input-box-shadow` | `cssLayout.inputBoxShadow` | `Map<String, Any>` | `null` | Input field shadow |

### Layout - Messages

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--message-border-radius` | `cssLayout.messageBorderRadius` | `Double` | `10.0` | Message bubble corner radius (dp) |
| `--message-padding` | `cssLayout.messagePadding` | `List<Double>` | `[8, 16]` | Message content padding (dp) |
| `--message-max-width` | `cssLayout.messageMaxWidth` | `Double?` | `null` | Max message width (dp or %) |

### Layout - Chat

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--chat-interface-max-width` | `cssLayout.chatInterfaceMaxWidth` | `Double` | `768.0` | Max chat interface width (dp) |
| `--chat-history-padding` | `cssLayout.chatHistoryPadding` | `Double` | `16.0` | Chat history horizontal padding (dp) |
| `--chat-history-padding-top-expanded` | `cssLayout.chatHistoryPaddingTopExpanded` | `Double` | `8.0` | Top padding when expanded (dp) |
| `--chat-history-bottom-padding` | `cssLayout.chatHistoryBottomPadding` | `Double` | `12.0` | Bottom padding (dp) |
| `--message-blocker-height` | `cssLayout.messageBlockerHeight` | `Double` | `105.0` | Message blocker overlay height (dp) |

### Layout - Cards & Carousel

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--border-radius-card` | `cssLayout.borderRadiusCard` | `Double` | `16.0` | Card corner radius (dp) |
| `--multimodal-card-box-shadow` | `cssLayout.multimodalCardBoxShadow` | `Map<String, Any>` | `null` | Card shadow |

### Layout - Extended Product Cards

When `behavior.productCard.cardStyle` is `"productDetail"`, product recommendations display as extended cards with image, badge, name, subtitle, and price. The following theme tokens customize the extended product card layout. See [Colors - Extended Product Cards](#colors---extended-product-cards) for color properties.

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--product-card-width` | `cssLayout.productCardWidth` | `Double` | `222.0` | Card width (dp) |
| `--product-card-height` | `cssLayout.productCardHeight` | `Double` | `359.0` | Card height (dp) |
| `--product-card-border-radius` | `cssLayout.productCardBorderRadius` | `Double` | `8.0` | Card corner radius (dp) |
| `--product-card-title-font-size` | `cssLayout.productCardTitleFontSize` | `Double` | `14.0` | Title font size (sp) |
| `--product-card-title-font-weight` | `cssLayout.productCardTitleFontWeight` | `Int` | `700` | Title font weight |
| `--product-card-subtitle-font-size` | `cssLayout.productCardSubtitleFontSize` | `Double` | `12.0` | Subtitle font size (sp) |
| `--product-card-subtitle-font-weight` | `cssLayout.productCardSubtitleFontWeight` | `Int` | `400` | Subtitle font weight |
| `--product-card-price-font-size` | `cssLayout.productCardPriceFontSize` | `Double` | `14.0` | Price font size (sp) |
| `--product-card-price-font-weight` | `cssLayout.productCardPriceFontWeight` | `Int` | `400` | Price font weight |
| `--product-card-badge-font-size` | `cssLayout.productCardBadgeFontSize` | `Double` | `12.0` | Badge font size (sp) |
| `--product-card-badge-font-weight` | `cssLayout.productCardBadgeFontWeight` | `Int` | `700` | Badge font weight |
| `--product-card-was-price-font-size` | `cssLayout.productCardWasPriceFontSize` | `Double` | `12.0` | "Was" price font size (sp) |
| `--product-card-was-price-font-weight` | `cssLayout.productCardWasPriceFontWeight` | `Int` | `400` | "Was" price font weight |
| `--product-card-was-price-text-prefix` | `cssLayout.productCardWasPriceTextPrefix` | `String` | `"was "` | Prefix for "Was" price (e.g., "marked down from $99") |
| `--product-card-text-horizontal-padding` | `cssLayout.productCardTextHorizontalPadding` | `Double` | `16.0` | Horizontal padding for card text content (dp) |
| `--product-card-text-top-padding` | `cssLayout.productCardTextTopPadding` | `Double` | `24.0` | Top padding for card text content (dp) |
| `--product-card-text-bottom-padding` | `cssLayout.productCardTextBottomPadding` | `Double` | `16.0` | Bottom padding for card text content (dp) |
| `--product-card-text-spacing` | `cssLayout.productCardTextSpacing` | `Double` | `8.0` | Gap between title and subtitle (dp) |
| `--product-card-carousel-horizontal-padding` | `cssLayout.productCardCarouselHorizontalPadding` | `Double` | `4.0` | Carousel horizontal padding (dp) |
| `--product-card-carousel-spacing` | `cssLayout.productCardCarouselSpacing` | `Double` | `12.0` | Spacing between carousel cards (dp) |

### Layout - Buttons

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--button-height-s` | `cssLayout.buttonHeightSmall` | `Double` | `30.0` | Small button height (dp) |
| `--cta-button-border-radius` | `cssLayout.ctaButtonBorderRadius` | `Double` | `99.0` | CTA button corner radius (dp) |
| `--cta-button-horizontal-padding` | `cssLayout.ctaButtonHorizontalPadding` | `Double` | `16.0` | CTA button horizontal padding (dp) |
| `--cta-button-vertical-padding` | `cssLayout.ctaButtonVerticalPadding` | `Double` | `12.0` | CTA button vertical padding (dp) |
| `--cta-button-font-size` | `cssLayout.ctaButtonFontSize` | `Double` | `14.0` | CTA button label font size (sp) |
| `--cta-button-font-weight` | `cssLayout.ctaButtonFontWeight` | `Int` | `400` | CTA button label font weight |
| `--cta-button-icon-size` | `cssLayout.ctaButtonIconSize` | `Double` | `16.0` | CTA button icon size (dp) |

### Layout - Feedback

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--feedback-container-gap` | `cssLayout.feedbackContainerGap` | `Double` | `4.0` | Gap between feedback buttons (dp) |
| `--feedback-icon-btn-size-desktop` | `components.feedback.iconButtonSizeDesktop` | `Double` | `32.0` | Feedback button hit target size (dp) |

### Layout - Citations

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--citations-text-font-weight` | `cssLayout.citationsTextFontWeight` | `Int` | `700` | Citation text weight |
| `--citations-desktop-button-font-size` | `cssLayout.citationsDesktopButtonFontSize` | `Double` | `14.0` | Citation button font size (sp) |

### Layout - Disclaimer

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--disclaimer-font-size` | `cssLayout.disclaimerFontSize` | `Double` | `12.0` | Disclaimer font size (sp) |
| `--disclaimer-font-weight` | `cssLayout.disclaimerFontWeight` | `Int` | `400` | Disclaimer font weight |

### Layout - Welcome Screen

| CSS Variable | Kotlin Property | Type | Default | Description |
|--------------|-----------------|------|---------|-------------|
| `--welcome-input-order` | `cssLayout.welcomeInputOrder` | `Int` | `3` | Input field display order |
| `--welcome-cards-order` | `cssLayout.welcomeCardsOrder` | `Int` | `2` | Example cards display order |
| `--header-title-font-size` | `cssLayout.headerTitleFontSize` | `Double` | `null` (uses `headlineSmall`) | Header title font size (sp) |
| `--welcome-title-font-size` | `cssLayout.welcomeTitleFontSize` | `Double` | `null` (uses `headlineSmall`) | Welcome card title font size (sp) |
| `--welcome-text-align` | `cssLayout.welcomeTextAlign` | `String` | `"center"` | Welcome card text alignment (`"left"`, `"center"`, `"right"`) |
| `--welcome-content-padding` | `cssLayout.welcomeContentPadding` | `Double` | `20.0` | Welcome card content padding (dp) |
| `--welcome-prompt-image-size` | `cssLayout.welcomePromptImageSize` | `Double` | `75.0` | Prompt suggestion thumbnail size (dp) |
| `--welcome-prompt-spacing` | `cssLayout.welcomePromptSpacing` | `Double` | `8.0` | Spacing between prompt items (dp) |
| `--welcome-title-bottom-spacing` | `cssLayout.welcomeTitleBottomSpacing` | `Double` | `8.0` | Spacing below welcome title (dp) |
| `--welcome-prompts-top-spacing` | `cssLayout.welcomePromptsTopSpacing` | `Double` | `8.0` | Spacing above prompt list (dp) |
| `--welcome-prompt-padding` | `cssLayout.welcomePromptPadding` | `Double` | `0.0` | Inner padding for prompt pills (dp) |
| `--welcome-prompt-corner-radius` | `cssLayout.welcomePromptCornerRadius` | `Double` | `8.0` | Prompt pill corner radius (dp) |

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
    "productCard": {
      "cardStyle": "actionButton"
    },
    "input": {
      "enableVoiceInput": true,
      "sendButtonStyle": "default",
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
    },
    "feedback": {
      "displayMode": "action",
      "thumbsPlacement": "inline"
    },
    "citations": {
      "showLinkIcon": false
    },
    "welcomeCard": {
      "closeButtonAlignment": "start",
      "promptFullWidth": false,
      "promptMaxLines": 1,
      "contentAlignment": "top"
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
    "header.title": "Concierge",
    "header.subtitle": "Powered by Adobe",
    "welcome.heading": "Welcome to Brand Concierge!",
    "welcome.subheading": "I'm your personal guide to help you explore.",
    "input.placeholder": "How can I help?",
    "input.messageInput.aria": "Message input",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Ask AI",
    "input.mic.aria": "Voice input",
    "card.aria.select": "Select example message",
    "carousel.prev.aria": "Previous cards",
    "carousel.next.aria": "Next cards",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network": "I'm sorry, I'm having trouble connecting to our services right now.",
    "loading.message": "Generating response from our knowledge base...",
    "feedbackHelpfulLabel": "Was this helpful?",
    "sourcesLabel": "Sources",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.title.negative": "Your feedback is appreciated",
    "feedback.dialog.question.positive": "What went well? Select all that apply.",
    "feedback.dialog.question.negative": "What went wrong? Select all that apply.",
    "feedback.dialog.notes": "Notes",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Additional notes (optional)",
    "feedback.toast.success": "Thank you for the feedback.",
    "feedback.thumbsUp.aria": "Thumbs up",
    "feedback.thumbsDown.aria": "Thumbs down"
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "I'd like to explore templates to see what I can create.",
        "image": "https://example.com/template.png",
        "backgroundColor": "#F5F5F5"
      },
      {
        "text": "Help me find recommendations.",
        "image": "https://example.com/example.png",
        "backgroundColor": "#F5F5F5"
      },
      {
        "text": "Where can I learn more?",
        "image": "https://example.com/learn-more.png",
        "backgroundColor": "#F5F5F5"
      }
    ],
    "feedback.positive.options": [
      "Helpful and relevant recommendations",
      "Clear and easy to understand",
      "Friendly and conversational tone",
      "Visually appealing presentation",
      "Other"
    ],
    "feedback.negative.options": [
      "Didn't understand my request",
      "Unhelpful or irrelevant information",
      "Too vague or lacking detail",
      "Errors or poor quality response",
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
    "--header-title-font-size": "18px",
    "--welcome-title-font-size": "16px",
    "--welcome-text-align": "left",
    "--welcome-content-padding": "16px",
    "--welcome-prompt-image-size": "16px",
    "--welcome-prompt-padding": "12px",
    "--welcome-prompt-corner-radius": "20px",
    "--welcome-prompt-background-color": "#F5F5F5",
    "--welcome-prompt-text-color": "#000000",
    "--welcome-prompt-spacing": "8px",
    "--welcome-title-bottom-spacing": "6px",
    "--welcome-prompts-top-spacing": "12px",
    "--font-family": "",
    "--color-primary": "#EB1000",
    "--color-text": "#131313",
    "--line-height-body": "1.75",
    "--main-container-background": "#FFFFFF",
    "--main-container-bottom-background": "#FFFFFF",

    "--message-blocker-background": "#00000066",

    "--message-user-background": "#E3F2FD",
    "--message-user-text": "#000000",

    "--message-concierge-background": "#F5F5F5",
    "--message-concierge-text": "#000000",
    "--message-concierge-link-color": "#1976D2",

    "--message-max-width": "100%",
    "--message-border-radius": "10px",
    "--message-padding": "8px 16px",

    "--chat-interface-max-width": "768px",
    "--chat-history-padding": "16px",
    "--chat-history-padding-top-expanded": "0",
    "--chat-history-bottom-padding": "0",
    "--message-blocker-height": "105px",

    "--input-height-mobile": "52px",
    "--input-border-radius-mobile": "12px",
    "--button-primary-background": "#1976D2",
    "--button-primary-text": "#FFFFFF",
    "--button-secondary-border": "#1976D2",
    "--button-secondary-text": "#1976D2",
    "--button-height-s": "30px",
    "--button-disabled-background": "#E0E0E0",

    "--submit-button-fill-color": "#FFFFFF",
    "--submit-button-fill-color-disabled": "#C6C6C6",
    "--color-button-submit": "#1976D2",

    "--disclaimer-color": "#757575",
    "--disclaimer-font-size": "12px",
    "--disclaimer-font-weight": "400",

    "--input-background": "#FFFFFF",
    "--input-outline-color": null,
    "--input-outline-width": "2px",
    "--input-box-shadow": "0 2px 8px 0 #00000014",
    "--input-focus-outline-width": "2px",
    "--input-text-color": "#000000",
    "--input-focus-outline-color": "#1976D2",
    "--input-send-icon-color": "#000000",
    "--input-send-arrow-icon-color": "#FFFFFF",
    "--input-send-arrow-background-color": "#1976D2",
    "--input-mic-icon-color": "#000000",
    "--input-mic-recording-icon-color": "#FFFFFF",
    "--input-font-size": "16px",
    "--input-button-height": "32px",
    "--input-button-width": "32px",
    "--input-button-border-radius": "8px",
    "--input-send-icon-color": "#1976D2",
    "--input-mic-icon-color": "#1976D2",

    "--citations-text-font-weight": "700",
    "--citations-desktop-button-font-size": "12px",
    "--citations-background-color": "#E0E0E0",
    "--citations-text-color": "#000000",

    "--feedback-icon-btn-background": "#FFFFFF",
    "--feedback-icon-btn-size-desktop": "32px",
    "--feedback-container-gap": "4px",

    "--multimodal-card-box-shadow": "none",
    "--border-radius-card": "16px",

    "--product-card-outline-color": "#E3E3E3",
    "--product-card-width": "222px",
    "--product-card-height": "359px",
    "--product-card-border-radius": "8px",
    "--product-card-title-font-weight": "700",
    "--product-card-title-font-size": "14px",
    "--product-card-title-color": "#191F1C",
    "--product-card-subtitle-font-weight": "400",
    "--product-card-subtitle-font-size": "12px",
    "--product-card-subtitle-color": "#4F4F4F",
    "--product-card-price-font-weight": "400",
    "--product-card-price-font-size": "14px",
    "--product-card-price-color": "#191F1C",
    "--product-card-badge-font-weight": "700",
    "--product-card-badge-font-size": "12px",
    "--product-card-badge-text-color": "#FFFFFF",
    "--product-card-badge-background-color": "#1976D2",
    "--product-card-background-color": "#FFFFFF",
    "--product-card-was-price-color": "#6E6E6E",
    "--product-card-was-price-font-size": "12px",
    "--product-card-was-price-font-weight": "400",
    "--product-card-was-price-text-prefix": "previously ",
    "--product-card-text-horizontal-padding": "16px",
    "--product-card-text-top-padding": "24px",
    "--product-card-text-bottom-padding": "16px",
    "--product-card-text-spacing": "8px",
    "--product-card-carousel-horizontal-padding": "16px",
    "--product-card-carousel-spacing": "12px"
  }
}
```

---

## Implementation Status

This section documents which properties are fully implemented, partially implemented, or not yet implemented in the Android SDK based on actual usage in composables.

### Legend

| Status | Description |
|--------|-------------|
| ✅ | Fully implemented - property is mapped and actively used in composables |
| ⚠️ | Defined but unused - property is parsed but not rendered in any composable |
| ❌ | Not supported - property exists in web JSON but is ignored by Android |

**Note**: The tables below include a "Used In" column showing which UI composables consume each theme property.

### Implementation Summary

**Overall Implementation Status:**

* **Colors**: ~70% implemented (most core colors used, hover states not applicable)
* **Typography**: 60% implemented (`fontFamily` not yet supported)
* **Layout**: ~15% implemented (only outline widths and font sizes currently used)
* **Behavior**: ~10% implemented (only `enableVoiceInput` functional)
* **Text/Copy**: ~50% implemented (main strings used, accessibility labels not yet implemented)

**Key Differences from Web/iOS:**

* Hover states (`--button-primary-hover`, `--feedback-icon-btn-hover-background`) are parsed but not applicable on Android
* Box shadows are parsed but not currently rendered
* Most layout dimensions (padding, margins, border radius) are hardcoded rather than theme-driven
* Accessibility labels (aria) are parsed but not yet connected to content descriptions

### Metadata

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `metadata.brandName` | ⚠️ | Parsed but not used | - |
| `metadata.version` | ⚠️ | Parsed but not used | - |
| `metadata.language` | ⚠️ | Parsed but not used | - |
| `metadata.namespace` | ⚠️ | Parsed but not used | - |

### Behavior

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `behavior.multimodalCarousel.cardClickAction` | ⚠️ | Parsed but not implemented in carousel composables | - |
| `behavior.multimodalCarousel.carouselStyle` | ✅ | Switches between paged (prev/next/dots) and continuous scroll | `ProductCarousel` |
| `behavior.productCard.cardStyle` | ✅ | Switches between action-button cards and extended product-detail cards | `RecommendationCards`, `ProductCarousel` |
| `behavior.input.enableVoiceInput` | ✅ | Controls mic button visibility | `InputActionButtons` |
| `behavior.input.sendButtonStyle` | ✅ | `"default"` (paper airplane) or `"arrow"` (filled circle with upward arrow) | `SendButton` |
| `behavior.input.disableMultiline` | ✅ | Restricts input to a single line when `true` | `ChatTextField` |
| `behavior.input.showAiChatIcon` | ⚠️ | Parsed but not implemented | - |
| `behavior.chat.messageAlignment` | ⚠️ | Parsed but not implemented | - |
| `behavior.chat.messageWidth` | ⚠️ | Parsed but not implemented | - |
| `behavior.privacyNotice.title` | ⚠️ | Parsed but not implemented | - |
| `behavior.privacyNotice.text` | ⚠️ | Parsed but not implemented | - |
| `behavior.welcomeCard.closeButtonAlignment` | ✅ | `"start"` or `"end"` close button position | `ChatHeader` |
| `behavior.welcomeCard.promptFullWidth` | ✅ | Full-width cards vs compact pill chips | `SuggestedPromptItem` |
| `behavior.welcomeCard.promptMaxLines` | ✅ | Max lines for prompt text (uniform pill height) | `SuggestedPromptItem` |
| `behavior.welcomeCard.contentAlignment` | ✅ | `"top"` or `"center"` vertical position | `ConciergeChat` |

### Disclaimer

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `disclaimer.text` | ✅ | Rendered below chat input; default used if omitted | `ConciergeDisclaimer` |
| `disclaimer.links` | ✅ | Placeholders in text replaced by tappable links | `ConciergeDisclaimer` |

### Text (Copy)

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `text["header.title"]` | ✅ | Header title text | `ChatHeader` |
| `text["header.subtitle"]` | ✅ | Header subtitle text | `ChatHeader` |
| `text["welcome.heading"]` | ✅ | Welcome screen title | `WelcomeCard` |
| `text["welcome.subheading"]` | ✅ | Welcome screen description | `WelcomeCard` |
| `text["input.placeholder"]` | ✅ | Input field hint text | `ChatTextField` |
| `text["input.messageInput.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["input.send.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["input.aiChatIcon.tooltip"]` | ⚠️ | Parsed but not implemented | - |
| `text["input.mic.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["card.aria.select"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["carousel.prev.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["carousel.next.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["scroll.bottom.aria"]` | ⚠️ | Parsed but scroll button not implemented | - |
| `text["error.network"]` | ⚠️ | Parsed but error uses hardcoded text | - |
| `text["loading.message"]` | ✅ | Loading animation text | `ConciergeThinking` |
| `text["feedback.dialog.title.positive"]` | ✅ | Feedback dialog title for positive feedback | `FeedbackDialog` |
| `text["feedback.dialog.title.negative"]` | ✅ | Feedback dialog title for negative feedback | `FeedbackDialog` |
| `text["feedback.dialog.question.positive"]` | ✅ | Feedback dialog question for positive feedback | `FeedbackDialog` |
| `text["feedback.dialog.question.negative"]` | ✅ | Feedback dialog question for negative feedback | `FeedbackDialog` |
| `text["feedback.dialog.notes"]` | ✅ | Feedback dialog notes label | `FeedbackDialog` |
| `text["feedback.dialog.submit"]` | ✅ | Feedback dialog submit button text | `FeedbackDialog` |
| `text["feedback.dialog.cancel"]` | ✅ | Feedback dialog cancel button text | `FeedbackDialog` |
| `text["feedback.dialog.notes.placeholder"]` | ✅ | Feedback dialog notes placeholder | `FeedbackDialog` |
| `text["feedback.toast.success"]` | ⚠️ | Parsed but toast not implemented | - |
| `text["feedback.thumbsUp.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["feedback.thumbsDown.aria"]` | ⚠️ | Parsed but not used for accessibility | - |
| `text["sourcesLabel"]` | ✅ | Accordion label for sources/feedback section | `ChatFooter` → `SourcesAccordionButton` |
| `text["feedbackHelpfulLabel"]` | ✅ | Feedback helpful label shown in `below` thumbs placement mode | `FeedbackButtons` |

### Behavior — Feedback & Citations

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `behavior.feedback.displayMode` | ✅ | Modal (default) or ActionSheet feedback dialog | `FeedbackDialog` |
| `behavior.feedback.thumbsPlacement` | ✅ | Inline (default) or below sources accordion | `ChatFooter` |
| `behavior.citations.showLinkIcon` | ✅ | External link icon next to citation URLs | `ExpandedCitations` → `CitationItem` |

### Arrays

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `arrays["welcome.examples"]` | ✅ | Suggested prompts displayed on welcome screen | `WelcomeCard` → `PromptSuggestions` |
| `arrays["feedback.positive.options"]` | ✅ | Positive feedback category options | `FeedbackDialog` |
| `arrays["feedback.negative.options"]` | ✅ | Negative feedback category options | `FeedbackDialog` |

### Assets

| Property | Status | Notes | Used In |
|----------|--------|-------|---------|
| `assets.icons.company` | ⚠️ | Parsed but not rendered in any composable | - |

### Theme Tokens - Typography

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--font-family` | ⚠️ | Parsed but not implemented | - |
| `--line-height-body` | ✅ | Body text line height | All text components via `ConciergeStyles.withThemeTypography` |
| `--input-font-size` | ✅ | Input field text size | `ChatTextField` |
| `--citations-desktop-button-font-size` | ✅ | Citation pill text size | `CircularCitation` |
| `--disclaimer-font-size` | ✅ | Disclaimer text size | `ConciergeDisclaimer` (DisclaimerStyle) |

### Theme Tokens - Colors

**Note**: The following base colors are **not configurable via JSON themes**. They are hardcoded in `LightConciergeColors` / `DarkConciergeColors` and serve as fallback colors throughout the UI:

* `secondary`
* `onSurfaceVariant`
* `container`
* `outline`
* `error`
* `onError`

These colors are used internally by composables but cannot be customized in theme JSON files. See "Fallback Colors" section at the end.

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--color-primary` | ✅ | Primary brand color | Product buttons, feedback dialog submit button, feedback checkbox (checked fill), mic button icon, thinking animation |
| `--color-text` | ✅ | Primary text color; used for body text on main background and for `micButtonColor` in parsed theme (mic icon uses `--color-primary` in UI) | `ChatHeader`, `WelcomeCard`, prompt suggestions (when theme loaded) |
| `--main-container-background` | ✅ | Main chat screen, welcome card, and feedback dialog background | `ChatScreen`, `WelcomeCard`, `FeedbackDialog` |
| `--main-container-bottom-background` | ✅ | Bottom container/surface background | Input area, voice recording panel |
| `--message-blocker-background` | ⚠️ | Parsed but not used in UI | - |
| `--message-user-background` | ✅ | User message bubble background | `ChatMessageItem` |
| `--message-user-text` | ✅ | User message text color | `ChatMessageItem` |
| `--message-concierge-background` | ✅ | AI message bubble background | `ChatMessageItem` |
| `--message-concierge-text` | ✅ | AI message text color, feedback dialog text, feedback button icons, prompt suggestions text, expanded citation list text, chat footer (Sources label and icon) | `ChatMessageItem`, `FeedbackDialog`, `FeedbackButtons`, `PromptSuggestions`, `ExpandedCitations`, `ChatFooter`, `ProductCard` text, `ProductCarousel` switcher color |
| `--message-concierge-link-color` | ✅ | Link color in AI messages; expanded citation list URLs | `ExpandedCitations` (citation URLs); message body links when applied |
| `--button-primary-background` | ✅ | Primary button background | `ProductActionButtons` |
| `--button-primary-text` | ✅ | Primary button text | `ProductActionButtons` |
| `--button-primary-hover` | ⚠️ | Parsed but no hover states on Android | - |
| `--button-secondary-border` | ✅ | Secondary button border | `ProductActionButtons` |
| `--button-secondary-text` | ✅ | Secondary button text | `ProductActionButtons` |
| `--button-secondary-hover` | ⚠️ | Parsed but no hover states on Android | - |
| `--color-button-secondary-hover-text` | ⚠️ | Parsed but no hover states on Android | - |
| `--submit-button-fill-color` | ✅ | Feedback dialog submit button background | `FeedbackDialog` |
| `--submit-button-fill-color-disabled` | ⚠️ | Parsed but disabled state not implemented | - |
| `--color-button-submit` | ✅ | Feedback dialog submit button text/icon, also used for send/mic icons | `FeedbackDialog`, `InputActionButtons` |
| `--color-button-submit-hover` | ⚠️ | Parsed but no hover states on Android | - |
| `--button-disabled-background` | ⚠️ | Parsed but disabled state not implemented | - |
| `--input-background` | ✅ | Input field background | `ChatInputPanel` |
| `--input-text-color` | ✅ | Input field text color | `ChatTextField`, `FeedbackDialog` |
| `--input-outline-color` | ✅ | Input field border color | `ChatInputPanel` |
| `--input-focus-outline-color` | ✅ | Input field focused border color | `ChatInputPanel` |
| `--input-send-icon-color` | ✅ | Send button icon color (default style tint) | `SendButton` |
| `--input-send-arrow-icon-color` | ✅ | Arrow send button icon color (arrow style only) | `SendButton` |
| `--input-send-arrow-background-color` | ✅ | Arrow send button circle background (arrow style only) | `SendButton` |
| `--input-mic-icon-color` | ✅ | Mic button icon color | `MicButton` |
| `--input-mic-recording-icon-color` | ✅ | Waveform animation color during recording | `MicButton`, `AnimatedAudioWave` |
| `--welcome-prompt-background-color` | ✅ | Welcome prompt pill background | `SuggestedPromptItem` |
| `--welcome-prompt-text-color` | ✅ | Welcome prompt pill text | `SuggestedPromptItem` |
| `--citations-background-color` | ✅ | Citation pill background | `CircularCitation` |
| `--citations-text-color` | ✅ | Citation pill (badge) text | `CircularCitation` |
| `--feedback-icon-btn-background` | ✅ | Thumbs up/down button background | `FeedbackComponents` |
| `--feedback-icon-btn-hover-background` | ⚠️ | Parsed but no hover states on Android | - |
| `--disclaimer-color` | ✅ | Disclaimer text color | `ConciergeDisclaimer` (DisclaimerStyle) |
| `--cta-button-background-color` | ✅ | CTA button background color | `CtaButton` |
| `--cta-button-text-color` | ✅ | CTA button label text color | `CtaButton` |
| `--cta-button-icon-color` | ✅ | CTA button icon color | `CtaButton` |
| `--product-card-outline-color` | ✅ | Extended product card border color | `ExtendedProductCard` |
| `--product-card-background-color` | ✅ | Extended product card background | `ExtendedProductCard` |
| `--product-card-title-color` | ✅ | Extended product card title color | `ExtendedProductCard` |
| `--product-card-subtitle-color` | ✅ | Extended product card subtitle color | `ExtendedProductCard` |
| `--product-card-price-color` | ✅ | Extended product card price color | `ExtendedProductCard` |
| `--product-card-badge-text-color` | ✅ | Extended product card badge text color | `ExtendedProductCard` |
| `--product-card-badge-background-color` | ✅ | Extended product card badge background | `ExtendedProductCard` |
| `--product-card-was-price-color` | ✅ | Extended product card "was" price color | `ExtendedProductCard` |

Note: The feedback dialog checkbox uses `--color-primary` for the check box filled color; the checkmark icon is white and is not configurable via theme.

### Theme Tokens - Layout

| CSS Variable | Status | Notes | Used In |
|--------------|--------|-------|---------|
| `--input-height-mobile` | ⚠️ | Parsed but not used in composables | - |
| `--input-border-radius-mobile` | ✅ | Input field corner radius | `ChatInputPanel` |
| `--input-outline-width` | ✅ | Input field border width | `ChatInputPanel` |
| `--input-focus-outline-width` | ✅ | Input field focused border width | `ChatInputPanel` |
| `--input-font-size` | ✅ | Input field text size | `ChatTextField` |
| `--input-button-height` | ⚠️ | Parsed but not used in composables | - |
| `--input-button-width` | ⚠️ | Parsed but not used in composables | - |
| `--input-button-border-radius` | ⚠️ | Parsed but not used in composables | - |
| `--input-box-shadow` | ⚠️ | Parsed but shadows not rendered | - |
| `--message-border-radius` | ⚠️ | Parsed but not used in composables | - |
| `--message-padding` | ⚠️ | Parsed but not used in composables | - |
| `--message-max-width` | ⚠️ | Parsed but not used in composables | - |
| `--chat-interface-max-width` | ⚠️ | Parsed but not used in composables | - |
| `--chat-history-padding` | ⚠️ | Parsed but not used in composables | - |
| `--chat-history-padding-top-expanded` | ⚠️ | Parsed but not used in composables | - |
| `--chat-history-bottom-padding` | ⚠️ | Parsed but not used in composables | - |
| `--message-blocker-height` | ⚠️ | Parsed but not used in composables | - |
| `--border-radius-card` | ⚠️ | Parsed but not used in composables | - |
| `--multimodal-card-box-shadow` | ⚠️ | Parsed but shadows not rendered | - |
| `--product-card-width` | ✅ | Extended product card width | `ExtendedProductCard`, `ProductCarousel` |
| `--product-card-height` | ✅ | Extended product card height | `ExtendedProductCard`, `ProductCarousel` |
| `--product-card-border-radius` | ✅ | Extended product card corner radius | `ExtendedProductCard` |
| `--product-card-title-font-size` | ✅ | Extended product card title size | `ExtendedProductCard` |
| `--product-card-title-font-weight` | ✅ | Extended product card title weight | `ExtendedProductCard` |
| `--product-card-subtitle-font-size` | ✅ | Extended product card subtitle size | `ExtendedProductCard` |
| `--product-card-subtitle-font-weight` | ✅ | Extended product card subtitle weight | `ExtendedProductCard` |
| `--product-card-price-font-size` | ✅ | Extended product card price size | `ExtendedProductCard` |
| `--product-card-price-font-weight` | ✅ | Extended product card price weight | `ExtendedProductCard` |
| `--product-card-badge-font-size` | ✅ | Extended product card badge size | `ExtendedProductCard` |
| `--product-card-badge-font-weight` | ✅ | Extended product card badge weight | `ExtendedProductCard` |
| `--product-card-was-price-font-size` | ✅ | Extended product card "was" price size | `ExtendedProductCard` |
| `--product-card-was-price-font-weight` | ✅ | Extended product card "was" price weight | `ExtendedProductCard` |
| `--product-card-was-price-text-prefix` | ✅ | Extended product card "was" price prefix | `ExtendedProductCard` |
| `--product-card-text-horizontal-padding` | ✅ | Extended product card text horizontal padding | `ExtendedProductCard` |
| `--product-card-text-top-padding` | ✅ | Extended product card text top padding | `ExtendedProductCard` |
| `--product-card-text-bottom-padding` | ✅ | Extended product card text bottom padding | `ExtendedProductCard` |
| `--product-card-text-spacing` | ✅ | Gap between title and subtitle | `ExtendedProductCard` |
| `--product-card-carousel-horizontal-padding` | ✅ | Carousel horizontal padding | `ProductCarousel` |
| `--product-card-carousel-spacing` | ✅ | Spacing between carousel cards | `ProductCarousel` |
| `--button-height-s` | ⚠️ | Parsed but not used in composables | - |
| `--cta-button-border-radius` | ✅ | CTA button corner radius | `CtaButton` |
| `--cta-button-horizontal-padding` | ✅ | CTA button horizontal padding | `CtaButton` |
| `--cta-button-vertical-padding` | ✅ | CTA button vertical padding | `CtaButton` |
| `--cta-button-font-size` | ✅ | CTA button label font size | `CtaButton` |
| `--cta-button-font-weight` | ✅ | CTA button label font weight | `CtaButton` |
| `--cta-button-icon-size` | ✅ | CTA button icon size | `CtaButton` |
| `--feedback-container-gap` | ⚠️ | Parsed but not used in composables | - |
| `--feedback-icon-btn-size-desktop` | ⚠️ | Parsed but not used in composables | - |
| `--citations-text-font-weight` | ⚠️ | Parsed but not used in composables | - |
| `--citations-desktop-button-font-size` | ✅ | Citation pill text size | `CircularCitation` |
| `--disclaimer-font-size` | ✅ | Disclaimer text size (sp) | `ConciergeDisclaimer` (DisclaimerStyle) |
| `--disclaimer-font-weight` | ✅ | Disclaimer font weight | `ConciergeDisclaimer` (DisclaimerStyle) |
| `--welcome-input-order` | ⚠️ | Parsed but welcome layout not customizable | - |
| `--welcome-cards-order` | ⚠️ | Parsed but welcome layout not customizable | - |
| `--header-title-font-size` | ✅ | Header title font size | `ChatHeader` |
| `--welcome-title-font-size` | ✅ | Welcome card title font size | `WelcomeCard` |
| `--welcome-text-align` | ✅ | Welcome card text alignment | `WelcomeCard` |
| `--welcome-content-padding` | ✅ | Welcome card content padding | `WelcomeCard` |
| `--welcome-prompt-image-size` | ✅ | Prompt thumbnail size | `SuggestedPromptItem` |
| `--welcome-prompt-spacing` | ✅ | Spacing between prompt items | `WelcomeCard` |
| `--welcome-title-bottom-spacing` | ✅ | Spacing below welcome title | `WelcomeCard` |
| `--welcome-prompts-top-spacing` | ✅ | Spacing above prompt list | `WelcomeCard` |
| `--welcome-prompt-padding` | ✅ | Inner padding for prompt pills | `SuggestedPromptItem` |
| `--welcome-prompt-corner-radius` | ✅ | Prompt pill corner radius | `SuggestedPromptItem` |

### Unsupported CSS Variables

The following CSS variables from web themes are **not supported** on Android (desktop-only properties like `--input-height` and `--input-border-radius` without `-mobile` suffix):

| CSS Variable | Notes |
|--------------|-------|
| `--input-height` | Use `--input-height-mobile` instead |
| `--input-border-radius` | Use `--input-border-radius-mobile` instead |
| `--message-alignment` | Use `behavior.chat.messageAlignment` instead |
| `--message-width` | Use `behavior.chat.messageWidth` instead |

---

## Fallback Colors (Not Theme-Configurable)

The following colors from `LightConciergeColors` / `DarkConciergeColors` are hardcoded and **cannot be customized via JSON themes**. They serve as fallback colors throughout the UI:

| Color | Purpose | Used In Composables |
|-------|---------|---------------------|
| `secondary` | Secondary accent color (currently unused) | - |
| `onSurfaceVariant` | Muted text and icons for secondary UI elements | `ChatFooter`, `FeedbackDialog` (unchecked checkboxes) |
| `container` | Background for cards and container elements | `ProductCard`, `PromptSuggestions`, message bubbles (fallback), `ChatInputPanel` (fallback) |
| `outline` | Borders, separators, and outline elements | `ChatFooter` separator, `ProductActionButtons` (secondary button fallback), `FeedbackDialog` text field border, `ProductCarousel` nav buttons |
| `error` | Error state background | `ErrorOverlay` background |
| `onError` | Error state text | `ErrorOverlay` message text |
| `onSurface` | Primary text on surface backgrounds | `VoiceRecordingPanel`, `FeedbackDialog`, fallback for feedback buttons and thinking animation |

**Note**: While these colors provide consistent fallback styling, they cannot be overridden in theme JSON files. If you need custom colors for these UI elements, use the theme-specific CSS variables that map to these elements (e.g., use `--input-outline-color` instead of relying on the `outline` fallback).

---

## Recommendations for Theme Authors

### What to Focus On

When creating themes for the Android SDK, focus on these **actively used** properties for the best results:

**Essential Colors (Highest Impact):**

* `--color-primary` - Primary brand color (used for buttons, feedback checkbox checked state, mic button icon, thinking animation)
* `--color-text` - Primary text color for main background (header, welcome card when theme loaded, prompt suggestions).
* `--main-container-background` - Main screen background color (welcome card, chat area, feedback dialog)
* `--main-container-bottom-background` - Bottom container background (input area)
* `--message-user-background` / `--message-user-text` - User message styling
* `--message-concierge-background` / `--message-concierge-text` - AI message styling, feedback dialog styling, feedback button icons, expanded citation text, chat footer (Sources label and icon)
* `--message-concierge-link-color` - Links in AI content and expanded citation URLs
* `--button-primary-background` / `--button-primary-text` - Primary buttons
* `--button-secondary-border` / `--button-secondary-text` - Secondary buttons
* `--input-background` / `--input-text-color` - Input field colors
* `--input-outline-color` / `--input-focus-outline-color` - Input borders
* `--input-send-icon-color` / `--input-mic-icon-color` - Send and mic button icon colors
* `--input-send-arrow-icon-color` / `--input-send-arrow-background-color` - Arrow send button colors (when `sendButtonStyle` is `"arrow"`)
* `--input-mic-recording-icon-color` - Waveform animation color during voice recording
* `--submit-button-fill-color` / `--color-button-submit` - Submit button
* `--disclaimer-color` / `--disclaimer-font-size` / `--disclaimer-font-weight` - Disclaimer text at bottom
* `--citations-background-color` / `--citations-text-color` - Citation pill (badge).
* `--feedback-icon-btn-background` - Feedback button styling

**Essential Text/Copy:**

* `text["header.title"]` - Header title
* `text["header.subtitle"]` - Header subtitle
* `text["welcome.heading"]` - Welcome screen title
* `text["welcome.subheading"]` - Welcome screen description
* `text["input.placeholder"]` - Input field hint
* `text["loading.message"]` - Loading indicator text
* All `text["feedback.dialog.*"]` - Feedback dialog strings

**Essential Behavior:**

* `behavior.input.enableVoiceInput` - Show/hide microphone button
* `behavior.input.sendButtonStyle` - `"default"` (paper airplane) or `"arrow"` (filled circle with upward arrow)
* `behavior.productCard.cardStyle` - Use `"productDetail"` for extended product cards (image, badge, name, subtitle, price)
* `behavior.multimodalCarousel.carouselStyle` - Use `"paged"` for prev/next/dots or `"scroll"` for continuous scroll
* `behavior.welcomeCard.closeButtonAlignment` - Close button position (`"start"` or `"end"`)
* `behavior.welcomeCard.promptFullWidth` - Full-width cards vs compact pill chips
* `behavior.welcomeCard.promptMaxLines` - Max prompt text lines (set `1` for uniform pills)
* `behavior.welcomeCard.contentAlignment` - Welcome card vertical position (`"top"` or `"center"`)

**Essential Layout:**

* `--input-outline-width` / `--input-focus-outline-width` - Input border thickness
* `--input-border-radius-mobile` - Input field corner radius
* `--input-font-size` - Input text size
* `--input-send-icon-color` / `--input-mic-icon-color` - Input button icon colors
* `--disclaimer-font-size` - Disclaimer text size
* `--citations-desktop-button-font-size` - Citation text size
* `--line-height-body` - Text line spacing

**Extended Product Cards** (when `behavior.productCard.cardStyle` is `"productDetail"`):

* `--product-card-width` / `--product-card-height` - Card dimensions
* `--product-card-title-*` / `--product-card-subtitle-*` / `--product-card-price-*` - Text styling
* `--product-card-badge-*` - Badge styling
* `--product-card-background-color` / `--product-card-outline-color` - Card appearance
* `--product-card-was-price-*` - Strikethrough price styling

### What Can Be Skipped

These properties are parsed but **not currently used** and can be omitted without affecting the UI:

* Hover states (all `*-hover` properties)
* Box shadows (all `*-box-shadow` properties)
* Most layout dimensions (padding, margins, border radius) - currently hardcoded
* Disabled button states
* Accessibility labels (not yet connected to Android content descriptions)
* Welcome screen ordering (`--welcome-input-order`, `--welcome-cards-order`)
* Font family (`--font-family` - not yet implemented)

### Testing Your Theme

1. **Test core flows**: Create a theme, load it, send messages, provide feedback
2. **Check on multiple devices**: Test on different screen sizes and Android versions
3. **Verify contrast ratios**: Ensure text is readable on all backgrounds
4. **Test with and without a theme**: With no theme loaded, the welcome card and prompts follow system light/dark (dark background + light text in dark mode). With a theme loaded, welcome example `backgroundColor` and theme colors are applied
5. **Test light/dark modes**: If supporting both, verify colors work in both contexts

---
