---
title: Experience Tracking Usage Guide
description: Learn how to use experience tracking in Content Analytics.
keywords:
- Adobe Analytics
- Product overview
---
# Experience tracking

Experience tracking measures how users interact with complete experiences (combinations of images, text, and CTAs) in your app.

## Quick start

You first register the experience. Then you can track the view of the experience, when the experience becomes visible. Or you can track the interaction on the experience, when the experience gets clicked (tapped).

### Android

```java
// 1. Register (once per experience)
val expId = ContentAnalytics.registerExperience(
    assets = listOf(ContentItem("https://example.com/hero.jpg", emptyMap())),
    texts = listOf(ContentItem("Buy Now", mapOf("role" to "headline"))),
    ctas = listOf(ContentItem("Shop", mapOf("enabled" to true)))
)

// 2. Track view (when visible)
ContentAnalytics.trackExperienceView(expId, "homepage.hero")

// 3. Track click (on tap)
ContentAnalytics.trackExperienceClick(expId, "homepage.hero")
```

### iOS

```swift
// 1. Register (once per experience)
let expId = ContentAnalytics.registerExperience(
    assets: [ContentItem(value: "https://example.com/hero.jpg", styles: [:])],
    texts: [ContentItem(value: "Buy Now", styles: ["role": "headline"])],
    ctas: [ContentItem(value: "Shop", styles: ["enabled": true])]
)

// 2. Track view (when visible)
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "homepage.hero")

// 3. Track click (on tap)
ContentAnalytics.trackExperienceClick(experienceId: expId, experienceLocation: "homepage.hero")
```

## Registration required

You must register an experience definition before tracking views or clicks. If you don't:

* Asset attribution won't work.
* Featurization hits won't be sent.
* A warning will be logged.

### Basic usage

Basis usage of experience tracking is that you first register the experience, and then track the experience view or click.

### Register the experience

Register the experience once with all of its content.

### Android

```java
val experienceId = ContentAnalytics.registerExperience(
    assets = listOf(
        ContentItem("https://example.com/hero.jpg", emptyMap()),
        ContentItem("https://example.com/icon.png", emptyMap())
    ),
    texts = listOf(
        ContentItem("iPhone 16 Pro", mapOf("role" to "headline")),
        ContentItem("Forged in titanium", mapOf("role" to "body")),
        ContentItem("$999", mapOf("role" to "price"))
    ),
    ctas = listOf(
        ContentItem("Buy Now", mapOf("enabled" to true))
    )
)
```

### iOS

```swift
let experienceId = ContentAnalytics.registerExperience(
    assets: [
        ContentItem(value: "https://example.com/hero.jpg", styles: [:]),
        ContentItem(value: "https://example.com/icon.png", styles: [:])
    ],
    texts: [
        ContentItem(value: "iPhone 16 Pro", styles: ["role": "headline"]),
        ContentItem(value: "Forged in titanium", styles: ["role": "body"]),
        ContentItem(value: "$999", styles: ["role": "price"])
    ],
    ctas: [
        ContentItem(value: "Buy Now", styles: ["enabled": true])
    ]
)
```

### Track interactions

Then track the experience.

### Android

```java
ContentAnalytics.trackExperienceView(experienceId, "product.detail")
ContentAnalytics.trackExperienceClick(experienceId, "product.detail")
```

### iOS

```swift
ContentAnalytics.trackExperienceView(experienceId: experienceId, experienceLocation: "product.detail")
ContentAnalytics.trackExperienceClick(experienceId: experienceId, experienceLocation: "product.detail")
```

## Session lifecycle

Experience definitions are cached in memory for the duration of the app session. After app restart or crash, you'll need to re-register experiences before tracking.

### Android

```java
// Each app session
val expId = ContentAnalytics.registerExperience(
    assets = listOf(ContentItem("https://example.com/hero.jpg", emptyMap())),
    texts = listOf(ContentItem("Title", mapOf("role" to "headline")))
)
ContentAnalytics.trackExperienceView(expId, "home")
```

### iOS

```swift
// Each app session
let expId = ContentAnalytics.registerExperience(
    assets: [ContentItem(value: "https://example.com/hero.jpg", styles: [:])],
    texts: [ContentItem(value: "Title", styles: ["role": "headline"])]
)
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "home")
```

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

### Android

