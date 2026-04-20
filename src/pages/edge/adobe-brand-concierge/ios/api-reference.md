---
title: Brand Concierge API reference (iOS)
description: An API reference for the Brand Concierge iOS extension.
keywords:
- Brand Concierge
- iOS
- API reference
---

import Tabs from './tabs/api-reference.md'

# Brand Concierge API reference (iOS)

## wrap

Wraps a SwiftUI view with the Brand Concierge overlay and optional floating button. Call this once at the app's root to enable the chat overlay across the entire view hierarchy.

<InlineAlert variant="info" slots="text"/>

The `surfaces`, `title`, `subtitle`, and `handleLink` parameters on `wrap(...)` only apply when chat is triggered via the built-in floating button. When chat is triggered via `Concierge.show(...)` or `Concierge.present(on:...)`, the values passed to those APIs are used instead.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=wrap"/>

## show

Opens the chat overlay for a new chat session. Requires the view hierarchy to have been wrapped with `Concierge.wrap(...)` first.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=show"/>

## hide

Dismisses the currently presented chat overlay.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=hide"/>

## present

Embeds the chat UI as a child view controller into an existing `UIViewController`. Use this for UIKit-based apps.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=present"/>

## ConciergeThemeLoader.load

Loads a `ConciergeTheme` from a JSON file in a bundle. Returns `nil` if the file cannot be found or parsed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=theme-loader-load"/>

## ConciergeThemeLoader.default

Returns the built-in default `ConciergeTheme`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Swift

<Tabs query="platform=swift&api=theme-loader-default"/>
