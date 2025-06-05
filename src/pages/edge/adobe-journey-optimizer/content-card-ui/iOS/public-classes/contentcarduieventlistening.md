---
title: ContentCardUIEventListening
description: Protocol that defines methods for listening to UI events related to content cards.
keywords:
- Adobe Journey Optimizer
- Content Card
- Messaging
- UI
- ContentCardUI
- Event Listening
- Card Templates
---

# ContentCardUIEventListening

A protocol that defines methods for listening to UI events related to content cards.

## Protocol Definition

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public protocol ContentCardUIEventListening {
    func onDisplay(_ card: ContentCardUI)
    func onDismiss(_ card: ContentCardUI)
    func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool
}
```

## Methods

### onDisplay

Called when the content card appears on the screen. Implementation of this method is optional.

#### Parameters

* _card_ - The [ContentCardUI](./contentcardui.md) that is displayed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onDisplay(_ card: ContentCardUI)
```

### onDismiss

Called when the content card is dismissed. Implementation of this method is optional.

#### Parameters

* _card_ - The [ContentCardUI](./contentcardui.md) that is dismissed.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onDismiss(_ card: ContentCardUI)
```

### onInteract

Called when the user interacts with the content card. Implementation of this method is optional.

#### Parameters

* _card_ - The [ContentCardUI](./contentcardui.md) that is interacted with.
* _interactionId_ - A string identifier for the interaction event.
* _actionURL_ - The optional URL associated with the interaction.

#### Returns

A boolean value indicating whether the interaction event was handled. Return `true` if the client app has handled the `actionURL` associated with the interaction. Return `false` if the SDK should handle the `actionURL`.

#### Syntax

<CodeBlock slots="heading, code, content" repeat="1" languages="Swift" />

#### Swift

```swift
func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool
```
