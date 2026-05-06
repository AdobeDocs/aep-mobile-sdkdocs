---
noIndex: true
---

<Variant platform="android" api="track-asset" repeat="10"/>

#### Java

**Syntax**

```java
static void trackAsset(String assetURL)
static void trackAsset(String assetURL, InteractionType interactionType)
static void trackAsset(String assetURL, InteractionType interactionType, String assetLocation)
static void trackAsset(String assetURL, InteractionType interactionType, String assetLocation, Map<String, Object> additionalData)

```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAsset(
    "https://example.com/image.jpg",
    InteractionType.VIEW,
    "home"
);
```

#### Kotlin

**Syntax**

```java
fun trackAsset(
    assetURL: String,
    interactionType: InteractionType = InteractionType.VIEW,
    assetLocation: String? = null,
    additionalData: Map<String, Any>? = null
): Unit
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAsset(
    assetURL: "https://example.com/image.jpg",
    interactionType: InteractionType.VIEW,
    assetLocation: "home"
);
```

<Variant platform="ios" api="track-asset" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackAsset(
    assetURL: String,
    interactionType: InteractionType = .view,
    assetLocation: String? = nil,
    additionalData: [String: Any]? = nil
)
```

**Example**

```swift
ContentAnalytics.trackAsset(
    assetURL: "https://example.com/image.jpg",
    interactionType: InteractionType.VIEW,
    assetLocation: "home"
);
```

#### Objective-C

**Syntax**

```objc
+ (void)trackAsset:(NSString *)assetURL
   interactionType:(AEPInteractionType)interactionType
     assetLocation:(nullable NSString *)assetLocation
    additionalData:(nullable NSDictionary<NSString *,id> *)additionalData;
```

**Example**

```objc
[AEPContentAnalytics trackAsset:@"https://example.com/image.jpg"
                interactionType:AEPInteractionTypeView
                  assetLocation:@"home"];
```

<Variant platform="android" api="track-asset-view" repeat="10"/>

#### Java

**Syntax**

```java
static void trackAssetView(String assetURL)
static void trackAssetView(String assetURL, String assetLocation)
static void trackAssetView(String assetURL, String assetLocation, Map<String, Object> additionalData)additionalData)

```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAssetView(
    "https://example.com/image.jpg",
    "home"
);
```

#### Kotlin

**Syntax**

```java
fun trackAssetView(
    assetURL: String,
    assetLocation: String? = null,
    additionalData: Map<String, Any>? = null
): Unit
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAssetView(
    assetURL: "https://example.com/image.jpg",
    assetLocation: "home"
);
```

<Variant platform="ios" api="track-asset-view" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackAssetView(
    assetURL: String,
    assetLocation: String? = nil,
    additionalData: [String: Any]? = nil
)
```

**Example**

```swift
ContentAnalytics.trackAsset(
    assetURL: "https://example.com/image.jpg",
    assetLocation: "home"
);
```

#### Objective-C

**Syntax**

```objc
+ (void)trackAssetView:(NSString *)assetURL
         assetLocation:(nullable NSString *)assetLocation
        additionalData:(nullable NSDictionary<NSString *,id> *)additionalData;

```

**Example**

```objc
[AEPContentAnalytics trackAssetView:@"https://example.com/image.jpg"
                      assetLocation:@"home"];
```

<Variant platform="android" api="track-asset-click" repeat="10"/>

#### Java

**Syntax**

```java
static void trackAssetClick(String assetURL)
static void trackAssetClick(String assetURL, String assetLocation)
static void trackAssetClick(String assetURL, String assetLocation, Map<String, Object> additionalData)
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAssetClick(
    "https://example.com/image.jpg",
    "home",
    null
);
```

#### Kotlin

**Syntax**

```java
fun trackAssetClick(
    assetURL: String,
    assetLocation: String? = null,
    additionalData: Map<String, Any>? = null
): Unit
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackAssetClick(
    "https://example.com/image.jpg",
    "home",
    null
);
```

<Variant platform="ios" api="track-asset-click" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackAssetClick(
    assetURL: String,
    assetLocation: String? = nil,
    additionalData: [String: Any]? = nil
)
```

**Example**

```swift
ContentAnalytics.trackAssetClick(
    assetURL: "https://example.com/image.jpg",
    assetLocation: "home"
);
```

#### Objective-C

**Syntax**

```objc
+ (void)trackAssetClick:(NSString *)assetURL
    assetLocation:(nullable NSString *)assetLocation
    additionalData:(nullable NSDictionary<NSString *,id> *)additionalData;
