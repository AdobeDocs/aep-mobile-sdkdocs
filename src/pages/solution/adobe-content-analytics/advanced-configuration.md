---
title: Content Analytics Advanced Configuration
description: Learn how to configure advanced features for Content Analytics.
keywords:
- Adobe Analytics
- Product overview
---
# Advanced Configuration

## Configuration Keys

This section details how to programmatically configure the Content Analytics extension.

The following config settings are available. These settings can also be managed within the [Adobe Content Analytics extension](index.md#configure-the-content-analytics-extension).

| Setting | Type | Default | Description |
|---|---|---|---|
| `configId` | String | N/A | [Custom datastream for Content Analytics events](index.md#datastreams) (overrides edge.configId) |
| `batchingEnabled` | Boolean | true | [Enable batching](index.md#batching-settings) |
| `maxBatchSize` | Integer | 10 | [Maximum events per batch](index.md#batching-settings). |
| `flushInterval` | Integer | 2000 | [Flush interval (in milliseconds)](index.md#batching-settings) |
| `trackExperiences` | Boolean | true | [Enable experience tracking](index.md#general-settings). |
| `excludedAssetLocationsRegexp` | String | - | [Asset location regex pattern](index.md#exclusions). |
| `excludedAssetUrlsRegexp` | String | - | [Asset URL regex pattern](index.md#exclusions). |
| `excludedExperienceLocationsRegexp` | String | - | [Experience location regex pattern](index.md#exclusions). |
| `debugLogging` | Boolean | false | [Verbose logging](index.md#general-settings). |

All keys are prepended with `contentanalytics.`.

You can configure the extension through the Data Collection Content Analytics extension UI, or programmatically.

### Android

```java
MobileCore.updateConfiguration(mapOf(
    "contentanalytics.maxBatchSize" to 20,
    "contentanalytics.batchFlushInterval" to 5000
))
```

### iOS

```swift
MobileCore.updateConfigurationWith(configDict: [
    "contentanalytics.maxBatchSize": 20,
    "contentanalytics.batchFlushInterval": 5000
])
```

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

* Batch reaches `maxBatchSize`.
* Timer reaches `batchFlushInterval` (ms).
* App backgrounds.

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

## Privacy

To manage privacy, use the consent API's.

### Edge Consent

### Android

```java
// Opt in
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "y"))))

// Opt out
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "n"))))

// Pending
Consent.update(mapOf("consents" to mapOf("collect" to mapOf("val" to "p"))))
```

### iOS

```swift
// Opt in
Consent.update(with: ["consents": ["collect": ["val": "y"]]])

// Opt out
Consent.update(with: ["consents": ["collect": ["val": "n"]]])

// Pending
Consent.update(with: ["consents": ["collect": ["val": "p"]]])
```

| Value | Result |
|-------|--------|
| `"y"` | Events sent |
| `"n"` | Events dropped |
| `"p"` | Events queued |

### Legacy

The legacy privacy APIs also should work.

### Android

```java
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN)   // send
MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT)  // drop + clear
MobileCore.setPrivacyStatus(MobilePrivacyStatus.UNKNOWN)  // queue
```

### iOS

```swift
MobileCore.setPrivacyStatus(.optedIn)   // send
MobileCore.setPrivacyStatus(.optedOut)  // drop + clear
MobileCore.setPrivacyStatus(.unknown)   // queue
```

### Data Deletion

To delete data, use `resetIdentities()` to reset identities, clear cache and queue.

### Android

```java
MobileCore.resetIdentities()  // clears cache + queue
```

### iOS

```swift
MobileCore.resetIdentities()  // clears cache + queue
```

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

## Debugging

Use `setLogLevel()` to set the debugging level.

### Android

```java
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

### iOS

```swift
MobileCore.setLogLevel(.debug)
```

Log entries are tagged. See below for the various tags.

* `[ContentAnalytics]` - main
* `[ContentAnalytics.Batch]` - batching
* `[ContentAnalytics.Featurization]` - ML service
