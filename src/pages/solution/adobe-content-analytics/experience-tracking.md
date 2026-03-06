---
title: Experience Tracking Usage Guide
description: Learn how to use experience tracking in Content Analytics.
keywords:
- Adobe Analytics
- Product overview
---
import Tabs from './tabs/experience-tracking.md'
import InitializeSDK from '/src/pages/resources/initialize.md'

# Experience tracking

Experience tracking measures how users interact with complete experiences (combinations of images, text, and CTAs) in your app.

## Quick start

You first register the experience. Then you can track the view of the experience, when the experience becomes visible. Or you can track the click on the experience, when the experience gets tapped.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=quick-start"/>

iOS

<Tabs query="platform=ios&task=quick-start"/>

## Registration required

You must register an experience definition before tracking views or clicks. If you don't:

* Asset attribution won't work.
* Featurization hits won't be sent.
* A warning will be logged.

### Basic usage

Basis usage of experience tracking is that you first register the experience, and then track the experience view or click.

### Register the experience

Register the experience once with all of its content.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=basic-usage"/>

iOS

<Tabs query="platform=ios&task=basic-usage"/>

### Track interactions

Then track the experience.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=track-experience"/>

iOS

<Tabs query="platform=ios&task=track-experience"/>

## Session lifecycle

Experience definitions are cached in memory for the duration of the app session. After app restart or crash, you'll need to re-register experiences before tracking.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=session-lifecycle"/>

iOS

<Tabs query="platform=ios&task=session-lifecycle"/>

Re-registration is idempotent. Calling `registerExperience()` with the same content returns the same ID with no negative side effects. The featurization service is also idempotent, so even if the same experience definition is sent multiple times (for example, after cache eviction or app restart), there's no duplication or data inconsistency on the backend.

### Cache Behavior

The SDK uses an LRU (Least Recently Used) cache with a capacity of 100 experience definitions:

* Capacity: 100 definitions maximum.
* Eviction: When full, least recently used definitions are removed.
* Memory-only: Not persisted to disk.

The benefits are:

* Fast lookups for asset attribution.
* Bounded memory usage (~20-40KB worst case).
* Automatic cleanup of stale definitions.
* No disk I/O overhead.
* Safe re-registration: Featurization service handles duplicates gracefully.

For most apps, 100 definitions is sufficient. If you're registering more unique experiences per session, consider reusing experience IDs where content is identical (same content = same ID).

## Implementation patterns

See below for examples of implementation patterns.

### Single screen

Implementation of experience tracking for a single screen.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=implementation-single-screen"/>

iOS

<Tabs query="platform=ios&task=implementation-single-screen"/>

### Collection or feed

Implementation of experience tracking fora collection or a feed.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=implementation-collection-feed"/>

iOS

<Tabs query="platform=ios&task=implementation-collection-feed"/>

### Experience ID generation

Experience IDs are deterministic - the same content always produces the same ID. The algorithm:

1. Sort text values alphabetically.
1. Sort asset URLs alphabetically.
1. Sort CTA values alphabetically.
1. Join all with | separator (texts, then assets, then CTAs).
1. SHA-1 hash the combined string.
1. Take first 12 hex characters.
1. Prefix with `mobile-`.

#### Example

Imagine the following details:

```text
// Content: texts=["$99", "Product"], assets=["img.jpg"], ctas=["Buy"]
// Sorted & joined: "Product|$99|img.jpg|Buy"
// SHA-1 → first 12 chars → "mobile-a1b2c3d4e5f6"
```

This means you can:

* Pre-compute IDs server-side for consistent cross-platform IDs.
* Cache by content hash instead of arbitrary keys.
* Detect content changes by comparing IDs.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=experience-id-generation"/>

iOS

<Tabs query="platform=ios&task=experience-id-generation"/>

## Missing registration warning

If you track without registering, you will see this warning.

<InlineAlert variant="error" slots="text"/>

Experience definition not found for 'exp-123'. Call `registerExperience()` before tracking views/clicks.

This means:

