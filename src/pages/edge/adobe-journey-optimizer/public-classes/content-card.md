---
title: ContentCard
description: An object representing the default content card created in the Adobe Journey Optimizer UI.
keywords:
- Adobe Journey Optimizer
- Messaging
- Proposition
- Interface
- Android
- iOS
- Code-based Experiences
- Content Cards
- Content Card
---

# ContentCard

An object representing the default content card created in the Adobe Journey Optimizer UI.

Content cards must be rendered by the app developer. Tracking a content card is done via calls to the [`track(_:withEdgeEventType:)`](#track_withedgeeventtype) API.

## iOS Interface

```swift
@objc(AEPContentCard)
@objcMembers
public class ContentCard: NSObject, Codable {
    /// Plain-text title for the content card
    public let title: String

    /// Plain-text body representing the content for the content card
    public let body: String

    /// String representing a URI that contains an image to be used for this content card
    public let imageUrl: String?

    /// Contains a URL to be opened if the user interacts with the content card
    public let actionUrl: String?

    /// Required if `actionUrl` is provided. Text to be used in title of button or link in content card
    public let actionTitle: String?

    ...
}
```

### Public functions

---

### track(_:withEdgeEventType:)

Tracks an interaction with the given `ContentCard`.

#### Syntax

```swift
public func track(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType)
```

#### Parameters

* _interaction_ - a custom `String` value to be recorded in the interaction
* _eventType_ - the [`MessagingEdgeEventType`](./messaging-edge-event-type.md) to be used for the ensuing Edge Event

#### Example

```swift
var contentCard: ContentCard

// tracking a display
contentCard.track(withEdgeEventType: .display)

// tracking a user interaction
contentCard.track("itemSelected", withEdgeEventType: .interact)
```

## Android Interface

```java
public class ContentCard {
    // Plain-text title for the content card
    private String title;

    // Plain-text body representing the content for the content card
    private String body;

    // String representing a URI that contains an image to be used for this content card
    private String imageUrl;

    // Contains a URL to be opened if the user interacts with the content card
    private String actionUrl;

    // Required if actionUrl is provided. Text to be used in title of button or link in content card
    private String actionTitle;

    public String getTitle() { return title; }

    public String getBody() { return body; }

    @Nullable public String getImageUrl() { return imageUrl; }

    @Nullable public String getActionUrl() { return actionUrl; }

    @Nullable public String getActionTitle() { return actionTitle; }

    ...
}
```

### Public functions

---

### track

Tracks an interaction with the given `ContentCard`.

#### Syntax

```java
public void track(final String interaction, final MessagingEdgeEventType eventType);
```

#### Parameters

* _interaction_ - a custom `String` value to be recorded in the interaction
* _eventType_ - the [`MessagingEdgeEventType`](./messaging-edge-event-type.md) to be used for the ensuing Edge Event

#### Example

```java
ContentCard contentCard;

// tracking a display
contentCardSchemaData.track(null, MessagingEdgeEventType.display);

// tracking a user interaction
contentCardSchemaData.track("itemSelected", MessagingEdgeEventType.interact);
```