```java
class ProductDetailActivity : AppCompatActivity() {
    private var experienceId: String? = null
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_product_detail)
        
        experienceId = ContentAnalytics.registerExperience(
            assets = product.imageURLs.map { ContentItem(it, emptyMap()) },
            texts = listOf(
                ContentItem(product.name, mapOf("role" to "headline")),
                ContentItem(product.price, mapOf("role" to "price"))
            ),
            ctas = listOf(ContentItem("Add to Cart", mapOf("enabled" to true)))
        )
    }
    
    override fun onResume() {
        super.onResume()
        experienceId?.let { expId ->
            ContentAnalytics.trackExperienceView(expId, "product.detail.${product.id}")
        }
    }
    
    fun onBuyButtonClicked() {
        experienceId?.let { expId ->
            ContentAnalytics.trackExperienceClick(expId, "product.detail.${product.id}")
        }
    }
}
```

### iOS

```swift
class ProductDetailViewController {
    var experienceId: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        experienceId = ContentAnalytics.registerExperience(
            assets: product.imageURLs.map { ContentItem(value: $0, styles: [:]) },
            texts: [
                ContentItem(value: product.name, styles: ["role": "headline"]),
                ContentItem(value: product.price, styles: ["role": "price"])
            ],
            ctas: [ContentItem(value: "Add to Cart", styles: ["enabled": true])]
        )
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        if let expId = experienceId {
            ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.detail.\(product.id)")
        }
    }
    
    @IBAction func buyButtonTapped(_ sender: Any) {
        if let expId = experienceId {
            ContentAnalytics.trackExperienceClick(experienceId: expId, experienceLocation: "product.detail.\(product.id)")
        }
    }
}
```

### Collection or feed

Implementation of experience tracking for a collection or a feed.

### Android

```java
class FeedFragment : Fragment() {
    private val experienceIds = mutableMapOf<String, String>()
    
    fun displayProduct(product: Product) {
        if (!experienceIds.containsKey(product.id)) {
            val expId = ContentAnalytics.registerExperience(
                assets = product.imageURLs.map { ContentItem(it, emptyMap()) },
                texts = listOf(ContentItem(product.name, mapOf("role" to "headline")))
            )
            experienceIds[product.id] = expId
        }
    }
    
    fun onProductCellVisible(product: Product) {
        experienceIds[product.id]?.let { expId ->
            ContentAnalytics.trackExperienceView(expId, "feed.item.${product.id}")
        }
    }
}
```

### iOS

```swift
class FeedViewController: UIViewController {
    var experienceIds: [String: String] = [:]
    
    func displayProduct(_ product: Product) {
        if experienceIds[product.id] == nil {
            let expId = ContentAnalytics.registerExperience(
                assets: product.imageURLs.map { ContentItem(value: $0, styles: [:]) },
                texts: [ContentItem(value: product.name, styles: ["role": "headline"])]
            )
            experienceIds[product.id] = expId
        }
    }
    
    func productCellBecameVisible(_ product: Product) {
        if let expId = experienceIds[product.id] {
            ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "feed.item.\(product.id)")
        }
    }
}
```

### Experience ID generation

Experience IDs are deterministic - the same content always produces the same ID. The algorithm:

1. Sort text values alphabetically.
1. Sort asset URLs alphabetically.
1. Sort CTA values alphabetically.
1. Join all with `|` separator (texts, then assets, then CTAs).
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

### Android

```java
import java.security.MessageDigest

fun computeExperienceId(texts: List<String>, assets: List<String>, ctas: List<String>): String {
    val content = (texts.sorted() + assets.sorted() + ctas.sorted()).joinToString("|")
    val hash = MessageDigest.getInstance("SHA-1")
        .digest(content.toByteArray())
        .joinToString("") { "%02x".format(it) }
    return "mobile-${hash.take(12)}"
}
```

### iOS

```swift
import CommonCrypto

func computeExperienceId(texts: [String], assets: [String], ctas: [String]) -> String {
    let content = (texts.sorted() + assets.sorted() + ctas.sorted()).joined(separator: "|")
    let hash = content.data(using: .utf8)!.sha1Hex()
    return "mobile-\(hash.prefix(12))"
}
```

## Missing registration warning

If you track without registering, you will see this warning.

<InlineAlert variant="error" slots="text"/>

Experience definition not found for 'exp-123'. Call `registerExperience()` before tracking views/clicks.

This means:

