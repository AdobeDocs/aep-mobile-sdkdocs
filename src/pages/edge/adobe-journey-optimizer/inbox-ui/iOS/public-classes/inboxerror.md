---
title: InboxError
description: An enum describing errors that can occur when loading an InboxUI.
keywords:
- Adobe Journey Optimizer
- Inbox
- Messaging
- InboxError
- InboxUI
---

# InboxError

An enum describing errors that can occur when loading an [InboxUI](./inboxui.md). Conforms to `LocalizedError`.

## Enum Definition

```swift
public enum InboxError: Int, Error {
    case dataUnavailable = 1
    case inboxSchemaDataNotFound = 2
    case invalidInboxSchemaData = 3
    case inboxCreationFailed = 4
}
```

## Cases

| Case | Raw Value | Description |
| --- | --- | --- |
| `dataUnavailable` | `1` | No proposition data was available for the requested surface. Typically occurs when `updatePropositionsForSurfaces` has not been called, or no campaigns are configured for the surface. |
| `inboxSchemaDataNotFound` | `2` | A proposition was found for the surface but it did not contain an inbox schema item. |
| `invalidInboxSchemaData` | `3` | An inbox schema item was found but its content could not be decoded into valid `InboxSchemaData`. |
| `inboxCreationFailed` | `4` | An internal error occurred while creating the inbox. |

## LocalizedError Conformance

`InboxError` provides human-readable descriptions via `LocalizedError`:

| Property | Description |
| --- | --- |
| `errorDescription` | A short description of the error. |
| `failureReason` | The reason the error occurred. |
| `recoverySuggestion` | A suggested action to resolve the error. |

#### Example

<CodeBlock slots="heading, code" repeat="1" languages="Swift" />

#### Swift

```swift
func onError(_ inbox: InboxUI, _ error: Error) {
    if let inboxError = error as? InboxError {
        switch inboxError {
        case .dataUnavailable:
            print("No content available. Call updatePropositionsForSurfaces first.")
        case .inboxSchemaDataNotFound:
            print("No inbox campaign is configured for this surface.")
        case .invalidInboxSchemaData:
            print("Inbox configuration data is malformed.")
        case .inboxCreationFailed:
            print("Internal error creating the inbox.")
        }
    }
}
```
