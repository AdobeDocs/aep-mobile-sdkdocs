---
title: InboxOrientation
description: An enum specifying the layout direction of content cards in the inbox.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxOrientation
- LayoutSettings
---

# InboxOrientation

An enum specifying the layout direction of content cards in the inbox.

## Enum Definition

```swift
public enum InboxOrientation: String, CaseIterable {
    case horizontal = "horizontal"
    case vertical = "vertical"
}
```

## Cases

| Case | Raw Value | Description |
| --- | --- | --- |
| `horizontal` | `"horizontal"` | Content cards are arranged in a horizontal scrollable row. |
| `vertical` | `"vertical"` | Content cards are stacked vertically in a scrollable list. |
