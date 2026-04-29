---
title: InboxSchemaData
description: Represents the schema data for an inbox that drives the layout, heading, empty state, and unread indicator behavior of the InboxUI.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxSchemaData
- InboxSettings
- InboxUI
---

# InboxSchemaData

Represents the schema data for an inbox that drives the layout, heading, empty state, and unread indicator behavior of the [InboxUI](./inboxui.md).

## Class Definition

```swift
public class InboxSchemaData: NSObject, Codable
```

## Public Properties

| Property | Type | Description |
| --- | --- | --- |
| `content` | [`InboxSettings`](./inbox-settings/inboxsettings.md) | The inbox configuration settings, containing layout, heading, capacity, empty state, and unread indicator configuration. |

## Usage

`InboxSchemaData` is available as the `inboxSchemaData` property on [InboxUI](./inboxui.md). It is set automatically once the inbox loads, and is `nil` while in the loading state.

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
let inboxUI = Messaging.getInboxUI(for: Surface(path: "inbox"))

// After the inbox loads, inboxSchemaData is populated
if let schemaData = inboxUI.inboxSchemaData {
    print("Layout: \(schemaData.content.layout.orientation)")
    print("Capacity: \(schemaData.content.capacity)")
}
```
