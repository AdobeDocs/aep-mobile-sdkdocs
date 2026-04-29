---
title: Inbox UI API Usage
description: Learn how to use the Messaging extension APIs to implement Inbox UI in your iOS application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Inbox UI
- Messaging
- Customizing UI
- Content Cards
- iOS
---

# API Reference

This document lists the public APIs available in the Messaging extension for implementing Inbox UI with qualified content cards.

## Importing Messaging

To use the Messaging APIs, import the Messaging module in your Swift file.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import AEPMessaging
```

## getInboxUI

The `getInboxUI` method obtains an [InboxUI](./public-classes/inboxui.md) instance for a given surface so you can display a SwiftUI Inbox view with the qualified content cards.

#### Parameters:

* _surface_ - The [Surface](../../public-classes/surface.md) for which to retrieve the inbox.
* _customizer_ - An optional [ContentCardCustomizing](../../content-card-ui/iOS/public-classes/contentcardcustomizing.md) object to customize the appearance of the content cards within the inbox. If you do not need to customize the appearance of the content cards, this parameter can be omitted.
* _listener_ - An optional [InboxEventListening](./public-classes/inboxeventlistening.md) object to listen to state and interaction events from the inbox. If you do not need to listen to events, this parameter can be omitted.

<InlineAlert variant="info" slots="text"/>

This API returns an `InboxUI` immediately. The inbox will not have content until proposition data has been fetched for the same surface. You **must** call the [`updatePropositionsForSurfaces`](../../code-based/api-reference.md#updatepropositionsforsurfaces) API with the desired surfaces prior to or after obtaining the inbox UI, depending on when you want content to appear.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
@available(iOS 15.0, *)
public static func getInboxUI(for surface: Surface,
                              customizer: ContentCardCustomizing? = nil,
                              listener: InboxEventListening? = nil) -> InboxUI
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
// Create a surface matching your Adobe Journey Optimizer campaign configuration
let inboxSurface = Surface(path: "inbox")

// Get the InboxUI instance
let inboxUI = Messaging.getInboxUI(for: inboxSurface)

// Display the inbox view in SwiftUI
struct InboxPage: View {
    var body: some View {
        inboxUI.view
            .onAppear {
                Messaging.updatePropositionsForSurfaces([inboxSurface])
            }
    }
}
```

#### Example with listener and customizer

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxSurface = Surface(path: "inbox")

let inboxUI = Messaging.getInboxUI(
    for: inboxSurface,
    customizer: MyCardCustomizer(),
    listener: self
)
```

## Typical Usage Flow

1. Register and configure the AEPMessaging extension at app launch.
2. Call [`updatePropositionsForSurfaces`](../../code-based/api-reference.md#updatepropositionsforsurfaces) to download inbox content.
3. Call `Messaging.getInboxUI(for:)` to obtain an `InboxUI` instance.
4. Display the inbox using the `InboxUI.view` property in your SwiftUI or UIKit view.
5. Optionally assign a listener and customizer to respond to events and style the inbox.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import SwiftUI
import AEPMessaging

struct InboxPage: View {
    let inboxUI: InboxUI

    init() {
        let surface = Surface(path: "inbox")
        inboxUI = Messaging.getInboxUI(for: surface)
        inboxUI.isPullToRefreshEnabled = true
    }

    var body: some View {
        NavigationView {
            inboxUI.view
                .navigationTitle("Inbox")
        }
        .onAppear {
            Messaging.updatePropositionsForSurfaces([Surface(path: "inbox")])
        }
    }
}
```

## Next Steps

* [Displaying Inbox](./tutorial/displaying-inbox.md) - Detailed guide on displaying an Inbox in SwiftUI and UIKit
* [Listening to Inbox Events](./tutorial/listening-inbox-events.md) - Respond to inbox state changes and card interactions
* [Customizing Your Inbox](./tutorial/customizing-inbox.md) - Customize appearance, spacing, and views
