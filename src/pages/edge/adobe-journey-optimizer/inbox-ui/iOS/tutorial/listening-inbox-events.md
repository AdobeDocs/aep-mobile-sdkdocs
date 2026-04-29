---
title: Listening to Inbox Events
description: This tutorial explains how to listen to events from the Inbox in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Inbox UI
- InboxUI
- InboxEventListening
- ContentCardUI
---

# Listening to Inbox Events

This tutorial explains how to listen to events from the Inbox in your application.

## Overview

The Messaging extension provides a way to listen to events from both the Inbox container and individual content cards within it. By conforming to the [InboxEventListening](../public-classes/inboxeventlistening.md) protocol, you can respond to inbox-level state changes and individual content card interactions.

## Inbox-Level Events

These events track the overall state of the inbox container.

### onLoading

Called when the inbox begins loading content. Triggered when the `InboxUI` is first created or when a refresh (pull-to-refresh or programmatic) begins.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onLoading(_ inbox: InboxUI) {
    print("Inbox is loading...")
}
```

### onSuccess

Called when the inbox successfully loads content. Triggered whether the inbox contains cards or is empty.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onSuccess(_ inbox: InboxUI) {
    print("Inbox loaded successfully")
}
```

### onError

Called when the inbox encounters an error while loading. See [InboxError](../public-classes/inboxerror.md) for the error types that can be returned.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onError(_ inbox: InboxUI, _ error: Error) {
    print("Inbox error: \(error.localizedDescription)")
}
```

## Content Card Events

These events track interactions with individual content cards within the inbox.

### onCardCreated

Called when a content card is created and configured. This is called once per card when the inbox loads or refreshes.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardCreated(_ card: ContentCardUI) {
    print("Card created: \(card.id)")
}
```

### onCardDisplayed

Called when a content card appears on screen. Use this to track card impressions.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardDisplayed(_ card: ContentCardUI) {
    print("Card displayed: \(card.id)")
}
```

<InlineAlert variant="info" slots="text"/>

This event is triggered automatically by the SDK when the card appears on screen. You do not need to manually call any display methods.

### onCardInteracted

Called when the user interacts with a content card (e.g., taps a button or link). The return value controls whether the SDK handles the `actionURL`.

The `onCardInteracted` method provides an optional `actionURL` parameter associated with the interaction event. The return value of this method determines how the URL is handled.

* Returns `true` if your application has successfully handled the URL. This indicates to the SDK that no further action is needed.
* Returns `false` to allow the SDK to process the URL.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
    guard let url = actionURL else { return false }

    if url.scheme == "myapp" {
        navigateToDeepLink(url)
        return true // URL handled by app
    }

    return false // Let SDK handle URL
}
```

<InlineAlert variant="info" slots="text"/>

When a card is interacted with, it is automatically marked as read and persisted. The read status persists between app launches and affects unread indicator visibility (if enabled).

### onCardDismissed

Called when a user dismisses a content card. The inbox automatically removes the dismissed card from the UI.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardDismissed(_ card: ContentCardUI) {
    print("Card dismissed: \(card.id)")
}
```

## Implement InboxEventListening

Complete the following steps to listen to inbox events:

1. Conform to the [InboxEventListening](../public-classes/inboxeventlistening.md) protocol in your class or struct and implement the desired methods.
2. Pass the listener to the [getInboxUI](../api-usage.md#getinboxui) API.

Below is an example implementation of `InboxEventListening`:

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import SwiftUI
import AEPMessaging

struct InboxPage: View, InboxEventListening {

    let inboxUI: InboxUI
    @State private var showError = false
    @State private var errorMessage = ""

    init() {
        let inboxSurface = Surface(path: "inbox")
        inboxUI = Messaging.getInboxUI(for: inboxSurface, listener: self)
        inboxUI.isPullToRefreshEnabled = true
    }

    var body: some View {
        inboxUI.view
            .onAppear {
                Messaging.updatePropositionsForSurfaces([Surface(path: "inbox")])
            }
    }

    // MARK: - Inbox State Events

    func onLoading(_ inbox: InboxUI) {
        print("Loading inbox...")
    }

    func onSuccess(_ inbox: InboxUI) {
        print("Inbox loaded successfully")
    }

    func onError(_ inbox: InboxUI, _ error: Error) {
        print("Inbox error: \(error)")
        errorMessage = error.localizedDescription
        showError = true
    }

    // MARK: - Content Card Events

    func onCardCreated(_ card: ContentCardUI) {
        print("Card created: \(card.id)")
    }

    func onCardDisplayed(_ card: ContentCardUI) {
        print("Card displayed: \(card.id)")
    }

    func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
        if let url = actionURL, url.scheme == "myapp" {
            handleDeepLink(url)
            return true
        }

        return false
    }

    func onCardDismissed(_ card: ContentCardUI) {
        print("Card dismissed: \(card.id)")
    }

    private func handleDeepLink(_ url: URL) {
        // Your deep link handling logic
        print("Handling deep link: \(url)")
    }
}
```

## Handling Actionable URLs

The `onCardInteracted` method provides control over how URLs are handled when users interact with content cards.

### Handle All URLs

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
    guard let url = actionURL else { return false }

    // Handle all URLs in your app
    navigateToURL(url)
    return true // Prevent SDK from opening URL
}
```

### Selective Handling

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
    guard let url = actionURL else { return false }

    // Only handle specific URL schemes
    if url.scheme == "myapp" || url.scheme == "http" || url.scheme == "https" {
        handleURL(url)
        return true
    }

    // Let SDK handle other schemes
    return false
}
```

## Best Practices

1. **Avoid Heavy Work in Event Handlers**: Event handlers are called on the main thread. Keep them lightweight and dispatch heavy work to background queues.

2. **Handle Errors Gracefully**: Provide user-friendly error messages and retry options.

3. **Log for Debugging**: Use event handlers to log state transitions during development.

## Next Steps

* [Displaying Inbox](displaying-inbox.md) - Learn how to fetch and display the Inbox
* [Customizing Your Inbox](customizing-inbox.md) - Customize appearance, spacing, and views
