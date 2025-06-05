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
import Tabs from './tabs/proposition-item.md'

# PropositionItem

The `PropositionItem` class represents the decision proposition item received from the remote, upon a personalization query to the Experience Edge network.

## iOS Interface

## Public variables

### contentCardSchemaData

Decodes and returns item data content as an [ContentCardSchemaData](./content-card-schema-data.md) object.

Returns `nil` if decoding fails or if the proposition item schema is not `.contentCard`.

```swift
var contentCardSchemaData: ContentCardSchemaData?
```

### htmlContent

Returns item data content as a string if the proposition item schema is `htmlContent`, otherwise returns `nil`.

```swift
var htmlContent: String? 
```

### inappSchemaData

Decodes and returns item data content as an [InAppSchemaData](./inapp-schema-data.md) object.

Returns `nil` if decoding fails or if the proposition item schema is not `.inApp`.

```swift
var inappSchemaData: InAppSchemaData?
```

### itemData

Proposition item data as dictionary.

```swift
public let itemData: [String: Any]
```

### itemId

Unique proposition item identifier.

```swift
public let itemId: String
```

### jsonContentArray

Returns item data content as an array if it can be parsed as an array and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentArray: [Any]?
```

### jsonContentDictionary

Returns item data content as a dictionary if it can be parsed as a dictionary and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentDictionary: [String: Any]?
```

### schema

Proposition item schema string.

```swift
public let schema: String
```

## Public functions

### generateInteractionXdm

Returns a dictionary containing XDM data for interaction with the given proposition item, for the provided event type.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=generate-interaction-xdm"/>

### track

Tracks interaction with the given proposition item.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=track"/>

## Android Interface

## Public functions

### generateInteractionXdm

Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=generate-interaction-xdm"/>

### generateInteractionXdm

Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type and decision item tokens.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=generate-interaction-xdm-with-tokens"/>

### getContentCardSchemaData

Decodes and returns this proposition item's content schema as a [ContentCardSchemaData](./content-card-schema-data.md), or `null` if decoding fails.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-content-card-schema-data"/>

### getHtmlContent

Returns item data content as a string if the proposition item schema is `HTML_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-html-content"/>

### getInAppSchemaData

Decodes and returns this proposition item's content schema as a [InAppSchemaData](./inapp-schema-data.md), or `null` if decoding fails.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-inapp-schema-data"/>

### getItemData

Returns this proposition's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-item-data"/>

### getItemId

Returns this proposition item's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-item-id"/>

### getJsonContentArrayList

Returns item data content as a list if it can be parsed as a list and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-json-content-array-list"/>

### getJsonContentMap

Returns item data content as a Map if it can be parsed as a Map and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-json-content-map"/>

### getSchema

Returns this proposition item's content schema as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-schema"/>

### track

Tracks interaction with the given proposition item.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=track"/>

### track

Tracks interaction with the given proposition item for the provided decision item tokens.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=track-with-tokens"/>
