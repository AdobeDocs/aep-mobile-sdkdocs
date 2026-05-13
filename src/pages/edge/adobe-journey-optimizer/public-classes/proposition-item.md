---
title: PropositionItem
description: The `PropositionItem` class represents the decision proposition item received from the remote, upon a personalization query to the Experience Edge network.
keywords:
- Adobe Journey Optimizer
- Messaging
- PropositionItem
- Interface
- Android
- iOS
- Code-based Experiences
---

# PropositionItem

The `PropositionItem` class represents the decision proposition item received from the remote, upon a personalization query to the Experience Edge network.

## iOS Interface

### Public variables

#### contentCardSchemaData

Decodes and returns item data content as an [ContentCardSchemaData](content-card-schema-data.md) object.

Returns `nil` if decoding fails or if the proposition item schema is not `.contentCard`.

```swift
var contentCardSchemaData: ContentCardSchemaData?
```

#### htmlContent

Returns item data content as a string if the proposition item schema is `htmlContent`, otherwise returns `nil`.

```swift
var htmlContent: String? 
```

#### inappSchemaData

Decodes and returns item data content as an [InAppSchemaData](inapp-schema-data.md) object.

Returns `nil` if decoding fails or if the proposition item schema is not `.inApp`.

```swift
var inappSchemaData: InAppSchemaData?
```

#### itemData

Proposition item data as dictionary.

```swift
public let itemData: [String: Any]
```

#### itemId

Unique proposition item identifier.

```swift
public let itemId: String
```

#### jsonContentArray

Returns item data content as an array if it can be parsed as an array and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentArray: [Any]?
```

#### jsonContentDictionary

Returns item data content as a dictionary if it can be parsed as a dictionary and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentDictionary: [String: Any]?
```

#### schema

Proposition item schema string.

```swift
public let schema: String
```

### Public functions

#### generateInteractionXdm

Returns a dictionary containing XDM data for interaction with the given proposition item, for the provided event type.

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is an array containing the decision item tokens for recording interaction.

##### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```swift
func generateInteractionXdm(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType, forTokens tokens: [String]? = nil) -> [String: Any]?
```

#### track

Tracks interaction with the given proposition item.

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is an array containing the decision item tokens for recording interaction.

##### iOS Swift

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```swift
func track(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType, forTokens tokens: [String]? = nil)
```

## Android Interface

### Public functions

#### generateInteractionXdm

Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type.

* _eventType_ is an enum specifying event type for the interaction.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public Map<String, Object> generateInteractionXdm(@NonNull final MessagingEdgeEventType eventType)
```

#### generateInteractionXdm (with interaction and tokens)

Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type and decision item tokens.

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is a list containing the decision item tokens for recording interaction.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public Map<String, Object> generateInteractionXdm(final String interaction, @NonNull final MessagingEdgeEventType eventType, final List<String> tokens)
```

#### getContentCardSchemaData

Decodes and returns this proposition item's content schema as a [ContentCardSchemaData](content-card-schema-data.md), or `null` if decoding fails.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public ContentCardSchemaData getContentCardSchemaData()
```

#### getHtmlContent

Returns item data content as a string if the proposition item schema is `HTML_CONTENT`, otherwise returns null.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public String getHtmlContent()
```

#### getInAppSchemaData

Decodes and returns this proposition item's content schema as a [InAppSchemaData](inapp-schema-data.md), or `null` if decoding fails.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public InAppSchemaData getInAppSchemaData()
```

#### getInboxSchemaData

Decodes and returns this proposition item's content schema as an [InboxContentSchemaData](inbox-content-schema-data.md) if the schema for this proposition item is `SchemaType.INBOX`, `null` otherwise.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public InboxContentSchemaData getInboxSchemaData()
```

#### getItemData

Returns this proposition's unique identifier as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public Map<String, Object> getItemData()
```

#### getItemId

Returns this proposition item's unique identifier as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public String getItemId()
```

#### getJsonContentArrayList

Returns item data content as a list if it can be parsed as a list and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public List<Map<String, Object>> getJsonContentArrayList()
```

#### getJsonContentMap

Returns item data content as a Map if it can be parsed as a Map and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public Map<String, Object> getJsonContentMap()
```

#### getSchema

Returns this proposition item's content schema as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public SchemaType getSchema()
```

#### track

Tracks interaction with the given proposition item.

* _eventType_ is an enum specifying event type for the interaction.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public void track(@NonNull final MessagingEdgeEventType eventType)
```

#### track (with interaction and tokens)

Tracks interaction with the given proposition item for the provided decision item tokens.

* _interaction_ is a custom string value describing the interaction.
* _eventType_ is an enum specifying event type for the interaction.
* _tokens_ is a list containing the decision item tokens for recording interaction.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public void track(final String interaction, @NonNull final MessagingEdgeEventType eventType, final List<String> tokens)
```
