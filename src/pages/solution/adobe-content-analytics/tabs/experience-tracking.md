---
noIndex: true
---

import Alerts from '/src/pages/resources/alerts.md'

<Variant platform="android" task="quick-start" repeat="1"/>

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

<Variant platform="ios" task="quick-start" repeat="1"/>

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

<Variant platform="ios" task="basic-usage" repeat="1"/>

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

<Variant platform="android" task="basic-usage" repeat="1"/>

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

<Variant platform="ios" task="track-experience" repeat="1"/>

```swift
ContentAnalytics.trackExperienceView(experienceId: experienceId, experienceLocation: "product.detail")
ContentAnalytics.trackExperienceClick(experienceId: experienceId, experienceLocation: "product.detail")
```

<Variant platform="android" task="track-experience" repeat="1"/>

```java
ContentAnalytics.trackExperienceView(experienceId, "product.detail")
ContentAnalytics.trackExperienceClick(experienceId, "product.detail")
```

<Variant platform="ios" task="session-lifecycle" repeat="1"/>

```swift
// Each app session
let expId = ContentAnalytics.registerExperience(
    assets: [ContentItem(value: "https://example.com/hero.jpg", styles: [:])],
    texts: [ContentItem(value: "Title", styles: ["role": "headline"])]
)
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "home")
```

<Variant platform="android" task="session-lifecycle" repeat="1"/>

```java
// Each app session
val expId = ContentAnalytics.registerExperience(
    assets = listOf(ContentItem("https://example.com/hero.jpg", emptyMap())),
    texts = listOf(ContentItem("Title", mapOf("role" to "headline")))
)
ContentAnalytics.trackExperienceView(expId, "home")
```

<Variant platform="ios" task="implementation-single-screen" repeat="1"/>

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

<Variant platform="android" task="implementation-single-screen" repeat="1"/>

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

<Variant platform="ios" task="implementation-collection-feed" repeat="1"/>

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

<Variant platform="android" task="implementation-collection-feed" repeat="1"/>

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

<Variant platform="ios" task="experience-id-generation" repeat="1"/>

```swift
import CommonCrypto

func computeExperienceId(texts: [String], assets: [String], ctas: [String]) -> String {
    let content = (texts.sorted() + assets.sorted() + ctas.sorted()).joined(separator: "|")
    let hash = content.data(using: .utf8)!.sha1Hex()
    return "mobile-\(hash.prefix(12))"
}
```

<Variant platform="android" task="experience-id-generation" repeat="1"/>

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

<Variant platform="ios" task="missing-registration-warning" repeat="1"/>

```swift
// Wrong
ContentAnalytics.trackExperienceView(experienceId: "exp-123")

// Correct
let expId = ContentAnalytics.registerExperience(...)
ContentAnalytics.trackExperienceView(experienceId: expId)
```

<Variant platform="android" task="missing-registration-warning" repeat="1"/>

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

<Variant platform="ios" task="asset-attribution" repeat="1"/>

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

<Variant platform="android" task="asset-attribution" repeat="1"/>

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

<Variant platform="ios" task="without-attribution" repeat="1"/>

```swift
// Asset tracked standalone - no experience context
ContentAnalytics.trackAssetView(assetURL: "https://example.com/hero.jpg")
```

<Variant platform="android" task="without-attribution" repeat="1"/>

```java
// Asset tracked standalone - no experience context
ContentAnalytics.trackAssetView("https://example.com/hero.jpg")
```

<Variant platform="ios" task="with-location-metrics-per-placement" repeat="1"/>

```swift
// Same experience tracked at different locations
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "homepage.hero")
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.sidebar")
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "checkout.upsell")
```

<Variant platform="android" task="with-location-metrics-per-placement" repeat="1"/>

```java
// Same experience tracked at different locations
ContentAnalytics.trackExperienceView(expId, "homepage.hero")
ContentAnalytics.trackExperienceView(expId, "product.sidebar")
ContentAnalytics.trackExperienceView(expId, "checkout.upsell")
```

<Variant platform="ios" task="without-location-global-metrics" repeat="1"/>

```swift
// Track without location for aggregate metrics
ContentAnalytics.trackExperienceView(experienceId: expId)
```

<Variant platform="android" task="without-location-global-metrics" repeat="1"/>

```java
// Track without location for aggregate metrics
ContentAnalytics.trackExperienceView(expId)
```

<Variant platform="ios" task="same-asset-different-locations" repeat="1"/>

```swift
let heroImage = "https://example.com/hero.jpg"

// Track per location
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "homepage")
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "category.electronics")
ContentAnalytics.trackAssetView(assetURL: heroImage, assetLocation: "search.results")
```

<Variant platform="android" task="same-asset-different-locations" repeat="1"/>

```java
val heroImage = "https://example.com/hero.jpg"

// Track per location
ContentAnalytics.trackAssetView(heroImage, "homepage")
ContentAnalytics.trackAssetView(heroImage, "category.electronics")
ContentAnalytics.trackAssetView(heroImage, "search.results")
```

<Variant platform="ios" task="performance-by-content-category" repeat="1"/>

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

<Variant platform="android" task="performance-by-content-category" repeat="1"/>

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

<Variant platform="ios" task="asset-performance-metrics" repeat="1"/>

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

<Variant platform="android" task="asset-performance-metrics" repeat="1"/>

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

<Variant platform="ios" task="asset-view-duration" repeat="1"/>

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

<Variant platform="android" task="asset-view-duration" repeat="1"/>

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

<Variant platform="ios" task="experience-engagement-metrics" repeat="1"/>

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

<Variant platform="android" task="experience-engagement-metrics" repeat="1"/>

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

<Variant platform="ios" task="debugging-with-assurance" repeat="1"/>

```swift
// In your app delegate or SwiftUI app
import AEPAssurance

// Start Assurance session (typically via deep link)
Assurance.startSession(url: assuranceDeepLink)
```

<Variant platform="android" task="debugging-with-assurance" repeat="1"/>

```java
// In your Application class or Activity
import com.adobe.marketing.mobile.Assurance

// Start Assurance session (typically via deep link)
Assurance.startSession(assuranceDeepLink)
```

<Variant platform="ios" task="testing" repeat="1"/>

```swift
MobileCore.setLogLevel(.trace)
```

<Variant platform="android" task="testing" repeat="1"/>

```java
MobileCore.setLogLevel(LoggingMode.VERBOSE)
```

<Variant platform="ios" task="troubleshooting" repeat="1"/>

```swift
if experienceIds[productId] == nil {
    experienceIds[productId] = ContentAnalytics.registerExperience(...)
}
```

<Variant platform="android" task="troubleshooting" repeat="1"/>

```java
if (!experienceIds.containsKey(productId)) {
    experienceIds[productId] = ContentAnalytics.registerExperience(
        assets = listOf(ContentItem(product.imageUrl, emptyMap())),
        texts = listOf(ContentItem(product.name, mapOf("role" to "headline")))
    )
}
```

<Variant platform="ios" task="carousel-banner" repeat="1"/>

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

<Variant platform="android" task="carousel-banner" repeat="1"/>

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

<Variant platform="ios" task="product-grid" repeat="1"/>

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

<Variant platform="android" task="product-grid" repeat="1"/>

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

<Variant platform="ios" task="reusable-tracking-component" repeat="1"/>

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

<Variant platform="android" task="reusable-tracking-component" repeat="1"/>

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
