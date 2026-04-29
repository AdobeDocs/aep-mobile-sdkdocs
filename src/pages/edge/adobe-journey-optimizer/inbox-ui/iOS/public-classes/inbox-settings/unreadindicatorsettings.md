---
title: UnreadIndicatorSettings
description: Settings that define the appearance and placement of the unread indicator displayed on content cards that have not yet been read.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- UnreadIndicatorSettings
- UnreadBackgroundSettings
- UnreadIconSettings
---

# UnreadIndicatorSettings

Settings that define the appearance and placement of the unread indicator displayed on content cards that have not yet been read.

## Struct Definition

```swift
public struct UnreadIndicatorSettings: Codable
```

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `unreadBackground` | [`UnreadBackgroundSettings?`](./unreadbackgroundsettings.md) | Optional configuration for the background color of the unread indicator. |
| `unreadIcon` | [`UnreadIconSettings?`](./unreadiconsettings.md) | Optional configuration for the icon image and its placement within the unread indicator. |
