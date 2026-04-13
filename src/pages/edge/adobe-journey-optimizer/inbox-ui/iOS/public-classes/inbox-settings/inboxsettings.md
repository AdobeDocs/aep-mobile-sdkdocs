---
title: InboxSettings
description: Contains the configuration settings for an inbox, accessible via InboxSchemaData.content.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxSettings
- InboxSchemaData
---

# InboxSettings

Contains the configuration settings for an inbox. Accessible via `InboxSchemaData.content`.

## Class Definition

```swift
public class InboxSettings: NSObject, Codable
```

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `heading` | [`AEPText?`](../../../../content-card-ui/iOS/ui-elements/aeptext.md) | Optional heading text displayed at the top of the inbox. Configured in Adobe Journey Optimizer. |
| `layout` | [`LayoutSettings`](./layoutsettings.md) | Controls the orientation (horizontal or vertical) of content cards within the inbox. |
| `capacity` | `Int` | The maximum number of content cards to display in the inbox. |
| `emptyStateSettings` | [`EmptyStateSettings?`](./emptystatessettings.md) | Optional settings for the empty state view, including a message and image to display when the inbox has no content. |
| `unreadIndicator` | [`UnreadIndicatorSettings?`](./unreadindicatorsettings.md) | Optional settings controlling the appearance and placement of the unread indicator shown on unread cards. |
| `isUnreadEnabled` | `Bool` | Whether the unread indicator feature is enabled for this inbox. |
