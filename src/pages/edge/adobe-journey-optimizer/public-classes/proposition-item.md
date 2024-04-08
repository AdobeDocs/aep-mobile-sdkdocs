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

## iOS Interface - PropositionItem

## Public variables

### itemId

Unique proposition item identifier.

```swift
public let itemId: String
```

### itemData

Proposition item data as dictionary.

```swift
public let itemData: [String: Any]
```

### schema

Proposition item schema string.

```swift
public let schema: String
```

### htmlContent

Returns item data content as a string if the proposition item schema is `htmlContent`, otherwise returns `nil`.

```swift
var htmlContent: String? 
```

### jsonContentDictionary

Returns item data content as a dictionary if it can be parsed as a dictionary and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentDictionary: [String: Any]?
```

### jsonContentArray

Returns item data content as an array if it can be parsed as an array and if the proposition item schema is `jsonContent`, otherwise returns `nil`.

```swift
var jsonContentArray: [Any]?
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

## Android Interface - PropositionItem

## Public functions

### getItemId

Returns this proposition item's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-item-id"/>

### getItemData

Returns this proposition's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-item-data"/>

### getSchema

Returns this proposition item's content schema as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-schema"/>

### getHtmlContent

Returns item data content as a string if the proposition item schema is `HTML_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-html-content"/>

### getJsonContentMap

Returns item data content as a Map if it can be parsed as a Map and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-json-content-map"/>

### getJsonContentArrayList

Returns item data content as a list if it can be parsed as a list and if the proposition item schema is `JSON_CONTENT`, otherwise returns null.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-json-content-array-list"/>

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
