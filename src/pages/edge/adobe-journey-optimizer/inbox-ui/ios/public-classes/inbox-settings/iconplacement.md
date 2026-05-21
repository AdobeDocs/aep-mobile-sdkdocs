---
title: IconPlacement
description: An enum specifying the corner of a content card where the unread indicator icon is displayed.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- IconPlacement
- UnreadIconSettings
---

# IconPlacement

An enum specifying the corner of a content card where the unread indicator icon is displayed.

## Enum Definition

```swift
public enum IconPlacement: String, CaseIterable {
    case topLeft = "topleft"
    case topRight = "topright"
    case bottomLeft = "bottomleft"
    case bottomRight = "bottomright"
    case unknown = "unknown"
}
```

## Cases

| Case | Raw Value | Description |
| --- | --- | --- |
| `topLeft` | `"topleft"` | The unread icon is displayed in the top-left corner of the card. |
| `topRight` | `"topright"` | The unread icon is displayed in the top-right corner of the card. |
| `bottomLeft` | `"bottomleft"` | The unread icon is displayed in the bottom-left corner of the card. |
| `bottomRight` | `"bottomright"` | The unread icon is displayed in the bottom-right corner of the card. |
| `unknown` | `"unknown"` | The placement value was not recognized. Used as a fallback for unrecognized values. |
