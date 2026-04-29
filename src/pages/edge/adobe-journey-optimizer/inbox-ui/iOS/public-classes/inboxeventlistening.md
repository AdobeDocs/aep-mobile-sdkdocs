---
title: InboxEventListening
description: A protocol for listening to state changes and content card interaction events from an InboxUI instance.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxEventListening
- InboxUI
- ContentCardUI
---

# InboxEventListening

A protocol that defines methods for listening to state changes and content card interaction events from an [InboxUI](./inboxui.md) instance.

## Protocol Definition

```swift
public protocol InboxEventListening {
    func onLoading(_ inbox: InboxUI)
    func onSuccess(_ inbox: InboxUI)
    func onError(_ inbox: InboxUI, _ error: Error)
    func onCardCreated(_ card: ContentCardUI)
    func onCardDisplayed(_ card: ContentCardUI)
    func onCardDismissed(_ card: ContentCardUI)
    func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool
}
```

All methods have default no-op implementations, so you only need to implement the methods relevant to your use case.

## Inbox State Methods

### onLoading

Called when the inbox begins loading content. Triggered when the `InboxUI` is first created or when a refresh (pull-to-refresh or programmatic) begins.

#### Parameters

* _inbox_ - The [InboxUI](./inboxui.md) that is loading.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onLoading(_ inbox: InboxUI)
```

---

### onSuccess

Called when the inbox successfully loads content. Triggered whether the inbox contains cards or is empty.

#### Parameters

* _inbox_ - The [InboxUI](./inboxui.md) that loaded successfully.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onSuccess(_ inbox: InboxUI)
```

---

### onError

Called when the inbox encounters an error while loading. See [InboxError](./inboxerror.md) for the error types that can be returned.

#### Parameters

* _inbox_ - The [InboxUI](./inboxui.md) that encountered an error.
* _error_ - The error describing what went wrong.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onError(_ inbox: InboxUI, _ error: Error)
```

## Content Card Methods

### onCardCreated

Called when a content card is created and configured. This is called once per card when the inbox loads or refreshes.

#### Parameters

* _card_ - The [`ContentCardUI`](../../../content-card-ui/iOS/public-classes/contentcardui.md) that was created.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardCreated(_ card: ContentCardUI)
```

---

### onCardDisplayed

Called when a content card appears on screen. Use this to track card impressions.

#### Parameters

* _card_ - The [`ContentCardUI`](../../../content-card-ui/iOS/public-classes/contentcardui.md) that was displayed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardDisplayed(_ card: ContentCardUI)
```

---

### onCardDismissed

Called when a user dismisses a content card. The inbox automatically removes the dismissed card from the UI.

#### Parameters

* _card_ - The [`ContentCardUI`](../../../content-card-ui/iOS/public-classes/contentcardui.md) that was dismissed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardDismissed(_ card: ContentCardUI)
```

---

### onCardInteracted

Called when the user interacts with a content card (e.g., taps a button or link). The return value controls whether the SDK handles the `actionURL`.

#### Parameters

* _card_ - The [`ContentCardUI`](../../../content-card-ui/iOS/public-classes/contentcardui.md) that was interacted with.
* _interactionId_ - A string identifier for the interaction (e.g., a button ID).
* _actionURL_ - The optional URL associated with the interaction.

#### Returns

Return `true` if your application handled the `actionURL`. Return `false` to let the SDK handle it.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onCardInteracted(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {
    guard let url = actionURL else { return false }

    if url.scheme == "myapp" {
        handleDeepLink(url)
        return true // app handled it
    }

    return false // let SDK open the URL
}
```