* View/click events still go to Analytics.
* But asset attribution won't work.
* Featurization service won't get the data.

Fix the warning by registering the experience first.

### Android

```java
// Wrong
ContentAnalytics.trackExperienceView("exp-123", "home")

// Correct
val expId = ContentAnalytics.registerExperience(
    assets = listOf(ContentItem("https://example.com/image.jpg", emptyMap())),
    texts = listOf(ContentItem("Title", mapOf("role" to "headline")))
)
ContentAnalytics.trackExperienceView(expId, "home")
```

### iOS

```swift
// Wrong
ContentAnalytics.trackExperienceView(experienceId: "exp-123")

// Correct
let expId = ContentAnalytics.registerExperience(...)
ContentAnalytics.trackExperienceView(experienceId: expId)
```

## Asset attribution

When you register an experience with assets, the SDK links those asset URLs to the experience. This enables asset attribution: connecting standalone asset tracking events to their parent experience.

<InlineAlert variant="info" slots="text"/>

Asset attribution works regardless of the `batchingEnabled` setting. The SDK caches experience definitions locally, so attribution is based on the registration cache - not on how events are batched for network delivery.

### How it works

See below how asset attribution works.

### Android

```java
// 1. Register experience with assets
val expId = ContentAnalytics.registerExperience(
    assets = listOf(
        ContentItem("https://example.com/hero.jpg", emptyMap()),
        ContentItem("https://example.com/thumbnail.jpg", emptyMap())
    ),
    texts = listOf(ContentItem("Summer Sale", mapOf("role" to "headline")))
)

// 2. Track asset view (SDK knows this belongs to the experience above)
ContentAnalytics.trackAssetView("https://example.com/hero.jpg")

// 3. Track experience interaction
ContentAnalytics.trackExperienceView(expId, "homepage")
```

### iOS

```swift
// 1. Register experience with assets
let expId = ContentAnalytics.registerExperience(
    assets: [
        ContentItem(value: "https://example.com/hero.jpg", styles: [:]),
        ContentItem(value: "https://example.com/thumbnail.jpg", styles: [:])
    ],
    texts: [ContentItem(value: "Summer Sale", styles: ["role": "headline"])]
)

// 2. Track asset view (SDK knows this belongs to the experience above)
ContentAnalytics.trackAssetView(assetURL: "https://example.com/hero.jpg")

// 3. Track experience interaction
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "homepage")
```

When the analytics backend receives `trackAssetView` for `hero.jpg`, the backend attributes that view to the `Summer Sale` experience because the asset URL was registered.

### Without attribution

You can track an asset without registering the experience first.

### Android

```java
class FeedFragment : Fragment() {
    private val experienceIds = mutableMapOf<String, String>()
    
    fun displayProduct(product: Product) {
        if (!experienceIds.containsKey(product.id)) {
            val expId = ContentAnalytics.registerExperience(
                assets = product.imageURLs.map { ContentItem(it, emptyMap()) },
                texts = listOf(ContentItem(product.name, mapOf("role" to "headline")))
            )
            experienceIds[product.id] = expId
        }
    }
    
    fun onProductCellVisible(product: Product) {
        experienceIds[product.id]?.let { expId ->
            ContentAnalytics.trackExperienceView(expId, "feed.item.${product.id}")
        }
    }
}
```

### iOS

```swift
class FeedViewController: UIViewController {
    var experienceIds: [String: String] = [:]
    
    func displayProduct(_ product: Product) {
        if experienceIds[product.id] == nil {
            let expId = ContentAnalytics.registerExperience(
                assets: product.imageURLs.map { ContentItem(value: $0, styles: [:]) },
                texts: [ContentItem(value: product.name, styles: ["role": "headline"])]
            )
            experienceIds[product.id] = expId
        }
    }
    
    func productCellBecameVisible(_ product: Product) {
        if let expId = experienceIds[product.id] {
            ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "feed.item.\(product.id)")
        }
    }
}
```

The asset view is still recorded, but the asset view is not linked to any experience. As a result, you lose:

* Which experience contained this asset.
* Performance metrics per experience.
* A/B test attribution.

## Location strategy

The `experienceLocation` and `assetLocation` parameters control how metrics are grouped in Customer Journey Analytics.

### With location - Metrics per placement

Track the same experience at different locations.

### Android

