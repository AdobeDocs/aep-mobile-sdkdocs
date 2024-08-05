<Variant platform="android" function="updatepropositionsforsurfaces" repeat="4"/>

#### Kotlin

```kotlin
val surface1 = Surface("mainActivity#banner")
val surface2 = Surface("secondActivity#promotions")
val surfaces = listOf(surface1, surface2)

// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces(surfaces)
```

#### Java

```java
final Surface surface1 = new Surface("mainActivity#banner");
final Surface surface2 = new Surface("secondActivity#promotions");
 
final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);
 
// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces(surfaces)
```

<Variant platform="ios" function="updatepropositionsforsurfaces" repeat="2"/>

#### Swift

```swift
let surface1 = Surface("mainActivity#banner")
let surface2 = Surface("secondActivity#promotions")
 
/// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces([surface1, surface2])
```

<Variant platform="android" function="getpropositionsforsurfaces" repeat="4"/>

#### Kotlin

```kotlin
val surface1 = Surface("mainActivity#banner")
val surface2 = Surface("secondActivity#promotions")
val surfaces = listOf(surface1, surface2)

Messaging.getPropositionsForSurfaces(surfaces) {
  it?.let { propositionsMap ->
           if (propositionsMap.isNotEmpty()) {
             // get the propositions for the given surfaces
             propositionsMap[surface1]?.let {
               // read surface1 propositions
             }
             propositionsMap[surface2]?.let {
               // read surface2 propositions
             }
           }
          }
}
```

#### Java

```java
final Surface surface1 = new Surface("mainActivity#banner");
final Surface surface2 = new Surface("secondActivity#promotions");
 
final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);
 
Messaging.getPropositionsForSurfaces(surfaces, new AdobeCallbackWithError<Map<Surface, List<Proposition>>>() {
    @Override
    public void fail(final AdobeError adobeError) {
        // handle error
    }

    @Override
    public void call(Map<Surface, List<Proposition>> propositionsMap) {
        // get the content for the given surfaces
        if (propositionsMap == null || propositionsMap.isEmpty()) {
            // bail early if no propositions are found
            return;
        }

        // read surface1 propositions
        List<Proposition> propositionsForSurface1 = propositionsMap.get(surface1);

        // read surface2 propositions
        List<Proposition> propositionsForSurface2 = propositionsMap.get(surface2);
    }
});
```

<Variant platform="ios" function="getpropositionsforsurfaces" repeat="2"/>

#### Swift

```swift
let surface1 = Surface(path: "myView#button")
let surface2 = Surface(path: "myViewAttributes")
 
Messaging.getPropositionsForSurfaces([surface1, surface2]) { propositionsDict, error in
    guard error == nil else {
        /// handle error
        return
    }
 
    guard let propositionsDict = propositionsDict, !propositionsDict.isEmpty else {
        /// bail early if no propositions are found
        return
    }
     
    /// get the content for the given surfaces
    if let propositionsForSurface1 = propositionsDict[surface1] {
        /// read surface1 propositions
    }
 
    if let propositionsForSurface2 = propositionsDict[surface2] {
        /// read surface2 propositions
    }
}
```

<Variant platform="android" function="using-propositions" repeat="4"/>

#### Kotlin

```kotlin
// get the HTML propositions for surface1
// bail early if no propositions are found for surface1
if (propositionsForSurface1 == null || propositionsForSurface1.isEmpty()) return

val propositionItem1 = propositionsForSurface1.first().items[0]
if (propositionItem1.schema == SchemaType.HTML_CONTENT) {
    // retrieve the HTML content
    val htmlContent:String? = propositionItem1.htmlContent

    // use retrieved html content
}


// get the content card propositions for surface2
// bail early if no propositions are found for surface2
if (propositionsForSurface2 == null || propositionsForSurface2.isEmpty()) return

val propositionItem2 = propositionsForSurface2.first().items[0]
if (propositionItem2.schema == SchemaType.CONTENT_CARD) {
    // retrieve the HTML content
    val contentCard: ContentCard? = propositionItem2.contentCardSchemaData?.contentCard

    // use retrieved content card
}
```

#### Java

