---
title: Customizing Your Inbox
description: This tutorial explains how to customize the appearance and behavior of the Inbox in your application.
keywords:
- Adobe Journey Optimizer
- Guide
- Inbox
- Messaging
- Inbox UI
- InboxUI
- Customizing UI
- ContentCardCustomizing
---

# Customizing Your Inbox

This tutorial explains how to customize the appearance and behavior of the Inbox in your application.

## Overview

The `InboxUI` provides extensive customization options to match your app's design system. You can customize:

* **Visual Appearance**: Background, spacing, padding, and unread indicators
* **Pull-to-Refresh**: Enable user-driven content refresh
* **Custom Views**: Loading, error, empty state, and heading views
* **Content Cards**: Individual card appearance through the `ContentCardCustomizing` protocol

All customizations are applied to the `InboxUI` instance before or after displaying the view.

## Visual Appearance Customization

### Background

Set a custom background for the inbox container. The background can be a color, gradient, image, or any SwiftUI view.

#### Setting a Color Background

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

// Solid color
inboxUI.setBackground(Color.white)

// System colors (adapt to light/dark mode)
inboxUI.setBackground(Color(.systemBackground))

// Custom colors with opacity
inboxUI.setBackground(Color.blue.opacity(0.1))
```

#### Setting a Gradient Background

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setBackground(
    LinearGradient(
        colors: [Color.blue.opacity(0.1), Color.purple.opacity(0.05)],
        startPoint: .top,
        endPoint: .bottom
    )
)
```

#### Setting an Image Background

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setBackground(
    Image("inbox_background")
        .resizable()
        .aspectRatio(contentMode: .fill)
)
```

<InlineAlert variant="info" slots="text"/>

Default: `Color(.systemGroupedBackground)` - adapts to light and dark mode.

### Card Spacing

Control the spacing between content cards in the inbox.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

// Tighter spacing
inboxUI.cardSpacing = 8

// Default spacing
inboxUI.cardSpacing = 16

// Looser spacing
inboxUI.cardSpacing = 24
```

<InlineAlert variant="info" slots="text"/>

Default: `16` points.

### Content Padding

Set the padding around the content area of the inbox.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

// Uniform padding on all sides
inboxUI.contentPadding = EdgeInsets(top: 16, leading: 16, bottom: 16, trailing: 16)

// Different padding for each side
inboxUI.contentPadding = EdgeInsets(top: 20, leading: 12, bottom: 20, trailing: 12)

// Minimal padding
inboxUI.contentPadding = EdgeInsets(top: 8, leading: 8, bottom: 8, trailing: 8)
```

<InlineAlert variant="info" slots="text"/>

Default: `EdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)`.

## Custom Views

The Inbox provides hooks to customize the loading, error, empty state, and heading views.

### Custom Loading View

Replace the default loading view with your own custom view.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

inboxUI.setLoadingView {
    AnyView(
        VStack(spacing: 16) {
            ProgressView()
                .scaleEffect(1.5)
            Text("Loading your inbox...")
                .font(.headline)
                .foregroundColor(.secondary)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    )
}
```

### Custom Error View

Replace the default error view with your own custom view that displays the error.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

inboxUI.setErrorView { error in
    AnyView(
        VStack(spacing: 20) {
            Image(systemName: "exclamationmark.triangle.fill")
                .font(.system(size: 60))
                .foregroundColor(.red)

            Text("Oops! Something went wrong")
                .font(.title2)
                .fontWeight(.bold)

            Text(error.localizedDescription)
                .font(.body)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)
                .padding(.horizontal)

            Button("Try Again") {
                inboxUI.refresh()
            }
            .buttonStyle(.borderedProminent)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .padding()
    )
}
```

### Custom Empty State View

Replace the default empty state view with your own custom view.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

inboxUI.setEmptyView { emptyStateSettings in
    AnyView(
        VStack(spacing: 20) {
            // Use configured image and message if available
            if let image = emptyStateSettings?.image {
                image.view
                    .frame(maxWidth: 120, maxHeight: 120)
            } else {
                Image(systemName: "tray")
                    .font(.system(size: 80))
                    .foregroundColor(.gray)
            }

            if let message = emptyStateSettings?.message {
                message.view
                    .multilineTextAlignment(.center)
            } else {
                Text("No messages")
                    .font(.headline)
                    .foregroundColor(.secondary)
            }

            Button("Refresh") {
                inboxUI.refresh()
            }
            .buttonStyle(.bordered)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .padding()
    )
}
```

The `emptyStateSettings` parameter contains the following properties:

* `image: AEPImage?` - Image to display in the empty state
* `message: AEPText?` - Message to display in the empty state

<InlineAlert variant="info" slots="text"/>

Use `emptyStateSettings` values when available and fall back to your custom defaults when settings are not provided.

### Custom Heading View

Replace the default heading view or add a custom header to the inbox.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