```java
// Same experience tracked at different locations
ContentAnalytics.trackExperienceView(expId, "homepage.hero")
ContentAnalytics.trackExperienceView(expId, "product.sidebar")
ContentAnalytics.trackExperienceView(expId, "checkout.upsell")
```

### iOS

```swift
// Same experience tracked at different locations
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "homepage.hero")
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.sidebar")
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "checkout.upsell")
```

A sample Customer Journey Analytics report for this scenario will look like:

| Experience | Location | Views | Clicks | CTR |
|---|---|--:|--:|--:|
| Summer Sale | `homepage.`\<br/\>`hero` | 10,000 | 500 | 5% |
| Summer Sale | `product.`\<br/\>`sidebar` | 3,000 | 90 | 3% |
| Summer Sale | `checkout.`\<br/\>`upsell` | 1,000 | 150 | 15% |

You can use this report to answer questions like *"Where does this experience perform best?"*

### Without location - global metrics

Track experiences without location details to get aggregate metrics.

### Android

```java
// Track without location for aggregate metrics
ContentAnalytics.trackExperienceView(expId)
```

### iOS

```swift
// Track without location for aggregate metrics
ContentAnalytics.trackExperienceView(experienceId: expId)
```

A sample Customer Journey Analytics report for this scenario will look like:

| Experience | Views | Clicks | CTR |
|---|---|--:|--:|
| Summer Sale | 14,000 | 740 | 5.3% |

You can use this report to answer questions like *How is this experience performing overall?*

### Same asset - different locations

Track the same asset on different locations.

### Android

```java
val heroImage = "https://example.com/hero.jpg"

// Track per location
ContentAnalytics.trackAssetView(heroImage, "homepage")
ContentAnalytics.trackAssetView(heroImage, "category.electronics")
ContentAnalytics.trackAssetView(heroImage, "search.results")
```

### iOS

```swift
let heroImage = "https://example.com/hero.jpg"

// Track per location
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "homepage")
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "category.electronics")
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "search.results")
```

Customer Journey Analytics report will look like:

| Experience | Location | Views | Clicks |
|---|---|--:|--:|
| Summer Sale | `homepage` | 50,000 | 2,500 |
| Summer Sale | `category.`\<br/\>`electronics` | 8,000 | 320 |
| Summer Sale | `search.`\<br/\>`results` | 3,000 | 45 |

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

Sample Customer Journey Analytics report - persuasion strategy by location:

| Location | Persuasion strategy | Views | Click | CTR |
|---|---|--:|--:|--:|
| `homepage.`\<br/\>`hero` |   Urgency  |  10,000  |  800 |   8% |
| `homepage.`\<br/\>`hero` |   Social Proof  |  10,000  |  650  |  6.5% |
| `homepage.`\<br/\>`hero` |   Scarcity |   10,000  |  720 |   7.2% |
| `checkout.`\<br/\>`upsell` |   Urgency  |  2,000  |  300  |  15% |
| `checkout.`\<br/\>`upsell` |   Social Proof  |  2,000 |   180  |   9% |

Insight: **Urgency** messaging performs best at checkout (+15% CTR), while **Social Proof** works better on homepage.

### Performance by content category

Sample Customer Journey Analytics report - asset category performance:

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
1. Attributes are stored: machine learning attributes are linked to the experience/asset.
1. Customer Journey Analytics queries: reports can segment by any machine learning attribute and location.

### Android

```java
// You just track normally - ML attributes are automatic
val expId = ContentAnalytics.registerExperience(
    assets = listOf(ContentItem("https://example.com/urgency-banner.jpg", emptyMap())),
    texts = listOf(
        ContentItem("Only 3 left!", mapOf("role" to "headline")),
        ContentItem("Order now before it's gone", mapOf("role" to "body"))
    )
)
// Featurization service detects: persuasion_strategy = "scarcity + urgency"

ContentAnalytics.trackExperienceView(expId, "product.detail")
```

### iOS

```swift
// You just track normally - ML attributes are automatic
let expId = ContentAnalytics.registerExperience(
    assets: [ContentItem(value: "https://example.com/urgency-banner.jpg", styles: [:])],
    texts: [
        ContentItem(value: "Only 3 left!", styles: ["role": "headline"]),
        ContentItem(value: "Order now before it's gone", styles: ["role": "body"])
    ]
)
// Featurization service detects: persuasion_strategy = "scarcity + urgency"

ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.detail")
```

