---
title: Brand Concierge release notes
description: Release notes for the Brand Concierge mobile extension.
keywords:
- Brand Concierge
- Release notes
---

# Release notes

## June 5, 2026

### Android Brand Concierge 3.7.1

* Patch for Disclaimer Link Click handling fix


**Full Changelog**: https://github.com/adobe/aepsdk-concierge-android/compare/v3.7.0...v3.7.1

## May 29, 2026

### iOS Brand Concierge 5.7.0

## What's Changed
* Making Product Carousel and Cards Adaptive to content
* Link click tracking event added

**Full Changelog**: https://github.com/adobe/aepsdk-concierge-ios/compare/5.6.0...5.7.0

### Android Brand Concierge 3.7.0

* Making Product Carousel and Cards Adaptive to content 
* Link Click Tracking event fired


**Full Changelog**: https://github.com/adobe/aepsdk-concierge-android/compare/v3.6.0...v3.7.0

## May 21, 2026

### Android Brand Concierge 3.6.0

## Release Notes
### Event Tracking System

* Adds event tracking at parity with Android SDK via `ConciergeEventTracker`
* Tracking is **opt-in** — disabled by default. Call `Concierge.enableTracking(enable: true)` to activate.
* AEPEdge is not a compile-time dependency — events are silently dropped if the extension is absent.
* PII sanitization: `query` (QuerySubmitted) and `notes` (FeedbackSubmitted) are dropped. Card payloads filtered to `productName` and `productPageURL` only.
* Public API renamed to `setEdgeTrackingEnabled(enable:)`.
* Chat lifecycle tracking: open timestamp, close with duration (ms).
* Cards-only responses correctly emit paired `responseStarted`/`responseCompleted`.
* `ConciergeCardTapHandler` for card tap tracking.
* Demo app: `ConciergeTracker` as an integration reference. If the application wants to implement it's own tracking.
* CI: iOS simulator bumped to 18.5.

| Event | XDM Type | Payload Keys |
|---|---|---|
| `sessionInitialized` | `session:initialized` | — |
| `chatOpened` | `chat:opened` | `epochTime` |
| `chatClosed` | `chat:closed` | `epochTime`, `durationMillis` |
| `querySubmitted` | `query:submitted` | *(query dropped — PII)* |
| `promptSuggestionClicked` | `promptSuggestion:clicked` | `suggestion` |
| `welcomePromptSuggestionClicked` | `welcomePromptSuggestion:clicked` | `suggestion` |
| `cardClicked` | `card:clicked` | `element` (`productName`, `productPageURL` only) |
| `micButtonClicked` | `micButton:clicked` | — |
| `responseStarted` | `response:started` | `conversationId`, `interactionId` |
| `responseCompleted` | `response:completed` | `conversationId`, `interactionId` |
| `cardsRendered` | `cards:rendered` | `displayMode`, `elements` (filtered) |
| `feedbackSubmitted` | `feedback:submitted` | `conversationId`, `interactionId`, `feedbackType`, `selectedOptions` *(notes dropped — PII)* |
| `disclaimerLinkClicked` | `disclaimerLink:clicked` | `url` |
| `errorOccurred` | `error:occurred` | `errorMessage` |
| `ctaButtonClicked` | `ctaButton:clicked` | — |

*--

### LinkHints

* `LinkHint` struct (`kind`, `href`) surfaced from the server response and passed through to `ChatMessageView`.
* Drives semantic link icons in citations: `kind == "phone"` → phone icon, `kind == "store"` → storefront icon.
* Controlled by `theme.behavior.citations.showLinkIcon`; no icon rendered when disabled.
* Example theme JSON:
  ```json
  {
    "behavior": {
      "citations": {
        "showLinkIcon": true,
        "phoneIcon": "your_phone_asset_name",
        "storeIcon": "your_store_asset_name",
        "defaultLinkIcon": "your_default_asset_name",
        "linkIconStyle": {
          "size": 10,
          "spacing": 2,
          "baselineAdjust": 0,
          "color": "#004C3F"
        }
      }
    }
  }
  ```

*--

### Configurable Feedback

* `ConciergeFeedbackBehavior` controls the thumbs-up/down feedback overlay via theme.
* `displayMode`: `"modal"` (centered dialog with blurred backdrop) or `"action"` (bottom action sheet with drag affordance).
* `thumbsPlacement`: `"inline"` (in sources row), `"below"` (below source rows), `"standalone"` (always a separate block).
* `showCloseButton` / `showCancelButton`: optional overrides (defaults driven by `displayMode`).
* `alwaysDisplay`: shows thumbs on every agent message regardless of server `feedback.eligible` flag.
* Positive/negative option lists and notes field enabled/disabled via theme arrays.
* Example theme JSON:
  ```json
  {
    "behavior": {
      "feedback": {
        "thumbsPlacement": "inline",
        "alwaysDisplay": false
      }
    }
  }
  ```

