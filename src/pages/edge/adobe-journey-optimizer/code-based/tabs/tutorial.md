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
// get the propositions for surface1
// bail early if no propositions are found for surface1
if (propositionsForSurface1 == null || propositionsForSurface1.isEmpty()) return

// iterate through items in proposition
for (propositionItem in propositionsForSurface1.first()::items) {
  if (propositionItem.schema == SchemaType.HTML_CONTENT) {
    // retrieve the HTML content
    val htmlContent = propositionItem.htmlContent

    // use retrieved html content
  }
}
```

#### Java

```java
// get the propositions for surface1
if (propositionsForSurface1 == null || propositionsForSurface1.isEmpty()) {
    // bail early if no propositions are found for surface1
    return;
}

// iterate through items in proposition
for (final PropositionItem propositionItem: propositionsForSurface1.get(0).getItems()) {
    if (propositionItem.getSchema() == SchemaType.HTML_CONTENT) {
        // retrieve the HTML content
        final String htmlContent = propositionItem.getHtmlContent();

        // use retrieved html content
    }
}
```

<Variant platform="ios" function="using-propositions" repeat="2"/>

#### Swift

```swift
/// get the propositions for surface1
if let codePropositions: [Proposition] = propositionsDict?[surface1], !codePropositions.isEmpty {
    /// iterate through items in proposition
    ForEach(codePropositions.first?.items as? [PropositionItem] ?? [], id:\.itemId) { propositionItem in
        if propositionItem.schema == .htmlContent {
            // retrieve the HTML content
            let htmlContent = propositionItem.htmlContent

            // use retrieved html content
        }
    }
}
```

<Variant platform="android" function="track" repeat="4"/>

#### Kotlin

```kotlin
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track(MessagingEdgeEventType.DISPLAY)
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track("click", MessagingEdgeEventType.INTERACT, null)
```

#### Java

```java
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track(MessagingEdgeEventType.DISPLAY);
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track("click", MessagingEdgeEventType.INTERACT, null);
```

<Variant platform="ios" function="track" repeat="2"/>

#### Swift

```swift
/// Tracking display of PropositionItem
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track(withEdgeEventType: MessagingEdgeEventType.display)

/// Tracking interaction with PropositionItem        
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem.track("click", withEdgeEventType: MessagingEdgeEventType.display)
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
propositionItem.track("click", MessagingEdgeEventType.INTERACT, tokenList);
```

<Variant platform="ios" function="track-with-tokens" repeat="2"/>

#### Swift

```swift
/// Tracking interaction with PropositionItem with tokens
/// Extract the tokens from the PropositionItem item data
propositionItem.track("click", withEdgeEventType: .interact, forTokens: [dataItemToken1, dataItemToken2])
```