In Customer Journey Analytics, you can then filter or group by persuasion strategy to see what messaging resonates in each location.

## Custom metrics with `additionalData`

The `additionalData` parameter lets you attach custom metrics to tracking events. These custom metrics appear in Customer Journey Analytics as additional dimensions or metrics.

### Asset performance metrics

To get asset performance metrics, see this example.

### Android

```java
// Track asset load time
val loadStart = System.currentTimeMillis()
// ... load image ...
val loadTime = System.currentTimeMillis() - loadStart

ContentAnalytics.trackAssetView(
    assetURL = imageURL,
    assetLocation = "product.gallery",
    additionalData = mapOf(
        "assetLoadTime" to loadTime,         // How long to load (ms)
        "assetSize" to imageData.size,       // Bytes
        "assetSource" to "cdn"               // Cache vs CDN
    )
)
```

### iOS

```swift
// Track asset load time
let loadStart = Date()
// ... load image ...
let loadTime = Date().timeIntervalSince(loadStart) * 1000 // ms

ContentAnalytics.trackAssetView(
    assetURL: imageURL,
    assetLocation: "product.gallery",
    additionalData: [
        "assetLoadTime": loadTime,           // How long to load (ms)
        "assetSize": imageData.count,        // Bytes
        "assetSource": "cdn"                 // Cache vs CDN
    ]
)
```

### Asset view duration

To get asset view duration, see this example.

### Android

```java
class ImageFragment : Fragment() {
    private var viewStartTime: Long = 0
    private var imageURL: String? = null
    
    override fun onResume() {
        super.onResume()
        viewStartTime = System.currentTimeMillis()
        ContentAnalytics.trackAssetView(imageURL!!, "gallery")
    }
    
    override fun onPause() {
        super.onPause()
        val viewDuration = System.currentTimeMillis() - viewStartTime
        
        ContentAnalytics.trackAssetClick(
            assetURL = imageURL!!,
            assetLocation = "gallery",
            additionalData = mapOf(
                "assetViewDuration" to viewDuration  // Time spent viewing (ms)
            )
        )
    }
}
```

### iOS

```swift
class ImageViewController {
    var viewStartTime: Date?
    var imageURL: String?
    
    func viewDidAppear() {
        viewStartTime = Date()
        ContentAnalytics.trackAssetView(assetURL: imageURL!, assetLocation: "gallery")
    }
    
    func viewWillDisappear() {
        guard let start = viewStartTime else { return }
        let viewDuration = Date().timeIntervalSince(start) * 1000 // ms
        
        ContentAnalytics.trackAssetClick(
            assetURL: imageURL!,
            assetLocation: "gallery",
            additionalData: [
                "assetViewDuration": viewDuration  // Time spent viewing (ms)
            ]
        )
    }
}
```

### Experience engagement metrics

To get experience engagement metrics, see this example.

### Android

```java
@Composable
fun ProductCard(product: Product) {
    var expId by remember { mutableStateOf<String?>(null) }
    var appearTime by remember { mutableStateOf(0L) }
    
    LaunchedEffect(product.id) {
        appearTime = System.currentTimeMillis()
        expId = ContentAnalytics.registerExperience(
            assets = listOf(ContentItem(product.imageUrl, emptyMap())),
            texts = listOf(ContentItem(product.name, mapOf("role" to "headline")))
        )
        ContentAnalytics.trackExperienceView(expId!!, "homepage.featured")
    }
    
    Column(
        modifier = Modifier.clickable {
            val viewDuration = System.currentTimeMillis() - appearTime
            
            ContentAnalytics.trackExperienceClick(
                experienceId = expId!!,
                experienceLocation = "homepage.featured",
                additionalData = mapOf(
                    "experienceViewDuration" to viewDuration,  // Time before click
                    "scrollDepth" to currentScrollPercent,     // How far scrolled
                    "interactionIndex" to tapCount             // Nth interaction
                )
            )
        }
    ) {
        // ... UI content
    }
}
```

### iOS