```java
// get the propositions for surface1
if (propositionsForSurface1 == null || propositionsForSurface1.isEmpty()) {
    // bail early if no propositions are found for surface1
    return;
}

final PropositionItem propositionItem1 = propositionsForSurface1.get(0).getItems().get(0);
if (propositionItem1.getSchema() == SchemaType.HTML_CONTENT) {
    // retrieve the HTML content
    final String htmlContent = propositionItem1.getHtmlContent();

    // use retrieved html content
}

if (propositionsForSurface2 == null || propositionsForSurface2.isEmpty()) {
    // bail early if no propositions are found for surface2
    return;
}

final PropositionItem propositionItem2 = propositionsForSurface2.get(0).getItems().get(0);
if (propositionItem2.getSchema() == SchemaType.CONTENT_CARD) {
    // retrieve the content card
    final ContentCard contentCard = propositionItem2.getContentCardSchemaData().getContentCard();

    // use retrieved content card
}
```

<Variant platform="ios" function="using-propositions" repeat="2"/>

#### Swift

```swift
/// get the HTML propositions for surface1
if let propositionsForSurface1: [Proposition] = propositionsDict?[surface1], !propositionsForSurface1.isEmpty,
    let propositionItem1 = propositionsForSurface1.first?.items.first {
    if propositionItem1.schema == .htmlContent {
        // retrieve the HTML content
        let htmlContent = propositionItem1.htmlContent

        // use retrieved html content

    }
}

/// get the content card propositions for surface2
if let propositionsForSurface2: [Proposition] = propositionsDict?[surface2], !propositionsForSurface2.isEmpty,
    let propositionItem2 = propositionsForSurface2.first?.items.first {
    if propositionItem2.schema == .contentCard {
        // retrieve the content card
        let contentCard = propositionItem2.contentCardSchemaData?.getContentCard()

        // use retrieved content card

    }
}
```

<Variant platform="android" function="track" repeat="4"/>

#### Kotlin

```kotlin
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(MessagingEdgeEventType.DISPLAY)
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, null)
```

#### Java

```java
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(MessagingEdgeEventType.DISPLAY);
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, null);
```

<Variant platform="ios" function="track" repeat="2"/>

#### Swift

```swift
/// Tracking display of PropositionItem
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(withEdgeEventType: MessagingEdgeEventType.display)

/// Tracking interaction with PropositionItem        
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", withEdgeEventType: MessagingEdgeEventType.display)
```

<Variant platform="android" function="track-with-tokens" repeat="4"/>

#### Kotlin

```kotlin
// Tracking interaction with PropositionItem with tokens
// Extract the tokens from the PropositionItem item data
val tokenList = mutableListOf<String>()
tokenList += dataItemToken1
tokenList += dataItemToken2
propositionItem.track("click", MessagingEdgeEventType.INTERACT, tokenList)
```

#### Java

```java
// Tracking interaction with PropositionItem with tokens
// Extract the tokens from the PropositionItem item data
final List<String> tokenList = new ArrayList<>();
tokenList.add(dataItemToken1);
tokenList.add(dataItemToken2);
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, tokenList);
```

<Variant platform="ios" function="track-with-tokens" repeat="2"/>

#### Swift

```swift
/// Tracking interaction with PropositionItem with tokens
/// Extract the tokens from the PropositionItem item data
propositionItem1.track("click", withEdgeEventType: .interact, forTokens: [dataItemToken1, dataItemToken2])
```

<Variant platform="android" function="track-content-card" repeat="4"/>

#### Kotlin

```kotlin
// Tracking display of ContentCard          
// use the same contentCard object from the retrieve propositions section
contentCard.track(null, MessagingEdgeEventType.DISPLAY)
 
// Tracking interaction with ContentCard
// use the same contentCard object from the retrieve propositions section
contentCard.track("click", MessagingEdgeEventType.INTERACT)
```

#### Java

```java
// Tracking display of ContentCard          
// use the same contentCard from the retrieve propositions section
contentCard.track(null, MessagingEdgeEventType.DISPLAY);
 
// Tracking interaction with ContentCard
// use the same contentCard object from the retrieve propositions section
contentCard.track("click", MessagingEdgeEventType.INTERACT);
```

<Variant platform="ios" function="track-content-card" repeat="2"/>

#### Swift

```swift
/// Tracking display of ContentCard
/// use the same contentCard object from the retrieve propositions section
contentCard.track(withEdgeEventType: MessagingEdgeEventType.display)

/// Tracking interaction with ContentCard        
/// use the same contentCard object from retrieve propositions section
contentCard.track("click", withEdgeEventType: MessagingEdgeEventType.interact)
```