* View/click events still go to Analytics.
* But asset attribution won't work.
* Featurization service won't get the data.

Fix the warning by registering the experience first.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=missing-registration-warning"/>

iOS

<Tabs query="platform=ios&task=missing-registration-warning"/>

## Asset attribution

When you register an experience with assets, the SDK links those asset URLs to the experience. This enables asset attribution: connecting standalone asset tracking events to their parent experience.

<InlineAlert variant="info" slots="text"/>

Asset attribution works regardless of the `batchingEnabled` setting. The SDK caches experience definitions locally, so attribution is based on the registration cache - not on how events are batched for network delivery.

### How it works

See below how asset attribution works.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=asset-attribution"/>

iOS

<Tabs query="platform=ios&task=asset-attribution"/>

When the analytics backend receives `trackAssetView` for `hero.jpg`, the backend attributes that view to the `Summer Sale` experience because the asset URL was registered.

### Without attribution

You can track an asset without registering the experience first.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=implementation-collection-feed"/>

iOS

<Tabs query="platform=ios&task=implementation-collection-feed"/>

The asset view is still recorded, but the asset view is not linked to any experience. As a result, you lose:

* Which experience contained this asset.
* Performance metrics per experience.
* A/B test attribution.

## Location strategy

The `experienceLocation` and `assetLocation` parameters control how metrics are grouped in Customer Journey Analytics.

### With location - Metrics per placement

Track the same experience at different locations.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=with-location-metrics-per-placement"/>

iOS

<Tabs query="platform=ios&task=with-location-metrics-per-placement"/>

A sample Customer Journey Analytics report for this scenario will look like:

| Experience | Location | Views | Clicks | CTR |
|---|---|--:|--:|--:|
| Summer Sale | `homepage.`<br/>`hero` | 10,000 | 500 | 5% |
| Summer Sale | `product.`<br/>`sidebar` | 3,000 | 90 | 3% |
| Summer Sale | `checkout.`<br/>`upsell` | 1,000 | 150 | 15% |

You can use this report to answer questions like *"Where does this experience perform best?"*

### Without location - global metrics

Track experiences without location details to get aggregate metrics.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=without-location-global-metrics"/>

iOS

<Tabs query="platform=ios&task=without-location-global-metrics"/>

A sample Customer Journey Analytics report for this scenario will look like:

| Experience | Views | Clicks | CTR |
|---|---|--:|--:|
| Summer Sale | 14,000 | 740 | 5.3% |

You can use this report to answer questions like *How is this experience performing overall?*

### Same asset - different locations

Track the same asset on different locations.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=same-asset-different-locations"/>

iOS

<Tabs query="platform=ios&task=same-asset-different-locations"/>

Customer Journey Analytics report will look like:

| Experience | Location | Views | Clicks |
|---|---|--:|--:|
| Summer Sale | `homepage` | 50,000 | 2,500 |
| Summer Sale | `category.`<br/>`electronics` | 8,000 | 320 |
| Summer Sale | `search.`<br/>`results` | 3,000 | 45 |

## Location naming convention

Use a consistent location naming hierarchy to filter on locations easily in Customer Journey Analytics.

```text
screen.section.subsection
```

Examples are:

* `homepage.hero`
* `homepage.featured`
* `product.detail.recommendations`
* `cart.upsell`
* `search.results.sponsored`

### When to use a location

See the following goals and whether you should consider to use locations or not.

| Goal | Location |
|---|---|
| Compare same content across placements | ✅ Set location |
| A/B test content in a specific spot | ✅ Set location|
| Track overall content performance | ❌ Omit location |
| Simple asset tracking (no placement analysis) | ❌ Omit location |

## Machine learning powered analytics

When you register experiences, the featurization service analyzes the content and extracts machine learning (ML) attributes like persuasion strategy, emotional tone, content category, and more. These attributes are then available in Customer Journey Analytics for advanced analysis.

### Performance by persuasion strategy

After featurization, Customer Journey Analytics can show which persuasion strategies work best in each location.

