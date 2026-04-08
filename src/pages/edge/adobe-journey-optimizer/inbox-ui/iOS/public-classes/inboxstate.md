---
title: InboxState
description: An enum representing the current state of an InboxUI instance.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxState
- InboxUI
---

# InboxState

An enum representing the current state of an [InboxUI](./inboxui.md) instance.

## Enum Definition

```swift
public enum InboxState {
    case loading
    case loaded([ContentCardUI])
    case error(Error)
}
```

## Cases

| Case | Associated Value | Description |
| --- | --- | --- |
| `loading` | — | The inbox is fetching content. The default loading view (or custom loading view) is displayed. |
| `loaded` | `[ContentCardUI]` | Content has been fetched. The associated array contains the content cards to display. The array may be empty if the inbox has no content, in which case the empty state view is displayed. |
| `error` | `Error` | An error occurred while loading. The associated value is the `Error` that was encountered. See [InboxError](./inboxerror.md) for inbox-specific error types. |

## Usage

`InboxState` is exposed as a `@Published` property on `InboxUI`. You can observe it directly if you need to drive custom UI outside of the built-in `InboxUI.view`.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
import SwiftUI
import AEPMessaging

struct InboxPage: View {
    @ObservedObject var inboxUI: InboxUI

    var body: some View {
        switch inboxUI.state {
        case .loading:
            ProgressView("Loading...")
        case .loaded(let cards) where cards.isEmpty:
            Text("No messages")
        case .loaded(let cards):
            ScrollView {
                ForEach(cards) { card in
                    card.view
                }
            }
        case .error(let error):
            Text("Error: \(error.localizedDescription)")
        }
    }
}
```

<InlineAlert variant="info" slots="text"/>

When using `InboxUI.view`, state transitions are handled automatically. Use `InboxState` directly only when you need to build fully custom rendering outside of the provided view.
