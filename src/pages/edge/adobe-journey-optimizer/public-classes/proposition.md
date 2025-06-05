---
title: Proposition
description: The `Proposition` class represents the decision propositions received from the remote, upon a personalization query request to the Experience Edge network.
keywords:
- Adobe Journey Optimizer
- Messaging
- Proposition
- Interface
- Android
- iOS
- Code-based Experiences
---
import Tabs from './tabs/proposition.md'

# Proposition

The `Proposition` class represents the decision propositions received from the remote, upon a personalization query request to the Experience Edge network.

## iOS Interface - Proposition

## Public variables

### uniqueId

Unique proposition identifier.

```swift
public let uniqueId: String
```

### scope

Scope string.

```swift
public let scope: String
```

### items

An array containing proposition decision items.

```swift
public lazy var items: [PropositionItem]
```

## Android Interface - Proposition

## Public functions

### getItems

Returns this proposition's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-items"/>

### getScope

Returns this proposition's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-scope"/>

### getUniqueId

Returns this proposition's unique identifier as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-unique-id"/>