Customer Journey Analytics report - persuasion strategy by location:

| Location | Persuasion strategy | Views | Click | CTR |
|---|---|--:|--:|--:|
| `homepage.`<br/>`hero` |   Urgency  |  10,000  |  800 |   8% |
| `homepage.`<br/>`hero` |   Social Proof  |  10,000  |  650  |  6.5% |
| `homepage.`<br/>`hero` |   Scarcity |   10,000  |  720 |   7.2% |
| `checkout.`<br/>`upsell` |   Urgency  |  2,000  |  300  |  15% |
| `checkout.`<br/>`upsell` |   Social Proof  |  2,000 |   180  |   9% |

Insight: **Urgency** messaging performs best at checkout (+15% CTR), while **Social Proof** works better on homepage.

### Performance by content category

Customer Journey Analytics report - asset category performance:

| Asset Category |   Location |   Views   | Engagement |
|---|---|--:|--:|
| Lifestyle  |  `homepage`  |  50,000  |  12% |
| Product-focused  |  `homepage`  |  50,000  |  8% |
| Lifestyle  |  `product.detail`  |  20,000  |  6% |
| Product-focused  |  `product.detail`  |  20,000  | 14% |

Insight: **Lifestyle** imagery works on homepage, but **Product-focused** images convert better on detail pages.

### How it works

1. You track: `registerExperience()` sends content to the featurization service.
1. ML analyzes: service extracts persuasion strategy, tone, category, and more.
1. Attributes stored: machine learning attributes are linked to the experience/asset.
1. Customer Journey Analytics queries: Reports can segment by any machine learning attribute and location.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=performance-by-content-category"/>

iOS

<Tabs query="platform=ios&task=performance-by-content-category"/>

In Customer Journey Analytics, you can then filter or group by persuasion strategy to see what messaging resonates in each location.

## Custom metrics with `additionalData`

The `additionalData` parameter lets you attach custom metrics to tracking events. These appear in Customer Journey Analytics as additional dimensions or metrics.

### Asset performance metrics

To get asset performance metrics, see this example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=asset-performance-metrics"/>

iOS

<Tabs query="platform=ios&task=asset-performance-metrics"/>

### Asset view duration

To get asset view duration, see this example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=asset-view-duration"/>

iOS

<Tabs query="platform=ios&task=asset-view-duration"/>

### Experience engagement metrics

To get experience engagement metrics, see this example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=experience-engagement-metrics"/>

iOS

<Tabs query="platform=ios&task=experience-engagement-metrics"/>

### Common custom metrics

| Metric  |  Type   | Description |
|---|---|---|
| `assetLoadTime`  |  Double |   Image/video load time (ms).. |
| `assetViewDuration` |   Double   | Time asset was visible (ms). |
| `assetSize`  |  Int  |  Asset file size (bytes). |
| `experienceViewDuration`  |  Double  |  Time before interaction (ms). |
| `scrollDepth`  |  Double |   Scroll position when viewed (%). |
| `viewportPosition`  |  String  |  `above_fold` / `below_fold`. |
| `interactionIndex` |    Int  |  Nth click on this session .|
| `experimentVariant`  |  String  |  A/B test variant ID.|
| `deviceOrientation` |   String  |  `portrait` / `landscape`. |

#### Customer Journey Analytics report with custom metric.

For example average load time by asset location.

| Location |   Avg Load Time  |  Avg View Duration |
|---|--:|--:|
| `homepage.hero`  |  120ms |   3.2s |
| `product.gallery` |   85ms  |  8.5s |
| `search.results` |   45ms  |  1.1s |

Insight: Gallery images load slower but get 8x more viewing time.

## Debugging with Assurance

Adobe Assurance (Project Griffon) lets you inspect tracking events in real-time. Connect your app to an Assurance session to see exactly what payloads are being sent.

### Setup

To setup Assurance, import the extension and start the session.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=debugging-with-assurance"/>

iOS

<Tabs query="platform=ios&task=debugging-with-assurance"/>

### What You'll See in Assurance

