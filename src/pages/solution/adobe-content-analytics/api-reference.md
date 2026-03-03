---
title: Adobe Campaign Standard API reference
description: An API reference for the Adobe Campaign Standard mobile extension.
keywords:
- Adobe Campaign Standard
- API reference
---

import Alerts from '/src/pages/resources/alerts.md'
import Tabs from './tabs/api-reference.md'

# Adobe Content Analytics API reference

This section details the publicly available API's for Content Analytics.

## registerExperience

Registers an experience and returns an ID to track the experience.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=register-experience"/>

iOS

<Tabs query="platform=ios&api=register-experience"/>

## trackAsset

Track an assets with an explicit defined interaction type.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-asset"/>

iOS

<Tabs query="platform=ios&api=track-asset"/>

## trackAssetClick

Convenience method for tracking asset clicks.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-asset-click"/>

iOS

<Tabs query="platform=ios&api=track-asset-click"/>

## trackAssetCollection

Tracks multiple assets with the same interaction type.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-asset-collection"/>

iOS

<Tabs query="platform=ios&api=track-asset-collection"/>

## trackAssetView

Convenience method for tracking asset views.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-asset-view"/>

iOS

<Tabs query="platform=ios&api=track-asset-view"/>

## trackExperienceClick

Track when an experience is clicked.

<InlineAlert variant="info" slots="text"/>

You must call [`registerExperience()`](#registerexperience) before you can track experience clicks. See the Experience Tracking Guide for detailed usage patterns.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-experience-click"/>

iOS

<Tabs query="platform=ios&api=track-experience-click"/>

## trackExperienceView

Track when an experience is viewed.

<InlineAlert variant="info" slots="text"/>

You must call [`registerExperience()`](#registerexperience) before you can track experience views. See the Experience Tracking Guide for detailed usage patterns.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=track-experience-view"/>

iOS

<Tabs query="platform=ios&api=track-experience-view"/>

## Data types

### contentItem

Represents the content within an experience (assets, texts, CTAs).

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=content-item"/>

iOS

<Tabs query="platform=ios&api=content-item"/>

### interactionType

Defines the type of interaction, either a view or a click.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&api=interaction-type"/>

iOS

<Tabs query="platform=ios&api=interaction-type"/>

## Configuration

The following config settings are available. These settings can also be managed within the [Adobe Content Analytics extension](/src/pages/solution/adobe-content-analytics/index.md#configure-the-content-analytics-extension).

| Setting | Type | Default | Description |
|---|---|---|---|
| `configId` | String | N/A | [Custom datastream for Content Analytics events](/src/pages/solution/adobe-content-analytics/index.md#datastreams) (overrides edge.configId) |
| `batchingEnabled` | Boolean | true | [Enable batching](/src/pages/solution/adobe-content-analytics/index.md#batching-settings) |
| `maxBatchSize` | Integer | 10 | [Maximum events per batch](/src/pages/solution/adobe-content-analytics/index.md#batching-settings). |
| `flushInterval` | Integer | 2000 | [Flush interval (in milliseconds)](/src/pages/solution/adobe-content-analytics/index.md#batching-settings) |
| `trackExperiences` | Boolean | true | [Enable experience tracking](/src/pages/solution/adobe-content-analytics/index.md#general-settings). |
| `excludedAssetLocationsRegexp` | String | - | [Asset location regex pattern](/src/pages/solution/adobe-content-analytics/index.md#exclusions). |
| `excludedAssetUrlsRegexp` | String | - | [Asset URL regex pattern](/src/pages/solution/adobe-content-analytics/index.md#exclusions). |
| `excludedExperienceLocationsRegexp` | String | - | [Experience location regex pattern](/src/pages/solution/adobe-content-analytics/index.md#exclusions). |
| `debugLogging` | Boolean | false | [Verbose logging](/src/pages/solution/adobe-content-analytics/index.md#general-settings). |
