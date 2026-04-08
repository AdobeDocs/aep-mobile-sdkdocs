---
title: UnreadIconSettings
description: Configuration for the icon and placement of the unread indicator.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- UnreadIconSettings
- IconPlacement
- UnreadIndicatorSettings
---

# UnreadIconSettings

Configuration for the icon and placement of the unread indicator.

## Struct Definition

```swift
public struct UnreadIconSettings: Codable
```

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `placement` | [`IconPlacement`](./iconplacement.md) | The corner of the content card where the unread indicator is displayed. |
| `image` | [`AEPImage`](../../../../content-card-ui/iOS/ui-elements/aepimage.md) | The image used as the unread indicator icon. |
