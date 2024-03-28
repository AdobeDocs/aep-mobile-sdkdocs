<Variant platform="android" function="updatepropositionsforsurfaces" repeat="2"/>

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

<Variant platform="android" function="getpropositionsforsurfaces" repeat="2"/>

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

<Variant platform="android" function="using-propositions" repeat="2"/>

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
        final String htmlContent = propositionItem.getHtmlContent();
        webView.loadData(htmlContent, "text/html", "UTF-8");
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
            let webView = WebView(htmlString: propositionItem.htmlContent)
        }
    }
}
```

<Variant platform="android" function="track" repeat="2"/>

#### Java

```java
// Tracking display of PropositionItem          
webView.setWebViewClient(new WebViewClient() {
    @Override
    public void onPageFinished(WebView view, String url) {
        // use the same propositionItem object that was used to get the content for the webview in the previous section
        propositionItem.track(MessagingEdgeEventType.DISPLAY);
    }
});
 
// Tracking interaction with PropositionItem
webView.setOnTouchListener((v, event) -> {
    if(event.getAction() == MotionEvent.ACTION_UP) {
        // use the same propositionItem object that was used to get the content for the webview in the previous section
        propositionItem.track("click", MessagingEdgeEventType.INTERACT, null);
    }
    return false;
});
```

<Variant platform="ios" function="track" repeat="2"/>

#### Swift

```swift
webView.onAppear {
        /// Tracking display of PropositionItem
        /// use the same propositionItem object that was used to get the content for the webview in the previous section
        propositionItem.track(withEdgeEventType: MessagingEdgeEventType.display)
    }
    .onTapGesture {
        /// Tracking interaction with PropositionItem        
        /// use the same propositionItem object that was used to get the content for the webview in the previous section
        propositionItem.track("tap", withEdgeEventType: MessagingEdgeEventType.display)
    }
```

<Variant platform="android" function="track-with-tokens" repeat="2"/>

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
