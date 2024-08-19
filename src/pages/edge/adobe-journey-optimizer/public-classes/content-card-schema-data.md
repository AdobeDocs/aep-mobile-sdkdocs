---
title: ContentCardSchemaData
description: The `ContentCardSchemaData` class represents a "content-card" proposition received from the remote, upon a personalization query request to the Experience Edge network.
keywords:
- Adobe Journey Optimizer
- Messaging
- Proposition
- Interface
- Android
- iOS
- Code-based Experiences
- Content Cards
---

# ContentCardSchemaData

Represents the proposition response object containing a `content-card` schema.

## iOS Interface

```swift
@objc(AEPContentCardSchemaData)
@objcMembers
public class ContentCardSchemaData: NSObject, Codable {
    /// Represents the content of the ContentCardSchemaData object.  Its value's type is determined by `contentType`.
    public let content: Any
    
    /// Determines the value type of `content`.
    public let contentType: ContentType
    
    /// Date and time this content card was published represented as epoch seconds
    public let publishedDate: Int?
    
    /// Date and time this content card will expire represented as epoch seconds
    public let expiryDate: Int?
    
    /// Dictionary containing any additional meta data for this content card
    public let meta: [String: Any]?

    ...
}
```

### Public functions

---

### getContentCard - DEPRECATED

<InlineAlert variant="warning" slots="header, text" />

Notice of deprecation

`ContentCard` class is deprecated as of `v5.2.0` (iOS) and will be removed in the next major release of the Messaging extension.

Tries to convert the `content` of this `ContentCardSchemaData` into a [`ContentCard`](./content-card.md) object.

Returns `nil` if the `contentType` is not equal to `.applicationJson` or the data in `content` is not decodable into a `ContentCard`.

#### Syntax

```swift
func getContentCard() -> ContentCard?
```

#### Example

```swift
var propositionItem: PropositionItem
if let contentCardSchemaData = propositionItem.contentCardSchemaData,
   let contentCard = contentCardSchemaData.getContentCard() {
    // do something with the ContentCard object
}
```

### track(_:withEdgeEventType:)

Tracks an interaction with the given `ContentCardSchemaData`.

#### Syntax

```swift
public func track(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType)
```

#### Parameters

* _interaction_ - a custom `String` value to be recorded in the interaction
* _eventType_ - the [`MessagingEdgeEventType`](./messaging-edge-event-type.md) to be used for the ensuing Edge Event

#### Example

```swift
var contentCardSchemaData: ContentCardSchemaData

// tracking a display
contentCardSchemaData.track(withEdgeEventType: .display)

// tracking a user interaction
contentCardSchemaData.track("itemSelected", withEdgeEventType: .interact)
```

## Android Interface

```java
public class ContentCardSchemaData implements SchemaData {
    private Object content;
    private ContentType contentType;
    private int publishedDate;
    private int expiryDate;
    private Map<String, Object> meta;

    @Override
    public Object getContent() {
        return content;
    }

    public ContentType getContentType() {
        return contentType;
    }

    public int getPublishedDate() {
        return publishedDate;
    }

    public int getExpiryDate() {
        return expiryDate;
    }

    @Nullable public Map<String, Object> getMeta() {
        return meta;
    }

    ...
}
```

### Public functions

---

### getContentCard - DEPRECATED

<InlineAlert variant="warning" slots="header, text" />

Notice of deprecation

`ContentCard` class is deprecated as of `v3.2.0` (Android) and will be removed in the next major release of the Messaging extension.

Tries to convert the `content` of this `ContentCardSchemaData` into a [`ContentCard`](./content-card.md) object.

Returns `null` if the `contentType` is not equal to `ContentType.APPLICATION_JSON` or the data in `content` is not decodable into a `ContentCard`.

#### Syntax

```java
@Nullable public ContentCard getContentCard();
```

#### Example

#### Kotlin

```kotlin
val propisitionItem: PropositionItem
val contentCardData = item?.contentCardSchemaData
val contentCard = contentCardData?.contentCard
contentCard?.let {
  // do something with the ContentCard object
}
```

#### Java

```java
PropositionItem propositionItem;
ContentCardSchemaData contentCardSchemaData = propositionItem.getContentCardSchemaData();
ContentCard contentCard = contentCardSchemaData.getContentCard();
if (contentCard != null) {
  // do something with the ContentCard object
}
```

### track

Tracks an interaction with the given `ContentCardSchemaData`.

#### Syntax

```java
public void track(final String interaction, final MessagingEdgeEventType eventType);
```

#### Parameters

* _interaction_ - a custom `String` value to be recorded in the interaction
* _eventType_ - the [`MessagingEdgeEventType`](./messaging-edge-event-type.md) to be used for the ensuing Edge Event

#### Example

#### Kotlin

```kotlin
val contentCardSchemaData = item?.contentCardSchemaData

// tracking a display
contentCardSchemaData?.track(null, MessagingEdgeEventType.DISPLAY)

// tracking a user interaction
contentCardSchemaData?.track("itemSelected", MessagingEdgeEventType.INTERACT)
```

#### Java

```java
ContentCardSchemaData contentCardSchemaData;

// tracking a display
contentCardSchemaData.track(null, MessagingEdgeEventType.DISPLAY);

// tracking a user interaction
contentCardSchemaData.track("itemSelected", MessagingEdgeEventType.INTERACT);
```
