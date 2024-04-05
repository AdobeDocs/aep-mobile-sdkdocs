---
title: Surface
description: The `Surface` class contains the definition of an in-app message and controls its tracking via Experience Edge events.
keywords:
- Adobe Journey Optimizer
- Messaging
- Surface
- Interface
- Android
- iOS
- Code-based Experiences
---
import Tabs from './tabs/surface.md'

# Surface

The `Surface` class represents an entity for user or system interaction. It is identified by a self-describing URI which is used to fetch the decision propositions from the AJO campaigns. For example, all mobile application surface URIs start with `mobileapp://`, followed by app bundle identifier and an optional path.

## iOS Interface - Surface

`Surface` class is used to create surface instances for requesting propositions in personalization query requests.

## Public variables

### uri

Unique surface URI string.

```swift
public let uri: String
```

## Public functions

### init

Creates a new surface by appending the given surface `path` to the mobile app surface prefix.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

iOS

<Tabs query="platform=ios&function=init"/>

## Android Interface - Surface

`Surface` class is used to create surface objects for requesting propositions in personalization query requests.

## Public functions

### Parameterized Constructor

Creates a new surface by appending the given surface `path` to the mobile app surface prefix.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=constructor-parameterized"/>

### Default Constructor

Creates a new base surface by appending application package name to the mobile app surface prefix `mobileapp://`.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=constructor-default"/>

### getUri

Returns this surface's URI as a string.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="1"/>

Android

<Tabs query="platform=android&function=get-uri"/>
