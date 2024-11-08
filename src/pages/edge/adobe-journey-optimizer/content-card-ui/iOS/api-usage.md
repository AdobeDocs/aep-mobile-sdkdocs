---
title: Content Card UI API Usage
description: Learn how to use the Messaging extension APIs to implement content card with UI.
keywords:
- Adobe Journey Optimizer
- Guide
- Content Card
- Messaging
- Customizing UI
- Card Templates
- Content Card Templates
- Small Image Template
---

# API Reference

This document lists the public APIs available in the Messaging extension for implementing content card with UI.

## getContentCardsUI

The `getContentCardsUI` method retrieves an array of [ContentCardUI](./public-classes/contentcardui.md) objects for the provided surface. These ContentCardUI objects provide the user interface for templated content cards to your application.

#### Parameters:

* _surface_ - The [Surface](../../public-classes/surface.md) for which the content cards should be retrieved.
* _customizer_ - An optional [ContentCardCustomizing](./public-classes/contentcardcustomizing.md) object to customize the appearance of the content card template. If you do not need to customize the appearance of the content card template, this parameter can be omitted.
* _listener_ - An optional [ContentCardUIEventListening](./public-classes/contentcarduieventlistening.md) object to listen to UI events from the content card. If you do not need to listen to UI events from the content card, this parameter can be omitted.
* _completion_ - A completion handler that is called with a `Result` containing either:
    * _success_ - An array of [ContentCardUI](./public-classes/contentcardui.md) objects representing the content cards to be displayed.
    * _failure_ - An `Error` object indicating the reason for the failure, if any.

<InlineAlert variant="info" slots="text"/>

Calling this API will not download content cards from Adobe Journey Optimizer; it will only retrieve the content cards that are already downloaded and cached by the Messaging extension. You **must** call the [`updatePropositionsForSurfaces`](../../code-based/api-reference.md#updatepropositionsforsurfaces) API with the desired surfaces prior to calling this API.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public static func getContentCardsUI(for surface: Surface,
                                     customizer: ContentCardCustomizing? = nil,
                                     listener: ContentCardUIEventListening? = nil,
                                     _ completion: @escaping (Result<[ContentCardUI], Error>) -> Void)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
// Download the content cards for homepage surface using Messaging extension
let homePageSurface = Surface(path: "homepage")
Messaging.updatePropositionsForSurfaces([homePageSurface])

// Get the content card UI for the homepage surface
Messaging.getContentCardsUI(for: homePageSurface) { result in
    switch result {
    case .success(let contentCards):
        // Use the contentCards array to display UI for templated content cards in your application
    case .failure(let error):
        // Handle the error
    }
}
```
