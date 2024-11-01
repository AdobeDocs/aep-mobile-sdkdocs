---
title: Listening to Content Card Events
description: Tutorial on how to listen to content card events in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- ContentCareUI
- Dismiss
- Interact
- Display
---

# Listening to Content Card Events

This tutorial explains how to listen to content card events in your application.

## Overview

The Messaging extension provides a way to listen to events from content cards displayed in your application. The following functions can be implemented in conformance with the [ContentCardUIEventListening](../public-classes/contentcarduieventlistening.md) protocol:

* `onDisplay`
* `onDismiss`
* `onInteract`

## Implement ContentCardEventListening

Complete the following steps to hear content card events:

1. Conform to the [ContentCardUIEventListening](../public-classes/contentcarduieventlistening.md) protocol in your class or struct and implement the desired methods.
1. Pass the listener to the [getContentCardsUI](../api-usage.md#getcontentcardsui) API.

Below is an example implementation of `ContentCardEventListening`:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
struct HomePage: View, ContentCardUIEventListening {
    
    @State var savedCards : [ContentCardUI] = []
    
    var body: some View {
        ScrollView (.vertical) {
          // Display the content cards here
        }
        .onAppear() {
            let homePageSurface = Surface(path: "homepage")
            // 2. Pass the listener to the getContentCardsUI API
            AEPSwiftUI.getContentCardsUI(for: homePageSurface,
                                         listener: self) { result in
                switch result {
                case .success(let cards):
                    savedCards = cards
                    
                case .failure(let error):
                    // handle error here                    
                }
            }
        }
    }
    
    // Implement the ContentCardUIEventListening protocol methods
    func onDisplay(_ card: ContentCardUI) {
        // Handle the card display event
    }
    
    func onDismiss(_ card: ContentCardUI) {
        // Handle the card dismiss event
    }
    
    func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
        // Handle the card interaction event
        return false
    }
}
```

## Handling actionable URLs

The `onInteract` method provides an optional `actionURL` parameter associated with the interaction event. The return value of this method determines how the URL is handled.

* Return `true` if your application has successfully handled the URL. This indicates to the SDK that no further action is needed.

* Return `false` to allow the SDK to process the URL.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
    guard let url = actionURL else { return false }
    
    // Your application handles the actionable URL here

    // Return true to indicate that the SDK need not process the URL
    return true
}
```

## Removing content cards on dismiss

<InlineAlert variant="info" slots="text"/>

Removing a dismissed content card from the UI is the responsibility of the app developer.

To remove a content card from the UI when the user dismisses it, implement the onDismiss method:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
    func onDismiss(_ card: ContentCardUI) {
        savedCards.removeAll(where: { $0.id == card.id })
    }
```

This implementation ensures that the dismissed card is removed from the `savedCards` array, which should trigger a UI update if the array is used to populate your view.
