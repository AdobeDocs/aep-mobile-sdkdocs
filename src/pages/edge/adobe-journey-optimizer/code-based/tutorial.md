---
title: Code-based experiences & Content Cards implementation tutorial
description: This document describes how to fetch, display and track code-based experiences & content cards using the Adobe Journey Optimizer extension.
keywords:
- Adobe Journey Optimizer
- Messaging
- Code-based experiences
- Content Cards
- Tutorial
---

# Code-based experiences & Content Cards implementation tutorial

This document describes how to fetch, display and track code-based experiences and content cards using the Adobe Journey Optimizer extension.

## Pre-requisites

[Integrate and register Messaging extension](../../index.md#implement-extension-in-mobile-app) in your app.

## Fetch and cache code-based experiences & content cards

To fetch the propositions for the surfaces configured in Adobe Journey Optimizer campaigns, call the [updatePropositionsForSurfaces](../api-reference.md#updatepropositionsforsurfaces) API . You should batch requesting multiple [Surface](../public-classes/surface.md) URIs in a single API call when possible. The returned code-based experiences and content cards are cached in-memory by the Messaging extension and persists through the lifecycle of the app (i.e as long as the app is running). An example of the call is shown below:

### Android Kotlin

```kotlin
val surface1 = Surface("mainActivity#banner")
val surface2 = Surface("secondActivity#promotions")
val surfaces = listOf(surface1, surface2)

// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces(surfaces)
```

### Android Java

```java
final Surface surface1 = new Surface("mainActivity#banner");
final Surface surface2 = new Surface("secondActivity#promotions");
 
final List<Surface> surfaces = new ArrayList<>();
surfaces.add(surface1);
surfaces.add(surface2);
 
// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces(surfaces)
```

### iOS Swift

```swift
let surface1 = Surface("mainActivity#banner")
let surface2 = Surface("secondActivity#promotions")
 
/// fetch propositions from server and cache in-memory
Messaging.updatePropositionsForSurfaces([surface1, surface2])
```

## Retrieve cached propositions

To retrieve the previously fetched propositions from the in-memory cache, call the [getPropositionsForSurfaces](../api-reference.md#getpropositionsforsurfaces) API with a list of required surface URIs and a completion handler. The completion handler will be invoked with a list of [Proposition](../public-classes/proposition.md) objects corresponding to the requested surfaces, or `AEPError` object if an error occurs.

<InlineAlert variant="warning" slots="text"/>

If a requested surface was not previously cached prior to calling `getPropositionsForSurfaces` (using the `updatePropositionsForSurfaces` API), no propositions will be returned for that surface.

The following example shows how to retrieve the content for the previously cached surfaces:

### Android Kotlin

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

### Android Java

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

### iOS Swift

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

## Using the retrieved propositions

The [Proposition](../public-classes/proposition.md) object returned in the completion handler encapsulates the content specified for the corresponding surface, as well as information needed for tracking interactions with the content. Multiple `Proposition` objects can be returned for a single surface based on the number of campaigns configured for it in Adobe Journey Optimizer. The content can be accessed through the [PropositionItem](../public-classes/proposition-item.md) present inside the returned list of `Proposition`. The `SchemaType` of the `PropositionItem` indicates the type of content it contains and can be used to determine how to render or interpret the returned content. The `PropositionItem` class contains helper functions to access the different types of supported content.

The following example shows how to iterate through the propositions returned earlier and retrieve the HTML content and content cards. Please adapt the solution to suit the needs of your application and use the returned proposition content appropriately.

### Android Kotlin

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

### Android Java

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
    final ContentCardSchemaData contentCard = propositionItem2.getContentCardSchemaData();
    if (contentCard != null) {
        // use content from retrieved content card
    }
}
```

### iOS Swift

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
        if let contentCardSchemaData = propositionItem2.contentCardSchemaData {
            // use the content from the content card
        }
    }
}
```

## Tracking interactions with code-based experiences

Since it's up to the app developer to render the content card UI, you must monitor the desired end user interactions and call the appropriate tracking APIs. To record an interaction with the code-based experience, call the [track](../public-classes/proposition-item.md#track) API provided in the `PropositionItem` class. The following code shows two examples of tracking: when the content is displayed to the user and when the user clicks on the content. These examples are for illustrating how to call the track API and not a recommendation on where it should be called. Please examine your app workflow to find the appropriate way to perform tracking.

### Android Kotlin

```kotlin
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(MessagingEdgeEventType.DISPLAY)
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, null)
```

### Android Java

```java
// Tracking display of PropositionItem          
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(MessagingEdgeEventType.DISPLAY);
 
// Tracking interaction with PropositionItem
// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, null);
```

### iOS Swift

```swift
/// Tracking display of PropositionItem
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track(withEdgeEventType: MessagingEdgeEventType.display)

/// Tracking interaction with PropositionItem        
/// use the same propositionItem object that was used to get the content in the previous section
propositionItem1.track("click", withEdgeEventType: MessagingEdgeEventType.display)
```

### Tracking items from embedded decisions

When Adobe Journey Optimizer campaigns are created with embedded decisions, the server can respond with one or more items based on the number of items requested in the decision. To track these embedded items, the Adobe Journey Optimizer campaign UI provides `item._trackingToken` attributes. When authoring the campaign's content, you would need to embed the provided token as an HTML data-attribute in case of HTML content or JSON attribute in case on JSON content. The following example campaign shows HTML content with embedded decision, where multiple paragraph tags containing image URLs can be returned.

```html
<html>
   <body>
      {{#each decisionPolicy.1234567.items as |item|}}
      <ul id={{item._id}} data-item-token="{{item._trackingToken}}"><img src="{{item.heroimage1.sourceURL}}" alt="Winter Sale" width="80%" height="50%"></ul>
      {{/each}}
   </body>
</html>
```

For the above example, the server can return a response with two decision items in the item data within a single `PropositionItem`

```html
<html>
   <body>
      <ul id="mockId1" data-item-token="mockToken1"><img src="https://image1.jpeg" alt="Winter Sale" width="80%" height="50%"></ul>
      <ul id="mockId2" data-item-token="mockToken2"><img src="https://image2.jpeg" alt="Winter Sale" width="80%" height="50%"></ul>
   </body>
</html>
```

Since the embedded items are located inside a single `PropositionItem` data, the app developer will need to extract the `data-item-token` when tracking the interactions with the item. The token, along with the other tracking information, will need to be passed to the [track](../public-classes/proposition-item.md#track) API provided by the Messaging SDK. If no tracking tokens are supplied, normal tracking events will be sent. If tracking tokens were used during authoring, it will be assumed that all the corresponding embedded items were displayed. The following code shows an example of calling the track API with tokens.

### Android Kotlin

```kotlin
// Tracking interaction with PropositionItem with tokens
// Extract the tokens from the PropositionItem item data
val tokenList = mutableListOf<String>()
tokenList += dataItemToken1
tokenList += dataItemToken2
propositionItem.track("click", MessagingEdgeEventType.INTERACT, tokenList)
```

### Android Java

```java
// Tracking interaction with PropositionItem with tokens
// Extract the tokens from the PropositionItem item data
final List<String> tokenList = new ArrayList<>();
tokenList.add(dataItemToken1);
tokenList.add(dataItemToken2);
propositionItem1.track("click", MessagingEdgeEventType.INTERACT, tokenList);
```

### iOS Swift

```swift
/// Tracking interaction with PropositionItem with tokens
/// Extract the tokens from the PropositionItem item data
propositionItem1.track("click", withEdgeEventType: .interact, forTokens: [dataItemToken1, dataItemToken2])
```

## Tracking interactions with content cards

Since it's up to the app developer to render the content card UI, you must monitor the display and desired end user interactions and call the appropriate tracking APIs. To record a display or interaction with the content card, call the [track](../public-classes/content-card.md#track) API provided in the `ContentCard` class. The following code shows two examples of tracking: when the content card is displayed to the user and when the user clicks on the content card. These examples are for illustrating how to call the track API and not a recommendation on where it should be called. Please examine your app workflow to find the appropriate way to perform tracking.

### Android Kotlin

```kotlin
// Tracking display of ContentCard          
// use the same contentCard object from the retrieve propositions section
contentCard.track(null, MessagingEdgeEventType.DISPLAY)
 
// Tracking interaction with ContentCard
// use the same contentCard object from the retrieve propositions section
contentCard.track("click", MessagingEdgeEventType.INTERACT)
```

### Android Java

```java
// Tracking display of ContentCard          
// use the same contentCard from the retrieve propositions section
contentCard.track(null, MessagingEdgeEventType.DISPLAY);
 
// Tracking interaction with ContentCard
// use the same contentCard object from the retrieve propositions section
contentCard.track("click", MessagingEdgeEventType.INTERACT);
```

### iOS Swift

```swift
/// Tracking display of ContentCard
/// use the same contentCard object from the retrieve propositions section
contentCard.track(withEdgeEventType: MessagingEdgeEventType.display)

/// Tracking interaction with ContentCard        
/// use the same contentCard object from retrieve propositions section
contentCard.track("click", withEdgeEventType: MessagingEdgeEventType.interact)
```