```swift
class ProductCardView {
    var expId: String?
    var appearTime: Date?
    
    func onAppear() {
        appearTime = Date()
        expId = ContentAnalytics.registerExperience(
            assets: [ContentItem(value: product.imageURL, styles: [:])],
            texts: [ContentItem(value: product.name, styles: ["role": "headline"])]
        )
        ContentAnalytics.trackExperienceView(
            experienceId: expId!,
            experienceLocation: "homepage.featured"
        )
    }
    
    func onTap() {
        let viewDuration = Date().timeIntervalSince(appearTime!) * 1000
        
        ContentAnalytics.trackExperienceClick(
            experienceId: expId!,
            experienceLocation: "homepage.featured",
            additionalData: [
                "experienceViewDuration": viewDuration,  // Time before click (ms)
                "scrollDepth": currentScrollPercent,     // How far user scrolled
                "interactionIndex": tapCount             // Nth interaction
            ]
        )
    }
}
```

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

#### Customer Journey Analytics report with custom metric

For example, reporting on average load time by asset location.

| Location |   Avg Load Time  |  Avg View Duration |
|---|--:|--:|
| `homepage.hero`  |  120ms |   3.2s |
| `product.gallery` |   85ms  |  8.5s |
| `search.results` |   45ms  |  1.1s |

Insight: Gallery images load **slower** but get **eight times more viewing time.**

## Debugging with Assurance

Adobe Assurance (Project Griffon) lets you inspect tracking events in real-time. Connect your app to an Assurance session to see exactly what payloads are being sent.

### Setup

To setup Assurance, import the extension and start the session.

### Android

```java
// In your Application class or Activity
import com.adobe.marketing.mobile.Assurance

// Start Assurance session (typically via deep link)
Assurance.startSession(assuranceDeepLink)
```

### iOS

```swift
// In your app delegate or SwiftUI app
import AEPAssurance

// Start Assurance session (typically via deep link)
Assurance.startSession(url: assuranceDeepLink)
```

### What You'll See in Assurance

1. Track Asset Events

    When you call `trackAssetView()` or `trackAssetClick()`, you'll see:

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

    * When you call `trackExperienceView()` or `trackExperienceClick()`:

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

### Android

```java
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

### iOS

```swift
MobileCore.setLogLevel(.trace)
```

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

### Android

```java
if (!experienceIds.containsKey(productId)) {
    experienceIds[productId] = ContentAnalytics.registerExperience(
        assets = listOf(ContentItem(product.imageUrl, emptyMap())),
        texts = listOf(ContentItem(product.name, mapOf("role" to "headline")))
    )
}
```

### iOS

```swift
if experienceIds[productId] == nil {
    experienceIds[productId] = ContentAnalytics.registerExperience(...)
}
```

* Or compute the ID yourself using the algorithm above for content-based caching.

## Common patterns

Common implementation patterns are illustrated below.

### Carousel/Banner

To implement a carousel or banner, see below for an example.

### Android

```java
class CarouselAdapter : RecyclerView.Adapter<CarouselViewHolder>() {
    private val experienceIds = mutableMapOf<Int, String>()
    
    override fun onBindViewHolder(holder: CarouselViewHolder, position: Int) {
        val slide = slides[position]
        
        experienceIds[position] = ContentAnalytics.registerExperience(
            assets = listOf(ContentItem(slide.imageUrl, emptyMap())),
            texts = listOf(ContentItem(slide.title, mapOf("role" to "headline"))),
            ctas = slide.ctaText?.let { listOf(ContentItem(it, mapOf("enabled" to true))) }
        )
        
        holder.bind(slide)
    }
    
    override fun onViewAttachedToWindow(holder: CarouselViewHolder) {
        experienceIds[holder.adapterPosition]?.let { expId ->
            ContentAnalytics.trackExperienceView(expId, "home.carousel.${holder.adapterPosition}")
        }
    }
    
    fun onSlideClicked(position: Int) {
        experienceIds[position]?.let { expId ->
            ContentAnalytics.trackExperienceClick(expId, "home.carousel.$position")
        }
    }
}
```

### iOS

```swift
class CarouselView: UIView {
    private var experienceIds: [Int: String] = [:]
    
    func configureSlide(_ slide: Slide, at index: Int) {
        experienceIds[index] = ContentAnalytics.registerExperience(
            assets: [ContentItem(value: slide.imageURL, styles: [:])],
            texts: [ContentItem(value: slide.title, styles: ["role": "headline"])],
            ctas: slide.ctaText.map { [ContentItem(value: $0, styles: ["enabled": true])] }
        )
    }
    