inboxUI.setHeadingView { heading in
    AnyView(
        HStack {
            Image(systemName: "tray.fill")
                .font(.title2)
                .foregroundColor(.blue)

            heading.text.view
                .font(.title)
                .fontWeight(.bold)

            Spacer()

            // Add a custom badge
            if inboxUI.contentCards.count > 0 {
                Text("\(inboxUI.contentCards.count)")
                    .font(.caption)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .clipShape(Capsule())
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 16)
        .background(
            LinearGradient(
                colors: [Color.blue.opacity(0.1), Color.purple.opacity(0.05)],
                startPoint: .leading,
                endPoint: .trailing
            )
        )
    )
}
```

The `heading` parameter contains:

* `text: AEPText` - The heading text configured in Adobe Journey Optimizer

<InlineAlert variant="info" slots="text"/>

If heading properties are not configured in Adobe Journey Optimizer, the default heading view is still displayed with default styling. The custom heading view takes priority if provided.

## Customizing Content Cards

Individual content cards within the Inbox can be customized using the `ContentCardCustomizing` protocol. This is the same protocol used for standalone content cards.

### Applying Content Card Customizations

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
class InboxCardCustomizer: ContentCardCustomizing {

    func customize(template: SmallImageTemplate) {
        // Customize UI elements
        template.title.textColor = .primary
        template.title.font = .headline
        template.body?.textColor = .secondary
        template.body?.font = .subheadline

        // Customize background
        template.backgroundColor = .white

        // Customize buttons
        template.buttons?.first?.text.font = .callout
        template.buttons?.first?.backgroundColor = .blue
    }

    func customize(template: LargeImageTemplate) {
        // Customize large image cards differently
        template.title.font = .title2
        template.backgroundColor = Color(.systemBackground)
    }
}

// Apply the customizer to the inbox
let inboxSurface = Surface(path: "inbox")
let inboxUI = Messaging.getInboxUI(
    for: inboxSurface,
    customizer: InboxCardCustomizer()
)
```

For detailed information on customizing content cards, see:

* [Customizing Content Card Templates](../../../content-card-ui/iOS/tutorial/customizing-content-card-templates.md)
* [ContentCardCustomizing Protocol](../../../content-card-ui/iOS/public-classes/contentcardcustomizing.md)

## Best Practices

### 1. Apply Customizations Early

Apply all customizations to the `InboxUI` instance immediately after creation, before the view is displayed.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: surface)

// Apply customizations immediately
inboxUI.cardSpacing = 12
inboxUI.setBackground(Color.blue.opacity(0.1))
inboxUI.isPullToRefreshEnabled = true

// Then display
return inboxUI.view
```

### 2. Respect Campaign Configuration

When customizing empty state and heading views, use configured values when available.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
inboxUI.setEmptyView { emptyStateSettings in
    AnyView(
        VStack {
            // Use configured image if available, otherwise use default
            if let configuredImage = emptyStateSettings?.image {
                configuredImage.view
            } else {
                Image("default_empty_icon")
            }

            // Use configured message if available, otherwise use default
            if let configuredMessage = emptyStateSettings?.message {
                configuredMessage.view
            } else {
                Text("No content available")
            }
        }
    )
}
```

### 3. Test Light and Dark Modes

Always test your customizations in both light and dark mode.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
// Use system colors that adapt automatically
inboxUI.setBackground(Color(.systemGroupedBackground))
```

### 4. Maintain Consistency

Keep your Inbox customizations consistent with your app's overall design system.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
// Define constants for consistency
struct DesignSystem {
    static let cardSpacing: CGFloat = 16
    static let contentPadding = EdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)
    static let primaryGradient = LinearGradient(
        colors: [Color.blue.opacity(0.1), Color.purple.opacity(0.05)],
        startPoint: .top,
        endPoint: .bottom
    )
}

// Apply consistently
inboxUI.cardSpacing = DesignSystem.cardSpacing
inboxUI.contentPadding = DesignSystem.contentPadding
inboxUI.setBackground(DesignSystem.primaryGradient)
```

### 5. Performance Considerations

* **Avoid Heavy Views**: Keep custom loading, error, and empty views lightweight
* **Optimize Images**: Use appropriately sized images for backgrounds
* **Minimize Redraws**: Avoid dynamic content in custom views that might cause frequent redraws

## Customization Reference

| Property/Method | Type | Default | Description |
|----------------|------|---------|-------------|
| `setBackground()` | Method | `Color(.systemGroupedBackground)` | Sets the inbox background view |
| `cardSpacing` | `CGFloat` | `16` | Spacing between content cards |
| `contentPadding` | `EdgeInsets` | `(12, 16, 12, 16)` | Padding around content area |
| `unreadIconSize` | `CGFloat` | `16` | Size of unread indicator icon |
| `isPullToRefreshEnabled` | `Bool` | `false` | Enables pull-to-refresh |
| `setLoadingView()` | Method | Default loading view | Custom loading view |
| `setErrorView()` | Method | Default error view | Custom error view |
| `setEmptyView()` | Method | Default empty state | Custom empty state view |
| `setHeadingView()` | Method | Default heading | Custom heading view |

## Next Steps

* [Displaying Inbox](displaying-inbox.md) - Learn how to fetch and display the Inbox
* [Listening to Inbox Events](listening-inbox-events.md) - Respond to user interactions
* [ContentCardCustomizing Protocol](../../../content-card-ui/iOS/public-classes/contentcardcustomizing.md) - Deep dive into card customization