*--

### Chat Top Bar Image Support

* Added a new top-level `header` theme section (`ConciergeHeaderConfig`) with the following configurable keys:

| Theme JSON key | Type | Default | Description |
|---|---|---|---|
| `header.title` | `String` | `""` | Title text shown in the header bar |
| `header.subtitle` | `String` | `""` | Subtitle text shown below the title |
| `header.image` | `String` | `""` | Local asset name for the header image |
| `header.layoutType` | `"textOnly"` \| `"imageOnly"` | `"textOnly"` | Controls whether image or text is shown |
| `header.imageHeight` | `CGFloat` | `48` | Maximum height of the header image in points |

* `textOnly` (default): shows title/subtitle; image is hidden even if provided.
* `imageOnly`: shows the header image only; title/subtitle are hidden.
* Falls back to SF Symbol `ellipsis.message.fill` when `header.image` is absent or the asset cannot be resolved.
* **Breaking change**: `header.title` and `header.subtitle` have been moved out of the `text` (`ConciergeCopy`) section into the new `header` top-level object. Remove `"header.title"` and `"header.subtitle"` from the `text` block of any existing theme JSON.

*--

### Input Bar Revamp

* Animated transitions between recording and text states in the composer.
* Bottom-aligned cross, send, recording, and other action icons.
* Max input lines increased to 10.
* New behavior theme keys in `ConciergeInputBehavior` (`behavior.input`):

| Theme JSON key | Type | Default | Description |
|---|---|---|---|
| `enableRecordingAnimation` | `Bool` | `false` | Show/hide the rotating glow border animation during voice recording |
| `stopRecordingIcon` | `String?` | `nil` | Asset name for the stop-recording button; falls back to SF Symbol `stop.circle.fill` |

*--

### Theme / Layout Changes

New and updated keys in `ConciergeLayout` (`layout`) — also available as CSS variables:

| Theme JSON key | CSS variable | Type | Old default | New default | Description |
|---|---|---|---|---|---|
| `productCardTitleSubtitleSpacing` | `product-card-title-subtitle-spacing` | `CGFloat?` | — | `nil` | Spacing between title and subtitle in product cards |
| `productCardSectionSpacing` | `product-card-section-spacing` | `CGFloat?` | — | `nil` | Spacing between sections in product cards |
| `productCardPriceSpacing` | `product-card-price-spacing` | `CGFloat?` | — | `nil` | Spacing above the price row in product cards |
| `productCardTextTopPadding` | `product-card-text-top-padding` | `CGFloat` | `20` | `16` | Top padding for the product card text area |
| `productCardTextBottomPadding` | `product-card-text-bottom-padding` | `CGFloat` | `12` | `0` | Bottom padding for the product card text area |
| `productCardTextHorizontalPadding` | `product-card-text-horizontal-padding` | `CGFloat` | `12` | `0` | Horizontal padding for the product card text area |

*--

### Bug Fixes

* **ChatMessageView stack overflow crash**: Extracted `BasicMessageView` from `ChatMessageView` to resolve a recursive layout crash on physical devices.
* **Stop recording icon**: Fixed resizing and scaling of the stop-recording button icon in the input bar.
* **Product card dynamic height**: Removed hardcoded card height; image view is now flexible.
* **Font design**: Removed `.rounded` font design from chat views to use the default system font.

## New Contributors
* @sagar-sharma-adobe made their first contribution in https://github.com/adobe/aepsdk-concierge-android/pull/116
* @ishwetansh made their first contribution in https://github.com/adobe/aepsdk-concierge-android/pull/119
* @navratan-soni made their first contribution in https://github.com/adobe/aepsdk-concierge-android/pull/123

**Full Changelog**: https://github.com/adobe/aepsdk-concierge-android/compare/v3.5.0...v3.6.0

### iOS Brand Concierge 5.6.0



## April 17, 2026

### iOS Brand Concierge 5.5.0

* Added comprehensive theming support for the feedback dialog, including background, text, checkbox, drag handle, and button styling. See the new feedback dialog rows in the iOS [style guide](ios/style-guide.md).
* Added behavior flags to independently control the visibility of the X close and Cancel buttons in the feedback dialog.
* Extended text alignment tokens to accept additional value aliases.
* Improved markdown paragraph rendering to correctly preserve paragraph boundaries when paragraphs begin with inline formatting.
* Fixed citation badge spacing to keep the citation marker adjacent to trailing punctuation.
* Expanded and corrected implementation guide documentation.