1. Track Asset Events

    When you call trackAssetView() or trackAssetClick(), you'll see:

    ```json
    Event: Track Asset
    Type: com.adobe.eventType.contentAnalytics
    Source: com.adobe.eventSource.requestContent

    Payload:
    {
    "assetURL": "https://example.com/hero.jpg",
    "interactionType": "view",
    "assetLocation": "homepage.hero",
    "assetExtras": {
        "assetLoadTime": 120,
        "assetSize": 45000
    }
    }
    ```

2. Track Experience Events

    * When you call `registerExperience()`:

        ```json
        Event: Track Experience
        Type: com.adobe.eventType.contentAnalytics

        Payload:
        {
        "experienceId": "mobile-abc123...",
        "interactionType": "definition",
        "assetURLs": ["https://example.com/hero.jpg"],
        "texts": [
            {"value": "Summer Sale", "styles": {"role": "headline"}}
        ],
        "ctas": [
            {"value": "Shop Now", "styles": {"enabled": true}}
        ]
        }
        ```

    * When you call trackExperienceView() or trackExperienceClick():

        ```json
        Event: Track Experience
        Type: com.adobe.eventType.contentAnalytics

        Payload:
        {
        "experienceId": "mobile-abc123...",
        "interactionType": "view",
        "experienceLocation": "homepage.hero",
        "experienceExtras": {
            "experienceViewDuration": 3500
        }
        }
        ```

3. Edge Network Events

    After batching, you'll see the Edge request:

    ```json
    Event: Edge Request
    Type: com.adobe.eventType.edge

    Payload:
    {
    "xdm": {
        "eventType": "contentanalytics.asset.view",
        "_contentanalytics": {
        "asset": {
            "url": "https://example.com/hero.jpg",
            "location": "homepage.hero"
        }
        }
    }
    }
    ```

### Debugging checklist

| What to Check  |  Where in Assurance |
|---|---|
| Event dispatched  |  Look for Track Asset / Track Experience events. |
| Correct payload  |  Expand event → check assetURL, experienceId, etc. |
| Batching working |   Multiple events → single Edge request. |
| Edge delivery  |  Look for Edge Request after batch flush. |
| Consent status |   Check Edge Consent events. |

### Common Issues in Assurance

No events appearing:

* Check extension is registered.
* Verify MobileCore.dispatch() is being called.

Events but no Edge request:

* Check consent status (must be "yes" or "pending").
* Wait for batch timeout (default 5s) or threshold (default 10 events).

Missing experienceId in track events:

* Ensure registerExperience() was called first
* Check the returned ID is being passed to track methods

## Testing

To test your implementation, enable verbose logging.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=testing"/>

iOS

<Tabs query="platform=ios&task=testing"/>

Then look for registration confirmation

```text
[ContentAnalytics] Stored experience definition: exp-abc123 with 3 assets
```

And tracking confirmation:

```text
[ContentAnalytics] Experience event processed successfully: track-view - exp-abc123
Test cross-session: register, force quit, relaunch, track same ID. No warning should appear.
```

## Troubleshooting

* **Experience definition not found** warning: Register the experience before tracking it.
* Assets not attributed. Same issue - register with `assetURLs` before tracking.
* Duplicate registrations: Check if already registered before calling `registerExperience()`:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=troubleshooting"/>

iOS

<Tabs query="platform=ios&task=troubleshooting"/>

* Or compute the ID yourself using the algorithm above for content-based caching.

## Common patterns

Common implementation patterns are illustrated below.

### Carousel/Banner

To implement a carousel or banner, see below for an example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=carousel-banner"/>

iOS

<Tabs query="platform=ios&task=carousel-banner"/>

### Product Grid

To implement a product grid, see below for an example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=product-grid"/>

iOS

<Tabs query="platform=ios&task=product-grid"/>

### Reusable Tracking Component

To implement a reusable tracking component, see below for an example.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=reusable-tracking-component"/>

iOS

<Tabs query="platform=ios&task=reusable-tracking-component"/>
```