```

**Example**

```objc
[AEPContentAnalytics trackAssetClick:@"https://example.com/image.jpg"
                       assetLocation:@"home"];
```

<Variant platform="android" api="track-asset-collection" repeat="10"/>

#### Java

**Syntax**

```java
static void trackAssetCollection(List<String> assetURLs)
static void trackAssetCollection(List<String> assetURLs, InteractionType interactionType)
static void trackAssetCollection(List<String> assetURLs, InteractionType interactionType, String assetLocation)

```

**Example**

```java
ContentAnalytics.trackAssetCollection(
    List.of(
        "https://example.com/img1.jpg",
        "https://example.com/img2.jpg"
    ),
    "product-carousel"
);
```

#### Kotlin

**Syntax**

```java
fun trackAssetCollection(
    assetURLs: List<String>,
    interactionType: InteractionType = InteractionType.VIEW,
    assetLocation: String? = null
): Unit
```

**Example**

```java
ContentAnalytics.trackAssetCollection(
    assetURLs = listOf(
        "https://example.com/img1.jpg",
        "https://example.com/img2.jpg"
    ),
    assetLocation = "product-carousel"
);
```

<Variant platform="ios" api="track-asset-collection" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackAssetCollection(
    assetURLs: [String],
    interactionType: InteractionType = .view,
    assetLocation: String? = nil
)
```

**Example**

```swift
ContentAnalytics.trackAssetCollection(
    assetURLs: ["https://example.com/image1.jpg", "https://example.com/image1.jpg"],
    assetLocation: "home"
);
```

#### Objective-C

**Syntax**

```objc
+ (void)trackAssetCollectionWithAssetURLs:(NSArray<NSString *> *)assetURLs
                          interactionType:(AEPInteractionType)interactionType
                            assetLocation:(nullable NSString *)assetLocation;
```

**Example**

```objc
[AEPContentAnalytics trackAssetCollectionWithAssetURLs:@[@"https://example.com/image1.jpg",@"https://example.com/image1.jpg"]
                                       interactionType:AEPInteractionTypeView
                                         assetLocation:@"home"];
```

<Variant platform="android" api="register-experience" repeat="10"/>

#### Java

**Syntax**

```java
static String registerExperience(List<ContentItem> assets, List<ContentItem> texts)
static String registerExperience(List<ContentItem> assets, List<ContentItem> texts, List<ContentItem> ctas)

```

**Example**

```java
String expId = ContentAnalytics.registerExperience(
    List.of(
        new ContentItem("https://example.com/product.jpg")
    ),
    List.of(
        new ContentItem("iPhone 16 Pro", Map.of("role", "headline")),
        new ContentItem("$999",          Map.of("role", "price"))
    ),
    List.of(
        new ContentItem("Buy Now", Map.of("enabled", true))
    )
);

ContentAnalytics.trackExperienceView(expId, "product.detail")
```

#### Kotlin

**Syntax**

```java
fun registerExperience(
    assets: List<ContentItem>,
    texts: List<ContentItem>,
    ctas: List<ContentItem>? = null
): String

```

**Example**

```java
// Using InteractionType enum directly
val expId = ContentAnalytics.registerExperience(
    assets = listOf(
        ContentItem("https://example.com/product.jpg")
    ),
    texts = listOf(
        ContentItem("iPhone 16 Pro", mapOf("role" to "headline")),
        ContentItem("$999", mapOf("role" to "price"))
    ),
    ctas = listOf(
        ContentItem("Buy Now", mapOf("enabled" to true))
    )
);

ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.detail")
```

<Variant platform="ios" api="register-experience" repeat="10"/>

#### Swift

**Syntax**

```swift
@discardableResult
static func registerExperience(
    assets: [ContentItem],
    texts: [ContentItem],
    ctas: [ContentItem]? = nil
) -> String
```

**Example**

```swift
let expId = ContentAnalytics.registerExperience(
    assets: [ContentItem(value: "https://example.com/product.jpg", styles: [:])],
    texts: [
        ContentItem(value: "iPhone 16 Pro", styles: ["role": "headline"]),
        ContentItem(value: "$999", styles: ["role": "price"])
    ],
    ctas: [ContentItem(value: "Buy Now", styles: ["enabled": true])]
)
ContentAnalytics.trackExperienceView(experienceId: expId, experienceLocation: "product.detail")
```

#### Objective-C

**Syntax**

```objc
+ (NSString *)registerExperienceWithAssets:(NSArray<AEPContentItem *> *)assets
                                     texts:(NSArray<AEPContentItem *> *)texts
                                      ctas:(nullable NSArray<AEPContentItem *> *)ctas;
```

