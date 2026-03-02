---
title: Content Analytics Advanced Configuration
description: Learn how to configure advanced features for Content Analytics.
keywords:
- Adobe Analytics
- Product overview
---
import Tabs from './tabs/advanced-configuration.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Advanced Configuration

## Configuration Keys

All keys are prepended with `contentanalytics.`.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `configId` | String | - | Datastream override |
| `trackExperiences` | Bool | `true` | Enable experience tracking |
| `batchingEnabled` | Bool | `true` | Enable batching |
| `maxBatchSize` | Int | `10` | Events before flush (1-100) |
| `batchFlushInterval` | Double | `2000` | Milliseconds between flushes |
| `excludedAssetUrlsRegexp` | String | - | Exclude assets by URL |
| `excludedAssetLocationsRegexp` | String | - | Exclude assets by location |
| `excludedExperienceLocationsRegexp` | String | - | Exclude experiences by location |

**Set via Launch UI** or programmatically:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=launch"/>

iOS

<Tabs query="platform=ios&task=launch"/>


## Datastream

### Separate Datastream

Route Content Analytics to a different datastream:

```json
{
  "edge.configId": "main-datastream-id",
  "contentanalytics.configId": "content-analytics-datastream-id"
}
```

If `contentanalytics.configId` is not set, uses `edge.configId`.

---

## Batching

Flush triggers:

- Batch reaches `maxBatchSize`
- Timer reaches `batchFlushInterval` (ms)
- App backgrounds

```json
{
  "contentanalytics.batchingEnabled": true,
  "contentanalytics.maxBatchSize": 10,
  "contentanalytics.batchFlushInterval": 2000
}
```

Disable for immediate sends:

```json
{ "contentanalytics.batchingEnabled": false }
```

<InlineAlert variant="note" slots="text"/>

Batching only affects network delivery. Features like asset attribution, experience tracking, and featurization work the same whether batching is enabled or disabled.


## Filtering

### By URL

```json
{ "contentanalytics.excludedAssetUrlsRegexp": ".*\\.gif$|.*spinner.*" }
```

### By Location

```json
{ "contentanalytics.excludedAssetLocationsRegexp": "^(debug|test).*" }
{ "contentanalytics.excludedExperienceLocationsRegexp": "^admin\\..*" }
```

---

## Privacy

### Edge Consent

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=edge-consent"/>

iOS

<Tabs query="platform=ios&task=edge-consent"/>

| Value | Result |
|-------|--------|
| `"y"` | Events sent |
| `"n"` | Events dropped |
| `"p"` | Events queued |

### Legacy

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=edge-consent-legacy"/>

iOS

<Tabs query="platform=ios&task=edge-consent-legacy"/>

### Data Deletion

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=data-deletion"/>

iOS

<Tabs query="platform=ios&task=data-deletion"/>

---

## Featurization

Configured automatically. Sends experience content to ML service for feature extraction.

Payload sent:

```json
{
  "experienceId": "mobile-abc123",
  "orgID": "YOUR_ORG@AdobeOrg",
  "content": {
    "images": [{"value": "https://...jpg", "style": {}}],
    "texts": [{"value": "Title", "style": {"role": "headline"}}],
    "ctas": [{"value": "Buy", "style": {"enabled": true}}]
  }
}
```

---

## Tuning Batch Settings

The default settings (`maxBatchSize: 10`, `batchFlushInterval: 2000` ms) work well for most apps. Adjust based on your event volume:

| Events per Minute | maxBatchSize | batchFlushInterval (ms) | Notes |
|-------------------|--------------|-------------------------|-------|
| < 10 | 10 (default) | 2000 (default) | Default works well |
| 10-50 | 15-25 | 3000 | Reduces network calls |
| > 50 | 25-50 | 5000 | High-volume optimization |

**Trade-off:** Larger batches reduce network overhead but increase latency before data appears in reporting.

---

## Debugging

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=debugging"/>

iOS

<Tabs query="platform=ios&task=debugging"/>

Log tags:

- `[ContentAnalytics]` - main
- `[ContentAnalytics.Batch]` - batching
- `[ContentAnalytics.Featurization]` - ML service
