---
title: Brand Concierge release notes
description: Release notes for the Brand Concierge mobile extension.
keywords:
- Brand Concierge
- Release notes
---

# Release notes

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