**Example**

```objc
NSString *expId = [AEPContentAnalytics registerExperienceWithAssets:@[
    [[AEPContentItem alloc] initWithValue:@"https://example.com/product.jpg" styles:@{}]
]
texts:@[
    [[AEPContentItem alloc] initWithValue:@"iPhone 16 Pro" styles:@{@"role": @"headline"}],
    [[AEPContentItem alloc] initWithValue:@"$999"          styles:@{@"role": @"price"}]
]
ctas:@[
    [[AEPContentItem alloc] initWithValue:@"Buy Now" styles:@{@"enabled": @YES}]
]];

[AEPContentAnalytics trackExperienceViewWithExperienceId:expId
                                     experienceLocation:@"product.detail"];
```

<Variant platform="android" api="track-experience-view" repeat="10"/>

#### Java

**Syntax**

```java
static void trackExperienceView(String experienceId)
static void trackExperienceView(String experienceId, String experienceLocation)
static void trackExperienceView(String experienceId, String experienceLocation, Map<String, Object> additionalData)

```

**Example**

```java
ContentAnalytics.trackExperienceView(
    expId,
    "homepage.hero",
    Map.of("viewDuration", 5.2)
);
```

#### Kotlin

**Syntax**

```java
fun trackExperienceView(
    experienceId: String,
    experienceLocation: String? = null,
    additionalData: Map<String, Any>? = null
): Unit
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackExperienceView(
    experienceId: expId,
    experienceLocation: "homepage.hero",
    additionalData: ["viewDuration": 5.2]
)
```

<Variant platform="ios" api="track-experience-view" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackExperienceView(
    experienceId: String,
    experienceLocation: String? = nil,
    additionalData: [String: Any]? = nil
)
```

**Example**

```swift
ContentAnalytics.trackExperienceView(
    experienceId: expId,
    experienceLocation: "homepage.hero",
    additionalData: ["viewDuration": 5.2]
)
```

#### Objective-C

**Syntax**

```objc
+ (void)trackExperienceView:(NSString *)assetURL
              assetLocation:(nullable NSString *)assetLocation
             additionalData:(nullable NSDictionary<NSString *,id> *)additionalData;

```

**Example**

```objc
[AEPContentAnalytics trackExperienceView:expId
                      experienceLocation:@"homepage.hero"
                          additionalData:@{@"viewDuration": @5.2}];
```

<Variant platform="android" api="track-experience-click" repeat="10"/>

#### Java

**Syntax**

```java
static void trackExperienceClick(String experienceId)
static void trackExperienceClick(String experienceId, String experienceLocation)
static void trackExperienceClick(String experienceId, String experienceLocation, Map<String, Object> additionalData)

```

**Example**

```java
ContentAnalytics.trackExperienceClick(
    expId,
    "homepage.hero",
    Map.of("viewDuration", 5.2)
);
```

#### Kotlin

**Syntax**

```java
fun trackExperienceClick(
    experienceId: String,
    experienceLocation: String? = null,
    additionalData: Map<String, Any>? = null
): Unit
```

**Example**

```java
// Using InteractionType enum directly
ContentAnalytics.trackExperienceClick(
    experienceId: expId,
    experienceLocation: "homepage.hero",
    additionalData: ["viewDuration": 5.2]
)
```

<Variant platform="ios" api="track-experience-click" repeat="10"/>

#### Swift

**Syntax**

```swift
static func trackExperienceClick(
    experienceId: String,
    experienceLocation: String? = nil,
    additionalData: [String: Any]? = nil
)
```

**Example**

```swift
ContentAnalytics.trackExperienceClick(
    experienceId: expId,
    experienceLocation: "homepage.hero",
    additionalData: ["viewDuration": 5.2]
)
```

#### Objective-C

**Syntax**

```objc
+ (void)trackExperienceClick:(NSString *)assetURL
               assetLocation:(nullable NSString *)assetLocation
              additionalData:(nullable NSDictionary<NSString *,id> *)additionalData;

```

**Example**

```objc
[AEPContentAnalytics trackExperienceClick:expId
                       experienceLocation:@"homepage.hero"
                           additionalData:@{@"viewDuration": @5.2}];
```

<Variant platform="android" api="content-item" repeat="10"/>

#### Java

**Syntax**

```java
public class ContentItem {
    private final String value;
    private final Map<String, Object> styles;

    public ContentItem(String value, Map<String, Object> styles) {
        this.value = value;
        this.styles = styles;
    }

