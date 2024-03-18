---
noIndex: true
---

<Variant platform="ios" function="init" repeat="6"/>

#### Swift

**Syntax**

```swift
public init(path: String)
```

* _path_ is a string representation for the surface path.

**Example**

```swift
// Creates a surface instance representing a banner within homeView view in my mobile application.
let surface = Surface(path: "homeView#banner")
```

<Variant platform="android" function="constructor-parameterized" repeat="6"/>

#### Java

**Syntax**

```java
public Surface(final String path)
```

* _path_ is a string containing the surface path.

**Example**

```java
// Creates a surface instance representing a banner view within homeActivity in my mobile application.
final Surface surface = new Surface("homeActivity#banner")
```

<Variant platform="android" function="constructor-default" repeat="5"/>

#### Java

**Syntax**

```java
public Surface()
```

**Example**

```java
// Creates a new base surface by appending application package name to the mobile app surface prefix mobileapp://
final Surface surface = new Surface()
```

<Variant platform="android" function="get-uri" repeat="5"/>

#### Java

**Syntax**

```java
public String getUri()
```

**Example**

```java
final Surface surface = new Surface("homeActivity#banner")
final String uri = surface.getUri()
```