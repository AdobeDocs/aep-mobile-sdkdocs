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

This section details how to programmatically configure the Content Analytics extension.

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

All keys are prepended with `contentanalytics.`.

You can configure the extension through the Data Collection Content Analytics extension UI, or programmatically.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=launch"/>

iOS

<Tabs query="platform=ios&task=launch"/>


## Datastream

You can stream data from content analytics through a separate datastream.

To route Content Analytics to a different datastream:

```json
{
  "edge.configId": "main-datastream-id",
  "contentanalytics.configId": "content-analytics-datastream-id"
}
```

If `contentanalytics.configId` is not set, the default `edge.configId` is used.


## Batching

You can use the following flush triggers:

- Batch reaches `maxBatchSize`.
- Timer reaches `batchFlushInterval` (ms).
- App backgrounds.

```json
{
  "contentanalytics.batchingEnabled": true,
  "contentanalytics.maxBatchSize": 10,
  "contentanalytics.batchFlushInterval": 2000
}
```

To disable flushes for immediate sends:

```json
{ "contentanalytics.batchingEnabled": false }
```

<InlineAlert variant="info" slots="text"/>

Batching only affects network delivery. Features like asset attribution, experience tracking, and featurization work the same whether batching is enabled or disabled.


## Filtering

You filter content analytics events through regular expressions.

### By URL

An example of a regex that filters out URLs.

```json
{ "contentanalytics.excludedAssetUrlsRegexp": ".*\\.gif$|.*spinner.*" }
```

### By Location

An example of a regex that filers our asset and experience locations.

```json
{ "contentanalytics.excludedAssetLocationsRegexp": "^(debug|test).*" }
{ "contentanalytics.excludedExperienceLocationsRegexp": "^admin\\..*" }
```

---

## Privacy

To manage privacy, use the consent API's.

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

The legacy privacy APIs also should work.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=edge-consent-legacy"/>

iOS

<Tabs query="platform=ios&task=edge-consent-legacy"/>


### Data Deletion

To delete data, use resetIdentities() to reset identities, clear cache and queue.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=data-deletion"/>

iOS

<Tabs query="platform=ios&task=data-deletion"/>


## Featurization

Featurization is configured automatically. Sends experience content to the machine learning service for feature extraction.

See below for an example of the payload to send.

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


## Tuning Batch Settings

The default settings (`maxBatchSize: 10`, `batchFlushInterval: 2000` ms) should work well for most apps. Adjust these settings based on your event volume:

| Events per Minute | maxBatchSize | batchFlushInterval (ms) | Notes |
|-------------------|--------------|-------------------------|-------|
| < 10 | 10 (default) | 2000 (default) | Default works well |
| 10-50 | 15-25 | 3000 | Reduces network calls |
| > 50 | 25-50 | 5000 | High-volume optimization |

**Trade-off:** Larger batches reduce network overhead but increase latency before data appears in reporting.

---

## Debugging

Use `setLogLevel()` to set the debugging level.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=debugging"/>

iOS

<Tabs query="platform=ios&task=debugging"/>


Log entries are tagged. See below for the various tags.

- `[ContentAnalytics]` - main
- `[ContentAnalytics.Batch]` - batching
- `[ContentAnalytics.Featurization]` - ML service
