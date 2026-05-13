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

# Surface

The `Surface` class represents an entity for user or system interaction. It is identified by a self-describing URI which is used to fetch the decision propositions from the AJO campaigns. For example, all mobile application surface URIs start with `mobileapp://`, followed by app bundle identifier and an optional path.

## iOS Interface - Surface

`Surface` class is used to create surface instances for requesting propositions in personalization query requests.

### Public variables

#### uri

Unique surface URI string.

```swift
public let uri: String
```

### Public functions

#### init

Creates a new surface by appending the given surface `path` to the mobile app surface prefix.

* _path_ is a string representation for the surface path.

##### iOS Swift

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```swift
public init(path: String)
```

##### Example

```swift
// Creates a surface instance representing a banner within homeView view in my mobile application.
let surface = Surface(path: "homeView#banner")
```

## Android Interface - Surface

`Surface` class is used to create surface objects for requesting propositions in personalization query requests.

### Public functions

#### Parameterized Constructor

Creates a new surface by appending the given surface `path` to the mobile app surface prefix.

* _path_ is a string containing the surface path.

##### Android Java

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```java
public Surface(final String path)
```

##### Example

```java
// Creates a surface instance representing a banner view within homeActivity in my mobile application.
final Surface surface = new Surface("homeActivity#banner")
```

##### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

##### Example

```kotlin
// Creates a surface instance representing a banner view within homeActivity in my mobile application.
val surface = Surface("homeActivity#banner")
```

#### Default Constructor

Creates a new base surface by appending application package name to the mobile app surface prefix `mobileapp://`.

##### Android Java

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```java
public Surface()
```

##### Example

```java
// Creates a new base surface by appending application package name to the mobile app surface prefix mobileapp://
final Surface surface = new Surface()
```

##### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

##### Example

```kotlin
// Creates a new base surface by appending application package name to the mobile app surface prefix mobileapp://
val surface = Surface()
```

#### getUri

Returns this surface's URI as a string.

##### Android Java

<CodeBlock slots="heading, code" repeat="2" />

##### Syntax

```java
public String getUri()
```

##### Example

```java
final Surface surface = new Surface("homeActivity#banner")
final String uri = surface.getUri()
```

##### Android Kotlin

<CodeBlock slots="heading, code" repeat="1" />

##### Example

```kotlin
val surface = Surface("homeActivity#banner")
val uri = surface.uri
```
