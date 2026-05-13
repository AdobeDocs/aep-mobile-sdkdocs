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

# Proposition

The `Proposition` class represents the decision propositions received from the remote, upon a personalization query request to the Experience Edge network.

## iOS Interface - Proposition

### Public variables

#### uniqueId

Unique proposition identifier.

```swift
public let uniqueId: String
```

#### scope

Scope string.

```swift
public let scope: String
```

#### items

An array containing proposition decision items.

```swift
public lazy var items: [PropositionItem]
```

## Android Interface - Proposition

### Public functions

#### getItems

Returns this proposition's unique identifier as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public List<PropositionItem> getItems()
```

#### getScope

Returns this proposition's unique identifier as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public String getScope()
```

#### getUniqueId

Returns this proposition's unique identifier as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="1" />

##### Syntax

```java
public String getUniqueId()
```
