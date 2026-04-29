---
title: InboxUI
description: The main class for displaying an Inbox in your application, managing state transitions and providing a SwiftUI view.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxUI
- InboxState
- InboxEventListening
- SwiftUI
---

# InboxUI

`InboxUI` is the main class for displaying an Inbox in your application. It manages its own state transitions — loading, loaded, and error — and provides a SwiftUI view that renders content cards using the layout and settings configured in Adobe Journey Optimizer.

## Class Definition

```swift
@available(iOS 15.0, *)
public class InboxUI: Identifiable, ObservableObject
```

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | `UUID` | A unique identifier for this inbox instance. |
| `surface` | `Surface` | The surface this inbox is bound to. |
| `state` | [`InboxState`](./inboxstate.md) | The current state of the inbox. Published — changes automatically update the view. |
| `inboxSchemaData` | [`InboxSchemaData?`](./inboxschemadata.md) | The inbox schema data, including layout, heading, and empty state settings. Published and read-only. |
| `listener` | [`InboxEventListening?`](./inboxeventlistening.md) | An optional listener to receive inbox state and card interaction events. |
| `isPullToRefreshEnabled` | `Bool` | Whether pull-to-refresh is enabled. Default: `false`. |
| `cardSpacing` | `CGFloat` | The vertical spacing between content cards. Default: `16`. |
| `contentPadding` | `EdgeInsets` | The padding around the content area. Default: `EdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)`. |
| `unreadIconSize` | `CGFloat` | The size of the unread indicator icon in points. Default: `16`. |
| `view` | `some View` | The SwiftUI view representing the inbox. Use this to embed the inbox in your app's view hierarchy. |

## Initializer

### init(surface:customizer:listener:)

Creates a new `InboxUI` instance. Use `Messaging.getInboxUI(for:)` as the preferred way to create an `InboxUI` from a surface.

#### Parameters

* _surface_ - The `Surface` for which to display the inbox.
* _customizer_ - An optional [`ContentCardCustomizing`](../../../content-card-ui/iOS/public-classes/contentcardcustomizing.md) object to customize the appearance of content cards within the inbox.
* _listener_ - An optional [`InboxEventListening`](./inboxeventlistening.md) object to listen to inbox events.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public init(surface: Surface,
            customizer: ContentCardCustomizing? = nil,
            listener: InboxEventListening? = nil)
```

## Public Methods

### refresh()

Programmatically triggers a refresh of inbox content. Calls `updatePropositionsForSurfaces` followed by `getPropositionsForSurfaces` for the inbox surface.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func refresh()
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.refresh()
```

---

### setBackground(\_:)

Sets a custom background for the inbox container. Accepts any SwiftUI `View` — a color, gradient, image, etc.

#### Parameters

* _view_ - A SwiftUI `View` to use as the inbox background.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func setBackground<V: View>(_ view: V)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setBackground(Color(.systemGroupedBackground))

inboxUI.setBackground(
    LinearGradient(colors: [.blue.opacity(0.1), .purple.opacity(0.05)],
                   startPoint: .top, endPoint: .bottom)
)
```

---

### setLoadingView(\_:)

Replaces the default loading view with a custom view.

#### Parameters

* _builder_ - A closure that returns an `AnyView` to display while the inbox is loading.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func setLoadingView(_ builder: @escaping () -> AnyView)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setLoadingView {
    AnyView(
        VStack {
            ProgressView()
            Text("Loading your inbox...")
        }
    )
}
```

---

### setErrorView(\_:)

Replaces the default error view with a custom view.

#### Parameters

* _builder_ - A closure that receives the `Error` and returns an `AnyView` to display when the inbox fails to load.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func setErrorView(_ builder: @escaping (Error) -> AnyView)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setErrorView { error in
    AnyView(
        VStack {
            Text("Something went wrong")
            Text(error.localizedDescription)
                .foregroundColor(.secondary)
            Button("Try Again") { inboxUI.refresh() }
        }
    )
}
```

---

### setEmptyView(\_:)

Replaces the default empty state view with a custom view.

#### Parameters

* _builder_ - A closure that receives the optional [`EmptyStateSettings`](./inbox-settings/emptystatessettings.md) and returns an `AnyView` to display when the inbox has no content.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func setEmptyView(_ builder: @escaping (EmptyStateSettings?) -> AnyView)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setEmptyView { emptyStateSettings in
    AnyView(
        VStack {
            if let message = emptyStateSettings?.message {
                message.view
            } else {
                Text("No messages")
            }
        }
    )
}
```

---

### setHeadingView(\_:)

Replaces the default heading view with a custom view.

#### Parameters

* _builder_ - A closure that receives the [`AEPText`](../../../content-card-ui/iOS/ui-elements/aeptext.md) heading configured in Adobe Journey Optimizer and returns an `AnyView`.

#### Syntax

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
public func setHeadingView(_ builder: @escaping (AEPText) -> AnyView)
```

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setHeadingView { heading in
    AnyView(
        HStack {
            Image(systemName: "tray.fill")
            heading.view
                .font(.title2)
                .fontWeight(.bold)
        }
        .padding()
    )
}
```