    // Convenience constructor to mirror the default parameter
    public ContentItem(String value) {
        this(value, Collections.emptyMap());
    }

    public String getValue() {
        return value;
    }

    public Map<String, Object> getStyles() {
        return styles;
    }

    public Map<String, Object> toMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("value", value);
        map.put("styles", styles);
        return map;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ContentItem)) return false;
        ContentItem that = (ContentItem) o;
        return Objects.equals(value, that.value) &&
               Objects.equals(styles, that.styles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value, styles);
    }

    @Override
    public String toString() {
        return "ContentItem{value='" + value + "', styles=" + styles + "}";
    }
}
```

**Example**

```java
// Asset with URL
ContentItem("https://example.com/hero.jpg")

// Text with role
ContentItem("Welcome!", mapOf("role" to "headline"))

// CTA with enabled state
ContentItem("Shop Now", mapOf("enabled" to true, "role" to "primary"))
```

#### Kotlin

**Syntax**

```java
data class ContentItem(
    val value: String,
    val styles: Map<String, Any> = emptyMap()
) {
    fun toMap(): Map<String, Any>
}
```

**Example**

```java
// Asset with URL
ContentItem(value: "https://example.com/hero.jpg")

// Text with role
ContentItem(value: "Welcome!", styles: mapOf("role" to "headline"))

// CTA with enabled state
ContentItem(value: "Shop Now", styles: mapOf("enabled" to true, "role" to "primary"))
```

<Variant platform="ios" api="content-item" repeat="10"/>

#### Swift

**Syntax**

```swift
public struct ContentItem {
    let value: String
    let styles: [String: Any]
    
    init(value: String, styles: [String: Any])
}
```

**Example**

```swift
// Asset
ContentItem(value: "https://example.com/image.jpg", styles: [:])

// Text with role
ContentItem(value: "Product Title", styles: ["role": "headline"])
ContentItem(value: "$99.99", styles: ["role": "price"])

// CTA
ContentItem(value: "Buy Now", styles: ["enabled": true])
```

#### Objective-C

**Syntax**

```objc
@implementation AEPContentItem

- (instancetype)initWithValue:(NSString *)value
                       styles:(NSDictionary<NSString *, id> *)styles {
    if (self = [super init]) {
        _value = value;
        _styles = styles;
    }
    return self;
}
```

**Example**

```objc
AEPContentItem *asset = [[AEPContentItem alloc] initWithValue:@"https://example.com/image.jpg"
                                                       styles:@{}];
                                                       

AEPContentItem *title = [[AEPContentItem alloc] initWithValue:@"Product Title"
                                                       styles:@{@"role": @"headline"}];
AEPContentItem *price = [[AEPContentItem alloc] initWithValue:@"$99.99"
                                                       styles:@{@"role": @"price"}];


AEPContentItem *cta = [[AEPContentItem alloc] initWithValue:@"Buy Now"
                                                     styles:@{@"enabled": @YES}];
```

<Variant platform="android" api="interaction-type" repeat="10"/>

#### Java

**Syntax**

```java
public enum InteractionType {
    VIEW,
    CLICK,
    DEFINITION;

    public String getStringValue() {
        return name().toLowerCase();
    }
}
```

**Example**

```java
ContentAnalytics.trackAsset(
    "https://example.com/hero.jpg",
    InteractionType.VIEW
)
```

#### Kotlin

**Syntax**

```java
enum class InteractionType {
    VIEW,
    CLICK,
    DEFINITION;
    
    val stringValue: String
        get() = name.lowercase()
}
```

**Example**

```java
ContentAnalytics.trackAsset(
    assetURL = "https://example.com/hero.jpg",
    interactionType = InteractionType.VIEW
)
```

<Variant platform="ios" api="interaction-type" repeat="10"/>

#### Swift

**Syntax**

```swift
public enum InteractionType: Int {
    case view = 0
    case click = 1
    
    public var stringValue: String { ... }
    public static func from(string: String) -> InteractionType?
}
```

**Example**

```swift
ContentAnalytics.trackAsset(
    assetURL: "https://example.com/hero.jpg",
    interactionType: .view
)
```

#### Objective-C

**Syntax**

```objc
@objc(AEPInteractionType)
public enum InteractionType: Int {
    case view = 0
    case click = 1
    
    public var stringValue: String { ... }
    public static func from(string: String) -> InteractionType?
}
```

**Example**

```objc
[ContentAnalytics trackAsset:@"https://example.com/hero.jpg"
             interactionType:AEPInteractionTypeView
               assetLocation:nil
              additionalData:nil];
```