    func slideDidAppear(at index: Int) {
        guard let expId = experienceIds[index] else { return }
        ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "home.carousel.\(index)")
    }
    
    func slideWasTapped(at index: Int) {
        guard let expId = experienceIds[index] else { return }
        ContentAnalytics.trackExperienceClick(experienceId: expId, experienceLocation: "home.carousel.\(index)")
    }
}
```

### Product Grid

To implement a product grid, see below for an example.

### Android

```java
@Composable
fun ProductCard(product: Product) {
    var expId by remember { mutableStateOf<String?>(null) }
    
    LaunchedEffect(product.id) {
        expId = ContentAnalytics.registerExperience(
            assets = listOf(ContentItem(product.imageUrl, emptyMap())),
            texts = listOf(
                ContentItem(product.name, mapOf("role" to "headline")),
                ContentItem(product.price, mapOf("role" to "price"))
            )
        )
        expId?.let {
            ContentAnalytics.trackExperienceView(it, "catalog.product.${product.id}")
        }
    }
    
    Column(
        modifier = Modifier.clickable {
            expId?.let {
                ContentAnalytics.trackExperienceClick(it, "catalog.product.${product.id}")
            }
        }
    ) {
        AsyncImage(model = product.imageUrl, contentDescription = null)
        Text(product.name)
        Text(product.price)
    }
}
```

### iOS

```swift
struct ProductCard: View {
    let product: Product
    @State private var expId: String?
    
    var body: some View {
        VStack {
            AsyncImage(url: URL(string: product.imageURL))
            Text(product.name)
            Text(product.price)
        }
        .onAppear {
            if expId == nil {
                expId = ContentAnalytics.registerExperience(
                    assets: [ContentItem(value: product.imageURL, styles: [:])],
                    texts: [
                        ContentItem(value: product.name, styles: ["role": "headline"]),
                        ContentItem(value: product.price, styles: ["role": "price"])
                    ]
                )
            }
            if let id = expId {
                ContentAnalytics.trackExperienceView(experienceId: id, experienceLocation: "catalog.product.\(product.id)")
            }
        }
        .onTapGesture {
            if let id = expId {
                ContentAnalytics.trackExperienceClick(experienceId: id, experienceLocation: "catalog.product.\(product.id)")
            }
        }
    }
}
```

### Reusable Tracking Component

To implement a reusable tracking component, see below for an example.

### Android

```java
@Composable
fun TrackedExperience(
    assets: List<ContentItem>,
    texts: List<ContentItem>,
    location: String,
    onClick: (() -> Unit)? = null,
    content: @Composable () -> Unit
) {
    var expId by remember { mutableStateOf<String?>(null) }
    
    LaunchedEffect(location) {
        expId = ContentAnalytics.registerExperience(assets = assets, texts = texts)
        expId?.let { ContentAnalytics.trackExperienceView(it, location) }
    }
    
    Box(
        modifier = Modifier.clickable {
            expId?.let { ContentAnalytics.trackExperienceClick(it, location) }
            onClick?.invoke()
        }
    ) {
        content()
    }
}

// Usage
TrackedExperience(
    assets = listOf(ContentItem(product.imageUrl, emptyMap())),
    texts = listOf(ContentItem(product.name, mapOf("role" to "headline"))),
    location = "product.${product.id}"
) {
    ProductCardView(product)
}
```

### iOS

```swift
struct TrackedExperience<Content: View>: View {
    let assets: [ContentItem]
    let texts: [ContentItem]
    let location: String
    let content: Content
    
    @State private var expId: String?
    
    init(
        assets: [ContentItem],
        texts: [ContentItem],
        location: String,
        @ViewBuilder content: () -> Content
    ) {
        self.assets = assets
        self.texts = texts
        self.location = location
        self.content = content()
    }
    
    var body: some View {
        content
            .onAppear {
                if expId == nil {
                    expId = ContentAnalytics.registerExperience(assets: assets, texts: texts)
                }
                if let id = expId {
                    ContentAnalytics.trackExperienceView(experienceId: id, experienceLocation: location)
                }
            }
            .onTapGesture {
                if let id = expId {
                    ContentAnalytics.trackExperienceClick(experienceId: id, experienceLocation: location)
                }
            }
    }
}

// Usage
TrackedExperience(
    assets: [ContentItem(value: product.imageURL, styles: [:])],
    texts: [ContentItem(value: product.name, styles: ["role": "headline"])],
    location: "product.\(product.id)"
) {
    ProductCardView(product: product)
}
```

```