### Android Brand Concierge 3.5.0

* Removed the `showNotes` behavior flag and `--feedback-notes-text-color` CSS token. This is a breaking change for apps referencing these properties.

### Android Brand Concierge 3.4.0

* Added comprehensive theming support for the feedback dialog, including background, text, checkbox, drag handle, and button styling. See the new feedback dialog rows in the Android [style guide](android/style-guide.md).
* Added behavior flags to independently control the visibility of the X close and Cancel buttons in the feedback dialog.
* Extended text alignment tokens to accept additional value aliases.
* Improved feedback dialog layout consistency between modal card and bottom sheet display modes.

## April 14, 2026

### Android Brand Concierge 3.3.1

* Updated link handling logic to route URIs (e.g., custom schemes, app links, intent://, mailto:, etc.) through Android system handlers to ensure correct routing of non-HTTP(S) schemes.

## April 13, 2026

### iOS Brand Concierge 5.4.0

* Added theming and layout support for the thinking/loading animation displayed while the agent processes a response.
* Added support for displaying a bundled or remote icon next to agent text responses.
* Added prompt suggestions theming and customization support.
* Added a speech balloon style option for chat bubbles.
* Added Chat state persistence. Chat state now persists across hide/show cycles and resets automatically on session TTL expiry.
* Refactored chat message and carousel padding/layout for more consistent spacing.

### Android Brand Concierge 3.3.0

* Added theming and layout support for the thinking/loading animation displayed while the agent processes a response.
* Added support for displaying a bundled or remote icon next to agent text responses.
* Added prompt suggestions theming and customization support.
* Added a speech balloon style option for chat bubbles.
* Fixed overlap issues with the software keyboard.
* Fixed keyboard dismissal. The software keyboard is now automatically dismissed when voice recording starts.

## March 27, 2026

### iOS Brand Concierge 5.3.0

* Improved UI consistency, theming, and product card presentation
* Added CTA button support and enhanced user input/feedback experience
* Improved parsing and rendering of multimodal content and lists

### Android Brand Concierge 3.2.0

* Improved UI consistency, theming, and product card presentation
* Added CTA button support and enhanced user input/feedback experience
* Improved parsing and rendering of multimodal content and lists
* Added test coverage for parsing and theming components

## March 18, 2026

### iOS Brand Concierge 5.2.0

* Added an optional `handleLink` callback to `Concierge.show()`, `Concierge.wrap()`, and `Concierge.present(on:)` giving host apps control over link resolution, with automatic fallback to universal link verification and in-app WebView.
* Fixed an issue where in-app WebView page navigation could reload the original URL instead of allowing normal page transitions.

## March 12, 2026

### Android Brand Concierge 3.1.0

* Added a new `productDetail` carousel card style featuring a large image, badge overlay, product name, subtitle, current price, and "was" price. Can be displayed as a standalone card or within a carousel.
* Added a new `carouselStyle` behavior property (`"scroll"` or `"paged"`) and supporting theme CSS variables for product card styling.
* Added an optional `handleLink` callback to `ConciergeChat` giving host apps control over link resolution, with automatic fallback to Android App Link verification and in-app WebView.

### iOS Brand Concierge 5.1.0

* Added a new `productDetail` card style featuring a large image, badge overlay, product name, subtitle, current price, and "was" price. Can be displayed as a standalone card or within a carousel.
* Added a new `carouselStyle` behavior property (`"scroll"` or `"paged"`) and supporting theme CSS variables for product card styling.
* Added universal link routing support for http/https URLs in `ConciergeLinkHandler`.

## March 3, 2026

### Android Brand Concierge 3.0.3

* Resolved an issue with parsing multimodal elements in Concierge responses.
* Replaced experimental Jetpack components to improve stability and compatibility.

## February 23, 2026

### Android Brand Concierge 3.0.2

* Update the default Consent value to `in` for apps which do not have the Consent extension installed.

## February 19, 2026

### Android Brand Concierge 3.0.1

* Fix the Consent payload sent in Concierge requests.

## February 18, 2026

### Android Brand Concierge 3.0.0

* Initial release of Adobe Brand Concierge Android SDK
  * Transform your digital properties into interactive, conversational experiences that guide discovery, anticipate customer needs, and build trust with Brand Concierge — powered by AI.
  * [Official documentation](https://business.adobe.com/products/brand-concierge.html)

## February 17, 2026

### iOS Brand Concierge 5.0.0

* Initial release of Adobe Brand Concierge iOS SDK
  * Transform your digital properties into interactive, conversational experiences that guide discovery, anticipate customer needs, and build trust with Brand Concierge — powered by AI.
  * [Official documentation](https://business.adobe.com/products/brand-concierge.html)
