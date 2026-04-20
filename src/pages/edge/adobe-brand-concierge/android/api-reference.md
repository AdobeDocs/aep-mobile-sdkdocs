---
title: Brand Concierge API reference (Android)
description: An API reference for the Brand Concierge Android extension.
keywords:
- Brand Concierge
- Android
- API reference
---

import Tabs from './tabs/api-reference.md'

# Brand Concierge API reference (Android)

## Managed Integration

The SDK manages the chat lifecycle. Provide a trigger UI element — the SDK shows it when the extension is ready and opens the chat as a full-screen dialog when the trigger is invoked.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Jetpack Compose

<Tabs query="platform=kotlin-compose&api=managed"/>

XML/Views

<Tabs query="platform=kotlin-xml&api=managed"/>

## Custom Integration

Embed the chat interface directly into your screen and manage its lifecycle yourself. Use this for dedicated chat screens or custom layouts where you control when chat appears and handle dismissal.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Jetpack Compose

<Tabs query="platform=kotlin-compose&api=custom"/>

XML/Views

<Tabs query="platform=kotlin-xml&api=custom"/>

## ConciergeThemeLoader.load

Loads a `ConciergeThemeData` from a JSON file in the app's `assets` directory. Returns `null` if the file cannot be found or parsed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Kotlin

<Tabs query="platform=kotlin&api=theme-loader-load"/>

## ConciergeThemeLoader.default

Returns the built-in default `ConciergeThemeData`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Kotlin

<Tabs query="platform=kotlin&api=theme-loader-default"/>
